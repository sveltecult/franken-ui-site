---
group: compatibility
name: Drop
title: Drop Component
meta:
    robots: noindex
javascript: full
---

# Drop

Franken UI offers compatibility with UIkit 3. For detailed documentation on the <a class="font-medium underline underline-offset-4" href="https://getuikit.com/docs/drop" target="blank">Drop</a> component, please refer to their website.

## Usage

On your `tailwind.config.js` file, add the Drop component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        drop: {
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