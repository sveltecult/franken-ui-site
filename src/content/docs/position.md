---
group: compatibility
name: Position
title: Position Component
meta:
    robots: noindex
javascript: none
---

# Position

Franken UI offers compatibility with UIkit 3. For detailed documentation on the <a class="font-medium underline underline-offset-4" href="https://getuikit.com/docs/position" target="blank">Position</a> component, please refer to their website.

## Usage

On your `tailwind.config.js` file, add the Position component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        position: {
            hooks: {},
            media: false
        }
    }
}),
```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name   | Affected Classes |
|-------------|------------------|
| `hook-misc` | `*`              |
