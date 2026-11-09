# DentOS (dental_crm)

- One-line description: Multi-tenant dental clinic management platform for India with row-level tenant isolation, GST billing, odontogram charting and a configurable CRM platform layer.
- Type: personal (product in development; a real clinic, Eva Dental, is registered as a company in the config, so check before calling it client work)
- Status: in development, not deployed
- Live URL: none
- Repo: github.com/mdabrarsami/dental_crm (private at time of writing)
- Dates: 2026-07-11 to 2026-08-12 (first to last commit)
- Commits: 119

## What it does

DentOS is practice management software for Indian dental clinics: patients, appointments, odontogram, case sheets, treatment plans, prescriptions, GST billing, inventory and lab orders. Underneath it has a CRM-style platform layer with custom objects and fields, a rules engine, workflows, a report builder and a print layout designer. Security is enforced in the database: Postgres row-level security isolates tenants, and append-only audit triggers record changes to clinical and financial tables.

## Highlights

- NestJS API with 36 controllers and about 290 routes, all documented in Swagger; Next.js 14 web app with 57 pages
- Tenant isolation in Postgres RLS: a non-superuser app role, `SET LOCAL app.tenant_id` per request inside a pinned transaction, plus an e2e test that proves cross-tenant reads fail
- Auth with JWT access and rotating refresh tokens, Argon2id hashing, TOTP MFA, scoped API keys and an active-sessions view with revoke
- RBAC as a BIGINT permission bitmask checked with a bitwise AND guard
- Immutable audit log: DB triggers block UPDATE and DELETE, and the viewer shows old/new value diffs
- SQL-first schema in 38 numbered, idempotent SQL files (plus separate Postgres and SQL Server schema packs), accessed through pooled parameterized `pg` queries
- Database-per-company provisioning with setup wizards and dialect drivers for Postgres and SQL Server behind framework-free engine ports
- Odontogram with procedure fills and status glyphs, GST engine, report builder with five chart types, multi-page print designer, Excel import, enterprise data grid; 41 Jest unit tests pass

## Stack

NestJS 10, TypeScript, PostgreSQL (RLS, triggers), raw `pg` with parameterized SQL, SQL Server driver (mssql), Argon2, otplib, Swagger, Winston, Next.js 14, React 18, Tailwind CSS, TanStack Query, FullCalendar, Recharts, dnd-kit, Docker Compose (Postgres 18, Redis, MinIO), Jest.

## Distribution

Web app (SaaS, self-hostable through Docker Compose). Not deployed publicly.

## Screenshots

- `screenshots/01-login.png`: sign-in page with company picker (test company selected), username and password, plus the product pitch panel
- `screenshots/02-api-docs.png`: Swagger UI for the DentOS API (`/api/v1`), analytics endpoints shown
- `screenshots/03-mobile-login.png`: mobile sign-in layout

The dashboard screens were not captured. Signing in needs a per-company superuser password that is not stored in the repo, and the only other company configured is a real clinic, so no screenshots were taken past the login page.

## Portfolio card copy

- Title: DentOS
- Blurb: Multi-tenant dental clinic platform with Postgres row-level security, TOTP MFA, GST billing, odontogram charting and a no-code rules and report builder.
- Tags: NestJS, Next.js, PostgreSQL, TypeScript, Multi-tenant

## LinkedIn project entry

Title: DentOS: multi-tenant dental clinic management platform

Description:
Practice management software for Indian dental clinics, built as a NestJS modular monolith with a Next.js front end. Tenant isolation and audit are enforced in the database, not only in application code.
- 36 API controllers and about 290 routes documented in Swagger; 57 pages in the Next.js app
- Postgres row-level security with a non-superuser app role and per-request tenant context, backed by an e2e isolation test
- JWT with rotating refresh tokens, Argon2id, TOTP MFA, scoped API keys and session revoke
- RBAC permission bitmask and an append-only audit log enforced by DB triggers
- Clinical modules: patients, appointments, odontogram, case sheets, treatment plans, prescriptions with allergy checks
- GST billing engine, credit notes, inventory and lab orders
- Platform layer: custom objects and fields, rules engine with versioning, workflows, report builder, multi-page print designer, Excel import
- Database-per-company provisioning with Postgres and SQL Server dialect drivers
Stack: NestJS, TypeScript, PostgreSQL, SQL Server, Next.js, React, Tailwind CSS, TanStack Query, Docker, Jest

## Naukri project entry

Title: DentOS - Dental Clinic Management Platform
Client/type: Personal project (SaaS product, in development)
Description:
Multi-tenant clinic management system for Indian dental practices.
- NestJS API with 36 controllers and about 290 Swagger-documented routes
- Next.js 14 front end with 57 pages
- Postgres row-level security for tenant isolation, verified by an e2e test
- JWT, Argon2id, TOTP MFA, RBAC bitmask, DB-enforced immutable audit log
- Patients, appointments, odontogram, treatment plans, prescriptions, GST billing, inventory, lab
- Rules engine, workflows, report builder and print designer
- Tech: NestJS, TypeScript, PostgreSQL, SQL Server, Next.js, Tailwind, Docker
