---
kind: library
shelf: design-system
name: Government design systems
fits when: the product is a public service, works for a public body, or is a form-heavy, high-trust service that can learn from public-sector research (GOV.UK Design System, USWDS and similar)
related: domains/public-sector.md, areas/patterns/forms-validation.md, areas/patterns/wizards-steppers.md, areas/practices/accessibility.md, areas/practices/microcopy-content.md
checked: 2026-11
---
# Government design systems

Design systems published by governments for their own digital services, such as the GOV.UK Design System in the UK and the U.S. Web Design System (USWDS) for US federal websites. They are plain on purpose, built for everyone including people with low digital skills, and backed by research shared across many service teams. The tension: their patterns are among the best tested for forms and transactions, while their branding and fonts belong to the government that publishes them.

## Questions worth asking

- Is the product a government service, built for one, or only borrowing the patterns? Who may use the branding depends on it.
- Which jurisdiction? Each country has its own system, service standard and accessibility law.
- Is the service transactional (apply, register, pay, report)? That is where these systems are strongest.
- Will it go through a service assessment or procurement checks? Many governments review services against a published standard.
- Which languages are needed? Some countries require more than one official language.

## Usual shape

### What it gives you
- **GOV.UK Design System** · sometimes · styles, components and patterns for UK government services; code in GOV.UK Frontend (version 6.x at the time of checking), a Prototype Kit for testing ideas, and a public backlog and roadmap
- GOV.UK patterns for common tasks: names, addresses, dates, check answers, question pages, confirmation pages · often · research-backed and widely copied outside government
- the GOV.UK Service Manual and Service Standard · sometimes · how UK teams research, build, assess and run services
- **USWDS** · sometimes · US federal system: 50+ components, patterns, page templates, design tokens and utility classes; version 3.x at the time of checking
- the USWDS maturity model: adopt principles first, then UX guidance, then code · sometimes · lets teams adopt in stages
- other public systems built on the same idea: Canada.ca design specifications, the NL Design System (a shared set of components that each Dutch organisation themes) · sometimes
- open licences: GOV.UK Frontend code under MIT and documentation under the Open Government Licence; USWDS mostly public domain (CC0) at the time of checking · often

### What it leaves to you
- the service itself: which questions, in which order, and why · often
- branding outside the publishing government · often · GOV.UK services on service.gov.uk use the GDS Transport font; others are pointed to an alternative
- product types these systems rarely cover: dashboards, rich editors, consumer apps · sometimes
- legal compliance; the system helps, the service owner remains responsible · often

## Choices and trade-offs

- **Use the full system or borrow patterns.** Government services often take the whole system; private services usually borrow the research-backed patterns and keep their own look.
- **Plain or branded.** Plain styling serves people with low digital skills and slow devices; a branded service can feel more engaging and risks less clarity.
- **One question per page or long forms.** GOV.UK popularised one question per page for complex or unfamiliar tasks; short, familiar forms can sit on one page.
- **Adopt in stages or all at once.** The USWDS maturity model treats principles and guidance as real adoption before any code changes.

## Watch out

- Copying GOV.UK branding for a non-government service · it misleads people about who runs the service and breaks the brand's terms
- Taking components without the research notes · each pattern page explains when not to use it
- Treating the system as accessibility compliance · laws such as the UK Public Sector Bodies Accessibility Regulations, US Section 508 and the EU Web Accessibility Directive apply to the whole service; ask a specialist what applies
- Forking the code and not updating it · these systems publish fixes and brand updates (GOV.UK refreshed its brand from 2025)

## Go deeper

- [GOV.UK Design System](https://design-system.service.gov.uk/) · styles, components and patterns with the research behind them
- [GOV.UK Service Manual](https://www.gov.uk/service-manual) · the Service Standard and how UK teams build services
- [U.S. Web Design System](https://designsystem.digital.gov/) · components, patterns, templates and tokens for US federal sites
- [USWDS maturity model](https://designsystem.digital.gov/maturity-model/) · adopting a design system in stages
- [NL Design System](https://nldesignsystem.nl/) · a shared, themeable system across many public organisations (in Dutch)
- [Canada.ca design](https://design.canada.ca/) · specifications, templates and patterns for Canada.ca

## Related

- `domains/public-sector.md` · the services these systems are built for
- `areas/patterns/forms-validation.md` · the area where they are strongest
- `areas/patterns/wizards-steppers.md` · one question per page and check-your-answers flows
- `areas/practices/accessibility.md` · the laws and standards behind them
- `areas/practices/microcopy-content.md` · plain language guidance
