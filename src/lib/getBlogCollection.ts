import { getCollection } from "astro:content";

const SITE_URL = "https://kokunin.ru"
const collection = "posts";

export default async () => {
  const posts = await getCollection(collection);

  return posts.map((post) => ({
    ...post,
    data: {
      ...post.data,
      ogImage: `${SITE_URL}/og/${collection}/${post.slug}.png`,
    },
  }));
};