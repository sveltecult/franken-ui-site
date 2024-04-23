---
group: compatibility
name: Thumbnav
title: Thumbnav Component
meta:
    robots: noindex
javascript: none
---

# Thumbnav

Franken UI offers compatibility with UIkit 3. For detailed documentation on the <a class="font-medium underline underline-offset-4" href="https://getuikit.com/docs/thumbnav" target="blank">Thumbnav</a> component, please refer to their website.

## Usage

On your `tailwind.config.js` file, add the Thumbnav component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        thumbnav: {
            hooks: {}
        }
    }
}),
```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name          | Affected Classes                |
|--------------------|---------------------------------|
| `hook-thumbnav`    | `.uk-thumbnav`                  |
| `hook-item`        | `.uk-thumbnav > * > *`          |
| `hook-item-hover`  | `.uk-thumbnav > * > :hover`     |
| `hook-item-active` | `.uk-thumbnav > .uk-active > *` |
| `hook-misc`        | `*`                             |

