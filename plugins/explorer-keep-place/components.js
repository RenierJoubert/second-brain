import { Explorer as CommunityExplorer } from "@quartz-community/explorer/components"

// On a first visit the community explorer reveals the current note with
// element.scrollIntoView(), which scrolls every scrollable ancestor, not just
// the explorer list. That moves the whole page: down to the note's place in the
// list on desktop, and sideways towards the off-screen menu on phones. This
// scrolls only the list. Same fix as ewan.my's ewan-explorer plugin.
const REVEAL =
  /if\((\w+)\)(\w+)\.scrollTop=parseInt\(\1,10\);else\{let (\w+)=\2\.querySelector\("\.active"\);\3&&\3\.scrollIntoView\(\{behavior:"smooth"\}\)\}/g

export function keepPlace(script) {
  // Fail the build, rather than silently doing nothing, if an explorer update
  // changes the code this patches.
  if ([...script.matchAll(REVEAL)].length !== 1) {
    throw new Error(
      "explorer-keep-place: the community explorer's script changed; update the patch",
    )
  }
  return script.replace(
    REVEAL,
    (_, saved, list, active) =>
      `if(${saved})${list}.scrollTop=parseInt(${saved},10);` +
      `else{let ${active}=${list}.querySelector(".active");` +
      `${active}&&${list}.scrollTo({top:${list}.scrollTop+${active}.getBoundingClientRect().top-${list}.getBoundingClientRect().top,behavior:"smooth"})}`,
  )
}

export function Explorer(options) {
  const component = CommunityExplorer(options)
  component.afterDOMLoaded = keepPlace(component.afterDOMLoaded)
  return component
}
