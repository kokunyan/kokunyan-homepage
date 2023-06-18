import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        accent: z.string(),
        pubDate: z.date(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
    }),
})

const worksCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        accent: z.string(),
        pubDate: z.date(),
        art: z.boolean(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
    }),
})

export const collections = {
    posts: postsCollection,
    works: worksCollection,
}
