import { z, defineCollection } from "astro:content";

const docs = defineCollection({
  type: "content",
  schema: z.object({
    group: z.string(),
    order: z.optional(z.number()),
    name: z.string(),
    title: z.string(),
    meta: z.optional(z.record(z.string())),
    javascript: z.union([
      z.literal("full"),
      z.literal("partial"),
      z.literal("none"),
    ]),
    icon: z.optional(z.string()),
  }),
});

export const collections = {
  docs: docs,
};
