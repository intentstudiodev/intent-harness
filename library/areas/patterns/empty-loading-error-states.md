---
kind: library
shelf: pattern
name: Empty, loading and error states
fits when: any screen or part of a screen can have no content yet, be waiting for data, or fail (every product that fetches or stores anything)
related: areas/patterns/onboarding.md, areas/patterns/forms-validation.md, areas/practices/performance.md, areas/practices/offline-sync.md, areas/practices/microcopy-content.md, areas/practices/accessibility.md
checked: 2026-11
---
# Empty, loading and error states

The states a screen is in when it is not showing its normal content: **empty** (nothing yet, nothing matches, all done), **loading** (waiting) and **error** (something failed). They are often designed last and seen first, by new users and on slow networks. The tension: each state is a small screen of its own, and covering them all for every component is real work that rarely appears in mock-ups.

## Questions worth asking

- For each main screen: what does it look like with no data, while loading, partly loaded, and when it fails? Each state is a screen people will see.
- Why can a screen be empty: first use, no results, everything cleared, no permission? Each wants a different message.
- How long do things usually take, and what is slow (search, reports, uploads, AI answers)? It decides between spinners, skeletons and progress bars.
- Which errors can people fix themselves (retry, reconnect, correct input) and which need someone else? Errors people cannot fix need a route to someone who can.
- What happens offline or on a flaky connection? Weak networks are the normal case on phones.
- When a part of the screen fails, does the rest still work? One failing widget can blank a whole page.

## Usual shape

### Anatomy
- first-use empty state with a short explanation and the next action · often · see onboarding
- "no results" with a way to broaden or clear filters · often · see search and filters
- "all done" or "you're caught up" · sometimes · inboxes and task queues
- skeleton screens for full-page loads · often · show the layout before the data
- spinner or progress indicator for actions · often · a determinate bar when the length is known
- inline error with a retry · often · for a failed widget or list
- full-page error for a broken route or lost connection · often · with a way back
- offline banner and queued changes · sometimes · see offline and sync
- partial states: some data loaded, some failed or stale · sometimes · dashboards and feeds

### Conventions
- under about 1 second, no indicator; longer, show one; beyond about 10 seconds, show progress and let people do other things · often · Nielsen's response-time limits
- messages say what happened, why, and what to do next, in plain words · often
- the surrounding layout (headers, navigation, filters) stays visible · often · people keep their context
- loading and error messages announced to screen readers without moving focus · often · WCAG 2.2 4.1.3 status messages
- a retry that keeps what people typed · often

## Choices and trade-offs

- **Skeleton, spinner or progress bar.** Skeletons suit full-page loads and make waiting feel shorter; spinners suit short, single actions; a progress bar suits long work with a known length. Skeletons that hang feel worse than a plain spinner.
- **Optimistic or confirmed updates.** Showing the change at once feels fast and needs a clear rollback when the server rejects it; waiting for confirmation is slower and simpler to reason about.
- **Helpful or quiet empty states.** An illustration and guidance help on first use; for experienced users and small containers, a single line is often enough.
- **Fail the whole page or a part.** Isolating failures keeps the rest usable and adds design and engineering work per component.
- **Technical detail or none.** A short code or "copy details" helps support; raw stack traces confuse people and can leak information.

## Watch out

- Designing only the happy path · new users and slow networks see the unplanned states first
- Blank screens with no explanation · people assume the product is broken or empty forever
- Generic "Something went wrong" with no next step · nothing to do but leave
- Errors that blame the user or show raw server messages · confusion, sometimes a security leak
- Layout that jumps when data arrives · lost place and mistaps
- Spinners on every small component at once · a page that flickers instead of loading

## Go deeper

- [Nielsen Norman Group: empty states in complex applications](https://www.nngroup.com/articles/empty-state-interface-design/) · three guidelines: status, learnability and direct paths to tasks
- [Nielsen Norman Group: response-time limits](https://www.nngroup.com/articles/response-times-3-important-limits/) · the 0.1, 1 and 10 second limits behind loading feedback
- [Nielsen Norman Group: skeleton screens](https://www.nngroup.com/articles/skeleton-screens/) · types of skeletons and when they beat spinners
- [Nielsen Norman Group: error-message guidelines](https://www.nngroup.com/articles/error-message-guidelines/) · visible, precise, constructive error messages
- [WCAG 2.2: status messages (4.1.3)](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) · announcing loading, success and errors to assistive technology
- [Carbon Design System: empty states](https://www.carbondesignsystem.com/building-blocks/core/patterns/empty-states) · a catalogue of empty-state types with examples

## Related

- `areas/patterns/onboarding.md` · first-use empty states
- `areas/patterns/forms-validation.md` · errors on input
- `areas/practices/performance.md` · making the waiting shorter
- `areas/practices/offline-sync.md` · no connection and queued changes
- `areas/practices/microcopy-content.md` · wording empty and error messages
- `areas/practices/accessibility.md` · announcing state changes
