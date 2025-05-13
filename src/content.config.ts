// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const blog = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/BlogPosts",
    }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

// 3. Define your collection(s)
const arduino = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/ArduinoProjects",
    }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});


// 3. Define your collection(s)
const publication = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/Publications",
    }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});


// 3. Define your collection(s)
const til = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/ThingILearned",
    }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, arduino, publication, til };
