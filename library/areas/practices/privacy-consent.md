---
kind: library
shelf: practice
name: Privacy and consent
fits when: the product collects personal data, uses cookies or trackers, sends marketing, or serves people in the EU, UK, California or other places with privacy laws
related: areas/practices/trust-dark-patterns.md, areas/practices/analytics-experiments.md, areas/practices/security-basics.md, areas/parts/accounts-profiles.md, areas/parts/import-export.md, areas/parts/audit-history.md
checked: 2026-11
---
# Privacy and consent

What the product collects about people, why, how long it keeps it, and what control people have: consent where it is needed, honest notices, and rights people can actually use; this file says what to ask and where to read, and is not legal advice. The tension: data that helps the product and the business versus people's expectations and laws that say collect less, explain more and let go when asked.

## Questions worth asking

- Which personal data does each feature need, and what is collected "just in case"? Data minimisation is a GDPR principle and the cheapest protection.
- Where are the users: EU, UK, California, other US states, elsewhere? Rules differ, and the strictest market often shapes the design.
- What is the lawful basis for each use under GDPR: contract, consent, legitimate interests, legal obligation? Consent is one of six bases, not the default.
- Which cookies, SDKs and pixels run, and which are strictly necessary? In the EU (ePrivacy Directive) and UK (PECR), non-essential storage on the device generally needs consent.
- Is data sold or shared for cross-context advertising? Under California's CCPA/CPRA that brings an opt-out and the duty to honour Global Privacy Control signals.
- Any sensitive data: health, children, precise location, biometrics, finances? Extra rules apply in most jurisdictions.
- How are access, deletion, correction and export requests received, verified and answered, and by whom? Deadlines run from receipt.
- Which processors and countries does the data pass through? International transfers have their own rules.
- Are the rules moving? At the time of checking (2026-11), EU proposals to change cookie consent were still under negotiation and the UK's Data (Use and Access) Act 2025 had added some exemptions; regulators' pages have the current state.

## Usual shape

### Anatomy
- privacy notice in plain language, layered, linked where data is collected · often
- consent banner with accept and reject equally easy on the first layer · often · what EU and UK regulators expect
- consent settings people can reopen and change · often · under GDPR withdrawing is as easy as giving
- just-in-time explanations when asking for location, contacts, camera · often · beside the platform permission prompt
- marketing opt-in separate from accepting terms · often
- privacy settings in the account: visibility, sharing, ad personalisation · sometimes
- self-serve "download my data" and "delete my account" · sometimes · Apple requires in-app account deletion for apps that let people create accounts (App Store Review Guidelines)
- "Do Not Sell or Share My Personal Information" and GPC handling · sometimes · California and similar US state laws
- behind the scenes: a data map, records of processing, retention schedule, processor agreements · often · asked for in audits and due diligence

### Conventions
- no pre-ticked boxes and no "by continuing you agree" as consent · often · EU and UK guidance treat neither as valid consent
- tracking that needs consent starts only after consent · often
- retention set per kind of data, with deletion that runs on its own · often
- request deadlines met · often · one month under GDPR and UK GDPR, extendable by two for complex cases; 45 days under CCPA, extendable by 45, and 15 business days for opt-outs (ICO and California Attorney General pages)

## Choices and trade-offs

- **One global standard or rules per region.** Applying the strictest rules everywhere is simpler to build and explain and gives up some data; per-region behaviour keeps more data where rules allow and adds complexity and room for mistakes.
- **Consent platform or own banner.** A consent management platform tracks vendors and stores proof; an own banner is lighter and leaves the records to the team. Some small sites avoid a banner by running no non-essential cookies at all.
- **First-party or third-party analytics.** Self-hosted, privacy-focused analytics can reduce consent needs in some places; third-party tools offer more and usually need consent in the EU.
- **Self-serve rights or by request.** Self-serve export and deletion scale and reduce errors; email requests work at small volume with a log and identity checks.
- **Delete or anonymise.** Anonymised data keeps statistics and is harder to achieve than it looks; pseudonymised data is still personal data under GDPR.

## Watch out

- "Reject" hidden in settings while "Accept" is one click · EU and UK regulators have acted on this, and it is a dark pattern
- Trackers firing before the banner is answered · consent gathered afterwards is not consent
- Data collected with no stated purpose · hard to justify, costly to protect, a liability in a breach
- Deletion that misses backups, logs, analytics and processors · the request is not really done
- Identity checks that ask for more data than the account holds · the request becomes a new privacy risk
- Consent choices recorded nowhere · no proof when a regulator or customer asks
- A privacy notice copied from another product · it describes their processing, not this one

## Go deeper

- [European Commission: data protection](https://commission.europa.eu/law/law-topic/data-protection_en) · the EU framework, people's rights and business obligations, with links to the GDPR text
- [EDPB Guidelines 05/2020 on consent](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052020-consent-under-regulation-2016679_en) · what makes consent valid in the EU, including cookie walls and scrolling
- [ICO: cookies and similar technologies](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/) · UK rules on consent and the strictly necessary exemption
- [California Attorney General: CCPA](https://oag.ca.gov/privacy/ccpa) · Californians' rights, which businesses are covered, response times and GPC
- [Global Privacy Control](https://globalprivacycontrol.org/) · the browser opt-out signal and where it has legal weight

## Related

- `areas/practices/trust-dark-patterns.md` · honest choices in banners and settings
- `areas/practices/analytics-experiments.md` · measuring with and without consent
- `areas/practices/security-basics.md` · protecting what is kept
- `areas/parts/accounts-profiles.md` · account deletion and profile visibility
- `areas/parts/import-export.md` · data portability and access exports
- `areas/parts/audit-history.md` · retention of history and logs
