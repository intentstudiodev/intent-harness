---
kind: library
shelf: pattern
name: Modals and overlays
fits when: content or a task appears on top of the current screen: dialogs, confirmations, sheets, drawers, popovers, menus, tooltips
related: areas/patterns/in-app-notifications.md, areas/patterns/wizards-steppers.md, areas/practices/accessibility.md, areas/practices/trust-dark-patterns.md, areas/patterns/command-palette-shortcuts.md, areas/practices/privacy-consent.md
checked: 2026-11
---
# Modals and overlays

Layers that sit on top of a screen, useful for short, focused tasks and for interruptions that matter. A **modal** blocks the screen beneath until it is dealt with; a **nonmodal** overlay (popover, side panel, nonmodal sheet) lets people keep working behind it. The tension: an overlay keeps people in context and saves a page, and every one also interrupts, hides what is underneath and adds a layer to manage.

## Questions worth asking

- Does this need to stop people, or only be available? Only the first needs a modal.
- Is the task short and self-contained, or does it grow (several steps, long forms, links elsewhere)? Growing tasks often want a page.
- Do people need to see or copy from the screen underneath while it is open? If so, a blocking modal is the wrong layer.
- How is it closed: a button, Escape, a click outside, a swipe down? What happens to unsaved input? Input lost on an accidental close is a common complaint.
- Should it have its own URL, so it survives a reload and can be shared? Without one, a reload loses the place.
- On phones, does it become a full screen, a bottom sheet, or stay a small dialog? Small dialogs on phones leave little room for content and keyboard.

## Usual shape

### Anatomy
- dialog with a title, short content and one to three actions · often · confirmations, short forms
- confirmation before destructive or irreversible actions · often · names the thing and the consequence
- sheet: bottom sheet on phones, side sheet or drawer on larger screens · often · a scoped task close to the current context
- popover anchored to a control · sometimes · pickers, small settings, previews
- menus and dropdowns · often · actions and choices
- tooltip for a short label or hint on hover and focus · sometimes · a poor only home for essential information
- full-screen modal for a focused task on phones · sometimes · composing, editing
- a backdrop that dims the page behind a modal · often

### Conventions
- focus moves into the modal, stays inside while open and returns to the trigger on close · often · the WAI-ARIA dialog pattern
- Escape closes, and a visible close or cancel control is present · often
- a modal not opened over another modal · often · stacked layers confuse people and focus
- action labels that say what happens ("Delete project", "Keep editing") · often · "OK" and "Cancel" are easy to misread
- background scrolling locked while a modal is open · often
- the native `dialog` element on the web handles much of the focus and top-layer behaviour · sometimes

## Choices and trade-offs

- **Modal or nonmodal.** Modal suits decisions that block progress and critical warnings; nonmodal panels suit tools and details people use alongside their work. NN/g advises keeping modals for important interruptions.
- **Overlay or page.** An overlay keeps context and suits short tasks; a page gets a URL, history and room to grow, and suits anything long, linked or shared.
- **Confirm or undo.** A confirmation dialog prevents mistakes and becomes noise when it appears for everything; undo after the action is faster for reversible actions. Confirmations work best when rare and specific.
- **Dismiss on outside click or not.** Easy dismissal suits lightweight content; for forms it risks losing input, so many products ask before discarding or ignore outside clicks.
- **Bottom sheet or dialog on phones.** Sheets are within thumb reach and feel lighter; dialogs suit short, critical choices.

## Watch out

- Modals that open unprompted on arrival (newsletter, promotions) · interruption before value; NN/g counts them among the most problematic popup trends
- Confirming everything · people click through without reading, including when it matters
- Long forms or multi-step flows inside a small modal · cramped, and a misclick loses everything
- Focus not trapped or not returned · keyboard and screen-reader users get lost behind the overlay
- Close buttons hidden, tiny or disguised · reads as a trick; see trust and dark patterns
- Sticky overlays covering the focused element · WCAG 2.2 2.4.11 asks that focus is not fully hidden by author content

## Go deeper

- [Nielsen Norman Group: modal and nonmodal dialogs](https://www.nngroup.com/articles/modal-nonmodal-dialog/) · when an interruption is justified and when it is not
- [Nielsen Norman Group: confirmation dialogs](https://www.nngroup.com/articles/confirmation-dialog/) · making confirmations specific enough to prevent errors
- [W3C WAI-ARIA APG: dialog (modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) · focus, keyboard and roles for accessible modals
- [Apple HIG: modality](https://developer.apple.com/design/human-interface-guidelines/modality) · when to present modally on Apple platforms and how to dismiss
- [MDN: the dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) · native modal and nonmodal dialogs on the web
- [Nielsen Norman Group: bottom sheets](https://www.nngroup.com/articles/bottom-sheet/) · definitions and guidelines for sheets on phones

## Related

- `areas/patterns/in-app-notifications.md` · toasts and banners that inform without blocking
- `areas/patterns/wizards-steppers.md` · when a modal task grows into steps
- `areas/practices/accessibility.md` · focus management and keyboard use
- `areas/practices/trust-dark-patterns.md` · interruptions and hidden close buttons
- `areas/patterns/command-palette-shortcuts.md` · the palette as an overlay
- `areas/practices/privacy-consent.md` · consent banners and dialogs
