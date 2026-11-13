---
kind: library
shelf: architecture
name: Data modelling
fits when: the product stores things people create or depend on (records, orders, documents, messages, accounts) and someone has to decide what those things are, who owns them and where they live
related: areas/parts/workspaces-multi-tenancy.md, areas/practices/privacy-consent.md, areas/architecture/search-and-caching.md, areas/architecture/hosting-environments.md, areas/architecture/monolith-or-services.md, areas/parts/audit-history.md
checked: 2026-11
---
# Data modelling

At product level, data modelling is naming the main things the product keeps (a booking, a project, an invoice), how they relate (one-to-many, many-to-many, belongs-to), who owns each one and which store holds it. It is not table design; it is the map that every screen, permission and integration leans on. The tension: **a model that fits today's screens and ships fast versus one that survives tomorrow's questions**, because data outlives code and is the hardest part to change later.

## Questions worth asking

- What are the five to ten things the product is really about, in the owner's words? Names chosen now end up in screens, APIs and support tickets.
- Who owns each thing: a person, a workspace, the product itself? Ownership decides deletion, sharing, export and billing.
- What must never be wrong or lost (money, bookings, medical notes), and what can be a little stale (counts, feeds)? That splits strong from relaxed consistency.
- Which data is personal, and which is sensitive (health, finance, children, location)? It decides where it may live and how long.
- What happens when something is deleted: gone, hidden, archived, anonymised? Related records and backups follow the answer.
- Does history matter: who changed what, and what did it look like last month? Keeping only the current state makes that question unanswerable later.
- Will outside systems hold copies (payments, CRM, analytics, AI providers)? Each copy is another place the data must be kept true and deletable.

## Usual shape

### Anatomy
- a few core entities with stable identifiers · often · the nouns the product is built around; IDs that never change and are not meaningful (no emails as keys)
- an owner on every record (person, workspace or both) · often · the base for permissions, export and deletion
- a relational database as the main store · often · most business data is related and needs transactions
- file or object storage for large binaries · often · images, uploads and exports live outside the database, referenced by it
- a separate store for derived data: search index, cache, analytics copy · sometimes · fast reads built from the main store, not the truth
- timestamps and soft-delete flags · often · created and updated at least; soft delete for undo and support
- an event or change history · sometimes · audit trails, sync, undo; see audit and history
- personal data kept in a small number of known places · sometimes · makes access and deletion requests answerable

### Conventions
- one source of truth per fact, other copies derived from it · often · two places that both "own" an address will disagree
- reference data (countries, currencies, time zones) from standards, not typed by hand · often
- money as an amount plus a currency, time stored in UTC with the original time zone kept where it matters · often
- schema changes made in small, reversible steps · often · evolutionary design rather than big-bang migrations

## Choices and trade-offs

- **Relational or document store.** Relational suits data with many relationships, transactions across records and questions nobody has asked yet; a document store suits self-contained aggregates (a profile, a catalogue item) read and written whole, with a shape that changes often. Many teams start relational, since modern relational databases also hold JSON, and add a document store only where access patterns clearly diverge.
- **One store or several (polyglot).** One store is simpler to back up, secure and reason about; several fit when search, analytics, files or vectors have truly different needs. Each extra store adds monitoring, backups and another copy of personal data.
- **Normalised or denormalised.** Normalised data has one place per fact and is safer to change; denormalised copies are faster to read and drift unless something keeps them in step. A common middle: normalised truth, denormalised read models rebuilt from it.
- **Current state or history.** Storing only the latest value is simple; keeping changes (an audit table, event log or versions) answers "who and when" and costs storage and design. Event sourcing goes furthest and suits few products.
- **Hard delete or soft delete.** Soft delete makes undo and support easy and keeps personal data around; hard delete honours erasure and breaks references unless planned. Many keep soft delete for a grace period, then purge.
- **Shared model or one per area.** One model across the whole product is easy at first; as it grows, words like "customer" mean different things in billing and support, and separate models with clear boundaries (bounded contexts) age better.

## Watch out

- Designing tables before naming the things and their owners · the model mirrors the first screen and fights every later one
- Personal data copied into logs, analytics, caches and AI prompts without a list · access and deletion requests become impossible to answer fully
- A document store chosen for speed, then joined by hand in code · the work a database would do moves into bugs
- Several services writing to the same tables · nobody owns the shape, and every change needs everyone
- Deletion that misses backups, search indexes and outside systems · "deleted" data reappears or leaks
- Emails, usernames or names used as identifiers · they change, and every reference breaks with them

## Go deeper

- [Designing Data-Intensive Applications, Martin Kleppmann (O'Reilly)](https://dataintensive.net/) · data models, consistency and how stores really behave; the standard book on the subject
- [Azure Architecture Center: understand data store models](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models) · vendor-neutral comparison of relational, document, key-value, graph, time-series, object, search and vector stores, with when to combine them
- [Martin Fowler: Bounded Context](https://martinfowler.com/bliki/BoundedContext.html) · why one word means different things in different parts of a product, and how to split models
- [Martin Fowler: data management guide](https://martinfowler.com/nosql.html) · essays on evolutionary database design, NoSQL and polyglot persistence
- [UK ICO: data minimisation](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/data-minimisation/) · UK GDPR principle of holding only the personal data a purpose needs
- [EDPB data protection guide for small business](https://www.edpb.europa.eu/sme-data-protection-guide/home_en) · EU GDPR basics for small teams: rights, security, breaches

## Related

- `areas/parts/workspaces-multi-tenancy.md` · keeping each customer's data apart
- `areas/practices/privacy-consent.md` · rights, retention and consent around personal data
- `areas/architecture/search-and-caching.md` · derived copies built from the main store
- `areas/architecture/hosting-environments.md` · regions and where data physically lives
- `areas/architecture/monolith-or-services.md` · who owns which data when the product splits
- `areas/parts/audit-history.md` · keeping who changed what
