import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date(),
		relatedTool: z.object({ label: z.string(), href: z.string() }),
	}),
});

export const collections = { blog };
