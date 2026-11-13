---
kind: library
shelf: pattern
name: Charts and data visualisation
fits when: people need to see trends, comparisons, parts of a whole or distributions in numbers (analytics, reports, monitoring, finance, health tracking)
related: areas/patterns/dashboards.md, areas/patterns/tables-data-grids.md, areas/practices/accessibility.md, areas/practices/theming-dark-mode.md, areas/parts/import-export.md, areas/practices/responsive-layout.md
checked: 2026-11
---
# Charts and data visualisation

Lines, bars, areas, dots and maps that turn numbers into shapes people can read at a glance. A good chart answers one question faster than a table could; a bad one looks impressive and answers nothing. The tension: **what is easy to draw or looks rich** versus what the reader needs to compare, and the fact that a chart is a picture that some readers cannot see at all.

## Questions worth asking

- What one question does this chart answer: how did it change, which is biggest, what share, how spread out, how related? One question per chart narrows the chart type.
- Who reads it, and how often: an analyst exploring, a manager checking a number weekly, a customer glancing once? Explorers want controls; people glancing want one clear number.
- Do people need the exact values, or the shape? Exact values may belong in a table next to the chart.
- What is the comparison: against last period, a target, other groups, a normal range? A number without a reference point is hard to judge.
- How much data: a handful of points, thousands, a live stream? Volume decides the chart type and how it renders.
- Can the data be missing, late or revised? Gaps and estimates need a look of their own.
- Where else is it seen: a phone, a dark theme, a printed or exported report, a screen reader? Each needs colours, labels and a text alternative that still work.

## Usual shape

### Anatomy
- title that states the question or the finding · often · "Sign-ups fell in March" says more than "Sign-ups"
- axes with units and readable tick labels · often
- legend, or labels placed directly on lines and bars · often · direct labels save eye travel
- tooltip with exact values on hover or tap · often
- time range and granularity controls (day, week, month) · often · analytics and monitoring
- comparison marks: previous period, target line, threshold band · sometimes
- annotations for events that explain changes (a release, an outage) · sometimes
- empty, loading and "not enough data" states · often
- data table or download behind the chart · sometimes · for exact values and accessibility
- drill-down from a summary to detail · sometimes

### Conventions
- bars start at zero; lines may zoom to the range when the change is the point · often
- time runs left to right · often
- colour has meaning held across charts (the same series, the same colour) · often
- categorical palettes kept to a few colours; sequential or diverging scales for ordered values · often
- meaning carried by more than colour: labels, patterns or position · often · WCAG 1.4.1 on use of colour

## Choices and trade-offs

- **Chart or table.** Charts show patterns and outliers; tables give exact values and support lookup. Many products show both, or a chart with a "view as table" switch.
- **Line, bar or something else.** Lines suit continuous change over time; bars suit comparing categories; stacked charts show totals but make the inner parts hard to compare; pie and donut charts work for a few parts of one whole and poorly beyond that.
- **Static or interactive.** Static charts are fast, printable and accessible as images with text; interactive charts allow exploration and add hover-only details that touch and keyboard users can miss.
- **Library or custom.** Charting libraries give axes, tooltips and responsiveness quickly; custom drawing (D3, canvas) fits unusual forms and costs time and accessibility work.
- **Dense or simple.** Analysts value many series and small multiples; occasional readers need one clear message.

## Watch out

- A chart type chosen for looks · 3D, radar and decorative donuts hide the comparison
- Truncated bar axes · small differences look dramatic and readers feel misled
- Too many series in one chart · a rainbow of lines nobody can tell apart; small multiples or a highlighted series help
- Colours that fail for colour-blind readers or in dark mode · the legend stops working for part of the audience
- No text alternative · screen-reader users get "image" or nothing; a summary and the data help
- Silent gaps or partial periods (this month so far) · a drop that is not real triggers wrong decisions

## Go deeper

- [Fundamentals of Data Visualization, Claus O. Wilke](https://clauswilke.com/dataviz/) · a free book on choosing chart types, colour, proportions and common mistakes
- [Financial Times: Visual Vocabulary](https://github.com/Financial-Times/chart-doctor/tree/main/visual-vocabulary) · a chart chooser organised by the relationship you want to show
- [Nielsen Norman Group: choosing chart types](https://www.nngroup.com/articles/choosing-chart-types/) · matching the chart to the reader's task and context
- [Carbon Design System: data visualisation](https://carbondesignsystem.com/data-visualization/getting-started/) · an enterprise system's chart types, colour palettes and anatomy
- [W3C WAI: complex images](https://www.w3.org/WAI/tutorials/images/complex/) · short and long text alternatives for charts and graphs
- [ColorBrewer](https://colorbrewer2.org/) · tested sequential, diverging and qualitative palettes, with colour-blind-safe options

## Related

- `areas/patterns/dashboards.md` · charts as widgets in an overview
- `areas/patterns/tables-data-grids.md` · when exact values matter more than shape
- `areas/practices/accessibility.md` · text alternatives, colour and keyboard use
- `areas/practices/theming-dark-mode.md` · palettes that hold up in both themes
- `areas/parts/import-export.md` · downloading the data behind a chart
- `areas/practices/responsive-layout.md` · charts on narrow screens
