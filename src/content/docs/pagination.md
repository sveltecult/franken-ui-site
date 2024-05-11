---
group: components
name: Pagination
title: Tailwind CSS Pagination Component
meta:
    description: Easily create a nice looking pagination to navigate through pages.
javascript: none
---

# Tailwind CSS Pagination

<p class="mt-2 text-xl text-muted-foreground">Easily create a nice looking pagination to navigate through pages.</p>

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Pagination component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        pagination: {
            hooks: {}
        }
    }
}),
```

The Pagination component consists of button-like styled links, that are aligned side by side in a horizontal list.

| Class            | Description                                                                                                                    |
|------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `.uk-pagination` | Add this class to a `<ul>` element to define the Pagination component. Use `<a>` elements as pagination items within the list. |
| `.uk-active`     | Add this class to a list item to apply an active state and use a `<span>` instead of an `<a>` element.                         |
| `.uk-disabled`   | Add this class to a list item to apply a disabled state and use a `<span>` instead of an `<a>` element.                        |

```html
<ul class="uk-pagination">
    <li><a href=""></a></li>
    <li class="uk-active"><span></span></li>
    <li class="uk-disabled"><span></span></li>
</ul>
```

```example
<ul class="uk-pagination" uk-margin>
    <li><a href="#"><span uk-pagination-previous></span></a></li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span>7</span></li>
    <li><a href="#">8</a></li>
    <li><a href="#">9</a></li>
    <li><a href="#">10</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li><a href="#"><span uk-pagination-next></span></a></li>
</ul>
```


## Alignment

The Pagination component utilizes flexbox, so navigations can easily be aligned with the [Flex component](flex.md).

```html
<ul class="uk-pagination justify-center">...</ul>
```

```example
<ul class="uk-pagination" uk-margin>
    <li><a href="#"><span uk-pagination-previous></span></a></li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">5</a></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span>7</span></li>
    <li><a href="#">8</a></li>
    <li><a href="#"><span uk-pagination-next></span></a></li>
</ul>

<ul class="uk-pagination justify-center mt-5" uk-margin>
    <li><a href="#"><span uk-pagination-previous></span></a></li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">5</a></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span>7</span></li>
    <li><a href="#">8</a></li>
    <li><a href="#"><span uk-pagination-next></span></a></li>
</ul>

<ul class="uk-pagination justify-end mt-5" uk-margin>
    <li><a href="#"><span uk-pagination-previous></span></a></li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">5</a></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span>7</span></li>
    <li><a href="#">8</a></li>
    <li><a href="#"><span uk-pagination-next></span></a></li>
</ul>
```


## Previous and next

To apply a previous and next button, add the `uk-pagination-previous` or `uk-pagination-next` attribute to a `<span>` element inside a pagination item.

```html
<ul class="uk-pagination justify-between">
    <li><a href=""><span uk-pagination-previous></span></a></li>
    <li><a href=""><span uk-pagination-next></span></a></li>
</ul>
```

```example
<ul class="uk-pagination justify-between">
    <li>
        <a class="px-4 py-2" href="#">
            <span class="mr-2" uk-pagination-previous></span> Previous
        </a>
    </li>
    <li>
        <a class="px-4 py-2" href="#">
            Next <span class="ml-2" uk-pagination-next></span>
        </a>
    </li>
</ul>
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name            | Affected Classes                    |
|----------------------|-------------------------------------|
| `hook-pagination`    | `.uk-pagination`                    |
| `hook-item`          | `.uk-pagination > * > *`            |
| `hook-item-hover`    | `.uk-pagination > * > :hover`       |
| `hook-item-active`   | `.uk-pagination > .uk-active > *`   |
| `hook-item-disabled` | `.uk-pagination > .uk-disabled > *` |
| `hook-misc`          | `*`                                 |

## Accessibility

The previous/next pagination adheres to the [button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/) and automatically sets the appropriate WAI-ARIA roles, states and properties.

- The *prev/next pagination items* have the `button` role and the `aria-label` property.

### Internationalization

The Pagination component uses the following translation strings. Learn more about [translating components](accessibility.md#internationalization).

| Key          | Default              | Description             |
|--------------|----------------------|-------------------------|
| `label`      | `Next/Previous page` | `aria-label` attribute. |
