# Tweaks (yours)

Empty when shipped; never touched by an upgrade. One plain sentence per tweak, with date and reason, in a file named after the role or skill it adjusts: `tweaks/checkpoint.md`, `tweaks/researcher.md`. `tweaks/config.md` holds settings and `tweaks/setup-record.md` the proof that Harness cold start ran on this computer (both from `core/`, written at cold start). `tweaks/connectors.md` holds your own skills per role and case. `tweaks/templates/` holds your spec templates (`extends: spec/<default>`).

Precedence: project tweaks (`<project>/sandbox/tweaks.md`) > yours > shipped defaults. A tweak may change defaults (how many questions, tiers, templates, connectors, language, verbosity, care). It may not change a role's responsibility, a skill's steps, `philosophy.md`, or the format; what would is an improvement note.
