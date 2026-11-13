---
kind: skill
name: hand-to-pipeline
description: Give one feature to a connected spec tool as a pack made from the cards, and record it in sandbox/pipelines.md. What the tool writes is read back with follow-pipeline.
---
# hand-to-pipeline

The spec tool starts from what we know, with every WHY, instead of a one-line prompt.

1. **Check.** The tool is connected (`sandbox/pipelines.md`, state `connected`) and its block is in place; missing → `build/connect-pipeline.md` (Connect or Repair). The feature is not with another tool (Handed, status *with the tool*); if it is, ask: leave it there, or take it back first (that row becomes *taken back*). No tool named → the row's default for features.
2. **Make the pack** with `assemble-spec` steps 1–2. It opens with the product's frame from the project card, so the tool knows the world it builds for: the domains (`industry:`), the audience, the platforms. Then, from the feature's card: the feature; its own screens and flows (linked from it, or naming it); the shells, rules, edge cases, decisions and tech those link to. Stop there: never follow a rule or a decision on to the screens of another feature, or the pack becomes the whole product. Per item: the fact, its WHY, its mark. Then **Open**: the lines of `intent-format open` that name those cards (`[ask: …]`, `[assumed]`, `—`), and **Not in this feature**: the linked cards left out, by name. Header: project, version, the cards it was made from, the date. Write it to `sandbox/packs/<feature>.md`. (`intent-format export <feature>` will make this pack; until then, by hand, the same way every time.)
3. **Hand it over.** Tell the owner the one thing to type:

| Tool | Type in its chat | It writes |
|---|---|---|
| Spec Kit | `/speckit.specify` the feature in `<pack path>` | `specs/<NNN>-<name>/spec.md`, then `plan.md`, `tasks.md` |
| Kiro | a new spec: "the feature in `<pack path>`" | `.kiro/specs/<name>/requirements.md`, `design.md`, `tasks.md` |
| BMAD | its PRD (or story) workflow, with the pack as input | the PRD and stories in its planning output (`_bmad-output/planning-artifacts/` unless its config says otherwise) |
| OpenSpec | `/openspec-propose` (Codex: `$openspec-propose`) the feature in `<pack path>` | `openspec/changes/<change>/proposal.md`, `specs/`, `design.md`, `tasks.md` |
| any coding agent | "write a spec for the feature in `<pack path>`" | where it says |

A tool that cannot read outside its folder (an editor workspace): copy the pack into the code folder as `intent-pack-<feature>.md` for the run, and delete it after.

4. **Record it**: a Handed row (feature, tool, pack, date, where the tool writes once known, *with the tool*). Rewrite `sandbox/where-we-stopped.md`.
5. **Read it back** when the tool is done, the owner says the spec is ready, or the state script says the tool wrote something: `build/follow-pipeline.md`.

**Never.** Write into the tool's files. Hand a feature to a second tool while the first still has it. Hand over a pack whose cards changed since it was made: make it again.
