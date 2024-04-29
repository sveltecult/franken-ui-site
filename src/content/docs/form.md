---
group: components
name: Form
title: Tailwind CSS Form Component
meta:
    description: Easily create nice looking forms with different styles and layouts.
javascript: partial
---

# Tailwind CSS Form

<p class="mt-2 text-xl text-muted-foreground">Easily create nice looking forms with different styles and layouts.</p>

## Usage

On your `tailwind.config.js` file, add the Form Range and Form components within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        'form-range': {
            hooks: {}
        },
        form: {
            hooks: {},
            media: true
        }
    }
}),
```

Add one of the following classes to form controls inside a `<form>` element to define them.

| Class                  | Description                                                                       |
|------------------------|-----------------------------------------------------------------------------------|
| `.uk-input`            | Add this class to `<input>` elements.                                             |
| `.uk-select`           | Add this class to `<select>` elements.                                            |
| `.uk-textarea`         | Add this class to `<textarea>` elements.                                          |
| `.uk-radio`            | Add this class to `<input type="radio">` elements to create radio buttons.        |
| `.uk-checkbox`         | Add this class to `<input type="checkbox">` elements to create checkboxes.        |
| `.uk-range`            | Add this class to `<input type="range">` elements to create range forms.          |
| `.uk-toggle-switch`    | Add this class to `<input type="checkbox">` elements to create toggle switches.   |

```html
<form>
    <input class="uk-input" type="text">
    <select class="uk-select">
        <option></option>
        <option></option>
    </select>
    <textarea class="uk-textarea"></textarea>
    <input class="uk-radio" type="radio">
    <input class="uk-checkbox" type="checkbox">
    <input class="uk-range" type="range">
</form>
```

Add the `.uk-fieldset` class to a `<fieldset>` element and the `.uk-legend` class to a `<legend>` element to define a fieldset and a form legend.

```example
<form>
    <fieldset class="uk-fieldset">

        <legend class="uk-legend">Legend</legend>

        <div class="mt-3">
            <input class="uk-input" type="text" placeholder="Input" aria-label="Input">
        </div>

        <div class="mt-3">
            <select class="uk-select" aria-label="Select">
                <option>Option 01</option>
                <option>Option 02</option>
            </select>
        </div>

        <div class="mt-3">
            <textarea class="uk-textarea" rows="5" placeholder="Textarea" aria-label="Textarea"></textarea>
        </div>

        <div class="mt-3 space-x-3">
            <label><input class="uk-radio" type="radio" name="radio2" checked> A</label>
            <label><input class="uk-radio" type="radio" name="radio2"> B</label>
        </div>

        <div class="mt-3 space-x-3">
            <label><input class="uk-checkbox" type="checkbox" checked> A</label>
            <label><input class="uk-checkbox" type="checkbox"> B</label>
        </div>

        <div class="mt-3">
            <input class="uk-range" type="range" value="2" min="0" max="10" step="0.1" aria-label="Range">
        </div>

    </fieldset>
</form>
```

## States modifiers

Provide the user with basic information through feedback states on form controls by using one of the following classes.

| Class              | Description                                                        |
|--------------------|--------------------------------------------------------------------|
| `.uk-form-danger`  | Add this class to notify the user that the value is not validated. |

Add the `disabled` attribute to a form control. It will appear muted.

```example
<div class="mt-3">
    <input class="uk-input uk-form-danger uk-form-width-medium" type="text" placeholder="form-danger" aria-label="form-danger" value="form-danger">
</div>

<div class="mt-3">
    <input class="uk-input uk-form-width-medium" type="text" placeholder="disabled" aria-label="disabled" value="disabled" disabled>
</div>
```

## Blank modifier

Add the `.uk-form-blank` class to minimize the styling of form controls.

```example
<form>
    <input class="uk-input uk-form-blank uk-form-width-medium" type="text" placeholder="Form blank">
</form>
```

## Toggle Switch

Use the following toggle switch component to ask for a yes or no type of input from your users without the use of JavaScript.

```example
<div class="flex items-center space-x-2">
    <input class="uk-toggle-switch uk-toggle-switch-primary" id="toggle-switch" type="checkbox" />
    <label class="uk-form-label" for="toggle-switch">Toggle me</label>
</div>

<div class="mt-3 flex items-center space-x-2">
    <input class="uk-toggle-switch uk-toggle-switch-primary" checked id="toggle-checked" type="checkbox" />
    <label class="uk-form-label" for="toggle-checked">Checked toggle</label>
</div>

<div class="mt-3 flex items-center space-x-2">
    <input class="uk-toggle-switch uk-toggle-switch-primary" disabled id="toggle-disabled" type="checkbox" />
    <label class="uk-form-label" for="toggle-disabled">Disabled toggle</label>
</div>

<div class="mt-3 flex items-center space-x-2">
    <input class="uk-toggle-switch uk-toggle-switch-primary" checked disabled id="toggle-disabled-checked" type="checkbox" />
    <label class="uk-form-label" for="toggle-disabled-checked">Disabled checked toggle</label>
</div>
```

### Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

| Class                         | Description               |
| ----------------------------- | ------------------------- |
| `.uk-toggle-swtich-primary`   | Adds a primary style.     |
| `.uk-toggle-switch-danger`    | Adds a destructive style. |

```example
<div class="flex flex-wrap gap-3">
    <input class="uk-toggle-switch uk-toggle-switch-primary" checked type="checkbox" />
    <input class="uk-toggle-switch uk-toggle-switch-danger" checked type="checkbox" />
</div>
```

## Tag input

Tag inputs render tags inside an input, followed by an actual text input.

| Class                 | Description                                                 |
|-----------------------|-------------------------------------------------------------|
| `.uk-tag-input`       | Add this class to hold tags and the actual text input.      |
| `.uk-tag`             | Add this class to a `span` to display the tag.              |

```example
<div class="uk-tag-input">
    <span class="uk-tag">
        Apple
        <span class="uk-close" uk-close></span>
    </span>
    <span class="uk-tag">
        Banana
        <span class="uk-close" uk-close></span>
    </span>
    <span class="uk-tag">
        Mango
        <span class="uk-close" uk-close></span>
    </span>

    <input placeholder="Fruits"/>
</div>
```

## Pin input

Allows users to input a sequence of one-character alphanumeric inputs.

| Class                 | Description                                                 |
|-----------------------|-------------------------------------------------------------|
| `.uk-pin-input`       | Add this class to hold all the inputs.                      |
| `.uk-pin-separated`   | Add this modifier separate all the inputs.                  |
| `.uk-disabled`        | Add this class to disable all the inputs.                   |

```example
<div>
    <div class="uk-pin-input">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>
</div>

<div class="mt-5">
    <div class="uk-pin-input uk-disabled">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>
</div>
```

### Separated

```example
<div>
    <div class="uk-pin-input uk-pin-separated">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>
</div>

<div class="mt-5">
    <div class="uk-pin-input uk-pin-separated uk-disabled">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>
</div>
```

## Help block

Form text can be created using `.uk-form-help`.

Form text should be explicitly associated with the form control it relates to using the `aria-describedby` attribute. This will ensure that assistive technologies—such as screen readers—will announce this form text when the user focuses or enters the control. 

```example
<div class="space-y-1">
    <label for="name" class="uk-form-label">Name</label>
    <input type="text" id="name" class="uk-input" aria-describedby="name-help-block" placeholder="Name">
    <div id="name-help-block" class="uk-form-help">
    This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.
    </div>
</div>
```

## Layout

Define labels and controls and apply a stacked or horizontal layout to form elements. Layout modifiers can be added to any parent element like the `<fieldset>` element. This makes it possible to have different form layouts for each fieldset.

| Class                 | Description                                                 |
|-----------------------|-------------------------------------------------------------|
| `.uk-form-stacked`    | Add this class to display labels on top of controls.        |
| `.uk-form-horizontal` | Add this class to display labels and controls side by side. |
| `.uk-form-label`      | Add this class to define form labels.                       |
| `.uk-form-controls`   | Add this class to define form controls.                     |

```html
<form class="uk-form-stacked">
    <div>
        <label class="uk-form-label"></label>
        <div class="uk-form-controls">...</div>
    </div>
    <div>
        <div class="uk-form-label"></div>
        <div class="uk-form-controls">...</div>
    </div>
</form>
```

```example
<form class="uk-form-stacked">

    <div class="mt-3">
        <label class="uk-form-label" for="form-stacked-text">Text</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="form-stacked-text" type="text" placeholder="Some text...">
        </div>
    </div>

    <div class="mt-3">
        <label class="uk-form-label" for="form-stacked-select">Select</label>
        <div class="uk-form-controls">
            <select class="uk-select" id="form-stacked-select">
                <option>Option 01</option>
                <option>Option 02</option>
            </select>
        </div>
    </div>

    <div class="mt-3">
        <div class="uk-form-label">Radio</div>
        <div class="uk-form-controls">
            <label><input class="uk-radio" type="radio" name="radio1"> Option 01</label><br>
            <label><input class="uk-radio" type="radio" name="radio1"> Option 02</label>
        </div>
    </div>

</form>
```

### Horizontal form

Use the `.uk-form-controls-text` class to better align checkboxes and radio buttons when using them with text in a horizontal layout.

```html
<form class="uk-form-horizontal">
    <div>
        <label class="uk-form-label"></label>
        <div class="uk-form-controls">...</div>
    </div>
    <div>
        <div class="uk-form-label"></div>
        <div class="uk-form-controls uk-form-controls-text">...</div>
    </div>
</form>
```

```example
<form class="uk-form-horizontal mt-3-large">

    <div class="mt-3">
        <label class="uk-form-label" for="form-horizontal-text">Text</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="form-horizontal-text" type="text" placeholder="Some text...">
        </div>
    </div>

    <div class="mt-3">
        <label class="uk-form-label" for="form-horizontal-select">Select</label>
        <div class="uk-form-controls">
            <select class="uk-select" id="form-horizontal-select">
                <option>Option 01</option>
                <option>Option 02</option>
            </select>
        </div>
    </div>

    <div class="mt-3">
        <div class="uk-form-label">Radio</div>
        <div class="uk-form-controls uk-form-controls-text">
            <label><input class="uk-radio" type="radio" name="radio1"> Option 01</label><br>
            <label><input class="uk-radio" type="radio" name="radio1"> Option 02</label>
        </div>
    </div>

</form>
```

## Form and icons

You use an icon from the [Icon component](icon.md) inside a form. Add the `.uk-form-icon` class to a `<span>` element. Group it with an `<input>` element by adding the `.uk-inline` class from the [Utility component](utility.md#inline) to a container element around both. The icon has to come first in the markup. By default, the icon will be placed on the left side of the form. To change the alignment, add the `.uk-form-icon-flip` class.

```html
<div class="uk-inline">
    <span class="uk-form-icon" uk-icon="icon: user"></span>
    <input class="uk-input">
</div>
```

```example
<form>

    <div class="mt-3">
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input class="uk-input" type="text" aria-label="Not clickable icon">
        </div>
    </div>

    <div class="mt-3">
        <div class="uk-inline">
            <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
            <input class="uk-input" type="text" aria-label="Not clickable icon">
        </div>
    </div>

</form>
```

### Clickable icons

To enable an action, for example opening a modal to pick an image or link, use an `<a>` or `<button>` element to create the icon.

```html
<div class="uk-inline">
    <a class="uk-form-icon uk-form-icon-flip" href="" uk-icon="icon: user"></a>
    <input class="uk-input">
</div>
```

```example
<form>

    <div class="mt-3">
        <div class="uk-inline">
            <a class="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
            <input class="uk-input" type="text" aria-label="Clickable icon">
        </div>
    </div>

    <div class="mt-3">
        <div class="uk-inline">
            <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: link"></a>
            <input class="uk-input" type="text" aria-label="Clickable icon">
        </div>
    </div>

</form>
```

## Custom controls

To replace a file inputs or select forms with your own HTML content, like a button or text, add the `uk-form-custom` attribute to a container element.

### File

Use a button or text as a file input.

```html
<div uk-form-custom>
    <input type="file">
    <button type="button"></button>
</div>
```

```example
<form>

    <div class="mt-3">
        <div uk-form-custom>
            <input type="file" aria-label="Custom controls">
            <button class="uk-button uk-button-default" type="button" tabindex="-1">Select</button>
        </div>
    </div>

    <div class="mt-3">
        <span class="uk-text-middle">Here is a text</span>
        <div uk-form-custom>
            <input type="file" aria-label="Custom controls">
            <span class="font-medium underline underline-offset-4">upload</span>
        </div>
    </div>

    <div class="mt-3" mt-3>
        <div uk-form-custom="target: true">
            <input type="file" aria-label="Custom controls">
            <input class="uk-input uk-form-width-medium" type="text" placeholder="Select file" aria-label="Custom controls" disabled>
        </div>
        <button class="uk-button uk-button-default">Submit</button>
    </div>

</form>
```

**Note** The hover and focus state for `uk-form-custom` are not styled by default, but you could use the adjacent sibling selector to do so.

### Select

Use a button, text or a link as a select form. Just add the `target: SELECTOR` option to the `uk-form-custom` attribute to select where the option value should be displayed. `target: true` will select the adjacent element in the markup.

```html
<div uk-form-custom="target: true">
    <select>
        <option></option>
        <option></option>
    </select>
    <button type="button"></button>
</div>
```

```example
<form>

    <div class="mt-3">
        <div uk-form-custom="target: true">
            <select aria-label="Custom controls">
                <option value="1">Option 01</option>
                <option value="2">Option 02</option>
                <option value="3">Option 03</option>
                <option value="4">Option 04</option>
            </select>
            <span></span>
        </div>
    </div>

    <div class="mt-3">
        <div uk-form-custom="target: > * > span:last-child">
            <select aria-label="Custom controls">
                <option value="1">Option 01</option>
                <option value="2">Option 02</option>
                <option value="3">Option 03</option>
                <option value="4">Option 04</option>
            </select>
            <span class="uk-link">
                <span uk-icon="icon: pencil"></span>
                <span></span>
            </span>
        </div>
    </div>

    <div class="mt-3">
        <div uk-form-custom="target: > * > span:first-child">
            <select aria-label="Custom controls">
                <option value="">Please select...</option>
                <option value="1">Option 01</option>
                <option value="2">Option 02</option>
                <option value="3">Option 03</option>
                <option value="4">Option 04</option>
            </select>
            <button class="uk-button uk-button-default" type="button" tabindex="-1">
                <span></span>
                <span uk-icon="icon: chevron-down"></span>
            </button>
        </div>
    </div>

</form>
```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

### Form Range

| Hook Name          | Affected Classes                                                                                  |
|--------------------|---------------------------------------------------------------------------------------------------|
| `hook-form-range`  | `.uk-range`                                                                                       |
| `hook-track`       | `.uk-range::-webkit-slider-runnable-track`                                                        |
| `hook-track-focus` | `.uk-range:focus::-webkit-slider-runnable-track, .uk-range:active::-webkit-slider-runnable-track` |
| `hook-track`       | `.uk-range::-moz-range-track`                                                                     |
| `hook-track-focus` | `.uk-range:focus::-moz-range-track`                                                               |
| `hook-thumb`       | `.uk-range::-webkit-slider-thumb`                                                                 |
| `hook-thumb`       | `.uk-range::-moz-range-thumb`                                                                     |
| `hook-misc`        | `*`                                                                                               |

### Form

| Hook Name                           | Affected Classes                                                                        |
|-------------------------------------|-----------------------------------------------------------------------------------------|
| `hook-form`                         | `.uk-input, .uk-select, .uk-textarea`                                                   |
| `hook-single-line`                  | `.uk-input, .uk-select:not([multiple]):not([size])`                                     |
| `hook-multi-line`                   | `.uk-select[multiple], .uk-select[size], .uk-textarea`                                  |
| `hook-focus`                        | `.uk-input:focus, .uk-select:focus, .uk-textarea:focus`                                 |
| `hook-disabled`                     | `.uk-input:disabled, .uk-select:disabled, .uk-textarea:disabled`                        |
| `hook-placeholder`                  | `.uk-input::placeholder`                                                                |
| `hook-placeholder`                  | `.uk-textarea::placeholder`                                                             |
| `hook-danger`                       | `.uk-form-danger, .uk-form-danger:focus`                                                |
| `hook-danger-focus`                 | `.uk-form-danger:focus`                                                                 |
| `hook-success`                      | `.uk-form-success, .uk-form-success:focus`                                              |
| `hook-success-focus`                | `.uk-form-success:focus`                                                                |
| `hook-blank`                        | `.uk-form-blank`                                                                        |
| `hook-blank-focus`                  | `.uk-form-blank:focus`                                                                  |
| `hook-radio`                        | `.uk-radio, .uk-checkbox`                                                               |
| `hook-radio-focus`                  | `.uk-radio:focus, .uk-checkbox:focus`                                                   |
| `hook-radio-checked`                | `.uk-radio:checked, .uk-checkbox:checked, .uk-checkbox:indeterminate`                   |
| `hook-radio-checked-focus`          | `.uk-radio:checked:focus, .uk-checkbox:checked:focus, .uk-checkbox:indeterminate:focus` |
| `hook-radio-disabled`               | `.uk-radio:disabled, .uk-checkbox:disabled`                                             |
| `hook-legend`                       | `.uk-legend`                                                                            |
| `hook-label`                        | `.uk-form-label`                                                                        |
| `hook-stacked-label`                | `.uk-form-stacked .uk-form-label`                                                       |
| `hook-horizontal-label`             | `.uk-form-horizontal .uk-form-label`                                                    |
| `hook-icon`                         | `.uk-form-icon`                                                                         |
| `hook-icon-hover`                   | `.uk-form-icon:hover`                                                                   |
| `hook-toggle-switch`                | `.uk-toggle-switch`                                                                     |
| `hook-toggle-switch-before`         | `.uk-toggle-switch::before`                                                             |
| `hook-toggle-switch-checked-before` | `.uk-toggle-switch:checked::before`                                                     |
| `hook-toggle-switch-disabled`       | `.uk-toggle-switch:disabled`                                                            |
| `hook-toggle-switch-primary`        | `.uk-toggle-switch-primary:checked`                                                     |
| `hook-toggle-switch-secondary`      | `.uk-toggle-switch-secondary:checked`                                                   |
| `hook-toggle-switch-danger`         | `.uk-toggle-switch-danger:checked`                                                      |
| `hook-misc`                         | `*`                                                                                     |

## Component option

You can add this option to the `uk-form-custom` attribute. [Learn more](javascript.md#component-configuration)

| Option   | Value                 | Default | Description           |
|----------|-----------------------|---------|-----------------------|
| `target` | CSS selector, Boolean | `false` | Value display target. |

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```javascript
UIkit.formCustom(element, options);
```

## Accessibility

Set the appropriate WAI-ARIA roles, states and properties to the Form component. 

- If no `<label>` element is associated with the form control, set the `aria-label` property to the form control to describe its meaning.

```html
<input class="uk-input" type="text" aria-label="...">
```
