# Md Abrar Sami Tag Creator

Chrome extension that bulk-creates, dispatches and completes Md Abrar Sami planner tags from a grid, a CSV / Excel / JSON file, or GitHub commits, and writes a daily update email from those commits.

- Type: Md Abrar Sami work (internal productivity tool for the Md Abrar Sami planner)
- Status: v1.0.0, in use; last commit 2026-10-13
- Repo: github.com/mdabrarsami/create-planner-tag (keep private, see below)
- Dates: 2026-09-07 to 2026-10-13
- Commits: 39

## What it does

Planner tags normally get created one at a time on a board. This extension collects them in an editable grid (typed in, imported from a file, or built from GitHub commits), shows them on a mini timeline, and posts them in one run, optionally dispatching and completing each one. A Settings page adds a Manage view for tags that already exist (filter, edit, dispatch, complete, delete, grid or calendar view) and a scheduled Daily update that reads the day's commits, drafts an email, and opens it in Gmail.

## Highlights

- Manifest V3 with popup, full-page settings app, background service worker, offscreen document and alarms; requests run in the page's main world so they carry the signed-in session.
- File import for CSV, TSV, JSON and .xlsx with no library: the xlsx reader walks the zip directory and inflates with the browser's `DecompressionStream`.
- GitHub import from github.com or GitHub Enterprise via OAuth device flow, with paginated commit fetching across repos and a commit-to-tag transform.
- Run engine with progress, Stop, per-tag error isolation, and resume after the popup is closed mid-run.
- Daily update email: schedules (daily, weekdays, monthly, every N hours and more), a reminder notification, and drafting with Chrome's built-in model, a locally downloaded transformers.js model, or a rule-based writer as fallback.
- 228 unit tests across 12 files using `node --test`, with the page runner loaded into a fake window and a stubbed fetch.
- Dev preview page that stubs the `chrome.*` APIs and a stand-in GitHub so the UI can be driven in a normal tab; build script produces an obfuscated, zipped distributable.
- Generated icon: a dependency-free PNG writer in Node draws the tag mark at each size.

## Stack

JavaScript (no framework), Chrome Extensions MV3 (scripting, storage, alarms, notifications, offscreen), HTML/CSS with light and dark themes, Font Awesome, transformers.js / ONNX Runtime Web (optional local model), GitHub REST API and OAuth device flow, Node test runner, javascript-obfuscator.

## Distribution

Chrome extension, loaded unpacked or from the built zip. Not on the Chrome Web Store.

## Public showcase OK?

Screenshots only of the dev preview, with placeholder state. The extension targets Md Abrar Sami's internal planner APIs. The repo's README and dev-preview.html name internal hosts, endpoint names, a project id, a customer project name and a colleague's name, so the repo itself should stay private and should not be linked from public profiles.

## Screenshots

All taken from `dev-preview.html` (the repo's own `chrome.*` stub) served on localhost. For the capture, the stub's project, user and task names were swapped for placeholders ("Sample Project", "Demo User", "Sample tag one"), the zone host label was replaced with "demo zone", and the grid was filled from a five-row placeholder CSV. No real Md Abrar Sami system was contacted.

- `screenshots/popup-add-tag.png`: popup, Add tab (name, start date, duration, rollup, commits, notes).
- `screenshots/popup-grid.png`: popup grid after importing a CSV, with the mini timeline packing tags into lanes.
- `screenshots/app-manage-tags.png`: Settings page, Manage tab listing existing tags with status filters and actions (stub data).
- `screenshots/app-daily-update.png`: Settings page, Daily update tab before setup.

## Portfolio card

- Title: Md Abrar Sami Tag Creator
- Blurb: Chrome MV3 extension that bulk-creates planner tags from CSV, Excel, JSON or GitHub commits, manages existing tags, and drafts a daily update email from the day's commits. 228 unit tests.
- Tags: Chrome Extension, MV3, JavaScript, GitHub API, Automation

## LinkedIn project entry

Title: Md Abrar Sami Tag Creator (Chrome extension)

Associated with Md Abrar Sami

A Chrome extension that turns one-at-a-time planner tag entry into a single bulk run.
- Builds tags in an editable grid from typed rows, CSV / TSV / JSON / Excel files, or GitHub commits, with a mini timeline that packs them into lanes
- Reads .xlsx without a library by walking the zip directory and inflating with the browser's DecompressionStream
- Imports commits from github.com or GitHub Enterprise through the OAuth device flow, with pagination across repos
- Creates, dispatches and completes tags in one run with progress, Stop, per-tag error isolation and resume after the popup closes
- Manage view for existing tags with filters, edits, bulk actions and a calendar
- Scheduled daily update email drafted from the day's commits by Chrome's built-in model, a local transformers.js model, or a rule-based fallback, opened in Gmail
- 228 unit tests with the Node test runner; a chrome.* stub page for UI work; obfuscated build for distribution
Stack: JavaScript, Chrome Extensions MV3, Service Worker, Offscreen API, GitHub REST API, transformers.js, Node test runner

## Naukri project entry

- Title: Md Abrar Sami Tag Creator
- Type: Md Abrar Sami project (Chrome extension)

Chrome MV3 extension that bulk-creates planner tags for Md Abrar Sami's construction planner.
- Import from CSV, TSV, JSON or Excel (zip reader written from scratch), or from GitHub commits via OAuth device flow
- Editable grid with a timeline preview; one run creates, dispatches and completes the tags
- Progress, Stop and resume after the popup closes; per-tag error handling
- Manage view for existing tags with filters and a calendar
- Scheduled daily update email drafted from commits with an on-device model and opened in Gmail
- 228 unit tests with the Node test runner
