---
group: components
name: Leader
title: Tailwind CSS Leader Component
meta:
    description: Create dot leaders for pricing menus or tables of contents.
javascript: full
---

# Tailwind CSS Leader

<p class="mt-2 text-xl text-muted-foreground">Create dot leaders for pricing menus or tables of contents.</p>

A leader, also known as a dot leader or a tab leader, is a repeating pattern used to visually connect content across horizontal spaces. It is most commonly used for restaurant menus, between the meals and prices, and for tables of contents, between titles and page numbers.


## Usage

On your `tailwind.config.js` file, add the Leader component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        leader: {
            hooks: {}
        }
    }
}),
```

To apply this component, add the `uk-leader` attribute to the element on the left. A line of characters, by default dots, will then fill the remaining space between the item and its adjacent element.

```html
<div uk-leader></div>
```

```example
<div class="flex gap-x-3">
    <div class="flex-1" uk-leader="fill: .">Lorem ipsum dolor sit amet</div>
    <div class="flex-none">$20.90</div>
</div>
```


## Fill character

To change the dot to any custom character, just add the `fill: STRING` option to the attribute.

```html
<div uk-leader="fill: -"></div>
```

```example
<div class="flex gap-x-3">
    <div class="flex-1" uk-leader="fill: -">Lorem ipsum dolor sit amet</div>
    <div class="flex-none">$20.90</div>
</div>
```

**Note** The default fill character can be set through CSS variable.

```css
.uk-leader-fill-content::before { content: '.'; }
:root { --uk-leader-fill-content: '.'; }
```


## Responsive

It's possible to disable the leader for different device widths by applying the `media` option to the attribute and adding the appropriate viewport width. Add a number in pixels, for example `media: 640`, or a breakpoint, for example `media: @m`. The leader will be shown from the specified viewport width and upwards, but not below.

```html
<div uk-leader="media: @m"></div>
```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name       | Affected Classes |
|-----------------|------------------|
| `hook-leader`   | `.uk-leader`     |
| `hook-misc`     | `*`              |

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)


| Option  | Value                   | Default | Description                                                                                                                                                |
| ------- | ----------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fill`  | String                  |         | Optional fill character.                                                                                                                                   |
| `media` | Boolean, Number, String | `false` | Condition for the space filling - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). |


## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```javascript
UIkit.leader(element, options);
```
