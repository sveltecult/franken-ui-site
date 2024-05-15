---
group: components
name: Breadcrumb
title: Tailwind CSS Breadcrumb Component
meta:
    description: Displays the path to the current resource using a hierarchy of links.
javascript: none
---

# Tailwind CSS Breadcrumb

<p class="mt-2 uk-text-lead">
    Create breadcrumbs to show users their location within a website.
</p>

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Breadcrumb component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        breadcrumb: {
            hooks: {}
        }
    }
}),
```

The Breadcrumb component consists of links, which are aligned side by side and separated by a divider. Add the `.uk-breadcrumb` class to a `<ul>` element to define the component. Use `<a>` elements as breadcrumb items within the list. An active state is automatically applied to the last `<li>` element.

To add list items without a link, use a `<span>` element instead of an `<a>`. Alternatively, disable an `<a>` element by adding the `.uk-disabled` class to the `<li>` element and remove the `href` attribute from the anchor to make it inaccessible through keyboard navigation.

```html
<ul class="uk-breadcrumb">
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><span></span></li>
</ul>
```

```example
<nav aria-label="Breadcrumb">
    <ul class="uk-breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#">Templates</a></li>
        <li class="uk-disabled"><a>Disabled Category</a></li>
        <li><span>Franken UI</span></li>
    </ul>
</nav>
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name               | Affected Classes                                                                    |
|-------------------------|-------------------------------------------------------------------------------------|
| `hook-breadcrumb`       | `.uk-breadcrumb`                                                                    |
| `hook-breadcrumb-solid` | `.uk-breadcrumb-solid`                                                              |
| `hook-item`             | `.uk-breadcrumb > * > *`                                                            |
| `hook-item-hover`       | `.uk-breadcrumb > * > :hover`                                                       |
| `hook-item-active`      | `.uk-breadcrumb > :last-child > span, .uk-breadcrumb > :last-child > a:not([href])` |
| `hook-divider`          | `.uk-breadcrumb > :nth-child(n + 2):not(.uk-first-column)::before`                  |
| `hook-item-disabled`    | `.uk-breadcrumb > .uk-disabled > *`                                                 |
| `hook-misc`             | `*`                                                                                 |

## Accessibility

In order for the Breadcrumb component to adhere to the [Breadcrumb design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/), set the appropriate WAI-ARIA roles, states and properties.

- Contain the breadcrumb list within a `nav` element and set the `aria-label` property to describe the type of the provided navigation.
- If the last item is the current page and a link, set the `aria-current="page"` property.

```html
<nav aria-label="Breadcrumb">
    <ul class="uk-breadcrumb">...</ul>
</nav>
```
