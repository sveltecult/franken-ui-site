---
group: compatibility
name: Utility
title: Utility Component
meta:
    robots: noindex
javascript: none
---

# Utility

Franken UI offers compatibility with UIkit 3. For detailed documentation on the <a class="font-medium underline underline-offset-4" href="https://getuikit.com/docs/utility" target="blank">Utility</a> component, please refer to their website.

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Utility component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        utility: {
            hooks: {}
        }
    }
}),
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name               | Affected Classes                              |
|-------------------------|-----------------------------------------------|
| `hook-panel-scrollable` | `.uk-panel-scrollable`                        |
| `hook-box-shadow-bottom`| `.uk-box-shadow-bottom::after`                |
| `hook-dropcap`          | `.uk-dropcap > p:first-of-type::first-letter` |
| `hook-logo`             | `.uk-logo`                                    |
| `hook-logo-hover`       | `.uk-logo:hover`                              |
| `hook-misc`             | `*`                                           |
