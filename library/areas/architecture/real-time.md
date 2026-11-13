---
kind: library
shelf: architecture
name: Real-time updates
fits when: people expect to see changes without refreshing: chat, live status, dashboards, presence, shared editing, multiplayer
related: areas/architecture/api-styles.md, areas/architecture/serverless-and-baas.md, areas/architecture/background-jobs-queues.md, areas/practices/offline-sync.md, areas/patterns/collaboration-comments.md, areas/patterns/chat-interfaces.md
checked: 2026-11
---
# Real-time updates

How the server tells an open app that something changed, instead of waiting to be asked. The options run from **polling** (ask every few seconds) through **server-sent events** (a one-way stream from server to browser) to **WebSockets** (a two-way connection kept open), with **WebRTC** for direct audio, video and data between devices. On top sits the hard part: what happens when two people change the same thing. The tension: how live the product feels versus the cost and complexity of keeping thousands of connections open and consistent.

## Questions worth asking

- How fresh does it need to be: within a second, within a minute, on next open? Many "real-time" needs are satisfied by a minute.
- Which way does data flow: only server to client (notifications, progress, feeds) or both ways (chat, cursors, games)?
- Do several people edit the same thing at once? If so, conflicts need a rule, not just a transport.
- How many people are connected at the same time, at peak? Connections, not requests, become the cost.
- Must it work on poor mobile networks or offline? Reconnecting and catching up becomes the main work; see offline and sync.
- Is the AI or a long job streaming its answer? A one-way stream is often enough.

## Usual shape

### Anatomy
- a channel from server to client (SSE or WebSocket) per open app or tab · often
- channels or rooms that clients subscribe to (one per document, chat, team) · often · limits who receives what
- presence: who is online or viewing · sometimes · usually a separate, lossy signal
- a source of change events: the app server, a database change feed, or a queue · often
- reconnect with catch-up from the last event seen · often · networks drop; missing messages are the common bug
- push notifications for when the app is closed · often · a different system; see notifications delivery
- a server process per shared document that holds its state · sometimes · collaborative editors and multiplayer tools
- peer-to-peer media with a relay server as fallback · sometimes · calls and screen sharing over WebRTC

### Conventions
- the database stays the truth; the live channel only announces changes · often · a missed message is repaired by reloading
- permissions checked when subscribing to a channel, not only when loading the page · often
- each event carries an ID or sequence number · often · lets clients spot gaps and duplicates
- typing indicators and cursors sent often and dropped freely; messages and edits stored and confirmed · often

## Choices and trade-offs

- **Polling or push.** Polling is simple, works everywhere and needs no special hosting; it wastes requests and lags by the interval. Long intervals with a refresh on focus cover many dashboards and inboxes.
- **Server-sent events or WebSockets.** SSE is plain HTTP, one-way, reconnects on its own and suits notifications, progress and streamed AI answers. WebSockets are two-way and fit chat, cursors and games, at the cost of more server and proxy setup.
- **Run it yourself or use a service.** Your own WebSocket server gives control; a managed real-time service, or the real-time feature of a BaaS (broadcast, presence, database changes), saves the hardest operations work and adds per-connection or per-message pricing and limits. Some edge platforms let a connection stay open while the server sleeps, which changes the cost picture.
- **Last write wins, locking, or merging.** Last write wins is simple and loses edits silently; locking ("being edited by …") is clear and slows people down; merging with operational transforms or CRDTs lets everyone type at once and is a real engineering investment. Many products with a central server use a simpler, server-decided merge per field.

## Watch out

- Treating the live channel as storage · a dropped connection loses data that was never saved
- No catch-up after reconnect · people see stale screens and do not know it
- Broadcasting to everyone and filtering on the client · data leaks to people who should not see it
- Choosing WebSockets for a feature that changes once a minute · connection costs and complexity for no felt gain
- Collaborative editing promised before conflicts are designed · "my changes disappeared" is the bug report
- Serverless functions that cannot hold open connections · check the platform before building on it

## Go deeper

- [MDN: WebSockets API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) · how two-way connections work in browsers, and newer alternatives
- [MDN: server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) · one-way streams over HTTP, with reconnection built in
- [How Figma's multiplayer technology works (Figma blog)](https://www.figma.com/blog/how-figmas-multiplayer-technology-works/) · a server-authoritative design for shared editing, and why it skipped full OT
- [crdt.tech](https://crdt.tech/) · an introduction and reading list on conflict-free replicated data types
- [Supabase Realtime](https://supabase.com/docs/guides/realtime) · broadcast, presence and database changes as offered by a BaaS
- [Cloudflare Durable Objects: WebSockets](https://developers.cloudflare.com/durable-objects/best-practices/websockets/) · one stateful process per room, and hibernating idle connections to save cost

## Related

- `areas/architecture/api-styles.md` · the request side; real-time is the push side
- `areas/architecture/serverless-and-baas.md` · whether the platform can hold connections
- `areas/architecture/background-jobs-queues.md` · jobs that report progress to an open screen
- `areas/practices/offline-sync.md` · catching up after being offline
- `areas/patterns/collaboration-comments.md` · what shared editing looks like on screen
- `areas/patterns/chat-interfaces.md` · the most common real-time screen
