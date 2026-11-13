---
kind: library
shelf: part
name: Roles and permissions
fits when: different people may see or do different things in the product (owners and members, staff and customers, editors and viewers)
related: areas/parts/sharing-invites.md, areas/parts/workspaces-multi-tenancy.md, areas/parts/admin-back-office.md, areas/parts/audit-history.md, areas/practices/security-basics.md
checked: 2026-11
---
# Roles and permissions

Who may see what and do what. A role bundles permissions under a name people understand (Owner, Editor, Viewer); a permission is one allowed action on one kind of thing. The tension: a model simple enough that people can predict it, yet precise enough for the one customer who needs "can approve invoices under 500 but not edit them".

## Questions worth asking

- Who are the kinds of people, and what does each need to do? Start from tasks, not from a list of roles.
- Is access about the whole account, a workspace, or a single item (this document, this project)? It decides the model.
- Can customers define their own roles, or are a few fixed roles enough? Custom roles are often asked for and rarely used well.
- Are there actions that need two people (approve a payment, delete a workspace)? Separation of duties changes the flow.
- What should someone without access see: nothing, a locked state, or a way to ask? Hiding and explaining are different products.
- Does access depend on context: time, location, plan, device, ownership?

## Usual shape

### Anatomy
- a few fixed roles, such as Owner, Admin, Member, Guest · often · the first version of most products
- one owner who cannot be removed until ownership is handed over · often · someone stays responsible for billing and deletion
- per-item roles (viewer, commenter, editor) · often · documents, projects, folders; see sharing and invites
- a members screen with role per person and a short description of each role · often
- custom roles built from permissions · sometimes · larger customers and regulated work
- groups or teams that carry roles · sometimes · so access follows people as they move
- request access flow · sometimes · when people land on something they cannot open
- a "view as" or permission preview for admins · sometimes · to check what someone can see

### Conventions
- check on the server, on every request, including APIs and background jobs · often · OWASP: an attacker only needs one unchecked path
- deny by default; grant explicitly · often · OWASP Authorization Cheat Sheet
- check the object, not just the action: "may edit invoices" and "may edit this invoice" · often · changing an ID in a request is the classic leak (OWASP Top 10, A01)
- least privilege for new members and new features · often · new permissions start off for existing roles
- show why something is disabled rather than only greying it out · often
- role changes logged with who changed what · often · see audit history

## Choices and trade-offs

- **Role-based (RBAC), attribute-based (ABAC) or relationship-based (ReBAC).** RBAC is easy to explain and fits fixed roles; ABAC adds rules on attributes (department, region, amount) and fits policies; ReBAC follows relationships (owner of, member of, shared with) and fits documents and nested folders, as in Google's Zanzibar. Many products mix a few roles with item sharing.
- **Fixed or custom roles.** Fixed roles keep support and docs simple; custom roles win enterprise deals and add a permission matrix someone has to maintain and test.
- **Hide or show locked features.** Hiding keeps screens clean; showing them locked teaches what exists and can sell an upgrade. Showing something a person may never use can feel like noise.
- **Inherit or set per item.** Inheritance (folder to file) saves work and surprises people when a move changes access; explicit per-item access is clear and tedious.

## Watch out

- Permissions checked only in the interface · hidden buttons do not stop a direct request; it is the top web risk in the OWASP Top 10 (2025)
- Role explosion: a new role for every exception · nobody can say who can do what any more
- An admin role that silently includes billing, security and data export · one compromised admin gets everything
- Removing someone without ending their sessions, tokens and share links · access lingers after they leave
- No way to transfer ownership · the account is stuck when the owner leaves the company

## Go deeper

- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) · least privilege, deny by default, RBAC versus ABAC and ReBAC, object-level checks
- [OWASP Top 10: A01 Broken Access Control](https://top10.owasp.org/2025/A01_2025-Broken_Access_Control) · the common ways access control fails in practice
- [NIST role-based access control project](https://csrc.nist.gov/projects/role-based-access-control) · the origin of RBAC and the INCITS 359 standard (archived page)
- [Zanzibar: Google's consistent, global authorization system](https://research.google/pubs/zanzibar-googles-consistent-global-authorization-system/) · the relationship-based model behind sharing at scale (USENIX ATC 2019)

## Related

- `areas/parts/sharing-invites.md` · giving one person access to one thing
- `areas/parts/workspaces-multi-tenancy.md` · the boundary roles live inside
- `areas/parts/admin-back-office.md` · the product team's own powers, beyond customer roles
- `areas/parts/audit-history.md` · recording who changed access
- `areas/practices/security-basics.md` · sessions, tokens and server-side checks
