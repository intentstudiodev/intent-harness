---
kind: library
shelf: pattern
name: Search and filters
fits when: there are more items than people can browse, and they need to find one thing or narrow a set (products, records, messages, documents, places)
related: areas/patterns/tables-data-grids.md, areas/patterns/lists-feeds.md, areas/patterns/command-palette-shortcuts.md, areas/patterns/empty-loading-error-states.md, domains/online-shop.md
checked: 2026-11
---
# Search and filters

A text box that finds things by words, and controls that narrow a set by attributes. **Filters** remove what does not match; **facets** are filters built from the data itself, showing which values exist and how many items each has. The tension: a single box that understands anything versus explicit controls that make the system's model visible, and speed of results versus a stable page while people are still choosing.

## Questions worth asking

- Do people know what they are looking for (a name, an order number) or are they exploring ("a quiet hotel near the sea")? Lookup and discovery want different designs.
- What do people actually type? Search logs, support tickets and the words customers use are the best guide.
- Which attributes do people filter by, and do they combine them? A handful of key filters often matter more than a long list.
- How large is the set and how fast can results come back? It decides between instant and batch filtering.
- Should search cover one list or the whole product? Scoped and global search are different features.
- Do results need ranking, or is sorting by date or name enough?

## Usual shape

### Anatomy
- a visible search field, not only an icon · often · where search is a main way in
- suggestions while typing: queries, items, categories · often · autocomplete
- results with the query terms highlighted and a count · often
- filters by attribute, with counts per value · often · facets on larger sets
- applied filters shown as removable chips with "clear all" · often · people see and undo their choices
- sort control · often · relevance, newest, price, name
- a "no results" page with a way forward · often · spelling help, broader query, related items
- saved searches or alerts · sometimes · marketplaces, jobs, monitoring tools
- advanced or structured query syntax · sometimes · developer and power-user tools

### Conventions
- the query and filters reflected in the URL · often · shareable, bookmarkable and kept on back
- filters kept when people open a result and come back · often
- typo tolerance, plurals and synonyms · often · exact matching misses what people mean
- on phones, filters in a sheet or tray with an apply button · often · NN/g's tested pattern
- a search field labelled for screen readers, suggestions announced as a combobox · often · the WAI-ARIA combobox pattern

## Choices and trade-offs

- **Instant or batch filters.** Updating after every choice suits fast results and few filters; batching with an "apply" suits slow queries and phones. NN/g notes that results which reload too soon or jump the page break people's flow.
- **Search first or browse first.** Search-first suits people who know the name; category browsing suits exploration and unfamiliar ranges. Most products offer both and let each feed the other.
- **Keyword or semantic search.** Keyword search is predictable and explainable; semantic or AI-assisted search handles vague questions and can surprise people with results they cannot see a reason for. Hybrids are common.
- **Few filters or many.** A short list of well-chosen filters is easier to use; many facets serve experts and large catalogues but need grouping, search within filters and sensible defaults.
- **Ranked by relevance or by a clear rule.** Relevance helps discovery; a visible rule (newest first) is easier to trust in work tools.

## Watch out

- An empty "no results" page · a dead end that reads as "we do not have it"
- Filters that reset on back or on a new search · people redo their work and give up
- Filter combinations that produce zero results without warning · counts or disabled values prevent it
- Search that only matches exact titles · people try once and switch to scrolling
- Hiding the search box behind an icon where search is the main task · fewer people use it
- Sponsored or boosted results not marked as such · a trust issue and, in some places, a legal one

## Go deeper

- [Nielsen Norman Group: filters vs facets](https://www.nngroup.com/articles/filters-vs-facets/) · the vocabulary and the difference in behaviour
- [Nielsen Norman Group: user intent affects filter design](https://www.nngroup.com/articles/applying-filters/) · batch versus interactive filters and scroll position
- [Nielsen Norman Group: mobile faceted search with a tray](https://www.nngroup.com/articles/mobile-faceted-search/) · a tested pattern for filters on phones
- [Baymard Institute: e-commerce search research](https://baymard.com/research/ecommerce-search) · large-scale testing of search queries, autocomplete and results
- [Baymard Institute: autocomplete design](https://baymard.com/research-articles/autocomplete-design) · nine patterns for suggestions while typing
- [W3C WAI-ARIA APG: combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) · accessible search with suggestions

## Related

- `areas/patterns/tables-data-grids.md` · filtering rows in a table
- `areas/patterns/lists-feeds.md` · the results list itself
- `areas/patterns/command-palette-shortcuts.md` · search for actions and places, not content
- `areas/patterns/empty-loading-error-states.md` · no results and slow results
- `domains/online-shop.md` · where search and facets are studied most
