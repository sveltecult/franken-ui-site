---
group: getting-started
order: 4
name: Optimization
title: Tailwind CSS Optimization
meta:
    description: Learn how to optimize for production, remove unused classes and eliminate duplicated rules using PostCSS.
javascript: none
---

# Tailwind CSS Optimization

<p class="mt-2 uk-text-lead">
  Learn how to optimize for production, remove unused classes and eliminate duplicated rules using PostCSS.
</p>

## Remove unused CSS

To begin, specify the types of files on your `tailwind.config.js` that should be searched for when purging CSS:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
};
```

This configuration tells Purge CSS to search for CSS classes used in HTML, Vue, and JSX files within the `src` directory. Unused classes will be removed during the build process, resulting in a more optimized CSS output.

## Picking components

Choosing only the necessary components can significantly reduce the number of Tailwind CSS classes generated. Additionally, you can optimize further by setting the media option to false, which excludes all media queries from the final CSS output.

However, some components rely on others. To ensure a smooth development experience and avoid common issues like missing classes, malfunctioning components, or incorrect SVG colors, we provide a sample `tailwind.config.js`.

Use this as your base, adjust it according to your needs and start by commenting out components you don't need. We recommend doing this one by one to ensure that other parts of your application are not affected.

```javascript
import preset from "franken-ui/shadcn-ui/preset";
import variables from "franken-ui/shadcn-ui/variables";
import ui from "franken-ui";
import hooks from "franken-ui/shadcn-ui/hooks";

const shadcn = hooks({
  theme: "zinc",
});

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  safelist: [
    {
      pattern: /^uk-/,
    },
  ],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    variables({
      theme: "zinc",
    }),
    ui({
      components: {
        accordion: {
          hooks: shadcn.accordion,
        },
        alert: {
          hooks: shadcn.alert,
        },
        // align: {
        //   media: false,
        // },
        animation: {},
        // article: {
        //   hooks: shadcn.article,
        //   media: false,
        // },
        // background: {
        //   hooks: shadcn.background,
        //   media: false,
        // },
        badge: {
          hooks: shadcn.badge,
        },
        breadcrumb: {
          hooks: shadcn.breadcrumb,
        },
        button: {
          hooks: shadcn.button,
        },
        card: {
          hooks: shadcn.card,
          media: false,
        },
        close: {
          hooks: shadcn.close,
        },
        // column: {
        //   hooks: shadcn.column,
        //   media: false,
        // },
        // comment: {
        //   hooks: shadcn.comment,
        //   media: false,
        // },
        // container: {
        //   media: false,
        // },
        countdown: {
          media: true,
        },
        cover: {},
        // "description-list": {
        //   hooks: shadcn["description-list"],
        // },
        divider: {
          hooks: shadcn.divider,
        },
        dotnav: {
          hooks: shadcn.dotnav,
        },
        drop: {},
        dropbar: {
          hooks: shadcn.dropbar,
          media: false,
        },
        dropdown: {
          hooks: shadcn.dropdown,
          media: false,
        },
        dropnav: {},
        // flex: {
        //   media: false,
        // },
        "form-range": {
          hooks: shadcn["form-range"],
        },
        form: {
          hooks: shadcn.form,
          media: false,
        },
        // grid: {
        //   hooks: shadcn.grid,
        //   media: false,
        // },
        // heading: {
        //   hooks: shadcn.heading,
        //   media: false,
        // },
        // height: {},
        icon: {
          hooks: shadcn.icon,
        },
        iconnav: {
          hooks: shadcn.iconnav,
        },
        label: {
          hooks: shadcn.label,
        },
        leader: {},
        lightbox: {},
        // link: {
        //   hooks: shadcn.link,
        // },
        // list: {
        //   hooks: shadcn.list,
        // },
        // margin: {
        //   media: false,
        // },
        // marker: {
        //   hooks: shadcn.marker,
        // },
        modal: {
          hooks: shadcn.modal,
          media: false,
        },
        nav: {
          hooks: shadcn.nav,
        },
        navbar: {
          hooks: shadcn.navbar,
          media: false,
        },
        notification: {
          hooks: shadcn.notification,
          media: true,
        },
        offcanvas: {
          hooks: shadcn.offcanvas,
          media: false,
        },
        overlay: {},
        // padding: {
        //   media: false,
        // },
        pagination: {
          hooks: shadcn.pagination,
        },
        placeholder: {
          hooks: shadcn.placeholder,
        },
        position: {
          media: false,
        },
        progress: {
          hooks: shadcn.progress,
        },
        // search: {
        //   hooks: shadcn.search,
        // },
        // section: {
        //   hooks: shadcn.section,
        //   media: false,
        // },
        slidenav: {
          hooks: shadcn.slidenav,
        },
        slider: {},
        slideshow: {},
        sortable: {},
        spinner: {},
        sticky: {},
        subnav: {
          hooks: shadcn.subnav,
        },
        svg: {},
        switcher: {},
        tab: {
          hooks: shadcn.tab,
        },
        table: {
          hooks: shadcn.table,
          media: true,
        },
        text: {
          hooks: shadcn.text,
          media: false,
        },
        thumbnav: {},
        // tile: {
        //   hooks: shadcn.tile,
        //   media: false,
        // },
        tooltip: {
          hooks: shadcn.tooltip,
        },
        totop: {},
        transition: {},
        utility: {
          hooks: shadcn.utility,
        },
        visibility: {
          media: false,
        },
        // width: {
        //   media: false,
        // },
        print: {},
      },
    }),
  ],
};
```

## Fixing media queries

When combining two different frameworks like UIkit and Tailwind CSS, clashes can occur, especially with media queries. To resolve conflicts and ensure proper sorting of media queries, you can use the `postcss-sort-media-queries` plugin.

First, install the plugin:

```sh
npm install postcss-sort-media-queries
```

Then, update your `postcss.config.cjs` file to include the plugin:

```javascript
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-sort-media-queries")(),
  ],
};
```
By default, all components in Franken UI have their media option set to `false`, and it's recommended to use Tailwind CSS media queries instead. However, the `media` option is provided for compatibility purposes, allowing you to use UIkit's media queries if necessary.

## Removing duplicated rules

Finally, to further optimize your CSS bundle and reduce file size, you can use the `postcss-combine-duplicated-selectors` plugin to remove duplicated rules. This plugin will merge selectors that have the same properties, helping to streamline your CSS output.


```sh
npm install postcss-combine-duplicated-selectors
```

Then, update your PostCSS configuration to include the plugin:

```javascript
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-sort-media-queries")(),
    require("postcss-combine-duplicated-selectors")({
      removeDuplicatedProperties: true,
    }),
  ],
};
```
With this setup, your build process will remove unused CSS classes and duplicated rules, resulting in a smaller and more efficient CSS file.

For advanced users, exploring [hooks](hooks.md) offers a deeper understanding of how to override styles globally. While you can always rely on Tailwind CSS utility classes, hooks provide an alternative approach that can further reduce CSS file sizes and prevent the cluttering of your HTML with utility classes.