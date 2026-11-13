---
kind: library
shelf: domain
group: sector
name: HR and recruiting
fits when: the product helps organisations hire, onboard, pay, schedule, review or support their people (job boards, applicant tracking, HR systems, payroll, time and attendance, performance, employee portals)
related: domains/internal-tools.md, domains/marketplace.md, domains/ai-assistant.md, areas/parts/roles-permissions.md, areas/practices/privacy-consent.md, areas/parts/audit-history.md, areas/patterns/forms-validation.md
checked: 2026-11
---
# HR and recruiting

Products for the working relationship, from the first job ad to the last payslip: job boards, applicant tracking, HR records, payroll, time and attendance, performance reviews, employee self-service. The tension at its heart: **the employer buys the product, but the people it decides about are candidates and employees** with far less power and a lot at stake. Speed and automation help the employer; fairness, privacy and an explanation protect the person.

## Questions worth asking

- Which part of the cycle: attract, select, onboard, pay, manage, leave? Hiring tools and HR records carry different rules and users.
- In which countries do the employers and workers sit? Employment, payroll and data law are national, and often regional in the US.
- Does any automated step rank, filter or score people? In the EU, AI used for recruitment or decisions about workers is high-risk under the AI Act; New York City requires bias audits of automated hiring tools.
- Which personal data is involved: health, disability, ethnicity, union membership, criminal records? Much of it is special category data under EU and UK GDPR, or protected under US anti-discrimination law.
- Are background checks run, or pay ranges shown? US law (FCRA) sets consent and notice steps for checks; EU pay transparency rules and several US states and cities require ranges in ads or on request.
- Who inside the employer may see what: manager, HR, payroll, the employee? Role design is most of the trust.

## Usual shape

### Roles
- candidate · often · searches, applies, hears back (or not)
- recruiter or hiring manager · often · screens, interviews, decides
- employee · often · sees own data, requests leave, gets paid, is reviewed
- line manager · often · approves, reviews, plans the team
- HR and payroll staff · often · keeps records, runs pay, handles cases
- works council, union or employee representative · sometimes · consulted before monitoring or new tools in many EU countries

### Journeys
- post a job and attract applicants · often · job boards and search engines read structured job data
- apply · often · short forms convert; long ones lose good candidates
- screen, interview, decide, tell the candidate · often · the step candidates most often complain about
- offer, contract and onboarding · often · digital signature, right-to-work checks, equipment, accounts, first-week tasks
- time, leave, absence and pay · often · a payslip error lands on one person's rent
- performance reviews and goals · sometimes
- leaving: offboarding, final pay, references · often

### Screens
- job listing and application form · often
- candidate pipeline by stage · often
- candidate profile with CV, notes and feedback · often
- employee self-service: profile, leave requests and calendar, payslips and tax documents · often
- people analytics · sometimes · aggregate, with small groups hidden

### Rules
- no discrimination in ads, screening or decisions · often · equality law in the EU and UK; US federal law enforced by the EEOC, plus state law
- oversight, logging and bias audits for AI in hiring · sometimes · EU AI Act Annex III, with high-risk obligations from 2 December 2027 at the time of checking (2026-11); New York City Local Law 144 adds audits and candidate notice
- pay range for applicants and no pay-history questions · sometimes · EU Pay Transparency Directive (national laws due from June 2026); several US states
- consent and notice before background checks · sometimes · FCRA (US); criminal record checks are limited in the UK and EU
- right of access to one's own records · often · GDPR subject access (EU, UK); candidates and employees use it in disputes
- retention limits for candidate data · often · keep unsuccessful applications for a set, stated time

## Choices and trade-offs

- **Automate screening or keep humans in the loop.** Automation handles volume and copies the bias in past decisions; human review is slower and inconsistent. Many teams automate scheduling and logistics and keep judgement with people, with logged reasons.
- **All-in-one suite or best of breed.** A suite gives one employee record; specialist tools are better at their job and need integrations, usually through the HR system as the source of truth.
- **Employer-only or candidate-facing.** Products that give candidates status updates and feedback earn reputation for the employer, at the cost of more communication to manage.
- **Monitoring or trust.** Productivity tracking appeals to some buyers and meets data protection limits, consultation duties and low employee trust; many products offer it narrowly or not at all.

## Watch out

- Free-text notes about candidates · they become evidence in discrimination claims and subject access requests
- A model trained on past hires · it learns who was hired, not who would do well
- Silence after applying · candidates read it as rejection and talk about it
- Managers seeing data meant for HR only (health, grievances, salaries) · one wrong permission is a serious breach
- Payroll edge cases treated as rare (part-time, mid-month joiners, back pay) · each one is a person paid wrongly
- Analytics on small teams · averages over three people identify them

## Go deeper

- [European Commission: AI Act](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) · the risk tiers, why recruitment and worker management are high-risk, and the current timeline
- [NYC DCWP: Automated Employment Decision Tools](https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page) · the bias audit and notice rules for hiring tools used in New York City
- [ICO: Employment information](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/employment/) · UK guidance on workers' health data, monitoring, records and recruitment
- [European Commission: EU action for equal pay](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/gender-equality/equal-pay/eu-action-equal-pay_en) · the Pay Transparency Directive and what it asks of employers
- [FTC: Using consumer reports, what employers need to know](https://www.ftc.gov/business-guidance/resources/using-consumer-reports-what-employers-need-know) · the US steps for background checks
- [EEOC: Employers](https://www.eeoc.gov/employers) · US federal anti-discrimination duties in hiring and employment

## Related

- `domains/internal-tools.md` · HR tools built in-house for one organisation
- `domains/marketplace.md` · job boards and freelance platforms matching two sides
- `domains/ai-assistant.md` · assistants that draft ads, summarise CVs or answer HR questions
- `areas/parts/roles-permissions.md` · who sees salaries, health and case notes
- `areas/practices/privacy-consent.md` · candidate notices, retention and access requests
- `areas/parts/audit-history.md` · a record of decisions and who made them
- `areas/patterns/forms-validation.md` · application and onboarding forms
