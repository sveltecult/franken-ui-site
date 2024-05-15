---
group: components
name: Label
title: Tailwind CSS Label Component
meta:
    description: Indicate important notes and highlight parts of your content.
javascript: none
---

# Tailwind CSS Label

<p class="mt-2 uk-text-lead">Indicate important notes and highlight parts of your content.</p>

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Label component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        label: {
            hooks: {}
        }
    }
}),
```

To create a label, just add the `.uk-label` class to a `<span>` element.

```html
<span class="uk-label"></span>
```

```example
<span class="uk-label">Default</span>
```


## Style modifiers

Add one of the following classes for additional styles.

| Class                 | Description               |
|-----------------------|---------------------------|
| `.uk-label-primary`   | Adds a primary style.     |
| `.uk-label-secondary` | Adds a secondary style.   |
| `.uk-label-danger`    | Adds a destructive style. |

```html
<span class="uk-label uk-label-success"></span>
```

```example
<span class="uk-label">Default</span>

<span class="uk-label uk-label-primary">Primary</span>

<span class="uk-label uk-label-secondary">Secondary</span>

<span class="uk-label uk-label-danger">Danger</span>
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name           | Affected Classes    |
|---------------------|---------------------|
| `hook-label`        | `.uk-label`         |
| `hook-success`      | `.uk-label-success` |
| `hook-item-warning` | `.uk-label-warning` |
| `hook-item-danger`  | `.uk-label-danger`  |
| `hook-misc`         | `*`                 |