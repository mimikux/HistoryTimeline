# History Timeline — Cloudflare production backup verification

## Source of truth

- Cloudflare Pages project: `history-timeline`
- Production URL: https://history-timeline-cfb.pages.dev/
- GitHub backup: https://github.com/mimikux/HistoryTimeline
- Supabase application backend: independent of GitHub frontend backup.

## Initial backup captured 2026-10-24

The production root URL returned a complete single-document HTML application (346,109 UTF-8 bytes), containing one embedded `<style>` block and one embedded `<script>` block, with no local separate CSS/JavaScript asset references. The application title was `History Atlas v9.2 Cloud 1.0`; the response header identified `x-history-build: v9.2-cloud-1.6`.

Requests for `/index.html`, `/app.js` and `/sw.js` returned the same HTML fallback content; **these were not separate JavaScript or service worker files** and should not be committed as invented assets.

The exact published HTML was stored in `index.html` and fetched back from GitHub with an exact textual comparison against the live production snapshot (passed).

## Limitations — do not claim a completed disaster-recovery drill

Cloudflare previously reported that History Timeline is deployed with **Pages Functions** and no listed static deployment assets. The deployed original Pages Function / Worker source could **not** be independently retrieved from the public site. This repository therefore preserves the *effective frontend response*, not the original Pages Function authoring project.

A restore using `index.html` alone may recover the interface but must be tested against its Supabase APIs, authentication, security policies and any worker-only routes. It does not back up the PostgreSQL schema, Auth configuration, Supabase Edge Functions, private content, Google Apps Script, secrets, or Google Drive backup history.

## Release process (for all ChatGPT development windows)

1. Inspect live Cloudflare production; do not trust older GitHub sources.
2. Edit and deploy to Cloudflare Preview via the official Cloudflare connection where available.
3. Verify Preview, deploy Production, and verify the live version / data connectivity.
4. Copy the verified effective production frontend to GitHub and link its Cloudflare release ID or build identifier.
5. If Pages Functions implement essential behavior, back up their actual source and route configuration through an authorized, verified source method. Do not invent or overwrite missing functions.
6. Compare saved GitHub files with served production bytes or digests. On any mismatch or authentication blockage, stop and report it, without touching the working site.
7. Treat GitHub as backup only; GitHub Pages/Git integrations must not silently deploy production.

## Safety

- Do not include private tokens or production secrets in this public GitHub repository.
- Production Supabase database data is not modified or overwritten during source backups.
- Repo privacy is currently controlled by its GitHub settings; if the owner wishes private backups, change the visibility to Private before storing nonpublic artifacts.
