---
group: components
name: Divider
title: Tailwind CSS Divider Component
meta:
    description: Create dividers to separate content and apply different styles to them.
javascript: none
---

# Tailwind CSS Divider

<p class="mt-2 uk-text-lead">Create dividers to separate content and apply different styles to them.</p>

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Divider component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        divider: {
            hooks: {}
        }
    }
}),
```

You can use a simple `<hr>` element to illustrate a separation of different content parts on your pages. The Divider component allows you to add different styles to these dividers.

## Divider icon

Add the `.uk-divider-icon` class to a `<hr>` or `<div>` element to create a divider with some decoration, like an icon.

```example
<hr class="uk-divider-icon">
```

## Divider small

Add the `.uk-divider-small` class to a `<hr>` or `<div>` element to create a smaller divider.

```example
<hr class="uk-divider-small h-[1px]">
```

## Divider vertical

Add the `.uk-divider-vertical` class to a `<hr>` or `<div>` element to create a vertical divider.

```example
<hr class="uk-divider-vertical">
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name              | Affected Classes                                    |
|------------------------|-----------------------------------------------------|
| `hook-icon`            | `.uk-divider-icon`                                  |
| `hook-icon-line`       | `.uk-divider-icon::before, .uk-divider-icon::after` |
| `hook-icon-line-left`  | `.uk-divider-icon::before`                          |
| `hook-icon-line-right` | `.uk-divider-icon::after`                           |
| `hook-small`           | `.uk-divider-small::after`                          |
| `hook-vertical`        | `.uk-divider-vertical`                              |
| `hook-misc`            | `*`                                                 |
