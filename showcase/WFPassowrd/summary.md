# WFPassowrd (UtilsApp)

- Name: UtilsApp (repo: WFPassowrd)
- One-line description: WinForms support tool that restores, sanitizes, backs up and removes Focus 8 CRM company databases on SQL Server.
- Type: Windows desktop app (C#, Windows Forms, .NET Framework 4.6)
- Status: Inactive since February 2023; packaged as installers up to version 2.4
- Repo: github.com/mdabrarsami/WFPassowrd
- Dates: 2020-08-21 to 2023-02-27 (most work Aug 2020 to Sep 2021)
- Commits: 41

## What it does

A tool for setting up local copies of customer CRM databases. You pick a backup (`.bak`, or `.fcb`/`.zip`/`.rar`/`.fbak` archives that it extracts first), and it restores it into SQL Server with the right file moves, generates a new base-36 company code if needed, runs optional clean-up updates so the copy does not send emails or run integrations, schedulers or workflows, and registers the company in the CRM web app's `companylist.xml`. A second tab lists those companies and can back them up (shrink, `BACKUP DATABASE`, RAR to Downloads) or drop them. Hidden admin tabs read the CRM user table and decode stored passwords, and send authenticated requests to the CRM REST API.

## Highlights

- Dynamic T-SQL restore: `RESTORE FILELISTONLY` into a table variable to find logical file names, then `RESTORE ... WITH MOVE, REPLACE`, switching an existing database to single-user first.
- Handles five backup formats, using System.IO.Compression for zip and WinRAR (found through the registry) for rar.
- Base-36 company code allocation that checks existing `Focus8*` databases to avoid clashes.
- Nine optional post-restore steps (passwords, email, integrations, scheduler, workflows, extension modules, dashboards, XML registration, Focus DB flag).
- Batch backup and delete of selected companies with XML list upkeep and a daily file log.
- REST client tab: token login with client id/secret, query-based metadata call, JSON pretty-printing, logout.
- Packaged with Inno Setup (scripts for versions 1.5 to 2.4) and ClickOnce (1.0.0.0 to 1.0.0.5).

Security notes (accurate, for reference only): the CRM stores user passwords with a reversible character transform (shift by 19, multiply by a position weight, write as hex), so "decrypting" them is just running the inverse. It is obfuscation, not encryption or hashing. The tool's own SQL login is kept in plain text in `App.config`, and the admin tabs are unlocked by comparing against constants in the source.

Action item for Abrar: the committed `UtilsApp/App.config` has the SQL username and password values filled in (values not copied here). If the repo is public, make it private or purge the file from history, and change that SQL password. The source also contains the admin unlock values.

## Stack

C#, .NET Framework 4.6, Windows Forms, ADO.NET (SqlClient), T-SQL, SQL Server, SMO assemblies, System.Xml, Newtonsoft.Json, RestSharp, Aspose.Zip, NUnrar, Inno Setup, ClickOnce.

## Distribution

Prebuilt files are committed in the repo (dates come from git history; file mtimes only show the clone date):

- `C:\Users\Abrar\Documents\GitHub\WFPassowrd\UtilsApp\Output\UtilsApp.exe`: Inno Setup installer, 2,073,333 bytes (2.0 MB), committed 2021-09-11. Newest build.
- `C:\Users\Abrar\Documents\GitHub\WFPassowrd\UtilsApp\Resources\%temp%\UtilsApp.exe`: older Inno Setup installer, 2,778,228 bytes (2.6 MB), committed 2021-05-02.
- `C:\Users\Abrar\Documents\GitHub\WFPassowrd\UtilsApp\_publish\setup.exe`: ClickOnce bootstrapper, 523,744 bytes, committed 2021-05-02, with versions 1.0.0.0 to 1.0.0.5 under `_publish\Application Files\`.
- `C:\Users\Abrar\Documents\GitHub\WFPassowrd\UtilsApp\publish.rar`: archived publish folder, 1,853,352 bytes.

None of these were run. Do not offer them as public downloads: the tool only works against Focus 8 CRM databases and includes the password-decoding and admin features.

## Worth showcasing?

Not as a public portfolio or LinkedIn project. It is substantial work with real SQL Server automation, but it is an internal tool built around a specific vendor's product, it includes a feature that reveals user passwords, and the repo has credentials committed. Showing it publicly invites the wrong questions.

What is reasonable: a Naukri entry or an interview talking point framed as an internal database restore and sanitization tool, leaving out password decoding and product internals. The draft copy below follows that framing. Check that describing it does not conflict with any employer confidentiality terms.

## Screenshots

None. WinForms apps cannot be captured headlessly here, and the executables were not run. The repo only has icons and loading GIFs (`UtilsApp/Resources/`), not UI screenshots.

## Portfolio card copy

- Title: CRM Database Restore Utility
- Blurb: Windows tool that restores customer SQL Server backups from five archive formats, runs sanitization updates so test copies stay quiet, registers them with the local CRM, and batch backs up or drops them.
- Tags: C#, WinForms, SQL Server, T-SQL, Inno Setup

## LinkedIn project entry

Title: CRM Database Restore Utility (internal tool)

A Windows desktop tool I built to cut the time it took to set up local copies of customer CRM databases.

- Restores SQL Server backups from .bak, .zip, .rar and two product-specific archive formats, extracting archives automatically.
- Builds the restore with dynamic T-SQL: reads logical file names with RESTORE FILELISTONLY, moves data and log files to a chosen folder, and handles existing databases in single-user mode.
- Allocates new base-36 company codes that do not clash with existing databases.
- Optional post-restore clean-up disables outgoing email, ERP integrations, scheduled jobs, workflows and extension modules so test copies cannot affect real systems.
- Registers restored companies with the local CRM web app by updating its XML company list.
- Batch backup (log shrink, BACKUP DATABASE, RAR to Downloads) and batch delete of selected companies.
- Includes a small REST client tab for authenticated API calls with formatted JSON output.
- Packaged with Inno Setup and ClickOnce, up to version 2.4.

Stack: C#, .NET Framework, Windows Forms, ADO.NET, T-SQL, SQL Server, Newtonsoft.Json, Inno Setup

## Naukri project entry

- Title: CRM Database Restore Utility
- Type: Internal tool, Windows desktop app (2020 to 2023)

Built a WinForms tool to restore and manage customer CRM databases on SQL Server.

- Restores backups from .bak, .zip, .rar and product-specific archives using dynamic T-SQL (FILELISTONLY, WITH MOVE, single-user handling).
- Generates non-clashing base-36 company codes.
- Runs optional sanitization updates (email, integrations, schedulers, workflows) on restored copies.
- Updates the CRM's XML company list; batch backup to RAR and batch delete.
- REST API test tab with token login and JSON formatting.
- Packaged with Inno Setup and ClickOnce, up to v2.4.
- Tech: C#, .NET Framework 4.6, WinForms, ADO.NET, SQL Server.
