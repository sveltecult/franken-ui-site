---
group: getting-started
order: 6
name: tailwind.config.js 
title: tailwind.config.js
meta:
    robots: noindex
javascript: none
---

# tailwind.config.js

<p class="mt-2 text-xl text-muted-foreground">Configuration for your project.</p>

Some components are dependent on other components. So, to ensure a seamless development experience and avoid common issues such as missing classes, malfunctioning components, or SVGs displaying incorrect colors, and etc, we provide you with the `tailwind.config.js` used by this documentation site.

Feel free to adjust this according to your needs.

Please note that this may be updated periodically. For the most recent version, please refer to the [documentation repository](https://github.com/sveltecult/franken-ui-site/blob/master/tailwind.config.js) to get the latest configuration.

```javascript
import preset from "franken-ui/shadcn-ui/preset";
import variables from "franken-ui/shadcn-ui/variables";
import ui from "franken-ui";
import hooks from "franken-ui/shadcn-ui/hooks";

const shadcn = hooks();

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
    "./md/**/*.md",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [
    variables(),
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
        //   media: false,
        // },
        // background: {
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
        //   media: false,
        // },
        // comment: {
        //   media: false,
        // },
        // container: {
        //   media: false,
        // },
        countdown: {
          media: true,
        },
        cover: {},
        // "description-list": {},
        divider: {
          hooks: shadcn.divider,
        },
        dotnav: {
          hooks: shadcn.dotnav,
        },
        drop: {},
        dropbar: {
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
        //   media: false,
        // },
        // heading: {
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
        // link: {},
        // list: {},
        // margin: {
        //   media: false,
        // },
        // marker: {},
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
        // search: {},
        // section: {
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
          media: false,
        },
        thumbnav: {},
        // tile: {
        //   media: false,
        // },
        tooltip: {
          hooks: shadcn.tooltip,
        },
        totop: {},
        transition: {},
        utility: {},
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