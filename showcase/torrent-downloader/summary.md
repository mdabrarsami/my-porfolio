# Torrents

- Name: Torrents (repo: torrent-downloader)
- One-line description: Serverless torrent client that runs as an installable web app, built for iPhone and iPad first.
- Type: Personal
- Status: Early (initial version)
- Live URL: Not found in the repo (Netlify config is present)
- Repo: github.com/mdabrarsami/torrent-downloader (likely private)
- Dates: 2026-10-30 (both commits on the same day)
- Commits: 2

## What it does

Torrents is a BitTorrent client that lives entirely in the browser. You add a magnet link, info hash or .torrent file, pick which files to download, and stream video or audio while it downloads. Pieces are written straight into real files in the Origin Private File System, so finished downloads can be handed to the iOS share sheet without copying them into memory. There is no server; the engine, storage and streaming all run on the device.

## Highlights

- WebTorrent 3 engine with a custom chunk store on the Origin Private File System; a dedicated worker owns every write through `FileSystemSyncAccessHandle`
- Streams video and audio during download through a service worker, fetching pieces in playback order
- Resumes after reloads without re-hashing: bitfields are saved every 10 seconds and when the app is hidden
- Per-file selection, pause/resume/remove, speed limits, a connection cap and seeding after completion
- Creates torrents from files on the device and shares the magnet link
- PWA extras: offline support, `magnet:` protocol handler, Android share target, app badge, completion notifications, screen wake lock
- iOS-style UI with large titles, grouped lists, bottom sheets, safe areas and light and dark mode
- About 2,100 lines of TypeScript, no backend

## Stack

Preact, TypeScript, Vite, WebTorrent 3, Origin Private File System, Web Workers, Service Workers, IndexedDB (idb-keyval), Font Awesome, Netlify

## Distribution

Progressive Web App, deployed as a static site. Installs to the home screen on iOS, Android and desktop.

## Screenshots

Captured on the local dev server at phone size (390 px). No torrents were added, so the transfer list is empty.

- `screenshots/01-mobile-transfers.png`: Transfers screen, empty state with the Add Torrent button
- `screenshots/02-mobile-add-torrent.png`: Add Torrent bottom sheet with magnet input, paste, open file and create torrent options
- `screenshots/03-mobile-settings.png`: Settings in light mode: bandwidth limits, behaviour toggles, trackers
- `screenshots/04-mobile-settings-dark.png`: Settings in dark mode

## Portfolio card copy

- Title: Torrents
- Blurb: A torrent client that runs entirely in the browser as an iPhone-first PWA. Downloads into the Origin Private File System and streams video while it downloads. No server.
- Tags: PWA, WebTorrent, Preact, OPFS, TypeScript

## LinkedIn project entry

Title: Torrents: Serverless Torrent PWA

Description:
A torrent client that runs entirely on the device as an installable web app, designed for iPhone and iPad first.
- WebTorrent 3 engine with a custom chunk store on the Origin Private File System, written from a dedicated worker through FileSystemSyncAccessHandle
- Pieces land directly in the real files, so finished downloads go to the iOS share sheet without copying into memory
- Streams video and audio during download through a service worker
- Resumes after reloads without re-hashing by saving bitfields every 10 seconds and when the app is hidden
- File selection, pause and resume, speed limits, seeding and torrent creation from local files
- magnet: protocol handler, Android share target, badges, notifications and screen wake lock
- iOS-style interface with light and dark mode
Stack: Preact, TypeScript, Vite, WebTorrent, OPFS, Service Workers, IndexedDB

## Naukri project entry

- Title: Torrents: Serverless Torrent PWA
- Client/type: Personal project
- Description:
Browser-only torrent client built as an iPhone-first PWA.
- WebTorrent engine with a custom Origin Private File System chunk store and write worker
- Streams media while downloading through a service worker
- Resumes without re-hashing using saved bitfields
- File selection, pause and resume, speed limits, seeding
- Protocol handler, share target, notifications and offline support
Stack: Preact, TypeScript, Vite, WebTorrent, OPFS, Service Workers
