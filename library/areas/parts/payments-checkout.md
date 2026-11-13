---
kind: library
shelf: part
name: Payments and checkout
fits when: people pay for something in the product as a one-off purchase, deposit or top-up (recurring plans are in subscriptions and billing)
related: areas/parts/subscriptions-billing.md, areas/patterns/forms-validation.md, areas/patterns/pricing-paywalls.md, areas/practices/trust-dark-patterns.md, domains/online-shop.md
checked: 2026-11
---
# Payments and checkout

The moment money moves: a basket or a single price becomes a payment, a receipt and an order. Most products hand card data to a payment provider and keep only a reference. The tension: every extra field and check costs conversions, while each removed one can cost fraud, chargebacks or a broken rule.

## Questions worth asking

- What is paid for: physical goods, digital goods inside an app, services, a deposit, money passed on to someone else? Each has different rules and providers.
- Is it sold inside an iOS or Android app? Digital goods there usually go through the store's own purchase system (Apple 3.1.1); physical goods and services do not.
- Where are the buyers and the business? In the EEA and UK, strong customer authentication applies to most online card payments.
- Is the amount known at the moment of paying, or only later (a hotel stay, a delivery, a tip)? It decides between charging now and placing a hold.
- Who gets the money: the product, or sellers on a marketplace? Passing money on brings in onboarding and identity checks for the sellers.
- What is the refund and cancellation policy, and who decides on each request? It shapes disputes and support load.

## Usual shape

### Anatomy
- order summary with items, price, taxes, fees and total before paying · often
- guest checkout beside sign-in · often · Baymard: forced accounts are a common reason to leave
- payment method choice: cards, wallets (Apple Pay, Google Pay), local methods, pay later · often · local methods matter outside the US
- card fields hosted by the provider (iframe, hosted page or native sheet) · often · keeps card data off your servers
- an extra authentication step (3-D Secure) that may or may not appear · often · in the EEA and UK
- confirmation page and receipt by email · often
- saved payment methods for next time · sometimes · needs the customer's agreement
- hold now, capture later · sometimes · hotels, rentals, variable totals
- refunds, full and partial, with reason · often · usually from an admin screen

### Conventions
- strong customer authentication for customer-initiated electronic payments · often · PSD2 (EU/EEA, and UK rules): two of knowledge, possession, inherence; exemptions such as low value, low risk and merchant-initiated charges are requested, and the card issuer decides
- card data collected in a way that keeps PCI DSS scope small · often · PCI DSS (card networks' standard, v4.0.1 at the time of checking (2026-11)): how card data is collected decides how much of the system is in scope and which self-assessment applies; hosted fields shrink scope, not to zero
- a card hold of about 7 days for online payments, shorter in person · often · depends on the network; uncaptured holds expire and release the money
- refunds go back to the original payment method · often · and take days to appear, which is worth saying
- prices shown with the taxes and fees people will actually pay · often · required in many places, including EU consumer law

## Choices and trade-offs

- **Hosted checkout, embedded fields, or your own form.** A hosted page is quickest and keeps scope smallest; embedded fields keep the look and stay mostly out of scope; collecting card data yourself brings the full weight of PCI DSS and is rarely worth it.
- **Charge now or authorise and capture.** Charging now is simple; a hold suits unknown totals and stock checks, and needs capture before it expires and clear wording, since many statements show holds as charges.
- **One provider or several.** One is simpler; several add local methods, fallback and negotiating power, and double the reconciliation work.
- **Store payment or redirect to the web.** Inside apps, store purchase is the default for digital goods; outside links are allowed in some storefronts (the US among them at the time of checking (2026-11)) and change often; see `areas/patterns/pricing-paywalls.md`.

## Watch out

- Fees or taxes first shown on the last step · abandoned baskets and complaints; in some places it is unlawful
- Treating a declined or unfinished authentication as an error to retry blindly · double charges and blocked cards; show the reason and a way on
- Order created only after the browser returns · a closed tab loses the order; providers' webhooks are the reliable signal
- No idempotency on "Pay" · a double tap charges twice
- Refunds possible only through the provider's dashboard · support cannot help, and nothing in the product records why
- An off-session charge with no saved agreement · the issuer may ask for authentication when the customer is not there

## Go deeper

- [European Commission: payment services](https://finance.ec.europa.eu/consumer-finance-and-payments/payment-services/payment-services_en) · PSD2, SCA dates, and the PSD3 and Payment Services Regulation revision (political agreement November 2025; check what applies when)
- [Stripe: guide to strong customer authentication](https://stripe.com/guides/strong-customer-authentication) · plain explanation of SCA scope, 3-D Secure and each exemption
- [PCI SSC document library](https://www.pcisecuritystandards.org/document_library/) · PCI DSS itself and the self-assessment questionnaires
- [Baymard Institute: checkout usability](https://baymard.com/research/checkout-usability) · large-scale testing of checkout flows, guest checkout and form design
- [Stripe: place a hold on a payment method](https://docs.stripe.com/payments/place-a-hold-on-a-payment-method) · authorisation windows by card network, partial capture, expiry

## Related

- `areas/parts/subscriptions-billing.md` · recurring charges, invoices and dunning
- `areas/patterns/forms-validation.md` · address and card field behaviour
- `areas/patterns/pricing-paywalls.md` · how prices are shown before checkout
- `areas/practices/trust-dark-patterns.md` · hidden fees and pre-ticked extras
- `domains/online-shop.md` · baskets, shipping and returns around the payment
