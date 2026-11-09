# Bug Status Updater

Small Chrome extension that adds a status dropdown to a bug record in Md Abrar Sami's internal bug tracker grid.

- Type: Md Abrar Sami work (internal tool)
- Status: v1.0, early utility; single commit, not developed further
- Repo: github.com/mdabrarsami/chrome-exts, folder `bug-status-updator/`
- Dates: 2026-02-21
- Commits: 1 (the repo's initial commit)

## What it does

A content script runs inside the tracker's grid iframe, waits for the expanded group and its bug record row to load, reads the bug's current workflow stage from the row's data, and inserts a dropdown of the tracker's 15 stages into the bug cell. Picking a stage posts the change and shows a check mark on success. The popup has one button that asks the content script to find the row and rebuild the dropdown.

## Highlights

- Manifest V3 content script that runs in all frames and acts only in the target grid iframe.
- Polls for rows the grid renders late instead of assuming they exist at load.
- Reads the current stage from the row's embedded JSON and preselects it.
- Posts the status change from the page context and shows a success mark.
- Popup-to-content-script messaging to re-run detection.

## Stack

JavaScript, HTML, CSS, Chrome Extensions MV3 (content scripts, activeTab, messaging).

## Distribution

Chrome extension, loaded unpacked.

## Public showcase OK?

Text only. It is tied to an internal Md Abrar Sami system, and the source contains the tracker host, endpoint and stage ids. It is small enough to fit better as a line under Md Abrar Sami work than as its own portfolio card.

## Screenshots

None. The only UI is a one-button popup, and the dropdown only appears inside the internal tracker.

## Portfolio card

- Title: Bug Status Updater
- Blurb: Chrome MV3 content script that adds an inline stage dropdown to bug records in Md Abrar Sami's internal tracker grid, so a status change takes one click instead of opening the record.
- Tags: Chrome Extension, MV3, JavaScript, Internal Tools

## LinkedIn project entry

Title: Bug Status Updater (Chrome extension)

Associated with Md Abrar Sami

A small Chrome extension that puts a stage dropdown directly on bug records in the team's internal bug tracker grid.
- Content script that runs across frames and activates only in the tracker's grid iframe
- Waits for late-rendered rows, reads the current stage from row data and preselects it
- Posts the new stage from the page context and confirms success inline
- Popup control to re-detect the row and rebuild the dropdown
Stack: JavaScript, Chrome Extensions MV3

## Naukri project entry

- Title: Bug Status Updater
- Type: Md Abrar Sami project (Chrome extension)

Chrome MV3 extension that adds an inline status dropdown to bug records in an internal bug tracker.
- Content script scoped to the tracker's grid iframe
- Handles late-rendered rows and preselects the current stage
- One-click stage change with inline confirmation
