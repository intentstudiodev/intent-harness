# Terms and names

| Term | Meaning |
|---|---|
| Harness | This folder: instructions and scripts that teach an agent to keep product knowledge. Never holds project content. |
| Project | One folder per product: the KB, the inputs and the Sandbox. Usable without the harness. |
| KB (Intent KB) | The product's knowledge in the Intent Format: one card per user type, feature, screen, flow, rule, decision… in versions (`V1.0/`, `V1.1/`). |
| Sandbox | The project's working memory: research, ideas, specs, plans, designs index, reports, notes, tweaks, improvement notes. Not knowledge, not a source of truth; append-only; archived, never deleted. A folder, not one file. Holds neither hand-overs (`inputs/`) nor questions (in the cards). |
| Evidence (`inputs/`) | The format's folder at the project root: the files cards cite with a `Source` link. Never deleted. A file gets there by being cited, nowhere else. |
| Inputs (`inputs/`) | Everything the user hands over, as given, with one header line; the format's folder for evidence. A card cites a file with a Source link. Never moved or deleted. |
| Format (Intent Format) | How knowledge is written and its tools: `intent-format new`, `regen`, `check`, `open`, `next`, `frame`, `branch`, `migrate`. Installed once; not part of the harness. Its cold start (`intent-format next`) is the procedure Start a project wraps. |
| Factory | An untouched copy of the harness as shipped. `core/verify.mjs` compares against it. |
| Module | A box with one job: what it takes, what it gives. `modules.md`. |
| Role | A file of instructions: responsibility, what it knows, what it produces, what it pushes back on, which skills it uses. Judgment and accountability, loaded once per task. A role does nothing by itself. |
| Agent | A running model instance that executes instructions. |
| Main agent | The agent the user talks to. One per session. Always wears product owner. |
| Sub-agent | An agent the main agent starts for one task: fresh context, one role file, the task, only the inputs it needs. Returns a result and ends. Never starts the product owner. |
| Wearing a role | Loading a role file and acting by it until the task ends. One role at a time. |
| Skill | A procedure: how to do one thing, step by step. Loaded for the steps that need it. One role uses many skills; one skill serves several roles. `<module>/<name>.md`. |
| Script | Code, no model; the same result every time. `core/*.mjs`, or the format's tools. |
| Always-on rule | A rule that applies without being invoked. In `ENTRY.md` and in role files. |
| Checklist, template | Files a skill checks against or fills. `critique/`, `spec/templates/`. |
| Connector | A file per role that reaches outside skills and harnesses for the how-to. `<module>/connector.md`. |
| Output | What a module produces. Always in the project. |
| Checkpoint | The moment talk becomes writing: the pending batch is shown, the user chooses per item. |
| Tweak | One plain sentence that adjusts a default. Personal (`tweaks/`), or the project's (`sandbox/tweaks.md`). Never touches the philosophy or the format. |
| Improvement note | A finding for the harness maintainer. Local in `sandbox/improvement-notes.md`; shared only anonymised and confirmed. |
| Setup record | Proof that Harness cold start ran on this computer: `tweaks/setup-record.md`, in the harness, once per computer. |
| Open list | What is still unknown, guessed or undecided in the KB: `intent-format open` generates it from `—`, `[assumed]`, `[likely]` and Open decisions. Never kept by hand. |
| Ask marker | `[ask: …]` inside a card's sentence: a question for the owner. `intent-format open` lists them; the harness keeps no question list of its own. `· later <date>` when the owner said later (due again after two days); "unknown" leaves it as it is. |
| Marks on knowledge | `fixed` (decided), `guidance` (default), `as found` (read backwards from an existing product, not yet confirmed). |
| Confidence marks | At the end of a why or a decision Outcome: unmarked = confirmed · `[likely]` · `[assumed]`. Nothing else is tagged. `philosophy/why.md`. |

## Names of folders and files

Lowercase kebab-case. One file per skill: `<module>/<name>.md`. `.md` for anything an agent reads, `.mjs` for scripts. No numbers in names except KB versions.

```
<projects folder>/              chosen at Harness cold start; any folder
  booking-example-service-kb/   the knowledge project: the harness points here
    AGENTS.md                   entry for any agent: points to the format and to the harness
    inputs/                     everything handed over, as given, with a header line; what cards cite (the format's folder); never deleted
    proposal/  report.md        the format's cold-start files (Start a project)
    V1.0/                       the KB (the format decides what is inside; decisions are cards here)
    sandbox/                    working memory, not knowledge (README.md says so)
      research/  specs/  plans/  reports/  notes/  templates/
      ideas.md  designs.md  tweaks.md  improvement-notes.md
      archive/<name>/<yyyy-mm>.md   what is finished; read, never edited
  booking-example-service-work/ everything else: the code repository, design exports, prototypes; any structure; the harness never writes here
```

When a repository already exists, it is the work folder as it is, and the kb folder goes beside it. "Knowledge inside the repository" is a tweak, not the default.
