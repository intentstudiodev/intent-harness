---
kind: library
shelf: domain
group: sector
name: Public sector
fits when: the product is run by or for a government, public body or publicly funded service (citizen services, permits, benefits, tax, local councils, courts, public health, schools and libraries), or sold to one
related: areas/design-systems/government-design-systems.md, areas/practices/accessibility.md, areas/practices/microcopy-content.md, areas/patterns/forms-validation.md, areas/patterns/wizards-steppers.md, areas/parts/sign-in.md, areas/practices/localization.md
checked: 2026-11
---
# Public sector

Services people use because they have to, not because they chose to: applying for a benefit or permit, paying tax, registering a birth, booking a test, reporting a problem to the council. The tension at its heart: **everyone has to be able to use it, including people with no device, little time, low literacy or a disability**, while the rules behind the service are set by law and policy that the design team cannot change, only explain.

## Questions worth asking

- What is the user trying to get done, in their words, and what does the law require along the way? The service is the whole journey, not the form.
- Which accessibility standard applies? Public bodies are bound by law: the EU Web Accessibility Directive, the UK Public Sector Bodies Accessibility Regulations, Section 508 and the ADA Title II rule in the US.
- Is there a mandated service standard or design system? Many governments assess services against one (GOV.UK Service Standard, US Web Design System, national equivalents).
- How do people prove who they are? National identity schemes, wallets and assurance levels decide what is possible: NIST SP 800-63 (US), eIDAS and the EU Digital Identity Wallet (EU), GOV.UK One Login (UK).
- What is the offline route? People without access, confidence or a fixed address still need the service, often by phone, post or in person.
- Which languages are required? Official and minority languages are often a legal duty.
- What does procurement allow: open source, hosting location, data sovereignty, security certification? It shapes the stack before design starts.

## Usual shape

### Roles
- citizen or resident · often · applies, pays, reports, checks status; may be in distress
- intermediary · often · a family member, support worker, accountant or lawyer acting for someone
- caseworker or officer · often · reviews, decides, asks for more information
- policy owner · often · sets the rules the service implements
- contact centre and front-line staff · often · help people who cannot or will not go online
- auditor or ombudsman · sometimes · reviews decisions and complaints

### Journeys
- find out if it applies to me · often · eligibility before effort
- apply or register, proving identity and uploading evidence · often · long forms, split into one question per page in many services
- pay a fee or receive a payment · sometimes
- track status and respond to requests · often · uncertainty drives repeat calls
- get a decision with reasons, and appeal · often · a legal right in many services
- renew or report a change · often · recurring duties people forget

### Screens
- start page explaining who it is for, what you need and how long it takes · often
- question pages with clear errors, then check your answers before submitting · often
- confirmation with a reference number and what happens next · often
- account or status page · sometimes
- caseworker queue and case view · often

### Rules
- accessible to WCAG AA (2.1, or 2.2 where adopted), with a published accessibility statement · often · EU Web Accessibility Directive via EN 301 549; UK regulations; US ADA Title II rule (from April 2027 for larger governments and April 2028 for smaller ones, at the time of checking (2026-11)) and Section 508 for federal agencies
- decisions explained and open to challenge · often · administrative law in most countries; GDPR Article 22 limits solely automated decisions (EU, UK)
- records kept and released on request · often · freedom-of-information and archive laws
- equal treatment and reasonable adjustments · often · equality and disability law; the UK public sector equality duty
- identity assurance matched to risk · often · NIST SP 800-63-4 (US), eIDAS levels (EU)
- open standards and reuse · sometimes · many governments prefer or require open source and shared components

## Choices and trade-offs

- **Build or buy.** In-house teams iterate on user needs and keep knowledge; commercial products arrive faster and can lock data and process into a vendor's model. Many services combine a bought case system with a built front end.
- **Digital by default or digital only.** Digital by default with assisted routes keeps everyone in; digital only saves money and excludes people the service exists for.
- **One account or no account.** A single government account links services and adds an identity step to everything; account-free, one-off transactions are faster for occasional tasks.
- **Shared design system or own look.** Using the national design system brings tested patterns and trust; a separate brand suits arm's-length bodies and costs research and accessibility work.

## Watch out

- Organising the service around departments · users do not know or care which body owns which step
- Legal or policy language copied onto the page · people misunderstand duties and call for help
- Session timeouts that lose a long form · people with disabilities and caring duties need more time; WCAG 2.2.1 expects warning and extension
- PDF-only forms and guidance · hard to use on phones and with assistive technology
- Assuming everyone has an email, a phone, a fixed address or a recent document · the people with none are often the ones who need the service most
- Automated eligibility without a human route · errors scale, and people affected may have no way to correct them

## Go deeper

- [GOV.UK Service Manual: Service Standard](https://www.gov.uk/service-manual/service-standard) · the 14 points UK public services are assessed against, widely copied elsewhere
- [European Commission: Web accessibility](https://digital-strategy.ec.europa.eu/en/policies/web-accessibility) · the EU Web Accessibility Directive and accessibility statements for public sites and apps
- [ADA.gov: Title II web and mobile app accessibility rule](https://www.ada.gov/resources/2024-03-08-web-rule/) · the US rule for state and local governments, its WCAG 2.1 AA standard and compliance dates
- [Section508.gov](https://www.section508.gov/) · US federal accessibility requirements, testing and procurement
- [NIST SP 800-63-4: Digital Identity Guidelines](https://pages.nist.gov/800-63-4/) · identity proofing and authentication assurance levels, final since 2025
- [European Commission: EU Digital Identity Wallet](https://ec.europa.eu/digital-building-blocks/sites/display/EUDIGITALIDENTITYWALLET/EU+Digital+Identity+Wallet+Home) · the wallet every EU member state is to offer, and what services can ask from it

## Related

- `areas/design-systems/government-design-systems.md` · GOV.UK, USWDS and national design systems
- `areas/practices/accessibility.md` · meeting WCAG in practice
- `areas/practices/microcopy-content.md` · plain language for complex rules
- `areas/patterns/forms-validation.md` · question pages and error messages
- `areas/patterns/wizards-steppers.md` · long applications in steps
- `areas/parts/sign-in.md` · government identity and account sign-in
- `areas/practices/localization.md` · official and minority languages
