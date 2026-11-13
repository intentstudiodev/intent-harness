---
kind: library
shelf: pattern
name: Lists and feeds
fits when: people scan a sequence of items with only a few attributes each: messages, posts, products, notifications, files, contacts
related: areas/patterns/tables-data-grids.md, areas/patterns/search-filters.md, areas/patterns/detail-pages.md, domains/social-community.md, domains/content-media.md, areas/practices/trust-dark-patterns.md
checked: 2026-11
---
# Lists and feeds

A **list** is a sequence of similar items, with few attributes each, that people scan and open: an inbox, a file list, search results (when people compare many attributes, a table fits better). A **feed** is a list that keeps growing, usually newest or "most relevant" first, that people browse rather than search. The tension: making the next item effortless to reach versus letting people find their place, finish and leave.

## Questions worth asking

- What do people do with the list: find one item, work through all of them (an inbox), or browse for interest (a feed)? Each task wants a different list.
- What order: newest, oldest, alphabetical, by priority, or ranked by an algorithm? Who decides, and can people change it? Order is what people notice first.
- Which two or three facts identify an item at a glance: title, image, time, status, sender? Too many facts per row slow scanning.
- How many items, and do new ones arrive while people are looking? Items that move under the pointer cause misclicks.
- Do people act on items in the list (archive, like, select) or only open them? Actions in the list need selection, undo and room for touch.
- Is there an end, and should people know when they reach it? An end lets people finish; an endless feed keeps them scrolling.

## Usual shape

### Anatomy
- item rows or cards with a primary line, secondary line and optional image or avatar · often
- unread, new or status markers · often · inboxes, notifications, tasks
- a way to load more: pages, a "load more" button or infinite scroll · often
- quick actions per item: swipe on phones, hover or menu on desktop · sometimes
- multi-select with bulk actions · sometimes · inboxes and file lists
- pull to refresh, or a "new items" pill at the top · sometimes · live feeds
- grouping by date or category with section headers · sometimes
- reordering by drag · sometimes · playlists, priorities, manual lists

### Conventions
- whole row opens the item; secondary actions sit at the end · often
- the scroll position kept when people return from an item · often · otherwise they lose their place
- new items announced, not pushed in under the reader's finger · often · content that jumps causes mistaps
- swipe actions duplicated in a visible menu · often · swipes are invisible and hard for some users
- feed semantics for screen readers when items load on scroll · sometimes · the WAI-ARIA feed pattern

## Choices and trade-offs

- **Pagination, load more or infinite scroll.** Infinite scroll suits flat, browse-heavy content of equal value; pagination suits finding and returning to a specific item and shows the size of the set; a "load more" button sits between and keeps the footer reachable.
- **Chronological or ranked.** Chronological is predictable and lets people know when they are caught up; ranking surfaces relevant items and is harder to explain. Many products offer both. In the EU, the Digital Services Act asks online platforms to explain the main parameters of their recommender systems, and the largest ones to offer an option not based on profiling.
- **List or grid of cards.** Lists suit text-heavy items and quick scanning; grids suit images and products. Many products let people switch.
- **Dense or comfortable rows.** Dense rows show more and suit experts; roomy rows with previews suit casual browsing and touch.

## Watch out

- Infinite scroll with important links in the footer · the footer is hard or impossible to reach
- Losing scroll position after opening an item · people give up on long lists
- New items inserted above what someone is reading · they lose their place or tap the wrong thing
- Feeds designed only to maximise time spent · regret, distrust and, in some markets, regulatory attention; see trust and dark patterns
- Every item showing every attribute · nothing can be scanned; move detail to the detail page
- Swipe-only actions · undiscoverable, and easy to trigger by accident without undo

## Go deeper

- [Nielsen Norman Group: infinite scrolling, when to use it](https://www.nngroup.com/articles/infinite-scrolling-tips/) · infinite scroll, pagination and load more compared
- [Apple HIG: lists and tables](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables) · list styles, editing and reordering on Apple platforms
- [Material Design 3: lists](https://m3.material.io/components/lists/overview) · list item anatomy and density in Material's terms
- [W3C WAI-ARIA APG: feed pattern](https://www.w3.org/WAI/ARIA/apg/patterns/feed/) · making scrolling, loading feeds usable with a screen reader
- [European Commission: the Digital Services Act](https://digital-strategy.ec.europa.eu/en/policies/digital-services-act) · EU rules on recommender transparency and platform duties; where to start reading

## Related

- `areas/patterns/tables-data-grids.md` · when items have many attributes to compare
- `areas/patterns/search-filters.md` · narrowing the list
- `areas/patterns/detail-pages.md` · what opens from a list item
- `domains/social-community.md` · feeds of people and posts
- `domains/content-media.md` · feeds of articles, video and audio
- `areas/practices/trust-dark-patterns.md` · engagement without manipulation
