---
group: compatibility
name: Dropdown
title: Dropdown Component
meta:
    robots: noindex
javascript: full
---

# Dropdown

Franken UI offers compatibility with UIkit 3. For detailed documentation on the <a class="font-medium underline underline-offset-4" href="https://getuikit.com/docs/dropdown" target="blank">Dropdown</a> component, please refer to their website.

## Usage

On your `tailwind.config.js` file, add the Dropdown component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        dropdown: {
            hooks: {},
            media: false
        }
    }
}),
```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name             | Affected Classes                                                       |
|-----------------------|------------------------------------------------------------------------|
| `hook-dropdown`       | `.uk-dropdown`                                                         |
| `hook-dropbar`        | `.uk-dropdown-dropbar`                                                 |
| `hook-dropbar-large`  | `.uk-dropdown-dropbar-large`                                           |
| `hook-nav`            | `.uk-dropdown-nav`                                                     |
| `hook-nav-item`       | `.uk-dropdown-nav > li > a`                                            |
| `hook-nav-item-hover` | `.uk-dropdown-nav > li > a:hover, .uk-dropdown-nav > li.uk-active > a` |
| `hook-nav-subtitle`   | `.uk-dropdown-nav .uk-nav-subtitle`                                    |
| `hook-nav-header`     | `.uk-dropdown-nav .uk-nav-header`                                      |
| `hook-nav-divider`    | `.uk-dropdown-nav .uk-nav-divider`                                     |
| `hook-misc`           | `*`                                                                    |