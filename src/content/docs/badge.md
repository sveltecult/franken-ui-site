---
group: components
name: Badge
title: Tailwind CSS Badge Component
meta:
    description: Displays a badge or a component that looks like a badge.
javascript: none
---

# Tailwind CSS Badge

<p class="mt-2 text-xl text-muted-foreground">
    Easily create nice looking notification badges.
</p>

## Usage

On your `tailwind.config.js` file, add the Badge component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        badge: {
            hooks: {}
        }
    }
}),
```

To create a badge, just add the `.uk-badge` class to an inline element like `<a>` or `<span>` element.

```html
<span class="uk-badge"></span>
```

```example
<span class="uk-badge">1</span>
<span class="uk-badge">100</span>
```

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

| Class                 | Description               |
| --------------------- | ------------------------- |
| `.uk-badge-primary`   | Adds a primary style.     |
| `.uk-badge-secondary` | Adds a secondary style.   |
| `.uk-badge-danger`    | Adds a destructive style. |

```example
<span class="uk-badge">1</span>
<span class="uk-badge uk-badge-primary">100</span>
<span class="uk-badge uk-badge-secondary">100</span>
<span class="uk-badge uk-badge-danger">100</span>
```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name       | Affected Classes            |
|-----------------|-----------------------------|
| `hook-badge`    | `.uk-badge`                 |
| `hook-hover`    | `.uk-badge:hover`           |
| `hook-misc`     | `*`                         |