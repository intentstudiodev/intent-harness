---
kind: library
shelf: pattern
name: In-app notifications
fits when: the product tells people about events while they use it (a notification centre or inbox, unread badges, toasts and snackbars, banners)
related: areas/parts/notifications-delivery.md, areas/patterns/empty-loading-error-states.md, areas/patterns/modals-overlays.md, areas/patterns/settings-preferences.md, areas/patterns/collaboration-comments.md, areas/practices/accessibility.md
checked: 2026-11
---
# In-app notifications

How a product tells people something happened, inside the product itself: a bell with a list, a red count on a tab, a toast after saving, a banner about an outage. Email, push and SMS are the delivery side and live in their own file. The tension: **every team wants its event noticed**, and every extra badge and toast makes all of them easier to ignore.

## Questions worth asking

- Which events deserve attention, and which are just history? A mention needs action; "your export finished" may only need a toast.
- Does the person need to act, or only know? Action items want to stay until handled; information can fade.
- Is the notification about the user's own action (saved, sent) or someone else's (a comment, an approval request)? They belong in different places.
- What does "read" mean: opened the centre, opened the item, or done the task? Counts depend on it.
- Should the in-app list mirror email and push, or hold more? Many products treat the centre as the full record and other channels as a subset.
- In a team product, are some notifications for one person and some for everyone in a workspace?
- Can people turn types off, and where do they find that?

## Usual shape

### Anatomy
- notification centre or inbox behind a bell, with newest first · often · the record of what happened to me
- unread count badge on the bell or a tab · often · capped display ("99+") once numbers stop meaning anything
- each item: who or what, what happened, when, and a link to the thing · often
- mark as read, mark all as read · often
- grouping of similar events ("5 new comments on Plan") · sometimes · busy products
- tabs or filters: all, mentions, requests, unread · sometimes
- toast or snackbar for the result of the user's own action, sometimes with undo · often · brief and out of the way
- inline banner for a state of a page or account (trial ending, sync paused) · often · stays until resolved
- system or outage banner across the app · sometimes
- dot badges on navigation items for new content without a count · sometimes
- link from the centre to notification settings · often

### Conventions
- one toast at a time, short text, at most one action · often · design systems such as Material describe it this way
- errors that need fixing stay on screen; they do not vanish like a success toast · often
- badges cleared when the person sees the thing, not only when they open the centre · sometimes · depends on the meaning of "read"
- messages announced to assistive technology without moving focus · often · WCAG 2.2 success criterion 4.1.3 covers status messages

## Choices and trade-offs

- **Notification centre or inline only.** A centre suits collaboration and requests that pile up; small tools often manage with toasts and page banners and no bell.
- **Toast or inline message.** A toast is light and easy to miss, fine for confirmations; inline messages next to the cause fit errors and anything people need to read twice.
- **Count or dot.** A count says how much is waiting and invites anxiety at high numbers; a dot says only "something new" and suits feeds.
- **Real-time or on load.** Live updates feel responsive and need a connection; refreshing on page load or focus is simpler and enough for slow events.
- **Build or use a notification service.** Hosted inbox and preference services cover read state across channels quickly and add a vendor; building fits a handful of event types.

## Watch out

- Every event becomes a notification · people learn to clear the badge without reading
- Toasts that disappear before they can be read, or hold the only copy of an error · WCAG 2.2.1 asks that people can adjust or extend time limits
- Unread counts that do not match the list · people stop trusting the badge
- A notification that links to a page where the event is hard to find · the click lands without context; a link to the exact comment or item avoids it
- Marketing messages mixed with work notifications · real alerts get dismissed with the promotions
- No route from a notification to "stop telling me this" · people mute everything or leave

## Go deeper

- [Nielsen Norman Group: indicators, validations and notifications](https://www.nngroup.com/articles/indicators-validations-notifications/) · choosing between a passive indicator, an inline validation and a notification
- [Material Design 3: snackbar](https://m3.material.io/components/snackbar/overview) · brief messages about an app process, with one optional action
- [Material Design 3: badges](https://m3.material.io/components/badges/overview) · small and large badges, counts and their placement on navigation
- [Carbon Design System: notification](https://carbondesignsystem.com/components/notification/usage/) · inline, toast, actionable and callout notifications and when each fits
- [W3C: Understanding WCAG 2.2 status messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) · announcing updates to screen readers without moving focus

## Related

- `areas/parts/notifications-delivery.md` · email, push and SMS, preferences and delivery
- `areas/patterns/empty-loading-error-states.md` · errors and success states on the page itself
- `areas/patterns/modals-overlays.md` · when an interruption needs a dialog instead
- `areas/patterns/settings-preferences.md` · where people turn notification types on and off
- `areas/patterns/collaboration-comments.md` · mentions and replies, the main source of notifications in team tools
- `areas/practices/accessibility.md` · live regions, timing and focus
