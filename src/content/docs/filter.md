---
group: components
name: Filter
title: Tailwind CSS Filter Component
meta:
    robots: noindex
    description: Filter or sort items in any given layout by metadata.
javascript: full
---

# Tailwind CSS Filter

<p class="mt-2 uk-text-lead">Filter or sort items in any given layout by metadata.</p>

```render
<div class="mt-6 uk-alert uk-alert-danger">
    <div class="uk-alert-title">
        Notice
    </div>
    <div class="uk-alert-description">
        This documentation is a work in progress.
    </div>
</div>
```

The Filter component is often used together with the [Grid component](grid.md), especially the masonry grid, but it's not bound to it. Any layout can be filtered or sorted no matter how the items are positioned. Items fade and move with smooth transitions between the different filtering and sorting states.


## Usage

To apply this component, you need a container element with the `uk-filter="target: SELECTOR"` attribute. Inside this container create a list of filter controls as well as the layout items you want to filter. Use the `target: SELECTOR` option to select the element containing the layout items.

```html
<div uk-filter="target: .js-filter">

    <!-- Filter controls -->
    <ul>
        <li><a href="#"></a></li>
    </ul>

    <!-- Layout items -->
    <ul class="js-filter">
        <li></li>
    </ul>

</div>
```

Next, we need to define the metadata for each layout item, for example which category the item belongs to. Use any HTML class or attribute to do so.

To apply a filter control, add the `uk-filter-control` attribute. To define the metadata that should be filtered, use the `filter: SELECTOR` option. The selector can be any CSS selector like an HTML class or an attribute you define for the layout items.

```html
<div uk-filter="target: .js-filter">

    <ul>
        <li uk-filter-control="filter: .tag-primary"><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li class="tag-primary"></li>
    </ul>

</div>
```

If `target` is the only option in the `uk-filter` attribute value, you can also use `uk-filter="SELECTOR"`. The same applies to the filter control. If `filter` is the only option in the `uk-filter-control` attribute value, you can also use `uk-filter-control="SELECTOR"`.

```html
<div uk-filter=".js-filter">

    <ul>
        <li uk-filter-control=".tag-primary"><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li class="tag-primary"></li>
    </ul>

</div>
```

```example
<div uk-filter="target: .js-filter">

    <ul class="uk-subnav uk-subnav-primary">
        <li uk-filter-control=".tag-transparent"><a href="#">Transparent</a></li>
        <li uk-filter-control=".tag-primary"><a href="#">Primary</a></li>
        <li uk-filter-control=".tag-secondary"><a href="#">Secondary</a></li>
    </ul>

    <ul class="js-filter grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
        <li class="tag-transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li class="tag-primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li class="tag-transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li class="tag-transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li class="tag-secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li class="tag-secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li class="tag-primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li class="tag-secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li class="tag-primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li class="tag-transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li class="tag-primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li class="tag-secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
    </ul>

</div>
```

The Filter component comes unstyled, which allows you to use any of the other UIkit components to create the filter controls and layout items. For example, the [Nav](nav.md), [Subnav](subnav.md) and [Tab](tab.md) components can be used to style the filter controls. Usually, the [Grid component](grid.md) is used to create the item layout.



## Animations

By default, the filter uses a `slide` animation for the items between the different filtering states. To apply a different animation, just add the `animation` option to the attribute.

| Animation      | Description                                                |
| -------------- | ---------------------------------------------------------- |
| `slide`        | Fade items out and in or slide them to their new position. |
| `fade`         | Fade all items out and in.                                 |
| `delayed-fade` | Fade items slightly delayed out and in.                    |

```html
<div uk-filter="animation: fade">...</div>
```

```example
<div uk-filter="target: .js-filter; animation: fade">

    <ul class="uk-subnav uk-subnav-primary">
        <li uk-filter-control=".tag-transparent"><a href="#">Transparent</a></li>
        <li uk-filter-control=".tag-primary"><a href="#">Primary</a></li>
        <li uk-filter-control=".tag-secondary"><a href="#">Secondary</a></li>
    </ul>

    <ul class="js-filter uk-text-center mt-5 grid grid-cols-2 md:grid-cols-3 gap-3">
        <li class="tag-transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li class="tag-primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li class="tag-transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li class="tag-transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li class="tag-secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li class="tag-secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li class="tag-primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li class="tag-secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li class="tag-primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li class="tag-transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li class="tag-primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li class="tag-secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
    </ul>

</div>
```


## Active state

Add the `.uk-active` class to a filter control, and the filter will be applied initially.

```html
<li class="uk-active" uk-filter-control="[data-color='primary']">...</li>
```

```example
<div uk-filter="target: .js-filter">

    <ul class="uk-subnav uk-subnav-primary">
        <li class="uk-active" uk-filter-control="[data-color='transparent']"><a href="#">Transparent</a></li>
        <li uk-filter-control="[data-color='primary']"><a href="#">Primary</a></li>
        <li uk-filter-control="[data-color='secondary']"><a href="#">Secondary</a></li>
    </ul>

    <ul class="js-filter grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
        <li data-color="transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
    </ul>

</div>
```


## Reset filter

To reset the filter and target all items, use the `uk-filter-control` attribute without any specified selector.

```html
<li uk-filter-control>...</li>
```

```example
<div uk-filter="target: .js-filter">

    <ul class="uk-subnav uk-subnav-primary">
        <li class="uk-active" uk-filter-control><a href="#">All</a></li>
        <li uk-filter-control="[data-color='transparent']"><a href="#">Transparent</a></li>
        <li uk-filter-control="[data-color='primary']"><a href="#">Primary</a></li>
        <li uk-filter-control="[data-color='secondary']"><a href="#">Secondary</a></li>
    </ul>

    <ul class="js-filter grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
        <li data-color="transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="primary">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="secondary">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
    </ul>

</div>
```


## Metadata

Items can have different metadata for filtering. You just need to define the HTML classes or `data` attributes and create the corresponding CSS selectors for the filter controls. This example uses `data` attributes for the filter instead of HTML classes.

```html
<div uk-filter="target: .js-filter">

    <ul>
        <li uk-filter-control="[data-tags*='primary']"><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li data-tags="primary dark"></li>
    </ul>

</div>
```

```example
<div uk-filter="target: .js-filter">

    <ul class="uk-subnav uk-subnav-primary flex-wrap gap-3">
        <li uk-filter-control="[data-tags*='transparent']"><a href="#">Transparent</a></li>
        <li uk-filter-control="[data-tags*='primary']"><a href="#">Primary</a></li>
        <li uk-filter-control="[data-tags*='secondary']"><a href="#">Secondary</a></li>
        <li uk-filter-control="[data-tags*='dark']"><a href="#">Dark Colors</a></li>
    </ul>

    <ul class="js-filter grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
        <li data-tags="transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-tags="primary dark">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-tags="transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-tags="transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-tags="secondary dark">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-tags="secondary dark">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-tags="primary dark">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-tags="secondary dark">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-tags="primary dark">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-tags="transparent">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-tags="primary dark">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-tags="secondary dark">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
    </ul>

</div>
```


## Multiple Filters

Define different types of metadata and add any number of controls to filter them. The filter controls are exclusive, meaning just one criterion is filtered at a time.

```html
<div uk-filter="target: .js-filter">

    <ul>
        <li uk-filter-control="[data-color='primary']"><a href="#"></a></li>
    </ul>

    <ul>
        <li uk-filter-control="[data-size='small']"><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li data-color="primary" class="p-3" data-size="small"></li>
    </ul>

</div>
```

```example
<div uk-filter="target: .js-filter">

    <div class="flex flex-wrap gap-3" uk-grid>
        <div>
            <ul class="uk-subnav uk-subnav-primary">
                <li class="uk-active" uk-filter-control><a href="#">All</a></li>
            </ul>
        </div>
        <div>
            <ul class="uk-subnav uk-subnav-primary">
                <li uk-filter-control="[data-color='transparent']"><a href="#">Transparent</a></li>
                <li uk-filter-control="[data-color='primary']"><a href="#">Primary</a></li>
                <li uk-filter-control="[data-color='secondary']"><a href="#">Secondary</a></li>
            </ul>
        </div>
        <div>
            <ul class="uk-subnav uk-subnav-primary">
                <li uk-filter-control="[data-size='small']"><a href="#">Small</a></li>
                <li uk-filter-control="[data-size='medium']"><a href="#">Medium</a></li>
                <li uk-filter-control="[data-size='large']"><a href="#">Large</a></li>
            </ul>
        </div>
    </div>

    <ul class="js-filter grid grid-cols-2 md:grid-cols-3" uk-grid="masonry: true">
        <li data-color="transparent" class="p-3" data-size="large">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas height="800"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="primary" class="p-3" data-size="small">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas height="400"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="transparent" class="p-3" data-size="medium">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas height="600"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="transparent" class="p-3" data-size="small">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas height="400"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="secondary" class="p-3" data-size="medium">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas height="600"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="secondary" class="p-3" data-size="small">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas height="400"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="primary" class="p-3" data-size="medium">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas height="600"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="secondary" class="p-3" data-size="large">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas height="800"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="primary" class="p-3" data-size="large">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas height="800"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="transparent" class="p-3" data-size="large">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas height="800"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="primary" class="p-3" data-size="medium">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas height="600"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="secondary" class="p-3" data-size="small">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas height="400"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
    </ul>

</div>
```


## Groups

To filter items by multiple criteria at the same time, the filter controls need to be grouped. Just add the `group: NAME` option to the `uk-filter-control` attribute and define group names for the metadata.

```html
<div uk-filter="target: .js-filter">

    <ul>
        <li uk-filter-control="filter: [data-color='primary']; group: color"><a href="#"></a></li>
        <li uk-filter-control="filter: [data-color='transparent']; group: color"><a href="#"></a></li>
    </ul>

    <ul>
        <li uk-filter-control="filter: [data-size='small']; group: size"><a href="#"></a></li>
        <li uk-filter-control="filter: [data-size='large']; group: size"><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li data-color="primary" class="p-3" data-size="small"></li>
    </ul>

</div>
```

```example
<div uk-filter="target: .js-filter">

    <div class="flex flex-wrap gap-3" uk-grid>
        <div>
            <ul class="uk-subnav uk-subnav-primary">
                <li class="uk-active" uk-filter-control><a href="#">All</a></li>
            </ul>
        </div>
        <div>
            <ul class="uk-subnav uk-subnav-primary">
                <li uk-filter-control="filter: [data-color='transparent']; group: data-color"><a href="#">Transparent</a></li>
                <li uk-filter-control="filter: [data-color='primary']; group: data-color"><a href="#">Primary</a></li>
                <li uk-filter-control="filter: [data-color='blacksecondary group: data-color"><a href="#">Secondary</a></li>
            </ul>
        </div>
        <div>
            <ul class="uk-subnav uk-subnav-primary">
                <li uk-filter-control="filter: [data-size='small']; group: size"><a href="#">Small</a></li>
                <li uk-filter-control="filter: [data-size='medium']; group: size"><a href="#">Medium</a></li>
                <li uk-filter-control="filter: [data-size='large']; group: size"><a href="#">Large</a></li>
            </ul>
        </div>
    </div>

    <ul class="js-filter grid grid-cols-2 md:grid-cols-3" uk-grid="masonry: true">
        <li data-color="transparent" class="p-3" data-size="large">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas height="800"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="primary" class="p-3" data-size="small">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas height="400"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="transparent" class="p-3" data-size="medium">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas height="600"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="transparent" class="p-3" data-size="small">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas height="400"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="secondary" class="p-3" data-size="medium">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas height="600"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="secondary" class="p-3" data-size="small">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas height="400"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="primary" class="p-3" data-size="medium">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas height="600"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="secondary" class="p-3" data-size="large">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas height="800"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="primary" class="p-3" data-size="large">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas height="800"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="transparent" class="p-3" data-size="large">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas height="800"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="primary" class="p-3" data-size="medium">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas height="600"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="secondary" class="p-3" data-size="small">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas height="400"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
    </ul>

</div>
```


## Sorting

To sort items alphanumerically, just add the `sort: ATTRIBUTE` option to the `uk-filter-control` attribute and define the metadata attribute by which the items should be sorted. By default, items are sorted in ascending order. Add the `order: desc` to sort items in descending order.

```html
<div uk-filter="target: .js-filter">

    <ul>
        <li uk-filter-control="sort: data-color"><a href="#"></a></li>
        <li uk-filter-control="sort: data-color; order: desc"><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li data-color="primary"></li>
    </ul>

</div>
```

```example
<div uk-filter="target: .js-filter">

    <ul class="uk-subnav uk-subnav-primary">
        <li class="uk-active" uk-filter-control="sort: data-date"><a href="#">Ascending</a></li>
        <li uk-filter-control="sort: data-date; order: desc"><a href="#">Descending</a></li>
    </ul>

    <ul class="js-filter grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
        <li data-date="2016-06-01">
            <div class="uk-card uk-card-default uk-card-body">2016-06-01</div>
        </li>
        <li data-date="2016-12-13">
            <div class="uk-card uk-card-primary uk-card-body">2016-12-13</div>
        </li>
        <li data-date="2017-05-20">
            <div class="uk-card uk-card-default uk-card-body">2017-05-20</div>
        </li>
        <li data-date="2017-09-17">
            <div class="uk-card uk-card-default uk-card-body">2017-09-17</div>
        </li>
        <li data-date="2017-11-03">
            <div class="uk-card uk-card-secondary uk-card-body">2017-11-03</div>
        </li>
        <li data-date="2017-12-25">
            <div class="uk-card uk-card-secondary uk-card-body">2017-12-25</div>
        </li>
        <li data-date="2018-01-30">
            <div class="uk-card uk-card-primary uk-card-body">2018-01-30</div>
        </li>
        <li data-date="2018-02-01">
            <div class="uk-card uk-card-secondary uk-card-body">2018-02-01</div>
        </li>
        <li data-date="2018-03-11">
            <div class="uk-card uk-card-primary uk-card-body">2018-03-11</div>
        </li>
        <li data-date="2018-06-13">
            <div class="uk-card uk-card-default uk-card-body">2018-06-13</div>
        </li>
        <li data-date="2018-10-27">
            <div class="uk-card uk-card-primary uk-card-body">2018-10-27</div>
        </li>
        <li data-date="2018-12-02">
            <div class="uk-card uk-card-secondary uk-card-body">2018-12-02</div>
        </li>
    </ul>

</div>
```


## Masonry Grid

A filter is often applied to a [Masonry](grid.md#masonry) grid. The filter transition works perfectly with any kind of layout no matter how the items are positioned. It even works with the [Parallax](grid.md#parallax) option from the grid.

Here is a comprehensive example with a masonry grid:

```example
<div uk-filter="target: .js-filter">

    <div class="flex items-center flex-wrap gap-3" uk-grid>
        <div class="flex-1">

            <div class="flex flex-wrap gap-3" uk-grid>
                <div>
                    <ul class="uk-subnav uk-subnav-primary">
                        <li class="uk-active" uk-filter-control><a href="#">All</a></li>
                    </ul>
                </div>
                <div>
                    <ul class="uk-subnav uk-subnav-primary">
                        <li uk-filter-control="[data-color='transparent']"><a href="#">Transparent</a></li>
                        <li uk-filter-control="[data-color='primary']"><a href="#">Primary</a></li>
                        <li uk-filter-control="[data-color='secondary']"><a href="#">Secondary</a></li>
                    </ul>
                </div>
                <div>
                    <ul class="uk-subnav uk-subnav-primary">
                        <li uk-filter-control="[data-size='small']"><a href="#">Small</a></li>
                        <li uk-filter-control="[data-size='medium']"><a href="#">Medium</a></li>
                        <li uk-filter-control="[data-size='large']"><a href="#">Large</a></li>
                    </ul>
                </div>
            </div>

        </div>
        <ul class="flex-none uk-iconnav">
            <li class="uk-active" uk-filter-control="sort: data-name"><a class="uk-icon-button" href="#" uk-icon="icon: arrow-down" aria-label="Sort ascending"></a></li>
            <li uk-filter-control="sort: data-name; order: desc"><a class="uk-icon-button" href="#" uk-icon="icon: arrow-up" aria-label="Sort descending"></a></li>
        </ul>
    </div>

    <ul class="js-filter grid grid-cols-2 md:grid-cols-3" uk-grid="masonry: true">
        <li data-color="transparent" class="p-3" data-size="large" data-name="A">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas height="800"></canvas>
                <div class="uk-position-center">A</div>
            </div>
        </li>
        <li data-color="primary" class="p-3" data-size="small" data-name="B">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas height="400"></canvas>
                <div class="uk-position-center">B</div>
            </div>
        </li>
        <li data-color="transparent" class="p-3" data-size="medium" data-name="C">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas height="600"></canvas>
                <div class="uk-position-center">C</div>
            </div>
        </li>
        <li data-color="transparent" class="p-3" data-size="small" data-name="D">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas height="400"></canvas>
                <div class="uk-position-center">D</div>
            </div>
        </li>
        <li data-color="secondary" class="p-3" data-size="medium" data-name="E">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas height="600"></canvas>
                <div class="uk-position-center">E</div>
            </div>
        </li>
        <li data-color="secondary" class="p-3" data-size="small" data-name="F">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas height="400"></canvas>
                <div class="uk-position-center">F</div>
            </div>
        </li>
        <li data-color="primary" class="p-3" data-size="medium" data-name="G">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas height="600"></canvas>
                <div class="uk-position-center">G</div>
            </div>
        </li>
        <li data-color="secondary" class="p-3" data-size="large" data-name="H">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas height="800"></canvas>
                <div class="uk-position-center">H</div>
            </div>
        </li>
        <li data-color="primary" class="p-3" data-size="large" data-name="I">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas height="800"></canvas>
                <div class="uk-position-center">I</div>
            </div>
        </li>
        <li data-color="transparent" class="p-3" data-size="large" data-name="J">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas height="800"></canvas>
                <div class="uk-position-center">J</div>
            </div>
        </li>
        <li data-color="primary" class="p-3" data-size="medium" data-name="K">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas height="600"></canvas>
                <div class="uk-position-center">K</div>
            </div>
        </li>
        <li data-color="secondary" class="p-3" data-size="small" data-name="L">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas height="400"></canvas>
                <div class="uk-position-center">L</div>
            </div>
        </li>
    </ul>

</div>
```


## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option      | Value           | Default | Description                                                  |
| ----------- | --------------- | ------- | ------------------------------------------------------------ |
| `target`    | String          |         | The targeted list on which to apply the filter to.           |
| `selActive` | String, Boolean | `false` | A selector for the initially active filter controls.         |
| `animation` | String, Boolean | `slide` | Animation mode (`slide`, `fade`, `delayed-fade` or `false`). |
| `duration`  | Number          | `250`   | Animation duration in milliseconds.                          |

`target` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.


## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```javascript
UIkit.filter(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name           | Description                              |
| -------------- | ---------------------------------------- |
| `beforeFilter` | Fires before the filter is applied.      |
| `afterFilter`  | Fires after the filter has been applied. |


## Accessibility

The Filter component automatically sets the appropriate WAI-ARIA roles, states and properties. 

- The *filter controls* have the `aria-selected` state.
