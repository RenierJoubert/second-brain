import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/renierjoubert",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs({
        spacerSymbol: "❯",
        rootName: "Home",
        resolveFrontmatterTitle: true,
        showCurrentPage: true,
      }),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.Spacer(),
    Component.Search(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.Graph(),
  ],
  right: [
    Component.Backlinks(),
    Component.DesktopOnly(
      Component.Explorer({
        title: "Explore",
        useSavedState: true,
      }),
    ),
    Component.MobileOnly(
      Component.Explorer({
        title: "Explore",
        useSavedState: true,
      }),
    ),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
      spacerSymbol: "❯",
      rootName: "Home",
      resolveFrontmatterTitle: true,
      showCurrentPage: true,
    }),
    Component.Search(),
    Component.ArticleTitle(),
  ],
  left: [Component.MobileOnly(Component.Spacer())],
  right: [],
}