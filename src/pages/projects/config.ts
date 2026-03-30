import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.string(),
    id: z.string().optional(),
    status: z.string().optional(),
  }),
});

export const collections = { projects };