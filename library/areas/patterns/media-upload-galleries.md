---
kind: library
shelf: pattern
name: Media upload and galleries
fits when: people add photos, video, documents or other files and then browse, view or arrange them (profile photos, listings, attachments, albums, asset libraries)
related: areas/parts/files-storage.md, areas/patterns/forms-validation.md, areas/patterns/modals-overlays.md, areas/practices/performance.md, areas/practices/security-basics.md, areas/practices/privacy-consent.md
checked: 2026-11
---
# Media upload and galleries

Getting a file from someone's device into the product, and showing it back: the photo picker, drag and drop, the progress bar, the thumbnail grid and the full-screen viewer. Uploads cross the slowest, least reliable part of the system, the user's network, and accept content the product did not make. The tension: **an upload that feels instant and forgiving** versus files that are large, slow, sometimes unsafe and often private.

## Questions worth asking

- What gets uploaded: one avatar, a few listing photos, long videos, any document? Size and type limits follow from it.
- Where do people upload from: phone camera roll, desktop folders, a camera on the spot, cloud drives? Each source has its own picker, permissions and file types.
- Does the product need to change the file: crop, rotate, compress, convert, generate thumbnails? Processing decides where the work happens and how long people wait.
- What happens on a weak or dropped connection: start again, resume, or keep a queue? Large files on mobile networks often fail midway.
- Who can see uploaded files, and can links leak them to others? Uploaded files often hold more than people meant to share.
- Do images need alt text or captions, and who writes them? Images without text alternatives shut out screen-reader users.
- Which files are off limits, and is anything scanned before others see it? Malware and illegal content arrive through uploads.
- Do photos carry metadata (location, device) worth removing before sharing? Location data in a photo can reveal where someone lives.

## Usual shape

### Anatomy
- choose button that opens the system picker · often · the most reliable path on every device
- drop zone for drag and drop · sometimes · desktop; an addition to the button, not a replacement
- camera capture · sometimes · mobile flows such as receipts, documents, listings
- accepted types and size limit stated before choosing · often
- per-file progress, with cancel · often · especially for large files or many at once
- per-file error with retry ("too large", "not supported") · often · one bad file without losing the rest
- thumbnail preview right after choosing · often · confirms the right file
- reorder, set as cover, remove · sometimes · listings and galleries
- crop or rotate step · sometimes · avatars and fixed-ratio images
- gallery grid with lazy loading · often
- full-screen viewer with swipe, zoom and close · often
- alt text or caption field · sometimes

### Conventions
- the system photo picker on phones rather than full library permission · often · Android's photo picker and iOS's limited access let people share only chosen items
- uploads continue while people fill the rest of the form · often
- images served in several sizes for the screen they land on · often
- original kept, derived sizes generated on the server · often

## Choices and trade-offs

- **Upload at once or on submit.** Uploading as soon as files are chosen hides waiting behind the rest of the form and leaves orphan files to clean up; uploading on submit is simpler and makes the final wait longer.
- **Through your server or direct to storage.** Direct uploads with signed URLs scale and keep large files off the app server; going through your server makes checks and processing simpler.
- **Simple or resumable upload.** Simple requests suit small files; resumable protocols suit video and poor networks at the cost of more moving parts.
- **Process on the device or on the server.** Resizing on the device saves bandwidth and time; server processing is consistent and keeps the original.
- **Grid, list or carousel.** Grids suit browsing many images; lists suit documents with names and dates; carousels show one at a time and hide the rest.

## Watch out

- Trusting the file extension or the browser's type · disguised files and scripts get through unless the content is checked on the server
- No size limit, or one stated only after a long upload · people wait minutes to learn it failed
- Losing every file when one fails · people start over and give up
- Serving full-size originals in a grid · slow pages and large data bills on phones
- Photo location metadata left in public images · it can reveal where people live
- Drag and drop as the only way · keyboard, touch and screen-reader users cannot upload
- Public links to private files that never expire · documents leak through forwarded URLs

## Go deeper

- [GOV.UK Design System: file upload](https://design-system.service.gov.uk/components/file-upload/) · a tested, accessible upload component and its error messages
- [Nielsen Norman Group: drag and drop](https://www.nngroup.com/articles/drag-drop/) · signifiers, feedback and alternatives that make drag and drop usable
- [OWASP: file upload cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html) · validating type, size and content, storing safely, scanning
- [web.dev: responsive images](https://web.dev/learn/design/responsive-images) · serving the right image size and format for each screen
- [Android Developers: photo picker](https://developer.android.com/training/data-storage/shared/photopicker) · letting people share selected photos and videos without broad storage access
- [tus: resumable upload protocol](https://tus.io/) · an open protocol and implementations for uploads that survive dropped connections

## Related

- `areas/parts/files-storage.md` · where files live, sharing links, quotas
- `areas/patterns/forms-validation.md` · uploads inside forms and their errors
- `areas/patterns/modals-overlays.md` · full-screen viewers and lightboxes
- `areas/practices/performance.md` · image sizes, lazy loading, caching
- `areas/practices/security-basics.md` · accepting untrusted content
- `areas/practices/privacy-consent.md` · metadata and who sees uploads
