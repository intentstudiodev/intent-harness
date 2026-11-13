---
kind: library
shelf: pattern
name: Detail pages
fits when: people open one record to understand it fully or act on it: a product, an order, a ticket, a contact, a document, a listing
related: areas/patterns/lists-feeds.md, areas/patterns/navigation.md, areas/parts/audit-history.md, areas/patterns/collaboration-comments.md, areas/parts/reviews-ratings.md, domains/online-shop.md
checked: 2026-11
---
# Detail pages

The screen for one thing: everything known about a product, an order, a person or a ticket, and the actions that can be taken on it. Lists get people to the right item; the detail page is where they decide and act. The tension: showing everything someone might need versus putting the few facts and the main action where they are seen first.

## Questions worth asking

- What brings people here, and what do they do next: decide (buy, book), check (status, history), or change something (edit, assign, approve)? The next action decides what sits at the top.
- Which three or four facts answer most visits? They belong at the top.
- Who else looks at the same record, and do they need different parts of it (a customer and an agent, a buyer and a seller)? Different readers may need different views or permissions.
- Is it edited in place, in a form, or not at all? It decides between a read view, an edit mode or inline fields.
- How much related data hangs off the record: history, comments, files, linked records? It decides between one long page, tabs or panels.
- Does it open as its own page with a URL, or in a panel next to the list? A URL makes it shareable; a panel keeps the list in view.

## Usual shape

### Anatomy
- title, key identifier and status at the top · often · what this is and where it stands
- the primary action, visible without scrolling · often · buy, book, reply, approve
- secondary actions in a menu · often · edit, duplicate, share, delete
- key facts as label-value pairs · often · a summary list
- media: images, previews, attachments · sometimes · products, listings, documents
- sections or tabs for related data: activity, comments, files, linked records · often · in work tools
- history or activity log · sometimes · see audit and history
- reviews, ratings and questions · sometimes · shops and marketplaces
- previous and next item controls · sometimes · working through a queue

### Conventions
- a breadcrumb or back that returns to the list as it was · often · filters and scroll position kept
- each record reachable by a stable URL · often · shared in chat, linked from email
- empty fields hidden or shown as "not set", consistently · often
- dates, money and units in the reader's locale · often
- on narrow screens, facts and the main action first, related data below or behind tabs · often

## Choices and trade-offs

- **Full page or side panel.** A full page has room and a clean URL; a panel or split view keeps the list visible and suits triage. Apple's split views and Android's list-detail layout show both as adaptive layouts that change with screen width.
- **One long page or tabs.** A long page can be scanned and searched in-page; tabs keep each part short but hide content, and people may not look behind them. Progressive disclosure works when the hidden part is truly secondary.
- **View then edit, or always editable.** A read view with an edit mode protects against accidental changes and suits records with validation; inline editing everywhere is faster and makes the page feel like a form.
- **Fixed layout or per-type layouts.** One layout for every record type is easier to build and learn; per-type layouts fit records that differ a lot (an invoice and a contact).

## Watch out

- Primary action below the fold or among equal-weight buttons · people hunt for the one thing they came to do
- Important facts hidden in a tab · a recurring usability finding is that people overlook what they have to click to see
- Back that loses the list's filters and position · triage across many records becomes tiring
- Showing raw internal fields (IDs, codes, flags) to everyone · noise for most readers; consider role-based sections
- Stale data with no sign of when it changed · people act on old status; show updated times or live updates
- Destructive actions next to frequent ones · mis-taps that need a confirm or an undo

## Go deeper

- [Baymard Institute: product page research](https://baymard.com/research/product-page) · large-scale testing of product detail pages, much of it useful for any record page
- [Nielsen Norman Group: progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/) · deciding what goes first and what can wait
- [GOV.UK Design System: summary list](https://design-system.service.gov.uk/components/summary-list/) · a clear, accessible way to show label-value facts with change links
- [Android Developers: canonical layouts](https://developer.android.com/develop/ui/compose/layouts/adaptive/canonical-layouts) · list-detail and supporting-pane layouts across screen sizes
- [Apple HIG: split views](https://developer.apple.com/design/human-interface-guidelines/split-views) · list and detail side by side on iPad and Mac

## Related

- `areas/patterns/lists-feeds.md` · how people arrive here
- `areas/patterns/navigation.md` · back, up and deep links into a record
- `areas/parts/audit-history.md` · what changed and who changed it
- `areas/patterns/collaboration-comments.md` · discussion on a record
- `areas/parts/reviews-ratings.md` · social proof on product and listing pages
- `domains/online-shop.md` · the product page in a shop
