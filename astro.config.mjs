import { defineConfig } from "astro/config";
import { readFileSync } from "node:fs";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeClassNames from "rehype-class-names";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: JSON.parse(readFileSync("src/rehype/blackout.json")),
        },
      ],
      [
        rehypeClassNames,
        {
          a: "uk-link",
          h1: "uk-h1",
          h2: "uk-h2 uk-margin-medium",
          h3: "uk-h3 uk-margin-medium",
          h4: "uk-h4 uk-margin-medium",
          p: "uk-paragraph",
          table: "uk-margin uk-table uk-table-responsive uk-table-divider",
          ul: "uk-margin uk-list uk-list-bullet",
        },
      ],
    ],
  },
  output: "static",
  compressHTML: true,
});
