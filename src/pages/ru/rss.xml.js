import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Bogdan Kokunin | Blog",
    description: "My Personal Site",
    site: "https://kokunin.ru",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.mdx")),
    customData: `<language>en-us</language>`,
  });
}
