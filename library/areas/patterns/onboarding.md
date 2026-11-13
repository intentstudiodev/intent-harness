---
kind: library
shelf: pattern
name: Onboarding
fits when: new people (or existing people meeting a new feature) need to get set up and reach their first useful result
related: areas/patterns/empty-loading-error-states.md, areas/parts/sign-in.md, areas/patterns/wizards-steppers.md, areas/practices/privacy-consent.md, areas/practices/analytics-experiments.md, areas/patterns/pricing-paywalls.md
checked: 2026-11
---
# Onboarding

Everything between "I just got here" and "this did something useful for me": setup, a first task, sometimes a short introduction, for first-time users and for existing ones meeting a redesign or a new feature. NN/g describes three kinds of components: feature promotion, customisation and instructions. The tension: preparing people properly versus getting them to value before they lose interest.

## Questions worth asking

- What is the first moment the product is useful, and how many steps away is it? Shortening that path usually matters more than any tour.
- What setup is truly needed before that moment, and what can wait or be defaulted? Each setup step loses some people.
- Can people try it before creating an account? It changes who arrives and how committed they are.
- Who sets up: one person for themselves, or an admin for a team that joins later? Invited people need a different welcome.
- Which permissions (notifications, location, contacts) are needed, and when does each become obviously useful? Permissions asked in context are granted more often.
- How will the team know onboarding works: completion, time to first result, retention after a week? Without a measure, changes to onboarding are guesses.

## Usual shape

### Anatomy
- sign-up or a guest start · often · see sign-in
- a few questions to tailor the product (role, goal, use case) · sometimes · only when answers change what people see
- a sample project or template · sometimes · avoids the blank canvas
- a checklist of setup steps with progress · sometimes · complex products and team set-ups
- empty states that teach the next action · often · see empty, loading and error states
- contextual tips at the point of use · sometimes · one at a time, dismissable
- a welcome carousel or tour · sometimes · common, and the part most people skip
- permission requests at the moment of need · often · with a short reason first
- invitations to teammates · sometimes · team products; see sharing and invites

### Conventions
- onboarding can be skipped and found again later · often · Apple's guidance asks for a fast, optional flow
- permission requests in context, not all at launch · often · Android and Apple guidance both recommend asking when the feature is used
- progress saved if people leave mid-setup · often
- the first screen after setup shows something real, not an empty dashboard · often

## Choices and trade-offs

- **Upfront tour or learning in context.** A tour sets expectations for a new kind of product but is quickly forgotten; contextual help at the point of use is remembered better and needs more design work in each screen. NN/g finds people often skip tutorials and do fine without them in simple apps.
- **Tailoring questions or defaults.** Questions let the product fit each person and add steps before value; good defaults start faster and may need changing later.
- **Empty start or sample data.** A blank workspace is honest and can feel daunting; sample data shows the product working and has to be easy to remove.
- **Self-serve or guided.** Self-serve suits simple products and small teams; guided set-up (calls, concierge import) suits complex or high-value products and does not scale on its own.
- **Account first or value first.** Asking for an account before anything else filters for intent; letting people try first raises activation and defers the commitment.

## Watch out

- A long carousel before the product · most people swipe through without reading
- Asking every permission at launch · people decline what they do not understand, and some platforms make asking again harder
- Mandatory setup for things that could be defaulted · drop-off before any value
- Onboarding that ends on an empty screen · the first impression is "nothing here"
- Forgetting invited users and existing users · the people who did not choose the product meet it unprepared
- Measuring only completion of the flow · a finished tour is not a retained user

## Go deeper

- [Nielsen Norman Group: mobile-app onboarding](https://www.nngroup.com/articles/mobile-app-onboarding/) · the three components of onboarding and when each helps
- [Nielsen Norman Group: onboarding tutorials vs contextual help](https://www.nngroup.com/articles/onboarding-tutorials/) · why upfront tutorials are often skipped and what works instead
- [Apple HIG: onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding) · keeping onboarding fast, optional and after launch
- [Nielsen Norman Group: mobile permission requests](https://www.nngroup.com/articles/permission-requests/) · timing and explaining requests for access
- [Android Developers: request runtime permissions](https://developer.android.com/training/permissions/requesting) · the platform flow and the advice to ask in context

## Related

- `areas/patterns/empty-loading-error-states.md` · empty states as the second half of onboarding
- `areas/parts/sign-in.md` · the account step
- `areas/patterns/wizards-steppers.md` · when setup is a multi-step flow
- `areas/practices/privacy-consent.md` · permissions and consent during setup
- `areas/practices/analytics-experiments.md` · measuring activation
- `areas/patterns/pricing-paywalls.md` · trials and when to ask for payment
