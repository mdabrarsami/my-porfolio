# Hospix

- Name: Hospix
- One-line description: Hospital management system for Indian clinics: patients, medical records, GST billing, role-based access and a signed offline licence.
- Type: Personal product. The default print template and patient ID prefix (BRNC) are set up for a specific clinic, so it looks like it is being prepared for a client.
- Status: Active development
- Live URL: None
- Repo: github.com/mdabrarsami/Hospix (likely private)
- Dates: 2026-06-20 to 2026-11-04
- Commits: 21

## What it does

Hospix runs the front desk and clinical side of a small hospital or clinic. Staff register patients, write consultations, prescriptions, vitals and lab reports, attach scans and PDFs, and issue itemised GST receipts priced from date-ranged price books. Administrators control what managers and doctors can do through a permission matrix. The backend refuses to run past the limits of an Ed25519-signed licence file, so the product can be sold per installation with seat, record and feature limits.

## Highlights

- React + TypeScript frontend behind a `DataStore` interface with two implementations: a NestJS REST API (SQLite via Drizzle ORM) or fully in-browser IndexedDB with the same seed data
- 13 backend modules (patients, records, attachments, receipts, catalog, price books, template, users, permissions, licensing, backup, reports, health) and 18 frontend screens
- Server-authoritative billing: totals, CGST/SGST split and payment status are computed on the server from line items, never taken from the client
- Ed25519-signed binary licence with seat, record, expiry and feature limits; a separate admin CLI holds the private key and the app only verifies
- 160 tests (140 backend, 20 licence generator), including a full tamper matrix on the licence and concurrent-request tests that prove seat and record limits cannot be raced
- Argon2id login, rotating refresh tokens, Helmet, rate limiting, SHA-256-tracked attachments streamed through authorised endpoints, OpenAPI docs generated from code
- Print designer for A4, A5 and 80 mm thermal receipts with logo, GSTIN, accent colour and live preview
- Deploys with Docker Compose (API + nginx) or as a Windows installer that bundles its own Node.js runtime

## Stack

React 18, TypeScript, Vite, Tailwind CSS, React Router, NestJS 10, SQLite, Drizzle ORM, Argon2id, JWT, Zod, Pino, Swagger/OpenAPI, Jest, Supertest, IndexedDB, Docker, nginx

## Distribution

- Web app (React SPA served by nginx, NestJS API) through Docker Compose
- Windows installer: a local build at `installer/out/Hospix-Setup.exe` (IExpress package with a bundled Node runtime, Start/Stop shortcuts and a PowerShell installer). The `installer/` folder is not committed to git.

## Screenshots

All screenshots use the built-in demo seed data (fictional patients), running in IndexedDB mode on localhost.

- `screenshots/01-dashboard.png`: Dashboard with patient, record, receipt and billing totals, recent receipts and patients
- `screenshots/02-patients.png`: Patient list with UHIDs, search and actions
- `screenshots/03-medical-records.png`: Medical records across departments with type and diagnosis
- `screenshots/04-role-permissions.png`: Role permission matrix for Administrator, Manager and Doctor

The Print Designer screen was left out on purpose: its default template shows a real clinic's name, address, phone, email and a doctor's registration number.

## Portfolio card copy

- Title: Hospix
- Blurb: Hospital management system with patient records, GST billing, a receipt print designer and role-based access, enforced by an Ed25519-signed offline licence. 160 tests.
- Tags: React, NestJS, SQLite, TypeScript, Healthcare

## LinkedIn project entry

Title: Hospix: Hospital Management System

Description:
A hospital and clinic management system for Indian healthcare, built to be installed per site and licensed offline.
- Patient registration with server-allocated UHIDs, medical records (consultations, prescriptions, vitals, lab reports) and file attachments with SHA-256 checksums
- GST receipts priced from date-ranged price books, with CGST/SGST split and totals computed on the server
- Print designer for A4, A5 and 80 mm thermal receipts with live preview
- Role and permission matrix for Administrator, Manager and Doctor, enforced in the API
- Ed25519-signed licence with seat, record and feature limits; a separate admin CLI signs, the app only verifies
- 160 tests, including a licence tamper matrix and concurrent-request tests on the limit boundaries
- Frontend runs against a NestJS + SQLite API or fully in the browser on IndexedDB through one DataStore interface
- Ships with Docker Compose (API + nginx) or as a Windows installer with a bundled Node runtime
Stack: React, TypeScript, Vite, Tailwind CSS, NestJS, SQLite, Drizzle ORM, Argon2id, JWT, Jest, Docker, nginx

## Naukri project entry

- Title: Hospix: Hospital Management System
- Client/type: Personal product
- Description:
Hospital management web app for Indian clinics with offline licensing.
- Patients, medical records, attachments and GST receipts with CGST/SGST split
- Billing totals computed on the server from line items
- Receipt print designer for A4, A5 and thermal printers
- Role and permission matrix enforced in a NestJS API
- Ed25519-signed licence with seat, record and feature limits
- 160 Jest tests, including licence tampering and race-condition tests
- Docker Compose and Windows installer deployment
Stack: React, TypeScript, NestJS, SQLite, Drizzle ORM, Docker
