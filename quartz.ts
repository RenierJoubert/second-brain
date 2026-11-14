import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

// Folder and tag listings: folders first, then by title in natural order so
// "Lecture 2" comes before "Lecture 10". The plugins' default sorts by date
// first and leaves notes with equal dates in raw file order (1, 10, 11, 2, …).
// `sort` is a function, so it can't go in quartz.config.yaml; these calls must
// come before loadQuartzConfig().
type Sortable = { slug?: string; frontmatter?: { title?: string } }
const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" })
const isFolder = (slug = "") => slug === "index" || slug.endsWith("/index")
const naturalFolderFirst = (f1: Sortable, f2: Sortable) => {
  const folderDiff = Number(isFolder(f2.slug)) - Number(isFolder(f1.slug))
  if (folderDiff !== 0) return folderDiff
  return collator.compare(f1.frontmatter?.title ?? "", f2.frontmatter?.title ?? "")
}
ExternalPlugin.FolderPage({ sort: naturalFolderFirst })
ExternalPlugin.TagPage({ sort: naturalFolderFirst })

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
