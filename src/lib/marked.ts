import { Marked } from "marked";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import shell from "highlight.js/lib/languages/shell";
import css from "highlight.js/lib/languages/css";
import json from "highlight.js/lib/languages/json";
import GithubSlugger from "github-slugger";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("sh", shell);
hljs.registerLanguage("css", css);
hljs.registerLanguage("json", json);

export default async function (md: string) {
  if (md.includes("{%isodate%}")) {
    md = md.replace(
      /{%isodate%}/g,
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .replace(/\.\d+Z/, "+00:00"),
    );
  }

  const tbc: { title: string; slug: string }[] = [];

  const html = await new Marked({
    renderer: {
      code: (code, lang = "xml") => {
        if (lang === "example") {
          return `
          <div class="mt-12 relative">
          <ul uk-tab="swiping: false">
            <li><a href="#">Preview</a></li>
            <li><a href="#">Markup</a></li>
          </ul>
  
          <a
            class="copy"
            uk-tooltip="Copy to Clipboard"
            role="button"
            aria-label="Copy to Clipboard"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-copy"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><path d="M16 4h2a2 2 0 0 1 2 2v4"/><path d="M21 14H11"/><path d="m15 10-4 4 4 4"/></svg>
          </a>
  
          <ul class="mt-6 uk-switcher">
            <li>
              ${code}
            </li>
            <li class="border border-border overflow-x-auto font-geist-mono hljs rounded-md">
              <pre class="p-4"><code>${
                hljs.highlight(code, {
                  language: "xml",
                }).value
              }</code></pre>
            </li>
          </ul>
        </div>
          `;
        }

        if (lang === "render") {
          return code;
        }

        return `<div class="mt-6 border border-border overflow-x-auto font-geist-mono hljs rounded-md"><pre class="p-4"><code>${hljs.highlight(code, { language: lang }).value}</code></pre></div>`;
      },

      codespan: (text) => {
        return `<code class="uk-codespan font-geist-mono">${text}</code>`;
      },

      heading: (text, level) => {
        if (level === 1) {
          return `<h1 class="uk-h1">${text}</h1>`;
        }

        if (level === 2) {
          const slugger = new GithubSlugger();
          const slug = slugger.slug(
            text.replaceAll(/<(\w+)>(.*?)<\/\1>/g, "$2"),
          );

          tbc.push({
            title: text,
            slug: slug,
          });

          return `<h2 class="mt-12 uk-h2" id="${slug}">${text}</h2>`;
        }

        if (level === 3) {
          return `<h3 class="mt-12 uk-h3">${text}</h3>`;
        }

        if (level === 4) {
          return `<h4 class="mt-12 uk-h4">${text}</h4>`;
        }

        return `<h${level}>${text}</h${level}>`;
      },

      hr: () => '<hr class="uk-margin-large">',

      link: (href, title, text) => {
        if (/\.md$/.test(href)) {
          return `<a class="uk-link" href="/docs/${href.replace(".md", "")}" ${title ? ` title="${title}" ` : ""}>${text}</a>`;
        }

        return `<a class="uk-link" href="${href}" ${title ? ` title="${title}" ` : ""}>${text}</a>`;
      },

      list: (text) => {
        return `<ul class="mt-6 uk-list uk-list-bullet">${text}</ul>`;
      },

      paragraph: (text) => {
        return `<p class="uk-paragraph">${text}</p>`;
      },

      table: (header, body) => {
        return `<div class="mt-6 uk-overflow-auto"><table class="uk-table uk-table-divider"><thead>${header.replaceAll("<th>", '<th class="p-2">')}</thead><tbody>${body.replaceAll("<td>", '<td class="p-2">')}</tbody></table></div>`;
      },
    },
  }).parse(md, { async: true });

  return {
    html: html,
    tbc: tbc,
  };
}
