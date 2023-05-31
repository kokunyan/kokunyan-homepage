// src/pages/og/[...route].ts
import { OGImageRoute } from "astro-og-canvas";

const directory = "src/content";

// Import all pages from the content directory
const rawPages = import.meta.glob(`${directory}/**/*.md`, { eager: true });

// Remove the /src/content prefix from the paths
const pages = Object.entries(rawPages).reduce(
  (acc, [path, page]) => ({ ...acc, [path.replace(directory, "")]: page }),
  {}
);

export const { getStaticPaths, get } = OGImageRoute({
  // Set the name of the dynamic route segment here it’s `route`,
  // because the file is named `[...route].ts`.
  param: "route",

  // Provide our pages object here
  pages,

  // For each page, this callback will be used to
  // customize the OpenGraph image.
  getImageOptions: (path, page) => ({
    title: page.frontmatter.title,
    description: page.frontmatter.description,
  }),
});