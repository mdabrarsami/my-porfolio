# ffsclient UI

Local web UI for ffsclient, the Firefox Sync command-line client: read synced tabs, bookmarks, passwords, form history and browsing history from a browser form instead of a terminal.

- Type: Personal
- Status: v0.1.0, working; last commit 2026-10-21
- Repo: github.com/mdabrarsami/ffsclient-ui
- Dates: 2026-10-21 (single day)
- Commits: 4

## What it does

A small Node server plus a single-page front end that wraps an installed `ffsclient` binary. Every ffsclient command and option is described once in a data file, and the form, the colored command preview and the argument list are generated from it. The server runs the binary with an argument array (never a shell) and streams output back, and when ffsclient asks for a 2FA code the page shows an input and pipes the answer to the process. The main use is pulling open tabs from a phone and exporting them.

## Highlights

- 31 ffsclient commands across 7 groups (account, tabs, bookmarks, passwords, form history, browsing history, raw records) generated from one command schema.
- Live command preview colored by part (verb, arguments, command options, global options); clicking a part jumps to its field.
- Streaming output with interactive 2FA prompts forwarded to the running process.
- Tab viewer grouped by device with filtering, selection, copy, and export as text, an importable bookmarks HTML file, CSV, Markdown or JSON.
- Security: binds to 127.0.0.1, per-start random token on every API call, Host and Origin checks, passwords and 2FA codes kept in memory and masked in the preview, output (including ffsclient's verbose log) and copied commands.
- Destructive commands need confirmation; deleting a collection or everything needs a typed phrase.
- No npm dependencies; Node 18+ standard library only. Light and dark themes.

## Stack

Node.js (http, child_process), vanilla JavaScript, HTML, CSS.

## Distribution

Local web app (`npm start` or `start.cmd`, opens on 127.0.0.1).

## Public showcase OK?

Yes. Personal project with no Md Abrar Sami or third-party private data. Screenshots were taken without signing in.

## Screenshots

Captured from the front end served as static files with no backend running, so the session badge reads "Session unknown" and nothing was executed. No account data appears.

- `screenshots/sign-in.png`: Sign in command with the generated form and command preview (dark theme).
- `screenshots/open-tabs.png`: Open tabs command with its options and the `ffsclient tabs list --format=json` preview.
- `screenshots/add-bookmark-light.png`: Add bookmark command in the light theme, showing placeholder arguments in the preview.
- `screenshots/delete-everything.png`: a destructive command, marked in the sidebar, which always runs with `--force` after confirmation.

## Portfolio card

- Title: ffsclient UI
- Blurb: Local web UI for the Firefox Sync CLI. Forms and a live command preview generated from one schema, streamed output with 2FA prompts, synced-tab export, token-protected localhost server, zero dependencies.
- Tags: Node.js, JavaScript, Firefox Sync, Developer Tools, Security

## LinkedIn project entry

Title: ffsclient UI (local web UI for Firefox Sync)

A local web front end for ffsclient, the Firefox Sync command-line client, built to read a phone's open tabs on a PC without signing in to Firefox there.
- Generates forms, argument lists and a colored command preview for 31 commands from a single command schema
- Runs the installed binary with an argument array (no shell) and streams its output to the page; 2FA prompts appear as an input that writes back to the process
- Device-grouped tab viewer with filtering, selection and export to text, bookmarks HTML, CSV, Markdown or JSON
- Localhost-only server with a per-start token, Host and Origin checks, and secrets masked in previews, logs and copied commands
- Confirmation for destructive commands and a typed phrase for the most destructive ones
- No npm dependencies
Stack: Node.js, JavaScript, HTML, CSS

## Naukri project entry

- Title: ffsclient UI
- Type: Personal project (local web app)

Local web UI for the Firefox Sync command-line client.
- Forms and a live command preview generated from one schema covering 31 commands
- Node server runs the binary without a shell and streams output; handles 2FA prompts
- Synced-tab viewer with export to text, bookmarks HTML, CSV, Markdown and JSON
- Localhost-only, token-protected API with Host/Origin checks and secret masking
- Zero npm dependencies
