---
group: components
name: Close
title: Tailwind CSS Close Component
meta:
    description: Create a close icon that can be combined with different components.
javascript: full
---

# Tailwind CSS Close

<p class="mt-2 uk-text-lead">Create a close icon that can be combined with different components.</p>

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Close component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        close: {
            hooks: {}
        }
    }
}),
```

To apply this component, add the `uk-close` attribute to an `<a>` or `<button>` element.

```html
<button type="button" uk-close></button>

<a href="" uk-close></a>
```

```example
<button type="button" aria-label="Close" uk-close></button>
```


## Large modifier

Add the `.uk-close-large` class for a larger close button.


```html
<button class="uk-close-large" type="button" uk-close></button>
```

```example
<button class="uk-close-large" type="button" aria-label="Close" uk-close></button>
```


## Close in alerts

This is an example of how this component is used with an alert box from the [Alert component](alert.md).

```html
<div class="uk-alert" uk-alert>
    <button class="uk-alert-close top-4 right-4" type="button" uk-close></button>
</div>
```

```example
<div uk-alert>
    <button class="uk-alert-close top-4 right-4" type="button" aria-label="Close" uk-close></button>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div>
```


## Close in drops

This is an example of how this component is used with the [Drop component](drop.md).

```html
<div uk-drop>
    <button class="uk-drop-close" type="button" uk-close></button>
</div>
```

```example
<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Click</button>
    <div uk-drop="mode: click">
        <div class="uk-card uk-card-body uk-card-default">
            <button class="uk-drop-close" type="button" aria-label="Close" uk-close></button>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </div>
</div>
```


## Close in modals

This is an example of how this component is used with the [Modal component](modal.md).

```html
<div id="modal" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-default" type="button" uk-close></button>
    </div>
</div>
```

```example
<a class="uk-button uk-button-default" href="#modal" uk-toggle>Open modal</a>

<div class="uk-flex-top uk-modal" id="modal" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <button class="uk-modal-close-default" type="button" aria-label="Close" uk-close></button>
        <h2 class="uk-modal-title">Are you absolutely sure?</h2>
        <div class="my-6 text-sm text-muted-foreground">
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </div>
        <div class="flex justify-end gap-x-2">
            <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
            <button class="uk-button uk-button-primary" type="button">Continue</button>
        </div>
    </div>
</div>
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name       | Affected Classes            |
|-----------------|-----------------------------|
| `hook-close`    | `.uk-close`                 |
| `hook-close`    | `.uk-close:hover`           |
| `hook-misc`     | `*`                         |

## Accessibility
 
The Close component automatically sets the appropriate WAI-ARIA roles and properties.

- The *close icon* has the `aria-label` property, and if an `<a>` element is used, the `button` role.

### Internationalization

The Close component uses the following translation strings. Learn more about [translating components](accessibility.md#internationalization).

| Key          | Default        | Description             |
|--------------|----------------|-------------------------|
| `label`      | `Close`        | `aria-label` attribute. |
