---
kind: library
shelf: domain
group: model
name: Online shop
fits when: one business sells its own goods online and ships or hands them over (a brand store, a retailer, a maker, a direct-to-consumer product)
related: domains/marketplace.md, domains/saas-subscription.md, areas/parts/payments-checkout.md, areas/patterns/search-filters.md, areas/patterns/detail-pages.md, areas/parts/reviews-ratings.md
checked: 2026-11
---
# Online shop

A product where a single seller shows a catalogue, takes orders and gets physical (or sometimes digital) goods to the buyer. The heart of it is **a promise about a thing the buyer cannot touch**: the product page has to answer what a hand and an eye would in a shop, and the order has to arrive as described, on time, with an easy way back if it does not.

## Questions worth asking

- How big and how varied is the catalogue: ten products or ten thousand, with sizes and colours or without? It decides search, filters and the data model.
- Where does stock live, and who else sells from it (a physical shop, wholesale, another channel)? Overselling starts when two systems count the same items.
- Who ships, and how: own warehouse, a fulfilment partner, made to order, or drop-shipping? Delivery promises depend on it.
- What is the returns policy, and who pays for the return? Buyers check it before buying.
- Which countries are sold to? Taxes, prices, currencies, delivery and consumer law change at each border.
- Guest checkout or accounts? Accounts help repeat buying; forcing them loses first orders.
- Are there repeat purchases (refills, consumables)? A subscription option may belong in the shop.

## Usual shape

### Roles
- shopper, often a guest · often · browses, buys, tracks, returns
- returning customer with an account · often · order history, saved addresses, reorder
- shop staff who manage products and orders · often · catalogue, stock, fulfilment, refunds
- customer service · sometimes · order changes, complaints, returns on someone's behalf
- warehouse or fulfilment partner · sometimes · picks, packs and ships, often through an integration

### Journeys
- land, browse or search, open a product · often · many arrive on a product page from search or an ad
- choose a variant and add to cart · often
- checkout: contact, address, delivery option, payment, review · often · where most buyers are lost
- order confirmation and tracking · often · the email and page people return to
- return or exchange · often · start online, label, refund
- back-in-stock or price alerts · sometimes
- reorder or subscribe · sometimes · consumables

### Screens
- home and category pages · often
- search results with filters · often
- product page: images, price, variants, availability, delivery estimate, reviews · often
- cart and checkout steps · often
- order status and history · often
- staff: products, stock, orders, refunds · often

### Rules
- stock reserved at order, sometimes briefly at add-to-cart · often · avoids selling the last item twice
- total price with taxes and delivery shown before payment · often · and a legal duty in many places
- withdrawal period for distance sales · often · in the EU, buyers generally get 14 days to change their mind under the Consumer Rights Directive
- shipping time stated or a default applied · often · in the US, the FTC mail-order rule expects a reasonable basis for the promised time, or 30 days if none is stated
- discounts and codes with clear limits · often · stacking rules are a frequent source of support tickets

## Choices and trade-offs

- **Hosted platform or own build.** A hosted shop platform gives checkout, tax and payments quickly and limits how different the experience can be; an own build fits unusual products or flows and carries every piece of commerce plumbing.
- **Single-page or multi-step checkout.** One page shows everything and can feel long; steps feel lighter and add clicks. Research suggests the number of fields matters more than the number of steps.
- **Guest checkout or account first.** Guest checkout converts first orders; offering an account after the order keeps the benefit without the barrier.
- **Free delivery threshold or flat fee.** A threshold raises basket size and can feel like a penalty under it; flat or included delivery is simpler to explain.
- **Show stock levels or not.** "Only 2 left" helps planning and invites false urgency if it is not true.

## Watch out

- Surprise costs at the last step · the most cited reason for abandoning a cart in usability research
- Product images and descriptions that skip size, material or what is in the box · returns rise and reviews say so
- Forcing account creation before buying · first-time buyers leave
- Stock counted in two places without sync · oversold orders, apologies and refunds
- Returns made hard on purpose · it shows in reviews and, in some places, conflicts with consumer law
- Fake scarcity or countdowns · erodes trust and is a target of consumer regulators (see trust and dark patterns)

## Go deeper

- [Baymard Institute: cart and checkout usability](https://baymard.com/research/checkout-usability) · large-scale checkout testing, abandonment reasons and benchmarks
- [Baymard Institute: product page usability](https://baymard.com/research/product-page) · what product pages need: images, buy section, reviews, cross-sells
- [Nielsen Norman Group: ecommerce product pages](https://www.nngroup.com/articles/ecommerce-product-pages/) · answering shoppers' questions when they cannot touch the product
- [European Commission: Consumer Rights Directive](https://commission.europa.eu/law/law-topic/consumer-protection-law/consumer-contract-law/consumer-rights-directive_en) · EU pre-purchase information and the right to withdraw from distance sales
- [FTC: Mail, Internet, or Telephone Order Merchandise Rule](https://www.ftc.gov/legal-library/browse/rules/mail-internet-or-telephone-order-merchandise-rule) · US rules on shipping promises, delays and refunds
- [Google Search Central: product structured data](https://developers.google.com/search/docs/appearance/structured-data/product) · how product, price, shipping and returns data appear in search

## Related

- `domains/marketplace.md` · when many sellers share one storefront
- `domains/saas-subscription.md` · when what is sold is software access, not goods
- `areas/parts/payments-checkout.md` · the checkout itself
- `areas/patterns/search-filters.md` · finding products in a catalogue
- `areas/patterns/detail-pages.md` · the product page as a detail page
- `areas/parts/reviews-ratings.md` · reviews on products
