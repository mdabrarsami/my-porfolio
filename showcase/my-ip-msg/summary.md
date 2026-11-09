# Enclave (my-ip-msg)

- **One-line description:** A serverless LAN messenger for Windows in the spirit of IP Messenger, with end-to-end encryption and resumable file transfer.
- **Type:** Personal
- **Status:** Working v0.1.0 in active development; manual two-instance testing documented, cross-machine messaging still marked for human verification in the audit. Installers exist but predate the last 15 commits.
- **URL:** none
- **Repo:** github.com/mdabrarsami/my-ip-msg
- **Dates:** 2026-08-14 to 2026-10-14
- **Commits:** 51

## What it does

Enclave lets people on the same network chat and share files with no server and no accounts. Instances find each other by UDP broadcast, connect over direct TCP, and store everything in a local SQLite database. Messages are written locally first and delivered by an outbox worker when the peer is reachable, so nothing is lost when someone goes offline. It is a Tauri 2 app: a Rust backend for networking, crypto, storage and transfers, and a React frontend.

## Highlights

- UDP discovery on every usable IPv4 interface with virtual adapters (Docker, VMware, VirtualBox, Hyper-V, TAP/TUN) filtered out; one TCP connection per peer with length-prefixed framing and a 16 MiB frame cap.
- Offline-first send path: SQLite insert, outbox with backoff, drain on reconnect, ULID de-duplication and pending/sent/delivered/read receipts.
- End-to-end encryption with per-install X25519 keys via libsodium; message, edit and reaction envelopes are sealed to the recipient's key, with no plaintext fallback.
- File transfer in 1 MiB chunks with SHA-256 per chunk and per file, out-of-order writes, resume across restarts, and filename sanitising confined to the downloads folder.
- Groups with roles, replies, forwarding, reactions, mentions, polls, voice memos, scheduled messages, reminders, link previews, FTS5 search and a media viewer.
- Desktop integration: custom title bar, tray, autostart, native notifications, floating chat bubbles, rebindable shortcuts and a command palette.
- 75 Tauri commands over a typed IPC facade, 6 versioned SQLite migrations and a 34-type wire protocol.
- 112 Rust tests (including a two-node transport test) and 45 frontend tests, plus a browser harness that runs the real UI against a mocked backend.

## Stack

Tauri 2, Rust (Tokio, rusqlite with SQLite WAL and FTS5, r2d2, socket2, sodiumoxide, sha2), React 18, TypeScript, Vite, Tailwind CSS, Zustand, React Router, Radix UI, TanStack Virtual, Zod, npm workspaces, Vitest.

## Distribution

- **Installer type:** Tauri bundle targets "all": NSIS setup `.exe` and WiX `.msi`, x64.
- **Existing installers (built 2026-08-18, 15 commits behind):**
  - `C:\Users\Abrar\Documents\GitHub\my-ip-msg\apps\desktop\src-tauri\target\release\bundle\nsis\Enclave_0.1.0_x64-setup.exe`, 6,312,673 bytes (about 6.0 MB)
  - `C:\Users\Abrar\Documents\GitHub\my-ip-msg\apps\desktop\src-tauri\target\release\bundle\msi\Enclave_0.1.0_x64_en-US.msi`, 8,724,480 bytes (about 8.3 MB)
  - Rebuild with `npm run package` before publishing.
- **Code signing:** unsigned; SmartScreen warns.
- **Auto-update:** none configured.
- **Note:** first run triggers a Windows Firewall prompt for UDP 45454 and TCP 45455; worth stating on the download page.

## Screenshots

Captured with the repo's own browser harness (`apps/desktop/dev/mock.html`, in-memory fake backend with seeded demo peers and chats), served by Vite on a spare port.

- `screenshots/chat-group.png`: Group conversation with a mention, presence dots and the encrypted badge.
- `screenshots/transfers.png`: Transfers screen with an incoming file, progress, speed and time remaining.
- `screenshots/settings.png`: Settings with profile, downloads folder, startup and notification options.
- `screenshots/diagnostics.png`: Network diagnostics: peer id, fingerprint, ports, interfaces, encryption counters and connected peers.
- `screenshots/onboarding.png`: First-run welcome screen.

## Portfolio card

- **Title:** Enclave
- **Blurb:** A serverless LAN messenger built with Tauri and Rust: UDP discovery, offline-first delivery, X25519 end-to-end encryption and resumable, hash-verified file transfer.
- **Tags:** Tauri, Rust, React, SQLite, Networking

## LinkedIn project entry

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

## Naukri project entry

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
