---
kind: library
shelf: pattern
name: Forms and validation
fits when: people type or choose values the product needs: sign-up, checkout, settings, creating or editing a record
related: areas/patterns/wizards-steppers.md, areas/practices/accessibility.md, areas/practices/microcopy-content.md, areas/parts/payments-checkout.md, areas/patterns/empty-loading-error-states.md
checked: 2026-11
---
# Forms and validation

Fields, labels and the rules that check what people enter, with messages that say what went wrong and how to fix it. Forms are where a product asks for effort, so most of the work is asking less and asking clearly. The tension: the data the business wants versus the patience people have, and catching mistakes early versus interrupting people while they are still typing.

## Questions worth asking

- Why is each field needed, and what happens if it is left out? Every field removed raises completion.
- Which values can the product already know or infer (from the account, an address lookup, the previous form)? Each prefilled value is one less chance of a mistake.
- Which errors are worth checking in the browser, and which only the server can know (a taken username, a declined card)? Server-only errors need a place to appear after submit.
- Is this filled in once (sign-up), often (a daily entry) or edited later (settings)? Speed and safety weigh differently.
- Does the form need to work on phones, with a keyboard only and with a screen reader? Each changes field types, focus order and how errors are announced.
- Do any fields carry legal weight (consent, age, tax details)? They need precise wording; see privacy and consent.

## Usual shape

### Anatomy
- a visible label above or beside each field · often · placeholders vanish on typing and fail as labels
- hint text for format or purpose · often · placed before the field, linked to it for screen readers
- required or optional marking, one convention throughout · often · many teams mark the few optional ones
- inline error message next to the field · often · says what is wrong and how to fix it
- an error summary at the top after submit · sometimes · long forms; links to each field (the GOV.UK pattern)
- one primary submit action, with a clear label · often · "Create account" says more than "Submit"
- field types matched to the data: email, number, date, choice · often · the right keyboard on phones and autofill
- saving state and success confirmation · often · see empty, loading and error states

### Conventions
- validate on leaving a field or on submit, not on every keystroke · often · Baymard finds premature errors frustrate people
- remove the error as soon as the value is fixed · often
- keep everything the person typed after an error · often · WCAG 2.2 3.3.7 also asks not to make people re-enter information in the same process
- errors announced in text, not by colour alone · often · WCAG 1.4.1 and 3.3.1
- single column, in a logical order · often · faster to scan and to tab through
- accept flexible formats (spaces in phone and card numbers) and normalise them · often

## Choices and trade-offs

- **Inline validation or on submit.** Inline checks save a round trip and help with tricky formats (passwords, usernames); on-submit is calmer and simpler to build and suits short forms. Many products do both: inline after a field is left, plus a summary on submit.
- **One page or several.** A single page shows the whole task and suits short forms; splitting into steps helps long or branching ones. See wizards and steppers.
- **Strict or forgiving input.** Strict formats are easy to process and annoy people; forgiving input with cleanup on the server costs a little code and saves support.
- **Save button or autosave.** Explicit saving fits forms with consequences and validation across fields; autosave fits settings and notes, and needs a visible saved state and undo.
- **Positive validation.** A tick on a valid field reassures on hard fields; on every field it adds noise.

## Watch out

- Placeholder text used as the label · it disappears while typing and has poor contrast
- Clearing fields after an error · people abandon rather than retype
- Vague messages ("Invalid input") · people cannot fix what they cannot understand
- Errors shown before people have finished typing · it reads as being scolded
- Blocking paste, or autofill turned off without a reason · password managers and assistive tools break
- Asking for data "in case" · lower completion and more personal data to protect

## Go deeper

- [GOV.UK Design System: recover from validation errors](https://design-system.service.gov.uk/patterns/validation/) · when to validate, error summary and message placement, tested at scale
- [GOV.UK Design System: error message](https://design-system.service.gov.uk/components/error-message/) · wording errors so people can fix them
- [W3C WAI forms tutorial](https://www.w3.org/WAI/tutorials/forms/) · labels, grouping, instructions and notifications for accessible forms
- [Baymard Institute: inline form validation](https://baymard.com/research-articles/inline-form-validation) · usability testing on premature, positive and removed error messages
- [Nielsen Norman Group: reporting errors in forms](https://www.nngroup.com/articles/errors-forms-design-guidelines/) · ten guidelines for visible, specific, recoverable errors
- [WCAG 2.2: redundant entry (3.3.7)](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html) · not asking for the same information twice

## Related

- `areas/patterns/wizards-steppers.md` · splitting a long form into steps
- `areas/practices/accessibility.md` · labels, errors and focus
- `areas/practices/microcopy-content.md` · labels, hints and error wording
- `areas/parts/payments-checkout.md` · the most studied form of all
- `areas/patterns/empty-loading-error-states.md` · saving, success and failure after submit
