---
kind: library
shelf: architecture
name: Background jobs and queues
fits when: some work should not make the user wait or must happen later or on a schedule: emails, imports, media processing, reports, AI calls, syncing with outside systems
related: areas/architecture/monolith-or-services.md, areas/architecture/serverless-and-baas.md, areas/architecture/real-time.md, areas/architecture/observability.md, areas/parts/notifications-delivery.md, areas/parts/integrations-webhooks.md
checked: 2026-11
---
# Background jobs and queues

Work the product does outside the request a person is waiting on. The app records "do this" as a **job** or a **message on a queue**; a **worker** picks it up, does it, and retries if it fails. **Schedules** start jobs by time (nightly reports, reminders), and **workflow engines** track long processes with many steps. The tension: a fast, resilient product versus a second, invisible system whose failures nobody sees unless someone looks.

## Questions worth asking

- Which actions take more than a second or two, or depend on an outside service? Those are candidates to move out of the request.
- What does the person see while the work runs, and when it fails? A spinner, a progress bar, an email when done, a retry button?
- What happens if a job runs twice? Queues deliver at least once, so a double email or a double charge is a design question.
- Does order matter (events for one account, steps of one import)?
- How long can work wait at peak before it hurts: seconds, minutes, overnight?
- Are there multi-step processes that span days or people (onboarding, approvals, refunds)?

## Usual shape

### Anatomy
- a queue or job table between the app and the worker · often · a database table is enough for many products; a queue service for higher volume
- one or more workers, often the same codebase as the app · often · the usual first second container
- retries with growing delays, then a dead-letter queue for jobs that keep failing · often · poison messages otherwise block the line
- a scheduler for recurring jobs · often · cleanups, digests, renewals, reminders
- job status stored and shown to the user (pending, running, done, failed) · sometimes · imports, exports, generation
- a workflow engine or durable functions for long, multi-step processes · sometimes · keeps state between steps and survives restarts
- separate queues by priority or kind · sometimes · a big import does not delay password-reset emails

### Conventions
- jobs designed to be safe to run twice (idempotent) · often · Microsoft's background-job guidance and most queue docs say so
- the message carries an ID pointing to stored data, not the data itself · often · keeps personal data out of queues and logs
- a job is written in the same database transaction as the change that caused it (an "outbox") · sometimes · so a saved order never misses its confirmation
- schedules note their time zone · often · daylight-saving shifts move a "9:00" job

## Choices and trade-offs

- **In the request or in the background.** Doing it inline is simpler and the user sees the result at once; moving it out keeps the app fast and survives outside outages, but adds a state the interface has to show ("processing").
- **Database as queue or a queue service.** A jobs table in the existing database needs no new infrastructure and keeps jobs consistent with data; a dedicated queue (managed cloud queues, Redis-backed job libraries, message brokers) handles higher throughput, fan-out and many consumers.
- **Simple jobs or a workflow engine.** Plain jobs with retries cover most needs; a workflow engine earns its cost when a process has many steps, waits for people or outside events, and must resume exactly where it stopped.
- **Same container or separate workers.** Running workers inside the app server is cheap; separate workers scale on queue length instead of user traffic, deploy on their own and can hold tighter permissions.
- **Queue or event stream.** A queue hands each job to one worker and forgets it; an event stream keeps a history several consumers can read and replay, at more operational cost.

## Watch out

- Jobs that are not safe to repeat · retries send duplicate emails, charges or records
- Failed jobs that vanish quietly · a missing invoice is found by a customer, not by you
- Scheduled jobs nobody watches · a job that never started raises no error; alert on missed runs
- Measuring only how long a job takes · the wait in the queue is often the delay people feel
- One shared queue for everything · a large batch starves the urgent messages behind it
- Scheduled jobs on several servers at once · each copy runs the job; one runner or a lock is needed

## Go deeper

- [Best practices for background jobs (Azure Architecture Center)](https://learn.microsoft.com/en-us/azure/architecture/best-practices/background-jobs) · triggers, returning results, idempotency, poison messages and monitoring, mostly vendor-neutral
- [Queue-based load leveling pattern (Azure Architecture Center)](https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling) · using a queue to absorb bursts
- [Transactional outbox pattern (microservices.io)](https://microservices.io/patterns/data/transactional-outbox.html) · saving data and the message about it together
- [Enterprise Integration Patterns](https://www.enterpriseintegrationpatterns.com/) · the classic vocabulary for messaging: channels, dead letters, competing consumers
- [Amazon SQS: dead-letter queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html) · how failed messages are set aside after repeated attempts
- [Temporal documentation](https://docs.temporal.io/) · one durable workflow engine, for when jobs grow into long processes

## Related

- `areas/architecture/monolith-or-services.md` · the worker is usually the first split
- `areas/architecture/serverless-and-baas.md` · queues and schedules on function platforms, and their time limits
- `areas/architecture/real-time.md` · telling an open screen that a job finished
- `areas/architecture/observability.md` · watching jobs nobody sees
- `areas/parts/notifications-delivery.md` · emails and pushes, the most common jobs
- `areas/parts/integrations-webhooks.md` · retrying calls to and from outside systems
