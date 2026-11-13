---
kind: library
shelf: part
name: Notifications and delivery
fits when: the product sends messages outside itself (email, push, SMS) to confirm, remind, alert or bring people back
related: areas/patterns/in-app-notifications.md, areas/patterns/settings-preferences.md, areas/practices/privacy-consent.md, areas/parts/sign-in.md, areas/parts/subscriptions-billing.md
checked: 2026-11
---
# Notifications and delivery

Messages that reach people when they are not looking at the product: a receipt by email, a push when a delivery arrives, an SMS code. The in-app list and badges are in the in-app notifications pattern; this file is about the channels, the preferences and getting delivered at all. The tension: each message has to earn its interruption, and the ones that do not train people to ignore or block the ones that matter.

## Questions worth asking

- Which messages exist, and which are essential (receipts, security, password reset) versus helpful (reminders, mentions) versus promotional? Each group has its own consent and opt-out rules.
- Which channel fits each: email, push, SMS, in-app, chat apps, and who pays for SMS? Channels differ in cost, reach and how easily they are muted.
- What can people turn off, per type and per channel? Essential messages usually stay on; marketing needs consent in many places.
- How urgent is each message, and does it matter at night or across time zones? Urgency decides the channel and quiet hours.
- What sends them: the product's own servers, an email provider, a notification service, and who owns the sending domain? The domain carries the reputation that gets mail delivered.
- What happens when a message is not delivered: bounced email, expired push token, a phone number that changed? Silent failures leave people locked out or uninformed.

## Usual shape

### Anatomy
- a catalogue of message types with owner, channel and purpose · often · stops each feature adding its own
- transactional email: receipts, resets, invitations, security alerts · often
- push notifications on mobile and in browsers · often · permission asked in context
- SMS for codes and urgent alerts · sometimes · costly and regulated
- preferences page: types by channel, with quiet hours · often · see settings and preferences
- unsubscribe link in every non-essential email, and one-click unsubscribe headers · often · required by large mailbox providers for bulk mail
- digests that bundle many events into one message · sometimes · collaboration and social products
- delivery log per message: sent, delivered, bounced, opened · sometimes · support needs it
- templates with localisation and plain-text versions · often

### Conventions
- sender authentication and one-click unsubscribe · often · Gmail and Yahoo (since 2024): all senders use SPF or DKIM; bulk senders (about 5,000 a day to Gmail) use SPF, DKIM and DMARC with alignment, offer one-click unsubscribe (RFC 8058) and keep spam complaints under 0.3%; Yahoo asks for unsubscribes to be honoured within two days
- push permission asked at a moment that shows the benefit · often · on Android 13 and later, notifications are off for new installs until POST_NOTIFICATIONS is granted
- interruption levels chosen per message on iOS · sometimes · the system asks for permission once; passive, active, time-sensitive and critical decide how loudly a message arrives; critical alerts need Apple's approval
- push optional for the app to work, and not used for marketing without opt-in · often · Apple App Review Guideline 4.5.4
- prior consent for promotional email and SMS, with STOP replies honoured on SMS · often · EU ePrivacy rules and, for many texts, the US TCPA; ask counsel for the markets in scope
- security and transactional mail sent from a separate address or subdomain · often · keeps marketing reputation from blocking resets

## Choices and trade-offs

- **Build on your servers or use a notification service.** Your own sending is cheap and needs care for queues, retries, bounces and reputation; a service handles channels, templates and preferences for a fee and a dependency.
- **Each event or a digest.** Instant messages suit urgent and personal events; digests suit busy streams and protect attention. Letting people choose per type is common.
- **Push first or email first.** Push is immediate and easy to mute; email is durable and searchable and slower. Many products send push and fall back to email if it was not seen.
- **Ask for push early or late.** Asking on first launch gets a fast answer, often "no"; asking after an action that shows the value (following, ordering) gets better rates and a later start.

## Watch out

- Marketing and password resets from the same domain and IP · one complaint spike and resets go to spam
- Preferences that only control email · push and SMS keep coming, and people turn off everything at the system level
- No idempotency or deduplication · two retries mean three identical messages
- Time-sensitive messages without a time zone · reminders at 3 a.m.
- Sensitive content in the push preview · codes, health or money details on a locked screen
- Sending to addresses that bounce · reputation drops for every other message

## Go deeper

- [Gmail: email sender guidelines](https://support.google.com/a/answer/81126) · authentication, unsubscribe and spam-rate requirements for all and for bulk senders
- [Yahoo Sender Hub: sender requirements](https://senders.yahooinc.com/best-practices/) · the matching Yahoo rules, including the two-day unsubscribe window
- [RFC 8058: one-click unsubscribe](https://www.rfc-editor.org/rfc/rfc8058) · the header standard mailbox providers now expect
- [Android Developers: notification runtime permission](https://developer.android.com/develop/ui/views/notifications/notification-permission) · when and how to ask on Android 13 and later
- [Apple Human Interface Guidelines: notifications](https://developer.apple.com/design/human-interface-guidelines/notifications) · tone, timing and interruption levels on Apple platforms

## Related

- `areas/patterns/in-app-notifications.md` · the bell, badges and in-product list
- `areas/patterns/settings-preferences.md` · the preferences screen
- `areas/practices/privacy-consent.md` · consent for marketing messages
- `areas/parts/sign-in.md` · codes and magic links that depend on delivery
- `areas/parts/subscriptions-billing.md` · renewal and failed-payment messages
