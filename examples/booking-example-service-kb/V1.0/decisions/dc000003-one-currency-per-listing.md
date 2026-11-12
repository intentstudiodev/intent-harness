---
standard: IntentFormat/1.2
type: decision
id: DC000003
name: One currency per listing
status: Decided
decided: 2026-11-10
by: owner
---
# One currency per listing · #DC000003
> ⚙ #DC000003SGV1.0 · V1.0 in-progress

## Question
Does a listing have one price currency, or do users see prices converted into their own?

## Why
The shown total must equal the charged total to the cent; one currency is the only way to promise that without owning exchange risk.

## Options
1. Owner's currency only (chosen) — no conversion risk, simple payouts; a user may see a foreign currency.
2. Convert to the user's currency at display time — friendlier, but the charged amount drifts from the shown one and disputes follow.
3. Owner sets prices in several currencies — most work, fewest owners would use it.

## Outcome
Every listing has exactly one currency, set by the Owner and shown to everyone; conversion is left to the user's card.
## Affects
- [#SC000012 Listing editor](../screens/sc000012-listing-editor.md)
- [#SC000004 Checkout](../screens/sc000004-checkout.md)
- [#FT000014 Payouts](../features/ft000014-payouts.md)
