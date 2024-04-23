---
group: components
name: Offcanvas
title: Tailwind CSS Offcanvas Component
meta:
    description: Create an off-canvas sidebar that slides in and out of the page, which is perfect for creating mobile navigations.
javascript: full
---

# Tailwind CSS Offcanvas

<p class="mt-2 text-xl text-muted-foreground">Create an offcanvas sidebar that slides in and out of the page, which is perfect for creating mobile navigations.</p>

## Usage

On your `tailwind.config.js` file, add the Offcanvas component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        offcanvas: {
            hooks: {},
            media: false
        }
    }
}),
```

To apply this component, add the `uk-offcanvas` attribute to a parent `<div>` element and use the following classes.

| Class                 | Description                                                                                                                          |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `.uk-offcanvas-bar`   | Add this class to a child `<div>` element.                                                                                           |
| `.uk-offcanvas-close` | Add this class and the `uk-close` attribute to an `<a>` or `<button>` element to create a close button and enable its functionality. |

You can use any element to toggle an offcanvas sidebar. To enable the necessary JavaScript, add the `uk-toggle` attribute. An `<a>` element needs to be linked to the id of the offcanvas container. If you are using another element, like a button, just add the `uk-toggle="target: #ID"` attribute to target the id of the offcanvas container.

```html
<body>

    <!-- This is a button toggling the offcanvas -->
    <button uk-toggle="target: #my-id" type="button"></button>

    <!-- This is an anchor toggling the offcanvas -->
    <a href="#my-id" uk-toggle></a>

    <!-- This is the offcanvas -->
    <div id="my-id" uk-offcanvas>
        <div class="uk-offcanvas-bar p-6">

            <button class="uk-offcanvas-close" type="button" uk-close></button>

        </div>
    </div>

</body>
```

```example
<button class="uk-button uk-button-default mr-2" type="button" uk-toggle="target: #offcanvas-usage">Open</button>

<a href="#offcanvas-usage" uk-toggle>Open</a>

<div id="offcanvas-usage" uk-offcanvas>
    <div class="uk-offcanvas-bar p-6">

        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
</div>
```


### Overlay

To add an overlay, blanking out the page, add the `overlay: true` parameter to the `uk-offcanvas` attribute.

```html
<div id="my-id" uk-offcanvas="overlay: true">...</div>
```

```example
<button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-overlay">Open</button>

<div id="offcanvas-overlay" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar p-6">

        <button class="uk-offcanvas-close" type="button" uk-close></button>


        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
</div>
```


## Flip modifier

Add the `flip: true` parameter to the `uk-offcanvas` attribute to adjust its alignment, so that it slides in from the right.

```html
<div id="my-id" uk-offcanvas="flip: true">...</div>
```

```example
<button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-flip">Open</button>

<div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
    <div class="uk-offcanvas-bar p-6">

        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
</div>
```



## Animation modes

By default, the offcanvas slides in. But you can actually choose between different animation modes for the offcanvas's entrance. Just add one of the following attributes.

| Parameter      | Description                                                                   |
|----------------|-------------------------------------------------------------------------------|
| `mode: slide`  | The offcanvas slides out and overlays the content. This is the default mode. |
| `mode: push`   | The offcanvas slides out and pushes the site.                                |
| `mode: reveal` | The offcanvas slides out and reveals its content while pushing the site.     |
| `mode: none`   | The offcanvas appears and overlays the content without an animation.         |

```html
<div id="my-id" uk-offcanvas="mode: push">...</div>
```

```example
<div class="flex flex-wrap gap-3">
    <button class="uk-button uk-button-default mr-2" type="button" uk-toggle="target: #offcanvas-slide">Slide</button>

    <button class="uk-button uk-button-default mr-2" type="button" uk-toggle="target: #offcanvas-push">Push</button>

    <button class="uk-button uk-button-default mr-2" type="button" uk-toggle="target: #offcanvas-reveal">Reveal</button>

    <button class="uk-button uk-button-default mr-2" type="button" uk-toggle="target: #offcanvas-none">None</button>
</div>

<div id="offcanvas-slide" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar p-6">

        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
</div>

<div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
    <div class="uk-offcanvas-bar p-6">

        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
</div>

<div id="offcanvas-reveal" uk-offcanvas="mode: reveal; overlay: true">
    <div class="uk-offcanvas-bar p-6">

        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
</div>

<div id="offcanvas-none" uk-offcanvas="mode: none; overlay: true">
    <div class="uk-offcanvas-bar p-6">

        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <h3>Title</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
</div>
```


## Nav in Offcanvas

You can use the [Nav component](nav.md) inside an offcanvas to create a mobile navigation.

```html
<div id="my-id" uk-offcanvas>
    <div class="uk-offcanvas-bar p-6">
        <ul class="uk-nav uk-nav-default">...</ul>
    </div>
</div>
```

```example
<button class="uk-button uk-button-default mr-2" type="button" uk-toggle="target: #offcanvas-nav-primary">Primary Nav</button>

<button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-nav">Default Nav</button>

<div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar">

        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li class="uk-active"><a href="#">Active</a></li>
            <li class="uk-parent">
                <a href="#">Parent</a>
                <ul class="uk-nav-sub">
                    <li><a href="#">Sub item</a></li>
                    <li><a href="#">Sub item</a></li>
                </ul>
            </li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#"><span class="mr-2" uk-icon="icon: table"></span> Item</a></li>
            <li><a href="#"><span class="mr-2" uk-icon="icon: thumbnails"></span> Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#"><span class="mr-2" uk-icon="icon: trash"></span> Item</a></li>
        </ul>

    </div>
</div>

<div id="offcanvas-nav" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar">
        <ul class="uk-nav uk-nav-default">
            <li class="uk-active"><a href="#">Active</a></li>
            <li class="uk-parent">
                <a href="#">Parent</a>
                <ul class="uk-nav-sub">
                    <li><a href="#">Sub item</a></li>
                    <li><a href="#">Sub item</a></li>
                </ul>
            </li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#"><span class="mr-2" uk-icon="icon: table"></span> Item</a></li>
            <li><a href="#"><span class="mr-2" uk-icon="icon: thumbnails"></span> Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#"><span class="mr-2" uk-icon="icon: trash"></span> Item</a></li>
        </ul>
    </div>
</div>
```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name      | Affected Classes                |
|----------------|---------------------------------|
| `hook-bar`     | `.uk-offcanvas-bar`             |
| `hook-close`   | `.uk-offcanvas-close`           |
| `hook-overlay` | `.uk-offcanvas-overlay::before` |
| `hook-misc`    | `*`                             |

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option      | Value   | Default | Description                                                                                                                                               |
|-------------|---------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `mode`      | String  | `slide` | Offcanvas animation mode (`slide`, `reveal`, `push` or `none`).                                                                                           |
| `flip`      | Boolean | `false` | Flip offcanvas to the right side.                                                                                                                        |
| `overlay`   | Boolean | `false` | Display the offcanvas together with an overlay.                                                                                                          |
| `esc-close` | Boolean | `true`  | Close the offcanvas when the _Esc_ key is pressed.                                                                                                       |
| `bg-close`  | Boolean | `true`  | Close the offcanvas when the background is clicked.                                                                                                      |
| `container` | String  | `false` | Define a target container via a selector to specify where the offcanvas should be appended in the DOM. Setting it to `false` will prevent this behavior. |

`mode` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

```html
<span uk-offcanvas="push"></span>
```


## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```javascript
UIkit.offcanvas(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                          |
|--------------|------------------------------------------------------|
| `beforeshow` | Fires before an item is shown.                       |
| `show`       | Fires after an item is shown.                        |
| `shown`      | Fires after the item's show animation has completed. |
| `beforehide` | Fires before an item is hidden.                      |
| `hide`       | Fires after an item's hide animation has started.    |
| `hidden`     | Fires after an item is hidden.                       |

### Methods

The following methods are available for the component:

#### Show

```javascript
UIkit.offcanvas(element).show();
```

Shows the Offcanvas.

#### Hide

```javascript
UIkit.offcanvas(element).hide();
```

Hides the Offcanvas.


## Accessibility

The Offcanvas component adheres to the [Dialog (Modal) WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/) and automatically sets the appropriate WAI-ARIA roles, states and properties. 

- The *offcanvas bar* has the `dialog` role, and if the offcanvas has an overlay, the `aria-modal` property.

The Close component automatically sets the appropriate WAI-ARIA roles and properties.

- The *close icon* has the `aria-label` property, and if an `<a>` element is used, the `button` role.

### Keyboard interaction

The Offcanvas component can be accessed through keyboard using the following keys.

- The <kbd>esc</kbd> key closes the offcanvas. This behaviour is disabled if the `bg-close: false` option is set.
