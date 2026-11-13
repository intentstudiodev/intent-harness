---
kind: library
shelf: domain
group: model
name: Work management
fits when: a team plans and tracks shared work (projects, tasks, issues, boards, docs, roadmaps) and needs to know who does what by when
related: areas/patterns/collaboration-comments.md, areas/parts/workspaces-multi-tenancy.md, areas/patterns/command-palette-shortcuts.md, areas/practices/offline-sync.md, areas/parts/roles-permissions.md
checked: 2026-11
---
# Work management

A product where people break work into items, assign them, move them through statuses and talk about them: task lists, issue trackers, kanban boards, project plans, shared docs. The tension is between **structure and freedom**: enough fields, statuses and rules to see the state of the work, little enough that people keep using it instead of a chat thread or a spreadsheet.

## Questions worth asking

- What is the unit of work: a task, an issue, a ticket, a card, a page? Its name and fields shape everything else.
- Who works here: one team, many teams, outsiders such as clients or contractors? Visibility and invitations follow from this.
- Is there a method behind it (Scrum, kanban, a fixed-length cycle, none)? The product can enforce it, suggest it or stay neutral.
- How many statuses, and who may change the workflow? A shared workflow gives comparable reports; per-team workflows fit each team.
- Do docs and tasks live together, or does the product link to docs elsewhere? Linked docs drift from the work; built-in docs make a bigger product.
- What do managers need to see: progress per project, load per person, dates at risk? Reporting needs shape the fields people are asked to fill.
- How fast does it need to feel? Teams that live in the tool all day notice every delay; keyboard use and instant updates often decide adoption.

## Usual shape

### Roles
- contributor who picks up and updates items · often · the daily user
- lead or project manager who plans, assigns and reports · often
- workspace admin who sets workflows, fields and access · often
- guest or client with limited access · sometimes · sees one project, comments, approves
- requester outside the team who files work · sometimes · forms or email into a queue

### Journeys
- capture an item quickly, then refine it later · often · capture friction loses work to chat
- plan: pick what goes into a cycle, sprint or milestone · often
- move items through statuses on a board or in a list · often
- discuss on the item: comments, mentions, attachments · often
- get notified and catch up on what changed · often · the inbox of the product
- review progress: burn-down, cycle time, overdue work · sometimes
- write and share a doc or spec linked to the work · sometimes

### Screens
- list and board views of the same items · often · sometimes also timeline, calendar and table
- item detail: title, description, status, assignee, dates, comments, history · often
- my work and inbox: assigned to me, due soon, mentions, notifications · often
- project or cycle overview with progress · often
- workflow and field settings · often
- doc editor with live co-editing · sometimes

### Rules
- statuses grouped into a few categories (to do, in progress, done) · often · lets reports compare teams with different workflows
- transitions allowed between statuses, sometimes with conditions · sometimes · issue trackers; simple task tools allow any move
- work-in-progress limits per column · sometimes · kanban teams; makes overload visible
- items can block or depend on other items · sometimes
- every change to an item is recorded with who and when · often · history answers "who moved this"
- archive rather than delete for finished work · often

## Choices and trade-offs

- **Opinionated method or neutral tool.** Building one way of working in (cycles, fixed statuses) makes the product easy to start and consistent; a neutral tool fits more teams and leaves each to invent its own process, often inconsistently.
- **Fixed fields or custom fields.** Fixed fields keep reports simple and the screen clean; custom fields fit every team and turn into clutter without ownership.
- **Tasks only, or tasks plus docs.** Docs in the same place keep context next to the work; a separate docs tool can be better at writing and leaves links to break.
- **Server as the single truth, or local-first with sync.** Server-first is simpler to build and reason about; local-first feels instant and works offline, at the cost of merge logic and harder permissions.
- **Estimates or no estimates.** Points and hours help planning and forecasting; many teams find counting items or fixing time and varying scope works as well with less ceremony.

## Watch out

- A status for every nuance · boards become unreadable and items stall between "review" and "ready for review"
- Notifications for every change · people mute everything and miss what matters
- Items that never close · the backlog grows into an archive nobody trusts; consider automatic archiving
- Permissions bolted on late · guests see projects meant for others, and fixing it later breaks links
- Reports that need fields nobody fills · managers stop trusting the numbers and ask in chat instead
- Slow list and board loads · teams that live in the tool leave over speed

## Go deeper

- [Atlassian: understand Jira workflows](https://support.atlassian.com/jira-cloud-administration/docs/work-with-issue-workflows/) · statuses, transitions and workflow schemes in the best-known configurable tracker
- [The Kanban Guide](https://kanbanguides.org/) · the short definition of kanban practices and flow measures
- [Shape Up, Basecamp](https://basecamp.com/shapeup) · a free book on fixed-time, variable-scope cycles: an alternative to backlogs and estimates
- [The Linear Method](https://linear.app/method) · one vendor's opinionated practices for planning and building, a contrast to neutral tools
- [Local-first software, Ink & Switch](https://www.inkandswitch.com/essay/local-first/) · offline, instant and collaborative at once, and what CRDTs make possible

## Related

- `areas/patterns/collaboration-comments.md` · comments, mentions and co-editing
- `areas/parts/workspaces-multi-tenancy.md` · workspaces, teams and projects
- `areas/patterns/command-palette-shortcuts.md` · speed for people who live in the tool
- `areas/practices/offline-sync.md` · sync and conflicts
- `areas/parts/roles-permissions.md` · guests, admins and project access
- `areas/parts/audit-history.md` · item history
