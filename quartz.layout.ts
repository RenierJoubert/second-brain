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
      LinkedIn: "https://www.linkedin.com/in/renier-joubert/",
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
    Component.ConditionalRender({
      component: Component.Search(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.MobileOnly(Component.Graph()),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  left: [
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.Graph()),
      condition: (page) => page.fileData.slug !== "index",
    }),
    // Mobile non-index: hamburger in left sidebar (uses native Quartz sticky overlay)
    Component.ConditionalRender({
      component: Component.MobileOnly(Component.Explorer({
        title: "Explore",
        useSavedState: true,
      })),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  right: [
    Component.Backlinks(),
    // Desktop: always-visible tree explorer in right sidebar
    Component.DesktopOnly(Component.Explorer({
      title: "Explore",
      useSavedState: true,
    })),
    // Mobile index page only: inline explorer below bio (positioned via CSS)
    Component.ConditionalRender({
      component: Component.MobileOnly(Component.Explorer({
        title: "Explore",
        useSavedState: true,
      })),
      condition: (page) => page.fileData.slug === "index",
    }),
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
  left: [
    // Mobile: hamburger in left sidebar
    Component.MobileOnly(Component.Explorer({
      title: "Explore",
      useSavedState: true,
    })),
  ],
  right: [
    // Desktop: always-visible tree explorer in right sidebar
    Component.DesktopOnly(Component.Explorer({
      title: "Explore",
      useSavedState: true,
    })),
  ],
}
