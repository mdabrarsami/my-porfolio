# ASTools (go-photos-web)

- One-line description: Installable PWA with 196 browser tools (image, PDF, video, audio, developer, security, design, finance, fitness) that run on the device and work offline.
- Type: personal
- Status: live, actively updated (version 2.0.1)
- Live URL: https://tools.abrlabs.in
- Repo: github.com/mdabrarsami/go-photos-web (private at time of writing)
- Dates: 2026-02-21 to 2026-11-02 (first to last commit)
- Commits: 261

## What it does

ASTools puts 196 everyday and developer tools into one installable web app: resize and convert images, merge and redact PDFs, run SQL in the browser, decode JWTs, generate TOTP codes, send files to a nearby phone, plan workouts and more. Almost all processing happens in the browser, so files stay on the device, and the service worker keeps the app usable offline. It started as a photo and video archiving PWA called Go Photos, which is why the repo keeps that name.

## Highlights

- 196 tools: 181 general tools in 19 categories plus 15 fitness tools, all driven by one typed registry (`src/data/tools.ts`)
- Every tool screen is lazy-loaded, so heavy libraries (pdfjs, tesseract.js OCR, Monaco, sql.js) download only when their tool opens
- 83 Vitest files with 1,149 passing tests covering the archive engine, codecs, collage detection, PDF helpers and converters
- Nearby file transfer and chat over WebRTC, with QR pairing or a Supabase Realtime room for same-Wi-Fi discovery
- Platform layer (`src/platform/`, about 30 modules) wraps share, clipboard, haptics, file system, camera, notifications and the service worker so browser quirks are handled in one place
- URL-based navigation (`/t/<tool-id>`), command palette, pinned and recent tools, per-screen scroll memory and iOS edge-swipe back in the installed app
- Netlify Functions and an Edge Function handle the few server needs (CORS proxy for the API client, mock API server, media fetch); cache headers are tuned so installed copies always pick up new builds
- Web workers handle archive and media processing off the main thread to stay within iOS memory limits

## Stack

React 18, TypeScript, Vite 5, vite-plugin-pwa (Workbox), Dexie (IndexedDB), zustand, pdf-lib, pdfjs-dist, jsPDF, tesseract.js, sql.js, Monaco Editor, OpenPGP.js, zip.js, Web Workers, WebRTC, Netlify Functions and Edge Functions, Supabase (Postgres, Realtime), Vitest.

## Distribution

Web app and installable PWA (iOS, Android, desktop), works offline. Hosted on Netlify.

## Screenshots

- `screenshots/01-home.png`: home screen with sidebar categories, pinned tools, workspaces and recently added tools (shows the "196 tools, 100% on-device" footer)
- `screenshots/02-json-tree.png`: JSON Tree tool with the Monaco editor and a searchable tree view
- `screenshots/03-gym-anatomy.png`: Gym Anatomy Pro with the interactive muscle map
- `screenshots/04-mobile-home.png`: mobile home screen

## Portfolio card copy

- Title: ASTools
- Blurb: 196 browser tools in one installable PWA: PDF, image, video, developer, security and fitness. Files stay on your device, and 1,149 tests back the core libraries.
- Tags: React, TypeScript, PWA, WebRTC, Netlify

## LinkedIn project entry

Title: ASTools: 196 on-device tools in one PWA

Description:
An installable web app that bundles 196 tools for images, PDFs, video, audio, development, security, design, finance and fitness. Processing happens in the browser, so files stay on the device and the app works offline.
- 181 general tools in 19 categories plus 15 fitness tools, driven by one typed registry
- PDF suite (merge, split, compress, redact, OCR, PDF to Word), image tools (HEIC conversion, background removal, EXIF), and developer tools including a Monaco JS editor and an in-browser SQL playground
- Nearby file transfer and chat over WebRTC, with QR pairing or Supabase Realtime for same-Wi-Fi discovery
- Every tool is lazy-loaded, so heavy libraries like tesseract.js and pdfjs only download when needed
- A platform layer wraps browser APIs (share, haptics, file system, camera, service worker) so iOS and Android quirks are fixed in one place
- 1,149 Vitest tests across 83 files
- Netlify Functions provide a CORS proxy and mock API server; cache headers make installed copies pick up new builds
Stack: React, TypeScript, Vite, Workbox, IndexedDB (Dexie), Web Workers, WebRTC, Netlify Functions, Supabase, Vitest

## Naukri project entry

Title: ASTools - On-Device Utility Toolkit PWA
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
