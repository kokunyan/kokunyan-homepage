import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  markdown: {
    drafts: true
  },
  site: 'https://kokunin.ru',
  integrations: [react(), tailwind(), mdx({
    drafts: true
  }), robotsTxt({
    host: 'kokunin.ru'
  }), sitemap(), prefetch()],
  experimental: {
    hybridOutput: true
  },
  adapter: vercel()
});