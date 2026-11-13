---
kind: library
shelf: part
name: Admin and back office
fits when: the team running the product needs its own tools to look up customers, fix problems, moderate, refund or change settings on someone's behalf
related: areas/parts/roles-permissions.md, areas/parts/audit-history.md, domains/internal-tools.md, areas/patterns/tables-data-grids.md, areas/patterns/search-filters.md
checked: 2026-11
---
# Admin and back office

The side of the product only the team sees: finding a customer, reading what went wrong, issuing a refund, approving a seller, removing a post, changing a plan. It often starts as direct database access and grows into a tool of its own. The tension: staff need enough power to help quickly, and every power they hold over customers' data is also a risk, to customers and to trust.

## Questions worth asking

- Who works in the back office: the founder alone, support, finance, moderators, engineers? Each needs different data and actions every day.
- Which actions do customers ask support for most often? Those deserve buttons; the rest can wait.
- Should staff see customer data, and how much? Masked by default, revealed with a reason, or not at all?
- Is "log in as the customer" needed, and with what limits, notice and record? It is the fastest way to see a bug and the easiest way to misuse access.
- Which actions are irreversible or move money (refunds, deletions, bans), and do they need a second person? Mistakes there reach real customers.
- Where does it live: inside the product behind a role, or as a separate app on its own domain and sign-in? It decides how far one staff login reaches.
- Is it built in-house, on an internal-tool builder, or on the providers' own dashboards (payments, email, auth)? It sets how much there is to build and keep up.

## Usual shape

### Anatomy
- customer search by email, ID, order or payment reference · often · the front door of support
- customer page: account, plan, payments, recent activity, devices, notes · often
- actions on a customer: resend email, reset sign-in, change plan, refund, credit, suspend · often
- view as or impersonate the customer · sometimes · time-limited, recorded, visible to the customer in some products
- moderation queue with reports, context and decisions · sometimes · communities, marketplaces
- approvals: sellers, payouts, content, refunds above a limit · sometimes
- feature flags and per-customer settings · sometimes
- staff roles separate from customer roles · often · support, finance, admin
- a log of every staff action with who, what, when and why · often · see audit history
- internal notes on a customer · often · keeps context across shifts

### Conventions
- strong sign-in for staff: a second factor, ideally phishing-resistant · often · OWASP names admin and privileged accounts among the first places for MFA
- least privilege by staff role; finance, support and engineering see different things · often
- a reason or ticket number for sensitive views and actions · sometimes · large cloud providers do the same for their own staff (for example Google's Access Transparency)
- privileged staff actions and access failures logged without secrets or tokens · often · OWASP Logging Cheat Sheet
- the same server-side permission checks as the customer product · often · admin endpoints are a favourite target
- dense tables, saved filters, keyboard use · often · staff use it all day; see tables and data grids

## Choices and trade-offs

- **Provider dashboards, an internal-tool builder, or your own app.** Dashboards are free and scattered; a builder is quick and limited in custom flows; your own app fits exactly and is another product to maintain. Many teams start with dashboards and build only the screens support uses daily.
- **Inside the product or separate.** Inside reuses components and data access and widens the attack surface; separate isolates staff access and duplicates work.
- **Impersonation or read-only view.** Impersonation shows exactly what the customer sees and can act as them; a read-only view is safer and misses some bugs. Some products ask the customer's consent first.
- **Edit records or run named actions.** Raw edits are flexible and break invariants; named actions ("refund order", "move to plan") keep rules and logs intact.

## Watch out

- Direct database edits as the support process · no record, no checks, easy mistakes on the wrong row
- One shared admin login · nobody knows who did what, and leavers keep access
- Impersonation that acts silently and leaves no trace · customers lose trust and disputes cannot be settled
- Admin tools exposed on the public site without extra protection · a single leaked password opens every account
- Bulk actions without preview, count or undo · one filter mistake suspends thousands
- Staff seeing full card numbers, passwords or documents they do not need · a privacy breach waiting for a screenshot

## Go deeper

- [Nielsen Norman Group: design guidelines for complex applications](https://www.nngroup.com/articles/complex-application-design/) · working tools for expert, daily users
- [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) · which admin and privileged events to log, and what to keep out of logs
- [OWASP Multifactor Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html) · second factors for admin accounts and before elevated access
- [Google Cloud: Access Transparency overview](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview) · a public example of logging staff access to customer data with a stated reason, and approval before access

## Related

- `areas/parts/roles-permissions.md` · staff roles and the checks behind them
- `areas/parts/audit-history.md` · recording staff actions
- `domains/internal-tools.md` · when the back office is a product in itself
- `areas/patterns/tables-data-grids.md` · the main screen of most back offices
- `areas/patterns/search-filters.md` · finding the right customer fast
