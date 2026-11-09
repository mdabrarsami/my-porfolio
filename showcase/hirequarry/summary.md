# hirequarry

Command-line job hunter with a local web app: finds openings that fit your profile, ranks them with any AI model, tailors your resume and cover note, and tracks applications.

- Type: personal project
- Status: version 0.1.0, first public release
- URL: none
- Repo: github.com/mdabrarsami/hirequarry
- Dates: 2026-11-02 (both commits)
- Commits: 2

## What it does

`hq` pulls postings from company career boards (Greenhouse, Lever, Ashby), Remotive, Adzuna and optionally LinkedIn, Indeed and Glassdoor through python-jobspy. A free local filter scores title, location, years asked for, skills and posting age, then the AI model you choose gives each remaining job a 0 to 100 fit score with matched skills and gaps. For the jobs you pick it writes a tailored resume (Markdown, HTML, optional PDF) and a cover note, opens the application page, and records the outcome. It never submits an application itself.

## Highlights

- 13 AI provider presets over three protocols (Anthropic Messages, OpenAI Chat Completions, Ollama): Claude, OpenAI, Gemini, OpenRouter, Groq, DeepSeek, Mistral, xAI, Together, plus local Ollama, LM Studio and llama.cpp, and any OpenAI-compatible endpoint.
- 17 CLI commands, from `hq init` (reads an existing PDF or DOCX resume and builds `resume.md` and `profile.md`) to `hq daily` for a scheduled morning run.
- Local web app (`hq ui`) that does everything the CLI does, bound to 127.0.0.1 with a per-run token so other sites and devices cannot reach it.
- Tailoring prompts allow reordering and rephrasing but forbid inventing employers, dates, numbers or skills.
- Same role listed on several sites is merged into one job; `hq refilter` re-scores stored jobs after settings change.
- Local-model friendly: one request at a time to local servers, 15-minute timeout, configurable context window.
- 60 Vitest cases across 6 files, including end-to-end CLI and server tests, with no network or API keys needed.
- About 3,800 lines of TypeScript and plain JavaScript, four runtime dependencies.

## Stack

TypeScript, Node.js 20+, commander, unpdf, mammoth, picocolors, Vitest, tsx; web UI in plain HTML, CSS and JavaScript; optional Python bridge to python-jobspy and optional Playwright for PDF output.

## Distribution

- CLI installed from source: `git clone`, `npm install`, `npm link` puts `hq` and `hirequarry` on PATH. `package.json` is set up for npm publishing (`bin`, `files`, `prepare` build) but it is not on npm yet.
- Built output: `C:\Users\Abrar\Documents\GitHub\hirequarry\dist\` (compiled JS; `dist/cli.js` is 27 KB).
- No installer.

## Screenshots

In `screenshots/`, copied from the repo's `docs/images/` (they use sample data with fictional companies):

- `ui-jobs.png`: the web app job list with fit scores, status filters and the detail pane with the AI's reasoning and matched skills.
- `ui-settings.png`: settings for the AI model (Ollama shown), search criteria, and companies and sources.

## Sample output

`hq --help` (run from the built `dist/cli.js`, no config or network needed):

```
Usage: hq [options] [command]

hirequarry: find jobs that fit you, rank them with any AI model, tailor your
resume, apply with you in the loop

Options:
  -V, --version                 output the version number
  -c, --config <file>           config file (default ./hirequarry.json)
  -h, --help                    display help for command

Commands:
  init [options]                set up hirequarry in this folder (interactive;
                                can read your existing resume)
  import [options] <file>       turn an existing resume (.pdf, .docx, .md,
                                .txt) into resume.md and profile.md with AI
  company                       manage the company career boards you watch
  find [options]                fetch new postings from your sources and run
                                the quick filter
  refilter                      re-run the quick filter on stored jobs after
                                you change search settings
  rank [options]                score unranked jobs against your profile with
                                your AI model
  list|ls [options]             show jobs, best fit first (AI scores; ~ marks a
                                quick score not yet AI-ranked)
  show <id>                     full details for one job (id prefix is enough)
  tailor <id>                   write a tailored resume and cover note for one
                                job into out/
  apply [options] <id>          open the application page with your tailored
                                resume ready; you review and submit
  mark [options] <id> <status>  set a job's status (new, shortlisted, applied,
                                interview, offer, rejected, skipped)
  daily [options]               find + rank, then show the best open matches
                                (good for a scheduled task)
  stats                         pipeline counts
  ui [options]                  open the hirequarry web app in your browser
                                (runs locally)
  providers                     list supported AI providers and whether their
                                key is set
  models [options]              list the models your configured provider (or
                                local Ollama / LM Studio server) offers
  doctor [options]              check config, files, AI provider and optional
                                tools
  help [command]                display help for command
```

## Portfolio card

- Title: hirequarry
- Blurb: Job-search CLI and local web app: pulls postings from career boards, ranks fit with any AI model (cloud or local), tailors resume and cover note, tracks applications. Never auto-submits.
- Tags: TypeScript, Node.js, CLI, LLM, Ollama

## LinkedIn project entry

Title: hirequarry: AI-assisted job search from the command line

An open-source CLI and local web app I built to automate everything around a job application except the final click.

- Pulls postings from Greenhouse, Lever and Ashby career boards, Remotive, Adzuna and optionally LinkedIn, Indeed and Glassdoor via python-jobspy, and merges duplicates across sources
- Free local filter on title, location, years asked for, skills and age, then an AI fit score from 0 to 100 with matched skills and gaps
- Works with 13 provider presets (Claude, OpenAI, Gemini, Groq, OpenRouter and others) or fully local models through Ollama, LM Studio or llama.cpp
- Tailors a resume (Markdown, HTML, PDF) and cover note per job, with prompts that forbid inventing employers, dates or skills
- Local web app bound to 127.0.0.1 with a per-run token; resume and job data stay on the machine except what is sent to the chosen AI provider
- 17 commands, 60 Vitest cases including end-to-end tests, four runtime dependencies

Stack: TypeScript, Node.js, commander, unpdf, mammoth, Vitest, plain HTML/CSS/JS

## Naukri project entry

- Title: hirequarry - AI Job Search CLI and Web App
- Type: Personal project (open source)

Node.js CLI and local web app that finds, ranks and tracks job openings.
- Fetches postings from Greenhouse, Lever, Ashby, Remotive and Adzuna, with de-duplication across sources
- Local heuristic filter, then AI fit scoring with 13 provider presets or local models (Ollama, LM Studio, llama.cpp)
- Tailored resume and cover note per job without inventing facts
- Local web UI secured to 127.0.0.1 with a per-run token
- 17 commands, 60 Vitest tests
- TypeScript, Node.js 20, commander, Vitest

## Notes

- The repo root holds `profile.md`, `resume.md`, `hirequarry.json` and a `job-search/` folder. The personal files are gitignored and were not opened.
- A GitHub Actions workflow (Ubuntu, Windows and macOS on Node 20 and 22) exists only as `Claude outputs/ci.yml`. It is not in `.github/workflows/`, so CI is not active.
