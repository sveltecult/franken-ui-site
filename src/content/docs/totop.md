---
group: components
name: Totop
title: Tailwind CSS Totop Component
meta:
    description: Create a simple to-top scroller.
javascript: full
---

# Totop

<p class="mt-2 text-xl text-muted-foreground">Create a simple to-top scroller.</p>

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Totop component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        totop: {
            hooks: {}
        }
    }
}),
```

The Totop component allows you to apply an icon to your to-top scroller. Just add the `uk-totop` attribute to an `<a>` element.

To add a smooth effect when using the totop to jump up the page, use the [Scroll component](scroll.md).

```html
<a href="" uk-totop></a>
```

```example
<a href="#" uk-totop uk-scroll></a>
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name     | Affected Classes   |
|---------------|--------------------|
| `hook-totop`  | `.uk-totop`        |
| `hook-hover`  | `.uk-totop:hover`  |
| `hook-active` | `.uk-totop:active` |
| `hook-misc`   | `*`                |

## Accessibility

The Totop component automatically sets the appropriate WAI-ARIA roles, states and properties.

- The *totop icon* has the `aria-label` property, and if an `<a>` element is used, the `button` role.

### Internationalization

The Totop component uses the following translation strings. Learn more about [translating components](accessibility.md#internationalization).

| Key     | Default       | Description             |
|---------|---------------|-------------------------|
| `label` | `Back to top` | `aria-label` attribute. |
