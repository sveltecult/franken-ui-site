---
group: components
name: Notification
title: Tailwind CSS Notification Component
meta:
    description: Create toggleable notifications that fade out automatically.
javascript: full
---

# Tailwind CSS Notification

<p class="mt-2 text-xl text-muted-foreground">Create toggleable notifications that fade out automatically.</p>

## Usage

On your `tailwind.config.js` file, add the Notification component within the `ui()` plugin.

```javascript
import ui from "franken-ui";

ui({
    components: {
        notification: {
            hooks: {},
            media: true
        }
    }
}),
```

The notification will not fade out but remain visible when you hover the message until you stop hovering. You can also close the notification by clicking it. To show notifications, the component provides a simple JavaScript API. The following code snippet gets you started.

### JavaScript

```javascript
UIkit.notification({
    message: 'my-message!',
    status: 'primary',
    pos: 'top-right',
    timeout: 5000
});

// Shortcuts
UIkit.notification('My message');
UIkit.notification('My message', status);
UIkit.notification('My message', { /* options */ });
```

```example
<button class="demo uk-button uk-button-default" type="button" onclick="UIkit.notification({message: 'Notification message'})">Click me</button>

```


## HTML message

You can use HTML inside your notification message, like an icon from the Icon component.

```javascript
UIkit.notification("<span uk-icon='icon: check'></span> Message");
```

```example
<button
  class="demo uk-button uk-button-default"
  type="button"
  onclick="UIkit.notification({
      message: '<div class=\'flex gap-x-2 items-center\'><span class=\'flex-none\' uk-icon=\'icon: check; ratio: 0.8\'></span> Message with an icon</div>'
  })"
>
  With icon
</button>
```

## Position

Add one of the following parameters to adjust the notification's position to different corners.


```javascript
UIkit.notification("...", {pos: 'top-right'})
```

| Position        | Code                                                |
|-----------------|-----------------------------------------------------|
| `top-left`      | `UIkit.notification("...", {pos: 'top-left'})`      |
| `top-center`    | `UIkit.notification("...", {pos: 'top-center'})`    |
| `top-right`     | `UIkit.notification("...", {pos: 'top-right'})`     |
| `bottom-left`   | `UIkit.notification("...", {pos: 'bottom-left'})`   |
| `bottom-center` | `UIkit.notification("...", {pos: 'bottom-center'})` |
| `bottom-right`  | `UIkit.notification("...", {pos: 'bottom-right'})`  |


```example
<p class="flex flex-wrap gap-3">
    <button class="uk-button uk-button-default" type="button" onclick="UIkit.notification({message: 'Top Left...', pos: 'top-left'})">Top Left</button>
    <button class="uk-button uk-button-default" type="button" onclick="UIkit.notification({message: 'Top Center...', pos: 'top-center'})">Top Center</button>
    <button class="uk-button uk-button-default" type="button" onclick="UIkit.notification({message: 'Top Right...', pos: 'top-right'})">Top Right</button>
    <button class="uk-button uk-button-default" type="button" onclick="UIkit.notification({message: 'Bottom Left...', pos: 'bottom-left'})">Bottom Left</button>
    <button class="uk-button uk-button-default" type="button" onclick="UIkit.notification({message: 'Bottom Center...', pos: 'bottom-center'})">Bottom Center</button>
    <button class="uk-button uk-button-default" type="button" onclick="UIkit.notification({message: 'Bottom Right...', pos: 'bottom-right'})">Bottom Right</button>
</p>
```



## Style

A notification can be styled by adding a status to the message to indicate a primary, success, warning or a danger status.

```javascript
UIkit.notification("...", {status: 'primary'})
```

| Style     | Code                                            |
|-----------|-------------------------------------------------|
| `primary` | `UIkit.notification("...", {status:'primary'})` |
| `success` | `UIkit.notification("...", {status:'success'})` |
| `warning` | `UIkit.notification("...", {status:'warning'})` |
| `danger`  | `UIkit.notification("...", {status:'danger'})`  |

```example
<p uk-margin>
    <button class="uk-button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'Primary message...', status: 'primary'})">Primary</button>
    <button class="uk-button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'Success message...', status: 'success'})">Success</button>
    <button class="uk-button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'Warning message...', status: 'warning'})">Warning</button>
    <button class="uk-button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'Danger message...', status: 'danger'})">Danger</button>
</p>
```


## Close all

You can close all open notifications by calling `UIkit.notification.closeAll()`.

```example
<button class="uk-button uk-button-default close" onclick="UIkit.notification.closeAll()">Close All</button>

```

## Available hooks

Learn more about [using hooks](/docs/introduction#using-hooks).

| Hook Name           | Affected Classes                                        |
|---------------------|---------------------------------------------------------|
| `hook-notification` | `.uk-notification`                                      |
| `hook-message`      | `.uk-notification-message`                              |
| `hook-close`        | `.uk-notification-close`                                |
| `hook-close-hover`  | `.uk-notification-message:hover .uk-notification-close` |
| `hook-primary`      | `.uk-notification-message-primary`                      |
| `hook-success`      | `.uk-notification-message-success`                      |
| `hook-warning`      | `.uk-notification-message-warning`                      |
| `hook-danger`       | `.uk-notification-message-danger`                       |
| `hook-misc`         | `*`                                                     |

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option     | Value  | Default      | Description                                                                                                   |
|------------|--------|--------------|---------------------------------------------------------------------------------------------------------------|
| `message ` | String | `false`      | Notification message to show.                                                                                 |
| `status`   | String | `null`       | Notification status color.                                                                                    |
| `timeout`  | Number | `5000`       | Visibility duration until a notification disappears. If set to `0`, notification will not hide automatically. |
| `group`    | String |              | Useful, if you want to close all notifications in a specific group.                                           |
| `pos`      | String | `top-center` | Display corner.                                                                                               |


## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

This is a `Functional Component` and may omit the element argument.

```javascript
UIkit.notification(options);
UIkit.notification(message, status);
```

### Events

The following events will be triggered on elements with this component attached:

| Name    | Description                                   |
|---------|-----------------------------------------------|
| `close` | Fires after the notification has been closed. |

### Methods

The following methods are available for the component:

#### Close

```javascript
UIkit.notification(element).close(immediate);
```

Closes the notification.

| Name        | Type    | Default | Description                      |
|-------------|---------|---------|----------------------------------|
| `immediate` | Boolean | true    | Transition the notification out. |


## Accessibility

The Notification component automatically sets the appropriate WAI-ARIA role, states and properties.

- The *notification* has the `alert` role.
