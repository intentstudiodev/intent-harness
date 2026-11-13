---
kind: library
shelf: practice
name: Microcopy and content
fits when: any product with words on screen: buttons, labels, errors, empty states, notifications, emails, help text
related: areas/practices/accessibility.md, areas/practices/localization.md, areas/practices/trust-dark-patterns.md, areas/patterns/empty-loading-error-states.md, areas/patterns/forms-validation.md, areas/patterns/onboarding.md
checked: 2026-11
---
# Microcopy and content

The words in the interface, also called UX writing or content design: button labels, field hints, error messages, confirmations, empty states, notifications and the emails around them. Most of an interface is words, and people read few of them, scanning for the one that tells them what to do next. The tension: a consistent, recognisable voice versus plain words that get out of the way, and short text versus enough explanation to act with confidence.

## Questions worth asking

- Who reads this, in what state? A stressed person at a payment error and a curious one in onboarding need different words.
- Is there a voice and a style guide, even a page long? Without one, every screen sounds like whoever wrote it.
- Which words does the domain already use, and which do users use? Internal names ("workspace object", "entity") often leak into the interface.
- Who writes and reviews copy: designers, engineers, a content designer, the owner? It decides whether copy is designed or filled in.
- Will the text be translated? Idioms, puns and sentence fragments make translation harder.
- Where does copy live: in code, in resource files, in a CMS? If words change often, a release per change gets slow.

## Usual shape

### Anatomy
- buttons that name the action ("Save changes", "Delete project") · often · rather than "OK" or "Submit"
- field labels plus short hints for format or purpose · often · hints beside the field, not only in a placeholder
- error messages that say what went wrong and how to fix it, near the cause · often · plain words, no blame, no raw codes
- empty states that explain what will appear and offer the first step · often · see empty, loading and error states
- confirmations that repeat the consequence ("Delete 3 files? This cannot be undone") · often
- success messages that confirm what happened · often · short, sometimes with undo
- a glossary of product terms · sometimes · one name for each concept, used everywhere
- a voice and tone guide · sometimes · voice stays the same; tone shifts with the moment

### Conventions
- sentence case for buttons, labels and headings · often · Microsoft and GOV.UK guides lean this way; Apple platforms use title case in places such as macOS menus
- the important words first in a line · often · people scan the beginning
- second person ("your projects") and active voice · often
- numbers as digits, dates in an unambiguous format · often
- link text that makes sense out of context ("Read the refund policy", not "click here") · often · screen readers list links on their own
- tone dimensions chosen on purpose: formal or casual, serious or funny, respectful or irreverent, matter-of-fact or enthusiastic · sometimes · per Nielsen Norman Group

## Choices and trade-offs

- **Personality or neutrality.** A distinct voice makes a brand memorable and can grate in errors and repeated use; a neutral voice ages well and can feel cold. Many products keep personality for low-stakes moments and stay plain in errors, money and data loss.
- **Short or explicit.** Short labels scan fast; explicit ones prevent mistakes. Destructive and costly actions often deserve the longer version.
- **Copy in code or in a content system.** Strings in code are simple and versioned with the product; a CMS or translation platform lets non-engineers edit and translate, at the cost of another system.
- **Writing for experts or for newcomers.** Domain jargon is faster for experts and opaque to new users; progressive disclosure (a short label and a "learn more") serves both.

## Watch out

- "Something went wrong" with no next step · people retry, give up or contact support
- Placeholder text as the only label · it disappears on typing and often fails contrast
- Several words for one thing ("project", "board", "space") · people assume they are different things
- Jokes and wordplay in errors and failures · they read as mocking when something is lost
- Confirmshaming ("No thanks, I don't like saving money") · manipulative, and a named dark pattern
- Writing copy last, into designed boxes · the layout decides the words instead of the other way round
- Sentences built from string fragments · they cannot be translated (see localization)

## Go deeper

- [Apple Human Interface Guidelines: Writing](https://developer.apple.com/design/human-interface-guidelines/writing) · Apple's guidance on voice, clarity and labels in apps
- [GOV.UK: Writing to GOV.UK standards](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/) · plain-English writing for a very wide public, with a style guide
- [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) · terminology, voice, bias-free and global writing
- [Nielsen Norman Group: error-message guidelines](https://www.nngroup.com/articles/error-message-guidelines/) · visibility, wording and recovery for errors
- [Nielsen Norman Group: four dimensions of tone of voice](https://www.nngroup.com/articles/tone-of-voice-dimensions/) · a simple way to define and test a product's tone

## Related

- `areas/practices/accessibility.md` · link text, labels and errors that work when read aloud
- `areas/practices/localization.md` · source text that translates cleanly
- `areas/practices/trust-dark-patterns.md` · wording that pressures or tricks
- `areas/patterns/empty-loading-error-states.md` · words for the in-between moments
- `areas/patterns/forms-validation.md` · labels, hints and inline errors
- `areas/patterns/onboarding.md` · first-run explanations
