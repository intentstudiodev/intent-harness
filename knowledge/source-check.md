---
kind: skill
name: source-check
description: Inputs against the KB, both ways: nothing lost, nothing invented.
---
# source-check

1. For each `whose: ours` file in `inputs/`: its research file lists findings; each finding either reached a card (link it) or was dropped on purpose (say why in the research file). Unresolved → a list. A file no card cites has not entered the KB yet: say so.
2. For each card in the scope: an unmarked why has a Source link or an owner answer behind it; `[likely]` ones name the input they follow from; `[assumed]` ones appear in `intent-format open`.
3. Where links exist this is a script's job (`intent-format check` reports broken links and Sources outside `inputs/`); where they do not, a critic at tier S reads the input and the cards side by side.
4. Report: lost (in input, not in KB, not dropped on purpose) · invented (in KB, no source) · fine. To checkpoint; a question goes into its card as `[ask: …]` or `—`.
