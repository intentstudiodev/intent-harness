---
kind: library
shelf: practice
name: Motion
fits when: the interface animates: transitions between screens, opening panels, feedback on taps, loading indicators, onboarding or brand moments
related: areas/practices/accessibility.md, areas/practices/performance.md, areas/patterns/modals-overlays.md, areas/patterns/empty-loading-error-states.md, areas/patterns/navigation.md
checked: 2026-11
---
# Motion

Movement in the interface: a panel sliding in, a list item fading out, a button responding to a press, a screen transition that shows where something went. Good motion explains: it shows cause and effect, where things come from and go to, and that the system heard you. The tension: motion that helps a first-time user becomes a delay for a daily one, and for people with vestibular disorders movement can cause dizziness or nausea.

## Questions worth asking

- What is each animation for: feedback, orientation, continuity between states, attention, or brand? An animation without a job is a candidate to cut.
- How often will people see it? Something seen a hundred times a day wants to be fast or absent.
- Does the platform have a motion system to follow (Apple, Material, Fluent)? Native-feeling timing and easing come from there.
- How does the product behave with reduced motion turned on? Every platform has the setting, and people turn it on for health reasons.
- Are there large movements: parallax, full-screen zooms, auto-playing backgrounds, scroll-driven effects? These are the ones most likely to make people unwell.
- What devices does it run on? Heavy animation stutters on slow phones and drains batteries.

## Usual shape

### Anatomy
- feedback on press, toggle and drag · often · immediate, very short
- transitions between screens or states that show direction (push, slide, expand from the tapped item) · often · orientation
- enter and exit of overlays, menus and toasts · often · see modals and overlays
- loading and progress indicators · often · spinners, skeletons, progress bars
- list changes: insert, remove, reorder · sometimes · helps people see what changed
- shared-element transitions (a thumbnail growing into a detail view) · sometimes · continuity
- celebratory or brand moments (a completed task, a first success) · sometimes · rare by design
- a reduced-motion variant for each motion · often · crossfades or instant changes instead of movement

### Conventions
- short durations: about 100 ms for small feedback, 200 to 300 ms for panels and dialogs, rarely above 400 to 500 ms · often · per Nielsen Norman Group's timing guidance
- exits slightly faster than entrances · often · the user has already moved on
- easing rather than linear movement: ease-out to enter, ease-in to leave · often · matches how objects move
- respect for the reduced-motion setting (`prefers-reduced-motion` on the web, Reduce Motion on Apple platforms, Remove animations on Android) · often
- a way to pause, stop or hide anything that moves for more than five seconds on its own · often · WCAG 2.2.2 (Level A)
- nothing flashes more than three times a second · often · WCAG 2.3.1 (Level A); flashing can trigger seizures
- interaction-triggered motion that can be turned off unless essential · sometimes · WCAG 2.3.3 (Level AAA)
- animating transform and opacity rather than layout properties · often · smoother on the web, less work for the browser

## Choices and trade-offs

- **Platform motion or own motion language.** Platform timing feels native and needs no design work; an own language gives brand character and needs a spec (durations, easings, choreography) to stay consistent.
- **Reduce or remove.** Reduced motion can mean replacing movement with fades, which keeps the sense of change, or turning animation off entirely, which is simplest. Many products replace large movement and keep small, non-moving feedback such as colour changes.
- **Skeletons or spinners.** Skeleton screens show the shape of what is coming and feel faster for page loads; spinners suit short, unknown waits and small areas.
- **Code or tools.** CSS or platform animation APIs are light and easy to keep in sync with state; tools such as Lottie or Rive suit illustrated, designer-made animation and add file size and a runtime.

## Watch out

- Animations that block input until they finish · fast users feel the product is slow
- Long durations copied from showcase demos · a 600 ms transition on every click adds up to minutes a day
- Parallax, zooms and scroll-jacking · common triggers for vestibular symptoms; also disorienting on trackpads
- Reduced motion handled only in CSS on the web, not in JavaScript-driven or canvas animation · the setting looks respected and is not
- Motion as the only signal of change · missed by people who look away, use screen readers or have motion turned off
- Too many things moving at once · attention scatters and nothing is explained

## Go deeper

- [Apple Human Interface Guidelines: Motion](https://developer.apple.com/design/human-interface-guidelines/motion) · purposeful motion on Apple platforms and how Reduce Motion fits in
- [Material Design 3: Motion](https://m3.material.io/styles/motion/overview) · Material's transition patterns, easing and duration tokens
- [Nielsen Norman Group: duration and motion characteristics](https://www.nngroup.com/articles/animation-duration/) · timing ranges and easing for interface animation
- [Nielsen Norman Group: animation for attention and comprehension](https://www.nngroup.com/articles/animation-usability/) · what animation is good for, and when it distracts
- [W3C: Understanding animation from interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) · vestibular disorders and ways to let people turn motion off
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) · reading the reduced-motion setting on the web, and which OS settings feed it

## Related

- `areas/practices/accessibility.md` · reduced motion, flashing and pause controls in the wider picture
- `areas/practices/performance.md` · smooth frames and the cost of animation on slow devices
- `areas/patterns/modals-overlays.md` · entering and leaving overlays
- `areas/patterns/empty-loading-error-states.md` · spinners, skeletons and progress
- `areas/patterns/navigation.md` · transitions that show where you went
