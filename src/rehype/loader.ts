import { readFileSync } from "node:fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import type { VFile } from "node_modules/remark-rehype/lib";

export default async function (file: string): Promise<
  | {
      preview: string;
      markup: VFile;
    }[]
  | null
> {
  try {
    const codes = readFileSync(`src/rehype/${file}.html`, "utf-8")
      .split("<!-- split -->")
      .map((a) => a.trim());

    return await Promise.all(
      codes.map(async (code, a) => {
        const markup: VFile = await unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypePrettyCode, {
            theme: JSON.parse(
              readFileSync("src/rehype/blackout.json", "utf-8"),
            ),
          })
          .use(rehypeStringify)
          .process("```html\n" + codes[a] + "\n```");

        return {
          preview: code.replace(
            /{%isodate%}/g,
            new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
              .toISOString()
              .replace(/\.\d+Z/, "+00:00"),
          ),
          markup: markup,
        };
      }),
    );
  } catch {}

  return null;
}
