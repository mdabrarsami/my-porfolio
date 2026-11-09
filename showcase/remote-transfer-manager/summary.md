# Remote Transfer Manager

- **One-line description:** A Windows client for browsing, transferring files to and running commands on remote Windows servers over the SMB and WinRM they already expose.
- **Type:** Personal
- **Status:** Working v1.0.0 with a built installer; not publicly released.
- **URL:** none
- **Repo:** github.com/mdabrarsami/remote-transfer-manager
- **Dates:** 2026-08-31 (all 22 commits on one day)
- **Commits:** 22

## What it does

Remote Transfer Manager is a two-pane Electron app: your machine on the left, a remote Windows server on the right. It browses shares, streams uploads and downloads with progress, speed and ETA, and runs PowerShell on the server in a Terminal tab. It is strictly a client: it installs no agent, edits no firewall rule, share, registry key or ACL, and only uses SMB (port 445) and an existing WinRM listener (5985/5986) with the credentials you give it. When a server does not allow something, it says so instead of trying to change the server.

## Highlights

- Signs in through the Windows SMB redirector with `WNetAddConnection2`, so `\HOST\SHARE` becomes an ordinary path for `node:fs`; the architecture notes record why `net use` with a piped password failed with error 1326 against a real server.
- Streaming transfer queue: a 40 GB file uses no more memory than a small one; pause, cancel, retry, Replace/Skip/Rename/Compare conflicts, and server-side copy over WinRM for remote-to-remote moves.
- Terminal tab runs PowerShell through one persistent remote session per connection, with streaming output, exit codes, timings, cancellation and a working directory that follows the remote pane.
- Seven-step connection test (network, SMB, SMB auth, shares, WinRM, WinRM auth, remote host) that only reports WinRM as working after an authenticated `hostname` comes back.
- Passwords live in Windows Credential Manager, are passed to child processes on stdin (never argv or env), and an integration test checks a known password appears nowhere in the database or logs.
- 58 named IPC channels, each with a validating handler; sandboxed renderer and CSP; connection profiles export without passwords.
- 86 unit tests plus an in-Electron integration suite that includes a 320 MB streaming transfer checked for byte-exact delivery, bounded memory and partial-file cleanup on cancel.

## Stack

Electron 44, TypeScript, React 19, electron-vite, Vite 7, `node:sqlite`, `@napi-rs/keyring` (Windows Credential Manager), PowerShell Remoting (WinRM), Vitest, electron-builder.

## Distribution

- **Installer type:** NSIS, per-user by default (allows elevation), x64, changeable install directory, Start Menu and desktop shortcuts. Uninstall keeps saved connections.
- **Existing installer:** `C:\Users\Abrar\Documents\GitHub\remote-transfer-manager\release\RemoteTransferManager-Setup-1.0.0.exe`, 111,426,198 bytes (about 106.3 MB), built 2026-08-31 22:42, which matches the last commit.
- **Code signing:** unsigned; the README explains how to sign with `CSC_LINK` / `CSC_KEY_PASSWORD`.
- **Auto-update:** none. electron-builder writes `latest.yml`, but there is no updater dependency or publish config.

## Screenshots

Captured from the real renderer served by Vite with a temporary fake preload bridge (deleted afterwards). All servers, IPs (192.0.2.x documentation range), paths and files are made up.

- `screenshots/two-pane-explorer.png`: Local and remote panes side by side, connection sidebar with favorites, SMB and WinRM status chips, and the transfer queue with one upload in progress.
- `screenshots/two-pane-explorer-dark.png`: The same screen in the dark theme.

## Portfolio card

- **Title:** Remote Transfer Manager
- **Blurb:** A two-pane Windows client for remote servers: streaming file transfers over SMB and a PowerShell terminal over WinRM, with no agent and no changes on the server.
- **Tags:** Electron, React, TypeScript, Windows, PowerShell

## LinkedIn project entry

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

## Naukri project entry

- **Title:** Remote Transfer Manager
- **Type:** Personal project (Windows desktop application)
- **Description:**

Windows desktop client for file transfer and remote command execution on Windows servers over existing SMB and WinRM, built with Electron, React and TypeScript.
- Two-pane local/remote explorer with drag and drop and a streaming transfer queue (progress, speed, ETA, pause, retry, conflicts)
- PowerShell terminal over a persistent WinRM session
- Seven-step connection diagnostics
- Installs nothing on the server; passwords kept in Windows Credential Manager and never placed on a command line
- 58 validated IPC channels, 86 unit tests and an in-Electron integration suite
- NSIS installer via electron-builder
