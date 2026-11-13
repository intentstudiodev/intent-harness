---
kind: library
shelf: part
name: Sharing and invites
fits when: people give others access to something (a document, a project, a workspace) or bring new people into the product
related: areas/parts/roles-permissions.md, areas/parts/workspaces-multi-tenancy.md, areas/parts/notifications-delivery.md, areas/patterns/collaboration-comments.md, areas/patterns/onboarding.md
checked: 2026-11
---
# Sharing and invites

How access travels from one person to another: sharing a single item, inviting someone to a team, sending a link that opens without an account. It is also how many products grow. The tension: the easier sharing is, the easier it is to share too much, and access given in a hurry is rarely taken back.

## Questions worth asking

- What is shared: one item, a folder or project, a whole workspace? Does access to a container pass to what is inside? Inherited access is convenient and a common source of over-sharing.
- Who can share: owners only, editors, anyone with access? Can a company admin limit it? Admins at larger customers often ask to restrict sharing.
- Can people outside the organisation be invited, or only colleagues on the same domain? Outside guests bring identity, seat and data-leak questions.
- Are public or "anyone with the link" links needed, and should they expire? Open links are easy to forward and hard to take back.
- What does an invited person see before they have an account? Can they open the item first and sign up later? A sign-up wall before the item loses many invitees.
- What happens to access when the sharer leaves, the item moves, or the plan changes (seats)? Access tied to a person or a seat breaks when they change.

## Usual shape

### Anatomy
- share dialog: people field, role per person, current access list · often · roles from roles and permissions
- general access setting: restricted, organisation, anyone with the link · often · as in Google Drive
- copy link button, with what the link allows shown next to it · often
- invite by email with an optional message · often
- pending invites with resend and revoke · often
- invite acceptance page that works for new and existing accounts · often
- access requests from people who land without access · sometimes
- expiry dates on access or links · sometimes · common in work products
- domain allowlist or auto-join for a company's email domain · sometimes · team products
- referral invites with a reward · sometimes · consumer growth

### Conventions
- invite links carry an unguessable token, expire and can be revoked · often · W3C TAG advice on capability URLs
- a link sent to one person is tied to that person's account once accepted · often · so forwarded emails do not hand out access
- the inviter's name and the item's name in the invite email · often · people ignore invites from "noreply"
- invites open in the app when installed, the web otherwise · often · Universal Links on iOS, App Links on Android
- seats counted on acceptance or on invite · sometimes · either works; say which before someone sends twenty invites

## Choices and trade-offs

- **Invite people or share a link.** Invites are traceable and revocable per person; links are fast and travel further than intended. Many products offer both and default to restricted.
- **Item sharing or workspace membership.** Sharing items suits documents and guests; membership suits teams that see everything. Mixing them needs a clear answer to "why can this person see this?"
- **Open the item first or sign up first.** Viewing before sign-up removes friction and helps growth; requiring an account protects data and gives the sharer a name in the access list.
- **Inherit or restrict inside folders.** Inheriting saves clicks; restricting a sub-item lets one secret live inside a shared folder and confuses people who expect folder access to mean everything.

## Watch out

- "Anyone with the link" as the default · links end up in search engines, chat logs and referrer headers
- Invite tokens that never expire or work for anyone who has the email · forwarded mail becomes an open door
- Removing a person but not their pending invites and copied links · access lingers
- Sharing that reveals whether an email has an account · enumeration, and a privacy leak
- Invite links built on a deep-link service that shuts down · Firebase Dynamic Links was shut down in August 2025, leaving old invite links to be migrated
- Contact upload for "invite friends" without clear consent · store rules and privacy law both apply

## Go deeper

- [W3C TAG: good practices for capability URLs](https://www.w3.org/TR/capability-urls/) · risks of secret links, expiry, revocation and when to avoid them (draft, 2014, still the clearest treatment)
- [Google Drive Help: share and manage access](https://support.google.com/drive/answer/2494822) · a widely known model of roles, general access, expiry and limits on re-sharing
- [Apple: supporting universal links](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app) · opening invite links in the iOS app
- [Android Developers: deep links and App Links](https://developer.android.com/training/app-links) · verified links into the Android app

## Related

- `areas/parts/roles-permissions.md` · the roles a share grants
- `areas/parts/workspaces-multi-tenancy.md` · inviting people into a team or organisation
- `areas/parts/notifications-delivery.md` · getting the invite email delivered
- `areas/patterns/collaboration-comments.md` · what people do once they share
- `areas/patterns/onboarding.md` · the first minutes of an invited person
