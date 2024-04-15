---
group: components
name: Progress
title: Tailwind CSS Progress Component
meta:
    description: Defines progress bars that indicate how far along a process is.
javascript: partial
---

# Progress

<p class="mt-2 text-xl text-muted-foreground">Defines progress bars that indicate how far along a process is.</p>

## Usage

On your `tailwind.config.js` file, add the Progress component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        progress: {
            hooks: {}
        }
    }
}),
```

To apply this component, add the `.uk-progress` class to a `<progress>` element.

```html
<progress class="uk-progress" value="" max=""></progress>
```

```example
<progress id="js-progressbar" class="uk-progress" value="10" max="100"></progress>

<script>

    UIkit.util.ready(function () {

        var bar = document.getElementById('js-progressbar');

        var animate = setInterval(function () {

            bar.value += 10;

            if (bar.value >= bar.max) {
                clearInterval(animate);
            }

        }, 1000);

    });

</script>

```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name       | Affected Classes                       |
|-----------------|----------------------------------------|
| `hook-progress` | `.uk-progress`                         |
| `hook-bar`      | `.uk-progress::-webkit-progress-value` |
| `hook-bar`      | `.uk-progress::-moz-progress-bar`      |
| `hook-misc`     | `*`                                    |
