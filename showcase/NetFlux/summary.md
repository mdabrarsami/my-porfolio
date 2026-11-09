# NetFlux

Chrome extension for frontend developers that intercepts, rewrites and logs browser network traffic, with a set of debugging and capture tools built in.

- Type: Personal project
- Status: active, version 1.0.0, three build flavors (dev, public dev, licensed public)
- URL: none (not on the Chrome Web Store)
- Repo: github.com/mdabrarsami/NetFlux
- Dates: 2026-06-04 to 2026-11-02
- Commits: 125 on origin/main (124 in the local clone, which is one README commit behind)

## What it does

NetFlux is a Manifest V3 extension in the same space as Requestly. You write rules that block, redirect, mock, delay or rewrite requests, map a URL to a local file, inject scripts, or bridge a production page to a local Vite dev server, and it applies them per site without touching any server. Around that sits a DevTools-style network log, a CORS engine, an API client, session replay, a meeting recorder, OCR, screen capture and a TOTP authenticator.

## Highlights

- Rule engine split across two layers: `declarativeNetRequest` session rules for block, redirect, header and CORS changes at the network level, and content-script `fetch`/XHR overrides for mock, delay and map-local; a trie plus regex matcher drives logging and toasts.
- Vite Dev Bridge rule loads local Vite modules into a live production page, so local components hot-reload inside the real app. Redirects that fail fall back to the original request and reload only the affected frame.
- Network log with an optional `chrome.debugger` capture engine for bodies, precise timing and JS initiator stacks; DevTools-style filter language (`method:`, `status-code:`, `larger-than:`, `is:error`), HAR/JSON/CSV export and import, and "copy as" cURL, fetch, axios, Python, Go and PowerShell.
- Meeting auto-recorder with adapters for 12 platforms (Meet, Teams, Zoom, Webex, Slack, Jitsi, Whereby, GoTo, RingCentral, Zoho, Discord) plus a generic WebRTC detector that scores each detection 0 to 100.
- AI assistant on Chrome's built-in on-device model (Prompt API) that explains a captured request or drafts a rule from plain English.
- License-gated public build: ECDSA P-256 signed license files verified against an embedded public key, with per-feature permission blocks and usage limits.
- One `npm run build` type-checks once, then builds three flavors in parallel; 54 Vitest test files with about 530 cases.
- About 43,000 lines of TypeScript and React.

## Stack

TypeScript, React 18, Vite, vite-plugin-web-extension, Chrome MV3 APIs (declarativeNetRequest, webRequest, debugger, offscreen, tabCapture), @tanstack/react-table, Monaco editor, rrweb, tesseract.js, pdf.js, Fabric.js, jsQR, IndexedDB (idb), Vitest, jsdom.

## Distribution

- Chrome extension, loaded unpacked from `dist/dev`, `dist/public-dev` or `dist/public` (each about 26 MB, mostly OCR language data and Monaco).
- Packed extension: `C:\Users\Abrar\Documents\GitHub\NetFlux\dist.crx`, 1.5 MB (1,576,270 bytes), dated 2026-06-18. It predates most features and should be rebuilt before sharing.
- A setup bundle for sharing (Word guide, walkthrough MP4, annotated screenshots, sample rules JSON) is in `netflux-setup/`.
- No Windows installer.

## Screenshots

In `screenshots/`:

- `dashboard-rules.png`: the dashboard with the full feature rail (Rules, Enabled sites, CORS, Network log, API client, Session replay, Screen capture, Meeting recorder, OCR, Authenticator, AI assistant). Rendered from the built `dist/dev` page with a stubbed `chrome.*` API, so the rule list is empty.
- `popup.png`: the toolbar popup with the per-site toggle, authenticator, meeting recorder, session recording and CORS switches. Same rendering method.
- `cors-engine.png`: the CORS engine settings screen. Same rendering method.
- `rule-editor-vite-bridge.png`: the rule editor on the Vite dev server action, copied from the repo's own setup guide images (has numbered callouts).

## Portfolio card

- Title: NetFlux
- Blurb: Chrome extension for frontend developers: rule-based request rewriting, mocks and local Vite bridging, a DevTools-style network log, CORS engine, session replay and meeting recorder.
- Tags: Chrome Extension, TypeScript, React, Manifest V3, Vite

## LinkedIn project entry

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

## Naukri project entry

- Title: NetFlux - Network Interceptor Chrome Extension
- Type: Personal project

Manifest V3 Chrome extension for frontend developers to rewrite, mock and inspect network traffic.
- Rule engine on declarativeNetRequest plus fetch/XHR overrides: block, redirect, mock, delay, header edits, map-local and a Vite dev server bridge
- Network log with chrome.debugger capture, DevTools-style filters, HAR export and copy-as-code in 8 formats
- CORS engine, API client, session replay, OCR, screen capture, TOTP and a meeting recorder for 12 platforms
- ECDSA-signed license build and about 530 Vitest tests
- TypeScript, React 18, Vite

## Notes

- The repo has `keys/`, `dist.pem` and `licenses/*.nflic` on disk (all gitignored). None were opened or copied.
- The setup guide images show Md Abrar Sami internal hosts. Those images were not used, except the Vite rule editor shot, which only shows `localhost:5173`.
