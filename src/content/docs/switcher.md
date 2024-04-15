---
group: compatibility
name: Switcher
title: Switcher Component
meta:
    robots: noindex
javascript: full
---

# Switcher

Franken UI offers compatibility with UIkit 3. For detailed documentation on the <a class="font-medium underline underline-offset-4" href="https://getuikit.com/docs/switcher" target="blank">Switcher</a> component, please refer to their website.

## Usage

On your `tailwind.config.js` file, add the Switcher component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        switcher: {
            hooks: {}
        }
    }
}),
```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name   | Affected Classes |
|-------------|------------------|
| `hook-misc` | `*`              |

