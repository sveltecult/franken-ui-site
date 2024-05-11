---
group: compatibility
name: Transition
title: Transition Component
meta:
    robots: noindex
javascript: none
---

# Transition

Franken UI offers compatibility with UIkit 3. For detailed documentation on the <a class="font-medium underline underline-offset-4" href="https://getuikit.com/docs/transition" target="blank">Transition</a> component, please refer to their website.

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Transition component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        transition: {
            hooks: {}
        }
    }
}),
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name   | Affected Classes |
|-------------|------------------|
| `hook-misc` | `*`              |
