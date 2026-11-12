---
standard: IntentFormat/1.2
type: project
id: PR000001
name: BookingExampleService
status: In design
industry: Travel / Hospitality
audience: Marketplace
---
# BookingExampleService · #PR000001
> ⚙ #PR000001SGV1.0 · V1.0 in-progress

## Description
The client-facing side of a marketplace for short stays: guests find and read listings, users book, pay, travel and review, and owners list their places, manage availability and get paid. Web and a mobile app share one core; there is no admin side in this product.

## Why
One marketplace for both sides keeps supply and demand in one place; the admin side is a separate product.

## User stories
- As a Guest, I want to search stays by place, dates and guests, so that I see what is available before I sign up.
- As a Guest, I want to read a listing and its reviews, so that I can judge the place.
- As a User, I want to book and pay for a stay, so that my dates are secured.
- As a User, I want to cancel a booking and see what I get back, so that plans can change without surprises.
- As a User, I want to message the owner about my booking, so that arrival details are clear.
- As an Owner, I want to publish a listing with photos, price and availability, so that guests can book it.
- As an Owner, I want to accept or decline booking requests, so that I keep control of who stays.
- As an Owner, I want to see when and how much I get paid, so that I can plan.

## Keep in mind
**R1 · Checklist**
- [ ] Search results appear within two seconds on a typical mobile connection.
- [ ] Prices always show the full amount the user will pay, including the platform fee.
- [ ] Every screen works on a phone-sized viewport.

## Vocabularies
### States
| State | Code | Note |
|---|---|---|
| Signed out | SO | a Guest browsing without an account |
| Signed in | SI | a User or an Owner |

### Platforms
- Web
- Mobile app

### Opens-as
- Modal — a dialog over the current page
- Bottom sheet — slides up over the current screen on the phone

### Tech categories
- Frontend
- Mobile
- Payments
- Messaging

## Built with
- [#TC000001 Web app framework](tech/tc000001-web-app-framework.md)
- [#TC000002 Mobile app framework](tech/tc000002-mobile-app-framework.md)
- [#TC000003 Payments provider](tech/tc000003-payments-provider.md)
- [#TC000004 Email service](tech/tc000004-email-service.md)

## Links
- [Product brief](../inputs/brief.md) · type: Source

## ⚙ Decisions
- [#DC000004 Web first, app second](decisions/dc000004-web-first-app-second.md) · status: Decided
