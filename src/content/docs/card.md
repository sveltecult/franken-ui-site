---
group: components
name: Card
title: Tailwind CSS Card Component
meta:
    description: Create layout boxes with different styles.
javascript: none
---

# Tailwind CSS Card

<p class="mt-2 text-xl text-muted-foreground">Create layout boxes with different styles.</p>

## Usage

On your `tailwind.config.js` file, add the Card component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        card: {
            hooks: {}
        }
    }
}),
```

The Card component consists of the card itself, the card body and an optional card title. Typically, cards are arranged in grid columns.

| Class            | Description                                                                    |
|------------------|--------------------------------------------------------------------------------|
| `.uk-card`       | Add this class to a `<div>` element to define the Card component.              |
| `.uk-card-body`  | Add this class to the card to create padding between the card and its content. |
| `.uk-card-title` | Add this class to a heading to define a card title.                            |

```html
<div class="uk-card uk-card-body">
    <h3 class="uk-card-title"></h3>
</div>
```

By default, a card is blank. That is why it is important to add a modifier class for styling. In our example we are using the `.uk-card-default` class.

```example
<div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
    <h3 class="uk-card-title">Default</h3>
    <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
```

## Style modifiers

UIkit includes a number of modifiers that can be used to add a specific style to cards.

| Class                | Description                                                                   |
|----------------------|-------------------------------------------------------------------------------|
| `.uk-card-default`   | Add this class to create a visually styled box.                               |
| `.uk-card-primary`   | Add this class to modify the card and emphasize it with a primary color.      |
| `.uk-card-secondary` | Add this class to modify the card and give it a secondary background color.   |
| `.uk-card-danger`    | Add this class to modify the card and give it a destructive background color. |

```html
<div class="uk-card uk-card-default"></div>

<div class="uk-card uk-card-primary"></div>

<div class="uk-card uk-card-secondary"></div>

<div class="uk-card uk-card-danger"></div>
```

```example
<div class="grid grid-cols-1 md:grid-cols-4 gap-3">
    <div>
        <div class="uk-card uk-card-default uk-card-body">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-primary uk-card-body">
            <h3 class="uk-card-title">Primary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-secondary uk-card-body">
            <h3 class="uk-card-title">Secondary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-danger uk-card-body">
            <h3 class="uk-card-title">Danger</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
```

## Header and footer

You can also divide a card into header and footer — around the default body. Just add the `.uk-card-header` or `.uk-card-footer` class to a `<div>` element inside the card.

```html
<div class="uk-card">
    <div class="uk-card-header">
        <h3 class="uk-card-title"></h3>
    </div>
    <div class="uk-card-body"></div>
    <div class="uk-card-footer"></div>
</div>
```

```example
<div class="uk-card mx-auto w-[350px]">
    <div class="uk-card-header space-y-1.5">
        <h3 class="uk-card-title">Create project</h3>
        <p class="text-sm text-muted-foreground">
            Deploy your new project in one-click.
        </p>
    </div>
    <div class="uk-card-body py-0">
    <div class="space-y-1">
        <label class="uk-form-label" for="name">Name</label>
        <input
        class="uk-input"
        id="name"
        type="text"
        aria-describedby="name-help-block"
        placeholder="Name"
        />
        <div id="name-help-block" class="uk-form-help">
        The name of your project.
        </div>
    </div>

    <div class="mt-3 space-y-1">
        <label class="uk-form-label" for="framework">Framework</label>
        <select class="uk-select" name="framework" id="framework">
        <option value="sveltekit">Sveltekit</option>
        <option value="sveltekit">Astro</option>
        </select>
    </div>
    </div>

    <div class="uk-card-footer flex justify-between">
    <button class="uk-button uk-button-default">Cancel</button>
    <button class="uk-button uk-button-primary">Deploy</button>
    </div>
</div>
```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name              | Affected Classes                                                                                  |
|------------------------|---------------------------------------------------------------------------------------------------|
| `hook-card`            | `.uk-card`                                                                                        |
| `hook-body`            | `.uk-card-body`                                                                                   |
| `hook-header`          | `.uk-card-header`                                                                                 |
| `hook-footer`          | `.uk-card-footer`                                                                                 |
| `hook-media`           | `[class*='uk-card-media']`                                                                        |
| `hook-media-top`       | `.uk-card-media-top, .uk-grid-stack > .uk-card-media-left, .uk-grid-stack > .uk-card-media-right` |
| `hook-media-bottom`    | `.uk-card-media-bottom`                                                                           |
| `hook-media-left`      | `:not(.uk-grid-stack) > .uk-card-media-left`                                                      |
| `hook-media-right`     | `:not(.uk-grid-stack) > .uk-card-media-right`                                                     |
| `hook-title`           | `.uk-card-title`                                                                                  |
| `hook-badge`           | `.uk-card-badge`                                                                                  |
| `hook-hover`           | `.uk-card-hover:not(.uk-card-default):not(.uk-card-primary):not(.uk-card-secondary):hover`        |
| `hook-default`         | `.uk-card-default`                                                                                |
| `hook-default-title`   | `.uk-card-default .uk-card-title`                                                                 |
| `hook-default-hover`   | `.uk-card-default.uk-card-hover:hover`                                                            |
| `hook-default-header`  | `.uk-card-default .uk-card-header`                                                                |
| `hook-default-footer`  | `.uk-card-default .uk-card-footer`                                                                |
| `hook-primary`         | `.uk-card-primary`                                                                                |
| `hook-primary-title`   | `.uk-card-primary .uk-card-title`                                                                 |
| `hook-primary-hover`   | `.uk-card-primary.uk-card-hover:hover`                                                            |
| `hook-secondary`       | `.uk-card-secondary`                                                                              |
| `hook-secondary-title` | `.uk-card-secondary .uk-card-title`                                                               |
| `hook-secondary-hover` | `.uk-card-secondary.uk-card-hover:hover`                                                          |
| `hook-misc`            | `*`                                                                                               |