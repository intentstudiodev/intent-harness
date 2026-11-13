---
kind: library
shelf: architecture
name: Observability
fits when: the product runs somewhere the team cannot watch directly (servers, cloud functions, people's phones and browsers) and someone needs to know when it breaks and why
related: areas/architecture/hosting-environments.md, areas/architecture/background-jobs-queues.md, areas/practices/performance.md, areas/practices/security-basics.md, areas/practices/analytics-experiments.md, areas/parts/audit-history.md
checked: 2026-11
---
# Observability

How a team finds out what the running product is doing: logs (what happened), metrics (how much and how fast), traces (the path of one request through every part), error tracking and uptime checks. Good observability answers questions nobody thought to ask in advance, such as why checkout is slow only for one customer. The tension: **seeing enough to fix things fast versus cost, noise and personal data piling up in telemetry**, which grows quietly until it is the biggest bill or the leak.

## Questions worth asking

- How would the team learn the product is down: a check, an alert, or a customer email? The honest answer sets the first job.
- Who receives alerts, at what hours, and what are they expected to do? An alert nobody acts on is noise.
- Which journeys matter most (sign in, pay, save), and how good is good enough for each? That becomes the first service levels.
- What personal or secret data could reach logs and traces? Request bodies, tokens and emails slip in by default.
- How long must telemetry be kept, and where? Retention drives cost and may fall under the same data-residency rules as the product.
- Does the team want one vendor for everything, or the freedom to switch? It decides how telemetry is collected.

## Usual shape

### Anatomy
- error tracking with stack traces and release markers · often · the quickest win; groups errors and shows which deploy introduced them
- uptime checks from outside · often · a simple request every minute or so from another network, with a status page sometimes
- structured logs (key-value, not prose) with a request ID · often · searchable, and linkable to traces
- metrics for traffic, errors, latency and saturation · often · the "four golden signals" from Google's SRE book
- distributed traces · sometimes · once a request crosses several services, queues or outside APIs
- an OpenTelemetry SDK and collector between the product and the backend · sometimes · one vendor-neutral way to produce telemetry, sent wherever the team chooses
- service level objectives (SLOs) with error budgets · sometimes · a shared target that tells when to slow down and fix reliability
- client-side telemetry: crashes, slow screens, failed calls · sometimes · mobile and web apps fail where servers cannot see

### Conventions
- alerts on symptoms people feel (errors, slowness) rather than every cause (high CPU) · often · fewer, more useful pages
- one ID that follows a request through logs, traces and errors · often
- secrets and sensitive personal data removed or masked before telemetry leaves the app · often
- dashboards for the few signals that matter, kept next to the deploy history · often

## Choices and trade-offs

- **All-in-one vendor or separate tools.** One product for logs, metrics, traces and errors is easy to start and links them together; separate tools can be cheaper or better at one job and need wiring. Using OpenTelemetry for collection keeps either choice reversible.
- **Hosted or self-run backend.** Hosted observability is quick and priced by volume, which grows with traffic; self-run open-source stacks cost little in licences and a lot in care. Small teams usually host.
- **Logs or metrics first.** Logs are easy to add and expensive to keep at volume; metrics are cheap and answer only the questions they were built for. Many start with errors, uptime and a handful of metrics, and add traces when the product spreads across parts.
- **Keep everything or sample.** Keeping every trace and log line is simple and costly; sampling keeps a share (often all errors and slow requests, a fraction of the rest) and can miss rare cases.
- **Page someone or not.** Paging gets fast response and wears people out; for a small team, alerts during working hours plus an uptime page out of hours is a common middle.
- **Operational telemetry or product analytics.** Both watch behaviour; observability asks "is it working?", analytics asks "is it used?". They often run in different tools with different consent rules.

## Watch out

- No uptime check or error tracking at launch · the first sign of an outage is a customer, often a lost one
- Logging whole requests and responses · passwords, tokens and personal data end up in a third-party tool with long retention
- Alerts on every cause and threshold · people mute the channel and miss the real outage
- Telemetry volume nobody watches · the observability bill overtakes the hosting bill
- Building a full metrics, logs and traces stack before there are users · weeks of plumbing that a hosted error tracker and an uptime check would cover
- Background jobs and scheduled tasks left unmonitored · they fail silently for weeks

## Go deeper

- [OpenTelemetry: what is OpenTelemetry](https://opentelemetry.io/docs/what-is-opentelemetry/) · the vendor-neutral standard for traces, metrics and logs, and its collector
- [Google SRE book: monitoring distributed systems](https://sre.google/sre-book/monitoring-distributed-systems/) · the four golden signals and alerting on symptoms rather than causes
- [Google SRE workbook: implementing SLOs](https://sre.google/workbook/implementing-slos/) · setting service levels and error budgets step by step
- [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) · what to log for security and what to keep out of logs

## Related

- `areas/architecture/hosting-environments.md` · where telemetry comes from and where deploys are marked
- `areas/architecture/background-jobs-queues.md` · work that fails out of sight
- `areas/practices/performance.md` · real-user speed data
- `areas/practices/security-basics.md` · security events and keeping secrets out of logs
- `areas/practices/analytics-experiments.md` · product usage data, a different question
- `areas/parts/audit-history.md` · records people see, not operational telemetry
