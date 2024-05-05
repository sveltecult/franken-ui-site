---
group: components
name: Overlay
title: Tailwind CSS Overlay Component
meta:
    description: Create an image overlay, which comes in different styles.
javascript: none
---

# Tailwind CSS Overlay

<p class="mt-2 text-xl text-muted-foreground">Create an image overlay, which comes in different styles.</p>

## Usage

On your `tailwind.config.js` file, add the Overlay component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        overlay: {
            hooks: {}
        }
    }
}),
```

Add the `.uk-overlay` class to an element following an image to create the overlay panel. To create a position context, add the `.uk-inline` class from the [Utility component](utility.md#inline) to a container element around both. Finally, add one of the `.uk-position-*` classes from the [Position component](position.md) to align the overlay.

```html
<div class="uk-inline">
    <img src="" width="" height="" alt="">
    <div class="uk-overlay uk-position-bottom"></div>
</div>
```

```example
<div class="uk-inline">
    <img src="/images/photo.jpg" width="1800" height="1200" alt="">
    <div class="uk-overlay uk-light uk-position-bottom">
        <p class="text-white">Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
```


## Style modifiers

By default, the overlay has padding, but no additional styling. Add one of these modifier classes to add a background color to the overlay.

### Default

For a simple background color, add the `.uk-overlay-default` class. Or, you can use Tailwind CSS `bg-*` classes. You can even add `backdrop-blur-*` for blur effect.

```example
<div class="grid md:grid-cols-2 gap-3">
    <div>

        <div class="uk-inline">
            <img src="/images/photo.jpg" width="1800" height="1200" alt="">
            <div class="uk-overlay uk-overlay-default uk-position-bottom">
                <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

    </div>

    <div>

        <div class="uk-inline">
            <img src="/images/photo.jpg" width="1800" height="1200" alt="">
            <div class="uk-overlay bg-white/60 uk-position-bottom backdrop-blur-sm">
                <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

    </div>
    <div>

        <div class="uk-inline">
            <img src="/images/photo.jpg" width="1800" height="1200" alt="">
            <div class="bg-white/60 uk-position-cover backdrop-blur-sm"></div>
            <div class="uk-overlay uk-position-bottom uk-dark">
                <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

    </div>
</div>
```


### Primary

For a prominent background color, add the `.uk-overlay-primary` class. Or, you can use Tailwind CSS `bg-*` classes. You can even add `backdrop-blur-*` for blur effect.

```example
<div class="grid md:grid-cols-2 gap-3">
    <div>

        <div class="uk-inline">
            <img src="/images/photo.jpg" width="1800" height="1200" alt="">
            <div class="uk-overlay uk-overlay-primary uk-position-bottom">
                <p class="text-white">Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

    </div>

    <div>

        <div class="uk-inline">
            <img src="/images/photo.jpg" width="1800" height="1200" alt="">
            <div class="uk-overlay bg-black/60 uk-position-bottom backdrop-blur-sm">
                <p class="text-white">Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

    </div>
    <div>

        <div class="uk-inline">
            <img src="/images/photo.jpg" width="1800" height="1200" alt="">
            <div class="bg-black/60 uk-position-cover backdrop-blur-sm"></div>
            <div class="uk-overlay uk-position-bottom uk-dark">
                <p class="text-white">Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

    </div>
</div>
```


## Overlay icon

To display an overlay icon, add the `uk-overlay-icon` attribute to a `<span>` element inside the overlay.

```html
<div class="uk-position-center">
    <span uk-overlay-icon></span>
</div>
```

```example
<div class="grid md:grid-cols-2 gap-3">
    <div>

        <div class="uk-inline uk-light">
            <img src="/images/dark.jpg" width="1800" height="1200" alt="">
            <div class="uk-position-center">
                <span class="text-white" uk-overlay-icon></span>
            </div>
        </div>

    </div>
    <div>

        <div class="uk-inline uk-dark">
            <img src="/images/photo.jpg" width="1800" height="1200" alt="">
            <div class="uk-overlay-default uk-position-cover">
                <div class="uk-position-center">
                    <span uk-overlay-icon></span>
                </div>
            </div>
        </div>

    </div>
</div>
```


## Position

Add one of the `.uk-position-*` classes from the [Position component](position.md) to align the overlay.

```html
<div class="uk-overlay uk-position-top"></div>
```

```example
<div class="grid md:grid-cols-2 gap-3">
    <div>
        <div class="uk-inline">
            <img src="/images/photo.jpg" width="1800" height="1200" alt="">
            <div class="uk-overlay uk-overlay-default uk-position-top">
                <p>Top</p>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-inline">
            <img src="/images/photo.jpg" width="1800" height="1200" alt="">
            <div class="uk-overlay uk-overlay-default uk-position-center">
                <p>Center</p>
            </div>
        </div>
    </div>
</div>
```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name      | Affected Classes      |
|----------------|-----------------------|
| `hook-overlay` | `.uk-overlay`         |
| `hook-icon`    | `.uk-overlay-icon`    |
| `hook-default` | `.uk-overlay-default` |
| `hook-primary` | `.uk-overlay-primary` |
| `hook-misc`    | `*`                   |