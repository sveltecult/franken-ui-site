# Changelog

<p class="mt-2 uk-text-lead">Latest updates and announcements.</p>

## v0.0.11 (May 2024)
- Introducing the [CDN installation](https://github.com/sveltecult/franken-ui-releases).
- Fix missing hooks and components in `presetQuick()`
- Add sensible padding for modal, table, tab components to make way for CDN aka "no-build" installations. If you are having trouble overriding some paddings, you can always use the not important utilities `!p-6` or consider using [hooks](/docs/hooks).
- Change buttons' shadow from `shadow` to `shadow-sm`
- Add rounded corners on modal even on xs devices
- Fix notification alignment on xs devices
- Change UIkit breakpoints to match Tailwind CSS. Here are the list of changes:

| **Screen** | **Original** | **New** |
|------------|--------------|---------|
| SM         | 640px        | 640px   |
| MD         | 960px        | 768px   |
| LG         | 1200px       | 1024px  |
| XL         | 1600px       | 1280px  |

## v0.0.10 (May 2024)
- This release focus mainly on ease of use, code cleanup and introduction of [`presetQuick()`](/docs/installation)
- Fix `uk-accordion-title` alignment
- Fix `uk-tab-left` and `uk-tab-right` wrong border color
- Refactor `hooks.ts` for better maintenance
- Demystifying [hooks](/docs/hooks)

## v0.0.9 (May 2024)
- Today, we're introducing Alpine Components to show how easy it is to build your own components using existing Franken UI components. Credits to [Pines](https://devdojo.com/pines) for the Alpine base we used for the [datepicker](/docs/datepicker).

## v0.0.9 (April 2024)

- Add tag and PIN inputs
- Increase default padding for `.uk-nav-primary` and `.uk-nav-secondary`
- Fix height and line-height of `.uk-button-text` and `.uk-button-link`