---
kind: library
shelf: pattern
name: Navigation
fits when: the product has more than one screen and people need to know where they are, get somewhere else and come back (almost every product)
related: areas/platforms/ios.md, areas/platforms/android.md, areas/platforms/web-desktop.md, areas/platforms/web-mobile.md, areas/patterns/search-filters.md, areas/patterns/command-palette-shortcuts.md, areas/patterns/detail-pages.md
checked: 2026-11
---
# Navigation

How a product's content is grouped and named (**information architecture**) and the controls people use to move through it (**navigation**: tabs, sidebars, top bars, drawers, breadcrumbs, links, back). The two are often confused: navigation is the visible part of the structure, and a confusing menu is usually a structure problem. The tension: showing every destination versus keeping the screen calm, and the product's model versus the words and groupings people already have in their heads.

## Questions worth asking

- What are the three to seven places people go most, and how often do they switch between them? It decides what stays visible and what can hide.
- Are the groupings and labels the team's, or the users' own? Org charts and database tables make poor menus.
- How deep does the structure go: flat sections, or collections inside collections? Depth brings breadcrumbs and back behaviour into play.
- Can people arrive in the middle, from a link, a notification or a search result? Every screen then needs a way to orient and to go "up".
- Which platforms matter? Phones, desktops and the web each have their own native conventions; see the platform files.
- Does each person see the same structure, or does it change with role, plan or workspace?

## Usual shape

### Anatomy
- primary navigation for the top-level sections · often · a bottom tab bar on phones, a sidebar or top bar on larger screens
- a clear current-location indicator · often · the selected tab, item or page title
- page title and a back or up control · often · orientation inside a section
- local navigation for the current section · sometimes · sub-pages, in-page tabs or a section sidebar
- breadcrumbs · sometimes · deep hierarchies on the web and desktop; less common on phones
- a drawer or "more" menu for secondary destinations · sometimes · settings, help, rarely used areas
- global search as a way around the structure · often · see search and filters
- an account or workspace switcher · sometimes · multi-account and multi-tenant products

### Conventions
- top-level sections reachable from anywhere in one step · often · people can get home from anywhere
- each tab keeps its own history when people switch away and back · often · iOS tab bars work this way by default
- back returns to where the person came from; up goes to the parent in the hierarchy · often · on Android the two match inside an app, and a deep link builds a synthetic history down from the start screen
- URLs that are shareable, bookmarkable and survive a reload · often · on the web, the address is part of the navigation
- labels as plain nouns people would search for · often · clever names hide content
- tab bars for moving between places, not for actions · often · Apple's guidance separates the two

## Choices and trade-offs

- **Visible or hidden navigation.** Visible links and tabs are found and used far more; a hamburger or drawer saves space and suits secondary destinations. NN/g testing found hidden menus cut discoverability almost in half, more so on desktop.
- **Tabs, sidebar or top bar.** Bottom tabs suit a few equal sections on phones; a sidebar scales to many sections and nested collections on wide screens; a top bar suits marketing sites and products with few sections. Many products switch between them by screen width.
- **Broad and shallow or narrow and deep.** Shallow structures put more on each menu and fewer steps between places; deep ones keep menus short but make people guess more often. Search and good labels soften either.
- **Fixed or personalised structure.** A fixed structure is learnable and documentable; one that changes by role, plan or usage fits complex products but makes support and shared instructions harder.
- **Pages or panels.** Opening a record in a new page gives it a URL and a clean back; opening it in a side panel keeps the list in view. Some products offer both.

## Watch out

- Structure mirrors the org chart or the data model · people look for tasks and things, not departments or tables
- Back that does something different from what people expect, such as resetting a list or leaving the app · they lose their place and stop trusting it
- Deep links that drop people on a screen with no way up · arrivals from notifications and shared links feel stranded
- The same destination under two names, or two destinations under one · people stop believing the labels
- Navigation that shifts with every release · muscle memory is a feature
- Hover-only menus and unlabelled icons · keyboard, touch and screen-reader users miss them

## Go deeper

- [Nielsen Norman Group: IA vs navigation](https://www.nngroup.com/articles/ia-vs-navigation/) · the difference between structure and the menus that show it
- [Nielsen Norman Group: hidden navigation](https://www.nngroup.com/articles/hamburger-menus/) · the quantitative study on hamburger menus versus visible navigation
- [Nielsen Norman Group: breadcrumbs](https://www.nngroup.com/articles/breadcrumbs/) · when breadcrumbs help and how they behave on desktop and mobile
- [Android Developers: principles of navigation](https://developer.android.com/guide/navigation/principles) · start destination, back stack, up versus back, and how deep links build history
- [Apple HIG: tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars) · top-level sections on Apple platforms and keeping each tab's state
- [W3C WAI-ARIA APG: breadcrumb pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/) · accessible markup for a breadcrumb trail

## Related

- `areas/platforms/ios.md` · tab bars, navigation stacks and gestures on iPhone and iPad
- `areas/platforms/android.md` · system back, predictive back and navigation bars
- `areas/platforms/web-desktop.md` · URLs, history and wide-screen sidebars
- `areas/platforms/web-mobile.md` · menus and back behaviour in a mobile browser
- `areas/patterns/search-filters.md` · the way around a structure
- `areas/patterns/command-palette-shortcuts.md` · jumping anywhere by keyboard
- `areas/patterns/detail-pages.md` · where most navigation leads
