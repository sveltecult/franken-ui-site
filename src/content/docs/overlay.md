---
group: compatibility
name: Overlay
title: Overlay Component
meta:
    robots: noindex
javascript: none
---

# Overlay

Franken UI offers compatibility with UIkit 3. For detailed documentation on the <a class="font-medium underline underline-offset-4" href="https://getuikit.com/docs/overlay" target="blank">Overlay</a> component, please refer to their website.

## Usage

On your `tailwind.config.js` file, add the Overlay component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        overlay: {
            hooks: {}
        }
    }
}),
```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name      | Affected Classes      |
|----------------|-----------------------|
| `hook-overlay` | `.uk-overlay`         |
| `hook-icon`    | `.uk-overlay-icon`    |
| `hook-default` | `.uk-overlay-default` |
| `hook-primary` | `.uk-overlay-primary` |
| `hook-misc`    | `*`                   |