---
kind: library
shelf: pattern
name: Chat interfaces
fits when: people send messages to other people inside the product (direct messages, group chat, buyer and seller threads, support conversations with a human)
related: domains/messaging.md, areas/patterns/ai-interfaces.md, areas/patterns/collaboration-comments.md, areas/patterns/in-app-notifications.md, areas/parts/notifications-delivery.md, areas/practices/offline-sync.md
checked: 2026-11
---
# Chat interfaces

The screens where people talk to each other: a list of conversations, a stream of messages and a composer at the bottom. It looks simple because everyone knows it from phone messengers, and that is the tension: people bring **expectations set by the best messengers** (instant delivery, read state, reactions, search) to a product where chat is often a side feature with a smaller budget.

## Questions worth asking

- Is chat the product, or a feature inside it (a marketplace thread, a team channel, a support line)? It decides how much of the messenger toolkit is worth building.
- One to one, small groups, or large channels? Read receipts, mentions and threads behave very differently at 2, 20 and 2,000 people.
- Do people expect to see whether a message was read? It reassures senders and pressures readers; some audiences want a way to turn it off.
- What can be attached: images, files, voice, locations, structured cards (an offer, a booking)? Each type brings storage, previews and moderation.
- Can messages be edited or deleted, and what does the other side then see? The other side may already have acted on the original.
- Is history kept for ever, for a period, or end-to-end encrypted so the server cannot read it? This shapes search, moderation and new-device sign-in.
- Who can message whom, and how do people block or report? Unwanted messages are the first abuse case in most chat features.

## Usual shape

### Anatomy
- conversation list with name, last message preview, time and unread count · often · the inbox people return to
- message stream, newest at the bottom, grouped by sender and by day · often · familiar from every messenger
- composer with send button, attachments and sometimes emoji or formatting · often
- delivery state per message: sending, sent, failed with retry · often · failures hide easily on weak networks
- read state: receipts, "seen by" or a read marker in the stream · sometimes · common in one-to-one, often summarised in groups
- typing indicator · sometimes · reassures in live conversations, noise in large groups
- reactions · sometimes · a light reply that avoids a message for every "ok"
- replies or threads off a message · sometimes · keeps busy channels readable
- mentions with a picker · sometimes · groups and channels; ties into notifications
- search across conversations · sometimes · grows in value with history
- conversation header with participants, mute, block and report · often

### Conventions
- the stream opens at the last unread message or at the bottom, not at the top · often
- new messages arriving while someone reads older ones show a "new messages" pill instead of jumping · often
- own messages aligned to one side or styled differently · often
- timestamps shown on demand or between gaps, not on every line · often
- unread counts that match what people see when they open the conversation · often · mismatched counts erode trust fast

## Choices and trade-offs

- **Real-time push or polling.** A live connection (WebSocket or a hosted service) feels instant and costs servers and complexity; polling is simpler and fine where replies take minutes, like marketplace or support threads.
- **Build or use a chat service.** Hosted chat SDKs give receipts, typing and moderation quickly and add a vendor, a cost per user and data stored elsewhere; building your own fits when chat is small and simple or the data cannot leave.
- **Flat stream or threads.** Flat is easy to follow in small groups; threads keep large channels tidy but split attention and hide replies people never open.
- **Receipts on, off or optional.** On by default reassures senders; optional respects readers; in groups, a count or "seen by" list is lighter than per-person ticks.
- **Server-readable or end-to-end encrypted.** A product-level decision that shapes search, moderation and history on new devices; see `domains/messaging.md`.

## Watch out

- Sending that looks successful on a weak network but silently fails · people think they replied when they did not
- Optimistic messages that arrive out of order or twice · conversations stop making sense; give each message a client id
- Unread counts that drift between devices · people stop trusting the badge and check everything by hand
- No block or report from inside the conversation · abuse lands on support, and in some markets regulators expect a reporting route
- New messages announced to screen readers by stealing focus, or not at all · the stream becomes unusable without sight
- Notifications for every message in a busy group · people mute the whole product, not just the group

## Go deeper

- [Matrix client-server API: receipts](https://spec.matrix.org/latest/client-server-api/#receipts) · an open, documented model of read receipts, threads, typing and redaction; useful vocabulary even if you never use Matrix
- [RFC 9420: Messaging Layer Security](https://www.rfc-editor.org/rfc/rfc9420) · the IETF standard for end-to-end encrypted group messaging, and what it means for membership and history
- [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/) · the `log` role and live regions for announcing new messages without moving focus
- [Nielsen Norman Group: customer-service chat](https://www.nngroup.com/articles/chat-ux/) · guidelines for chat with a support team: entry point, waiting, hand-off, transcripts
- [Stream: chat UX best practices](https://getstream.io/blog/chat-ux/) · a vendor write-up on empty states, notifications, moderation and re-engagement in chat products

## Related

- `domains/messaging.md` · when messaging is the product itself
- `areas/patterns/ai-interfaces.md` · when the other side of the chat is an AI
- `areas/patterns/collaboration-comments.md` · comments anchored to a document rather than a free conversation
- `areas/patterns/in-app-notifications.md` · unread badges and in-product alerts
- `areas/parts/notifications-delivery.md` · push and email for new messages
- `areas/practices/offline-sync.md` · sending, queuing and retrying on bad networks
