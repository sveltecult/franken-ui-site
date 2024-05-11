---
group: components
name: Slidenav
title: Tailwind CSS Slidenav Component
meta:
    description: Defines navigation with previous and next buttons to flip through slideshows.
javascript: full
---

# Tailwind CSS Slidenav

<p class="mt-2 text-xl text-muted-foreground">
    Defines a navigation with previous and next buttons to flip through slideshows.
</p>

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Slidenav component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        slidenav: {
            hooks: {}
        }
    }
}),
```

To create a navigation with previous and next buttons, just add the `uk-slidenav` attribute to `<a>` elements. Add the `previous` or `next` parameter to the attribute to style the nav items as previous or next buttons.

```html
<a href="" uk-slidenav-next></a>
<a href="" uk-slidenav-previous></a>
```

```example
<a href="#" uk-slidenav-previous></a>
<a href="#" uk-slidenav-next></a>
```


## Large modifier

To increase the size of the slidenav icons, add the `.uk-slidenav-large` class.

```html
<a href="" class="uk-slidenav-large" uk-slidenav-next></a>
<a href="" class="uk-slidenav-large" uk-slidenav-previous></a>
```

```example
<a href="#" class="uk-slidenav-large" uk-slidenav-previous></a>
<a href="#" class="uk-slidenav-large" uk-slidenav-next></a>
```


## Slidenav container

To display a conjoint slidenav, wrap the slidenav items inside a `<div>` element and add the `.uk-slidenav-container` class, as well as one of the `.uk-position-*` classes.

```html
<div class="uk-slidenav-container">
    <a href="" uk-slidenav-previous></a>
    <a href="" uk-slidenav-next></a>
</div>
```

```example
<div class="uk-slidenav-container">
    <a href="" uk-slidenav-previous></a>
    <a href="" uk-slidenav-next></a>
</div>
```


## Position as overlay

To position the slidenav on top of an element or the [Slideshow component](slideshow.md) for example, just add one of the `.uk-position-*` classes from the [Position component](position.md). To create a position context on the container, add the `.uk-position-relative` class.

Use the `.uk-light` or `.uk-dark` class from the [Inverse component](inverse.md) to apply a light or dark color for better visibility.

```html
<div class="uk-position-relative uk-light">

    <!-- The element which is wrapped goes here -->

    <a class="uk-position-center-left" href="" uk-slidenav-previous></a>
    <a class="uk-position-center-right" href="" uk-slidenav-next></a>

</div>
```

**Note** You can also apply the [Visibility component](visibility.md#toggle), so that the slidenav only appears on hover.

```example
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>

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

    <a class="text-white hover:text-white/90 uk-slidenav-large uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="text-white hover:text-white/90 uk-slidenav-large uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name        | Affected Classes         |
|------------------|--------------------------|
| `hook-slidenav`  | `.uk-slidenav`           |
| `hook-hover`     | `.uk-slidenav:hover`     |
| `hook-active`    | `.uk-slidenav:active`    |
| `hook-previous`  | `.uk-slidenav-previous`  |
| `hook-next`      | `.uk-slidenav-next`      |
| `hook-large`     | `.uk-slidenav-large`     |
| `hook-container` | `.uk-slidenav-container` |
| `hook-misc`      | `*`                      |