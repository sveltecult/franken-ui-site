---
group: compatibility
name: Dropbar
title: Dropbar Component
meta:
    robots: noindex
javascript: full
---

# Dropbar

Franken UI offers compatibility with UIkit 3. For detailed documentation on the <a class="font-medium underline underline-offset-4" href="https://getuikit.com/docs/dropbar" target="blank">Dropbar</a> component, please refer to their website.

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Dropbar component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        dropbar: {
            hooks: {},
            media: false
        }
    }
}),
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name      | Affected Classes     |
|----------------|----------------------|
| `hook-dropbar` | `.uk-dropbar`        |
| `hook-top`     | `.uk-dropbar-top`    |
| `hook-bottom`  | `.uk-dropbar-bottom` |
| `hook-left`    | `.uk-dropbar-left`   |
| `hook-right`   | `.uk-dropbar-right`  |
| `hook-misc`    | `*`                  |