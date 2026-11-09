# Stackline (dsa-book)

- One-line description: Offline-first interview prep PWA for full-stack developers, covering Java, Spring Boot, microservices, JavaScript, TypeScript, React, CSS, DSA and SQL.
- Type: personal
- Status: live, actively updated
- Live URL: https://dsa-book.netlify.app
- Repo: github.com/mdabrarsami/dsa-book
- Dates: 2026-11-04 to 2026-11-07 (first to last commit)
- Commits: 13

## What it does

Stackline is a study app for people preparing for full-stack interviews. Topics are laid out as lines on a transit map, and each line holds lessons, interview questions with answers, quizzes and interactive diagrams. It is plain HTML, CSS and ES modules with no build step and no dependencies, and a service worker precaches everything so it works offline once installed on a phone or desktop.

## Highlights

- 739 lessons across 17 tracks, from Core Java and Spring Boot to micro-frontends, system design and SQL
- 6,368 interview questions with answers, filterable by topic, difficulty and status, with "know / revise" marks and a flashcard mode
- 305 multiple-choice quiz questions with explanations and a review screen
- 35 interactive diagrams written from scratch: sorting step-through, BST, event loop, Spring request flow, circuit breaker, HashMap internals, stream pipelines and more
- 322-term plain-language glossary, global search, saved items and progress export, all stored in localStorage
- Installable PWA: generated service worker with a content-hash precache list, app shortcuts, maskable icons
- Custom validator (`tools/validate.mjs`) checks every content file for duplicate ids, broken diagram references and malformed markdown
- Importer scripts bring in three open-licensed books (Hello Algo, java-design-patterns, System Design Primer) with attribution kept

## Stack

Vanilla JavaScript (ES modules), HTML, CSS, Service Worker, Web App Manifest, localStorage, Node.js build scripts, Python (icon and image tools), Netlify.

## Distribution

Web app and installable PWA (works offline). Hosted on Netlify as a static site.

## Screenshots

- `screenshots/01-home-map.png`: home screen with the 17 tracks drawn as transit lines and lesson progress
- `screenshots/02-interview-qa.png`: interview Q&A bank with search, topic chips, difficulty and status filters
- `screenshots/03-diagram-sorting.png`: interactive sorting diagram with step controls and complexity notes
- `screenshots/04-quiz.png`: quiz picker by topic with question counts
- `screenshots/05-mobile-home.png`: mobile layout with the floating glass tab bar

## Portfolio card copy

- Title: Stackline
- Blurb: Offline interview prep PWA with 739 lessons on 17 tracks, 6,368 interview Q&As, 305 quiz questions and 35 interactive diagrams. No framework, no build step.
- Tags: JavaScript, PWA, Service Worker, Offline-first, Netlify

## LinkedIn project entry

Title: Stackline: offline full-stack interview prep app

Description:
A study app for full-stack interviews that works offline once installed. Built with plain HTML, CSS and ES modules, no framework and no build step.
- 739 lessons on 17 tracks: Core Java, Collections, Streams, Spring Boot, design patterns, microservices, system design, JavaScript, TypeScript, React, micro-frontends, CSS, DSA, SQL and HR
- 6,368 interview questions with answers, filters by topic, difficulty and status, plus "know / revise" marks and flashcards
- 305 quiz questions with explanations and a review screen
- 35 interactive diagrams written from scratch, including sorting, BST, the JavaScript event loop, the Spring request flow and a circuit breaker
- Installable PWA with a generated service worker that precaches every file by content hash, so phones always run the deployed version
- Content validator script that catches duplicate ids, broken diagram links and malformed markdown before deploy
- Imports three open-licensed books with attribution preserved
Stack: JavaScript (ES modules), HTML, CSS, Service Worker, Web App Manifest, Node.js scripts, Netlify

## Naukri project entry

Title: Stackline - Offline Interview Prep PWA
Client/type: Personal project
Description:
Offline-first study app for full-stack interviews, live at dsa-book.netlify.app.
- 739 lessons across 17 tracks (Java, Spring Boot, microservices, system design, JavaScript, TypeScript, React, CSS, DSA, SQL)
- 6,368 interview Q&As with topic, difficulty and status filters and a flashcard mode
- 305 quiz questions with explanations
- 35 interactive diagrams built in vanilla JavaScript
- Installable PWA with a generated service worker for full offline use
- Content validator script run before each deploy
- Tech: JavaScript (ES modules), HTML, CSS, Service Worker, Node.js, Netlify
