# UtilsApp3

- Name: UtilsApp3
- One-line description: Small WinForms experiment that reads and moves the mouse cursor through Win32 P/Invoke.
- Type: Windows desktop app (C#, Windows Forms, .NET Framework 4.6.1)
- Status: Unfinished experiment, inactive since 2020
- Repo: github.com/mdabrarsami/UtilsApp3
- Dates: 2020-10-04 to 2020-10-13
- Commits: 4 ("Add .gitignore and .gitattributes.", "Add project files.", "trst", "Test")

## What it does

A single form that shows the live cursor X/Y position and has a "Run For Mins" countdown. A timer handler moves the cursor up and down by a fixed offset every second until the countdown ends, which is the core of a "keep the PC awake" mouse jiggler. The Start button currently runs a one-off `SendInput` test instead of starting the timer; the timer start code is commented out, so the jiggler never got wired up.

## Highlights

- P/Invoke declarations for `SetCursorPos`, `ClientToScreen` and `SendInput` with hand-written `POINT`, `INPUT` (explicit layout) and `MOUSEINPUT` structs.
- Countdown timer with `mm:ss` formatting driving alternating cursor moves.
- The whole project is one form plus Visual Studio template files, roughly 200 lines of hand-written C#.

## Stack

C#, .NET Framework 4.6.1, Windows Forms, Win32 API (user32, kernel32).

## Distribution

No built executable in the repo (no `bin/` folder). Building in Visual Studio would produce `UtilsApp3\bin\Debug\UtilsApp3.exe`. Not recommended as a download: the main feature is not connected to the UI.

## Worth showcasing?

No. It is a four-commit, unfinished experiment with placeholder commit messages, and it adds nothing a recruiter would notice next to the newer projects. Leave it off the portfolio, LinkedIn and Naukri. If it ever gets finished (a working keep-awake tray app), it could become a small utility entry.

## Screenshots

None. WinForms apps cannot be captured headlessly here, there is no built exe, and the repo has no images.

## Portfolio card copy

- Title: UtilsApp3: Cursor Experiment
- Blurb: A small Windows Forms test from 2020 that reads the cursor position and moves it through Win32 P/Invoke calls (SetCursorPos, SendInput). It was meant to become a keep-awake timer.
- Tags: C#, WinForms, .NET Framework, Win32 API

## LinkedIn project entry

Title: UtilsApp3 (Win32 cursor experiment)

A small Windows Forms experiment from 2020 for controlling the mouse cursor from C#.

- Shows the live cursor X/Y position on the form.
- Calls user32.dll through P/Invoke (SetCursorPos, ClientToScreen, SendInput) with hand-written interop structs.
- Includes a minutes countdown timer that moves the cursor on each tick, the start of a keep-awake utility.

Stack: C#, .NET Framework 4.6.1, Windows Forms, Win32 API

## Naukri project entry

- Title: UtilsApp3 (Win32 cursor experiment)
- Type: Personal project, Windows desktop app

Small Windows Forms test app built in October 2020.

- Displays live cursor coordinates.
- Moves the cursor through Win32 P/Invoke (SetCursorPos, SendInput) using custom interop structs.
- Countdown timer that moves the cursor on each tick, intended as a keep-awake tool.
- Tech: C#, .NET Framework 4.6.1, WinForms.
