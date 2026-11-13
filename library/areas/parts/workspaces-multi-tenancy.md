---
kind: library
shelf: part
name: Workspaces and multi-tenancy
fits when: people use the product as part of a group (team, company, family, client) whose data is kept apart from other groups, and some people belong to more than one
related: areas/parts/roles-permissions.md, areas/parts/sharing-invites.md, areas/parts/subscriptions-billing.md, areas/parts/sign-in.md, areas/practices/security-basics.md
checked: 2026-11
---
# Workspaces and multi-tenancy

A workspace (also team, organisation, account) is the container that owns data, members, billing and settings; multi-tenancy is how many such containers share one product without seeing each other. The tension: a light container that is easy to create and switch, versus hard walls between customers that hold in every query, cache, job and export.

## Questions worth asking

- What owns data and pays: a person, a team, a company? It decides billing, ownership and what happens when someone leaves.
- Can one person belong to several workspaces with one sign-in? Agencies, consultants and freelancers often do.
- Are there levels, such as organisation, then workspaces, then projects? Each level adds settings, roles and confusion.
- How strong does the separation need to be: shared tables with checks, a database per customer, data kept in a chosen region? Larger and regulated customers ask.
- Who owns content when a member leaves, or when the workspace is deleted?
- Can a company claim its email domain, enforce single sign-on or provision users from its directory (SCIM)? Common in enterprise sales.
- What happens to a workspace that stops paying: read-only, locked, deleted after a period?

## Usual shape

### Anatomy
- workspace switcher, usually top-left or in the account menu · often · the current workspace kept in view
- create a workspace and invite members during onboarding · often
- workspace settings: name, members, roles, billing, security · often
- personal space beside shared workspaces · sometimes · drafts and private work
- guests limited to some content · sometimes · clients and contractors
- an organisation level above workspaces with central admin and billing · sometimes · larger customers
- domain claim and "join your team" on sign-up · sometimes
- data region per workspace · sometimes · residency requirements
- ownership transfer, and deletion with a grace period · often

### Conventions
- the current workspace in the URL as well as on screen · often · shared links then open in the right place
- tenant taken from the signed-in session and checked on every request, not trusted from the client · often · OWASP's multi-tenant guidance
- tenant ID carried into cache keys, background jobs, file paths and search indexes · often · leaks usually happen beside the main database
- emails and notifications name the workspace · often · people in several act in the wrong one otherwise

## Choices and trade-offs

- **Shared tables, separate schemas or separate databases.** AWS calls the ends of this range pool and silo, and a mix bridge. Pooling is cheapest to run, with isolation resting on code or row-level security; silos give hard walls and per-customer restore, and cost more to run and migrate. Many products pool by default and silo their largest or regulated customers.
- **Person-first or workspace-first.** Person-first (one account that joins workspaces) suits consumer and prosumer tools; workspace-first (a company account with members) suits B2B and gives admins more control. Switching later is a large migration.
- **One level or nested.** One level is easy to explain; nested organisations fit large customers and raise questions about inherited permissions and billing.
- **One identity or one per workspace.** One identity across workspaces is convenient; a separate identity per workspace, as some chat tools use, gives each company tighter control of its members.

## Watch out

- One endpoint without a tenant check · a customer sees another's data; the classic and most costly multi-tenant bug
- Caches, search, exports or analytics built without the tenant · leaks happen outside the database
- Background jobs and webhooks that lose the tenant context · work runs in the wrong workspace or none
- Billing tied to a person instead of the workspace · the payer leaves and the team loses access
- No owner after the creator leaves · orphaned workspaces and support tickets
- Restoring a shared backup to fix one customer · everyone else's recent changes roll back
- Switching that keeps the previous workspace's state · people post, invite or delete in the wrong place

## Go deeper

- [OWASP Multi-Tenant Application Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Multi_Tenant_Security_Cheat_Sheet.html) · tenant context, isolation options, caches, jobs, restores and offboarding
- [AWS SaaS Lens: silo, pool and bridge models](https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/silo-pool-and-bridge-models.html) · the common vocabulary for isolation models and what pushes towards each
- [Microsoft Azure Architecture Center: multitenant solutions](https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/overview) · considerations, approaches and a checklist across data, identity and operations
- [PostgreSQL: row security policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) · isolating tenants inside shared tables, and which roles bypass it

## Related

- `areas/parts/roles-permissions.md` · roles inside a workspace
- `areas/parts/sharing-invites.md` · bringing members and guests in
- `areas/parts/subscriptions-billing.md` · the workspace as the paying unit
- `areas/parts/sign-in.md` · single sign-on, domains and directory sync
- `areas/practices/security-basics.md` · access control across tenants
