import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://kokunyan-blog.vercel.app",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.mdx")),
    customData: `<language>en-us</language>`,
  });
}
