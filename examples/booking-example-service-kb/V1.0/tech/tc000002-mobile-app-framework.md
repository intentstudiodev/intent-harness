---
standard: IntentFormat/1.2
type: tech
id: TC000002
name: Mobile app framework
status: Candidate
category: Mobile
---
# Mobile app framework · #TC000002
> ⚙ #TC000002SGV1.0 · V1.0 in-progress

## Description
A cross-platform framework that shares the core (models, booking logic, API client) with the web app and renders native screens on both phone platforms.

## Why
One shared core is the whole point of web and app together; two native codebases would make every rule exist three times. [assumed] ## Alternatives
- [~ Native apps per platform]
- [~ Wrapped web app]

## Alternatives
- [~ Native apps per platform]
- [~ Wrapped web app]

## ⚙ Used by
- [#PR000001 BookingExampleService](../project.md)

## ⚙ Decisions
- [#DC000004 Web first, app second](../decisions/dc000004-web-first-app-second.md) · status: Decided
