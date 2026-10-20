import { QuartzTransformerPlugin } from "../types"

// Obsidian lets lines inside a `$$` block in a callout skip the `>` prefix:
//
//   > [!theorem] Proof
//   >$$
//    L - \varepsilon < g(x)
//   >$$
//
// Quartz's markdown parser follows CommonMark, which ends the callout at the first
// line without `>`. The math block and everything after it then render as garbage.
// This puts the missing `>` back before parsing. Note files on disk are untouched.

const quotePrefixRegex = /^[ \t]*(?:>[ \t]?)+/
const codeFenceRegex = /^ {0,3}(`{3,}|~{3,})/

export function fixCalloutMath(src: string): string {
  const lines = src.split("\n")
  let i = 0

  // skip YAML frontmatter
  if (lines[0]?.trim() === "---") {
    const end = lines.findIndex((line, idx) => idx > 0 && line.trim() === "---")
    if (end > 0) i = end + 1
  }

  // leave `$$` examples inside top-level code blocks alone
  let codeFence: string | null = null

  for (; i < lines.length; i++) {
    const line = lines[i]
    const prefix = line.match(quotePrefixRegex)?.[0]

    if (!prefix) {
      const fence = line.match(codeFenceRegex)?.[1]
      if (codeFence === null) {
        if (fence) codeFence = fence
      } else if (
        fence &&
        fence[0] === codeFence[0] &&
        fence.length >= codeFence.length &&
        line.trim() === fence
      ) {
        codeFence = null
      }
      continue
    }
    if (codeFence !== null) continue

    // only a line that opens a block, not a one-line `$$ x $$`
    const rest = line.slice(prefix.length).trim()
    if (!rest.startsWith("$$") || rest.split("$$").length !== 2) continue

    // find the closing `$$`; give up at a blank line, since that ends the callout in Obsidian too
    let close = -1
    for (let j = i + 1; j < lines.length; j++) {
      if (lines[j].trim() === "") break
      if (lines[j].includes("$$")) {
        close = j
        break
      }
    }
    if (close === -1) continue

    for (let j = i + 1; j <= close; j++) {
      if (!quotePrefixRegex.test(lines[j])) lines[j] = prefix + lines[j]
    }
    i = close
  }

  return lines.join("\n")
}

export const CalloutMath: QuartzTransformerPlugin = () => {
  return {
    name: "CalloutMath",
    textTransform(_ctx, src) {
      return fixCalloutMath(src)
    },
  }
}
