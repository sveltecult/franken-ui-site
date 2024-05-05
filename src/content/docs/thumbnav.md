---
group: components
name: Thumbnav
title: Tailwind CSS Thumbnav Component
meta:
    description: Create a flexible thumbnail navigation.
javascript: none
---

# Tailwind CSS Thumbnav

<p class="mt-2 text-xl text-muted-foreground">Create a flexible thumbnail navigation.</p>

## Usage

On your `tailwind.config.js` file, add the Thumbnav component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        thumbnav: {
            hooks: {}
        }
    }
}),
```

To create a navigation with thumbnails, use the following classes. This component is built with Flexbox. So to align a thumbnav, you can use flex classes from Tailwind CSS.

| Class          | Description                                                                                                                            |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `.uk-thumbnav` | Add this class to a `<ul>` element to define the Thumbnav component. Nest your thumbnail images inside `<a>` elements within the list. |
| `.uk-active `  | Add this class to a list item to apply an active state.                                                                                |

```html
<ul class="uk-thumbnav">
    <li class="uk-active"><a href=""><img src="" width="" height="" alt=""></a></li>
    <li><a href=""><img src="" alt=""></a></li>
</ul>
```

```example
<ul class="uk-thumbnav">
    <li class="uk-active"><a href="#"><img src="/images/photo.jpg" width="100" height="67" alt=""></a></li>
    <li><a href="#"><img src="/images/dark.jpg" width="100" height="67" alt=""></a></li>
    <li><a href="#"><img src="/images/light.jpg" width="100" height="67" alt=""></a></li>
</ul>
```


## Vertical alignment

The thumbnav can also be displayed vertically. Just add the `.uk-thumbnav-vertical` modifier.

```html
<ul class="uk-thumbnav uk-thumbnav-vertical">...</ul>
```

```example
<ul class="uk-thumbnav uk-thumbnav-vertical">
    <li class="uk-active"><a href="#"><img src="/images/photo.jpg" width="100" height="67" alt=""></a></li>
    <li><a href="#"><img src="/images/dark.jpg" width="100" height="67" alt=""></a></li>
    <li><a href="#"><img src="/images/light.jpg" width="100" height="67" alt=""></a></li>
</ul>
```



## Position as overlay

To position the thumbnav on top of an element or the [Slideshow component](slideshow.md) for example, add one of the `.uk-position-*` classes from the [Position component](position.md) to a `div` element wrapping the thumbnav. To create a position context on the container, add the `.uk-position-relative` class.

```html
<div class="uk-position-relative">

    <!-- The element which is wrapped goes here -->

    <div class="uk-position-bottom-center uk-position-small">
        <ul class="uk-thumbnav">...</ul>
    </div>

</div>
```

```example
<div class="uk-position-relative" uk-slideshow="animation: fade">

    <ul class="uk-slideshow-items">
        <li>
            <img src="/images/photo.jpg" alt="" uk-cover>
        </li>
        <li>
            <img src="/images/dark.jpg" alt="" uk-cover>
        </li>
        <li>
            <img src="/images/light.jpg" alt="" uk-cover>
        </li>
    </ul>

    <div class="uk-position-bottom-center uk-position-small">
        <ul class="uk-thumbnav">
            <li uk-slideshow-item="0"><a href="#"><img src="/images/photo.jpg" width="100" height="67" alt=""></a></li>
            <li uk-slideshow-item="1"><a href="#"><img src="/images/dark.jpg" width="100" height="67" alt=""></a></li>
            <li uk-slideshow-item="2"><a href="#"><img src="/images/light.jpg" width="100" height="67" alt=""></a></li>
        </ul>
    </div>

</div>
```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name          | Affected Classes                |
|--------------------|---------------------------------|
| `hook-thumbnav`    | `.uk-thumbnav`                  |
| `hook-item`        | `.uk-thumbnav > * > *`          |
| `hook-item-hover`  | `.uk-thumbnav > * > :hover`     |
| `hook-item-active` | `.uk-thumbnav > .uk-active > *` |
| `hook-misc`        | `*`                             |

