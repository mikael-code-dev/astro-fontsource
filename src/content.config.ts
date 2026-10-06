import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 1. Generic collection for articles / blog posts (.md / .mdx)
const article = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/article' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Editorial Team'),
    draft: z.boolean().optional().default(false),
  }),
});

// Export collections so Astro can find them
export const collections = { article };
