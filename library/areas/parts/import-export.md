---
kind: library
shelf: part
name: Import and export
fits when: people bring data in from files or other tools, take it out again, or move between products (CSV and spreadsheet import, migrations, exports, archives, data portability)
related: areas/patterns/tables-data-grids.md, areas/parts/integrations-webhooks.md, areas/parts/files-storage.md, areas/practices/privacy-consent.md, areas/parts/audit-history.md
checked: 2026-11
---
# Import and export

Getting records in and out in bulk: a spreadsheet of contacts, a migration from another tool, a monthly export for accounting, a full archive when someone leaves. The tension: other people's data is messy and the product's model is strict, and the importer decides how much of the cleaning falls on the user.

## Questions worth asking

- Where does the data come from: a spreadsheet people fill in, an export from a named competitor, another system? A known source can get its own importer.
- How big is a typical file, and the biggest? Hundreds of rows import in the browser; millions need background jobs and progress.
- What happens to rows that fail: block the whole import, skip and report, or let people fix them in place?
- Does an import only create, or also update existing records? Matched on what key (email, ID, SKU)?
- Who needs exports, and for what: Excel, a BI tool, a backup, moving to a rival? It sets the format.
- Is there a legal right to take the data away? In the EU and UK, data portability covers some personal data (GDPR Article 20); the owner decides what is offered beyond it.
- Can an import be undone? A wrong mapping across 5,000 rows is a large mistake.

## Usual shape

### Anatomy
- upload by picker and drag-and-drop, with accepted formats and size limit stated · often
- a template file to download · often · the cheapest way to get clean columns
- column mapping with suggested matches · often · headers rarely match the product's field names
- preview with row-level errors and a way to fix or skip · often
- summary before committing: new, updated, skipped · often
- background processing with progress and a notice when done · sometimes · large files
- importers for named tools · sometimes · lowering switching cost is a sales argument
- export of the current view, with its filters and columns · often · from tables and lists
- full account export or archive · sometimes · leaving, backups, portability requests
- scheduled exports · sometimes · accounting and reporting
- import history with rollback of a batch · sometimes

### Conventions
- CSV with a header row, UTF-8, and quoting for commas, quotes and line breaks · often · RFC 4180 describes the common form
- ISO 8601 dates in files meant for machines · often · 03/04 is a different day in different countries
- exports that import back cleanly · often · round-trips are how people fix data in bulk
- large exports delivered as a link or in a downloads area, not held open in the browser · often

## Choices and trade-offs

- **Strict or forgiving import.** Strict rejects anything off and keeps data clean but frustrates; forgiving guesses date formats, trims and fuzzy-matches, and risks silent errors. Many importers guess, then show what they guessed in the preview.
- **Build or embed the importer.** Embedded import tools bring mapping, validation and big-file handling quickly and add a vendor that sees customer data; building fits unusual data models or sensitive data.
- **CSV, Excel, JSON or an API.** CSV is universal and loses types and nesting; Excel keeps types and is heavier to parse; JSON keeps structure for developers; an API suits ongoing sync rather than one-off moves (see integrations).
- **Self-serve or assisted migration.** Self-serve scales; a migration done with or for the customer wins larger accounts and costs team time.

## Watch out

- Formulas in exported cells (CSV injection) · a cell starting with `=`, `+`, `-` or `@` can run in the reader's spreadsheet, and no single escape suits every program
- Encoding and delimiter surprises · Excel in some locales expects semicolons or other encodings, and accented names turn to garbage
- Duplicates on re-import · without a match key, a second run doubles every record
- "Import failed" with no row or column named · people cannot fix what they cannot find
- Spreadsheets mangling leading zeros and long numbers · phone numbers, postcodes and IDs lose digits
- Bulk export that ignores per-record permissions · people take out more than they may see
- Archives that leave out files, comments or history · it looks complete and is not

## Go deeper

- [RFC 4180: CSV format and MIME type](https://www.rfc-editor.org/rfc/rfc4180) · the common CSV rules: quoting, line breaks, header row
- [OWASP: CSV injection](https://community.owasp.org/attacks/CSV_Injection) · how formula injection works and the limits of each mitigation
- [ICO: right to data portability](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-data-portability/) · when the UK GDPR right applies, suitable formats and time limits
- [Smashing Magazine: designing a usable data importer](https://www.smashingmagazine.com/2020/12/designing-attractive-usable-data-importer-app/) · instructions, upload options, multi-step imports and error cleanup
- [Data Transfer Initiative](https://dtinit.org/) · open tools and standards for moving data directly between services

## Related

- `areas/patterns/tables-data-grids.md` · exporting what a table shows
- `areas/parts/integrations-webhooks.md` · ongoing sync instead of one-off files
- `areas/parts/files-storage.md` · uploads, size limits and storage of archives
- `areas/practices/privacy-consent.md` · portability and access requests
- `areas/parts/audit-history.md` · recording and rolling back bulk changes
