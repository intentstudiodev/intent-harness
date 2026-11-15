---
kind: skill
name: versions
description: Opens a version beside the current one, so what was released or handed off stays intact.
---
# versions

1. **Only on the owner's words.** A version opens, and one is marked released, only when the owner says so: "start the next version", "we released", "it's handed off". Never on your own judgment, never because a live product gets a change, never as a side effect of another answer. When you think one is due, say so in one line and ask. Then use the format's tool to create `V<next>/` as a copy of the current version; never edit the released one. Opening or releasing a version is always an item in the batch the owner sees (`product-owner/checkpoint.md`).
2. Changes land in the version in progress (default) unless the user names another. A change to a live product whose current version is in progress stays in it: it is not a reason to open a new one.
3. `compare-versions` (format tool; until it exists, a diff of the two folders by card) gives what differs; a change spec is measured against the earlier version.
4. Record in `sandbox/notes/<date>.md`: which version opened, from which, why. A version closing is also the moment to archive the sandbox (`core/sandbox.mjs archive`).
5. **Prepare first, freeze last.** Everything that belongs in a version is settled before it is marked released. After that, nothing in it changes: no correction, no revert, no delete. A card that should not count is marked (Parked, or superseded, with a dated `## History` line) in the version in progress, never removed; a mistake found in a released version is fixed in the next one. Never offer to edit a released version.
6. A large batch of new material for the new version: `knowledge/start-project.md` again, in the new workspace (`intent-format next --ws V<next>`).
