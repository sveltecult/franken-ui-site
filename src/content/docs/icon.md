---
group: components
name: Icon
title: Tailwind CSS Icon Component
meta:
    description: Place scalable vector icons anywhere in your content.
javascript: full
---

# Tailwind CSS Icon

<p class="mt-2 text-xl text-muted-foreground">Place scalable vector icons anywhere in your content.</p>

UIkit comes with its own SVG icon system and a comprehensive library, which comprises a growing number of elegant outline icons. This component injects SVGs into the site, so that they adopt color and can be styled with CSS.

## Usage

<span class="uk-badge uk-badge-danger">v0.0.10+</span> If you are using the `presetQuick()`, you can skip this step. On your `tailwind.config.js` file, add the Icon component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        icon: {
            hooks: {}
        }
    }
}),
```

Make sure to include the icon library script, for more details see the [installation instructions](introduction.md).

```html
<script src="uikit/dist/js/uikit-icons.min.js"></script>
```

To apply this component, add the `uk-icon` attribute to a `<span>` or `<a>` element. To display the actual icon, you need to append the `icon: NAME` parameter to the attribute. Et voilà, you have a vector icon which inherits color just like your text does.

```html
<span uk-icon="icon: check"></span>

<a href="" uk-icon="icon: heart"></a>
```

If `icon` is the only option in the attribute value, you can also use `uk-icon="NAME"`

```html
<span uk-icon="heart"></span>
```

```example
<span class="mr-2" uk-icon="check"></span>

<a href="" uk-icon="heart"></a>
```

## Library

Here is an overview of all currently available icons. Over time, we will keep adding new icons to the list.

<h4 class="my-6 text-xl font-semibold tracking-tight">App</h4>

<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: home; ratio: 0.80"></span> home
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: sign-in; ratio: 0.80"></span> sign-in
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: sign-out; ratio: 0.80"></span> sign-out
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: user; ratio: 0.80"></span> user
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: users; ratio: 0.80"></span> users
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: lock; ratio: 0.80"></span> lock
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: unlock; ratio: 0.80"></span> unlock
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: settings; ratio: 0.80"></span> settings
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: cog; ratio: 0.80"></span> cog
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: nut; ratio: 0.80"></span> nut
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: comment; ratio: 0.80"></span> comment
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: commenting; ratio: 0.80"></span> commenting
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: comments; ratio: 0.80"></span> comments
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: hashtag; ratio: 0.80"></span> hashtag
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: tag; ratio: 0.80"></span> tag
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: cart; ratio: 0.80"></span> cart
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: bag; ratio: 0.80"></span> bag
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: credit-card; ratio: 0.80"></span> credit-card
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: mail; ratio: 0.80"></span> mail
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: receiver; ratio: 0.80"></span> receiver
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: print; ratio: 0.80"></span> print
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: search; ratio: 0.80"></span> search
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: location; ratio: 0.80"></span> location
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: bookmark; ratio: 0.80"></span> bookmark
            </li>
        </ul>
    </div>
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: code; ratio: 0.80"></span> code
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: paint-bucket; ratio: 0.80"></span> paint-bucket
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: camera; ratio: 0.80"></span> camera
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: video-camera; ratio: 0.80"></span> video-camera
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: bell; ratio: 0.80"></span> bell
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: microphone; ratio: 0.80"></span> microphone
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: bolt; ratio: 0.80"></span> bolt
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: star; ratio: 0.80"></span> star
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: heart; ratio: 0.80"></span> heart
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: happy; ratio: 0.80"></span> happy
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: lifesaver; ratio: 0.80"></span> lifesaver
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: rss; ratio: 0.80"></span> rss
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: social; ratio: 0.80"></span> social
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: git-branch; ratio: 0.80"></span> git-branch
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: git-fork; ratio: 0.80"></span> git-fork
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: world; ratio: 0.80"></span> world
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: calendar; ratio: 0.80"></span> calendar
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: clock; ratio: 0.80"></span> clock
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: history; ratio: 0.80"></span> history
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: future; ratio: 0.80"></span> future
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: crosshairs; ratio: 0.80"></span> crosshairs
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: pencil; ratio: 0.80"></span> pencil
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: trash; ratio: 0.80"></span> trash
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: move; ratio: 0.80"></span> move
            </li>
        </ul>
    </div>
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: link; ratio: 0.80"></span> link
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: eye; ratio: 0.80"></span> eye
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: eye-slash; ratio: 0.80"></span> eye-slash
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: question; ratio: 0.80"></span> question
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: info; ratio: 0.80"></span> info
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: warning; ratio: 0.80"></span> warning
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: image; ratio: 0.80"></span> image
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: thumbnails; ratio: 0.80"></span> thumbnails
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: table; ratio: 0.80"></span> table
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: list; ratio: 0.80"></span> list
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: menu; ratio: 0.80"></span> menu
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: grid; ratio: 0.80"></span> grid
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: more; ratio: 0.80"></span> more
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: more-vertical; ratio: 0.80"></span> more-vertical
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: plus; ratio: 0.80"></span> plus
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: plus-circle; ratio: 0.80"></span> plus-circle
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: minus; ratio: 0.80"></span> minus
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: minus-circle; ratio: 0.80"></span> minus-circle
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: close; ratio: 0.80"></span> close
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: check; ratio: 0.80"></span> check
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: ban; ratio: 0.80"></span> ban
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: refresh; ratio: 0.80"></span> refresh
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: play; ratio: 0.80"></span> play
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: play-circle; ratio: 0.80"></span> play-circle
            </li>
        </ul>
    </div>
</div>

<h4 class="my-6 text-xl font-semibold tracking-tight">Devices</h4>

<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: tv; ratio: 0.80"></span> tv
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: desktop; ratio: 0.80"></span> desktop
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: laptop; ratio: 0.80"></span> laptop
            </li>
        </ul>
    </div>
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: tablet; ratio: 0.80"></span> tablet
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: phone; ratio: 0.80"></span> phone
            </li>
        </ul>
    </div>
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: tablet-landscape; ratio: 0.80"></span> tablet-landscape
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: phone-landscape; ratio: 0.80"></span> phone-landscape
            </li>
        </ul>
    </div>
</div>

<h4 class="my-6 text-xl font-semibold tracking-tight">Storage</h4>

<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: file; ratio: 0.80"></span> file
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: file-text; ratio: 0.80"></span> file-text
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: file-pdf; ratio: 0.80"></span> file-pdf
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: copy; ratio: 0.80"></span> copy
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: file-edit; ratio: 0.80"></span> file-edit
            </li>
        </ul>
    </div>
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: folder; ratio: 0.80"></span> folder
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: album; ratio: 0.80"></span> album
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: push; ratio: 0.80"></span> push
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: pull; ratio: 0.80"></span> pull
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: server; ratio: 0.80"></span> server
            </li>
        </ul>
    </div>
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: database; ratio: 0.80"></span> database
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: cloud-upload; ratio: 0.80"></span> cloud-upload
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: cloud-download; ratio: 0.80"></span> cloud-download
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: download; ratio: 0.80"></span> download
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: upload; ratio: 0.80"></span> upload
            </li>
        </ul>
    </div>
</div>

<h4 class="my-6 text-xl font-semibold tracking-tight">Direction</h4>

<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: reply; ratio: 0.80"></span> reply
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: forward; ratio: 0.80"></span> forward
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: expand; ratio: 0.80"></span> expand
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: shrink; ratio: 0.80"></span> shrink
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: arrow-up; ratio: 0.80"></span> arrow-up
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: arrow-down; ratio: 0.80"></span> arrow-down
            </li>
        </ul>
    </div>
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: arrow-left; ratio: 0.80"></span> arrow-left
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: arrow-right; ratio: 0.80"></span> arrow-right
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: chevron-up; ratio: 0.80"></span> chevron-up
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: chevron-down; ratio: 0.80"></span> chevron-down
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: chevron-left; ratio: 0.80"></span> chevron-left
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: chevron-right; ratio: 0.80"></span> chevron-right
            </li>
        </ul>
    </div>
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: chevron-double-left; ratio: 0.80"></span> chevron-double-left
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: chevron-double-right; ratio: 0.80"></span> chevron-double-right
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: triangle-up; ratio: 0.80"></span> triangle-up
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: triangle-down; ratio: 0.80"></span> triangle-down
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: triangle-left; ratio: 0.80"></span> triangle-left
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: triangle-right; ratio: 0.80"></span> triangle-right
            </li>
        </ul>
    </div>
</div>

<h4 class="my-6 text-xl font-semibold tracking-tight">Editor</h4>

<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: bold; ratio: 0.80"></span> bold
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: italic; ratio: 0.80"></span> italic
            </li>
        </ul>
    </div>
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: strikethrough; ratio: 0.80"></span> strikethrough
            </li>
        </ul>
    </div>
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: quote-right; ratio: 0.80"></span> quote-right
            </li>
        </ul>
    </div>
</div>

<h4 class="my-6 text-xl font-semibold tracking-tight">Brands</h4>

<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: 500px; ratio: 0.80"></span> 500px
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: android; ratio: 0.80"></span> android
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: android-robot; ratio: 0.80"></span> android-robot
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: apple; ratio: 0.80"></span> apple
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: behance; ratio: 0.80"></span> behance
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: discord; ratio: 0.80"></span> discord
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: dribbble; ratio: 0.80"></span> dribbble
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: etsy; ratio: 0.80"></span> etsy
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: facebook; ratio: 0.80"></span> facebook
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: flickr; ratio: 0.80"></span> flickr
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: foursquare; ratio: 0.80"></span> foursquare
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: github; ratio: 0.80"></span> github
            </li>
        </ul>
    </div>
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: github-alt; ratio: 0.80"></span> github-alt
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: gitter; ratio: 0.80"></span> gitter
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: google; ratio: 0.80"></span> google
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: instagram; ratio: 0.80"></span> instagram
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: joomla; ratio: 0.80"></span> joomla
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: linkedin; ratio: 0.80"></span> linkedin
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: microsoft; ratio: 0.80"></span> microsoft
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: pagekit; ratio: 0.80"></span> pagekit
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: pinterest; ratio: 0.80"></span> pinterest
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: reddit; ratio: 0.80"></span> reddit
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: soundcloud; ratio: 0.80"></span> soundcloud
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: tiktok; ratio: 0.80"></span> tiktok
            </li>
        </ul>
    </div>
    <div>
        <ul class="space-y-2">
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: tripadvisor; ratio: 0.80"></span> tripadvisor
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: tumblr; ratio: 0.80"></span> tumblr
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: twitch; ratio: 0.80"></span> twitch
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: twitter; ratio: 0.80"></span> twitter
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: uikit; ratio: 0.80"></span> uikit
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: vimeo; ratio: 0.80"></span> vimeo
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: whatsapp; ratio: 0.80"></span> whatsapp
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: wordpress; ratio: 0.80"></span> wordpress
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: xing; ratio: 0.80"></span> xing
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: yelp; ratio: 0.80"></span> yelp
            </li>
            <li class="flex items-center gap-x-2">
                <span class="text-muted-foreground" uk-icon="icon: youtube; ratio: 0.80"></span> youtube
            </li>
        </ul>
    </div>
</div>


## Ratio

Add the `ratio: 2` parameter to the `uk-icon` attribute to double its size – or any other number, depending on how big you want your icon to be.

```html
<span uk-icon="icon: check; ratio: 2"></span>
```

```example
<span class="mr-2" uk-icon="icon: check; ratio: 2"></span>
<span uk-icon="icon: check; ratio: 3.5"></span>
```


## Link modifier

To reset the default link styling to a more muted color when using an icon inside an anchor, add the `.uk-icon-link` class.

```html
<a href="" class="uk-icon-link" uk-icon="heart"></a>
```

```example
<div>
    <a href="#" class="uk-icon-link mr-2" uk-icon="icon: copy; ratio: 0.80"></a>
    <a href="#" class="uk-icon-link mr-2" uk-icon="icon: file-edit; ratio: 0.80"></a>
    <a href="#" class="uk-icon-link" uk-icon="icon: trash; ratio: 0.80"></a>
</div>
```


## Button modifier

Use the modifier `.uk-icon-button` class on an `<a>` element to create an icon button, which can be used for social icons.

```html
<a href="" class="uk-icon-button" uk-icon="twitter"></a>
```

```example
<div>
    <a href="" class="uk-icon-button mr-2" uk-icon="icon: twitter; ratio: 0.80"></a>
    <a href="" class="uk-icon-button  mr-2" uk-icon="icon: facebook; ratio: 0.80"></a>
    <a href="" class="uk-icon-button" uk-icon="icon: youtube; ratio: 0.80"></a>
</div>
```

## Image modifier

You can also make any background image scale to the size of an icon. Just add the `.uk-icon-image` class and a background image path.

```example
<span class="uk-icon uk-icon-image" style="background-image: url(/images/dark.jpg);"></span>
```

## Available hooks

Learn more about [using hooks](hooks.md).

| Hook Name            | Affected Classes                                       |
|----------------------|--------------------------------------------------------|
| `hook-icon`          | `.uk-icon`                                             |
| `hook-link`          | `.uk-icon-link`                                        |
| `hook-link-hover`    | `.uk-icon-link:hover`                                  |
| `hook-link-active`   | `.uk-icon-link:active, .uk-active > .uk-icon-link`     |
| `hook-button`        | `.uk-icon-button`                                      |
| `hook-button-hover`  | `.uk-icon-button:hover`                                |
| `hook-button-active` | `.uk-icon-button:active, .uk-active > .uk-icon-button` |
| `hook-misc`          | `*`                                                    |

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option  | Value  | Default | Description          |
|---------|--------|---------|----------------------|
| `icon`  | String |         | The icon to display. |
| `ratio` | Number | `1`     | The icon size ratio. |

`icon` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

```html
<span uk-icon="heart"></span>
```


## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```javascript
UIkit.icon(element, options);
```
### Properties

#### svg

A JavaScript Promise that will resolve with the added SVG Node.

```javascript
UIkit.icon(element).svg.then(function(svg) { svg.querySelector('path').style.stroke = 'red'; })
```


## Accessibility

Set the appropriate WAI-ARIA roles, states and properties to the Icon component. 

- If an `<a>` element is used, set the `aria-label` property to the `<a>` element to describe its meaning.

```html
<a href="" uk-icon="icon: heart" aria-label="..."></a>
```
