---
kind: library
shelf: part
name: Reviews and ratings
fits when: people rate or review products, sellers, providers, places or content, or the product asks its own users for an app store rating
related: domains/marketplace.md, domains/online-shop.md, areas/patterns/detail-pages.md, areas/practices/trust-dark-patterns.md, areas/parts/admin-back-office.md
checked: 2026-11
---
# Reviews and ratings

Stars, scores and written reviews that help the next person decide and tell the business what to fix. The tension: honest, useful signals versus pressure from every side to inflate, hide or fake them; consumer law in the US, UK and EU now sets firm rules here.

## Questions worth asking

- What is reviewed: an item, a seller, a provider, an experience, both sides of a transaction? Two-sided reviews (host and guest) need rules on who sees what first.
- Who may review: verified buyers only, anyone, invited people? It sets trust and volume.
- Which scale: five stars, thumbs, a score out of ten, attributes such as fit or cleanliness? It changes how averages behave.
- On what grounds is a review removed, and who decides? Suppressing negative reviews is regulated in several markets, so the criteria matter.
- Are reviews rewarded (discounts, points, free products)? Some forms are allowed with disclosure; rewards tied to a positive sentiment are not, in the US under the FTC rule. Ask which markets apply.
- Can the business reply in public? Replies to negative reviews often matter to readers as much as the reviews.
- Is there an app store rating to ask for? Apple and Google have their own rules for in-app prompts.

## Usual shape

### Anatomy
- average rating with the number of ratings · often · the count is part of the trust
- ratings distribution, one bar per star, that filters reviews on click · often · Baymard finds people lean on it more than on review text
- review list with sort (recent, helpful, lowest) and filters · often
- verified purchase or stay badge · often · and, in the EU, a note on whether and how reviews are checked
- review form: rating, text, photos, attributes · often
- a request to review after use, by email or in the product · often · most reviews come from being asked
- helpful votes and "report review" · sometimes
- seller or business reply · sometimes
- AI summaries of many reviews · sometimes · labelled, with a way to read the reviews behind them
- moderation queue with reasons and appeals · sometimes · on the admin side

### Conventions
- "too few ratings" instead of a score at very small counts · often · Baymard suggests hiding the distribution at five ratings or fewer
- ranking by something better than the raw average · often · a Wilson score or Bayesian average stops one 5-star rating beating a hundred 4.8s
- reviews tied to a real transaction where one exists · often
- incentives and relationships disclosed next to the review · often · the FTC rule requires it for insiders such as staff and relatives (US)

## Choices and trade-offs

- **Open or verified reviews.** Open reviews bring volume and fakes; verified-only is more trusted and fills slowly. Many products accept both and badge the verified ones.
- **Publish at once or moderate first.** Publishing at once is fast and lets abuse through; moderating first is safer and slower. Either way, published removal criteria applied evenly hold up better than case-by-case calls.
- **Stars, thumbs or attributes.** Five stars is familiar and clusters near the top; thumbs is simpler; attribute ratings give detail and make the form longer.
- **Reveal two-sided reviews together or one by one.** Revealing both once both are written, or a deadline passes, reduces retaliation; one by one is simpler and invites tit-for-tat.

## Watch out

- Fake, bought or staff-written reviews · banned by the FTC Consumer Reviews and Testimonials Rule (US, in force since October 2024), UK consumer law (CMA guidance, changes since April 2025) and the EU Unfair Commercial Practices Directive as amended in 2019
- Hiding, delaying or burying negative reviews · treated as review suppression in the US and as misleading in the UK and EU; readers notice too
- Asking only happy customers (review gating) · skews the signal; platform rules and consumer law in several markets restrict it
- Sorting by average with few ratings · tiny samples top the list
- No way for businesses to reply or dispute · they leave the platform or escalate
- Asking for a store rating too early or right after an error · low ratings and a wasted prompt; on iOS the system shows it at most three times a year
- AI summaries that drift from what reviewers said · misleading claims and lost trust

## Go deeper

- [FTC: Consumer Reviews and Testimonials Rule, questions and answers](https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers) · what the US rule bans: fake reviews, suppression, sentiment-tied incentives, undisclosed insiders
- [CMA: fake reviews guidance](https://www.gov.uk/government/publications/fake-reviews-cma208) · how UK businesses that publish reviews are expected to comply
- [European Commission: Unfair Commercial Practices Directive](https://commission.europa.eu/law/law-topic/consumer-protection-law/unfair-commercial-practices-law/unfair-commercial-practices-directive_en) · the EU rules and guidance, including the 2019 amendments on consumer reviews
- [Baymard Institute: ratings distribution summary](https://baymard.com/blog/user-ratings-distribution-summary) · tested requirements for the star breakdown and how people use it
- [Evan Miller: how not to sort by average rating](https://www.evanmiller.org/how-not-to-sort-by-average-rating.html) · why raw averages mislead, and the Wilson score alternative
- [Apple HIG: ratings and reviews](https://developer.apple.com/design/human-interface-guidelines/ratings-and-reviews) · when and how to ask for an App Store rating

## Related

- `domains/marketplace.md` · two-sided reviews between buyers and sellers
- `domains/online-shop.md` · product reviews on the way to buying
- `areas/patterns/detail-pages.md` · where ratings and reviews sit on a page
- `areas/practices/trust-dark-patterns.md` · honest signals versus manipulation
- `areas/parts/admin-back-office.md` · moderation and appeals
