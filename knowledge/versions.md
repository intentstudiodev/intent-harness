---
kind: skill
name: versions
description: Opens a version beside the current one, so what was released or handed off stays intact.
---
# versions

1. A new version opens when the current one is released or handed off, or when the user says so. Use the format's tool to create `V<next>/` as a copy of the current version; never edit the released one.
2. Changes land in the version in progress (default) unless the user names another.
3. `compare-versions` (format tool; until it exists, a diff of the two folders by card) gives what differs; a change spec is measured against the earlier version.
4. Record in `sandbox/notes/<date>.md`: which version opened, from which, why. A version closing is also the moment to archive the sandbox (`core/sandbox.mjs archive`).
5. A large batch of new material for the new version: `knowledge/start-project.md` again, in the new workspace (`intent-format next --ws V<next>`).
