import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
  },
  integrations: [
    react(),
    tailwind(),
    image(),
    mdx({
      drafts: true,
    }),
    robotsTxt(),
    sitemap(),
    prefetch(),
  ],
  experimental: {
    assets: true,
  },
});
