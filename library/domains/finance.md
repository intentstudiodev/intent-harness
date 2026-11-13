---
kind: library
shelf: domain
group: sector
name: Finance
fits when: the product holds, moves, lends, invests or reports money for people or businesses (banking, payments, wallets, lending, investing, insurance, accounting, personal finance)
related: areas/parts/payments-checkout.md, areas/parts/sign-in.md, areas/parts/audit-history.md, areas/practices/security-basics.md, areas/practices/trust-dark-patterns.md, areas/parts/integrations-webhooks.md, domains/marketplace.md
checked: 2026-11
---
# Finance

Products where money itself is the subject: accounts and cards, payments and transfers, wallets, loans, investing, insurance, bookkeeping, budgeting. The tension at its heart: **people want money to move instantly and simply, while law and fraud demand that it moves only for the right person, for the right reason, with a record**. Much of the work is deciding which of those rules the product carries itself and which it leaves to a licensed partner.

## Questions worth asking

- Does the product hold or move customer money, or only show and advise? Holding funds or executing payments usually needs a licence (payment institution, e-money, bank, broker) or a licensed partner.
- In which countries, and for consumers or businesses? Consumer protection, licensing and disclosure rules differ sharply between the EU, UK, US and elsewhere.
- Who verifies identity, and how deep (KYC)? Anti-money-laundering rules (EU AML package, UK Money Laundering Regulations, US Bank Secrecy Act) set what has to be checked and kept.
- Who carries the loss when fraud happens: the customer, the product, the partner bank? It shapes limits, holds and the dispute flow.
- Are card numbers ever on your systems? If yes, PCI DSS applies to those systems; tokenising through a processor narrows it.
- Does the product advise or recommend? Advice on investments, credit or insurance is often regulated separately from simply showing data.
- How are fees and interest shown, and when? Many jurisdictions prescribe the wording and timing of cost disclosures.

## Usual shape

### Roles
- account holder · often · individual or business, sometimes with several users per business account
- secondary user · sometimes · a joint holder, an employee with a card, an accountant with read access
- support and operations · often · disputes, frozen accounts, identity reviews
- compliance and risk analyst · often · reviews alerts, decides on suspicious activity
- partner bank, processor or broker · often · the licensed party behind the interface

### Journeys
- onboarding with identity checks · often · document and selfie checks, sanctions screening; the biggest drop-off point
- add money, pay, transfer · often · with confirmation and a clear status
- see balance and history, search transactions · often
- strong sign-in and approval of sensitive actions · often · new payee, large amount, changed phone
- dispute or report fraud · often · card chargebacks, reimbursement claims
- statements, tax documents and exports · often
- apply for credit and get a decision · sometimes · with reasons when declined

### Screens
- balance and recent activity · often · the home screen of most finance apps
- transaction detail with merchant, status and category · often
- payment or transfer flow with a review step · often
- cards and limits: freeze, PIN, spending controls · sometimes
- statements and documents · often
- portfolio or loan overview · sometimes

### Rules
- strong customer authentication for online payments and account access · often · PSD2 (EU) and its UK version: two of knowledge, possession, inherence, with set exemptions
- identity verification and ongoing monitoring · often · KYC and AML rules; records kept for years after the relationship ends
- sanctions screening of customers and payees · often · EU, UK, US and UN lists
- every balance change as an immutable ledger entry · often · corrections added as new entries rather than edits
- clear fees, rates and total cost before commitment · often · consumer credit and payment rules in most jurisdictions
- fair treatment and outcomes for retail customers · sometimes · the FCA Consumer Duty (UK) makes this an explicit duty

## Choices and trade-offs

- **Licensed partner or own licence.** Banking-as-a-service and payment platforms get a product live fast, at a share of revenue and with the partner's rules on onboarding and risk; an own licence brings control and years of compliance work.
- **Friction or speed at onboarding.** Lighter checks with low limits convert better; full checks up front cost sign-ups and save later freezes. Many products use tiers that unlock as checks complete.
- **Real-time or batch.** Instant payments and live balances set expectations; batch settlement is cheaper and slower. Showing "pending" honestly matters more than speed.
- **Aggregate or originate.** Reading accounts through open banking (PSD2 in the EU, the open banking regime in the UK; US data-access rules still being settled at the time of checking (2026-11)) avoids holding money; originating products earns more and carries more duty.

## Watch out

- Floating-point numbers for money · rounding errors that add up; store minor units or decimals with currency
- Balances computed from a mutable field · reconciliation fails and audits cannot explain the past
- Security prompts at every step · people learn to approve without reading, and fraud uses that habit
- Fees or exchange rates shown only after confirming · complaints, chargebacks and regulatory attention
- Frozen accounts with no explanation or path forward · people lose access to their own money and trust
- Designs that nudge toward credit or risky trading · the FCA Consumer Duty treats such nudges as a poor customer outcome, and US regulators have acted on dark patterns

## Go deeper

- [European Banking Authority: Payment services and electronic money](https://www.eba.europa.eu/regulation-and-policy/payment-services-and-electronic-money) · EU rules and technical standards on PSD2, strong customer authentication and open banking access; PSD3 and a Payment Services Regulation were agreed but not yet in force at the time of checking (2026-11)
- [FCA: Consumer Duty](https://www.fca.org.uk/firms/consumer-duty) · the UK duty to deliver good outcomes for retail customers, with guidance on communications and fair value
- [CFPB: Interactive Bureau Regulations](https://www.consumerfinance.gov/rules-policy/regulations/) · US consumer finance rules in one place: electronic transfers (Regulation E), lending disclosures (Regulation Z), data access
- [European Commission: Anti-money laundering at EU level](https://finance.ec.europa.eu/financial-crime/anti-money-laundering-and-countering-financing-terrorism-eu-level_en) · the EU AML package, the new AML Regulation applying from 2027 and the AMLA supervisor
- [PCI Security Standards Council: Standards](https://www.pcisecuritystandards.org/standards/) · PCI DSS and related standards for handling card data

## Related

- `areas/parts/payments-checkout.md` · taking a payment inside a product that is not a finance product
- `areas/parts/sign-in.md` · strong authentication and device binding
- `areas/parts/audit-history.md` · immutable records of who did what
- `areas/practices/security-basics.md` · fraud, account takeover, secrets
- `areas/practices/trust-dark-patterns.md` · honest pricing and consent
- `areas/parts/integrations-webhooks.md` · banks, processors and open-banking providers
- `domains/marketplace.md` · paying out to many sellers
