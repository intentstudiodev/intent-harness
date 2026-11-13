---
kind: library
shelf: domain
group: model
name: Connected devices
fits when: the app pairs with physical hardware and controls or reads it (smart home, wearables and sensors, appliances, vehicles and chargers, trackers, industrial IoT)
related: areas/practices/security-basics.md, areas/practices/offline-sync.md, areas/parts/notifications-delivery.md, areas/platforms/wearables-tv-car.md, areas/patterns/onboarding.md
checked: 2026-11
---
# Connected devices

An app that comes with a thing: a lamp, a lock, a thermostat, a camera, a sensor, a charger, a machine on a factory floor. People judge the product by the device, and the app is where pairing, control, history and updates happen. The tension is that **the physical world does not wait for the network**: a door has to open when the cloud is down, a firmware update cannot brick a heater, and the device may stay in a home for ten years while the app changes every month.

## Questions worth asking

- How does the device connect: Bluetooth, Wi-Fi, Thread, cellular, through a hub? It decides pairing, range, battery life and what works offline.
- Does it work without the internet, or without the company's servers? Local control is a trust question as much as a technical one.
- Does it join an ecosystem (Matter, Apple Home, Google Home, Alexa) or stay in your own app? Ecosystems bring reach and take away control of the experience.
- Who uses one device: one person, a household, guests, an installer, a landlord? Sharing and handing over ownership need design.
- How long will you ship security updates, and how are they delivered? In the UK this is now a published commitment, and the EU Cyber Resilience Act brings similar duties.
- What happens when the device is sold, reset or the company stops the service? Bricked devices make headlines.
- What data does it collect (video, audio, location, presence at home), and where is it stored? It sets privacy duties and what a breach would expose.
- Is it safety-relevant: locks, heating, medical, vehicles? Then failure modes come before features.

## Usual shape

### Roles
- owner who sets up and controls the device · often
- household members or guests with shared access · often · sometimes time-limited
- installer or professional who configures on site · sometimes · then hands over to the owner
- support staff who see device status and logs · often · with the owner's permission
- fleet or site manager for many devices · sometimes · offices, rentals, industry

### Journeys
- unbox, pair and connect to the network · often · the riskiest moment; many returns start here
- control: turn on, adjust, lock, start · often · expected to respond in about a second
- automate: schedules, scenes, rules triggered by sensors or time · often
- get alerted and look back: motion, leak, low battery, offline; readings, events, clips · often
- update firmware · often · ideally automatic, with a visible result
- share access, transfer ownership or factory-reset · sometimes

### Screens
- home or device list grouped by room or site, with live state · often
- device detail with controls, status and settings (name, room, firmware version, remove device) · often
- pairing and setup flow, step by step with recovery from failures · often
- automations and schedules · often
- activity history and charts · often
- notifications and alert settings · often

### Rules
- each device has a known state, and the app shows when that state is stale or unknown · often · "offline" is a state too
- commands confirmed by the device, not assumed · often · otherwise the app shows a lamp as on that is off
- unique credentials per device, no shared default passwords · often · a legal requirement in the UK since April 2024 (PSTI regime)
- a published security update period and a way to report vulnerabilities · often · required in the UK; the EU Cyber Resilience Act adds duties for products with digital elements (see Go deeper for its dates)
- firmware updates signed and able to recover from failure · often
- local fallback for critical functions · sometimes · locks, heating, alarms

## Choices and trade-offs

- **Cloud control or local control.** Cloud makes remote access and features easy and adds latency and a dependency on your servers; local control is fast and private and harder to build across networks. Many products do both, with local as the fallback.
- **Own app or ecosystem standard.** Your own app controls branding, data and advanced features; supporting Matter or a big platform lets people use the device with everything else and reduces the app to setup and extras.
- **Bluetooth only, Wi-Fi, or a hub.** Bluetooth is simple and short-range; Wi-Fi reaches the cloud directly and drains batteries; a hub or Thread network suits many low-power devices and is one more thing to install.
- **Automatic or user-approved firmware updates.** Automatic keeps the fleet secure; user-approved avoids surprises in safety-relevant devices. Some products update automatically only for security fixes.
- **Subscription features or one-time purchase.** Subscriptions fund servers and storage (video history, for example); features that move behind a paywall after purchase anger owners.

## Watch out

- A pairing flow tested only on the office Wi-Fi · real homes have mesh routers, 5 GHz-only networks and captive portals
- The app showing a state it did not confirm · people trust the lock icon, not the lock
- No plan for the end of support · devices that stop working when servers close damage the brand and can raise legal questions
- Alerts without throttling · a sensor that fires every minute gets muted, and the one real alert is missed
- Shared accounts instead of shared access · people pass the owner's password around, and removing one person resets everyone
- Video and presence data kept by default without a clear reason · it is among the most sensitive data a product can hold

## Go deeper

- [Connectivity Standards Alliance: Matter](https://csa-iot.org/all-solutions/matter/) · the open smart-home standard supported by the major ecosystems, its device types and multi-admin sharing
- [ETSI EN 303 645: cyber security for consumer IoT](https://www.etsi.org/deliver/etsi_en/303600_303699/303645/03.01.03_60/en_303645v030103p.pdf) · the European baseline standard: passwords, updates, vulnerability reports, data and resilience
- [UK government: consumer connectable product security regulations](https://www.gov.uk/guidance/regulations-consumer-connectable-product-security) · UK: the three requirements in force since 29 April 2024
- [European Commission: Cyber Resilience Act](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act) · EU: reporting duties from 11 September 2026 and main obligations from 11 December 2027; ask what applies to your product
- [Apple Human Interface Guidelines: HomeKit](https://developer.apple.com/design/human-interface-guidelines/homekit) · naming, rooms, setup and controls for accessories in Apple's home platform

## Related

- `areas/practices/security-basics.md` · credentials, signing and vulnerability handling
- `areas/practices/offline-sync.md` · devices and apps that lose connection
- `areas/parts/notifications-delivery.md` · alerts and their throttling
- `areas/platforms/wearables-tv-car.md` · watches, cars and screens as devices
- `areas/patterns/onboarding.md` · pairing as first-run experience
- `areas/parts/sharing-invites.md` · household and guest access
