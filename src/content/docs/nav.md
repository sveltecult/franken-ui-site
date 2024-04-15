---
group: components
name: Nav
title: Tailwind CSS Nav Component
meta:
    description: Defines different styles for list navigations.
javascript: partial
---

# Tailwind CSS Nav

<p class="mt-2 text-xl text-muted-foreground">Defines different styles for list navigations.</p>

## Usage

On your `tailwind.config.js` file, add the Nav component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        nav: {
            hooks: {}
        }
    }
}),
```

To apply this component, use the following classes.

| Class         | Description                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| `.uk-nav`     | Add this class to a `<ul>` element to define the Nav component. Use `<a>` elements as nav items within the list. |
| `.uk-active ` | Add this class to a list item to apply an active state to a menu item.                                           |

```html
<ul class="uk-nav">
    <li class="uk-active"><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
```

```example
<div>
    <ul class="uk-nav uk-nav-default">
        <li class="uk-active"><a href="#">Active</a></li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
    </ul>
</div>
```

**Note** By default, the nav has no styling. That's why it is important to add a modifier class. In our example we are using the `.uk-nav-default` class.


## Nested navs

Add the `.uk-parent` class to an item to turn it into a parent. Add the `.uk-nav-sub` class to a `<ul>` element inside the item to create the subnav.

```html
<ul class="uk-nav">
    <li class="uk-parent">
        <a href=""></a>
        <ul class="uk-nav-sub">
            <li><a href=""></a></li>
            <li>
                <a href=""></a>
                <ul>...</ul>
            </li>
        </ul>
    </li>
</ul>
```

```example
<div>
    <ul class="uk-nav uk-nav-default">
        <li class="uk-active"><a href="#">Active</a></li>
        <li class="uk-parent">
            <a href="#">Parent</a>
            <ul class="uk-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li>
                    <a href="#">Sub item</a>
                    <ul>
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>
```



## Accordion

By default, child menu items are always visible. To apply an accordion effect, just add the `uk-nav` attribute to the main `<ul>`.

**Note** The attribute automatically sets the `.uk-nav` class, so you don't have to apply it manually.

```html
<ul uk-nav>...</ul>
```

```example
<div>
    <ul class="uk-nav-default" uk-nav>
        <li class="uk-active"><a href="#">Active</a></li>
        <li class="uk-parent">
            <a href="#">Parent</a>
            <ul class="uk-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li>
                    <a href="#">Sub item</a>
                    <ul>
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="uk-parent">
            <a href="#">Parent</a>
            <ul class="uk-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li><a href="#">Sub item</a></li>
            </ul>
        </li>
    </ul>
</div>
```


### Parent icon

To create a parent icon, just add the `uk-nav-parent-icon` attribute to a `<span>` element.

```html
<ul uk-nav>
    <li>
        <a href="">Parent <span uk-nav-parent-icon></span></a>
        ...
    </li>
</ul>
```

```example
<div>
    <ul class="uk-nav-default" uk-nav>
        <li class="uk-active"><a href="#">Active</a></li>
        <li class="uk-parent">
            <a href="#">Parent <span uk-nav-parent-icon></span></a>
            <ul class="uk-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li>
                    <a href="#">Sub item</a>
                    <ul>
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="uk-parent">
            <a href="#">Parent <span uk-nav-parent-icon></span></a>
            <ul class="uk-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li><a href="#">Sub item</a></li>
            </ul>
        </li>
    </ul>
</div>
```


### Multiple open subnavs

When clicking on a parent item, an open one will close, allowing only one open nested list at a time. To allow multiple open subnavs, just add the `multiple: true` option to the attribute.

```html
<ul uk-nav="multiple: true">...</ul>
```

```example
<div>
    <ul class="uk-nav-default" uk-nav="multiple: true">
        <li class="uk-active"><a href="#">Active</a></li>
        <li class="uk-parent">
            <a href="#">Parent <span uk-nav-parent-icon></span></a>
            <ul class="uk-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li>
                    <a href="#">Sub item</a>
                    <ul>
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="uk-parent">
            <a href="#">Parent <span uk-nav-parent-icon></span></a>
            <ul class="uk-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li><a href="#">Sub item</a></li>
            </ul>
        </li>
    </ul>
</div>
```


## Header and divider

Add one of the following classes to a list item to create a header or a divider between items.

| Element           | Description                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| `.uk-nav-header`  | Add this class to a `<li>` element to create a header.                       |
| `.uk-nav-divider` | Add this class to a `<li>` element to create a divider separating nav items. |

```html
<li class="uk-nav-header"></li>

<li class="uk-nav-divider"></li>
```

```example
<div>
    <ul class="uk-nav uk-nav-default">
        <li class="uk-nav-header">Header</li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
        <li class="uk-nav-divider"></li>
        <li><a href="#">Item</a></li>
    </ul>
</div>
```


## Subtitle

Add the `.uk-nav-subtitle` class to a `div` element to create an item subtitled.

```html
<ul class="uk-nav">
    <li>
        <a href="">
            <div>
                Item
                <div class="uk-nav-subtitle">Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</div>
            </div>
        </a>
    </li>
</ul>
```

```example
<div>
    <ul class="uk-nav uk-nav-default">
        <li class="uk-active"><a href="#"><div>Active<div class="uk-nav-subtitle">Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</div></div></a></li>
        <li><a href="#"><div>Item<div class="uk-nav-subtitle">Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</div></div></a></li>
        <li><a href="#"><div>Item<div class="uk-nav-subtitle">Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</div></div></a></li>
        <li><a href="#"><div>Item<div class="uk-nav-subtitle">Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</div></div></a></li>
    </ul>
</div>
```


## Default modifier

Add the `.uk-nav-default` class to give the nav its default style. You can place the nav inside cards or anywhere else in your content.

```html
<ul class="uk-nav uk-nav-default">...</ul>
```

```example
<ul class="uk-nav uk-nav-default" uk-nav>
    <li class="uk-active"><a href="#">Active</a></li>
    <li class="uk-parent">
        <a href="#">Parent <span uk-nav-parent-icon></span></a>
        <ul class="uk-nav-sub">
            <li><a href="#">Sub item</a></li>
            <li><a href="#">Sub item</a></li>
        </ul>
    </li>
    <li class="uk-parent">
        <a href="#">Parent <span uk-nav-parent-icon></span></a>
        <ul class="uk-nav-sub">
            <li><a href="#">Sub item</a></li>
            <li><a href="#">Sub item</a></li>
        </ul>
    </li>
    <li class="uk-nav-header">Header</li>
    <li><a href="#"><span class="mr-2" uk-icon="icon: table; ratio: 0.8"></span> Item</a></li>
    <li><a href="#"><span class="mr-2" uk-icon="icon: thumbnails; ratio: 0.8"></span> Item</a></li>
    <li class="uk-nav-divider"></li>
    <li><a href="#"><span class="mr-2" uk-icon="icon: trash; ratio: 0.8"></span> Item</a></li>
</ul>
```


## Primary modifier

Add the `.uk-nav-primary` class to give the nav a more distinct styling, for example when placing it inside a modal.

```html
<ul class="uk-nav uk-nav-primary">...</ul>
```

```example
<div>
    <ul class="uk-nav-primary" uk-nav>
        <li class="uk-active"><a href="#">Active</a></li>
        <li class="uk-parent">
            <a href="#">Parent <span uk-nav-parent-icon></span></a>
            <ul class="uk-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li><a href="#">Sub item</a></li>
            </ul>
        </li>
        <li class="uk-parent">
            <a href="#">Parent <span uk-nav-parent-icon></span></a>
            <ul class="uk-nav-sub">
                <li><a href="#">Sub item</a></li>
                <li><a href="#">Sub item</a></li>
            </ul>
        </li>
        <li><a href="#">Item</a></li>
    </ul>
</div>
```


## Secondary modifier

Add the `.uk-nav-secondary` class to have an extra style if the nav has subtitles.

```html
<ul class="uk-nav uk-nav-secondary">...</ul>
```

```example
<div>
    <ul class="uk-nav uk-nav-secondary">
        <li class="uk-active"><a href="#"><div>Active<div class="uk-nav-subtitle">Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</div></div></a></li>
        <li><a href="#"><div>Item<div class="uk-nav-subtitle">Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</div></div></a></li>
        <li><a href="#"><div>Item<div class="uk-nav-subtitle">Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</div></div></a></li>
        <li><a href="#"><div>Item<div class="uk-nav-subtitle">Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</div></div></a></li>
    </ul>
</div>
```

<!-- ## Divider modifier

Add the `.uk-nav-divider` class to separate nav items with lines. This can be combined with the default, primary and secondary style modifiers.

```html
<ul class="uk-nav uk-nav-default uk-nav-divider">...</ul>
```

```example
<div>
    <ul class="uk-nav-default uk-nav-divider" uk-nav>
        <li class="uk-active"><a href="#">Active</a></li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
    </ul>
</div>
``` -->


## Nav in Dropdown

Add the `.uk-dropdown-nav` class to place a nav inside a default dropdown from the [Dropdown component](dropdown.md).

```html
<div uk-dropdown>
    <ul class="uk-nav uk-dropdown-nav">...</ul>
</div>
```

```example
<button class="uk-button uk-button-default" type="button">Hover</button>
<div uk-dropdown>
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
```


## Nav in Navbar

Add the `.uk-navbar-dropdown-nav` class to place the nav inside a navbar dropdown from the [Navbar component](navbar.md).

```html
<div class="uk-navbar-dropdown">
    <ul class="uk-nav uk-navbar-dropdown-nav">...</ul>
</div>
```

```example
<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav">
            <li>
                <a href="#">Parent</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
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

    </div>
</nav>
```


## Nav in offcanvas

A nav can be used inside an offcanvas from the [Offcanvas component](offcanvas.md). No modifier class needs to be added.

```example
<a href="#offcanvas-slide" class="uk-button uk-button-default" uk-toggle>Open</a>

<div id="offcanvas-slide" uk-offcanvas>
    <div class="uk-offcanvas-bar p-6">

        <ul class="uk-nav uk-nav-default">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>
</div>
```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name                        | Affected Classes                                                                                         |
|----------------------------------|----------------------------------------------------------------------------------------------------------|
| `hook-sub`                       | `ul.uk-nav-sub`                                                                                          |
| `hook-header`                    | `.uk-nav-header`                                                                                         |
| `hook-divider`                   | `.uk-nav .uk-nav-divider`                                                                                |
| `hook-default`                   | `.uk-nav-default`                                                                                        |
| `hook-default-item`              | `.uk-nav-default > li > a`                                                                               |
| `hook-default-item-hover`        | `.uk-nav-default > li > a:hover`                                                                         |
| `hook-default-item-active`       | `.uk-nav-default > li.uk-active > a`                                                                     |
| `hook-default-subtitle`          | `.uk-nav-default .uk-nav-subtitle`                                                                       |
| `hook-default-header`            | `.uk-nav-default .uk-nav-header`                                                                         |
| `hook-default-divider`           | `.uk-nav-default .uk-nav-divider`                                                                        |
| `hook-default-sublist`           | `.uk-nav-default .uk-nav-sub a`                                                                          |
| `hook-default-sublist-hover`     | `.uk-nav-default .uk-nav-sub a:hover`                                                                    |
| `hook-default-sublist-active`    | `.uk-nav-default .uk-nav-sub li.uk-active > a`                                                           |
| `hook-primary`                   | `.uk-nav-primary`                                                                                        |
| `hook-primary-item`              | `.uk-nav-primary > li > a`                                                                               |
| `hook-primary-item-hover`        | `.uk-nav-primary > li > a:hover`                                                                         |
| `hook-primary-item-active`       | `.uk-nav-primary > li.uk-active > a`                                                                     |
| `hook-primary-subtitle`          | `.uk-nav-primary .uk-nav-subtitle`                                                                       |
| `hook-primary-header`            | `.uk-nav-primary .uk-nav-header`                                                                         |
| `hook-primary-divider`           | `.uk-nav-primary .uk-nav-divider`                                                                        |
| `hook-primary-sublist`           | `.uk-nav-primary .uk-nav-sub a`                                                                          |
| `hook-primary-sublist-hover`     | `.uk-nav-primary .uk-nav-sub a:hover`                                                                    |
| `hook-primary-sublist-active`    | `.uk-nav-primary .uk-nav-sub li.uk-active > a`                                                           |
| `hook-secondary`                 | `.uk-nav-secondary`                                                                                      |
| `hook-secondary-item`            | `.uk-nav-secondary > li > a`                                                                             |
| `hook-secondary-item-hover`      | `.uk-nav-secondary > li > a:hover`                                                                       |
| `hook-secondary-item-active`     | `.uk-nav-secondary > li.uk-active > a`                                                                   |
| `hook-secondary-subtitle`        | `.uk-nav-secondary .uk-nav-subtitle`                                                                     |
| `hook-secondary-subtitle-hover`  | `.uk-nav-secondary > li > a:hover .uk-nav-subtitle`                                                      |
| `hook-secondary-subtitle-active` | `.uk-nav-secondary > li.uk-active > a .uk-nav-subtitle`                                                  |
| `hook-secondary-header`          | `.uk-nav-secondary .uk-nav-header`                                                                       |
| `hook-secondary-divider`         | `.uk-nav-secondary .uk-nav-divider`                                                                      |
| `hook-secondary-sublist`         | `.uk-nav-secondary .uk-nav-sub a`                                                                        |
| `hook-secondary-sublist-hover`   | `.uk-nav-secondary .uk-nav-sub a:hover`                                                                  |
| `hook-secondary-sublist-active`  | `.uk-nav-secondary .uk-nav-sub li.uk-active > a`                                                         |
| `hook-dividers`                  | `.uk-nav.uk-nav-divider > :not(.uk-nav-header, .uk-nav-divider) + :not(.uk-nav-header, .uk-nav-divider)` |
| `hook-misc`                      | `*`                                                                                                      |

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option        | Value           | Default        | Description                                                                             |
| ------------- | --------------- | -------------- | --------------------------------------------------------------------------------------- |
| `targets`     | CSS selector    | `> .uk-parent` | The element(s) to toggle.                                                               |
| `toggle `     | CSS selector    | `> a`          | The toggle element(s).                                                                  |
| `content`     | CSS selector    | `> ul`         | The content element(s).                                                                 |
| `collapsible` | Boolean         | `true`         | Allow all items to be closed.                                                           |
| `multiple`    | Boolean         | `false`        | Allow multiple open items.                                                              |
| `transition`  | String          | `ease`         | The transition to use.                                                                  |
| `animation`   | Boolean, String | `true`         | Space-separated names of [animations](animation.md). Comma-separated for animation out. |
| `duration`    | Number          | `200`          | The animation duration in milliseconds.                                                 |


## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```javascript
UIkit.nav(element, options);
```

### Methods

The following methods are available for the component:

#### Toggle

```javascript
UIkit.nav(element).toggle(index, animate);
```

Toggles the content pane.

| Name      | Type                 | Default | Description                                  |
| --------- | -------------------- | ------- | -------------------------------------------- |
| `index`   | String, Number, Node | 0       | Nav pane to toggle. 0 based index.           |
| `animate` | Boolean              | true    | Suppress opening animation by passing false. |

