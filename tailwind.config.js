import preset from "franken-ui/shadcn-ui/preset";
import variables from "franken-ui/shadcn-ui/variables";
import ui from "franken-ui";
import hooks from "franken-ui/shadcn-ui/hooks";

const shadcn = hooks();

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  safelist: [
    "uk-animation-slide-top",
    "uk-animation-reversed",

    "uk-drop",

    "uk-flex",

    "uk-leader-fill",

    "uk-lightbox",
    "uk-lightbox-page",
    "uk-lightbox-items",
    "uk-lightbox-toolbar",
    "uk-lightbox-toolbar-icon",
    "uk-lightbox-button",
    "uk-lightbox-caption",
    "uk-lightbox-iframe",

    "uk-notification",
    "uk-notification-top-right",
    "uk-notification-bottom-right",
    "uk-notification-top-center",
    "uk-notification-bottom-center",
    "uk-notification-bottom-left",
    "uk-notification-message",
    "uk-notification-close",
    "uk-notification-message-primary",
    "uk-notification-message-success",
    "uk-notification-message-warning",
    "uk-notification-message-danger",

    "uk-offcanvas-overlay",
    "uk-offcanvas-container",
    "uk-offcanvas-reveal",
    "uk-offcanvas-container-animation",
    "uk-offcanvas-bar-animation",
  ],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./md/**/*.md",
  ],
  theme: {
    extend: {},
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
        placeholder: {},
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
        slidenav: {},
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
        // text: {
        //   media: false,
        // },
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
