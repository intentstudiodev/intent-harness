---
kind: library
shelf: pattern
name: Dashboards
fits when: people check a set of numbers or statuses regularly to see whether something needs their attention (operations, sales, health of a system, personal progress)
related: areas/patterns/charts-data-visualisation.md, areas/patterns/tables-data-grids.md, areas/patterns/empty-loading-error-states.md, areas/parts/roles-permissions.md, areas/practices/performance.md
checked: 2026-11
---
# Dashboards

One screen that shows, at a glance, how things stand: a few key numbers, their trend, and what needs attention. A dashboard is for **monitoring**, not for exploring; exploration belongs in reports and analysis views it links to. The tension: everyone wants their metric on it, and every added tile makes the important ones harder to see.

## Questions worth asking

- Who looks at it, how often, and what do they do next? A morning check, a wall screen and an executive review are different dashboards.
- Which three to five numbers would someone act on? The rest may belong one click away.
- What counts as good, bad or unusual for each number: a target, a threshold, last period? Without a comparison a number says little.
- How fresh does the data need to be: live, hourly, daily? It shapes cost, caching and how "last updated" is shown.
- Does each role or person see the same dashboard, or their own? Permissions and data scope follow from it.
- Is it also a home screen with tasks and shortcuts, or only numbers?

## Usual shape

### Anatomy
- key figures (KPI tiles) with a comparison: change, target or sparkline · often · the at-a-glance layer
- a few charts for trends over time · often · see charts and data visualisation
- a list or table of items needing attention · often · alerts, overdue work, top movers
- a time-range and scope control (period, team, region) · often · applies to the whole page
- "last updated" and data-source notes · often · trust in the numbers
- links from each tile to the detail behind it · often · the way into exploration
- customisable layout: add, remove, rearrange widgets · sometimes · power users and mixed roles
- export, share or schedule a snapshot · sometimes · reporting to others

### Conventions
- most important information top left, largest and highest contrast · often · reading order in left-to-right languages
- one colour per data series across the whole dashboard · often · colours that change meaning between tiles mislead
- status colour paired with a label or icon · often · colour alone fails colour-blind users and WCAG 1.4.1
- consistent number formats, units and time zones · often
- each widget loads, fails and shows "no data" on its own · often · one slow query does not blank the page

## Choices and trade-offs

- **Fixed or configurable.** A fixed, curated dashboard tells one clear story and is easy to support; configurable widgets fit varied roles but often end up cluttered or empty. A curated default with a few options sits between.
- **Operational or analytical.** Operational dashboards are live and drive immediate action; analytical ones are periodic and invite comparison and drill-down. Mixing both on one page usually serves neither.
- **Numbers or charts.** A single big number is fastest to read when the question is "how much"; a chart is better when the question is "which way is it going". Length and position on a common scale are read most accurately, angles and areas least.
- **Live or snapshot.** Live data feels current and costs queries and attention; a daily snapshot is cheaper, calmer and easier to reason about.
- **Dashboard as home or as a separate page.** As a home it greets everyone, including people who only came to do one task; as a separate page it serves the people who monitor.

## Watch out

- Vanity metrics with no comparison or action · the dashboard becomes decoration and stops being opened
- Too many tiles of equal weight · nothing stands out, so nothing is noticed
- Numbers that disagree with the report or export behind them · trust drops for the whole product
- No "last updated" or a silent data failure · people act on stale numbers
- Gauges, 3D charts and pie charts with many slices · they look busy and are hard to read accurately
- A dashboard nobody owns · metrics go stale, definitions drift

## Go deeper

- [Nielsen Norman Group: dashboards and preattentive attributes](https://www.nngroup.com/articles/dashboards-preattentive/) · what a dashboard is for and which visual encodings are read fastest
- [Carbon Design System: dashboards](https://www.carbondesignsystem.com/building-blocks/data-visualization/dashboards) · presentation versus exploration dashboards, hierarchy, limiting metrics
- [Perceptual Edge library](https://www.perceptualedge.com/library.php) · Stephen Few's articles and the book Information Dashboard Design, the standard text on the subject
- [Microsoft Learn: tips for designing a Power BI dashboard](https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboards-design-tips) · practical vendor advice on audience, placement and density

## Related

- `areas/patterns/charts-data-visualisation.md` · choosing and drawing each chart
- `areas/patterns/tables-data-grids.md` · the table widget and drill-down views
- `areas/patterns/empty-loading-error-states.md` · per-widget loading, no data and failure
- `areas/parts/roles-permissions.md` · who sees which numbers
- `areas/practices/performance.md` · many queries on one page
