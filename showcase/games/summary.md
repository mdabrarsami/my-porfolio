# Paper Games

- Name: Paper Games
- One-line description: Installable multiplayer PWA with 86 games, playable online, nearby over local Wi-Fi, on one device, or against the computer.
- Type: Personal
- Status: Active development
- Live URL: Not found in the repo (Netlify config is present). LinkedIn lists https://games.abrlabs.in
- Repo: github.com/mdabrarsami/games (likely private)
- Dates: 2026-10-25 to 2026-11-02
- Commits: 17

## What it does

Paper Games is a home-screen app for playing games with friends and family. It started with pen-and-paper classics like Number Hunt, Bingo and Name Place Animal Thing and now has 86 games across words, party, puzzles, sports, board games, strategy and cards. Friends join an online room with a code or QR scan, link phones directly over the same Wi-Fi with no internet, pass one phone around, or play against computer players. Online and nearby rooms have push-to-talk voice.

## Highlights

- 86 games in 8 categories, each in its own folder with rules, board UI, art and tests (chess, Ludo, carrom, pool, snooker, Go, Teen Patti, Texas Hold'em, Sudoku race and more)
- Four ways to play: Supabase Realtime rooms, nearby play over WebRTC paired by QR code, pass-the-device mode, and computer opponents
- Push-to-talk voice over WebRTC with a Cloudflare TURN relay whose credentials come from a Supabase edge function
- Works fully offline after first load: the service worker caches the app, fonts, word lists and game art, with an in-app update banner and download progress
- About 2,500 Vitest cases across 84 test files, including full simulated games
- Anonymous Supabase sign-in, Row Level Security, a self-healing schema edge function and match history that falls back to the device
- Background music and sound effects per game, including playback on silenced iPhones
- About 112,000 lines of TypeScript and TSX

## Stack

React 19, TypeScript, Vite, vite-plugin-pwa (Workbox), Supabase (Realtime, Auth, Postgres, Edge Functions), WebRTC, chess.js, qrcode, jsQR, Vitest, Netlify

## Distribution

Progressive Web App. Installs full screen on iOS, Android and desktop; deployed as a static site (Netlify config included).

## Screenshots

Captured from the local dev server with network calls to Supabase blocked, using a test profile.

- `screenshots/01-home.png`: Home screen with search, category filters and game cards
- `screenshots/02-chess-vs-computer.png`: Chess against the computer, offline, with move list
- `screenshots/03-pool.png`: 8-ball pool table with aim line and slide-to-shoot control
- `screenshots/04-ludo.png`: Ludo board against a computer player
- `screenshots/05-mobile-home.png`: Home screen on a phone (390 px)
- `screenshots/06-mobile-carrom.png`: Carrom on a phone

## Portfolio card copy

- Title: Paper Games
- Blurb: A multiplayer PWA with 86 games, from Bingo to chess and pool. Play online, over local Wi-Fi with no internet, on one phone, or against the computer, with push-to-talk voice.
- Tags: React, PWA, Supabase Realtime, WebRTC, TypeScript

## LinkedIn project entry

Title: Paper Games: Multiplayer Game PWA

Description:
An installable web app with 86 games for friends and family, built to work on any phone with or without internet.
- 86 games across pen and paper, words, party, puzzles, sports, board games, strategy and cards, each in its own module with rules, UI, art and tests
- Online rooms over Supabase Realtime; friends join with a room code or QR scan
- Nearby play with no internet: phones link directly over the same Wi-Fi or hotspot using WebRTC, paired by QR code
- Pass-the-device mode and computer opponents for single-device play
- Push-to-talk voice over WebRTC with a Cloudflare TURN relay issued by a Supabase edge function
- Fully offline after first load through a Workbox service worker, with in-app update prompts
- About 2,500 Vitest cases, including full simulated games
Stack: React 19, TypeScript, Vite, PWA (Workbox), Supabase Realtime and Edge Functions, WebRTC, Vitest

## Naukri project entry

- Title: Paper Games: Multiplayer Game PWA
- Client/type: Personal project
- Description:
Installable multiplayer game app with 86 games.
- Online rooms over Supabase Realtime with room codes and QR join
- Nearby play over local Wi-Fi using WebRTC, no internet needed
- Pass-the-device and computer opponent modes
- Push-to-talk voice chat with a TURN relay
- Works offline through a service worker
- About 2,500 Vitest cases across 84 test files
Stack: React, TypeScript, Vite, Supabase, WebRTC, Vitest
