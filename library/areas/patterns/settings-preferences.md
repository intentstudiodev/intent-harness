---
kind: library
shelf: pattern
name: Settings and preferences
fits when: people change how the product behaves for them or for their team (account, notifications, privacy, appearance, workspace and admin settings)
related: areas/parts/accounts-profiles.md, areas/parts/workspaces-multi-tenancy.md, areas/parts/roles-permissions.md, areas/parts/notifications-delivery.md, areas/practices/privacy-consent.md, areas/practices/theming-dark-mode.md
checked: 2026-11
---
# Settings and preferences

The place where people adjust the product: their account, what they get notified about, privacy, appearance, and in team products the settings of a whole workspace. It tends to grow by accretion, one toggle per feature request. The tension: **control people value versus a long list nobody can search**; every setting is also a decision the team did not make.

## Questions worth asking

- Whose setting is it: this person, this device, this workspace, the whole organisation? The same toggle at the wrong level confuses everyone.
- Who may change workspace or organisation settings, and do others see that a setting is locked by an admin?
- Could a good default remove the setting altogether? Each option is a small support and testing cost.
- Does a change apply at once, or after a save? People expect one behaviour across the whole settings area.
- Which settings carry legal weight: privacy, marketing consent, data sharing, account deletion? These may have rules about defaults.
- Does the platform already offer this (dark mode, text size, language, notification permission)? Duplicating it can conflict with the system.
- How often do people come here? Rarely visited settings need good names and search more than clever layout.

## Usual shape

### Anatomy
- entry from the account menu or avatar, sometimes also a keyboard shortcut · often · on Mac, Command-Comma is the standard shortcut
- grouped sections: account, notifications, privacy and security, appearance, billing · often
- separate workspace or admin settings for team products · often · different people, different permissions
- search in settings · sometimes · once there are dozens of options
- toggles for on and off choices that apply at once · often
- radio groups or selects for one of several · often
- short help text under a setting saying what it changes · often
- a danger zone: delete account, leave or delete workspace, transfer ownership · often · set apart, with confirmation
- export my data · sometimes · and in some jurisdictions a right people can exercise
- shortcuts from the place a setting matters ("notification settings" from the notification centre) · sometimes
- per-object settings next to the object (this project, this channel) · sometimes

### Conventions
- one save model per screen: instant toggles or a form with save, not a mix · often
- a visible confirmation that a change was saved · often
- settings locked by an admin shown as locked, with who to ask · sometimes
- system preferences respected rather than repeated (theme, motion, language) · often · Apple's HIG suggests not duplicating system-wide settings

## Choices and trade-offs

- **Instant apply or explicit save.** Instant apply suits independent toggles and feels light; a save button suits related fields, validation and changes that are costly to get wrong.
- **One settings page or many.** A single scrolling page is easy to search with the browser and fine for a few groups; a sidebar of sections scales to dozens of settings and to admin areas.
- **Setting or in context.** A setting in the settings area is easy to find later; an option next to the feature is easier to discover and keeps the settings area short.
- **Per user, per device or synced.** Synced preferences follow people across devices; per-device fits things like density or sound that depend on the screen or place.
- **Expose it or decide it.** A setting lets people choose; an opinionated default removes a branch to design, test and support.

## Watch out

- Toggles whose labels say what the feature is rather than what turning it on does · people guess the wrong way, especially with negatives ("Disable…")
- Toggles that wait for a save button · the switch looks applied when it is not
- Privacy and marketing options switched on by default · in the EU, GDPR Article 25 asks for data protection by default, and GDPR Recital 32 rules out pre-ticked boxes as consent
- Workspace settings mixed into personal settings · people change things for the whole team without knowing
- Destructive actions next to everyday ones · accidental deletions and support escalations
- Settings that are not respected everywhere (the email setting ignored by one service) · people lose trust in all of them

## Go deeper

- [Apple HIG: settings](https://developer.apple.com/design/human-interface-guidelines/settings) · good defaults, fewer settings, and when settings belong in the system Settings app or in the task
- [Android Developers: settings pattern](https://developer.android.com/design/ui/mobile/guides/patterns/settings) · organising, grouping and labelling settings on Android
- [Microsoft: guidelines for app settings](https://learn.microsoft.com/en-us/windows/apps/design/app-settings/guidelines-for-app-settings) · what belongs in settings, layout and the controls to use on Windows
- [Nielsen Norman Group: toggle-switch guidelines](https://www.nngroup.com/articles/toggle-switch-guidelines/) · when a toggle fits better than a checkbox, and labelling it clearly
- [EDPB Guidelines 4/2019 on Article 25](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-42019-article-25-data-protection-design-and_en) · the EU data protection board's reading of privacy by design and by default, useful for what defaults to ask a lawyer about

## Related

- `areas/parts/accounts-profiles.md` · profile, email, password and account deletion
- `areas/parts/workspaces-multi-tenancy.md` · settings that belong to a team or organisation
- `areas/parts/roles-permissions.md` · who may change which settings
- `areas/parts/notifications-delivery.md` · notification preferences by channel
- `areas/practices/privacy-consent.md` · consent, data sharing and defaults
- `areas/practices/theming-dark-mode.md` · appearance settings and following the system
