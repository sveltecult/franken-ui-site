---
group: components
name: Subnav
title: Tailwind CSS Subnav Component
meta:
    description: Defines different styles for a sub navigation.
javascript: partial
---

# Tailwind CSS Subnav

<p class="mt-2 text-xl text-muted-foreground">Defines different styles for a sub navigation.</p>

## Usage

On your `tailwind.config.js` file, add the Subnav component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        subnav: {
            hooks: {}
        }
    }
}),
```

To apply this component, use the following classes. To align a subnav, for example to horizontally center it, you can use the flex classes from Tailwind CSS.

| Class         | Description                                                                                                         |
|---------------|---------------------------------------------------------------------------------------------------------------------|
| `.uk-subnav`  | Add this class to a `<ul>` element to define the Subnav component. Use `<a>` elements as nav items within the list. |
| `.uk-active ` | Add this class to a list item to apply an active state.                                                             |

To add list items without a link, use a `<span>` element instead of an `<a>`. Alternatively, disable an `<a>` element by adding the `.uk-disabled` class to the `<li>` element and remove the `href` attribute from the anchor to make it inaccessible through keyboard navigation.

```html
<ul class="uk-subnav">
    <li class="uk-active"><a href=""></a></li>
    <li><a href=""></a></li>
    <li><span></span></li>
</ul>
```

```example
<ul class="uk-subnav" uk-margin>
    <li><a href="#">Active</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>
```

## Style modifiers

Add one of the following classes for additional styles.

| Class                  | Description               |
|------------------------|---------------------------|
| `.uk-subnav-primary`   | Adds a primary style.     |
| `.uk-subnav-secondary` | Adds a secondary style.   |
| `.uk-subnav-danger`    | Adds a destructive style. |


```example
<ul class="uk-subnav uk-subnav-primary" uk-margin>
    <li class="uk-active"><a href="#">Active</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><span class="opacity-50">Disabled</span></li>
</ul>

<ul class="mt-5 uk-subnav uk-subnav-secondary" uk-margin>
    <li class="uk-active"><a href="#">Active</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><span class="opacity-50">Disabled</span></li>
</ul>

<ul class="mt-5 uk-subnav uk-subnav-danger" uk-margin>
    <li class="uk-active"><a href="#">Active</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><span class="opacity-50">Disabled</span></li>
</ul>
```

## Subnav and Dropdown

You can also use a dropdown from the [Dropdown component](dropdown.md) with a subnav.

```html
<ul class="uk-subnav">
    <li>

        <!-- This is the menu item toggling the dropdown -->
        <a href=""></a>

        <!-- This is the dropdown -->
        <div uk-dropdown="mode: click">
            <ul class="uk-nav uk-dropdown-nav">...</ul>
        </div>

    </li>
</ul>
```

```example
<ul class="uk-subnav uk-subnav-primary" uk-margin>
    <li class="uk-active"><a href="#">Active</a></li>
    <li><a href="#">Item</a></li>
    <li>
        <a href>More <span uk-icon="icon: triangle-down"></span></a>
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

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name                | Affected Classes                                                       |
|--------------------------|------------------------------------------------------------------------|
| `hook-subnav`            | `.uk-subnav`                                                           |
| `hook-item`              | `.uk-subnav > * > :first-child`                                        |
| `hook-item-hover`        | `.uk-subnav > * > a:hover`                                             |
| `hook-item-active`       | `.uk-subnav > .uk-active > a`                                          |
| `hook-divider`           | `.uk-subnav-divider > :nth-child(n + 2):not(.uk-first-column)::before` |
| `hook-pill-item`         | `.uk-subnav-pill > * > :first-child`                                   |
| `hook-pill-item-hover`   | `.uk-subnav-pill > * > a:hover`                                        |
| `hook-pill-item-onclick` | `.uk-subnav-pill > * > a:active`                                       |
| `hook-pill-item-active`  | `.uk-subnav-pill > .uk-active > a`                                     |
| `hook-item-disabled`     | `.uk-subnav > .uk-disabled > a`                                        |
| `hook-misc`              | `*`                                                                    |