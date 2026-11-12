---
kind: skill
name: follow-pipeline
description: Read back what a connected spec tool wrote since the last read-back (Spec Kit, Kiro, BMAD, OpenSpec): progress, tech, decisions, open points and contradictions. Saved as inputs first; cards only after the owner's yes.
---
# follow-pipeline

The owner may work in the tool for days without the harness. This skill catches the knowledge up. It runs when the state script says a tool wrote files since `Last read back` (`sandbox/pipelines.md`), when the owner says "catch up from <tool>" or "the spec is ready", and before a switch.

1. **What changed.** Per connected tool, the files under its watch folders newer than `Last read back`:

| Tool | Look in | Progress | Tech | Decisions and open points |
|---|---|---|---|---|
| Spec Kit | `specs/*/` | `tasks.md` checkboxes | `plan.md`, `research.md`, `data-model.md`, `contracts/` | `spec.md`, `plan.md`; open: `[NEEDS CLARIFICATION: …]` |
| Kiro | `.kiro/specs/*/`, `.kiro/steering/` | `tasks.md` checkboxes | `design.md`; steering `tech.md`, `structure.md` | `requirements.md` (EARS, compares 1:1 with our rules), `design.md` |
| BMAD | its output folder (`_bmad-output/` unless its config says otherwise) | stories' status, its sprint status file | the architecture document | the PRD, architecture, epics and stories |
| OpenSpec | `openspec/changes/*/`, `openspec/changes/archive/`, `openspec/specs/` | `tasks.md` checkboxes; a change in `archive/` is done | `design.md` | `proposal.md`, delta specs; `openspec/specs/` is what is now built |

Our own block, our steering file and `intent-pack-*` copies are not news.
2. **Save first.** Each changed file through `intake`, type `spec`: a line in `inputs/links.md` (it stays in the repository), or a copy in `inputs/` when the owner wants it kept as it was then.
3. **Read** (`read-input`) and sort:
   - **progress** → one line per feature in the Handed table (`with the tool · 5/8 tasks`; all done or archived → *done*);
   - **tech** → proposed tech, backend and API cards;
   - **a choice the cards did not make** → a proposed decision card, the tool's reason as its WHY `[likely]`, the file as Source;
   - **an open marker** (`[NEEDS CLARIFICATION: …]`, TBD, an open question) → `[ask: …]` in the card it is about;
   - **a contradiction with a card** → listed with both sources, an Open decision on that card; never overwritten.
4. **Tell the owner**, short, then the checkpoint:

> Since 2026-11-10, BMAD wrote 6 files. Progress: Reviews 3/8 stories done. New tech: PostgreSQL, a payments API. 2 decisions to record, 1 contradiction (refund window: 48 h in the cards, 24 h in the PRD), 2 open questions. Read them in?

5. **Write** what the owner says yes to (`checkpoint`, `write-knowledge`). Then move the row's `Last read back` to now, update Handed, rewrite `sandbox/where-we-stopped.md`.

**Never.** Write into the tool's files. Take a decision into the knowledge without the owner's yes. Change a card because a spec says otherwise: that is an Open decision.
