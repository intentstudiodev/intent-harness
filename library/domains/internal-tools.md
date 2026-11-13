---
kind: library
shelf: domain
group: model
name: Internal tools
fits when: the product is used by a company's own staff to run the business (back office, operations consoles, casework, approvals, support tools, data entry), not sold to the public
related: areas/parts/admin-back-office.md, areas/parts/roles-permissions.md, areas/parts/audit-history.md, areas/patterns/tables-data-grids.md, areas/patterns/forms-validation.md
checked: 2026-11
---
# Internal tools

Software a company builds or assembles for its own people: an operations console, a casework system, a refunds tool, a stock planner, an approvals flow. Users are few, expert and paid to be there, which tempts teams to skip design; yet these users spend whole days in the tool, so **minutes saved per task multiply** and errors reach real customers. The tension is between speed of building (spreadsheets, low-code, a quick admin page) and a tool that holds up when the business depends on it.

## Questions worth asking

- Which job does the tool do, step by step, today? A working process is not always a need; some steps exist only because the old tool forced them.
- Who uses it, how often and how expert are they? Daily experts want density and shortcuts; occasional users want guidance.
- What data does it touch: customer personal data, money, health, access to other systems? Internal tools often hold more privilege than the public product.
- Who may do what, and who approves risky actions? Refunds, deletions and account changes are where internal tools cause harm.
- Build, buy or assemble on a low-code platform? The answer changes with how unique and long-lived the process is.
- Where does the truth live: the tool's own database, or the production systems it acts on?
- How will people be trained, and how will the tool tell them what changed?
- Does it need to be accessible? Staff include disabled people, and some public-sector rules apply to internal services too.

## Usual shape

### Roles
- operator or agent doing the core task all day · often · casework, support, fulfilment
- team lead who assigns, reviews and approves · often
- administrator who manages users, roles and settings · often
- auditor or compliance reviewer with read-only access · sometimes
- engineer acting as support of last resort · sometimes · runs scripts when the tool lacks an action

### Journeys
- work a queue: pick the next case, act, close, move on · often
- look up a customer, order or account and act on it · often · search is the front door
- request and approve a sensitive action · often · four-eyes rules
- bulk update or import · sometimes
- hand a case to another team with context · often
- investigate what happened: history, logs, who changed what · often

### Screens
- queue or worklist with filters and assignment · often
- search with results for several record types · often
- record view: summary, related records, timeline, actions · often
- action forms with confirmation and reason fields · often
- approvals inbox · sometimes
- reports and exports · often
- user and role administration · often

### Rules
- role-based access, with the most dangerous actions limited to few people · often
- a reason recorded for sensitive actions (refund, override, data access) · often · answers "why" in an audit
- two-person approval above a threshold · sometimes · money, deletions, permission changes
- every action logged with who, when, what and on whose behalf · often
- masked personal data shown in full only on demand · sometimes · support tools, and logged when revealed
- sign-in through the company identity provider, access removed when people leave · often

## Choices and trade-offs

- **Build, buy or low-code.** Buying fits common processes (helpdesk, HR); low-code builds a working screen in days and can strain under complex logic, versioning and access rules; custom code costs most and fits unique, long-lived processes.
- **Dense expert screens or guided steps.** Experts work faster with many fields, shortcuts and few page loads; guided steps help occasional users and slow experts down. Some tools offer both modes.
- **Act directly on production data or through the product's own APIs.** Direct database access is quick and bypasses the rules the product enforces; going through APIs keeps business rules in one place and takes longer to build.
- **Internal network or identity-based access.** A private network was the classic perimeter; many companies now expose internal tools on the internet behind strong identity and device checks, which removes the "inside means trusted" assumption.
- **Spreadsheet or tool.** A spreadsheet is often the right first version; the signal to move is when several people edit it, errors cost money or the history matters.

## Watch out

- Designing around the old system's screens · the new tool copies the workarounds and decisions do not get faster
- Every staff member able to do everything · one mistake or one stolen login reaches every customer
- No undo, no reason and no log on destructive actions · errors cannot be traced or reversed
- Tested only with fake, tidy data · real records are long, messy and incomplete, and layouts break on them
- Ignoring the internal tool because "users will learn it" · training costs, errors and staff turnover rise quietly
- Engineers running scripts as the real admin interface · the riskiest actions happen without checks or records

## Go deeper

- [GOV.UK Service Manual: services for government users](https://www.gov.uk/service-manual/design/services-for-government-users) · UK: holding staff tools to the same standard as public ones, researching with real staff and realistic data, threat modelling privileged functions
- [DWP Design System: internal systems](https://design-system.dwp.gov.uk/get-started/internal-systems) · how staff-facing interfaces differ from public ones and which public patterns do not carry over
- [Nielsen Norman Group: 8 design guidelines for complex applications](https://www.nngroup.com/articles/complex-application-design/) · designing for expert users, non-linear work and interrupted tasks
- [BeyondCorp: a new approach to enterprise security (Google Research)](https://research.google/pubs/beyondcorp-a-new-approach-to-enterprise-security/) · the paper behind identity-based access to internal apps instead of a trusted network

## Related

- `areas/parts/admin-back-office.md` · the admin side of a customer-facing product, as opposed to a tool that is the whole product
- `areas/parts/roles-permissions.md` · roles, approvals and least privilege
- `areas/parts/audit-history.md` · who did what and why
- `areas/patterns/tables-data-grids.md` · queues and dense lists
- `areas/patterns/forms-validation.md` · action forms and data entry
- `areas/design-systems/government-design-systems.md` · public-sector staff tools
