---
kind: library
shelf: practice
name: Offline and sync
fits when: people use the product with poor or no connection, across several devices, or edit the same data from different places (field work, travel, notes, mobile-first, collaborative editing)
related: areas/practices/performance.md, areas/patterns/collaboration-comments.md, areas/patterns/empty-loading-error-states.md, areas/platforms/web-mobile.md, areas/parts/files-storage.md
checked: 2026-11
---
# Offline and sync

Letting people keep working when the network is slow or gone, then bringing their changes together across devices and people. The tension: the instant, always-there feel of local data versus the hard problem of merging changes made in two places, and the honesty needed to show what is saved, pending or in conflict.

## Questions worth asking

- What has to work offline: reading only, creating, editing, everything? Offline reading is far simpler than offline editing.
- How long are people offline: seconds in a tunnel, a day in the field, weeks at sea? Long gaps change the sync design.
- Can two people or devices change the same thing while apart? If not, conflicts are rare and simple rules do.
- What does a conflict mean for this data: a note, a stock count, a booking, money? Some data merges, some needs a person to choose, some is better not written offline at all.
- How much data lives on the device, and how sensitive is it? A lost phone carries it.
- Which platforms: the web (service workers, storage limits), native mobile, desktop?

## Usual shape

### Anatomy
- a local store the interface reads from · often · the core of offline-first apps in Android's guidance
- a queue of pending changes, sent with retries when back online · often
- sync status: saved, saving, offline, waiting, failed · often · small, and visible where the work happens
- an offline indicator that does not block reading · often
- conflict handling: automatic merge, last write wins, or a resolve screen · often
- pending markers on individual items · sometimes · which messages or records have not reached the server
- "available offline" choices for large libraries, maps or media · sometimes
- background sync while the app is closed · sometimes · within platform limits
- versions or change IDs on records · often · without them conflicts cannot be detected

### Conventions
- a person's input kept locally until the server confirms it · often · lost work is the failure people remember
- stale data shown with its age rather than an empty screen · often
- actions that need the server (payments, bookings) disabled or clearly queued while offline · often
- retries with backoff, not tight loops · often · battery and server load
- conflicts explained in the person's terms ("you and a teammate both changed the title") · often

## Choices and trade-offs

- **Online-only, offline reading, or offline-first.** Online-only is simplest; caching for reading covers many needs; full offline editing gives speed and resilience and makes sync the hardest part of the product.
- **Last write wins, field-level merge, CRDTs, or ask the person.** Last write wins is simple and silently drops someone's change; merging per field loses less; CRDTs merge concurrent edits automatically and suit shared text and lists, at a cost in complexity and storage; asking the person fits rare, high-stakes conflicts.
- **Build sync or use a sync engine.** Databases with built-in offline sync save months and bind the data model to their rules; a custom stack gives control over schemas and conflict rules.
- **Pull or push.** Fetching on demand is easy and fits short gaps; keeping a pushed replica works offline for long and needs versioning and server support.
- **Server as authority or local-first.** Server authority suits shared business data and audit; local-first keeps ownership and longevity on the device and changes how backup, sharing and access control work.

## Watch out

- "Saved" shown before the server has the change · people close the app and lose work
- Last write wins on data where both changes matter · silent loss nobody can trace
- Device clocks used to order changes · clocks drift and people change them
- Sync status hidden, or alarming at every blip · people miss real failures or stop trusting the app
- Offline copies that ignore permission changes · removed people keep reading data on their device
- Schema changes old offline clients cannot read · the queue fails on reconnect
- Browser storage treated as permanent · browsers can evict it under storage pressure

## Go deeper

- [Ink & Switch: local-first software](https://www.inkandswitch.com/essay/local-first/) · seven ideals for software that works offline and keeps ownership with people, and the role of CRDTs
- [Android Developers: build an offline-first app](https://developer.android.com/topic/architecture/data-layer/offline-first) · reads, write strategies, pull and push sync, last write wins
- [web.dev: the offline cookbook](https://web.dev/articles/offline-cookbook) · caching and serving strategies with service workers on the web
- [CRDT.tech](https://crdt.tech/) · an introduction to conflict-free replicated data types, with papers and implementations
- [Designing Data-Intensive Applications, Martin Kleppmann (O'Reilly)](https://dataintensive.net/) · replication, ordering and conflicts explained from the ground up

## Related

- `areas/practices/performance.md` · local data as a route to speed
- `areas/patterns/collaboration-comments.md` · several people editing at once
- `areas/patterns/empty-loading-error-states.md` · offline and failed states
- `areas/platforms/web-mobile.md` · flaky networks on phones
- `areas/parts/files-storage.md` · large files and media offline
