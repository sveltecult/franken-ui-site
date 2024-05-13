---
group: getting-started
order: 1
name: Introduction
title: Tailwind CSS Component Library
meta:
    description: Franken UI is an HTML-first, open-source library of UI components based on the utility-first Tailwind CSS with UIkit 3 compatibility. The design is based on shadcn/ui ported to be framework-agnostic.
javascript: none
---

# Tailwind CSS Component Library

<p class="mt-2 uk-text-lead">Get familiar with Franken UI.</p>

## What is Franken UI

Franken UI is an open-source library of UI components based on the utility-first Tailwind CSS, with compatibility for [UIkit 3](https://getuikit.com). The design is influenced by [shadcn/ui](https://ui.shadcn.com).

While it may appear confusing to beginners at first glance, it is actually straightforward. Let's explore Franken UI in detail:

- **Tailwind CSS** - A utility-first CSS framework that offers classes like `flex`, `pt-4`, `text-center`, and `rotate-90`, which can be combined to create any design directly in your markup.
- **UIkit** - A modular front-end framework for developing fast and powerful web interfaces.
- **shadcn/ui** - A collection of re-usable components.

Consider this: using Tailwind CSS alone may lead to cluttered HTML with numerous utility classes, which can be a nightmare to maintain. This is where UIkit shines. It provides pre-built components such as inputs, buttons, accordions, and more, along with a mature JavaScript library for modals, popovers, carousels, toast notifications, and other features. So, what is the role of shadcn/ui? Think of it as a "skin" that has a beautiful, opinionated design.

## Frequently Asked Questions

```render
<ul class="uk-accordion" uk-accordion>
    <li>
        <a class="uk-accordion-title" href>
        Why?
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
                While shadcn/ui offers beautifully designed components, it is
                React-first. Franken UI aims to provide a solution for those who
                are not comfortable using or do not want to use React.
            </p>
            <p class="mt-2">
                By leveraging existing solutions like UIkit for JavaScript and
                accessibility, Franken UI avoids the need to create a new solution
                from scratch, thus sidestepping the need to deal with React or
                other ports from Vue or Svelte.
            </p>
            <p class="mt-2">Simply put, shadcn/ui uses
                Tailwind CSS for design and Radix UI for behavior, while Franken
                UI uses Tailwind CSS for design and UIkit JavaScript for behavior.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
        Do I need to use Tailwind CSS with Franken UI?
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
                No, Tailwind CSS is not required. However, using it can provide
                many conveniences, such as Intellisense for class names and
                automating the removal of unused CSS.
            </p>
            <p class="mt-2">
                If you prefer not to use Tailwind CSS, you can <a class="font-medium underline underline-offset-4" href="https://github.com/sveltecult/franken-ui-releases" target="_blank">pick one pre-built CSS from several themes
                available</a> and reference it in your HTML. However, opting out of Tailwind CSS
                means missing out on features like setting custom themes or purging unused
                classes.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
        Do I need TypeScript to use Franken UI?
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>No, TypeScript is not required.</p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
        Does Franken UI work with HTMX and Alpine?
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>Yes, Franken UI is compatible with HTMX and Alpine.</p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
        Do I need to master UIkit to use Franken UI?
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
                No. Not at all. In fact you can create modals, popovers, etc
                without writing a single JavaScript.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
        Does Franken UI support full UIkit compatibility?
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
                No. The goal is to leverage UIkit JavaScript
                and its accessibility features.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
        Do I need to include UIkit JavaScript with Franken UI?
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Including UIkit JavaScript is optional and depends on your needs
                for convenience. If you choose not to include it, you will need to
                handle toggling yourself, either through the server or another
                JavaScript alternative. Just include it.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
        What about UIkit icons?
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Excluding UIkit icons is optional. You can use alternatives like
                Lucide, Heroicons, or icons from Flowbite.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
        What do you mean "framework-agnostic"?
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
                "Framework-agnostic" means that Franken UI can be used with any major
                JavaScript framework, such as Vue, React, or Svelte.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
        Who is Franken UI designed for?
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Franken UI is tailored for small teams and solo developers who
                seek a beautiful, reliable CSS framework without the complexity of
                React, Vue, or Svelte. It is designed with an "HTML-first"
                approach, making it accessible to developers at any skill level.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
        I don't like shadcn/ui. Can I remove it from Franken UI?
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Yes, you can remove shadcn/ui from Franken UI by simply not
                setting components' hooks. This allows you to apply your own
                customizations as needed. By default, Franken UI uses the UIkit
                theme.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>
        I'm concerned about the build size of Franken UI.
        <span
            class="uk-accordion-icon"
            uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
                The <code class="font-geist-mono">preset-quick</code> option will result
                in an upfront size of approximately <code class="font-geist-mono">137.83kB</code>
                (<code class="font-geist-mono">22.56kB</code> minified and gzipped). If you find
                this too large, you can always <a class="font-medium underline underline-offset-4" href="/docs/optimization#picking-components">turn
                off components</a> you don't need, significantly
                reducing the CSS size.
            </p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">
            Do you accept donations?
            <span
                class="uk-accordion-icon"
                uk-icon="icon: chevron-down; ratio: 0.8"></span>
        </a>
        <div class="uk-accordion-content">
            <p>
                Yes, if Franken UI has been beneficial to you in any way, I have
                setup <a class="font-medium underline underline-offset-4" href="https://ko-fi.com/sveltecult" target="_blank"
                    >Ko-Fi</a
                    > and <a class="font-medium underline underline-offset-4" href="https://liberapay.com/sveltecult" target="_blank"
                    >Liberapay</a
                    >. Or, feel free to reach out via email <a
                    class="font-medium underline underline-offset-4"
                    href="mailto:sveltecult@proton.me">sveltecult@proton.me</a
                    >. We can discuss the details, and I'll be happy to send you an
                invoice. Your support is greatly appreciated and helps sustain the
                project.
            </p>
        </div>
    </li>
</ul>
```

## Installation

For installation instructions, please refer to our [installation](installation.md) page.