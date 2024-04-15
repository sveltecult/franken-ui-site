---
group: components
name: Placeholder
title: Tailwind CSS Placeholder Component
meta:
    description: Create a placeholder space that can be used for uploading files via drag and drop.
javascript: none
---

# Placeholder

<p class="mt-2 text-xl text-muted-foreground">Create a placeholder space that can be used for uploading files via drag and drop.</p>

## Usage

On your `tailwind.config.js` file, add the Placeholder component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        placeholder: {
            hooks: {}
        }
    }
}),
```

This component applies a specially styled area to create a placeholder space, which can be useful, for example in combination with the [Upload component](https://getuikit.com/docs/upload). Just add the `.uk-placeholder` class to a `<div>` element.

```html
<div class="uk-placeholder"></div>
```

```example
<div class="uk-placeholder text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name          | Affected Classes  |
|--------------------|-------------------|
| `hook-placeholder` | `.uk-placeholder` |
| `hook-misc`        | `*`               |