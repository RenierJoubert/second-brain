<%*
const url = await tp.system.prompt("Paste YouTube URL");

// Extract video ID
let videoId = "";
if (url.includes("youtu.be/")) {
  videoId = url.split("youtu.be/")[1].split("?")[0];
} else if (url.includes("v=")) {
  videoId = url.split("v=")[1].split("&")[0];
}

// Fetch metadata from oEmbed (no API key needed)
const res = await fetch(`https://www.youtube.com/oembed?url=${url}&format=json`);
const data = await res.json();

const title = data.title;
const creator = data.author_name;
const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

// Rename file automatically
await tp.file.rename(title);

// Output frontmatter
tR += `---
title: "${title}"
creator: "${creator}"
videoId: "${videoId}"
thumbnail: "${thumbnail}"
url: "${url}"
category: Video
---

<iframe width="100%" height="400"
src="https://www.youtube.com/embed/${videoId}"
frameborder="0"
allowfullscreen></iframe>
`;
%>
