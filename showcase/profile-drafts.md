# LinkedIn and Naukri drafts

Drafted 2026-11-08 from the repo summaries in this folder. Nothing here has been posted. Each block is ready to paste; titles go in the title field and the rest in the description.

## Naukri: one fix to existing data

- Edit the **NCC** project and set its employment to **Centra Hub Pvt. Ltd.** so it shows under that job next to TSRTC and Benelli.

## LinkedIn: update existing projects

### Paper Games
_replace the description: it now has 86 games, nearby play and voice_

Title: Paper Games: Multiplayer Game PWA

Description:
An installable web app with 86 games for friends and family, built to work on any phone with or without internet.
- 86 games across pen and paper, words, party, puzzles, sports, board games, strategy and cards, each in its own module with rules, UI, art and tests
- Online rooms over Supabase Realtime; friends join with a room code or QR scan
- Nearby play with no internet: phones link directly over the same Wi-Fi or hotspot using WebRTC, paired by QR code
- Pass-the-device mode and computer opponents for single-device play
- Push-to-talk voice over WebRTC with a Cloudflare TURN relay issued by a Supabase edge function
- Fully offline after first load through a Workbox service worker, with in-app update prompts
- About 2,500 Vitest cases, including full simulated games
Stack: React 19, TypeScript, Vite, PWA (Workbox), Supabase Realtime and Edge Functions, WebRTC, Vitest

### Stackline
_replace the description: diagram count is now 35_

Title: Stackline: offline full-stack interview prep app

Description:
A study app for full-stack interviews that works offline once installed. Built with plain HTML, CSS and ES modules, no framework and no build step.
- 739 lessons on 17 tracks: Core Java, Collections, Streams, Spring Boot, design patterns, microservices, system design, JavaScript, TypeScript, React, micro-frontends, CSS, DSA, SQL and HR
- 6,368 interview questions with answers, filters by topic, difficulty and status, plus "know / revise" marks and flashcards
- 305 quiz questions with explanations and a review screen
- 35 interactive diagrams written from scratch, including sorting, BST, the JavaScript event loop, the Spring request flow and a circuit breaker
- Installable PWA with a generated service worker that precaches every file by content hash, so phones always run the deployed version
- Content validator script that catches duplicate ids, broken diagram links and malformed markdown before deploy
- Imports three open-licensed books with attribution preserved
Stack: JavaScript (ES modules), HTML, CSS, Service Worker, Web App Manifest, Node.js scripts, Netlify

## LinkedIn: new projects

Order is a suggestion, strongest first. Add the matching screenshot from `<project>/screenshots/` as project media.

### NetFlux

Title: NetFlux: network interceptor and debugging toolkit for Chrome

A Manifest V3 Chrome extension I built for frontend work: change, mock and inspect browser traffic without touching the server.

- Rules that block, redirect, mock, delay or rewrite headers, map URLs to local files, inject scripts, or bridge a production page to a local Vite dev server for hot reload inside the real app
- Two-layer engine: declarativeNetRequest session rules at the network level, fetch/XHR overrides in a content script, and a trie plus regex matcher for logging
- Network log with optional chrome.debugger capture for bodies, timing and initiator stacks, a DevTools-style filter language, HAR import/export and copy-as cURL, fetch, axios, Python, Go or PowerShell
- CORS engine, API client with environments, rrweb session replay, OCR, screen capture and a TOTP authenticator
- Meeting auto-recorder with adapters for 12 platforms and a generic WebRTC detector
- On-device AI assistant (Chrome Prompt API) that explains requests and drafts rules
- Signed-license public build (ECDSA P-256), three build flavors from one command, about 530 Vitest cases

Stack: TypeScript, React 18, Vite, Chrome MV3 APIs, Monaco, rrweb, tesseract.js, pdf.js, Fabric.js, Vitest

### Git Advanced

**Title:** Git Advanced: a desktop Git client for Windows

A Windows Git client I built that drives the Git you already have installed and gives its advanced features real screens instead of sending you to a terminal.

- Stage and unstage by file, hunk or single line, with split and inline diffs
- Interactive rebase as a drag-and-drop list and a three-pane conflict resolver
- Previews before merge, rebase, cherry-pick and revert; one-click pull-then-push that stops on conflict
- Screens for worktrees, submodules, bisect, reflog, Git LFS, hooks, sparse checkout and config across local, global and system scope
- GitHub, GitLab, Bitbucket and Azure DevOps support for pull requests (create, review, merge), issues, releases and pipelines, with encrypted token storage and GitHub device sign-in
- Windows Explorer right-click menu that opens a repository on the chosen screen
- Typed IPC contract of 183 channels validated with Zod; the Git engine is independent of Electron
- 407 automated tests, including integration and Playwright end-to-end suites that run against real Git repositories
- NSIS installer built with electron-builder

Stack: Electron, TypeScript, React 19, Zustand, Radix UI, xterm.js, Zod, node:sqlite, Vitest, Playwright, electron-builder

### Enclave

**Title:** Enclave: serverless LAN messenger (Tauri, Rust, React)

A desktop messenger I built for people on the same network, in the spirit of IP Messenger, with no server and no accounts.

- Peer discovery over UDP broadcast with virtual-adapter filtering, and direct TCP connections with length-prefixed framing
- Offline-first delivery: messages are stored in SQLite first and sent by an outbox worker with backoff, with delivery and read receipts
- End-to-end encryption with per-install X25519 keys (libsodium) and no plaintext fallback
- Chunked file transfer with SHA-256 per chunk and per file, resumable across restarts, with filename sanitising
- Groups, replies, reactions, mentions, polls, voice memos, scheduled messages, full-text search and a media viewer
- Tray, autostart, notifications, floating chat bubbles and rebindable shortcuts
- Rust backend with 75 Tauri commands and versioned migrations; React frontend with Zustand and virtualized lists
- 112 Rust tests and 45 frontend tests, plus a browser harness with a mocked backend for UI work
- Windows installers (NSIS and MSI) from the Tauri bundler

Stack: Tauri 2, Rust, Tokio, SQLite (rusqlite, FTS5), libsodium, React 18, TypeScript, Tailwind CSS, Zustand, Vitest

### GitInsight

Title: GitInsight: Git blame, history and analytics for VS Code

A VS Code extension I wrote to see who changed what, and why, without leaving the editor.

- Inline blame and blame hovers at the cursor, plus file, line and repository history
- Lane-based commit graph webview with ref, author and date filters and a details drawer
- Repository dashboard: 12-week activity, change hotspots, contributors, branches and remotes
- Sidebar views for repositories, commits, branches, contributors, stashes and worktrees; safe fetch, pull, push and checkout
- Talks to the local git executable through a typed GitClient facade over porcelain parsers; no external services, no telemetry
- LRU blame cache invalidated on HEAD change and save, so hovers never spawn git
- 33 commands, 7 views, 18 settings; packaged as a VSIX with esbuild and vsce

Stack: TypeScript, VS Code Extension API, Git CLI, esbuild, vsce

### Fuxzzy

Title: Fuxzzy: native code editor for Windows 11 in C++

A Notepad-style text and code editor I wrote from scratch on Win32, Direct2D and DirectWrite, with no third-party libraries.

- Opens files of any size: files over 64 MB are memory-mapped and edited through a piece table; a 1 GB log takes about 50 MB of private memory
- Newline index built in parallel with SSE2 (about 3 seconds for a 9.7 million line file); files that grow on disk are followed like tail -f
- Syntax highlighting for about 30 languages, multiple cursors, split editor, find in all tabs and a linear-time regex engine that cannot hang
- Live Markdown and LaTeX preview with a built-in TeX-style math typesetter
- Session restore with journaled unsaved edits, and atomic saves through ReplaceFile
- Per-user installer without admin rights, Open with and Default apps registration, and a shell extension in a sparse MSIX package for the Windows 11 context menu
- Single C++ test program covering the piece table, regex, syntax, live reload and preview

Stack: C++20, Win32, Direct2D, DirectWrite, COM, MSIX, MSVC

### Remote Transfer Manager

**Title:** Remote Transfer Manager: file transfer and remote PowerShell for Windows servers

A Windows desktop client I built for moving files to and running commands on remote Windows servers, using only the SMB and WinRM services they already run.

- Two-pane explorer (local and remote) with history, breadcrumbs, search, rename, delete, copy/cut/paste and drag and drop, including drops from Windows Explorer
- Streaming transfer queue with real byte counts, speed and ETA, pause/cancel/retry and conflict handling; remote-to-remote copies run on the server over WinRM
- PowerShell Terminal tab over a persistent WinRM session with streaming output, exit codes and cancellation
- Seven-step connection test that pinpoints whether network, SMB, authentication, shares or WinRM is the problem
- Client-only by design: no agent, no firewall, registry, share or ACL changes on the server
- Passwords stored in Windows Credential Manager and passed on stdin, never on the command line; tests assert they never reach the database or logs
- 58 validated IPC channels, sandboxed renderer, unit tests plus an in-Electron integration suite with a 320 MB byte-exact transfer
- NSIS installer built with electron-builder

Stack: Electron, TypeScript, React 19, node:sqlite, Windows Credential Manager, SMB, WinRM/PowerShell, Vitest, electron-builder

### DentOS

Title: DentOS: multi-tenant dental clinic management platform

Description:
Practice management software for Indian dental clinics, built as a NestJS modular monolith with a Next.js front end. Tenant isolation and audit are enforced in the database, not only in application code.
- 36 API controllers and about 290 routes documented in Swagger; 57 pages in the Next.js app
- Postgres row-level security with a non-superuser app role and per-request tenant context, backed by an e2e isolation test
- JWT with rotating refresh tokens, Argon2id, TOTP MFA, scoped API keys and session revoke
- RBAC permission bitmask and an append-only audit log enforced by DB triggers
- Clinical modules: patients, appointments, odontogram, case sheets, treatment plans, prescriptions with allergy checks
- GST billing engine, credit notes, inventory and lab orders
- Platform layer: custom objects and fields, rules engine with versioning, workflows, report builder, multi-page print designer, Excel import
- Database-per-company provisioning with Postgres and SQL Server dialect drivers
Stack: NestJS, TypeScript, PostgreSQL, SQL Server, Next.js, React, Tailwind CSS, TanStack Query, Docker, Jest

### Torrents

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

### hirequarry

Title: hirequarry: AI-assisted job search from the command line

An open-source CLI and local web app I built to automate everything around a job application except the final click.

- Pulls postings from Greenhouse, Lever and Ashby career boards, Remotive, Adzuna and optionally LinkedIn, Indeed and Glassdoor via python-jobspy, and merges duplicates across sources
- Free local filter on title, location, years asked for, skills and age, then an AI fit score from 0 to 100 with matched skills and gaps
- Works with 13 provider presets (Claude, OpenAI, Gemini, Groq, OpenRouter and others) or fully local models through Ollama, LM Studio or llama.cpp
- Tailors a resume (Markdown, HTML, PDF) and cover note per job, with prompts that forbid inventing employers, dates or skills
- Local web app bound to 127.0.0.1 with a per-run token; resume and job data stay on the machine except what is sent to the chosen AI provider
- 17 commands, 60 Vitest cases including end-to-end tests, four runtime dependencies

Stack: TypeScript, Node.js, commander, unpdf, mammoth, Vitest, plain HTML/CSS/JS

## Naukri: new projects

Naukri has only work projects today. Set "Client" to the value in each block and choose "Personal project" or "Offsite" as fits; tag them to no employment (or to Md Abrar Sami only if you prefer, since they were built during that time).

### ASTools

Title: ASTools - Browser Utility Toolkit PWA
Client/type: Personal project
Description:
Installable PWA with 196 browser tools, live at tools.abrlabs.in.
- 181 general tools in 19 categories plus 15 fitness tools
- PDF, image, video, audio, developer, security and finance tools that run in the browser
- WebRTC file transfer and chat between nearby devices
- Lazy-loaded tool screens to keep the first load small
- Shared platform layer over browser APIs for iOS and Android consistency
- 1,149 Vitest tests across 83 files
- Netlify Functions for the CORS proxy and mock API
- Tech: React, TypeScript, Vite, Workbox, Dexie, WebRTC, Netlify, Supabase

### Stackline

Title: Stackline - Offline Interview Prep PWA
Client/type: Personal project
Description:
Offline-first study app for full-stack interviews, live at dsa-book.netlify.app.
- 739 lessons across 17 tracks (Java, Spring Boot, microservices, system design, JavaScript, TypeScript, React, CSS, DSA, SQL)
- 6,368 interview Q&As with topic, difficulty and status filters and a flashcard mode
- 305 quiz questions with explanations
- 35 interactive diagrams built in vanilla JavaScript
- Installable PWA with a generated service worker for full offline use
- Content validator script run before each deploy
- Tech: JavaScript (ES modules), HTML, CSS, Service Worker, Node.js, Netlify

### Hospix

- Title: Hospix: Hospital Management System
- Client/type: Personal product
- Description:
Hospital management web app for Indian clinics with offline licensing.
- Patients, medical records, attachments and GST receipts with CGST/SGST split
- Billing totals computed on the server from line items
- Receipt print designer for A4, A5 and thermal printers
- Role and permission matrix enforced in a NestJS API
- Ed25519-signed licence with seat, record and feature limits
- 160 Jest tests, including licence tampering and race-condition tests
- Docker Compose and Windows installer deployment
Stack: React, TypeScript, NestJS, SQLite, Drizzle ORM, Docker

### Paper Games

- Title: Paper Games: Multiplayer Game PWA
- Client/type: Personal project
- Description:
Installable multiplayer game app with 86 games.
- Online rooms over Supabase Realtime with room codes and QR join
- Nearby play over local Wi-Fi using WebRTC, no internet needed
- Pass-the-device and computer opponent modes
- Push-to-talk voice chat with a TURN relay
- Works offline through a service worker
- About 2,500 Vitest cases across 84 test files
Stack: React, TypeScript, Vite, Supabase, WebRTC, Vitest

### Drive Explorer

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

### Eva Dental

- Title: Eva Dental Care: Clinic Website
- Client/type: Client project (Eva Dental & Maxillofacial Care, Hyderabad)
- Description:
Live website for a dental clinic at evadental.in.
- Core pages and treatment landing pages for local search
- JSON-LD structured data, Open Graph tags, sitemap
- Appointment form on Netlify Forms with date picker
- WhatsApp, call and booking shortcuts on mobile
- Google Tag Manager and reviews widget
Stack: HTML, Tailwind CSS, JavaScript, Netlify

### NetFlux

- Title: NetFlux - Network Interceptor Chrome Extension
- Type: Personal project

Manifest V3 Chrome extension for frontend developers to rewrite, mock and inspect network traffic.
- Rule engine on declarativeNetRequest plus fetch/XHR overrides: block, redirect, mock, delay, header edits, map-local and a Vite dev server bridge
- Network log with chrome.debugger capture, DevTools-style filters, HAR export and copy-as-code in 8 formats
- CORS engine, API client, session replay, OCR, screen capture, TOTP and a meeting recorder for 12 platforms
- ECDSA-signed license build and about 530 Vitest tests
- TypeScript, React 18, Vite

### Git Advanced

- **Title:** Git Advanced
- **Type:** Personal project (Windows desktop application)
- **Description:**

Windows desktop Git client built with Electron, React and TypeScript that drives the installed Git executable.
- Line-level staging, split/inline diffs, drag-and-drop interactive rebase and a three-pane conflict resolver
- Worktrees, submodules, bisect, reflog, LFS, hooks and config editor
- Pull requests, issues, releases and pipelines for GitHub, GitLab, Bitbucket and Azure DevOps
- Windows Explorer context menu installed by the NSIS installer
- 183 Zod-validated IPC channels; 407 unit, integration and Playwright tests against real repositories

### Enclave

- **Title:** Enclave (LAN Messenger)
- **Type:** Personal project (desktop application)
- **Description:**

Serverless LAN messenger built with Tauri 2, Rust and React.
- UDP peer discovery and direct TCP transport, no server or accounts
- Offline-first delivery from SQLite with an outbox, retries and read receipts
- X25519 end-to-end encryption via libsodium
- Resumable, SHA-256 verified chunked file transfer
- Groups, polls, voice memos, scheduled messages and full-text search
- 75 Tauri commands; 112 Rust and 45 frontend tests; NSIS and MSI installers

### DentOS

Title: DentOS - Dental Clinic Management Platform
Client/type: Personal project (SaaS product, in development)
Description:
Multi-tenant clinic management system for Indian dental practices.
- NestJS API with 36 controllers and about 290 Swagger-documented routes
- Next.js 14 front end with 57 pages
- Postgres row-level security for tenant isolation, verified by an e2e test
- JWT, Argon2id, TOTP MFA, RBAC bitmask, DB-enforced immutable audit log
- Patients, appointments, odontogram, treatment plans, prescriptions, GST billing, inventory, lab
- Rules engine, workflows, report builder and print designer
- Tech: NestJS, TypeScript, PostgreSQL, SQL Server, Next.js, Tailwind, Docker

### GitInsight

- Title: GitInsight - Git Intelligence Extension for VS Code
- Type: Personal project

VS Code extension that surfaces Git context inside the editor.
- Inline blame, blame hovers, file/line/repository history and a lane-based commit graph
- Repository dashboard with activity, hotspots and contributors; sidebar views for branches, stashes and worktrees
- GitClient facade over the local Git CLI with porcelain parsers and an LRU blame cache
- 33 commands, 7 views, 18 settings; CSP-locked webviews
- TypeScript, esbuild, packaged as a VSIX

### Fuxzzy

- Title: Fuxzzy - Native Text and Code Editor for Windows
- Type: Personal project

Windows 11 desktop editor in C++ with no third-party dependencies.
- Memory-mapped piece table and parallel SSE2 line indexing for multi-GB files
- Syntax highlighting for about 30 languages, multi-cursor editing, split view, linear-time regex search
- Markdown and LaTeX preview with a custom math typesetter
- Session restore and crash-safe journaling of unsaved edits
- No-admin installer with file associations and a Windows 11 context menu shell extension (sparse MSIX)
- C++20, Win32, Direct2D, DirectWrite
