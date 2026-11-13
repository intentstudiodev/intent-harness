---
kind: library
shelf: part
name: Accounts and profiles
fits when: people have an account that holds their details, settings and data, and may want to change, export or delete it
related: areas/parts/sign-in.md, areas/patterns/settings-preferences.md, areas/practices/privacy-consent.md, areas/parts/subscriptions-billing.md, areas/parts/workspaces-multi-tenancy.md
checked: 2026-11
---
# Accounts and profiles

The account is the record of a person in the product: who they are, how to reach them, what they chose and what they own. The profile is the part others may see. The tension: the account is where the product keeps what it needs, and also where the person exercises control over it, including the right to take it away.

## Questions worth asking

- Is there one person per account, or can an account have several people or several profiles (family, team, a shared device)? Shared accounts change sign-in, billing and privacy.
- What does the profile show to others, if anything: name, photo, handle, bio? Public, to contacts, or to colleagues only? What others see is a privacy choice as much as a layout one.
- Which details are required, and why each one? Apple's guideline 5.1.1 limits personal data to what the core feature or the law needs.
- What happens to content when someone leaves: their posts, shared files, team data, invoices? Deleted, kept anonymously, handed to someone else? Other people's work often depends on it.
- Is anything legally kept after deletion: invoices, tax records, fraud signals? For how long? Deletion has to leave those records intact.
- Can an email or username be changed, and what still points at the old one? Old links, mentions and sign-in methods may still use it.

## Usual shape

### Anatomy
- profile: display name, photo, handle · often · what others see
- account details: email, phone, password or passkeys, linked sign-in providers · often · see sign-in
- preferences: language, time zone, units, theme · often · see settings and preferences
- notification choices by type and channel · often · see notifications and delivery
- connected apps and devices, with revoke · sometimes · Apple 5.1.1 asks for a way to revoke social network credentials in the app
- export my data · sometimes · GDPR data portability (EU) and trust
- delete account, with what happens explained · often · a store rule on iOS and Google Play
- pause or deactivate · sometimes · offered beside deletion; on the App Store and Google Play it does not replace it

### Conventions
- deletion people can start in the app · often · Apple 5.1.1(v): required when the app supports account creation; deactivating alone does not count; a web flow is fine if the app links straight to it; only highly regulated industries may route it through support
- tokens revoked and store billing explained on deletion · often · Apple asks apps with Sign in with Apple to revoke the user's tokens, and apps with App Store subscriptions to say billing continues until people cancel with Apple
- a deletion request path in the app and on the web · often · Google Play: people can ask without reinstalling; the app says what data is kept and why, and declares it in the Data safety form
- erasure on request in many cases · often · GDPR Article 17 (EU, and UK GDPR): answered within one month (extendable by two); exceptions include legal obligations and legal claims; recipients of the data are told; backups put "beyond use" until overwritten
- one full-name field rather than first and last · often · W3C: name order and parts differ by culture
- ask again before changing email or deleting · often · and notify the old address

## Choices and trade-offs

- **Delete now or after a grace period.** A grace period (often 7 to 30 days) saves accidental and regretted deletions; it needs to be stated clearly and paired with a way to finish sooner. Apple allows scheduling deletion at subscription end only if immediate deletion is also offered.
- **Erase or anonymise shared content.** Removing a person's comments can break a thread others rely on; anonymising keeps the thread but may not be enough if the text itself identifies them. Products often decide per content type.
- **One identity or many profiles.** Several profiles under one account suit families and streaming; separate accounts suit work and privacy. Switching profiles needs to make the current one obvious.
- **Real names or handles.** Real names raise trust in work products; handles protect people in communities. Some products let each person choose.

## Watch out

- Deletion hidden behind support email or a phone call · fails App Store and Play review and erodes trust
- Deleting the account but not its data in backups, analytics, email tools and other processors · the request is only half done
- Email as a permanent key · people change jobs and addresses; an internal ID survives that
- Forcing first and last name, or rejecting apostrophes and single names · real people cannot sign up
- A profile photo or name that is public by default without saying so · surprises people and can put some at risk

## Go deeper

- [Apple: offering account deletion in your app](https://developer.apple.com/support/offering-account-deletion-in-your-app/) · what counts as deletion, web flows, Sign in with Apple tokens, subscriptions, timing
- [Google Play: account deletion requirements](https://support.google.com/googleplay/android-developer/answer/13327111) · in-app path, web link, retained data and the Data safety form
- [ICO: right to erasure](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-erasure/) · when erasure applies under UK GDPR, deadlines, exceptions, backups and third parties
- [W3C: personal names around the world](https://www.w3.org/International/questions/qa-personal-names) · name fields that work across cultures

## Related

- `areas/parts/sign-in.md` · getting into the account and recovering it
- `areas/patterns/settings-preferences.md` · how the settings screens are laid out
- `areas/practices/privacy-consent.md` · consent, data requests and retention
- `areas/parts/subscriptions-billing.md` · what happens to a plan when the account goes
- `areas/parts/workspaces-multi-tenancy.md` · when people belong to teams as well as having their own account
