# Project showcase

One folder per project, each with a `summary.md` (facts, portfolio card text, LinkedIn entry, Naukri entry) and a `screenshots/` folder where screenshots were possible. Generated from the repos in `C:\Users\Abrar\Documents\GitHub` on 2026-11-08. READMEs were also written or updated in each repo; none of that is committed.

This folder is not committed yet. Review it before it goes into git, since the site repo is public.

## Where each project should go

"Site" means the Apps section or the Lab grid on abrlabs.in. "Now" shows where it already appears.

| Project | Type | Shots | Now | Recommend |
|---|---|---|---|---|
| ASTools (go-photos-web) | Personal | 4 | Site, LinkedIn | Keep. Fix the "never upload" claim first (see below) |
| Stackline (dsa-book) | Personal | 5 | Site, LinkedIn | Keep, refresh counts (35 diagrams) |
| Hospix | Personal product | 4 | Site, LinkedIn | Keep, add Naukri |
| Paper Games (games) | Personal | 6 | Site, LinkedIn | Keep, refresh to 86 games, add Naukri |
| Drive Explorer (open-drive) | Personal | 5 | Site, LinkedIn | Keep, add Naukri, exe download later |
| Eva Dental | Client work | 4 | Site, LinkedIn | Keep, add Naukri |
| Torrents (torrent-downloader) | Personal | 4 | Site | Keep on site only |
| NetFlux | Personal? | 4 | Résumé | Add to site, LinkedIn, Naukri once ownership is clear |
| Git Advanced (git-advance) | Personal? | 4 | None | Add to site, LinkedIn, Naukri; exe download later |
| Enclave (my-ip-msg) | Personal | 5 | None | Add to site, LinkedIn |
| DentOS (dental_crm) | Personal | 3 | Résumé | Add to LinkedIn, Naukri (login-only screenshots) |
| GitInsight (git-intelligence) | Personal? | 2 | Résumé ("Git Chat"?) | Add once ownership is clear |
| Fuxzzy editor | Personal | 3 | None | Add to site Lab grid; exe download later |
| Remote Transfer Manager | Personal? | 2 | None | Site Lab grid only; README names real work servers |
| iOS Shortcuts builder | Personal | 3 | None | Deploy first, then site |
| hirequarry | Personal | 2 | None | Site Lab grid |
| ffsclient-ui | Personal | 4 | None | Site Lab grid |
| BambooHR Helper | Personal | 2 | LinkedIn, Naukri | Keep |
| Image Upscaler | Md Abrar Sami work | 4 | LinkedIn, Naukri | Keep |
| Tag Creator (create-planner-tag) | Md Abrar Sami work | 4 | LinkedIn, Naukri | Keep; repo stays private |
| Bug Workflow | Md Abrar Sami work | 1 | LinkedIn, Naukri | Keep; repo stays private |
| Bug Status Updator, Md Abrar Sami Sidebar | Md Abrar Sami work | 0 | None | One line under Md Abrar Sami experience |
| Interview-Book | Personal | 0 | None | Optional; content repo |
| WFPassowrd (Focus 8 DB utility) | Centra Hub era | 0 | None | Naukri at most; keep off public channels |
| UtilsApp3 | Personal | 0 | None | Skip |

## Fix before publishing

- ASTools: the site says files never leave the device, but the app has an audit trail that logs visitor IP, location and GPS. Remove the logging or change the claim. `DOCUMENTATION.md` and `TOOLS.md` still describe the hidden vault passcode.
- WFPassowrd: `UtilsApp/App.config` has a real SQL password committed. The repo looks private; rotate the password anyway.
- DentOS: `docs/SESSION-WORKLOG.md` has dev DB passwords; `db/connection.json` is tracked with password fields.
- Hospix: the default print template holds a real clinic's details. `installer/` (57 MB exe, superuser hash) is not gitignored.
- Drive Explorer: `release/DriveExplorer-Setup-1.0.0.exe` has your Google OAuth client sealed in; publish an exe built with `npm run dist` instead. The agent's test run overwrote `build/credentials.bin` and `.key`; run `node scripts/pack-credentials.mjs` to re-seal them from `.env`.
- Remote Transfer Manager: README shows a real internal IP, username and host.

## Built installers found

| App | File | Size | Fresh? |
|---|---|---|---|
| Drive Explorer | release/DriveExplorer-Setup-1.0.0.exe | 107.5 MB | Yes, but has bundled credentials |
| Remote Transfer Manager | release/RemoteTransferManager-Setup-1.0.0.exe | 106.3 MB | Yes |
| Git Advanced | release/Git Advanced-1.0.0-Setup.exe | 93.5 MB | 7 commits stale |
| Enclave | NSIS 6.0 MB, MSI 8.3 MB | | 15 commits stale |
| Fuxzzy | setup 1.62 MB, portable 1.20 MB (in a worktree's dist) | | Yes |
| Hospix | installer/out/Hospix-Setup.exe | 57 MB | Local only |
| GitInsight | gitinsight-0.8.1.vsix | 63 KB | |
| NetFlux | dist.crx | 1.5 MB | June, stale |
