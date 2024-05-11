---
group: components
name: Dotnav
title: Tailwind CSS Dotnav Component
meta:
    description: Create a dot navigation to operate slideshows or to scroll to different page sections.
javascript: none
---

# Tailwind CSS Dotnav

<p class="mt-2 text-xl text-muted-foreground">
    Create a dot navigation to operate slideshows or to scroll to different page sections.
</p>

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Dotnav component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        dotnav: {
            hooks: {}
        }
    }
}),
```

To create a navigation with dots, use the following classes. This component is built with Flexbox. So to align a dotnav, you can use flex classes from Tailwind CSS.

| Class         | Description                                                                                                         |
|---------------|---------------------------------------------------------------------------------------------------------------------|
| `.uk-dotnav`  | Add this class to a `<ul>` element to define the Dotnav component. Use `<a>` elements as nav items within the list. |
| `.uk-active ` | Add this class to a list item to apply an active state.                                                             |                                                         |

```html
<ul class="uk-dotnav">
    <li class="uk-active"><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
```

```example
<ul class="uk-dotnav">
    <li class="uk-active"><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
    <li><a href="#">Item 4</a></li>
    <li><a href="#">Item 5</a></li>
</ul>
```

## Vertical alignment

The dotnav can also be displayed vertically. Just add the `.uk-dotnav-vertical` modifier.

```html
<ul class="uk-dotnav uk-dotnav-vertical">...</ul>
```

```example
<ul class="uk-dotnav uk-dotnav-vertical">
    <li class="uk-active"><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
    <li><a href="#">Item 4</a></li>
    <li><a href="#">Item 5</a></li>
</ul>
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name           | Affected Classes              |
|---------------------|-------------------------------|
| `hook-dotnav`       | `.uk-dotnav`                  |
| `hook-item`         | `.uk-dotnav > * > *`          |
| `hook-item-hover`   | `.uk-dotnav > * > :hover`     |
| `hook-item-onclick` | `.uk-dotnav > * > :active`    |
| `hook-item-active`  | `.uk-dotnav > .uk-active > *` |
| `hook-misc`         | `*`                           |