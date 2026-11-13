---
kind: skill
name: change-impact
description: Impact first, then the change as a proposal. Also used to unpark an idea and to adopt a reference.
---
# change-impact

1. **Impact.** Find the cards the change touches by following links from the entry point (feature → screens → flows → rules → decisions; APIs → backend nodes for the Product Architecture, `knowledge/product-architecture.md`). List them with what would change in each. Say the size: small fix (one card, no decision touched) or real change.
2. **Why.** If the why of the change is missing: assume it and tag, suggest candidates, or ask, by the ask-or-assume rule.
3. **Small fix** → write straight away through `write-knowledge`, say so in one line.
4. **Real change** → a proposal: added · changed · removed, per card, with the why and the decisions it touches. A change that reverses a decision says so and reopens it.
5. Critique tier S by default (tweakable).
6. To checkpoint: yes, adjust, park (shaped → a card with `status: Parked` holding this proposal; an ideas line gets `→ KB #<core>`), or insist against a push back.
7. On yes: the librarian writes; the format's `check`; then offer: a spec (Build), a design (Design), or nothing.

**Unpark:** load the Parked card (or the raw line in `sandbox/ideas.md`); its proposal is checked against the KB as it is now (step 1 again); on write the card leaves `Parked`, a raw line gets `→ KB`.
