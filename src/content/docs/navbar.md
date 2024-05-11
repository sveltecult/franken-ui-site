---
group: compatibility
name: Navbar
title: Navbar Component
meta:
    robots: noindex
javascript: partial
---

# Navbar

Franken UI offers compatibility with UIkit 3. For detailed documentation on the <a class="font-medium underline underline-offset-4" href="https://getuikit.com/docs/navbar" target="blank">Navbar</a> component, please refer to their website.

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Navbar component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        navbar: {
            hooks: {},
            media: false
        }
    }
}),
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name                     | Affected Classes                                                               |
|-------------------------------|--------------------------------------------------------------------------------|
| `hook-navbar`                 | `.uk-navbar`                                                                   |
| `hook-container`              | `.uk-navbar-container:not(.uk-navbar-transparent)`                             |
| `hook-nav-item`               | `.uk-navbar-nav > li > a`                                                      |
| `hook-nav-item-hover`         | `.uk-navbar-nav > li:hover > a, .uk-navbar-nav > li > a[aria-expanded="true"]` |
| `hook-nav-item-onclick`       | `.uk-navbar-nav > li > a:active`                                               |
| `hook-nav-item-active`        | `.uk-navbar-nav > li.uk-active > a`                                            |
| `hook-item`                   | `.uk-navbar-item`                                                              |
| `hook-toggle`                 | `.uk-navbar-toggle`                                                            |
| `hook-toggle-hover`           | `.uk-navbar-toggle:hover, .uk-navbar-toggle[aria-expanded="true"]`             |
| `hook-toggle-icon`            | `.uk-navbar-toggle-icon`                                                       |
| `hook-toggle-icon-hover`      | `:hover > .uk-navbar-toggle-icon`                                              |
| `hook-subtitle`               | `.uk-navbar-subtitle`                                                          |
| `hook-primary`                | `.uk-navbar-primary`                                                           |
| `hook-transparent`            | `.uk-navbar-transparent`                                                       |
| `hook-sticky`                 | `.uk-navbar-sticky`                                                            |
| `hook-dropdown`               | `.uk-navbar-dropdown`                                                          |
| `hook-dropdown-large`         | `.uk-navbar-dropdown-large`                                                    |
| `hook-dropdown-dropbar`       | `.uk-navbar-dropdown-dropbar`                                                  |
| `hook-dropdown-dropbar-large` | `.uk-navbar-dropdown-dropbar-large`                                            |
| `hook-dropdown-nav`           | `.uk-navbar-dropdown-nav`                                                      |
| `hook-nav-item`               | `.uk-navbar-dropdown-nav > li > a`                                             |
| `hook-nav-item-hover`         | `.uk-navbar-dropdown-nav > li > a:hover`                                       |
| `hook-nav-item-active`        | `.uk-navbar-dropdown-nav > li.uk-active > a`                                   |
| `hook-subtitle`               | `.uk-navbar-dropdown-nav .uk-nav-subtitle`                                     |
| `hook-dropdown-nav-header`    | `.uk-navbar-dropdown-nav .uk-nav-header`                                       |
| `hook-dropdown-nav-divider`   | `.uk-navbar-dropdown-nav .uk-nav-divider`                                      |
| `hook-dropbar`                | `.uk-navbar-dropbar`                                                           |
| `hook-misc`                   | `*`                                                                            |