---
kind: library
shelf: practice
name: Accessibility
fits when: any product with a user interface; especially public-facing, government, education, commerce, banking, transport or workplace tools
related: areas/practices/microcopy-content.md, areas/practices/motion.md, areas/practices/theming-dark-mode.md, areas/patterns/forms-validation.md, areas/design-systems/headless-libraries.md
checked: 2026-11
---
# Accessibility

Making a product usable by people with disabilities: blind and low-vision people using screen readers or zoom, people who cannot use a mouse, Deaf and hard-of-hearing people, people with cognitive or motor differences, and everyone who is temporarily limited (a broken arm, bright sunlight, a noisy room). The common yardstick is **WCAG 2.2** from the W3C. The tension: accessibility is cheap when it is part of how components are built and expensive when it is a late audit, yet it is often treated as the second.

## Questions worth asking

- Which markets and customers does the product serve, and are any buyers public bodies? Laws and procurement rules differ by both and usually point to WCAG or to the European standard EN 301 549; worth asking counsel (this is not legal advice).
- Does it serve the **EU**? The European Accessibility Act (Directive 2019/882) applies from 28 June 2025 to services such as e-commerce, banking, e-books, transport ticketing and communications; very small service providers are partly exempt, and enforcement is national.
- Does it serve the **US**? The ADA covers businesses open to the public and state and local governments; a 2024 Department of Justice rule sets WCAG 2.1 AA for the latter, due April 2027 or April 2028 by size at the time of checking (2026-11).
- Does it sell to US federal agencies? Section 508 covers them and what they buy.
- Does it serve public bodies in the **UK**? The public sector accessibility regulations apply.
- Which WCAG level is the target? Level AA is the usual reference in law and contracts; AAA is rarely required for a whole product.
- Is there a component library or design system, and is it accessible already? Most accessibility is inherited from a few components.
- Which assistive technologies are tested, and on which platforms? VoiceOver, TalkBack, NVDA and JAWS behave differently.
- Who checks it, and when: automated tools in CI, manual keyboard passes, testing with disabled people? Automated checks catch only part of the problems.
- Is there media (video, audio, live streams)? Captions, transcripts and audio description are separate work.
- Does anyone need an accessibility statement or conformance report (a VPAT)? Public sector and enterprise buyers often ask for one.

## Usual shape

### Anatomy
- semantic structure: headings, landmarks, lists, real buttons and links · often · screen readers navigate by them
- keyboard access to everything, with a visible focus indicator · often · WCAG 2.1.1 and 2.4.7; 2.2 adds that focus is not hidden behind sticky bars (2.4.11)
- text alternatives for meaningful images and icons · often · decorative ones are hidden from assistive tech
- labels and instructions tied to every form field, with errors named in text · often · see forms and validation
- colour contrast: 4.5:1 for body text, 3:1 for large text and for UI parts and icons · often · WCAG 1.4.3 and 1.4.11
- content that reflows at 320 CSS pixels wide and survives 200% text zoom · often · see responsive layout
- target size of at least 24 by 24 CSS pixels, or enough spacing · often · new in WCAG 2.2 (2.5.8)
- an alternative to dragging for any drag action · sometimes · new in 2.2 (2.5.7); sortable lists, sliders, maps
- sign-in without a memory or puzzle test (allow paste, password managers, passkeys) · sometimes · new in 2.2 (3.3.8)
- captions and transcripts · sometimes · products with video or audio
- an accessibility statement and a way to report barriers · sometimes · required for public bodies in the EU and UK

### Conventions
- native HTML or platform controls before custom widgets with ARIA · often · native ones bring keyboard and screen-reader support for free
- custom widgets follow the ARIA Authoring Practices patterns · often · people expect the same keys in every combobox or tab list
- colour is not the only signal for state or errors · often · WCAG 1.4.1 requires another cue
- respect system settings: text size, reduced motion, high contrast · often
- the page language set, and changes of language marked · often · the most common missing item after contrast and labels

## Choices and trade-offs

- **Build it in or audit later.** Building on accessible components and checking each feature costs little per feature; a late audit finds hundreds of issues at once and often needs redesign of navigation and forms.
- **Native or custom controls.** Native controls are less flexible to style and almost free to make accessible; custom ones look exactly right and need keyboard, focus and ARIA work, plus testing per screen reader.
- **Automated or manual testing.** Automated scanners are fast and catch contrast, missing labels and alt text; keyboard passes, screen-reader runs and sessions with disabled users find what scanners miss (order, meaning, effort). Most teams combine them.
- **Overlay widgets or fixing the code.** Third-party overlays promise compliance with one script; disability groups and practitioners widely report that they do not fix underlying problems and can interfere with assistive tech.

## Watch out

- Divs and spans with click handlers instead of buttons and links · no keyboard access, nothing announced
- Focus outlines removed for looks · keyboard users lose their place
- Low-contrast grey text and placeholder-as-label · the most common failure on the web, per WebAIM's yearly scan
- Modals that do not trap or return focus · keyboard and screen-reader users end up behind the dialog
- Icon-only buttons without accessible names · read out as "button" with no meaning
- Treating accessibility as a legal checkbox · conformance on paper and a product that is still hard to use

## Go deeper

- [WCAG 2.2 (W3C Recommendation)](https://www.w3.org/TR/WCAG22/) · the standard itself and the nine criteria new in 2.2; the [Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) turns it into a filterable checklist
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) · keyboard and ARIA patterns for menus, tabs, comboboxes, dialogs and more
- [WebAIM Million](https://webaim.org/projects/million/) · a yearly scan of a million home pages; which failures are most common
- [European Commission: European Accessibility Act](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en) · what the EAA covers, in plain terms
- [ADA.gov: guidance on web accessibility](https://www.ada.gov/resources/web-guidance/) · the US Department of Justice view on websites and the ADA; see also [Section508.gov](https://www.section508.gov/) for federal ICT

## Related

- `areas/practices/microcopy-content.md` · labels, link text and error messages that make sense when read aloud
- `areas/practices/motion.md` · reduced motion and flashing content
- `areas/practices/theming-dark-mode.md` · contrast in every theme
- `areas/patterns/forms-validation.md` · labels, errors and redundant entry
- `areas/design-systems/headless-libraries.md` · components that bring keyboard and ARIA behaviour
