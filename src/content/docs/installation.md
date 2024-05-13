---
group: getting-started
order: 2
name: Installation
title: Franken UI Installation
meta:
    description: Learn how to install and integrate Franken UI in your projects.
javascript: none
---

# Franken UI Installation

<p class="mt-2 uk-text-lead">Learn how to install and integrate Franken UI in your projects.</p>

## Franken UI Templates

Supercharge your development by using minimally pre-configured templates below, so you can start coding right away. If your stack is not listed, you can follow CDN or NPM installation below.

- [Astro](https://github.com/sveltecult/franken-ui-template-astro/)
- [Laravel (Blade)](https://github.com/sveltecult/franken-ui-template-laravel/)

## CDN Installation

<span class="uk-badge uk-badge-danger">v0.0.11</span> The simplest installation can be done using CDN. Choose only one of 12 styles available. Do not include two styles at once.

```html
<link rel="stylesheet" href="https://unpkg.com/franken-ui-releases@0.0.11/dist/default.min.css" />
<link rel="stylesheet" href="https://unpkg.com/franken-ui-releases@0.0.11/dist/slate.min.css" />
<link rel="stylesheet" href="https://unpkg.com/franken-ui-releases@0.0.11/dist/stone.min.css" />
<link rel="stylesheet" href="https://unpkg.com/franken-ui-releases@0.0.11/dist/gray.min.css" />
<link rel="stylesheet" href="https://unpkg.com/franken-ui-releases@0.0.11/dist/neutral.min.css" />
<link rel="stylesheet" href="https://unpkg.com/franken-ui-releases@0.0.11/dist/red.min.css" />
<link rel="stylesheet" href="https://unpkg.com/franken-ui-releases@0.0.11/dist/rose.min.css" />
<link rel="stylesheet" href="https://unpkg.com/franken-ui-releases@0.0.11/dist/orange.min.css" />
<link rel="stylesheet" href="https://unpkg.com/franken-ui-releases@0.0.11/dist/green.min.css" />
<link rel="stylesheet" href="https://unpkg.com/franken-ui-releases@0.0.11/dist/blue.min.css" />
<link rel="stylesheet" href="https://unpkg.com/franken-ui-releases@0.0.11/dist/yellow.min.css" />
<link rel="stylesheet" href="https://unpkg.com/franken-ui-releases@0.0.11/dist/violet.min.css" />
```

<span class="uk-badge uk-badge-danger">Important</span> The documentation is currently tailored for "franken-ui-as-a-tailwind-css-plugin". If you are not using Tailwind CSS, please be patient as I'm constantly updating the documentation. Copying and pasting directly may not work as expected.

## Via NPM

You can skip 1 and 2 and proceed to 3 if you prefer the CDN installation.

Because Franken UI is a Tailwind CSS plugin, it can be included into any existing Tailwind CSS project. To get started, you first need to make sure that you have a [working Tailwind CSS project](https://tailwindcss.com/docs/installation) installed and that you also have Node and NPM installed on your machine.

1\. Install the latest version of Franken UI using NPM:

```sh
npm install franken-ui
```

2\. Include `presetQuick()` inside the `presets` property on your `tailwind.config.js` file:

```javascript
import presetQuick from "franken-ui/shadcn-ui/preset-quick";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [presetQuick()],
};
```

<span class="uk-badge uk-badge-danger">Important</span> For convenience, everything are automatically configured using `presetQuick()`. If you want to have total control of what components to use or having some issues with media queries, you can refer to the [optimization](optimization.md) page. 

3\. Once you have installed Franken UI, include the JavaScript files on your page by adding them to the `<head>` section. You can also choose to use the `defer` attribute to delay script execution. Or, you can place the code before the end of your `<body>` tag.

```html
<script src="https://cdn.jsdelivr.net/npm/uikit@3.20.8/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.20.8/dist/js/uikit-icons.min.js"></script>
```

## Theming

Franken UI offers a variety of themes, each carefully crafted and configured for a unique visual experience. Choose from themes such as `zinc`, `slate`, `stone`, `gray`, `neutral`, `red`, `rose`, `orange`, `green`, `blue`, `yellow` and `violet` to tailor the look and feel of your application.

To set a theme, configure the `presetQuick()` function to use your desired theme. Here's an example using the green theme:

```javascript
import presetQuick from "franken-ui/shadcn-ui/preset-quick";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [presetQuick({ theme: "green" })],
};
```

## Customizing

If there are specific styles you'd like to override, you can always utilize Tailwind CSS utility classes. For more advanced customization options, consider exploring the use of [hooks](hooks.md).


## Editor setup

Keeping track of hooks and configurations can be challenging, but with Franken UI's TypeScript support and a good editor, you can benefit from autocomplete features. If you already have [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) installed, you won't need any additional plugins. This not only saves time but also eliminates the need to manually look up and type all UIkit classes.