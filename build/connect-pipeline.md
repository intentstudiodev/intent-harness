---
kind: skill
name: connect-pipeline
description: Connect, add, switch, disconnect or repair a spec tool (Spec Kit, Kiro, BMAD, OpenSpec, or any coding agent). Puts one short marked block where the tool always reads, records the connection in sandbox/pipelines.md, and touches nothing else of the tool's.
---
# connect-pipeline

A spec tool reads two things: a context it always loads, and the input for one feature. This skill feeds the first, and keeps the list of connections in `sandbox/pipelines.md`. `build/hand-to-pipeline.md` feeds the second; `build/follow-pipeline.md` reads back what the tool wrote. Every step here runs after the owner's yes and never installs or updates a tool.

## Two ways to work, both allowed at once

- **Lead.** The harness is the way in: it hands the tool one feature at a time (`hand-to-pipeline`) and reads the result back.
- **Follow.** The owner works straight in the tool ("let's plan with BMAD") and barely talks to the harness. The harness is the gate once: is the tool installed (no → its link, licence and install line from `build/connector.md`; the owner installs), connect, tell the one command to run next (below), then step back. It keeps an eye: at every hello or pick up the state script says when the tool wrote something new, and "catch up from <tool>" reads it back (`follow-pipeline`).

## Connect

1. **Find the tool** in the code folder (the project's `code:` line in `sandbox/where-we-stopped.md`). When a project is started or picked up and its code folder has one of these, offer to connect it. More than one → ask which.

| Found | Tool | The block goes | Next command (follow) | Watch |
|---|---|---|---|---|
| `.specify/` | Spec Kit | end of `.specify/memory/constitution.md` | `/speckit.specify` and the feature in a sentence | `/speckit.constitution` rewrites the file and can drop the block (Repair) |
| `.kiro/` | Kiro | our own file `.kiro/steering/intent-knowledge.md`, starting with the front matter `inclusion: always` | a new spec in Kiro's Specs panel | never edit their `product.md`, `tech.md`, `structure.md` |
| `openspec/config.yaml` | OpenSpec 1.0 and later | inside `context: \|` (added when missing), indented like the rest | `/openspec-propose` (Codex: `$openspec-propose`) and the change | the file stays valid YAML |
| `openspec/` without `config.yaml` | OpenSpec before 1.0 | end of `openspec/project.md` | its proposal command | |
| `_bmad/` | BMAD | `AGENTS.md`, a block of its own beside BMAD's | ask BMAD for `bmad status`; to plan, its PRD workflow | BMAD's context audit may offer to drop the block: the owner keeps it. An older install with `project-context.md` in its output folder gets the block there too |
| none of these | any coding agent | `AGENTS.md`, under the harness pointer | — | |

2. **Write the block** between these exact markers, in the owner's language except paths and commands:

```
<!-- intent-harness:start -->
Product knowledge for <Name> is in ~/Intent/Projects/<name>/ (Intent Format). If it is not there, ask the owner where it is.
Before you specify anything: read its project card (V*/project.md) and run `node ~/Intent/Format/kit/cli/intent-format.mjs open <that folder>`: it lists what is still unknown, guessed or undecided.
Never edit the cards there: they change only through the Intent Harness. Never invent what a card marks [ask: …], [assumed] or —. Ask the owner, or leave the gap visible in your spec.
Feature packs are in its sandbox/packs/. Start a feature's spec from its pack when there is one.
When you decide something the cards do not say, write it down in your spec with its reason: it is read back into the knowledge.
<!-- intent-harness:end -->
```

The path: `~/Intent/Projects/<name>/` when the project lives there; a path inside the code folder when the knowledge lives in the repository; otherwise the path the owner gives, written with `~`, never this computer's full home path. The block is committed with the repository, so the whole team's agents read it; a teammate whose knowledge sits elsewhere is asked where it is.

3. **Record it** in `sandbox/pipelines.md` (created from the shape below when missing): one Connections row. Say it back in one line: tool, file, mode, and that "disconnect" removes the block.

## Several tools

One block per tool, one Connections row each: BMAD for planning and Spec Kit for features in one repository, or Spec Kit in the web repository and Kiro in the mobile one (each row has its own code folder). One default per job, written in the row's mode column (`lead · default for features`, `follow · planning`); the owner can name another tool for one feature when handing it.

## Switch ("move from Spec Kit to Kiro")

1. Connect the new tool.
2. List the features still with the old one (Handed, status *with the tool*) and their unfinished tasks (`follow-pipeline` reads them first). Per feature, ask: finish there, or take it back and hand it to the new tool.
3. When none is left with the old tool, disconnect it.

## Disconnect

Remove the markers and the block, nothing else (Kiro: delete our own steering file). The row's state becomes `disconnected <date>`. The tool's files stay its own and stay readable: what it wrote can still be read back as inputs.

## Repair

The marked block is missing from a connected tool's file (the tool rewrote it; the state script says so): offer to write it again. Never rewrite anything else in that file.

## sandbox/pipelines.md

Two tables, updated in place.

```
# Pipelines

## Connections
| Tool | Code folder | Always-read file · marker | Mode | Connected | Last read back | State |
|---|---|---|---|---|---|---|
| Spec Kit | ~/code/booking-web | .specify/memory/constitution.md · intent-harness | lead · default for features | 2026-11-13 | 2026-11-13 10:20 | connected |

## Handed
| Feature | Tool | Pack | Handed | Tool writes to | Status |
|---|---|---|---|---|---|
| Reviews | Spec Kit | sandbox/packs/reviews.md | 2026-11-13 | specs/003-reviews/ | with the tool |
```

`Last read back` is a date and time; `follow-pipeline` moves it. Status: *with the tool* · *done* · *taken back*. A feature is with one tool at a time.

**Never.** Edit a tool's own files outside the markers, its generated specs or its templates. Copy cards into the code folder: the block points, it does not duplicate.
