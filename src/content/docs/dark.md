---
group: getting-started
order: 2
name: Dark Mode
title: Tailwind CSS Dark Mode and Dark Mode Switcher
meta:
    description: Learn how to configure and build a dark mode switcher using Franken UI.
javascript: none
---

# Tailwind CSS Dark Mode and Dark Mode Switcher

<p class="mt-2 text-xl text-muted-foreground">Learn how to configure and build a dark mode switcher using Franken UI.</p>

Offering a dark version for your website is more of an expected feature rather than a nice to have nowadays. Luckily, Tailwind CSS has a dark mode functionality enabled and the components from Franken UI also support it by using the "class" option.

Learn how to enable and build a dark version switcher for Tailwind CSS and Franken UI by using JavaScript and the configuration file.

## Enable dark mode

For convenience, dark mode is already setup using the `preset`, `hooks()`, and `variables()` plugin on your `tailwind.config.js` file so you don't have to do anything.

```javascript
import preset from "franken-ui/shadcn-ui/preset";
import variables from "franken-ui/shadcn-ui/variables";
import ui from "franken-ui";
import hooks from "franken-ui/shadcn-ui/hooks";

const shadcn = hooks();

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  plugins: [
    variables(),
    ui()
  ],
};
```

## Dark mode switcher

If you want to create a dark mode switcher, you’ll have to add some JavaScript code and a toggle element that a user can use to change their preferences.


1\. Toggle dark mode by checking user preference in the `<head>` tag of your HTML:

```html
<script>
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
</script>
```

This will first check if you’ve previously set the theme color preference manually using the local storage and as a fallback it will either set the dark or light mode based on your browser color scheme preference.

2\. Create a `<button>` element that can be interacted with to manually change the theme color:

```html
<button id="theme-toggle">
    <svg
    id="theme-toggle-light-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-sun dark:hidden"
    ><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"
    ></path><path d="M12 20v2"></path><path
        d="m4.93 4.93 1.41 1.41"></path><path
        d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"
    ></path><path d="M20 12h2"></path><path
        d="m6.34 17.66-1.41 1.41"></path><path
        d="m19.07 4.93-1.41 1.41"></path></svg
    >
    <svg
    id="theme-toggle-dark-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-moon hidden dark:block"
    ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg
    >
</button>
```

In this example we used a `<button>` component where we change the icon inside based on the current color scheme. You can also use other elements, such as the toggle component.

3\. Add the following JavaScript inside your layout file to handle the click events on the `<button>` element:

```html
<script>
    var themeToggleBtn = document.getElementById("theme-toggle");

      themeToggleBtn.addEventListener("click", function () {
        // if set via local storage previously
        if (localStorage.getItem("color-theme")) {
          if (localStorage.getItem("color-theme") === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          }

          // if NOT set via local storage previously
        } else {
          if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          }
        }
      });
</script>
```

This script changes the icon inside the button based on previous preferences and also handles the click events by setting the dark mode preference using local storage and also adding or removing the dark class from the main `<html>` tag.