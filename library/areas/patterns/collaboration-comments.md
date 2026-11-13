---
kind: library
shelf: pattern
name: Collaboration and comments
fits when: several people work on the same thing (a document, design, record, task or file) and discuss it in place, at the same time or in turns
related: areas/patterns/chat-interfaces.md, areas/patterns/in-app-notifications.md, areas/parts/sharing-invites.md, areas/parts/roles-permissions.md, areas/parts/audit-history.md, areas/practices/offline-sync.md
checked: 2026-11
---
# Collaboration and comments

Working together on one object: comments pinned to a paragraph or a spot on a design, mentions that pull someone in, suggestions to accept or reject, and sometimes several cursors editing at once. Unlike chat, the conversation belongs to the thing being made. The tension: **many people changing and discussing one object** while each of them needs to know what changed, what is still open and who is waiting on whom.

## Questions worth asking

- Do people edit at the same time, in turns, or does one person own the object and others only comment? Live co-editing and commenting need very different machinery.
- What is a comment attached to: the whole object, a range of text, a point on a canvas, a field, a version? Anchoring decides what happens when the content changes.
- Do comments end: resolved, accepted, archived? Or do they pile up? Comments that never end bury the open ones.
- Are there formal reviews or approvals, or only discussion? Approvals need states, owners and a record; discussion does not.
- Who can comment, and can guests or clients outside the team take part? Outside commenters bring permission and privacy questions.
- How do people hear about replies and mentions: in the product, by email, both? Replies nobody hears about go unanswered.
- Is the history of changes and discussion something people or auditors need later? If so, comments and changes are kept rather than deleted.

## Usual shape

### Anatomy
- comment threads anchored to a place, with a marker in the content · often
- side panel listing open threads, with filters (open, resolved, mine) · often
- mentions with a people picker, notifying the person mentioned · often
- reply, edit, delete and resolve on each thread · often
- reactions on comments · sometimes · light acknowledgement without a reply
- presence: avatars of who is here, live cursors or selections · sometimes · real-time tools
- suggested edits that can be accepted or rejected · sometimes · documents
- assign a comment as a task · sometimes · turns discussion into work
- version history with who changed what · often
- guest or link-based commenting · sometimes · reviews with clients

### Conventions
- resolved threads hidden by default and recoverable · often
- a comment whose anchor was deleted kept and marked, not silently lost · often
- notifications sent to people mentioned or in the thread, not to everyone with access · often
- the same comment UI in every place that has comments · often

## Choices and trade-offs

- **Real-time co-editing or turn-taking.** Real-time editing suits documents and designs where people work together live, and needs conflict resolution (operational transforms or CRDTs) and presence; locking or check-out is simpler and fits records, forms and regulated content.
- **Server as the authority or local-first.** A central server keeps one truth and is easier to secure; local-first sync works offline and merges later, with more complex conflict and permission rules.
- **Comments in context or in a feed.** Anchored comments keep discussion next to the content; a single activity feed suits records like tickets where the order of events matters more than position.
- **Suggestions or direct edits.** Suggestions protect an owner's text and slow everyone down; direct edits with history are faster where trust is high.
- **Build or use a collaboration service.** Hosted services give presence, comments and sync quickly and add a vendor holding the content; building fits simple, turn-based comments.

## Watch out

- Comments anchored to positions that shift when text changes · threads point to the wrong place
- No resolve or close state · open threads grow until people stop reading them
- Mentions that notify people who cannot open the object · they get an email and an access-denied page
- Notifying everyone on every comment · people mute the product, then miss the comment that mattered
- Two people editing the same field with last-write-wins and no warning · one person's work disappears silently
- Comments edited or deleted without a trace in regulated work · the record of who said what is lost

## Go deeper

- [Figma: how multiplayer technology works](https://www.figma.com/blog/how-figmas-multiplayer-technology-works/) · a practical account of real-time co-editing, conflict handling and why a server stays in charge
- [Ink & Switch: local-first software](https://www.inkandswitch.com/local-first/) · the case for and against local-first collaboration and CRDTs
- [W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/) · a standard way to describe what a comment is attached to and how anchors survive change
- [Google Docs Editors Help: comments, action items and reactions](https://support.google.com/docs/answer/65129) · a widely known model of threads, mentions, assignment and resolve
- [Liveblocks: building in-app commenting](https://liveblocks.io/blog/how-to-build-an-engaging-in-app-commenting-experience) · a vendor's write-up of comment threads, mentions and notifications in product UI

## Related

- `areas/patterns/chat-interfaces.md` · free conversation not tied to an object
- `areas/patterns/in-app-notifications.md` · mentions and replies in the notification centre
- `areas/parts/sharing-invites.md` · bringing people in to collaborate
- `areas/parts/roles-permissions.md` · who may view, comment and edit
- `areas/parts/audit-history.md` · versions and the record of changes
- `areas/practices/offline-sync.md` · merging work done apart
