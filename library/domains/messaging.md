---
kind: library
shelf: domain
group: model
name: Messaging
fits when: people send messages to each other or to a business in conversations, one to one or in groups, and expect them to arrive quickly (chat apps, team chat, in-app messaging, support chat)
related: areas/patterns/chat-interfaces.md, areas/parts/notifications-delivery.md, areas/practices/offline-sync.md, areas/practices/security-basics.md, domains/social-community.md, domains/ai-assistant.md
checked: 2026-11
---
# Messaging

A product, or a part of one, where people exchange messages in conversations: friends, a team, a buyer and a seller, a customer and support. The heart of it is **delivery people can feel**: a message has to arrive once, in order, on every device, and the sender has to know it did, while the conversation stays private and quiet enough to live with.

## Questions worth asking

- Is messaging the product, or a feature inside another product (a marketplace, a booking app, a SaaS tool)? A feature can lean on the host's accounts and notifications.
- Who talks to whom: people they know, strangers, a team, a business? Strangers bring spam and abuse rules; teams bring channels and admins.
- How private does it need to be: encrypted end to end, encrypted in transit and at rest, or readable by the business for support and compliance? This decides what the server can do (search, moderation, backups).
- How big do groups get: a handful, hundreds, thousands? Large groups change notifications, read receipts and moderation.
- Which devices: phone only, or phone, web and desktop together? Multi-device sync is where much of the hard work sits.
- How long are messages kept, and can people edit, delete or set them to disappear? Deleted and disappearing messages have to go from every device.
- Do messages carry more than text: files, voice, calls, payments, bots? Each type adds storage, moderation and platform rules.

## Usual shape

### Roles
- sender and recipient · often · the same person, moment to moment
- group admin or channel owner · often · members, names, permissions
- workspace admin · sometimes · team chat: retention, exports, compliance
- support agent or business account · sometimes · in-app and customer messaging
- bot or automated sender · sometimes · notifications, integrations, AI replies

### Journeys
- start a conversation: pick a person, a group or a channel · often
- send and see delivery state (sending, sent, delivered, read) · often
- receive a notification and reply, sometimes straight from it · often
- share a photo, file or voice note · often
- search past messages · often · hard when messages are end-to-end encrypted
- mute, leave, block, report · often
- add a new device and see history · often · the moment encryption and sync meet

### Screens
- conversation list with unread counts and previews · often
- conversation view with composer · often
- group or channel details: members, media, settings · often
- new conversation or contact picker · often
- notification settings per conversation · often
- calls · sometimes

### Rules
- message order and de-duplication across devices and poor networks · often · messages queue offline and send later
- read receipts and typing indicators, often with a way to turn them off · often
- edit and delete windows · sometimes · "delete for everyone" usually has a time limit
- retention and export rules · sometimes · workplaces and regulated sectors
- spam limits for new accounts and message requests from strangers · often
- reporting, blocking and filtering · often · Apple's App Store requires them for apps with user-generated content (guideline 1.2)

## Choices and trade-offs

- **End-to-end encryption or server-readable.** End to end protects people from the operator and from breaches, and makes server search, moderation and history on new devices much harder. Server-readable suits support, compliance and rich search. Established protocols (Signal's, MLS) exist so teams do not invent their own.
- **Build or use a messaging service.** A hosted service gives delivery, presence and moderation quickly and ties data and pricing to a vendor; building gives control and a long list of edge cases.
- **Threads, live delivery, receipts.** Screen-level choices shared with chat as a feature; see `areas/patterns/chat-interfaces.md`.
- **Open or closed network.** A closed network is simpler; open or federated protocols (such as Matrix) let different servers talk, at the cost of complexity. In the EU, the Digital Markets Act asks the largest messaging gatekeepers to offer interoperability.

## Watch out

- Notifications for every message in every group · people mute the app entirely
- A message shown as sent when it was not · lost messages destroy trust faster than slow ones
- Delete that only hides on one device · people believed it was gone
- Unlimited messages from strangers · spam and harassment arrive first in open messaging
- Search and history promised alongside end-to-end encryption without a plan · one of them quietly breaks
- Ignoring the platform's conversation features (grouped notifications, inline reply) · the app feels foreign next to others

## Go deeper

- [Signal: technical documentation](https://signal.org/docs/) · the Double Ratchet, X3DH and PQXDH specifications behind many end-to-end encrypted apps
- [RFC 9420: Messaging Layer Security (IETF)](https://www.rfc-editor.org/rfc/rfc9420) · the standard for end-to-end encrypted groups from two to thousands of members
- [Matrix specification](https://spec.matrix.org/latest/) · an open, federated model of rooms, events and sync; useful even if not adopted
- [Android: people and conversations](https://developer.android.com/develop/ui/views/notifications/conversations) · how Android shows conversation notifications, bubbles and shortcuts
- [Apple App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) · guideline 1.2 on reporting and blocking for user-generated content

## Related

- `areas/patterns/chat-interfaces.md` · the conversation screen in detail
- `areas/parts/notifications-delivery.md` · push, email and in-app delivery
- `areas/practices/offline-sync.md` · queued messages and multi-device state
- `areas/practices/security-basics.md` · encryption and account safety
- `domains/social-community.md` · public posting alongside private conversations
- `domains/ai-assistant.md` · when the other side of the chat is an AI
