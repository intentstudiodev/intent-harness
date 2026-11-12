---
standard: IntentFormat/1.2
type: shell
id: SH000001
name: Guest web shell
status: In design
state: Signed out
shell-type: app
platform: Web
---
# Guest web shell · #SH000001
> ⚙ #SH000001SOV1.0 · V1.0 in-progress

## Description
The frame around every page a Guest sees on the web: a header with the logo, a compact search entry and Sign in, a footer with legal links, and the consent banner on first visit. Browser back is the only back.

## Why
A Guest should be able to search and read without any account chrome in the way; the frame only has to offer sign-in at the moment they need it.

## Components
1. [~ Consent banner] — first visit only
2. [#CP000001 Header](../components/cp000001-header.md) — logo, compact search, Sign in — fixed
3. [~ Footer] — legal, help, language — guidance

## Navigation
1. [#SC000001 Home and search](../screens/sc000001-home-and-search.md) · kind: tab · label: Explore · in: Header
2. [#SC000002 Search results](../screens/sc000002-search-results.md) · kind: link · in: Header — the compact search submits here

## Places inside
✅ Declare one primary action by name; when it needs an account (Request to book, Message owner), the frame asks the Guest to sign in and returns them to the same place.
🚫 Never show navigation or a sign-in form of your own.
