---
kind: library
shelf: pattern
name: Wizards and steppers
fits when: a task is long, done rarely or branches on earlier answers, and is split into steps: applications, set-ups, checkouts, configuration
related: areas/patterns/forms-validation.md, areas/patterns/onboarding.md, areas/patterns/modals-overlays.md, areas/parts/payments-checkout.md, domains/public-sector.md
checked: 2026-11
---
# Wizards and steppers

A task split into a sequence of steps, often with later steps depending on earlier answers; NN/g notes wizards suit processes done occasionally, where people do not know or care about every option. A **wizard** leads people through in a set order; a **stepper** is the progress control that shows the steps; a **task list** lets people complete sections in any order. The tension: guidance and smaller pages versus control, overview and the effort of clicking "next".

## Questions worth asking

- Is this done once, occasionally or every day? Wizards help newcomers and slow down frequent users.
- Do later questions depend on earlier answers? Branching is the strongest reason for steps.
- Must steps be done in order, or could people fill sections in any order and come back? It decides between a wizard and a task list.
- How long does it take, and do people need to gather documents or ask someone midway? Saving and resuming may matter more than the steps.
- What happens at the end: something irreversible (submit, pay, create) or something easily changed later? Irreversible endings call for a review step.
- Can a part be skipped, defaulted or done later? Optional parts shorten the path for most people.

## Usual shape

### Anatomy
- one question or topic per step · often · GOV.UK's "one thing per page" approach
- a progress indicator: stepper with named steps, or "step 2 of 5" · often · less useful when branching changes the count
- back and continue controls, with back keeping answers · often
- a review or "check your answers" page before the final action · often · with a change link per answer
- a confirmation page with what happens next · often · reference number, timing, contact
- save and resume, by account or emailed link · sometimes · long applications
- a task list hub for sections done in any order · sometimes · long applications with independent parts
- cancel or exit with a warning about lost progress · often

### Conventions
- validation per step, before moving on · often · see forms and validation
- the browser back button behaves like the wizard's back · often · each step has its own URL on the web
- step names short and stable · often · they double as a summary of the task
- changing an earlier answer brings people back to the review, not through every step again · often
- steps announced to screen readers when the page changes · often

## Choices and trade-offs

- **Wizard or single form.** A single page shows the whole task, is faster for experts and suits short or familiar forms; a wizard suits long, branching or unfamiliar tasks. A form that reveals sections as answers come in sits between.
- **Linear or task list.** A linear wizard is simple to follow and suits dependent steps; a task list gives overview and freedom when sections are independent and long.
- **Named steps or a count.** Named steps tell people what is coming and suit four to six fixed steps; a count or no indicator suits branching flows where the number changes.
- **Modal or full page.** A wizard in a modal keeps context for short set-ups; a full page with URLs suits anything long, interrupted or resumable.
- **Review step or none.** A review page catches mistakes before irreversible actions; for short or easily changed set-ups it adds a step for little gain.

## Watch out

- Splitting a short form into steps for no reason · more clicks and more waiting, with no gain
- A progress indicator that lies when branches add steps · people lose trust in "almost done"
- Back that discards answers · people retype or give up
- No way to save a long application · people who need a document midway abandon
- A wizard as the only way to change settings later · experienced users have to replay the whole flow
- Final action with no review or confirmation · costly mistakes on irreversible submissions

## Go deeper

- [Nielsen Norman Group: wizards](https://www.nngroup.com/articles/wizards/) · definition, when wizards beat forms and recommendations for designing them
- [GOV.UK Service Manual: structuring forms](https://www.gov.uk/service-manual/design/form-structure) · starting with one thing per page and ordering questions
- [GOV.UK Design System: check answers](https://design-system.service.gov.uk/patterns/check-answers/) · the review page before submitting
- [GOV.UK Design System: task list](https://design-system.service.gov.uk/components/task-list/) · long transactions completed in sections, in any order
- [Carbon Design System: progress indicator](https://www.carbondesignsystem.com/building-blocks/core/components/progress-indicator/guidelines) · stepper anatomy, states and when to use it

## Related

- `areas/patterns/forms-validation.md` · the fields and errors on each step
- `areas/patterns/onboarding.md` · set-up flows for new users
- `areas/patterns/modals-overlays.md` · wizards inside dialogs
- `areas/parts/payments-checkout.md` · checkout as a multi-step flow
- `domains/public-sector.md` · where applications and step-by-step forms are studied most
