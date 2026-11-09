# Md Abrar Sami Beta Sidebar

Chrome extension that injects a collapsible, searchable project list into Md Abrar Sami beta pages.

- Type: Md Abrar Sami work (internal tool)
- Status: v1.0, early utility; single commit, not developed further
- Repo: github.com/mdabrarsami/chrome-exts, folder `mdabrarsami-sidebar/`
- Dates: 2026-02-21
- Commits: 1 (the repo's initial commit)

## What it does

On Md Abrar Sami beta pages a content script adds a 300px sidebar in an iframe, plus a toggle button that slides it in and out. The sidebar asks for data, the background service worker reads the session cookies and calls the projects API, and the result comes back as a list of projects with thumbnails and links that filters as you type. A refresh button reloads the list.

## Highlights

- Sidebar rendered in an extension-page iframe so its styles stay separate from the host page.
- Three-way messaging: sidebar iframe to page with `postMessage`, page to service worker with `chrome.runtime`, and back.
- Service worker uses the `cookies` permission to call the API with the user's existing session.
- Live search over the project list, refresh, and an animated slide-in toggle.
- Guards against sending messages after the page unloads.

## Stack

JavaScript, HTML, CSS, Chrome Extensions MV3 (service worker, content scripts, cookies, web-accessible resources).

## Distribution

Chrome extension, loaded unpacked.

## Public showcase OK?

Text only. It only works against Md Abrar Sami's beta environment, and the source names internal hosts and an API path. Like Bug Status Updater, it fits better as a line under Md Abrar Sami work than as its own card.

## Screenshots

None. Without a signed-in beta session the sidebar only shows "Loading...", and with one it would show internal project names.

## Portfolio card

- Title: Md Abrar Sami Beta Sidebar
- Blurb: Chrome MV3 extension that injects a collapsible, searchable project list into Md Abrar Sami beta pages, fetched by the service worker with the user's existing session.
- Tags: Chrome Extension, MV3, JavaScript, Internal Tools

## LinkedIn project entry

Title: Md Abrar Sami Project Sidebar (Chrome extension)

Associated with Md Abrar Sami

A Chrome extension that adds a quick project switcher to Md Abrar Sami's beta environment.
- Injects a collapsible sidebar as an isolated iframe with a slide-in toggle
- Service worker fetches the user's projects using the existing browser session
- Message passing between the sidebar iframe, the page and the service worker
- Live search, thumbnails and direct links to each project
Stack: JavaScript, Chrome Extensions MV3, HTML/CSS

## Naukri project entry

- Title: Md Abrar Sami Project Sidebar
- Type: Md Abrar Sami project (Chrome extension)

Chrome MV3 extension that adds a searchable project list sidebar to Md Abrar Sami beta pages.
- Isolated iframe sidebar with a slide-in toggle
- Service worker fetches projects with the existing session
- Live search and direct project links
