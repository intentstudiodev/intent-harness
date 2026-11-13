---
kind: library
shelf: practice
name: Security basics
fits when: the product stores accounts or data, takes payments or runs on the internet; especially before the first real users and before the first customer security review
related: areas/parts/sign-in.md, areas/parts/roles-permissions.md, areas/practices/privacy-consent.md, areas/parts/audit-history.md, areas/parts/integrations-webhooks.md, areas/parts/workspaces-multi-tenancy.md
checked: 2026-11
---
# Security basics

The product-level view of keeping accounts and data safe: what is worth protecting, which common weaknesses to design out, and what customers and laws now expect. This is a lens for planning, not a testing guide. The tension: security work is invisible when it succeeds and competes with features for time, while most real incidents come from a few ordinary gaps rather than exotic attacks.

## Questions worth asking

- What would hurt most if it leaked or was changed: personal data, payment details, health records, customers' business data, admin access? It sets where effort goes.
- Who is likely to attack: bots trying stolen passwords, users guessing other people's IDs, insiders, automated scanners? Most products face the first two.
- What level of assurance is expected? OWASP ASVS defines three levels; the owner and the customers decide which one the product aims for.
- Will customers send security questionnaires or ask for SOC 2 or ISO 27001? B2B deals often stall without answers.
- Which outside rules apply: card rules (PCI DSS) when handling card data, sector rules, the EU Cyber Resilience Act for products with digital elements sold in the EU?
- Who receives a vulnerability report or handles an incident, and how fast? A contact and a plan are cheaper made before they are needed.
- Which third-party services and packages touch the data? Software supply chain failures are their own category in the OWASP Top 10:2025.

## Usual shape

### Anatomy
- sign-in with strong defaults: MFA available (often required for admins), rate limits, breached-password checks · often · see sign-in
- authorisation checked on the server for every request and every object · often · broken access control is first in the OWASP Top 10:2025
- secrets out of code, logs and client bundles, scoped and rotated · often
- encryption in transit everywhere and at rest for stored data · often
- safe handling of input: parameterised queries, output encoding, checked uploads · often · injection is still in the Top 10
- dependency updates, scanning and a list of components (SBOM) · often · supply chain
- security events logged and alerted on: sign-ins, permission changes, exports · often · see audit and history
- customer-facing security settings: sessions, devices, MFA enforcement, single sign-on · sometimes · B2B
- a security page and a way to report vulnerabilities (for example a `security.txt` file) · sometimes
- backups that are tested by restoring · often

### Conventions
- secure by default: the safe setting is the default and costs nothing extra · often · CISA's Secure by Design principles
- least privilege for people, services and API tokens · often
- failing closed, with errors that do not reveal internals · often · the 2025 Top 10 added mishandling of exceptional conditions
- passwords judged by length, without composition rules or forced periodic changes, with paste and password managers allowed · often · NIST SP 800-63B
- mobile apps keep secrets off the device where they can and use platform secure storage · often · OWASP MASVS covers mobile

## Choices and trade-offs

- **Build or buy identity.** Hosted identity providers bring MFA, passkeys, breach checks and SSO quickly and add a dependency and cost; building in-house gives control and many details to get right.
- **Checklist or threat model.** A checklist (ASVS, Top 10) is fast and covers common ground; a short threat model of the product's own flows finds the business-logic gaps checklists miss. Many teams do a light version of both.
- **Certify now or later.** SOC 2 or ISO 27001 opens enterprise deals and takes months; early products often answer questionnaires honestly and certify when deals demand it.
- **Pen test, bug bounty or neither yet.** A pen test gives a point-in-time view; a bounty gives continuous attention and noise; very early products often start with automated scanning and a disclosure policy.

## Watch out

- Permissions checked only in the interface · anyone can call the API directly
- Guessable IDs with no ownership check · people walk through other customers' records
- Admin and support tools protected less than the product · the shortest path to everything
- Secrets in the repository, the web bundle or the mobile app · they tend to be found, and quickly
- "Security later" · retrofitting access control across a grown codebase is slow and leaves gaps
- Stack traces and verbose errors in production · a free map for attackers
- No incident plan · slow, confused responses; in the EU, the Cyber Resilience Act adds duties to report actively exploited vulnerabilities from 11 September 2026, with its main obligations from 11 December 2027

## Go deeper

- [OWASP Top 10:2025](https://top10.owasp.org/2025/) · the ten most common web application risk categories, with causes and prevention
- [OWASP Application Security Verification Standard](https://asvs.owasp.org/) · a requirements list in three levels; version 5.0 at the time of checking (2026-11)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) · short, practical guides per topic: authentication, sessions, uploads, injection and more
- [NIST SP 800-63B: authentication and authenticator management](https://pages.nist.gov/800-63-4/sp800-63b.html) · the US guidance behind modern password, MFA and passkey practice
- [CISA: Secure by Design](https://www.cisa.gov/securebydesign) · principles for making the safe choice the default and the maker's responsibility
- [European Commission: Cyber Resilience Act](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act) · which products it covers and when its obligations apply (EU)

## Related

- `areas/parts/sign-in.md` · passwords, MFA, passkeys and sessions
- `areas/parts/roles-permissions.md` · who may do what
- `areas/practices/privacy-consent.md` · what data to hold at all
- `areas/parts/audit-history.md` · security logging
- `areas/parts/integrations-webhooks.md` · API keys, OAuth and webhook risks
- `areas/parts/workspaces-multi-tenancy.md` · keeping customers apart
