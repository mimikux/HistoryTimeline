# History Timeline / History Atlas

**Production:** https://history-timeline-cfb.pages.dev/

This repository stores the deployed **frontend and Cloudflare Pages Worker release source** as a recovery backup. It is **not connected as the automatic Cloudflare deployment source**. Cloudflare Pages project `history-timeline` is authoritative; all historic event records, user authentication and owner settings live in Supabase.

## Current release — 2026-10-31 (Asia/Taipei)

- **Version:** History Atlas v9.2 Cloud 1.8
- **Production:** [history-timeline-cfb.pages.dev](https://history-timeline-cfb.pages.dev/)
- **Cloudflare production deployment:** `d46a7f18-3976-434c-a157-79572cc3107c`; environment `production`, branch `main`, stage `success`, Pages Functions enabled.
- **Preview deployment:** `0397cabe-d5f7-4a46-9634-bfc11c14ecda` (`history-v18-macro-final`, `success`).
- **Rollback candidate:** Cloud 1.7 production `c549a2c7-18ff-4391-8f2c-a65e48c34608`.
- **GitHub release source:** `index.html` blob `5d7532c262086822a1e8f8186f8013e212f6532e`; exact `deployment/_worker.js` blob `c0778fe50078695abfe6617e268233d0f04e4a6f`.
- **Supabase post-release read-only check:** 364 events, five continents, global data revision 950. No database edits, migrations or event ID changes were executed.

### UI geography rules

The previous nested East Europe/Balkans fold has been replaced by **ten European display/filter regions**: 英國, 法國, 德意志, 義大利, 西班牙, 低地國, 北歐, 中歐, 東歐 and 巴爾幹半島. All **17 existing** Europe child IDs map to exactly one macro group. Central Europe includes Austria, Czechia, Poland and future Hungary/Slovakia tags; East Europe includes the existing Eastern-Europe ID and future Estonia/Latvia/Lithuania, Belarus, Ukraine and Moldova; Balkan includes Greece, Serbia, Bosnia, Romania, Bulgaria and related countries.

- European sidebar filter and event-edit region checkboxes show macro regions, not all countries.
- Events with several historic country IDs within one macro group render in **one** regional timeline lane. Cross-macro event relationships remain intact; do not globally deduplicate meaningful cross-region events.
- Detailed original country IDs and notes remain stored without changes. Editing an existing event and leaving its region group checked retains all historic original region IDs, rather than overwriting them.
- For **new** events that only select a macro group, `regionIds` contains the macro ID itself (for example, `geo-central`), not an invented specific country. The frontend `findContinent`, `nameFor`, filter, editor and timeline handlers recognize these IDs. The precise place and historical polity belong in `notes`. Do not remove these mappings when updating the app.
- Non-European continents, search, time zoom, Supabase login/sync and backup/import logic were intentionally retained.

### Verification scope

Static source checks confirmed all 17 existing European region IDs map exactly once, representative synthetic grouping cases pass, and seed/import/auth/database request sections match the previous GitHub source. Cloudflare successfully compiled/created Preview and Production Pages Functions, and Production became the canonical deployment. The GitHub `main` backup HTML and Worker blob SHAs exactly match the verified release candidate.

**Not independently exercised:** external browser rendering, mobile clicks, real Owner authentication and user-initiated save. The assistant's external Page URL fetch was blocked. Cloudflare API `success` confirms deployment/compile, not a real browser functional smoke test.

## Previous release — 2026-10-25 (Asia/Taipei)

- Version: **History Atlas v9.2 Cloud 1.7**
- Production deployment: `c549a2c7-18ff-4391-8f2c-a65e48c34608` (`main`, Cloudflare reports `success`, `uses_functions:true`)
- Tested deployment candidate: `b1be4381-3283-4bc4-b6a6-9df432897b63` (Preview, `history-v17-release-preview`)
- Production: https://history-timeline-cfb.pages.dev/
- GitHub `index.html` blob SHA: `f8a24121306de23745cd9bc78ea37e0e877fb3ce`
- Full Pages Worker release source: `deployment/_worker.js` (559,360 JavaScript characters).
- Production Worker responds with `x-history-build: v9.2-cloud-1.7`, serves inline HTML/CSS/JS and preserves direct Supabase client access. `index.html` is the exact client document embedded in the deployed Worker.
- Prior production rollback reference: `94216ead-8285-4d7d-b628-97178897634c` (Cloud 1.6).

### Changes in Cloud 1.7

1. Expandable East Europe + Balkans geography hierarchy: collapsed single group by default; countries and timeline lanes expand without rewriting source event labels. Greece remains independent.
2. New magnifier next to settings opens a mobile-safe full search dialog, live event matching and event navigation.
3. Year zoom sequence: `500, 200, 100, 50, 20, 10, 5`.

## Checks and limits

Cloudflare reported a successful Preview and Production deployment with Pages Functions enabled. The source JS was parsed by the Worker compiler as part of the Preview deployment. The repository copy of `index.html` was verified byte-for-byte via GitHub blob SHA against the released candidate. Supabase had **356 events and 5 continents** following release (read-only check); no database migration, update or deletion was run.

**Browser-based smoke testing / external-site HTML readback were not available to the assistant in this release session**, so do not label these as completed. These should be tested on a browser: geographic folding and its timeline lanes, searching and opening an event, zoom to 5 years, Owner login, writing and reloading a test event.

## Maintenance and recovery

**ChatGPT source change → isolated Cloudflare Preview → deploy `main` → verify release and data → update GitHub backup.** Do not treat Cloudflare's global latest deployment as the current production: a recent Preview may be newer. Check `canonical_deployment`, production environment and branch.

- `index.html`: the visible app including inline CSS and JavaScript.
- `deployment/_worker.js`: a release-archived, deployable Cloudflare Pages Function wrapper for the exact Cloud 1.7 UI. It was deployed using Pages Direct Upload with an empty asset manifest and the `_worker.js` multipart file.
- Historic old Worker original source could not be independently read through the Cloudflare Workers Scripts API; Cloud 1.7 contains a newly authored self-contained Worker wrapper replacing its served frontend. Other old, unknown Pages Function routes could not be independently proven equivalent.
- Repository does not backup Supabase database schema, service secrets, Auth configuration, Supabase Edge Functions, Google Apps Script or Google Drive backup history. Separate backup those systems.
- See [CLOUDFLARE-BACKUP.md](CLOUDFLARE-BACKUP.md) for limitations and rollback policy.

**Security:** Do not commit service-role keys, private tokens, passwords or personal Supabase records. Repository visibility was previously public; inspect or change to private if you do not want the frontend code publicly indexed.
