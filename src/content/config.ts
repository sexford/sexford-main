import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    categories: z.array(z.string()).default(['others']),
    tags: z.array(z.string()).default(['others']),
    authors: z.array(z.string()).default(['Sexford_Street']),
    video: z.string().optional(),
    imageId: z.string().optional(),
    OgImagePath: z.string().optional(),
    // twitter_title: z.string(),
  }),
});

export const collections = { blog };
