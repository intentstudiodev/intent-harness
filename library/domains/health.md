---
kind: library
shelf: domain
group: sector
name: Health
fits when: the product touches people's health: care providers, patients, symptoms, medication, fitness or wellbeing data, clinics, insurers or health research
related: domains/booking.md, domains/messaging.md, domains/connected-devices.md, areas/practices/privacy-consent.md, areas/practices/security-basics.md, areas/parts/audit-history.md, areas/practices/accessibility.md
checked: 2026-11
---
# Health

Products for patients, clinicians, carers and the organisations around them: clinic software, telehealth, symptom and medication apps, fitness and wellbeing trackers, patient portals, tools for insurers or researchers. The tension at its heart: **health data is among the most sensitive data there is**, and the people who need it most are often tired, worried, unwell or short of time. A product has to be careful and still be quick to use.

## Questions worth asking

- Does the product make, support or influence a clinical decision (diagnose, treat, dose, triage)? It may then be regulated as a medical device: the FDA in the US, the Medical Device Regulation in the EU, the MHRA in the UK.
- Who is the customer: a provider or health plan, an employer, or the patient? In the US it decides whether HIPAA applies (covered entities and their business associates) or the FTC's consumer health app rules.
- Which data is collected, and could it reveal a condition by itself (a period tracker, a pharmacy order, a location near a clinic)? Under EU and UK GDPR, health data is special category data and needs an extra legal condition.
- Where do the patients and the servers live? Jurisdiction decides the rules; ask about hosting region and transfers early.
- Does it exchange data with health records or other systems? Standards such as HL7 FHIR and national schemes shape the data model.
- Who acts for whom: carers, parents of minors, a clinician seeing a colleague's patient? Delegated access is hard to add later.
- What happens in an emergency? A wellbeing app that gets a crisis message needs a planned answer.

## Usual shape

### Roles
- patient or member · often · sees their own records, books, messages, pays
- clinician · often · doctor, nurse, therapist; works under time pressure, needs the full picture fast
- front desk and practice staff · often · schedules, checks in, handles insurance and payment
- carer or proxy · sometimes · a parent, adult child or guardian acting with limited rights
- administrator or compliance officer · sometimes · access reviews, audit, breach response
- payer or insurer · sometimes · claims, eligibility, prior approval

### Journeys
- find care and book · often · mechanics in `domains/booking.md`
- intake: history, consent, insurance · often · long forms, best split into steps
- visit, in person or remote, then results and follow-up · often · notes, orders, prescriptions, lab results, care plans, reminders
- secure messaging with the care team · often · response times and triage rules
- tracking over time · sometimes · symptoms, vitals, mood, activity, often from devices
- sharing records with another provider or a family member · sometimes

### Screens
- patient summary: conditions, medication, allergies, recent events · often
- appointments and visit history · often
- results with plain-language explanation, reference ranges and, for repeated measurements, charts over time · often
- consent and sharing settings · often
- clinician work queue or schedule · often

### Rules
- access on a need-to-know basis, with every view of a record logged · often · HIPAA Security Rule (US) and GDPR accountability (EU, UK) both expect it
- explicit consent or another documented legal basis for health data · often · GDPR Article 9 (EU, UK)
- breach notification within set deadlines · often · HIPAA Breach Notification Rule and FTC Health Breach Notification Rule (US); 72 hours to the authority under GDPR (EU, UK)
- records kept for set periods · often · retention periods vary by country and record type; ask locally
- clinical content reviewed by qualified people · sometimes · duty of care, and required for regulated devices
- extra protection for some categories · sometimes · mental health, reproductive health, substance use, genetic data; several US states and EU countries add their own rules

## Choices and trade-offs

- **Wellness or medical.** Staying on the wellness side (general fitness, habits) keeps device regulation away, but limits what the product can claim. Crossing into diagnosis or treatment brings clinical evidence, quality systems and regulatory review, and with them credibility with clinicians and payers.
- **Sell to providers or to patients.** B2B through clinics and insurers means long sales, integrations and contracts such as business associate agreements; direct to consumer means faster growth and the full weight of privacy trust on the product alone.
- **Own records or integrate.** Keeping data inside the product is simpler; integrating with health records avoids double entry, but every standard and vendor has its own limits and approval steps.
- **Asynchronous or live care.** Messages and forms scale and suit routine needs; video and phone suit judgement and reassurance, and cost clinician time.

## Watch out

- Analytics, advertising or session-replay tools on screens with health data · regulators in the US and EU have acted against tracking pixels that leaked health information
- Lab results shown without context or before a clinician has seen them · alarm and misunderstanding; some jurisdictions set rules on release timing
- Long, dense intake forms on a phone · patients give up or guess
- Shared devices and family accounts with one login · a teenager's or partner's private care becomes visible
- Notifications that reveal a condition on a lock screen · "Your HIV test result is ready" is a disclosure
- Interfaces that make wrong choices easy (similar drug names, unclear units) · usability errors in clinical software can harm patients

## Go deeper

- [FTC: Mobile Health App Interactive Tool](https://www.ftc.gov/business-guidance/resources/mobile-health-apps-interactive-tool) · a short question flow showing which US laws (HIPAA, FTC Act, FDA rules, COPPA) may apply to a health app
- [ONC (HealthIT.gov): Privacy and Security](https://www.healthit.gov/topic/privacy-security-and-hipaa) · plain guides to HIPAA privacy and security for health IT in the US
- [FDA: Device Software Functions Including Mobile Medical Applications](https://www.fda.gov/medical-devices/digital-health-center-excellence/device-software-functions-including-mobile-medical-applications) · which software the FDA treats as a device and which it leaves alone
- [ICO: Special category data](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/a-guide-to-lawful-basis/special-category-data/) · how UK GDPR treats health data and the extra conditions it needs; close to the EU rules
- [European Commission: European Health Data Space](https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space-regulation-ehds_en) · the EU regulation on patient access to and exchange of health records, in force since 2025 and applying in phases from 2029
- [HL7 FHIR](https://hl7.org/fhir/) · the common standard for exchanging health records; useful for the data model even before integrating

## Related

- `domains/booking.md` · appointments, reminders, cancellations and no-shows
- `domains/messaging.md` · secure patient and care-team messaging
- `domains/connected-devices.md` · wearables, monitors and home devices feeding measurements
- `areas/practices/privacy-consent.md` · consent flows and data minimisation
- `areas/practices/security-basics.md` · encryption, access control, breach readiness
- `areas/parts/audit-history.md` · who viewed or changed a record
- `areas/practices/accessibility.md` · patients with low vision, tremor, low health literacy
