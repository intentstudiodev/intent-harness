---
standard: IntentFormat/1.2
type: component
id: CP000001
name: Header
status: In design
component-type: organism
---
# Header · #CP000001
> ⚙ #CP000001SGV1.0 · V1.0 in-progress

## Description
The top bar of every web page: logo to Home and search, the main destinations, and either Sign in (Guest) or the Account menu (signed in). Collapses to logo and a menu button on narrow web viewports.

## Why
One header component for both web frames keeps the signed-out and signed-in pages looking like one product. [assumed]

## Components
1. [~ Logo] — fixed
2. [~ Compact search bar] — on every page except Home and search — guidance
3. [#CP000003 Account menu](cp000003-account-menu.md) — signed in only

## ⚙ Used in
- [#SH000001 Guest web shell](../shells/sh000001-guest-web-shell.md)
- [#SH000002 Signed-in app shell](../shells/sh000002-signed-in-app-shell.md) · at: #HV000001
