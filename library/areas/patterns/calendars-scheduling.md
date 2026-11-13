---
kind: library
shelf: pattern
name: Calendars and scheduling
fits when: people see time laid out (day, week, month, timeline) or pick a date, a range or a time slot (bookings, meetings, shifts, deadlines, availability)
related: domains/booking.md, areas/patterns/forms-validation.md, areas/patterns/tables-data-grids.md, areas/practices/localization.md, areas/parts/integrations-webhooks.md, areas/practices/accessibility.md
checked: 2026-11
---
# Calendars and scheduling

The UI for time: a month grid to pick a date, a week view of appointments, a list of free slots, a timeline of shifts or tasks. Pickers look like a small widget and calendars like a solved problem, yet both hide hard rules: time zones, daylight saving, recurrence, and what "available" means. The tension: **a picture of time that feels simple** on top of data that is anything but.

## Questions worth asking

- What do people do here: pick one date, pick a range, find a free slot, or see and rearrange many events? Each is a different control.
- Is the date known (a birthday, a passport expiry) or chosen (a trip, a meeting)? Known dates are faster to type than to find in a grid.
- Whose time zone is shown: the viewer's, the event's place, the provider's? Remote meetings and travel need it said out loud.
- How far ahead and back do people go? A week of slots and ten years of history want different controls.
- Do events repeat, and can one occurrence be changed or cancelled on its own? Exceptions to a series are where recurrence gets hard.
- Does it sync with Google, Microsoft or Apple calendars, and in which direction? One-way and two-way sync fail in different ways.
- What makes a slot unavailable: other bookings, opening hours, buffers, holidays, someone else's calendar? Those rules define what "free" means.

## Usual shape

### Anatomy
- date picker: a text field with a calendar popup, or separate day, month and year fields · often · choice depends on the date
- range picker with start and end, sometimes with presets ("last 7 days") · often · reports and stays
- slot list grouped by day ("Tue 14: 09:00, 09:30…") · often · booking; quicker to scan than a full grid
- day, week and month views with today marked · often · schedules and shared calendars
- agenda or list view · often · on phones and for people who read rather than look
- event block with title, time and a status or colour · often
- drag to create, move or resize events · sometimes · desktop scheduling tools
- time zone label or switcher · sometimes · whenever people are in different zones
- recurrence editor (daily, weekly on, until, count) · sometimes
- "this event / this and following / all" choice when editing a repeat · sometimes
- availability editor: working hours, breaks, days off, exceptions · sometimes · provider side of booking

### Conventions
- week start, date order and 12- or 24-hour time follow the person's locale · often
- disabled dates look disabled and say why when it is not obvious · often
- keyboard use in grid pickers: arrows move by day and week, Page Up and Down by month · often · as in the W3C ARIA date picker example
- times stored with their zone or as UTC plus zone, shown in local time · often · iCalendar (RFC 5545) is the shared exchange format

## Choices and trade-offs

- **Typed date or calendar grid.** Typing is fastest for known and distant dates (birth dates); a grid helps when the weekday matters or dates are near. GOV.UK uses three separate fields for memorable dates.
- **Slots or a free-form time.** Fixed slots are easy to show and protect the provider's day; a free time picker fits flexible services and needs validation against availability.
- **Grid or list.** Grids show the shape of a week and suit dense schedules on large screens; lists suit phones, screen readers and sparse availability.
- **Own calendar or synced.** A product decision covered in `domains/booking.md`; for the interface, a synced calendar needs a visible sync state and source.
- **Show in viewer's zone or event's zone.** Viewer's zone suits online meetings; the event's zone suits places people travel to (a hotel check-in, a flight).

## Watch out

- Storing a local time without its zone · events shift by an hour at daylight-saving changes or when someone travels
- Recurring events stored as many copies · editing "all future" becomes a migration
- Calendar popups as the only way to enter a date · slow for birth dates and hard for keyboard and screen-reader users
- Ambiguous formats like 03/04 · half the world reads a different month
- Availability computed in the browser · two people see the same free slot; the truth needs to come from the server
- Week views that do not fit a phone · people scroll sideways and miss events

## Go deeper

- [Nielsen Norman Group: date-input fields](https://www.nngroup.com/articles/date-input/) · choosing between calendars, text fields and dropdowns for dates
- [GOV.UK Design System: dates pattern](https://design-system.service.gov.uk/patterns/dates/) · tested guidance for memorable, approximate and chosen dates
- [W3C ARIA Authoring Practices: date picker dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/) · an accessible grid picker with its keyboard model
- [RFC 5545: iCalendar](https://datatracker.ietf.org/doc/html/rfc5545) · the standard for events, recurrence rules and time zones that calendars exchange
- [W3C: working with time and time zones](https://www.w3.org/TR/timezone/) · how to store and show times across zones without losing meaning

## Related

- `domains/booking.md` · reserving slots, holds, cancellations
- `areas/patterns/forms-validation.md` · date fields inside forms
- `areas/patterns/tables-data-grids.md` · timelines and schedules shown as rows
- `areas/practices/localization.md` · date formats, week start, time zones
- `areas/parts/integrations-webhooks.md` · syncing with external calendars
- `areas/practices/accessibility.md` · keyboard and screen-reader use of pickers
