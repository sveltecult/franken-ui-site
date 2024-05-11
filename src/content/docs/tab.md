---
group: components
name: Tab
title: Tailwind CSS Tab Component
meta:
    description: Create a tabbed navigation with different styles.
javascript: partial
---

# Tailwind CSS Tab

<p class="mt-2 text-xl text-muted-foreground">Create a tabbed navigation with different styles.</p>

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Tab component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        tab: {
            hooks: {}
        }
    }
}),
```

The Tab component consists of clickable tabs, that are aligned side by side in a list. Its JavaScript functionality extends the [Switcher component](switcher.md) and is necessary to dynamically transition through different contents using the tabbed navigation.

| Class/Attribute | Description                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.uk-tab`       | Add this attribute to a `<ul>` element to define the Tab component. Use `<a>` elements as tab items within the list.                                           |
| `.uk-active `   | Add this class to a list item to apply an active state.                                                                                                        |
| `.uk-disabled ` | Add this class to a list item to apply a disabled state. Also remove the `href` attribute from the anchor to make it inaccessible through keyboard navigation. |

```html
<ul uk-tab>
    <li class="uk-active"><a class="px-4 pb-3 pt-2" href=""></a></li>
    <li><a class="px-4 pb-3 pt-2" href=""></a></li>
    <li class="uk-disabled"><a class="px-4 pb-3 pt-2">Disabled</a></li>
</ul>
```

```example
<ul uk-tab>
    <li class="uk-active"><a class="px-4 pb-3 pt-2" href="#">Left</a></li>
    <li><a class="px-4 pb-3 pt-2" href="#">Item</a></li>
    <li><a class="px-4 pb-3 pt-2" href="#">Item</a></li>
    <li class="uk-disabled"><a class="px-4 pb-3 pt-2">Disabled</a></li>
</ul>
```

## Alternative layout

Use the `.uk-tab-alt` class for the alternative layout.

```example
<ul class="uk-tab-alt">
    <li class="uk-active"><a href="#">Account</a></li>
    <li><a href="#">Password</a></li>
</ul>
```


## Bottom modifier

Add the `.uk-tab-bottom` class to flip tab items to the bottom.

```html
<ul class="uk-tab-bottom" uk-tab>...</ul>
```

```example
<ul class="uk-tab-bottom" uk-tab>
    <li class="uk-active"><a class="px-4 pb-3 pt-2" href="#">Left</a></li>
    <li><a class="px-4 pb-3 pt-2" href="#">Item</a></li>
    <li><a class="px-4 pb-3 pt-2" href="#">Item</a></li>
</ul>
```


## Left/Right modifiers

Add the `.uk-tab-left` or `.uk-tab-right` class to align tabs vertically to the left or right side. To save space, the alignment automatically switches back to horizontal when the viewport width goes below 960px.

When using the vertical alignment, you will usually create a grid to apply the layout as seen in the [Switcher example](switcher.md#vertical-tabs).

```html
<ul class="uk-tab-left" uk-tab>...</ul>

<ul class="uk-tab-right" uk-tab>...</ul>
```

```example
<div class="grid grid-cols-2 gap-3">
    <div>
        <ul class="uk-tab flex-col uk-tab-left">
            <li class="uk-active"><a class="py-2" href="#">Left</a></li>
            <li><a class="py-2" href="#">Item</a></li>
            <li><a class="py-2" href="#">Item</a></li>
        </ul>
    </div>

    <div>
        <ul class="uk-tab uk-tab-right">
            <li class="uk-active"><a class="px-4 py-2" href="#">Right</a></li>
            <li><a class="px-4 py-2" href="#">Item</a></li>
            <li><a class="px-4 py-2" href="#">Item</a></li>
        </ul>
    </div>
</div>
```


### Responsive

To change the default breakpoint between the vertical and horizontal alignment, just apply the `media` option to the attribute with the appropriate viewport width. Add a number in pixel, for example `media: 640`, or a breakpoint, for example `media: @m`.

```html
<ul class="uk-tab-left" uk-tab="media: @s">...</ul>
```


## Alignment

You can combine tabs with flex classes from Tailwind CSS to modify the alignment of the navigations.

```html
<ul class="uk-flex-right" uk-tab>...</ul>
```

```example
<div>
    <ul uk-tab>
        <li class="uk-active"><a class="px-4 pb-3 pt-2" href="#">Center</a></li>
        <li><a class="px-4 pb-3 pt-2" href="#">Item</a></li>
        <li><a class="px-4 pb-3 pt-2" href="#">Item</a></li>
    </ul>
</div>

<div class="mt-5">
    <ul class="justify-center" uk-tab>
        <li class="uk-active"><a class="px-4 pb-3 pt-2" href="#">Center</a></li>
        <li><a class="px-4 pb-3 pt-2" href="#">Item</a></li>
        <li><a class="px-4 pb-3 pt-2" href="#">Item</a></li>
    </ul>
</div>

<div class="mt-5">
    <ul class="justify-end" uk-tab>
        <li class="uk-active"><a class="px-4 pb-3 pt-2" href="#">Right</a></li>
        <li><a class="px-4 pb-3 pt-2" href="#">Item</a></li>
        <li><a class="px-4 pb-3 pt-2" href="#">Item</a></li>
    </ul>
</div>

<div class="mt-5">
    <ul class="justify-between" uk-tab>
        <li class="uk-active"><a class="px-4 pb-3 pt-2" href="#">Justify</a></li>
        <li><a class="px-4 pb-3 pt-2" href="#">Item</a></li>
        <li><a class="px-4 pb-3 pt-2" href="#">Item</a></li>
        <li><a class="px-4 pb-3 pt-2" href="#">Item</a></li>
    </ul>
</div>
```


## Tabs and Dropdown

Tabs can be used to trigger a dropdown menu from the [Dropdown component](dropdown.md).

```html
<ul uk-tab>
    <li>

        <!-- This is the menu item toggling the dropdown -->
        <a class="px-4 pb-3 pt-2" href=""></a>

        <!-- This is the dropdown -->
        <div uk-dropdown="mode: click">
            <ul class="uk-nav uk-dropdown-nav">...</ul>
        </div>

    </li>
</ul>
```

```example
<ul uk-tab>
    <li class="uk-active"><a class="px-4 pb-3 pt-2" href="#">Active</a></li>
    <li><a class="px-4 pb-3 pt-2" href="#">Item</a></li>
    <li>
        <a class="px-4 pb-3 pt-2" href>More <span uk-icon="icon: triangle-down"></span></a>
        <div uk-dropdown="mode: click">
            <ul class="uk-nav uk-dropdown-nav">
                <li class="uk-active"><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li class="uk-nav-header">Header</li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li class="uk-nav-divider"></li>
                <li><a href="#">Item</a></li>
            </ul>
        </div>
    </li>
</ul>
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name            | Affected Classes             |
|----------------------|------------------------------|
| `hook-tab`           | `.uk-tab`                    |
| `hook-tab-before`    | `.uk-tab::before`            |
| `hook-item`          | `.uk-tab > * > a`            |
| `hook-item-hover`    | `.uk-tab > * > a:hover`      |
| `hook-item-active`   | `.uk-tab > .uk-active > a`   |
| `hook-item-disabled` | `.uk-tab > .uk-disabled > a` |
| `hook-bottom`        | `.uk-tab-bottom`             |
| `hook-bottom-before` | `.uk-tab-bottom::before`     |
| `hook-bottom-item`   | `.uk-tab-bottom > * > a`     |
| `hook-left`          | `.uk-tab-left`               |
| `hook-left-before`   | `.uk-tab-left::before`       |
| `hook-right`         | `.uk-tab-right`              |
| `hook-right-before`  | `.uk-tab-right::before`      |
| `hook-left-item`     | `.uk-tab-left > * > a`       |
| `hook-right-item`    | `.uk-tab-right > * > a`      |
| `hook-misc`          | `*`                          |

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option      | Value          | Default | Description                                                                                                                                                  |
|-------------|----------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `connect`   | CSS selector   | `false` | Related item's container. By default, this is the next element with the 'uk-switcher' class.                                                                 |
| `toggle `   | CSS selector   | `> *`   | The toggle selector, which triggers content switching on click.                                                                                              |
| `active `   | Number         | `0`     | Active index on init. Providing a negative number indicates a position starting from the end of the set.                                                     |
| `animation` | String         | `false` | Space-separated names of [animations](animation.md). Comma-separated for animation out.                                                                      |
| `duration`  | Number         | `200`   | The animation duration.                                                                                                                                      |
| `swiping`   | Boolean        | `true`  | Use swiping.                                                                                                                                                 |
| `media`     | Number, String | `960`   | When to switch to horizontal mode - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). |


## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```javascript
UIkit.tab(element, options);
```

### Events

The following events will be triggered on the connected items of the elements with this component attached:

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

#### Show

```javascript
UIkit.tab(element).show(index);
```

Shows the Tab item with given index.

| Name    | Type                 | Default | Description                      |
| ------- | -------------------- | ------- | -------------------------------- |
| `index` | String, Number, Node | 0       | Tab item to show. 0 based index. |


## Accessibility

The Tab component adheres to the [Tab WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/) and automatically sets the appropriate WAI-ARIA roles, states and properties.

- The *tab navigation* has the `tablist` role, and if it is a [Nav component](nav.md), the `aria-orientation` state set to `vertical`. 
- The *tab navigation items* have the `presentation` role. 
- The *tab navigation links* have an ID, the `tab` role, the `aria-selected` state and the `aria-controls` property set to the ID of the respective content item. 
- The *content list* has the `presentation` role.
- The *content list items* have the ID, the `tabpanel` role and the `aria-labelledby` property set to the ID of the respective tab.

### Keyboard interaction

The tab navigation can be accessed through keyboard using the following keys.

- The <kbd>tab</kbd> or <kbd>shift+tab</kbd> keys place focus on the active tab in the tab navigation. If the focus already is on the active tab, the focus will move to the next element outside the tab navigation. 
- The <kbd>left/right arrow</kbd> or <kbd>up/down arrow</kbd> keys, depending on the orientation, navigate through the tabs. If the focus is on the last tab, it moves to the first tab.  
- The <kbd>enter</kbd> or <kbd>space</kbd> keys activate the corresponding content item of the focused tab.
- The <kbd>home</kbd> or <kbd>end</kbd> keys move the focus to the first or last tab.

By default, the Switcher component has the manual activation behavior. This means the corresponding content items will only be activated using the <kbd>enter</kbd> or <kbd>space</kbd>keys. To switch to automatic activation, set `follow-focus` to `true`. When navigating through tab items, the corresponding content item will get active automatically. 
