---
group: getting-started
order: 5
name: Hooks
title: Franken UI Hooks
meta:
    description: "Allows easy customization by hooking into predefined selectors, reducing selector repetition and enabling effortless global changes."
javascript: none
---

# Hooks

<p class="mt-2 uk-text-lead">Allows easy customization by hooking into predefined selectors, reducing selector repetition and enabling effortless global changes.</p>

To prevent overhead selectors, we have "hooks", which hook into predefined selectors from the source and replace or inject additional properties. Selectors don't have to be repeated throughout all documents and global changes can be made much more easily.

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

For your convenience, Franken UI provides pre-configured hooks based on the shadcn/ui (New York) design specifications. You can simply use these hooks to achieve a consistent design. However, if you need to add your own customizations, you can do so by passing them to either `hooks()` or `presetQuick()` functions:

### Using hooks with `presetQuick()`

<span class="uk-badge uk-badge-danger">v0.0.10+</span> Using the `presetQuick()` will get you up and running quickly. You can pass your own customization like so:

```javascript
import presetQuick from "franken-ui/shadcn-ui/preset-quick";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    presetQuick({
      overrides: {
        accordion: {
          "hook-accordion": {},
          "hook-item": {
            background: "purple",
          },
          "hook-title": {
            "@apply text-lime-400": {},
          },
          "hook-title-hover": {
            color: "orange",
          },
          "hook-title-focus": {},
          "hook-title-active": {},
          "hook-content": {},
          "hook-misc": {},
        },
      },
    }),
  ],
};
```

In this example, we're targeting the accordion component and configure our own hooks. We set the background to purple, apply the `text-lime-400` color using the `@apply` directive, and change the color to orange on hover.

<span class="uk-badge uk-badge-primary">Tip</span> Head over to the [optimization](/docs/optimization#picking-components) page to see the list of all available components.

### Using hooks with just ordinary `preset`

Using the ordinary `preset` gives you total control of what components to be turned on or off. You can apply your own customizations as follows: 

```javascript
import preset from "franken-ui/shadcn-ui/preset";
import variables from "franken-ui/shadcn-ui/variables";
import ui from "franken-ui";
import hooks from "franken-ui/shadcn-ui/hooks";

const shadcn = hooks({
  overrides: {
    accordion: {
      "hook-title": {
        background: "pink",
        fontSize: "33px",
      },
    },
  },
});

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  plugins: [
    variables(),
    ui({
      components: {
        accordion: {
          hooks: shadcn.accordion,
        }
      },
    }),
  ],
};
```

In the example above, we are setting the `.uk-accordion-title` to have a hideous background of pink and an exaggerated font size of 33px.

<span class="uk-badge uk-badge-primary">Tip</span> Head over to the [optimization](/docs/optimization#picking-components) page to see the list of all available components.

## Opting out of shadcn/ui

shadcn/ui is just basically a bunch of pre-configured hooks. You can create your own completely different theme by excluding shadcn/ui and passing custom configurations directly to the `ui()` function.

```javascript
import ui from "franken-ui";

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    ui({
      components: {
        accordion: {
          hooks: {
            "hook-accordion": {},
            "hook-item": {
              background: "purple",
            },
            "hook-title": {
              color: "lime",
            },
            "hook-title-hover": {
              color: "orange",
            },
            "hook-title-focus": {},
            "hook-title-active": {},
            "hook-content": {},
            "hook-misc": {},
          },
        },
        alert: {
          hooks: {
            "hook-alert": {
              background: "red",
              color: "cyan",
              fontSize: "33px",
            },
            "hook-close": {},
            "hook-close-hover": {},
            "hook-close-focus": {},
            "hook-default": {},
            "hook-primary": {},
            "hook-success": {},
            "hook-warning": {},
            "hook-danger": {},
            "hook-misc": {},
          },
        },
      },
    }),
  ],
};
```

In this example, we are creating a completely new theme. We first enable the accordion and alert components, then set their hooks. For the accordion, we configure all items with a purple background, lime-colored titles, which turn orange on hover. For the alert component, we configure it with an angry red background, cyan text color, and a ridiculously large font size.

<span class="uk-badge uk-badge-primary">Tip</span> Head over to the [optimization](/docs/optimization#picking-components) page to see the list of all available components.

## Miscellaneous hooks

Should there be no hooks available, you can also create your own selector. To do so, use the `hook-misc` and write a selector inside. This will sort your new selector to the right place in the compiled CSS file.

```javascript
import ui from "franken-ui";

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    ui({
      components: {
        alert: {
          hooks: {
            "hook-misc": {
              ".uk-alert-red": {
                backgroundColor: "red"
              }
            },
          },
        },
      },
    }),
  ],
};
```
<span class="uk-badge uk-badge-primary">Tip</span> You can also use `hook-misc` to override other selectors.

## Disabling or changing selector or property

If you wish to override or disable pre-configured styling, you can set a property or delete the entire selector by setting it to `null`. Or, use the `@apply` directive from Tailwind CSS.

```javascript
import preset from "franken-ui/shadcn-ui/preset";
import variables from "franken-ui/shadcn-ui/variables";
import ui from "franken-ui";
import hooks from "franken-ui/shadcn-ui/hooks";

const shadcn = hooks({
  overrides: {
    card: {
      "hook-card": {
        borderWidth: null,
        "@apply border-none shadow-none": {},
      },
    },
  },
});

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  plugins: [
    variables(),
    ui({
      components: {
        card: {
          hooks: shadcn.card,
        }
      },
    }),
  ],
};
```

In the example above, we first enable the card component and then apply our customization. We attempt to remove the border-width property by setting it to `null`. If that doesn't work, we override it using the `@apply` directive. It's important to note that the simple object structure takes precedence over the `@apply` directive. The `@apply` directive is always compiled last and should be used for consistency.


## Frequently asked questions

```render
<ul class="uk-accordion" uk-accordion>
    <li>
        <a class="uk-accordion-title" href>
        Why not just use Tailwind CSS utility classes?
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
              You always can. But, using hooks helps prevent your HTML from becoming cluttered with utility classes. They also contribute to making your components more consistent and reduce overhead.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
        Where can I find available hooks?
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
              You can find the available hooks and their corresponding affected classes in each component's documentation page.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
        What's the difference between preset and presetQuick()?
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
              The <code class="font-geist-mono">preset</code> is an object that offers full control over component selection, allowing you to cherry-pick what you need.
            </p>
            <p class="mt-2">
              On the other hand, <code class="font-geist-mono">presetQuick()</code> is a function that returns an object accepting theme and overrides options. It includes all UIkit components and provides a <code class="font-geist-mono">137.83kB</code> (<code class="font-geist-mono">22.56kB</code> minified and gzipped) CSS upfront.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
        Will this create overhead?
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
              No, all objects will be merged together, combining all duplicate rules. If you follow the <a class="font-medium underline underline-offset-4" href="/docs/optimization">optimization</a> guide, your final CSS will be much leaner.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
        I added some hooks but I don't see any changes
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
              Please restart your development server.
            </p>
        </div>
    </li>
</ul>
```

## Conclusion

In conclusion, hooks provide a convenient way of overriding styles with less overhead. This approach makes your component more consistent, reduces build size, and helps prevent HTML clutter.

You can find the available hooks and their corresponding affected classes in each component's documentation page, making it easy to customize and style your components as needed.