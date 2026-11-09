# Git Advanced (git-advance)

- **One-line description:** A Windows desktop Git client that drives the installed Git and gives the advanced parts of Git real screens.
- **Type:** Personal
- **Status:** Working v1.0.0 with a built installer; not publicly released. The installer predates the last 7 commits.
- **URL:** none
- **Repo:** github.com/mdabrarsami/git-advance
- **Dates:** 2026-09-01 to 2026-09-21
- **Commits:** 39

## What it does

Git Advanced is an Electron Git client that runs the Git executable already on the machine instead of reimplementing it. Beyond staging, committing, history and sync, it has screens for interactive rebase, bisect, worktrees, submodules, reflog, LFS, hooks, sparse checkout, maintenance and the full config surface. It recognises GitHub, GitLab, Bitbucket and Azure DevOps (including self-hosted) for pull requests, issues, releases and pipelines, and adds a Windows Explorer right-click menu that opens a repository on the chosen screen.

## Highlights

- Stage by file, hunk or single line in split or inline diffs; the patch builder handles forward and reverse patches so partial unstage and discard work.
- Interactive rebase as a drag-and-drop list (pick, reword, edit, squash, fixup, drop) and a three-pane conflict resolver with per-conflict navigation and take current, incoming or both.
- Merge, rebase, cherry-pick and revert show a preview of the outcome before running; one-click sync pulls then pushes and stops on conflict.
- Pull requests inside the app: list, create, edit, close, reopen, review with verdicts, view commits, files and conversation, and merge.
- Each feature is gated on the Git version that introduced it, so unsupported features are hidden rather than failing.
- Validated IPC contract of 183 named channels and 10 push events with Zod schemas; the Git engine in `src/core` has no Electron imports. Provider tokens are stored encrypted, with GitHub device sign-in.
- Explorer context menu registered by the NSIS installer and removed on uninstall, with the PowerShell scripts shipped for manual use.
- 407 tests: 180 unit, 202 integration against real temporary repositories and 25 Playwright end-to-end tests that drive the built app and verify results with Git itself.

## Stack

Electron 39, TypeScript, React 19, Zustand, Radix UI, TanStack Virtual, xterm.js with node-pty, chokidar, Zod, `node:sqlite`, Font Awesome, electron-vite, Vitest, Playwright, electron-builder.

## Distribution

- **Installer type:** NSIS, per-user (allows elevation), x64, changeable install directory, Start Menu and desktop shortcuts, custom `installer.nsh` that registers the Explorer menu.
- **Existing installer:** `C:\Users\Abrar\Documents\GitHub\git-advance\release\Git Advanced-1.0.0-Setup.exe`, 98,027,127 bytes (about 93.5 MB), built 2026-09-19. Seven commits came after it (pull request reviews, sync, conflict navigation, tooltips), so rebuild with `npm run build:win` before publishing.
- **Note for a GitHub release:** the file name has a space, while `latest.yml` refers to `Git-Advanced-1.0.0-Setup.exe`. Upload it under the hyphenated name, or set `artifactName` without spaces.
- **Code signing:** unsigned; the config leaves signing to a release pipeline.
- **Auto-update:** none. No updater dependency or publish config.

## Screenshots

Captured from the real packaged app (built from source) driven by a temporary Playwright script against throwaway demo repositories in the temp folder; the script and repos were deleted afterwards. Window size 1440x900 at 125% scaling.

- `screenshots/changes-diff.png`: Changes view with a split diff of an unstaged file, staged/unstaged groups and the commit box.
- `screenshots/commit-history.png`: Commit history with branch and tag badges.
- `screenshots/branches.png`: Local branches with the current branch and worktree markers.
- `screenshots/conflict-resolver.png`: Conflict resolver during a merge, with current, result and incoming panes.

## Portfolio card

- **Title:** Git Advanced
- **Blurb:** A Windows Git client on top of the real Git: line-level staging, drag-and-drop interactive rebase, conflict resolver, pull requests, worktrees, bisect and an Explorer menu.
- **Tags:** Electron, React, TypeScript, Git, Playwright

## LinkedIn project entry

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

## Naukri project entry

- **Title:** Git Advanced
- **Type:** Personal project (Windows desktop application)
- **Description:**

Windows desktop Git client built with Electron, React and TypeScript that drives the installed Git executable.
- Line-level staging, split/inline diffs, drag-and-drop interactive rebase and a three-pane conflict resolver
- Worktrees, submodules, bisect, reflog, LFS, hooks and config editor
- Pull requests, issues, releases and pipelines for GitHub, GitLab, Bitbucket and Azure DevOps
- Windows Explorer context menu installed by the NSIS installer
- 183 Zod-validated IPC channels; 407 unit, integration and Playwright tests against real repositories
