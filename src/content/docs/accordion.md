---
group: components
name: Accordion
title: Tailwind CSS Accordion Component
meta:
    description: A vertically stacked set of interactive headings that each reveal a section of content.
javascript: full
---

# Tailwind CSS Accordion

<p class="mt-2 text-lg text-muted-foreground">Create a list of items that can be shown individually by clicking an item's header.</p>

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Accordion component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        accordion: {
            hooks: {}
        }
    }
}),
```

The Accordion component consists of a parent container with the `uk-accordion` attribute, and a title and content part for each accordion item.

| Class                   | Description                                                                |
| ----------------------- | -------------------------------------------------------------------------- |
| `.uk-accordion-title`   | Defines and styles the toggle for each accordion item. Use `<a>` elements. |
| `.uk-accordion-icon`    | Defines and styles the icon part for each accordion item.                  |
| `.uk-accordion-content` | Defines the content part for each accordion item.                          |

```html
<ul uk-accordion>
  <li>
    <a class="uk-accordion-title" href>
      <span>Title</span>
      <span class="uk-accordion-icon"></span>
    </a>
    <div class="uk-accordion-content"></div>
  </li>
</ul>
```

```example
<ul class="uk-accordion" uk-accordion>
    <li class="uk-open">
        <a class="uk-accordion-title" href>
            Item 1
            <span class="uk-accordion-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down"
                    ><path d="m6 9 6 6 6-6"></path></svg
                >
            </span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
            Item 2
            <span class="uk-accordion-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down"
                    ><path d="m6 9 6 6 6-6"></path></svg
                >
            </span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor reprehenderit.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
            Item 3
            <span class="uk-accordion-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down"
                    ><path d="m6 9 6 6 6-6"></path></svg
                >
            </span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat proident.
            </p>
        </div>
    </li>
</ul>
```

## No collapsing

By default, all accordion items can be collapsed. To prevent this behavior and always maintain one open item, add the `collapsible: false` option to the attribute.

```html
<ul uk-accordion="collapsible: false">
  …
</ul>
```

```example
<ul class="uk-accordion" uk-accordion="collapsible: false">
    <li class="uk-open">
        <a class="uk-accordion-title" href>
            Item 1
            <span class="uk-accordion-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down"
                    ><path d="m6 9 6 6 6-6"></path></svg
                >
            </span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
            Item 2
            <span class="uk-accordion-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down"
                    ><path d="m6 9 6 6 6-6"></path></svg
                >
            </span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor reprehenderit.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
            Item 3
            <span class="uk-accordion-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down"
                    ><path d="m6 9 6 6 6-6"></path></svg
                >
            </span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat proident.
            </p>
        </div>
    </li>
</ul>
```
## Multiple open items

To display multiple content sections at the same time without one collapsing when the other one is opened, add the `multiple: true` option to the `uk-accordion` attribute.

```html
<ul uk-accordion="multiple: true">
  …
</ul>
```

```example
<ul class="uk-accordion" uk-accordion="multiple: true">
    <li class="uk-open">
        <a class="uk-accordion-title" href>
            Item 1
            <span class="uk-accordion-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down"
                    ><path d="m6 9 6 6 6-6"></path></svg
                >
            </span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
            Item 2
            <span class="uk-accordion-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down"
                    ><path d="m6 9 6 6 6-6"></path></svg
                >
            </span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor reprehenderit.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
            Item 3
            <span class="uk-accordion-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down"
                    ><path d="m6 9 6 6 6-6"></path></svg
                >
            </span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat proident.
            </p>
        </div>
    </li>
</ul>
```

## Set open items

To specify which items should be opened initially, add the `.uk-open` class to the item. You can also use this to open multiple items. Just make sure to add the option `multiple: true` to the `uk-accordion` attribute.

**Note** Alternatively, you can open a single item by adding the `active: <index>` option to the `uk-accordion` attribute, e.g. `active: 1` to show the second element (the index is zero-based). Note that this will overwrite the `uk-open` class.

```html
<ul uk-accordion>
  <li></li>
  <li class="uk-open"></li>
  <li></li>
</ul>
```

```example
<ul class="uk-accordion" uk-accordion>
    <li>
        <a class="uk-accordion-title" href>
            Item 1
            <span class="uk-accordion-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down"
                    ><path d="m6 9 6 6 6-6"></path></svg
                >
            </span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </li>
    <li class="uk-open">
        <a class="uk-accordion-title" href>
            Item 2
            <span class="uk-accordion-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down"
                    ><path d="m6 9 6 6 6-6"></path></svg
                >
            </span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor reprehenderit.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
            Item 3
            <span class="uk-accordion-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down"
                    ><path d="m6 9 6 6 6-6"></path></svg
                >
            </span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat proident.
            </p>
        </div>
    </li>
</ul>
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name           | Affected Classes                    |
|---------------------|-------------------------------------|
| `hook-accordion`    | `.uk-accordion`                     |
| `hook-item`         | `.uk-accordion > :nth-child(n + 2)` |
| `hook-title`        | `.uk-accordion-title`               |
| `hook-title-focus`  | `.uk-accordion-title:focus`         |
| `hook-title-active` | `.uk-open > .uk-accordion-title`    |
| `hook-title-hover`  | `.uk-accordion-title:hover`         |
| `hook-content`      | `.uk-accordion-content`             |
| `hook-misc`         | `*`                                 |

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/javascript#component-configuration)

| Option        | Value   | Default                   | Description                                                                                                                                                                                              |
| ------------- | ------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`      | Number  | `false`                   | Index of the element to open initially.                                                                                                                                                                  |
| `animation`   | Boolean | `true`                    | Reveal item directly or with a transition.                                                                                                                                                               |
| `collapsible` | Boolean | `true`                    | Allow all items to be closed.                                                                                                                                                                            |
| `content`     | String  | `> .uk-accordion-content` | The content selector, which selects the accordion content elements.                                                                                                                                      |
| `duration`    | Number  | `200`                     | Animation duration in milliseconds.                                                                                                                                                                      |
| `multiple`    | Boolean | `false`                   | Allow multiple open items.                                                                                                                                                                               |
| `targets`     | String  | `> *`                     | CSS selector of the element(s) to toggle.                                                                                                                                                                |
| `toggle`      | String  | `> .uk-accordion-title`   | The toggle selector, which toggles accordion items.                                                                                                                                                      |
| `transition`  | String  | `ease`                    | The transition to use when revealing items. Use keyword for [easing functions](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#Keywords_for_common_timing-functions). |
| `offset`      | Number  | `0`                       | Pixel offset added to scroll top.                                                                                                                                                                        |

## JavaScript

Learn more about [JavaScript components](/docs/javascript#programmatic-use).

### Initialization

```javascript
UIkit.accordion(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| `beforeshow` | Fires before an item is shown. Can prevent showing by calling `preventDefault()` on the event. |
| `show`       | Fires after an item is shown.                                                                  |
| `shown`      | Fires after the item's show animation has completed.                                           |
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires after an item's hide animation has started.                                              |
| `hidden`     | Fires after an item is hidden.                                                                 |

### Methods

The following methods are available for the component:

#### Toggle

```javascript
UIkit.accordion(element).toggle(index, animate);
```

Toggles the content pane.

| Name      | Type                 | Default | Description                                  |
| --------- | -------------------- | ------- | -------------------------------------------- |
| `index`   | String, Number, Node | 0       | Accordion pane to toggle. 0 based index.     |
| `animate` | Boolean              | true    | Suppress opening animation by passing false. |

## Accessibility

The Accordion component adheres to the [Accordion WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) and automatically sets the appropriate WAI-ARIA roles, states and properties.

- The _titles_ have an ID, the `button` role, the `aria-expanded` state and the `aria-controls` property set to the ID of the respective content.
- The _contents_ have an ID, the `region` role and the `aria-labelledby` property set to the ID of the respective title.

### Keyboard interaction

The Accordion component can be accessed through keyboard using the following keys.

- The <kbd>tab</kbd> or <kbd>shift+tab</kbd> keys navigate through accordion titles.
- The <kbd>enter</kbd> or <kbd>space</kbd> key toggles the content of the focused title.
