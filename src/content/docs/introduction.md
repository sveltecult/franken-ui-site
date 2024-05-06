---
group: getting-started
order: 1
name: Introduction
title: Tailwind CSS Component Library
meta:
    description: Franken UI is an HTML-first, open-source library of UI components based on the utility-first Tailwind CSS with UIkit 3 compatibility. The design is based on shadcn/ui ported to be framework-agnostic.
javascript: none
---

# Tailwind CSS Component Library

<p class="mt-2 text-xl text-muted-foreground">Get familiar with the basic setup and overview of Franken UI.</p>

Franken UI is an HTML-first, open-source library of UI components based on the utility-first Tailwind CSS with [UIkit 3](https://getuikit.com) compatibility. The design is based on [shadcn/ui](https://ui.shadcn.com) ported to be framework-agnostic.

## Franken UI Templates

Supercharge your development by using minimally pre-configured templates below, so you can start coding right away. If your stack is not listed, you can follow the manual installation.

- [Astro](https://github.com/sveltecult/franken-ui-template-astro/)
- [Laravel](https://github.com/sveltecult/franken-ui-template-laravel/)

## Manual Installation

Franken UI is a Tailwind CSS plugin and can be included into any existing Tailwind CSS project. To get started, you first need to make sure that you have a working Tailwind CSS project installed and that you also have Node and NPM installed on your machine.

### Require via NPM

1\. Install the latest version of Franken UI using NPM:

```sh
npm install franken-ui
```

2\. Include Franken UI as a plugin inside the `tailwind.config.js` file:

```javascript
import preset from "franken-ui/shadcn-ui/preset";
import variables from "franken-ui/shadcn-ui/variables";
import ui from "franken-ui";
import hooks from "franken-ui/shadcn-ui/hooks";

const shadcn = hooks();

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  plugins: [
    variables(),
    ui(),
  ],
};
```

For convenience, CSS variables, fonts and color palettes from shadcn/ui are automatically configured using `preset`, `hooks()` and `variables()` plugin. 

3\. Once you have installed Franken UI, include the JavaScript files on your page by adding them to the `<head>` section. You can also choose to use the `defer` attribute to delay script execution. Or, you can place the code before the end of your `<body>` tag.

```html
<script src="https://cdn.jsdelivr.net/npm/uikit@3.20.8/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.20.8/dist/js/uikit-icons.min.js"></script>
```

## Theming

Franken UI offers a variety of themes, each carefully crafted and configured for a unique visual experience. Choose from themes such as `zinc`, `slate`, `stone`, `gray`, `neutral`, `red`, `rose`, `orange`, `green`, `blue`, `yellow` and `violet` to tailor the look and feel of your application.

To set a theme, configure the `hooks()` and `variables()` functions to use your desired theme. Here's an example using the green theme:

```javascript
import preset from "franken-ui/shadcn-ui/preset";
import variables from "franken-ui/shadcn-ui/variables";
import ui from "franken-ui";
import hooks from "franken-ui/shadcn-ui/hooks";

const shadcn = hooks({ theme: 'green' });

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  plugins: [
    variables({ theme: 'green' }),
    ui(),
  ],
};
```

## Picking components

Franken UI embraces modularity, allowing you to selectively include only the components you need within the `ui()` function. This granular approach ensures that your application remains lightweight and efficient, tailored to your specific requirements.

However, some components are dependent on others. We are aware of this problem, and if you encounter errors, we provided a [`tailwind.config.js`](tailwind-config-js.md) file than you can use as a starting point. Just adjust the `safelist` and `content` according to your needs.

```javascript
import preset from "franken-ui/shadcn-ui/preset";
import variables from "franken-ui/shadcn-ui/variables";
import ui from "franken-ui";
import hooks from "franken-ui/shadcn-ui/hooks";

const shadcn = hooks({ theme: 'green' });

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  plugins: [
    variables({ theme: 'green' }),
    ui({
        components: {
            accordion: {
                hooks: shadcn.accordion,
            },
            alert: {
                hooks: shadcn.alert
            }
        }
    }),
  ],
};
```
In the example above, each component (e.g., accordion, alert, align) can be customized using the hooks option, providing extensive flexibility. Additionally, the media option allows you to include component-specific media query classes, although it is recommended to use Tailwind CSS for responsiveness.

For those interested, Franken UI also offers UIkit base stylings. However, it is advised to exercise caution when using UIkit alongside other styling frameworks to avoid potential conflicts:

```javascript
ui({
    base: true,
    hooks: {},
    components: {
        accordion: {},
        alert: {}
    }
})
```

## Using hooks

Each component in Franken UI comes with hooks for easy customization, allowing you to tweak the appearance and behavior to suit your needs. These hooks are defined using a simple object structure, where you can specify custom CSS styles:

```javascript
{
    'hook-alert': {
        fontSize: '14px'
    },
    'hook-close': {},
    'hook-close-hover': {},
    'hook-close-focus': {},
    'hook-default': {},
    'hook-primary': {},
    'hook-success': {},
    'hook-warning': {},
    'hook-danger': {},
    'hook-misc': {}
}
```

For your convenience, Franken UI provides pre-configured hooks based on the shadcn/ui design specifications. You can simply use these hooks to achieve a consistent design. However, if you need to add your own customizations, you can do so by passing them to the `hooks()` function:

```javascript
import ui from "franken-ui";
import hooks from "franken-ui/shadcn-ui/hooks";

const shadcn = hooks({
  overrides: {
    alert: {
      "hook-alert": {
        fontSize: '12px',
        borderRadius: '5px'
      }
    }
  }
});

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    ui({
        components: {
            alert: {
                hooks: shadcn.alert,
            },
        }
    }),
  ],
};
```

You can find the available hooks and their corresponding affected classes in each component's documentation page, making it easy to customize and style your components as needed.

## Editor setup

Keeping track of hooks and configurations can be challenging, but with Franken UI's TypeScript support and a good editor, you can benefit from autocomplete features. If you already have Tailwind CSS IntelliSense installed, you won't need any additional plugins. This not only saves time but also eliminates the need to manually look up and type all UIkit classes.

## Frequently asked questions

```render
<ul class="uk-accordion mt-6" uk-accordion>
    <li>
    <a class="uk-accordion-title" href="#">
        But why?
        <span class="uk-accordion-icon">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-down"
            ><path d="m6 9 6 6 6-6"></path></svg
        >
        </span>
    </a>
    <div class="uk-accordion-content">
        <p>
        The motivation behind Franken UI's development is straightforward: a
        love for UIkit. With its comprehensive component library, maturity,
        event-driven nature, and framework agnosticism, UIkit was the ideal
        choice.
        </p>
        <p class="mt-6">
        It seamlessly integrates with major frameworks like Vue, Svelte, and
        React, making it a natural fit for projects using these
        technologies. Additionally, as a fan of Tailwind CSS, creating every
        component from scratch seemed daunting.
        </p>
        <p class="mt-6">
        Thus, Franken UI was born out of the need to combine the best of
        both worlds—leveraging UIkit's power while streamlining Tailwind CSS
        integration into existing projects.
        </p>
    </div>
    </li>
    <li>
    <a class="uk-accordion-title" href="#">
        Who is Franken UI for?
        <span class="uk-accordion-icon">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-down"
            ><path d="m6 9 6 6 6-6"></path></svg
        >
        </span>
    </a>
    <div class="uk-accordion-content">
        <p>
        Franken UI is tailored for small teams and solo developers seeking a
        beautiful, reliable CSS framework without the complexity of React,
        Vue, or Svelte. It's designed with an "HTML-first" approach, making
        it accessible to developers at any skill level.
        </p>
    </div>
    </li>
    <li>
    <a class="uk-accordion-title" href="#">
        Why shadcn/ui?
        <span class="uk-accordion-icon">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-down"
            ><path d="m6 9 6 6 6-6"></path></svg
        >
        </span>
    </a>
    <div class="uk-accordion-content">
        <p>
        The choice of shadcn/ui as the base for Franken UI was driven by its
        aesthetic appeal. The design language of shadcn/ui aligns well with
        the vision of Franken UI, making it a natural starting point for
        further customization.
        </p>
    </div>
    </li>
    <li>
    <a class="uk-accordion-title" href="#">
        Can I opt-out of using shadcn/ui?
        <span class="uk-accordion-icon">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-down"
            ><path d="m6 9 6 6 6-6"></path></svg
        >
        </span>
    </a>
    <div class="uk-accordion-content">
        <p>
        Absolutely! Franken UI provides the flexibility to opt-out of using
        shadcn/ui by simply not setting components' hooks. This allows
        developers to apply their own customizations as needed. However, by
        default, Franken UI uses the UIkit theme for a cohesive look and
        feel.
        </p>
    </div>
    </li>
    <li>
    <a class="uk-accordion-title" href="#">
        Do you accept donations?
        <span class="uk-accordion-icon">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-down"
            ><path d="m6 9 6 6 6-6"></path></svg
        >
        </span>
    </a>
    <div class="uk-accordion-content">
        <p>
        Yes, if Franken UI has been beneficial to you in any way, I have
        setup <a class="font-medium underline underline-offset-4" href="https://ko-fi.com/sveltecult" target="_blank"
            >Ko-Fi</a
        > and <a class="font-medium underline underline-offset-4" href="https://liberapay.com/sveltecult" target="_blank"
            >Liberapay</a
        >. Or, feel free to reach out via email <a
            class="font-medium underline underline-offset-4"
            href="mailto:sveltecult@proton.me">sveltecult@proton.me</a
        >. We can discuss the details, and I'll be happy to send you an
        invoice. Your support is greatly appreciated and helps sustain the
        project.
        </p>
    </div>
    </li>
</ul>
```