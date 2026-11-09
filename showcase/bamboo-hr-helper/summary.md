# BambooHR Timesheet Helper

Chrome extension popup for BambooHR: see and fill missing timesheet days, clock in and out, check leave balances and request time off without opening the BambooHR site.

- Type: Personal (a general BambooHR tool for any company host; no Md Abrar Sami code or references, though built for his own day-to-day use at work)
- Status: v2.2, working; last commit 2026-10-30
- Repo: github.com/mdabrarsami/chrome-exts, folder `Bamboo HR Helper/`
- Dates: 2026-02-21 to 2026-10-30
- Commits: 10 touching this folder (11 in the repo)

## What it does

A Manifest V3 extension that reads the signed-in user's BambooHR timesheet through BambooHR's own JSON endpoints and shows the current pay period as a list of days marked logged or missing. One button fills every missing weekday in a range with the configured workday. A Leave tab shows balances per policy, past and pending requests, and a request form with a per-day breakdown and a duplicate check. The company's BambooHR address is set in an options page, and host access is requested only for that address.

## Highlights

- Pay period switcher, logged/missing filter, progress meter and a toolbar badge counting missing days.
- "Fill missing days" posts clock entries for every unlogged weekday in a chosen range.
- Clock in / clock out with current status and weekly hours.
- Leave balances, request history and a time-off request form with per-day amounts and a duplicate check.
- Sign-in from the popup with email and password, or Google SSO in a small window that the service worker watches and closes once BambooHR is signed in. The pending state lives in `chrome.storage.session`, so it survives the worker being stopped.
- Optional host permissions: nothing is requested at install; Chrome asks for the one configured BambooHR host when settings are saved.
- One shared request and parsing module used by both the popup and the content script.
- System, light, dark and blue themes.

## Stack

JavaScript, HTML, CSS, Chrome Extensions MV3 (service worker, storage, scripting, optional host permissions, action badge).

## Distribution

Chrome extension, loaded unpacked.

## Public showcase OK?

Yes. It works with any company's BambooHR and contains no company data. Screenshots show only the empty settings form and the not-set-up popup.

## Screenshots

Rendered from the extension's own HTML in a normal tab with a minimal `chrome.*` stub (empty storage, no host access), so no BambooHR account was used.

- `screenshots/options.png`: settings page with the BambooHR address field and normal workday.
- `screenshots/popup-not-set-up.png`: the popup's first-run state (dark theme) with Timesheet and Leave tabs, filters and the Fill missing days button. Layout only, no timesheet data.

## Portfolio card

- Title: BambooHR Timesheet Helper
- Blurb: Chrome MV3 popup for BambooHR. Spots and fills missing timesheet days, clocks in and out, shows leave balances and files time-off requests, with SSO sign-in and least-privilege host access.
- Tags: Chrome Extension, MV3, JavaScript, Productivity

## LinkedIn project entry

Title: BambooHR Timesheet Helper (Chrome extension)

A Chrome extension that handles the routine BambooHR jobs from a toolbar popup.
- Shows the current pay period with logged and missing days, a progress meter and a badge counting missing days
- Fills every missing weekday in a chosen range with the configured workday in one click
- Clock in and out with live status and weekly hours
- Leave balances, request history and a time-off request form with per-day breakdown and duplicate check
- Email/password or Google SSO sign-in; the SSO window is tracked by the service worker through session storage so it survives worker shutdown
- Requests host access only for the one configured BambooHR address, at save time
Stack: JavaScript, Chrome Extensions MV3, Service Worker, HTML/CSS

## Naukri project entry

- Title: BambooHR Timesheet Helper
- Type: Personal project (Chrome extension)

Chrome MV3 extension for BambooHR timesheets and leave.
- Pay period view of logged and missing days, with a badge count
- One-click fill of missing days using the configured workday
- Clock in/out, weekly hours, leave balances and time-off requests
- Popup sign-in, including Google SSO handled by the service worker
- Optional host permission for the configured BambooHR address only
