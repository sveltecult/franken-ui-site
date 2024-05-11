---
group: components
name: Table
title: Tailwind CSS Table Component
meta:
    description: Easily create nice looking tables, which come in different styles.
javascript: none
---

# Tailwind CSS Table

<p class="mt-2 text-xl text-muted-foreground">Easily create nice looking tables, which come in different styles.</p>

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Table component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        table: {
            hooks: {},
            media: true
        }
    }
}),
```

To apply this component, add the `.uk-table` class to a `<table>` element.

```html
<table class="uk-table">
    <caption class="mb-4 text-sm text-muted-foreground text-center"></caption>
    <thead>
        <tr>
            <th class="p-2"></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-2"></td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td class="p-2"></td>
        </tr>
    </tfoot>
</table>
```

```example
<table class="uk-table">
    <caption class="mb-4 text-sm text-muted-foreground text-center">Table Caption</caption>
    <thead>
        <tr>
            <th class="p-2">Table Heading</th>
            <th class="p-2">Table Heading</th>
            <th class="p-2">Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td class="p-2">Table Footer</td>
            <td class="p-2">Table Footer</td>
            <td class="p-2">Table Footer</td>
        </tr>
    </tfoot>
</table>
```


## Divider modifier

Add the `.uk-table-divider` class to display a divider between table rows.

```html
<table class="uk-table uk-table-divider">...</table>
```

```example
<table class="uk-table uk-table-divider">
    <thead>
        <tr>
            <th class="p-2">Table Heading</th>
            <th class="p-2">Table Heading</th>
            <th class="p-2">Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
    </tbody>
</table>
```


## Striped modifier

Add zebra-striping to a table by adding the `.uk-table-striped` class.

```html
<table class="uk-table uk-table-striped">...</table>
```

```example
<table class="uk-table uk-table-striped">
    <thead>
        <tr>
            <th class="p-2">Table Heading</th>
            <th class="p-2">Table Heading</th>
            <th class="p-2">Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
    </tbody>
</table>
```

## Hover modifier

Add the `.uk-table-hover` class to display a hover state on table rows.

```html
<table class="uk-table uk-table-hover">...</table>
```

```example
<table class="uk-table uk-table-hover uk-table-divider">
    <thead>
        <tr>
            <th class="p-2">Table Heading</th>
            <th class="p-2">Table Heading</th>
            <th class="p-2">Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
    </tbody>
</table>
```

## Active modifier

Add the `.uk-active` class to your `<tr>` to display an state.

```example
<table class="uk-table uk-table-hover uk-table-divider">
    <thead>
        <tr>
            <th class="p-2">Table Heading</th>
            <th class="p-2">Table Heading</th>
            <th class="p-2">Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
        <tr class="uk-active">
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
    </tbody>
</table>
```

## Justify modifier

To remove the outer padding of the first and last column so that they are flush with the table, add the `.uk-table-justify` class.

```html
<table class="uk-table uk-table-justify">...</table>
```

```example
<table class="uk-table uk-table-justify uk-table-divider">
    <thead>
        <tr>
            <th class="p-2 w-40">Table Heading</th>
            <th class="p-2">Table Heading</th>
            <th class="p-2">Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
            <td class="p-2"><button class="uk-button uk-button-default" type="button">Button</button></td>
        </tr>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
            <td class="p-2"><button class="uk-button uk-button-default" type="button">Button</button></td>
        </tr>
    </tbody>
</table>
```



## Alignment modifier

To vertically center table content, just add the `.uk-table-middle` class. You can also apply the class to `<tr>` or `<td>` elements for a more specific selection.

```html
<table class="uk-table uk-table-middle">...</table>
```

```example
<table class="uk-table uk-table-middle uk-table-divider">
    <thead>
        <tr>
            <th class="p-2 w-40">Table Heading</th>
            <th class="p-2">Table Heading</th>
            <th class="p-2">Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
            <td class="p-2"><button class="uk-button uk-button-default" type="button">Button</button></td>
        </tr>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
            <td class="p-2"><button class="uk-button uk-button-default" type="button">Button</button></td>
        </tr>
    </tbody>
</table>
```


## Responsive table

If your table happens to be wider than its container element or would eventually get too big on a specific viewport width, just  wrap it inside a `<div>` element and add the `.uk-overflow-auto` class from the [Utility component](utility.md#overflow). This creates a container that provides a horizontal scrollbar whenever the elements inside it are wider than the container itself.

```html
<div class="uk-overflow-auto">
    <table class="uk-table">...</table>
</div>
```

```example
<div class="max-w-2xl uk-overflow-auto">
    <table class="uk-table uk-table-small uk-table-divider">
        <thead>
            <tr>
                <th class="p-2">Table Heading</th>
                <th class="p-2">Table Heading</th>
                <th class="p-2">Table Heading</th>
                <th class="p-2">Table Heading</th>
                <th class="p-2">Table Heading</th>
                <th class="p-2">Table Heading</th>
                <th class="p-2">Table Heading</th>
                <th class="p-2">Table Heading</th>
                <th class="p-2">Table Heading</th>
                <th class="p-2">Table Heading</th>
                <th class="p-2">Table Heading</th>
                <th class="p-2">Table Heading</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
            </tr>
            <tr>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
            </tr>
            <tr>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
                <td class="p-2">Table Data</td>
            </tr>
        </tbody>
    </table>
</div>
```


### Stack on small viewports

If you want table columns to stack on small screens, add the `.uk-table-responsive` class.

```html
<table class="uk-table uk-table-responsive">...</table>
```

```example
<table class="uk-table uk-table-responsive uk-table-divider">
    <thead>
        <tr>
            <th class="p-2">Table Heading</th>
            <th class="p-2">Table Heading</th>
            <th class="p-2">Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
    </tbody>
</table>
```

**Note** Resize the browser window to see the columns stack.


## Column width modifier

To modify the column width or content, you can use one of the following classes. You just need to add this class to one of the column cells. It's recommended on the header cell.

| Class               | Description                                                                                                                |
|---------------------|----------------------------------------------------------------------------------------------------------------------------|
| `.uk-table-shrink ` | Add this class to a `<th>` or `<td>` element to reduce the column width to fit its content.                                |
| `.uk-table-expand`  | Add this class to a `<th>` or `<td>` element to expand the column width to fill the remaining space and apply a min-width. |
| `.w-*`              | Add one of the width utility classes from Tailwind CSS to a `<th>` or `<td>` element to modify the column width.           |

```html
<th class="p-2 uk-table-shrink"></th>
```

```example
<table class="uk-table uk-table-divider">
    <thead>
        <tr>
            <th class="p-2 uk-table-shrink">Shrink</th>
            <th class="p-2 uk-table-expand">Expand</th>
            <th class="p-2 w-40">Width Small</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
        <tr>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
            <td class="p-2">Table Data</td>
        </tr>
    </tbody>
</table>
```


## Utilities

To optimize the display of table cells and their specific content, you can add one of the following classes.

| Class                        | Description                                                                                                                                                                                                                                                                      |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `.uk-table-link`             | To link an entire cell, add this class to a `<th>`or `<td>` element and insert an `<a>`element.                                                                                                                                                                                  |
| `.uk-preserve-width `        | Since images are responsive by default in UIkit, using an image inside a table cell with the `.uk-table-shrink` class would reduce the image width to 0. To prevent this behavior, add the `.uk-preserve-width` class from the [Base component](base.md) to the `<img>` element. |
| `.max-w-0` and `.truncate`   | When applying a fixed width to a table cell, you might want to add this classes to the `<td>` element to truncate the text.                                                                                                                                                      |
| `.text-nowrap`               | Add this class to keep text from wrapping, for example when you want to shrink the column.                                                                                                                                                                                       |

```html
<!-- Table link -->
<td class="p-2 uk-table-link">
    <a href=""></a>
</td>

<!-- Preserve width -->
<td class="p-2">
    <img class="uk-preserve-width" src="" width="" height="" alt="">
</td>

<!-- Text truncate -->
<td class="p-2 uk-text-truncate"></td>

<!-- Text nowrap -->
<td class="p-2 uk-text-nowrap"></td>
```

```example
<div class="uk-overflow-auto">
    <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
        <thead>
            <tr>
                <th class="p-2 uk-table-shrink"></th>
                <th class="p-2 uk-table-shrink">Preserve</th>
                <th class="p-2 uk-table-expand">Expand + Link</th>
                <th class="p-2 w-40">Truncate</th>
                <th class="p-2 uk-table-shrink text-nowrap">Shrink + Nowrap</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="p-2"><input class="uk-checkbox" type="checkbox" aria-label="Checkbox"></td>
                <td class="p-2"><img class="uk-preserve-width uk-border-circle" src="/images/avatar.jpg" width="40" height="40" alt=""></td>
                <td class="uk-table-link">
                    <a class="block p-2" href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                </td>
                <td class="p-2 max-w-0 truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
                <td class="p-2 text-nowrap">Lorem ipsum dolor</td>
            </tr>
            <tr>
                <td class="p-2"><input class="uk-checkbox" type="checkbox" aria-label="Checkbox"></td>
                <td class="p-2"><img class="uk-preserve-width uk-border-circle" src="/images/avatar.jpg" width="40" height="40" alt=""></td>
                <td class="uk-table-link">
                    <a class="block p-2" href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                </td>
                <td class="p-2 max-w-0 truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
                <td class="p-2 text-nowrap">Lorem ipsum dolor</td>
            </tr>
            <tr>
                <td class="p-2"><input class="uk-checkbox" type="checkbox" aria-label="Checkbox"></td>
                <td class="p-2"><img class="uk-preserve-width uk-border-circle" src="/images/avatar.jpg" width="40" height="40" alt=""></td>
                <td class="uk-table-link">
                    <a class="block p-2" href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                </td>
                <td class="p-2 max-w-0 truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
                <td class="p-2 text-nowrap">Lorem ipsum dolor</td>
            </tr>
            <tr>
                <td class="p-2"><input class="uk-checkbox" type="checkbox" aria-label="Checkbox"></td>
                <td class="p-2"><img class="uk-preserve-width uk-border-circle" src="/images/avatar.jpg" width="40" height="40" alt=""></td>
                <td class="uk-table-link">
                    <a class="block p-2" href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                </td>
                <td class="p-2 max-w-0 truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
                <td class="p-2 text-nowrap">Lorem ipsum dolor</td>
            </tr>
        </tbody>
    </table>
</div>
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name          | Affected Classes                                                                                                                                 |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `hook-table`       | `.uk-table`                                                                                                                                      |
| `hook-header-cell` | `.uk-table th`                                                                                                                                   |
| `hook-cell`        | `.uk-table td`                                                                                                                                   |
| `hook-footer`      | `.uk-table tfoot`                                                                                                                                |
| `hook-caption`     | `.uk-table caption`                                                                                                                              |
| `hook-divider`     | `.uk-table-divider > tr:not(:first-child), .uk-table-divider > :not(:first-child) > tr, .uk-table-divider > :first-child > tr:not(:first-child)` |
| `hook-striped`     | `.uk-table-striped > tr:nth-of-type(odd), .uk-table-striped tbody tr:nth-of-type(odd)`                                                           |
| `hook-hover`       | `.uk-table-hover > tr:hover, .uk-table-hover tbody tr:hover`                                                                                     |
| `hook-row-active`  | `.uk-table > tr.uk-active, .uk-table tbody tr.uk-active`                                                                                         |
| `hook-small`       | `.uk-table-small th, .uk-table-small td`                                                                                                         |
| `hook-large`       | `.uk-table-large th, .uk-table-large td`                                                                                                         |
| `hook-misc`        | `*`                                                                                                                                              |