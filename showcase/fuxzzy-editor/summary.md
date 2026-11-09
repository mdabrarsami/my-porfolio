# Fuxzzy (fuxzzy-editor)

Native text and code editor for Windows 11, written in C++ on Win32, Direct2D and DirectWrite, that opens multi-gigabyte files and has no third-party dependencies.

- Type: personal project
- Status: version 1.1.0, working installer and portable exe
- URL: none
- Repo: github.com/mdabrarsami/fuxzzy-editor
- Dates: 2026-10-20 to 2026-11-02 (last code commit 2026-10-21; the 2026-11-02 commit adds README badges)
- Commits: 19 (including 2 merged pull requests)

## What it does

Fuxzzy looks like the Windows 11 Notepad (tabs in the title bar, Mica, light and dark themes) but works as a code editor: syntax highlighting for about 30 languages, multiple cursors, regex find and replace, find across all tabs, a split editor, session restore, and a live Markdown and LaTeX preview with its own math typesetter. It is built for large files: anything over 64 MB is memory-mapped, edits go through a piece table, and logs that grow on disk are followed like `tail -f`.

## Highlights

- Piece table over a memory-mapped original, so an insert costs the same in a 10 KB or 10 GB file; a 1 GB log uses about 50 MB of private memory.
- Background newline indexing in 4 KB blocks across all cores with SSE2: a 1 GB, 9.7 million line file indexes in about 3 seconds from a warm cache, and the first screen appears immediately.
- Linear-time Pike VM regex engine, so no pattern can hang the editor; find in all tabs with a results pane capped at 20,000 matches.
- Markdown and LaTeX preview that tracks the editor scroll, with a built-in TeX-style math engine (fractions, roots, matrices, `align`) and no TeX install needed.
- Split editor with two tab groups, side by side or stacked, including one document open in both groups.
- Crash safety: unsaved edits are journaled a couple of seconds after typing stops and restored with the session; saves go through a temp file and `ReplaceFile`.
- Per-user installer without admin rights: Start menu, Open with for about 100 extensions, Default apps registration, and an `IExplorerCommand` shell extension in a signed sparse MSIX package so "Edit with Fuxzzy" sits at the top of the Windows 11 context menu.
- Shows hidden and bidirectional Unicode characters (ZWSP, RLO, tag characters) as labels, with one-step cleanup and paste-as-plain-text.

## Stack

C++20, Win32, Direct2D, DirectWrite, DWM (Mica), WIC, COM shell extension (IExplorerCommand), MSIX sparse packaging (makeappx, signtool), MSVC with LTCG and static CRT, PowerShell build tooling. About 16,600 lines of C++, no third-party libraries.

## Distribution

Windows installer plus portable single-file exe. Both are unsigned, so SmartScreen may warn on first run.

- Latest build (matches the last code commit, e93a9ba, built 2026-10-21 13:46), in a Claude worktree:
  - `C:\Users\Abrar\Documents\GitHub\fuxzzy-editor\.claude\worktrees\pensive-mestorf-968d8d\dist\FuxzzySetup.exe`, 1.62 MB (1,701,376 bytes)
  - `C:\Users\Abrar\Documents\GitHub\fuxzzy-editor\.claude\worktrees\pensive-mestorf-968d8d\dist\fuxzzy.exe`, 1.20 MB (1,259,520 bytes)
- Stale build in the main checkout (2026-10-20 17:44, before session restore, preview, split editor and the shell extension):
  - `C:\Users\Abrar\Documents\GitHub\fuxzzy-editor\dist\FuxzzySetup.exe`, 800 KB (818,688 bytes)
  - `C:\Users\Abrar\Documents\GitHub\fuxzzy-editor\dist\fuxzzy.exe`, 593 KB (606,720 bytes)
- Silent install: `FuxzzySetup.exe /S`. Installs to `%LOCALAPPDATA%\Programs\Fuxzzy`. Rebuild with `build.bat` (VS 2022 C++ build tools and the Windows SDK).

## Screenshots

In `screenshots/`. Captured from the latest portable exe (worktree build above) opening files from its own repo, using a window capture. Fuxzzy's existing session folder and registry settings were backed up first and restored afterwards (registry export compared identical).

- `code-editor-tabs.png`: C++ syntax highlighting with tabs in the title bar and the status bar (language, zoom, line endings, encoding).
- `markdown-preview.png`: the README open with the live Markdown preview beside it.
- `split-editor.png`: the split editor with the same file in two tab groups.

## Portfolio card

- Title: Fuxzzy
- Blurb: Native Windows 11 code editor in C++ with Direct2D. Opens multi-GB files via memory mapping and a piece table, with regex search, split view, Markdown/LaTeX preview and a no-admin installer.
- Tags: C++, Win32, Direct2D, Windows, Desktop App

## LinkedIn project entry

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

## Naukri project entry

- Title: Fuxzzy - Native Text and Code Editor for Windows
- Type: Personal project

Windows 11 desktop editor in C++ with no third-party dependencies.
- Memory-mapped piece table and parallel SSE2 line indexing for multi-GB files
- Syntax highlighting for about 30 languages, multi-cursor editing, split view, linear-time regex search
- Markdown and LaTeX preview with a custom math typesetter
- Session restore and crash-safe journaling of unsaved edits
- No-admin installer with file associations and a Windows 11 context menu shell extension (sparse MSIX)
- C++20, Win32, Direct2D, DirectWrite
