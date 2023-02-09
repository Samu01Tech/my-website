import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    large: z.boolean().optional(),
  }),
});

const blogCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    author: z.string().default("Samuele M."),
    language: z.enum(["it", "en"]),
    publishDate: z.string().transform((str) => new Date(str)),
    editDate: z.date(),
    authorContact: z.string().email(),
    canonicalURL: z.string().url(),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
