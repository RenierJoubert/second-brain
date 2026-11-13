import { execFileSync } from "node:child_process"
import { readFileSync } from "node:fs"
import fs from "node:fs/promises"
import path from "node:path"

// A day-by-day strip of the site's activity on the homepage. A note is "new" on
// the day it was first committed and "updated" on each later day a commit
// touched it. A `created:` or `date:` in a note's frontmatter overrides the
// creation day.
//
// Adapted from ewan.my's ewan-timeline plugin (github.com/Gassandrid/ewan.my,
// MIT), which takes its dates from frontmatter and daily-note links instead of
// git. The drawing and interaction code in client.js is his.
//
// Git history must be complete where the site is built: a shallow clone (the
// Cloudflare Pages default) makes every note look new on the clone's one day.
// Run `git fetch --unshallow` before building there.

export const DATA_PATH = "static/note-timeline.json"
const CLIENT = readFileSync(new URL("./client.js", import.meta.url), "utf8")
const CSS = readFileSync(new URL("./style.css", import.meta.url), "utf8")

const listed = (slug) =>
  slug && slug !== "index" && !slug.endsWith("/index") && !slug.startsWith("tags/")

const toPosix = (p) => p.split(path.sep).join("/")

export function isoDay(value) {
  if (value instanceof Date) return Number.isNaN(+value) ? null : value.toISOString().slice(0, 10)
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(value ?? ""))
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null
}

function git(cwd, args) {
  return execFileSync("git", ["-c", "core.quotePath=false", ...args], {
    cwd,
    encoding: "utf8",
    maxBuffer: 256 * 1024 * 1024,
    stdio: ["ignore", "pipe", "ignore"],
  })
}

// Every non-merge commit that touched the content folder, newest first, as
// { day, changes: [[status, fromPath, toPath]] } with repo-relative paths.
// --all reads every branch, so history from before a branch switch (your notes'
// history lives on main while v5 is being set up) still counts.
export function readHistory(contentDir) {
  const dir = path.resolve(contentDir)
  let root
  try {
    root = git(dir, ["rev-parse", "--show-toplevel"]).trim()
  } catch {
    return null // not a git checkout
  }
  const scope = toPosix(path.relative(root, dir)) || "."
  const out = git(root, [
    "log",
    "--all",
    "-z",
    "-M",
    "--date=short",
    "--format=%x01%ad",
    "--name-status",
    "--",
    scope,
  ])
  const commits = []
  let current = null
  const tokens = out.split("\0")
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i].replace(/^\n+/, "")
    if (!token) continue
    if (token.startsWith("\x01")) {
      current = { day: token.slice(1).trim(), changes: [] }
      commits.push(current)
      continue
    }
    if (!current) continue
    const status = token[0]
    if (status === "R" || status === "C") current.changes.push([status, tokens[++i], tokens[++i]])
    else current.changes.push([status, null, tokens[++i]])
  }
  return { root, commits }
}

// { notes: [[slug, title]], events: [[day, kind (0 new, 1 update), note]] }
export function timelineData(files, history) {
  const notes = []
  const declared = []
  const byPath = new Map()
  for (const data of files) {
    if (!listed(data?.slug) || !data.filePath) continue
    const note =
      notes.push([data.slug, String(data.frontmatter?.title ?? data.slug.split("/").pop())]) - 1
    declared[note] = isoDay(data.frontmatter?.created ?? data.frontmatter?.date)
    if (history) byPath.set(toPosix(path.relative(history.root, path.resolve(data.filePath))), note)
  }

  // Walk newest to oldest. A rename points the old path at the note's current
  // path, so the note's earlier commits under its old name still count.
  const renamed = new Map()
  const resolve = (p) => {
    for (let hops = 0; renamed.has(p) && hops < 64; hops++) p = renamed.get(p)
    return p
  }
  const days = new Map()
  const added = new Map()
  for (const { day, changes } of history?.commits ?? []) {
    for (const [status, from, to] of changes) {
      const now = resolve(to)
      if (status === "R") renamed.set(from, now)
      if (status === "D") continue
      const note = byPath.get(now)
      if (note === undefined) continue
      if (!days.has(note)) days.set(note, new Set())
      days.get(note).add(day)
      if (status === "A" || status === "C") added.set(note, day) // oldest wins
    }
  }

  const events = []
  for (let note = 0; note < notes.length; note++) {
    const committed = [...(days.get(note) ?? [])].sort()
    const created = declared[note] ?? added.get(note) ?? committed[0]
    if (!created) continue // never committed and no date in its frontmatter
    events.push([created, 0, note])
    for (const day of committed) if (day > created) events.push([day, 1, note])
  }
  events.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : a[1] - b[1]))

  // Drop notes with no events and renumber, to keep the file small.
  const used = [...new Set(events.map((e) => e[2]))].sort((a, b) => a - b)
  const index = new Map(used.map((old, i) => [old, i]))
  return {
    notes: used.map((old) => notes[old]),
    events: events.map(([day, kind, note]) => [day, kind, index.get(note)]),
  }
}

const hasClass = (node, name) => {
  const c = node.properties?.className
  return Array.isArray(c) ? c.includes(name) : String(c ?? "").split(/\s+/).includes(name)
}

function findMount(node) {
  if (node.type === "element" && hasClass(node, "note-timeline")) return node
  for (const child of node.children ?? []) {
    const found = findMount(child)
    if (found) return found
  }
  return null
}

// The strip goes where content/index.md has <div class="note-timeline"></div>,
// or at the end of the page if there is none.
export function placeMount(tree) {
  const src = `./${DATA_PATH}`
  const mount = findMount(tree)
  if (mount) {
    mount.properties.dataSrc = src
    mount.children = []
    return
  }
  ;(tree.children ??= []).push({
    type: "element",
    tagName: "div",
    properties: { className: ["note-timeline"], dataSrc: src },
    children: [],
  })
}

export default function NoteTimeline() {
  return {
    name: "NoteTimeline",
    htmlPlugins() {
      return [
        () => (tree, file) => {
          if (file.data.slug === "index") placeMount(tree)
        },
      ]
    },
    externalResources() {
      return {
        css: [{ content: CSS, inline: true }],
        js: [
          { script: CLIENT, loadTime: "afterDOMReady", contentType: "inline", spaPreserve: true },
        ],
      }
    },
    async *emit(ctx, content) {
      const history = readHistory(ctx.argv.directory)
      const data = timelineData(
        content.map(([, file]) => file.data),
        history,
      )
      const outfile = path.join(ctx.argv.output, DATA_PATH)
      await fs.mkdir(path.dirname(outfile), { recursive: true })
      await fs.writeFile(outfile, JSON.stringify(data))
      yield outfile
    },
  }
}
