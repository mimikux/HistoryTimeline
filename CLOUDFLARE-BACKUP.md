# History Timeline — Cloudflare production recovery record

## Current deployment — 2026-10-31 (Asia/Taipei) · Cloud 1.9

- **Production:** https://history-timeline-cfb.pages.dev/ · **Cloudflare deployment:** `87183b06-4b74-49ec-ad38-cb6c7b075a0c` (environment `production`, branch `main`, `success`, Pages Functions enabled).
- **Tested Preview:** `726afe3a-5451-4ded-bf75-b5bceba80de4` (branch `history-v19-label-layout-preview`, status `success`).
- **Rollback to Cloud 1.8:** `d46a7f18-3976-434c-a157-79572cc3107c`.
- **Frontend backup:** `index.html` Git blob `4e11109a727e947d501fa4e4b67bbc07fc0d3f38`; **exact deployed Worker:** `deployment/_worker.js` blob `8aa44176ead60e224ce3ebfffde597fe478c8a05`.
- **UI change 1 — consistent West Asia presentation labels:** `persia` displays **伊朗／波斯**, `turkey` displays **土耳其／安那托利亞**, `mesopotamia` displays **伊拉克／兩河流域**. Display labels use modern-place name first and historical geography second, separated by a fullwidth slash. Mesopotamia also spans parts of modern Syria/Turkey; the UI includes a contextual tooltip. Authoritative cloud region names and stable IDs remain **unchanged**, including the underlying `mesopotamia` DB label, and region management editing continues to expose the raw stored label.
- **UI change 2 — European filter layout:** The ten macro-region chips now use the **same flex-wrap, content-width pill layout as Asian filter regions** on both mobile and desktop. Previously each Europe chip occupied half a grid row. Grouping, timeline logic and source event metadata are preserved.
- **Safety:** No Supabase database schema, data rows, events, region IDs, settings, auth or Edge Functions were changed by this release. Post-release read-only check: 364 events, 5 continents, global database revision **988** (may change independently of frontend deploy). This version modifies display/CSS/client labels only.
- **Verification:** Cloudflare compiled and deployed the Preview and Production Worker successfully and made the new Production canonical; source and Worker GitHub `main` copies match the tested Preview by blob SHA. **Real browser visual checks and Owner session testing could not be performed** using the available tools and remain recommended.


## Previous deployment — 2026-10-31 (Cloud 1.8)

| Field | Verified value |
|---|---|
| Pages project | `history-timeline` |
| Domain | https://history-timeline-cfb.pages.dev/ |
| Version | `v9.2-cloud-1.8` |
| Production branch and status | `main`, `success`, `uses_functions:true` |
| Canonical deployment ID | `d46a7f18-3976-434c-a157-79572cc3107c` |
| Verified Preview deployment | `0397cabe-d5f7-4a46-9634-bfc11c14ecda` |
| Previous production / rollback candidate | `c549a2c7-18ff-4391-8f2c-a65e48c34608` |
| Frontend GitHub blob SHA | `5d7532c262086822a1e8f8186f8013e212f6532e` |
| Full Worker GitHub blob SHA | `c0778fe50078695abfe6617e268233d0f04e4a6f` |
| Supabase read-only snapshot | 364 events, 5 continents, revision 950 |

The exact Pages Worker deployed to Preview and Production is archived in `deployment/_worker.js` and embeds `index.html`. The new version changes **only the presentation/frontend behavior**: ten European macro groups, combined regional timeline lanes, and a macro-based event editor which retains original regionIds. A newly created event may use semantic macro IDs such as `geo-central`, `geo-eastern` or `geo-balkans` instead of a falsely precise country ID. These are understood by the new frontend and permitted by the existing backend schema.

### Verification completed

- Preview compiled and deployed successfully; `uses_functions:true`.
- Production deployed to `main`, became the canonical release and reported `success`, `uses_functions:true`.
- All 17 historic European child region IDs mapped exactly once. Auth, import, cloud API request, and seed source blocks were unchanged.
- GitHub `index.html` and `deployment/_worker.js` mirrored exactly and were verified using their Git blob SHAs.
- Supabase was queried read-only after release. **No production data was changed by this release.**

### Verification still required from a real browser

Open the production URL, check Europe macro filters, same-region de-duplication in the timeline, an existing event's retained precise labels, and an Owner edit-save without changing any original geographic ID. Browser-level checks cannot be claimed complete because external Pages URL requests were blocked by the available tool environment.

### Rollback

Cloud 1.7 deployment `c549a2c7-18ff-4391-8f2c-a65e48c34608` is the last successful Production before this change. Any rollback must be deliberate and scoped to Cloudflare Pages: Supabase is independent and must **not** be rolled back implicitly. Only restore previous release if a regression is confirmed.


## Previous deployment (2026-10-25)

| Field | Verified value |
|---|---|
| Pages project | `history-timeline` |
| Domain | https://history-timeline-cfb.pages.dev/ |
| Version | `v9.2-cloud-1.7` |
| Production branch | `main` |
| Production deployment ID | `c549a2c7-18ff-4391-8f2c-a65e48c34608` |
| Production API state | `success`, `uses_functions:true` |
| Preview deployment ID | `b1be4381-3283-4bc4-b6a6-9df432897b63` |
| Previous production / rollback candidate | `94216ead-8285-4d7d-b628-97178897634c` |
| GitHub frontend `index.html` blob SHA | `f8a24121306de23745cd9bc78ea37e0e877fb3ce` |
| Worker bundle source | `deployment/_worker.js` (559,360 characters) |
| Supabase post-release read-only count | 356 events, 5 continents |

## What is backed up

- `index.html` is the entire Cloud 1.7 frontend: CSS, HTML and embedded application JS. Includes search, geographic groups, Owner device access and direct Supabase API functionality.
- `deployment/_worker.js` is the **actual uploaded Cloud 1.7 Pages Worker source** used by Preview and Production. It embeds the `index.html` document, compiles the same inline JS inside an uninvoked function, and serves HTML for `GET`/`HEAD` while adding `x-history-build`. The exact Worker source was reproduced from the verified candidate and stored after successful production release.
- GitHub commit history retains the previous v1.6 frontend and earlier backups; Cloudflare has historical deployments.

## Verification completed

1. Inspected previous Cloudflare canonical production before deployment.
2. Used Cloudflare Pages Direct Upload API with `manifest={}` and full `_worker.js`, first to a Preview branch, then `main`.
3. Preview reported `success` and `uses_functions:true`; client JS syntax was parsed during Worker compilation.
4. Production returned `environment:production`, `branch:main`, `success`, `uses_functions:true` and became the canonical deployment.
5. Queried Supabase read-only: 356 event rows and five continents, without altering the data.
6. Copied exact tested app frontend to GitHub `main`; release source Git blob matched candidate SHA.

## Important limitations

- The legacy production Pages Worker/Functions source **was never independently retrieved**. The deployed Cloud 1.7 Worker is an explicitly authored self-contained wrapper for the known frontend. If the old release had private worker-only routes not visible from client code, their behavior was not reproduced or verified. Do not claim a full legacy Worker source recovery.
- The Cloudflare tool environment blocked direct external-domain HTTP/browser checks of `*.pages.dev`. Therefore **browser UI inspection, real Owner login and authenticated cross-device CRUD** were not independently performed here. Cloudflare's `success` is a deployment and script validation result, not a substitute for those checks.
- The GitHub repo is a source backup, **not** the auto-deployment origin for this Pages project.
- Postgres schema, RLS, Supabase Auth, Edge Functions, secrets, backup snapshots, and Apps Script are stored separately. GitHub source alone is not a complete disaster recovery package.

## Release and rollback procedure

1. Read Cloudflare Pages `canonical_deployment` and verify project and production branch, rather than `latest_deployment` which can refer to Preview.
2. Make targeted changes to `index.html`; compile a Pages `_worker.js` from the full client HTML, preserving the same Supabase endpoint configuration.
3. Create a unique Preview branch using Cloudflare Pages Direct Upload; confirm status `success`, function mode, and where available test Preview on an actual browser.
4. Only after validating Preview, deploy exact candidate to `main` and confirm it becomes canonical.
5. Keep release identifiers, update `index.html` and `deployment/_worker.js` backup in GitHub; verify readback.
6. If release causes a regression, consider a Cloudflare Pages **rollback** to the previous successful production deployment `94216ead-8285-4d7d-b628-97178897634c` after confirming its status and the requested revert; this does **not** roll back Supabase data.

## Security

Do not add service-role secrets, OAuth access tokens, personal email data or unredacted private Supabase records to this repository. Repository was previously configured as public.
