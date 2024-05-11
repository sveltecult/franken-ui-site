---
group: components
name: Iconnav
title: Tailwind CSS Iconnav Component
meta:
    description: Create a navigation consisting of icons.
javascript: none
---

# Tailwind CSS Iconnav

<p class="mt-2 text-xl text-muted-foreground">Create a navigation consisting of icons.</p>

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Iconnav component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        iconnav: {
            hooks: {}
        }
    }
}),
```

To apply this component, add the `.uk-iconnav` class to a `<ul>`  element. Use `<a>` elements as menu items within the list and add icons from the [Icon component](icon.md). To apply an active state to a menu item, just add the `.uk-active` class.

```html
<ul class="uk-iconnav">
    <li><a href="" uk-icon="icon: check"></a></li>
</ul>
```

```example
<ul class="uk-iconnav">
    <li><a href="#" uk-icon="icon: plus; ratio: 0.80"></a></li>
    <li><a href="#" uk-icon="icon: file-edit; ratio: 0.80"></a></li>
    <li><a href="#" uk-icon="icon: copy; ratio: 0.80"></a></li>
    <li><a href="#"><span uk-icon="icon: bag; ratio: 0.80"></span></a></li>
</ul>
```

## Vertical alignment

By default, the items of an iconnav are aligned horizontally. To apply a vertical alignment, add the `.uk-iconnav-vertical` class.

```html
<ul class="uk-iconnav uk-iconnav-vertical">...</ul>
```

```example
<ul class="uk-iconnav uk-iconnav-vertical">
    <li><a href="#" uk-icon="icon: plus; ratio: 0.80"></a></li>
    <li><a href="#" uk-icon="icon: file-edit; ratio: 0.80"></a></li>
    <li><a href="#" uk-icon="icon: copy; ratio: 0.80"></a></li>
    <li><a href="#"><span uk-icon="icon: bag; ratio: 0.80"></span></a></li>
</ul>
```

## Outline modifier

To apply an outline, just add the `.uk-iconnav-outline` class.

```html
<ul class="uk-iconnav uk-iconnav-vertical">...</ul>
```

```example
<ul class="uk-iconnav uk-iconnav-outline">
    <li><a href="#"><span uk-icon="icon: plus; ratio: 0.80"></span></a></li>
    <li><a href="#"><span uk-icon="icon: file-edit; ratio: 0.80"></span></a></li>
    <li><a href="#"><span uk-icon="icon: copy; ratio: 0.80"></span></a></li>
    <li><a href="#"><span uk-icon="icon: bag; ratio: 0.80"></span></a></li>
</ul>
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name          | Affected Classes               |
|--------------------|--------------------------------|
| `hook-iconnav`     | `.uk-iconnav`                  |
| `hook-item`        | `.uk-iconnav > * > a`          |
| `hook-item-hover`  | `.uk-iconnav > * > a:hover`    |
| `hook-item-active` | `.uk-iconnav > .uk-active > a` |
| `hook-misc`        | `*`                            |

## Accessibility

Set the appropriate WAI-ARIA roles, states and properties to the Iconnav component. 

- Set the `aria-label` property to the `<a>` elements to describe their meaning.

```html
<ul class="uk-iconnav">
    <li><a href="" uk-icon="icon: check" aria-label="..."></a></li>
</ul>
```
