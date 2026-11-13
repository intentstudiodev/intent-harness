---
kind: library
shelf: part
name: Audit logs and history
fits when: people need to see who changed what and when, get an earlier version back, or take back a mistake (activity feeds, version history, undo, trash, audit logs for admins)
related: areas/parts/roles-permissions.md, areas/parts/admin-back-office.md, areas/patterns/collaboration-comments.md, areas/practices/security-basics.md, areas/practices/privacy-consent.md
checked: 2026-11
---
# Audit logs and history

The record of what happened to the product's data: an **activity feed** people read to catch up, a **version history** they restore from, **undo** and trash that forgive a slip, and an **audit log** that admins, auditors or support use to answer "who did this?". The tension: a full, trustworthy record versus storage, noise and privacy, because every line of history is also data about a person.

## Questions worth asking

- Who reads the history: the person who made the change, teammates, an admin, an auditor, support? Each wants a different view and level of detail.
- What needs to be recoverable, and for how long: the last action, yesterday's version, a record deleted three months ago? It sets the storage model and the retention promise.
- Is there an outside duty to keep records (finance, health, customer contracts)? Some sectors fix what is logged and for how long; the owner knows which apply.
- Which actions can be undone and which cannot? The answer decides where confirmations go and where undo is enough.
- Does the log need to be tamper-evident, exportable or streamed to a customer's own security tools? Larger customers ask in security reviews.
- What personal data ends up in history, and what happens to it when someone asks to be erased? History and erasure pull in opposite directions.

## Usual shape

### Anatomy
- undo for the last action, often a short notice with an Undo button · often · cheaper and kinder than a confirmation for reversible actions
- trash or "recently deleted" with a restore window · often · items kept for a stated time (30 days is common) before removal
- activity feed on a record: created, edited, assigned, moved · often · lets people catch up without asking
- version history with compare and restore · sometimes · documents, designs, configurations, anything edited over time
- named versions or snapshots · sometimes · marking "sent to client" or "released" among many autosaves
- audit log for admins: actor, action, target, time, origin (IP, device, API key) · sometimes · common in B2B and a frequent item in security questionnaires
- filters and export on the audit log · sometimes · auditors work in their own tools
- streaming the log to a customer's systems · sometimes · enterprise plans

### Conventions
- each entry answers who, what, when and where · often · the four fields support and auditors ask for first
- times stored in UTC and shown in the reader's time zone · often
- automated changes labelled with the rule, integration or API key behind them · often · "changed by an automation" beats "changed by you"
- history readable by the people who can read the record, no more · often · otherwise history leaks what permissions hide
- entries not edited after the fact; corrections are new entries · often · trust in the log rests on it

## Choices and trade-offs

- **Undo or confirm.** Undo keeps people moving and catches slips that a confirmation gets clicked through; a confirmation fits what truly cannot be reversed (sending, paying, permanent deletion). Many products undo by default and keep confirmations rare so they are read.
- **Snapshots or a change log.** Saving whole versions is simple to restore and costs storage; storing every change as an event gives full history and replay but makes the current state and schema changes harder. A common middle: current state plus an append-only log beside it.
- **Soft or hard delete.** Soft delete makes restore and audit easy and keeps data longer than people may expect; hard delete is clean and final. Many products soft-delete for a window, then purge, and state the window in the product and the privacy notice.
- **One log or two.** A friendly activity feed and a security audit log have different readers, retention and access. Some products keep them apart; others derive the feed from the log.
- **Keep forever or set retention.** Long retention helps disputes and audits; privacy law and storage costs push towards limits per kind of entry. Some products tie retention to the plan.

## Watch out

- Secrets, tokens or full personal records written into history · the log becomes the easiest place to steal them
- "Changed by system" with no detail · support cannot explain what happened and people stop trusting the record
- Restore that brings back a record but not its comments, files or links · people think it worked and find the gaps later
- Undo that lasts only as long as a toast, with no other way back · a missed notice means lost work
- History still visible to people who lost access to the record · removed members keep reading what changed
- Version history that grows without limit on large files · storage costs rise quietly, then sharply
- Erasure that skips history and backups · the data is still there and the promise is broken

## Go deeper

- [Nielsen Norman Group: user control and freedom](https://www.nngroup.com/articles/user-control-and-freedom/) · the usability case for undo, redo and visible ways out
- [Nielsen Norman Group: confirmation dialogs](https://www.nngroup.com/articles/confirmation-dialog/) · when confirmations help, and why overusing them makes them useless
- [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) · which events to record, what to keep out of logs, and protecting logs from tampering
- [Martin Fowler: Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) · storing every change as an event, and what that gives and costs
- [NIST SP 800-92: Guide to Computer Security Log Management](https://csrc.nist.gov/pubs/sp/800/92/final) · retention, protection and review of logs across an organisation (2006, still a common reference)

## Related

- `areas/parts/roles-permissions.md` · who may see history and the audit log
- `areas/parts/admin-back-office.md` · where admins and support read the log
- `areas/patterns/collaboration-comments.md` · activity next to discussion on a record
- `areas/practices/security-basics.md` · security events and protecting logs
- `areas/practices/privacy-consent.md` · retention and erasure against history
