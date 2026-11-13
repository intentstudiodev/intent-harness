---
kind: library
shelf: pattern
name: Tables and data grids
fits when: people compare, scan, sort or act on many records with several attributes each (orders, users, tickets, transactions)
related: areas/patterns/search-filters.md, areas/patterns/dashboards.md, areas/parts/import-export.md, areas/practices/accessibility.md
checked: 2026-11
---
# Tables and data grids

Rows and columns for records people need to scan, compare and act on. A **table** shows data; a **data grid** also lets people edit, select and rearrange it, like a light spreadsheet. The tension: everything someone might need versus what fits on a screen and stays readable.

## Questions worth asking

- What do people do here: find one record, compare several, monitor for changes, or act in bulk? Each task wants a different table.
- How many rows, typically and at most? Ten, a thousand and a million rows are three different designs.
- Which columns matter for the decision, and which are there "just in case"?
- Do people edit in the table, or open a record to edit it?
- What happens on a phone, if a phone matters at all?

## Usual shape

### Anatomy
- header with column names, sortable where sorting helps · often
- row selection with checkboxes and a bulk-action bar · often · when people act on many records at once
- filters and search above the table · often · see search and filters
- pagination, "load more" or virtual scrolling · often
- row actions: a menu at the end or on hover · often
- column chooser, resize and reorder · sometimes · power users and wide data
- sticky header and first column · sometimes · wide or long tables
- inline editing · sometimes · data grids; needs clear save and error states
- expandable rows or a side panel for details · sometimes

### Conventions
- numbers right-aligned in the same format, text left-aligned · often · comparison at a glance
- one sort at a time, its direction shown in the header · often
- empty, loading and error states that keep the header visible · often

## Choices and trade-offs

- **Pagination or infinite scroll.** Pagination gives a place to return to and a sense of size; infinite scroll suits browsing, not finding. Virtual scrolling handles large data but makes printing, search-in-page and screen readers harder.
- **Table or cards.** Cards suit few attributes and images; a table suits comparison across many attributes. On phones, many products switch to cards or a list with the two or three key fields.
- **Density.** Compact rows show more and tire the eye; a density setting lets both kinds of user choose.
- **Edit in place or in a form.** Inline editing is fast for one field; a form is safer for several related fields and validation.

## Watch out

- Every attribute as a column · the important ones drown; start from the task
- Sorting or filtering that resets when people come back · they lose their place and their trust
- Bulk actions without a count or undo · "delete 2,341 items" deserves a confirmation that says so
- Click targets that are whole rows plus links and checkboxes inside them · accidental opens and lost selections
- Tables built from divs without table semantics · screen readers cannot announce rows and headers

## Go deeper

- [Nielsen Norman Group: data tables](https://www.nngroup.com/articles/data-tables/) · the four user tasks a table serves and the features each needs
- [W3C WAI tables tutorial](https://www.w3.org/WAI/tutorials/tables/) · headers, captions and complex tables for accessibility
- [Carbon Design System: data table](https://carbondesignsystem.com/components/data-table/usage/) · a full enterprise table: toolbar, batch actions, expansion, density
- [Material Design 2: data tables](https://m2.material.io/components/data-tables) · anatomy and behaviour in Material's terms

## Related

- `areas/patterns/search-filters.md` · finding rows
- `areas/patterns/dashboards.md` · tables as one widget among charts
- `areas/parts/import-export.md` · getting data in and out
- `areas/practices/accessibility.md` · semantics and keyboard use
