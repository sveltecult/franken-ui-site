---
group: components
name: Tooltip
title: Tailwind CSS Tooltip Component
meta:
    description: Easily create a nice looking tooltip.
javascript: full
---

# Tooltip

<p class="mt-2 text-xl text-muted-foreground">Easily create a nice looking tooltip.</p>

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Tooltip component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        tooltip: {
            hooks: {}
        }
    }
}),
```

To apply this component, add the `uk-tooltip` attribute to an element. You also need to add the `title: TEXT` option to the attribute, whose value will represent your tooltip's text.

```html
<div uk-tooltip="title: Hello World"></div>
```

If `title` is the only option in the attribute value, you can also use `uk-tooltip="TEXT"`

```html
<div uk-tooltip="Hello World"></div>
```

```example
<button class="uk-button uk-button-default" uk-tooltip="Hello World">Hover</button>
```


## Alignment

Add one of the following options to the `uk-tooltip` attribute to adjust the tooltip's alignment.

```html
<button uk-tooltip="title: Hello World; pos: top-left"></button>
```

| Attribute           | Description                             |
| ------------------- | --------------------------------------- |
| `pos: top`          | Aligns the tooltip to the top.          |
| `pos: top-left`     | Aligns the tooltip to the top left.     |
| `pos: top-right`    | Aligns the tooltip to the top right.    |
| `pos: bottom`       | Aligns the tooltip to the bottom.       |
| `pos: bottom-left`  | Aligns the tooltip to the bottom left.  |
| `pos: bottom-right` | Aligns the tooltip to the bottom right. |
| `pos: left`         | Aligns the tooltip to the left.         |
| `pos: right`        | Aligns the tooltip to the right.        |

```example
<p class="flex flex-wrap gap-3">
    <button class="uk-button uk-button-default" uk-tooltip="Hello World">Top</button>
    <button class="uk-button uk-button-default" uk-tooltip="title: Hello World; pos: top-left">Top Left</button>
    <button class="uk-button uk-button-default" uk-tooltip="title: Hello World; pos: top-right">Top Right</button>
    <button class="uk-button uk-button-default" uk-tooltip="title: Hello World; pos: bottom">Bottom</button>
    <button class="uk-button uk-button-default" uk-tooltip="title: Hello World; pos: bottom-left">Bottom Left</button>
    <button class="uk-button uk-button-default" uk-tooltip="title: Hello World; pos: bottom-right">Bottom Right</button>
    <button class="uk-button uk-button-default" uk-tooltip="title: Hello World; pos: left">Left</button>
    <button class="uk-button uk-button-default" uk-tooltip="title: Hello World; pos: right">Right</button>
</p>
```


## Delay

If you want the tooltip to appear with a little delay, just add the `delay` option to the `uk-tooltip` attribute with your value in milliseconds.

```html
<div uk-tooltip="title: Hello World; delay: 500"></div>
```

```example
<button class="uk-button uk-button-default" uk-tooltip="title: Hello World; delay: 500">Hover</button>
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name      | Affected Classes |
|----------------|------------------|
| `hook-tooltip` | `.uk-tooltip`    |
| `hook-misc`    | `*`              |

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option      | Value  | Default                 | Description                                                                                          |
|-------------|--------|-------------------------|------------------------------------------------------------------------------------------------------|
| `title`     | String |                         | Tooltip text.                                                                                        |
| `pos`       | String | `top-center`            | Tooltip position.                                                                                    |
| `offset`    | Number | `false`                 | Tooltip offset.                                                                                      |
| `animation` | String | `uk-animation-scale-up` | Space-separated names of [animations](animation.md). Comma-separated for animation out.              |
| `duration`  | Number | `100`                   | The animation duration.                                                                              |
| `delay`     | Number | `0`                     | The show delay.                                                                                      |
| `cls`       | String | `uk-active`             | The active class.                                                                                    |
| `container` | String | `body`                  | Define a target container via a selector to specify where the tooltip should be appended in the DOM. |

`title` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

```html
<span uk-tooltip="Hello World"></span>
```


## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```javascript
UIkit.tooltip(element, options);
```

### Events

The following events will be triggered on elements, which are injected by this component:

| Name         | Description                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| `beforeshow` | Fires before an item is shown. Can prevent showing by calling `preventDefault()` on the event. |
| `show`       | Fires after an item is shown.                                                                  |
| `shown`      | Fires after the item's show animation has completed.                                           |
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires after an item's hide animation has started.                                              |
| `hidden`     | Fires after an item is hidden.                                                                 |

#### Example

```javascript
UIkit.util.on(document, 'show', '.uk-tooltip.uk-active', function() {
  // do something
});
```

### Methods

The following methods are available for the component:

#### Show

```javascript
UIkit.tooltip(element).show();
```

Shows the Tooltip.

#### Hide

```javascript
UIkit.tooltip(element).hide();
```

Hides the Tooltip.


## Accessibility

The Tooltip component adheres to the [Tooltip Widget WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) and automatically sets the appropriate WAI-ARIA roles, states and properties.

- The *element with the tooltip* has an ID. 
- The *tooltip* has the `tooltip` role and the `aria-describedby` property set to the ID of the element with the tooltip. 
