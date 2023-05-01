import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import prefetch from "@astrojs/prefetch";


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), image(), mdx(), robotsTxt(), sitemap(), prefetch()],
  adapter: vercel(),
  output: "server"
});