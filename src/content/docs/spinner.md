---
group: components
name: Spinner
title: Tailwind CSS Spinner Component
meta:
    description: Create an animated loading spinner.
javascript: full
---

# Tailwind CSS Spinner

<p class="mt-2 text-xl text-muted-foreground">Create an animated loading spinner.</p>

## Usage

On your `tailwind.config.js` file, add the Spinner component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        spinner: {
            hooks: {}
        }
    }
}),
```

To create a spinner, add the `uk-spinner` attribute to a block element.

```html
<div uk-spinner></div>
```

```example
<div uk-spinner></div>
```

## Ratio

Add the `ratio: 3` parameter to the `uk-spinner` attribute to triple its size – or any other number, depending on how big you want the spinner to be.

```html
<div uk-spinner="ratio: 3"></div>
```

```example
<span class="uk-margin-small-right" uk-spinner="ratio: 3"></span>
<span uk-spinner="ratio: 4.5"></span>
```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name      | Affected Classes |
|----------------|------------------|
| `hook-spinner` | `.uk-spinner`    |
| `hook-misc`    | `*`              |

## Accessibility

The Spinner component automatically sets the appropriate WAI-ARIA roles, states and properties.

- The *spinner* has the `status` role.
