---
kind: library
shelf: domain
group: model
name: CRM and sales
fits when: a team tracks the people and companies it sells to, and moves leads and deals through stages towards a sale (CRM, sales pipeline, account management, outreach)
related: areas/patterns/tables-data-grids.md, areas/parts/import-export.md, areas/parts/integrations-webhooks.md, areas/practices/privacy-consent.md, domains/saas-subscription.md
checked: 2026-11
---
# CRM and sales

A product for keeping track of customers and the work of winning them: who they are, what was said, which deals are open and how likely each is to close. Its value comes from **records that stay complete and current**, and the tension is that the people asked to keep them current (salespeople) get the least out of typing, while managers who read the reports get the most.

## Questions worth asking

- Who is sold to: companies with several contacts each, or individual consumers? Business sales need accounts above contacts; consumer sales often do not.
- What is the sales motion: long deals with meetings and proposals, or high-volume quick sales? It decides how many stages and fields are bearable.
- What are the stages, and what has to be true to leave each one? Stages without exit criteria make the forecast guesswork.
- Where do leads come from (forms, imports, events, partners), and who decides they are worth a salesperson's time? Qualification rules decide what reaches the pipeline.
- What gets logged automatically (email, calls, meetings) and what is typed by hand? Most CRM data quality is decided here.
- Who may see whose accounts and deals? Territories, teams and commission make visibility a business question.
- Which systems already hold the truth about customers: billing, support, the product itself? Duplicates start at every boundary.
- Is outreach sent from the product (sequences, campaigns)? Then marketing law applies to every message.

## Usual shape

### Roles
- salesperson who owns leads and deals · often · the main daily user; works in a list and a few records
- sales manager and leadership · often · managers review the pipeline, coach and forecast; leadership reads forecasts, rarely edits, often exports
- sales development rep who qualifies leads · sometimes · hands qualified leads to account owners
- account or customer success manager after the sale · sometimes · renewals, upsell, health
- operations or admin who shapes fields, stages and rules · often

### Journeys
- capture a lead from a form, an import or by hand · often
- qualify and convert a lead into an account, contact and deal · often · the moment records multiply
- move a deal through stages with next steps and dates · often · usually on a board or a list
- log an activity: call, meeting, email, note · often · ideally without leaving the inbox or calendar
- forecast: weighted pipeline by stage, owner and period · often
- hand over from sales to onboarding or success · sometimes
- clean up duplicates and stale deals · often · a recurring chore, not a one-off

### Screens
- pipeline board with deals by stage, amounts and totals per column · often
- list views with saved filters ("my open deals closing this month") · often
- record page: summary, key fields, a timeline of activity, related records · often
- tasks and follow-ups due today · often
- reports and forecast dashboards · often
- settings for pipelines, stages, fields and assignment rules · often

### Rules
- each stage carries a win probability used for the weighted forecast · often · won and lost are stages too, so reports count them
- leads assigned by rule (round robin, territory, size) · sometimes
- a deal needs an amount and a close date beyond an early stage · often · without them the forecast is empty
- duplicate detection on email, domain or company name · often
- record ownership drives visibility and commission · often · a business rule people argue about; record why
- unsubscribe and suppression lists respected by every send · often · a legal duty in many places (see Go deeper)

## Choices and trade-offs

- **Leads separate from contacts, or one kind of person record.** A separate lead object keeps unqualified noise out of the customer base and adds a conversion step that can duplicate or lose data; one record with a status is simpler and needs good filters.
- **Fixed pipeline or configurable stages and fields.** Fixed is faster to adopt and easier to report on; configurable fits every team and drifts into hundreds of fields nobody fills.
- **Typed entry or captured activity.** Syncing email and calendars fills the timeline with no effort and raises privacy and noise questions; manual logging is cleaner and is often skipped.
- **Board or list as the main view.** Boards suit few deals moving through stages; lists suit many records, sorting and bulk edits. Many products offer both over the same data.
- **Built-in outreach or integration with a sending tool.** Built-in sequences keep context in one place; integrating keeps the CRM focused and shifts deliverability and consent handling elsewhere.

## Watch out

- Required fields added for every report someone wants · salespeople enter junk to get past them, and the reports lie anyway
- Converting a lead creates new records instead of linking to the existing company · duplicates spread and history splits
- A forecast built on stages with no exit criteria · deals sit in "proposal" for months and the numbers mean nothing
- Treating business contacts as fair game for any email · in the EU and UK, named business contacts are personal data, and sole traders can count as individuals under UK marketing rules
- Deleting a contact everywhere it appears without thought · erasure requests are real, and so are invoices and records that accounting or tax law may require keeping; both need a plan
- Imports without a preview and a way to undo · one wrong column mapping overwrites thousands of records

## Go deeper

- [Salesforce Trailhead: create and convert leads](https://trailhead.salesforce.com/content/learn/modules/leads_opportunities_lightning_experience/create-and-convert-leads-lightning) · the widely copied lead, account, contact and opportunity model, and what conversion creates
- [HubSpot: pipelines, deal stages and win probability](https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines) · stages with probabilities, weighted amounts and why won and lost stages matter for reports
- [UK ICO: business-to-business marketing](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/) · UK: when email, calls and named contacts need consent or a lawful basis, and suppression lists; under review after the Data (Use and Access) Act 2025
- [US FTC: CAN-SPAM Act compliance guide](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business) · US: opt-out, sender identification and address rules for commercial email

## Related

- `areas/patterns/tables-data-grids.md` · list views, bulk edits and saved filters
- `areas/parts/import-export.md` · importing contacts and mapping columns
- `areas/parts/integrations-webhooks.md` · email, calendar, billing and support sync
- `areas/practices/privacy-consent.md` · lawful basis, opt-outs and erasure
- `areas/parts/roles-permissions.md` · territories and record visibility
- `domains/saas-subscription.md` · renewals and expansion after the first sale
