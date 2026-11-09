# Bug Workflow

Local web app and companion Chrome extension for triaging, scheduling, starting and finishing bugs in Md Abrar Sami's internal bug tracker.

- Type: Md Abrar Sami work (internal tool)
- Status: v1.0.0, working; last commit 2026-10-29
- Repo: github.com/mdabrarsami/bug-workflow (keep private, see below)
- Dates: 2026-10-29 (single day)
- Commits: 2

## What it does

The bug tracker's own UI needs several screens per bug to move it through triage, assignment, scheduling and completion. Bug Workflow lists the bugs in one fast grid with server-side filtering, sorting and paging, and walks a bug through its workflow from a side panel or in bulk. A small Node server talks to the tracker, and an MV3 extension hands the user's existing browser login to the local app and performs the one save that has to happen inside the real edit page.

## Highlights

- Grid with filters for stage, assignee, severity, priority, type, feature, reporter, created date range and must-fix; each dropdown counts what the other filters leave. Filters, sort, page size and theme are remembered.
- Four-step flow per bug (triage, assign and schedule, start, finish) plus a one-click Run that chains the first three and stops if the bug lands somewhere unexpected.
- A timer starts with Start and fills in the hours on Finish.
- Bulk "Run workflow" over ticked bugs with a choice of steps and 1 to 5 bugs processed in parallel.
- Per-row Move menu listing the workflow outcomes available for that bug; a force-finish option for bugs assigned to someone else.
- Details window with every field, steps to reproduce, schedule window and attachments.
- Companion MV3 extension syncs the login on install, on cookie change and every 5 minutes, and saves the schedule field through the page's own form so page-filled fields are not blanked.
- Server listens on 127.0.0.1 only, keeps the session in memory, and requires a custom header on write calls; no npm dependencies.

## Stack

Node.js 18 (standard library only), vanilla JavaScript, HTML/CSS with light and dark themes, Font Awesome, Chrome Extensions MV3 (cookies, tabs, scripting, alarms, storage).

## Distribution

Local web app (`npm start`) plus an unpacked Chrome extension.

## Public showcase OK?

Text only, plus at most the one disconnected-state screenshot. The app only works against Md Abrar Sami's internal tracker, and the repo's README and config name internal hosts, project and folder ids, field ids and API names. Keep the repo private and do not link it publicly.

## Screenshots

The app server was not started (it connects to the real tracker). The front end was served as static files with no backend, so it shows its disconnected state with no bug data.

- `screenshots/disconnected-layout.png`: the grid layout, stage tabs, filters and side panel in the "Not connected" state. It names Md Abrar Sami but shows no internal data. Optional; drop it if you prefer text only.

## Portfolio card

- Title: Bug Workflow
- Blurb: Local web app and MV3 extension that cut bug triage, scheduling, start and finish down to one grid and a side panel, with bulk runs on up to 5 bugs at once. Internal tool at Md Abrar Sami.
- Tags: Node.js, JavaScript, Chrome Extension, Workflow Automation, Internal Tools

## LinkedIn project entry

Title: Bug Workflow (internal bug triage tool)

Associated with Md Abrar Sami

A local web app and companion Chrome extension that move bugs through the team's tracker workflow from one screen.
- Grid with server-side filtering, sorting and paging; each filter dropdown counts what the others leave, and settings are remembered
- Triage, assign and schedule, start and finish from a side panel, or one Run that chains the first three and stops on an unexpected stage
- Bulk workflow runs over selected bugs with 1 to 5 processed in parallel
- Timer from Start that fills in logged hours on Finish; force-finish for bugs assigned to others
- MV3 extension that shares the existing browser login with the local app and saves through the real edit page so no fields are lost
- Localhost-only Node server with in-memory session and header-checked write calls, no dependencies
Stack: Node.js, JavaScript, HTML/CSS, Chrome Extensions MV3

## Naukri project entry

- Title: Bug Workflow
- Type: Md Abrar Sami project (internal tool)

Local web app plus Chrome extension for working through the bug tracker workflow.
- Filterable, sortable bug grid with remembered settings
- Triage, schedule, start and finish from a side panel or in one chained run
- Bulk runs on selected bugs, up to 5 in parallel
- Hours timer and force-finish option
- MV3 extension shares the browser login and saves through the real edit page
- Localhost-only Node server, no npm dependencies
