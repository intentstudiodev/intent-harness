---
kind: skill
name: project-setup
description: The setup widgets every start shares, after "where does your product stand": where things are, your product, your market, how it's built, typical parts. Every option guessed first, every tab skippable, the answers written as the owner's words.
---
# project-setup

Learn in a few clicks what would otherwise take many questions. Ask only what you cannot read or see; put your best guess first; let the owner correct it. The answers sharpen everything after: the questions, the proposal, the library files you open, the packs you hand to spec tools.

## Order, per start

The stage question (`core/welcome.md`) and the material line ("tell me about it; paste or point to anything you have") come first. Then:

| Widget | New idea | In development | Running |
|---|---|---|---|
| ① Sources: where things are | one tab, *What you have* | yes, before reading | yes, before reading |
| read | their sentences and anything handed over | everything (`knowledge/catch-up.md`, step 2) | the code and the running product (`research/map-existing.md`) |
| ② Product | yes, guessed from their sentences | yes, guessed from the documents | yes, guessed from the code |
| ③ Market | yes | yes | yes |
| ④ Build | yes; most tabs "not decided yet" | yes, guessed | yes, read from the code, to confirm |
| ⑤ Parts | yes | only what the documents do not mention: "in scope?" | never (map-existing: no suggestions) |

Then the start goes on: New idea → the format's kickoff, skipping what setup answered; In development → catch-up step 3; Running → map-existing's first deliverable. "Enough", "skip" or "later" at any widget → stop the setup, say in one line what was left, and go on.

## Widget rules

- **One widget per message**, up to four tabs (questions), two to four options each, plus the automatic **Other** for the owner's own words or a link. Headers as below (at most 12 characters).
- **Guess first**, its description saying where the guess comes from: *(my guess)*, *(from your README)*, *(from the code)*. Checkboxes (several answers) where several can be true.
- **Not sure yet** is the last option where an answer may not exist yet. It is *unknown* in `open-questions/ask-questions.md`: the question stays open and comes back at the checkpoint.
- **Skip what is certain.** A tab whose answer the folder or the owner's words already settle is left out, and the line above the widget says so ("Code: this folder; I see a git repository").
- **One short line above the widget**, nothing long: some chat apps drop long text before a widget. The widget carries the content.
- **Previews** (where the widget has them, as in Claude Code): ⑤ shows each item's usual shape and WHY from its library file.
- **Without a widget**: the same tabs as one numbered list with lettered options, guesses marked; the owner answers in one line ("1 a c, 2 b, 3 own words").

## The widgets

### ① Sources (header *Sources*)

| Tab | Options, guess first | Other |
|---|---|---|
| Code | This folder · Somewhere else · No access yet | a link or a path |
| Designs | Figma · Files I'll add · None yet | a link |
| Docs | Notion or Google Docs · Files I'll add · None yet | a link |
| Tickets | Linear or Jira · GitHub issues · None | a link |

New idea, one tab *What you have* (checkboxes): A brief or notes · Sketches or designs · Products I like · Nothing yet.

Ticked without a link → one line after the widget: "Paste the links for designs and tickets, one per line." Private material: "Give me access, or put a copy here and say where." Never clone or install on your own.

### ② Product (header *Product*)

| Tab | Kind | Options |
|---|---|---|
| Domains | checkboxes | three guesses from `library/index.md` (models and sectors mixed: *Marketplace*, *Booking*, *Health*) + Not sure yet |
| Audience | checkboxes | the four likeliest of B2C (people, for themselves) · B2B (companies and their staff) · B2B2C (a business serving its customers through you) · Internal system (your own team) · Marketplace (two sides meet) |
| Users | checkboxes | three guessed user types + Not sure yet |
| Platforms | checkboxes | Web on a computer · Web on a phone · iOS or Android app · Desktop app |

### ③ Market (header *Market*)

| Tab | Kind | Options |
|---|---|---|
| Competitors | checkboxes | up to three real, well-known products like it (never invented) + None I know |
| Different | pick one | three guessed angles from their words (simpler · cheaper · for a niche …) + Not sure yet |
| Money | pick one | Subscription · Fees or commission · One-off sales · Free or internal |
| Region | checkboxes | three guessed markets or languages + Worldwide |

### ④ Build (header *Build*)

| Tab | Kind | Options |
|---|---|---|
| Design library | pick one | a guess (from the code, the designs or the platforms: shadcn/ui, Material, Apple HIG …) · Our own · Not decided yet |
| Tech | pick one | a guessed stack (running: what the code shows) · Not decided yet |
| Team | checkboxes | Just me · Designers · Developers · Product or business people |
| Spec tool | pick one | Spec Kit · BMAD · Kiro or OpenSpec · None yet |

### ⑤ Parts (header *Parts*)

From `library/use-library.md`, step 3: the files matching the answers so far (domains, platforms, parts named). One tab per file, up to four tabs; its `often` items first, up to four, as checkboxes; the description is the file's why. Ticked → confirmed by the owner; unticked → noted as dropped, never offered again.

### Later, in the gap round

Not widgets: these need words. Asked three to five at a time with the other gaps (`open-questions/ask-questions.md`): what would make the first release a success · what is out of scope · deadlines or budget that limit choices · rules the sector files flag (health data, payments, children) · brand and tone · who decides what.

## Writing the answers

Setup answers are the owner's words: write them at once, without a checkpoint, the way intake saves a hand-over.

| Answer | Goes to |
|---|---|
| everything, as given | `inputs/<date>-setup.md`, with intake's header line (source: setup widgets) |
| domains | the project card's `industry:`, comma-separated: the format's key for the product's domains |
| audience | the project card's `audience:` |
| Not sure yet | `—` in the value and an `[ask: …]` on the project card |
| links and competitors | `inputs/links.md` (the format's file); studying a competitor is Reverse engineer, offered once, on the owner's yes |
| users | user types in the proposal (New idea, In development) or in what is found (Running); cards only after the checkpoint |
| platforms, tech, design library | the kickoff's answers (`inputs/kickoff-answers.md`, New idea), so the kickoff skips them |
| a spec tool named | after setup, offer Connect a spec tool (`build/connect-pipeline.md`) |
| ticked parts | the proposal's inventory, unmarked |

The library reads the same answers: `library/use-library.md` picks its files from the domains, audience, platforms, design library and parts.
