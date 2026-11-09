# GitInsight (git-intelligence)

VS Code extension that brings blame, history, a commit graph and repository analytics into the editor, driven by the local Git CLI.

- Type: Personal project
- Status: version 0.8.1, packaged as a VSIX; not published to the Marketplace
- URL: none
- Repo: github.com/mdabrarsami/git-intelligence
- Dates: 2026-08-13 to 2026-11-02 (code written 2026-08-13 and 14; the last commit adds README badges)
- Commits: 16 on origin/main (15 in the local clone, one README commit behind)

## What it does

GitInsight is an independent take on what GitLens does. It shows inline blame and blame hovers at the cursor, file, line and repository history, a lane-based commit graph, a repository dashboard with contributors and change hotspots, and sidebar views for branches, stashes and worktrees. Everything runs against the real `git` executable on the machine, with no external service and no telemetry.

## Highlights

- 33 commands, 7 sidebar views (Blame Card, Repositories, Commits, Branches, Contributors, Stashes, Worktrees), 18 settings and 3 keybindings.
- Layered design: a `GitExecutor` process runner and porcelain parsers behind a `GitClient` facade, then services, providers, tree views and webviews on top.
- Blame results cached per repo and file in an LRU cache, invalidated on HEAD change and save; hovers read from the cache and never spawn `git blame`.
- Commit graph webview with lane layout over all refs, ref, author and date filters, per-row actions and a details drawer; dashboard with a 12-week activity chart, hotspots and contributors.
- Contributor and hotspot analysis streamed from one `git log` pass; history paginated with `--max-count`; long operations honour cancellation.
- Webviews locked down with a CSP and nonce'd scripts; Font Awesome icons bundled at build time.
- Unit tests for the Git parsers, the LRU cache and relative-time formatting, run under Node with a stubbed `vscode` module.
- About 6,300 lines of TypeScript, bundled with esbuild.

## Stack

TypeScript, VS Code Extension API, Git CLI, esbuild, @vscode/vsce, ESLint, Font Awesome.

## Distribution

- VSIX: `C:\Users\Abrar\Documents\GitHub\git-intelligence\gitinsight-0.8.1.vsix`, 63 KB (64,144 bytes), built 2026-08-14 from the latest code commit.
- Install with `code --install-extension gitinsight-0.8.1.vsix`, or Extensions view > Install from VSIX.
- Rebuild with `npm run package`.

## Screenshots

In `screenshots/`. Both were produced by running the compiled webview code (`out/webviews/*.js`) under Node with a stubbed `vscode` module and a real `GitClient` pointed at the NetFlux repo, then rendering the generated HTML in headless Chrome. The data is real; the VS Code window frame is not shown.

- `commit-graph.png`: commit graph with refs, date range, author filters, contributor bars and an activity sparkline.
- `repository-dashboard.png`: repository dashboard with working tree, branches, commit activity, recent commits, hotspots, contributors and remotes.

## Portfolio card

- Title: GitInsight
- Blurb: VS Code extension for Git: inline blame, file and line history, a commit graph and a repo dashboard with hotspots and contributors, all from the local Git CLI with no telemetry.
- Tags: VS Code Extension, TypeScript, Git, esbuild

## LinkedIn project entry

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

## Naukri project entry

- Title: GitInsight - Git Intelligence Extension for VS Code
- Type: Personal project

VS Code extension that surfaces Git context inside the editor.
- Inline blame, blame hovers, file/line/repository history and a lane-based commit graph
- Repository dashboard with activity, hotspots and contributors; sidebar views for branches, stashes and worktrees
- GitClient facade over the local Git CLI with porcelain parsers and an LRU blame cache
- 33 commands, 7 views, 18 settings; CSP-locked webviews
- TypeScript, esbuild, packaged as a VSIX

## Notes

- README says VS Code 1.85+, while `engines.vscode` is `^1.80.0`.
