---
group: components
name: Button
title: Tailwind CSS Button Component
meta:
    description: Easily create nice looking buttons, which come in different styles.
javascript: none
---

# Tailwind CSS Button

<p class="mt-2 text-xl text-muted-foreground">Easily create nice looking buttons, which come in different styles.</p>

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Button component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        button: {
            hooks: {}
        }
    }
}),
```

To apply this component, add the `.uk-button` class and a modifier such as `.uk-button-default` to an `<a>` or `<button>` element. Add the `disabled` attribute to a `<button>` element to disable the button.

```html
<a class="uk-button uk-button-default" href=""></a>

<button class="uk-button uk-button-default"></button>

<button class="uk-button uk-button-default" disabled></button>
```

```example
<p class="flex flex-wrap gap-3">
    <a class="uk-button uk-button-default" href="#">Link</a>
    <button class="uk-button uk-button-default">Button</button>
    <button class="uk-button uk-button-default" disabled>Disabled</button>
</p>
```

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

| Class                  | Description                               |
|------------------------|-------------------------------------------|
| `.uk-button-default`   | Default button style.                     |
| `.uk-button-ghost`     | Applies a ghost style.                    |
| `.uk-button-primary`   | Indicates the primary action.             |
| `.uk-button-secondary` | Indicates an important action.            |
| `.uk-button-danger`    | Indicates a dangerous or negative action. |
| `.uk-button-text`      | Applies an typographic style.             |
| `.uk-button-link`      | Applies an plain link style.              |

```html
<button class="uk-button uk-button-primary"></button>
```

```example
<div class="flex flex-wrap gap-3">
    <button class="uk-button uk-button-default">Default</button>
    <button class="uk-button uk-button-ghost">Ghost</button>
    <button class="uk-button uk-button-primary">Primary</button>
    <button class="uk-button uk-button-secondary">Secondary</button>
    <button class="uk-button uk-button-danger">Danger</button>
</div>

<div class="mt-5 flex gap-3">
    <button class="uk-button uk-button-text">Text</button>
    <button class="uk-button uk-button-link">Link</button>
</div>
```

## Width modifiers

You can use the Tailwind CSS utility classes and the button will follow its width.

### Example

```example
<div class="flex flex-col gap-3">
    <button class="w-40 uk-button uk-button-default">w-40</button>
    <button class="w-44 uk-button uk-button-primary">w-44</button>
    <button class="w-48 uk-button uk-button-secondary">w-48</button>
    <button class="w-52 uk-button uk-button-ghost">w-52</button>
    <button class="w-full uk-button uk-button-danger">w-full</button>
</div>
```

## Button with dropdowns

A button can be used to trigger a dropdown menu from the [Dropdown component](dropdown.md).

```html
<!-- A button toggling a dropdown -->
<button class="uk-button uk-button-default" type="button"></button>
<div uk-dropdown></div>
```

```example
<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Dropdown</button>
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
</div>
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name                 | Affected Classes                                                                                                      |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------|
| `hook-button`             | `.uk-button`                                                                                                          |
| `hook-default`            | `.uk-button-default`                                                                                                  |
| `hook-default-hover`      | `.uk-button-default:hover`                                                                                            |
| `hook-default-focus`      | `.uk-button-default:focus`                                                                                            |
| `hook-default-active`     | `.uk-button-default:active, .uk-button-default.uk-active`                                                             |
| `hook-primary`            | `.uk-button-primary`                                                                                                  |
| `hook-primary-hover`      | `.uk-button-primary:hover`                                                                                            |
| `hook-primary-focus`      | `.uk-button-primary:focus`                                                                                            |
| `hook-primary-active`     | `.uk-button-primary:active, .uk-button-primary.uk-active`                                                             |
| `hook-secondary`          | `.uk-button-secondary`                                                                                                |
| `hook-secondary-hover`    | `.uk-button-secondary:hover`                                                                                          |
| `hook-secondary-focus`    | `.uk-button-secondary:focus`                                                                                          |
| `hook-secondary-active`   | `.uk-button-secondary:active, .uk-button-secondary.uk-active`                                                         |
| `hook-danger`             | `.uk-button-danger`                                                                                                   |
| `hook-danger-hover`       | `.uk-button-danger:hover`                                                                                             |
| `hook-danger-focus`       | `.uk-button-danger:focus`                                                                                             |
| `hook-danger-active`      | `.uk-button-danger:active, .uk-button-danger.uk-active`                                                               |
| `hook-disabled`           | `.uk-button-default:disabled, .uk-button-primary:disabled, .uk-button-secondary:disabled, .uk-button-danger:disabled` |
| `hook-default-disabled`   | `.uk-button-default:disabled`                                                                                         |
| `hook-primary-disabled`   | `.uk-button-primary:disabled`                                                                                         |
| `hook-secondary-disabled` | `.uk-button-secondary:disabled`                                                                                       |
| `hook-danger-disabled`    | `.uk-button-danger:disabled`                                                                                          |
| `hook-small`              | `.uk-button-small`                                                                                                    |
| `hook-large`              | `.uk-button-large`                                                                                                    |
| `hook-link`               | `.uk-button-link`                                                                                                     |
| `hook-text`               | `.uk-button-text`                                                                                                     |
| `hook-link-hover`         | `.uk-button-link:hover`                                                                                               |
| `hook-link-disabled`      | `.uk-button-link:disabled`                                                                                            |
| `hook-text-hover`         | `.uk-button-text:hover`                                                                                               |
| `hook-text-disabled`      | `.uk-button-text:disabled`                                                                                            |
| `hook-misc`               | `*`                                                                                                                   |