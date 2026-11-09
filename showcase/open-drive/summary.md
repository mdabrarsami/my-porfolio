# Drive Explorer (open-drive)

- **One-line description:** A Windows desktop app that manages Google Drive the way File Explorer manages local files.
- **Type:** Personal
- **Status:** Working v1.0.0 with a built Windows installer; not yet publicly released. A static landing page with privacy and terms pages lives in `site/` (Netlify config included), but no deployed URL is recorded in the repo.
- **URL:** none recorded
- **Repo:** github.com/mdabrarsami/open-drive
- **Dates:** 2026-08-31 to 2026-10-08
- **Commits:** 64

## What it does

Drive Explorer is an Electron app that gives Google Drive a native Explorer window: navigation pane, breadcrumbs, details/list/large-icon views, multi-select, cut/copy/paste, drag and drop, Explorer keyboard shortcuts and a transfer queue, all backed by the official Drive API v3. It is not a wrapper around the Drive website. Uploads run in a persistent, resumable queue in the main process, folder metadata is cached in SQLite so visited folders open offline, and the renderer never sees a token.

## Highlights

- Upload engine in the main process: parallel files (4 by default, 16 for small files), Google resumable protocol in 16 MB chunks, queue persisted to disk so a crash, reload or network drop resumes from the byte Google confirms.
- Measured performance work with a loopback benchmark (`npm run bench:upload`): one 512 MB upload went from 153 MB/s to 309 MB/s and small-file throughput from 38.6 to 88.1 files/s.
- Segmented downloads that split large files across parallel ranged requests, with a single-stream fallback.
- Explorer behaviour: paste files copied in Windows Explorer straight into Drive, Alt+drag files out, Replace/Keep both/Skip conflict prompts, undo for move, rename and trash.
- New folder accepts brace-expansion patterns such as `{Sales,HR}/{Reports,Archive}` or `Week {1..12}`, previews the tree and reuses existing folders.
- Security: OAuth 2.0 with PKCE and loopback redirect in the system browser, refresh tokens encrypted with DPAPI via `safeStorage`, sandboxed renderer with strict CSP, every IPC input validated in the main process.
- Typed IPC contract of 74 invoke channels and 9 push events, shared by main and renderer from one definition.
- 704 passing tests across unit, integration (scripted Drive API, real SQLite) and renderer (jsdom) suites, none needing a Google account or network.

## Stack

Electron 44, TypeScript, React 19, Zustand, TanStack Query and Virtual, electron-vite, Vite 7, googleapis (Drive API v3), node-sqlite3-wasm, Vitest, Testing Library, electron-builder.

## Distribution

- **Installer type:** NSIS, per-user (no admin), x64, changeable install directory, Start Menu and desktop shortcuts, uninstaller.
- **Existing installer:** `C:\Users\Abrar\Documents\GitHub\open-drive\release\DriveExplorer-Setup-1.0.0.exe`, 112,693,932 bytes (about 107.5 MB), built 2026-10-08, matches the latest commit.
- **Important:** that existing build was made with `npm run dist:bundled`; `release/win-unpacked/resources/credentials.bin` is present, so it carries Abrar's own Google OAuth client sealed inside. The README notes the key travels with the app and can be recovered. For a public GitHub release, rebuild with `npm run dist` (no credentials) and let users add their own `.env`, or accept that every install shares one OAuth client capped at 100 users until Google verification.
- **Code signing:** unsigned; SmartScreen warns on first run.
- **Auto-update:** not active. `electron-updater` is a dependency and `latest.yml` is generated, but `publish.url` is a placeholder (`example.invalid`) and no updater code is wired in the main process.

## Screenshots

Captured from the real renderer served by Vite with the repo's own test stub of the preload bridge (`tests/mocks/drive-api.ts`) and made-up demo files. No Google account was used.

- `screenshots/explorer-details.png`: My Drive in Details view with navigation pane, projects, shared drives and storage meter.
- `screenshots/explorer-dark.png`: The same view in the dark theme.
- `screenshots/explorer-large-icons.png`: Large Icons view with per-type file icons.
- `screenshots/sign-in.png`: First-run screen to connect Google Drive through the system browser.
- `screenshots/first-run-setup.png`: Setup screen shown when no OAuth credentials are configured, naming the exact `.env` path.

## Portfolio card

- **Title:** Drive Explorer
- **Blurb:** A Windows desktop app that runs Google Drive like File Explorer: views, clipboard, drag and drop, resumable parallel uploads, offline cache and DPAPI-encrypted tokens.
- **Tags:** Electron, React, TypeScript, Google Drive API, SQLite

## LinkedIn project entry

**Title:** Drive Explorer: Google Drive in a Windows Explorer window

A Windows desktop app I built to manage Google Drive the way File Explorer manages local files, on the official Drive API v3.

- Explorer-style window: navigation pane, breadcrumbs, details/list/icon views, multi-select, cut/copy/paste, drag and drop and Explorer shortcuts
- Upload engine in the main process with parallel files, Google's resumable protocol in chunks and a queue persisted to disk, so a crash or network drop resumes from the last confirmed byte
- Benchmarked and tuned the uploader: a 512 MB file went from 153 to 309 MB/s and small files from 38.6 to 88.1 per second
- Segmented parallel downloads, conflict prompts, undo for move/rename/trash, and folder-tree creation from patterns like {Sales,HR}/{Reports,Archive}
- Offline browsing of visited folders from a SQLite cache, with incremental sync through the Drive Changes API
- OAuth 2.0 with PKCE in the system browser, DPAPI-encrypted refresh tokens, sandboxed renderer with strict CSP and validated IPC
- 704 automated tests (unit, integration and renderer) that need no Google account or network
- Packaged as a per-user NSIS installer with electron-builder

Stack: Electron, TypeScript, React 19, Zustand, TanStack Query/Virtual, googleapis, SQLite (WASM), Vitest, electron-builder

## Naukri project entry

- **Title:** Drive Explorer
- **Type:** Personal project (Windows desktop application)
- **Description:**

Windows desktop app that manages Google Drive like File Explorer, built with Electron, React and TypeScript on the Drive API v3.
- Explorer-style UI with views, multi-select, clipboard, drag and drop and keyboard shortcuts
- Resumable, parallel, chunked upload engine with a persisted queue; upload speed for a 512 MB file doubled to 309 MB/s after profiling
- Parallel ranged downloads, conflict handling and undo
- SQLite metadata cache for offline browsing and incremental sync
- OAuth 2.0 with PKCE, DPAPI-encrypted tokens, sandboxed renderer and validated IPC
- 704 automated tests; NSIS installer via electron-builder
