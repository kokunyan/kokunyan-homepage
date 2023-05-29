import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "hybrid",
  markdown: {
    drafts: true,
  },
  integrations: [
    react(),
    tailwind(),
    mdx({
      drafts: true,
    }),
    robotsTxt(),
    sitemap(),
    prefetch(),
  ],
  experimental: {
    hybridOutput: true,
  },
  adapter: vercel(),
});
