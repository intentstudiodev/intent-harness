---
name: intent-about
description: About the Intent Harness — what it is, what it can do and how it works. Use when the user asks about the harness itself (what it does, how a part works, where files go, which tools it works with, how to update or remove it, how it differs from Spec Kit or BMAD), or picks "Ask me something".
---
# About the Intent Harness

Reference for answering questions about the harness itself. It is not a script: answer in your own words, short, from the sections below, and say which topic it comes from when that helps. Offer one related topic or the next step after the answer. The full tour, for people who want to look rather than ask: http://intentstudio.dev/

A question about the user's product is not for this file: that goes to the product's knowledge (`talk`). WHY is always in capitals.

## Overview

```
 ideas   docs   designs   code   feedback
   └──────┴────────┼───────┴────────┘
                   ▼
Intent ──▶ PRODUCT KNOWLEDGE ──▶ SPEC ──▶ DESIGN · DEV
                   ▲ I'm here
```

Spec-driven development starts from a spec, and a spec is only as good as what it's made from: what the product is, who it's for, what was decided, and **WHY**. That's my part, the first step.

1. **Wherever your product stands.** A new idea, a product in development, or one already running: I start from where you are.
2. **What you can bring.** Talk, paste emails and notes, drop files, point me at a repository or a running app.
3. **What I know.** Information architecture, user flows, screens, rules, decisions and more, each with its **WHY**.
4. **How we work.** Questions in small batches with my guess, every guess marked, one list of open questions.
5. **What comes out.** Feature packs for spec tools, design briefs, test cases, critique.
6. **Connectors.** Spec Kit, Kiro, BMAD, OpenSpec: I lead them, or you work in them and I keep up.
7. **Keeping it right.** Checks, versions, and your team on the same knowledge.

## 1 · Wherever your product stands

You don't start from zero, and you don't start the same way twice.

**New idea.** Nothing built yet, maybe a brief or some notes.
- I interview you a few questions at a time, only what you alone know.
- For a common kind of product I show its typical shape (sign-in, checkout …); you keep or drop each part.
- I propose the features, screens, flows and rules I'd write, my guesses marked.
- You check it. Only then do the cards appear.

**In development.** Docs, designs, tickets, a prototype, some code.
- I read everything first and ask nothing until I have.
- Then two lists: *what your documents say* (with file and place) and *my guesses*.
- My questions are "is this what you meant?", never "what do you want?".

**Running.** People already use it.
- I map it as it is: from the code, the running app, screenshots or recordings.
- Nothing invented, and no "this could be better" yet. Every card links to where I found it.
- A **WHY** the code doesn't state stays a question for you, never my guess.
- First you get the map, and a list of contradictions.

In every case, "I don't know" and "later" are good answers. Unknown stays marked as unknown; "later" comes back in two days.

## 2 · What you can bring

Anything, in any state:
- **Talk.** Just say it: a decision, a change, "the tester says checkout breaks".
- **Paste.** Emails, chat logs, meeting notes, a tester's report.
- **Drop files** into `inputs/`: docs, briefs, designs, screenshots, recordings, tickets.
- **Point me** at a repository or a running app.

Everything is saved as given, with one line saying what it is and whose. Saving decides nothing: it becomes knowledge only when you agree, and every card can link back to the input it came from.

## 3 · What I know

Not one long document: connected pieces, the way a product team thinks.

| | Kind | What it captures |
|---|---|---|
| **The product** | Project | what it is, who it's for, where it stands |
| | User types | who uses it, and what each can do |
| | Features | what it does, and **WHY** each part exists |
| **The experience** | Information architecture | the map of places and how you move between them |
| | User flows | the journeys: sign up, book, pay, cancel |
| | Screens | what each place shows and what you can do there |
| | Shells | what stays around the screens: header, tab bar, menus |
| | Components | the reusable parts: buttons, cards, forms |
| **The logic** | Rules | what must always be true |
| | Edge cases | what happens when things go wrong or get unusual |
| **The build** | APIs · Backend · Tech | how it's built, as found or as planned |
| **The memory** | Decisions | what was chosen, what was dropped, and **WHY** |
| | Comments | notes and feedback pinned to the right place |

Each piece is a card: one plain file in one predictable format (Intent Format), linked to the others. You don't have to know these words. You talk; I file each thing where it belongs.

## 4 · How we work

- **I ask in batches**, three to five questions at a time, each with my guess, so you mostly say "yes" or correct me.
- **"I don't know" and "later" are good answers.** Unknown stays marked; "later" comes back in two days.
- **Every guess is marked:** `[assumed]` my guess · `[likely]` found in your material · `[ask: …]` a question for you · `—` unknown.
- **One list of open questions.** Ask *"what's still open?"* and you get everything unknown, guessed or undecided, across the product. Nothing gets lost when a chat ends.
- **I push back** once when something doesn't add up, with an alternative. Then it's your call.
- **I remember where we stopped.** Next time I say where we left off and what's next.

## 5 · What comes out

When something is ready to be built, I shape the knowledge into what the next step needs, with the **WHY** attached:
- **A feature pack** for a spec tool: the feature's screens, flows, rules, decisions and open questions in one file.
- **A design brief**: what to design, for whom, under which rules, with your design system.
- **Test cases** made from the rules and flows, so testing checks what was meant, not only what was built.
- **A critique** of any plan, spec or design, against the knowledge.

**What comes back counts.** The spec a tool wrote, the decisions it made, what testing found: it lands in `inputs/` and becomes knowledge. The next spec starts from what the last build learned.

## 6 · Connectors

I don't replace your tools; I feed them.

| Job | Recommended | Alternatives |
|---|---|---|
| Spec and build | Spec Kit | Kiro · BMAD · OpenSpec · just your coding agent |
| Design | Figma skills | ui-ux-pro-max · impeccable |
| Testing | Playwright | your own test runner |

**Two ways to work with a spec tool**
- **I lead.** You talk to me; I hand the tool one feature at a time as a pack, and read back what it wrote.
- **You lead.** Prefer to work straight in BMAD or Spec Kit? Do it. I connect it once and step back. When you come back, I read what changed there: progress, tech, decisions, open questions.

**Good to know**
- **Connected, not copied.** A spec tool gets a short note in the file it always reads: where the knowledge is, and what not to invent. Removable any time.
- **Several, or switch later.** BMAD for planning and Spec Kit for features, or a move from one to another: features in progress are never lost on the way.
- **Your tools first.** On the first start I look at what you already have.
- **Links, not installs.** You get each tool's link and licence; you install it, never me. Without a tool, I do the job myself.

## 7 · Keeping it right

- **Checks.** The format's own tool checks every card: broken links, missing pieces, a **WHY** still owed.
- **Change with care.** Change a rule and I show everything it touches before anything is rewritten.
- **Versions.** What shipped stays intact; the next version grows beside it.
- **Your team.** A project is a folder: put it in git and share it. Whoever opens it is offered the harness, and their agent reads the same knowledge.
- **I learn how you work.** Your preferences are kept as tweaks; updates never overwrite them.

## Questions people ask

**Does it install anything else?** Only `~/Intent/` (Harness, Format, Projects), two small files in the folder you ran it in (`AGENTS.md`, and `CLAUDE.md` importing it), and, when Claude Code is on this computer, this About skill in `~/.claude/skills/`. Spec tools and other skills are never installed for you: you get their link and licence.

**Where are my files?** Each product's knowledge is in `~/Intent/Projects/<name>/`, plain Markdown. Your code stays where it is; the project remembers where (`code:` in `sandbox/where-we-stopped.md`).

**Which agents does it work with?** Any coding agent that reads `AGENTS.md`: Claude Code, Codex, Cursor and others. The harness is instructions and files; it brings no AI of its own.

**Is it free?** Yes, MIT-licensed. It runs on the AI plan you already use.

**Does my data leave my computer?** The harness sends nothing. Your agent reads the files as it reads any files, under its own terms. Improvement notes go to the public repository only when you say yes, anonymised and shown to you first.

**How do I update it?** `npx github:intentstudiodev/intent-harness update`. Your tweaks are kept. A project in an older format is offered `intent-format migrate`; the harness never writes into a project of another version.

**How do I remove it?** Delete `~/Intent/Harness` and `~/Intent/Format` (keep `Projects/`: that is your knowledge), the two pointer lines in a folder's `AGENTS.md`, and `~/.claude/skills/intent-about`.

**How is it different from Spec Kit, Kiro, BMAD or OpenSpec?** They turn intent into specs, plans, tasks and code. The harness is the step before and after: it keeps what the product is and why, hands them a feature pack, and reads back what they decided. It connects to them; it does not replace them.

**Can my team use it?** Yes. A project is a folder: put it in git. Whoever opens it is offered the harness, and their agent reads the same knowledge.
