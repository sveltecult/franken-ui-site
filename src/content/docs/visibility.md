---
group: compatibility
name: Visibility
title: Visibility Component
meta:
    robots: noindex
javascript: none
---

# Visibility

Franken UI offers compatibility with UIkit 3. For detailed documentation on the <a class="font-medium underline underline-offset-4" href="https://getuikit.com/docs/visibility" target="blank">Visibility</a> component, please refer to their website.

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Visibility component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        visibility: {
            hooks: {},
            media: true
        }
    }
}),
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name   | Affected Classes |
|-------------|------------------|
| `hook-misc` | `*`              |
