---
group: components
name: Transition
title: Transition Component
meta:
    robots: noindex
    description: Create smooth transitions between two states when hovering an element.
javascript: none
---

# Transition

<p class="mt-2 uk-text-lead">Create smooth transitions between two states when hovering an element.</p>

```render
<div class="mt-6 uk-alert uk-alert-danger">
    <div class="uk-alert-title">
        Notice
    </div>
    <div class="uk-alert-description">
        This documentation is a work in progress.
    </div>
</div>
```

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

To toggle a transition on hover or focus, add the `.uk-transition-toggle` class to a parent element. Also add `tabindex="0"` to make the animation focusable through keyboard navigation and on touch devices. Add one of the `.uk-transition-*` classes to any child element to apply the actual effect.

| Class                                                                                                                                                      | Description                                                                        |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| `.uk-transition-fade`                                                                                                                                      | Lets the element fade in                                                           |
| `.uk-transition-scale-up`<br> `.uk-transition-scale-down`                                                                                                  | The element scales up or down.                                                     |
| `.uk-transition-slide-top`<br> `.uk-transition-slide-bottom`<br> `.uk-transition-slide-left`<br> `.uk-transition-slide-right`                              | Lets the element slide in from the top                                             |
| `.uk-transition-slide-top-small`<br> `.uk-transition-slide-bottom-small`<br>  `.uk-transition-slide-left-small`<br> `.uk-transition-slide-right-small`     | The element slides in from the top, bottom, left or right with a smaller distance. |
| `.uk-transition-slide-top-medium`<br> `.uk-transition-slide-bottom-medium`<br>  `.uk-transition-slide-left-medium`<br> `.uk-transition-slide-right-medium` | The element slides in from the top, bottom, left or right with a medium distance.  |

This component is mostly used in combination with the [Overlay component](overlay.md) as elements are transitioned from invisible to visible state. To place the overlay on top of another element, like an image, use the [Position component](position.md).

```html
<div class="uk-transition-toggle" tabindex="0">
    <div class="uk-transition-fade"></div>
</div>
```

```example
<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
            <img src="/images/dark.jpg" width="1800" height="1200" alt="">
            <div class="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Fade</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Fade</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
            <img src="/images/dark.jpg" width="1800" height="1200" alt="">
            <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                <p class="uk-h4 uk-margin-remove">Bottom</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Bottom</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
            <img src="/images/dark.jpg" width="1800" height="1200" alt="">
            <div class="uk-position-center">
                <span class="text-white uk-transition-fade" uk-icon="icon: plus; ratio: 2"></span>
            </div>
        </div>
        <p class="uk-margin-small-top">Icon</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
            <img src="/images/dark.jpg" width="1800" height="1200" alt="">
            <img class="uk-transition-scale-up uk-position-cover" src="/images/light.jpg" alt="">
        </div>
        <p class="uk-margin-small-top">2 Images</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
            <img class="uk-transition-scale-up uk-transition-opaque" src="/images/dark.jpg" width="1800" height="1200" alt="">
        </div>
        <p class="uk-margin-small-top">Scale Up Image</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
            <img src="/images/dark.jpg" width="1800" height="1200" alt="">
            <div class="uk-position-center">
                <div class="uk-transition-slide-top-small"><h4 class="text-white">Headline</h4></div>
                <div class="uk-transition-slide-bottom-small"><h4 class="text-white">Subheadline</h4></div>
            </div>
        </div>
        <p class="uk-margin-small-top">Small Top + Bottom</p>
    </div>
</div>
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name   | Affected Classes |
|-------------|------------------|
| `hook-misc` | `*`              |
