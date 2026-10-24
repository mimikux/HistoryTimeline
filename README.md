# History Timeline / History Atlas

**Production**: https://history-timeline-cfb.pages.dev/

This repository is a **backup of the published frontend**, **not** the live deployment source. The Cloudflare Pages project `history-timeline` remains the production website. Historical records, authenticated edits and application state are stored in Supabase, not in this GitHub backup.

## Backup snapshot

- Source: live Cloudflare production HTTP response for `/`
- Captured on: 2026-10-24 (Asia/Taipei)
- UI title: `History Atlas v9.2 Cloud 1.0`
- Cloudflare header `x-history-build`: `v9.2-cloud-1.6`
- Current effective frontend: `index.html` (HTML + embedded CSS + JavaScript)
- Verification: GitHub `index.html` was read back and compared byte-for-byte as text with the captured production HTML.
- Verified UTF-8 response size: 346,109 bytes
- Git blob SHA at initial backup: `f5ee3de452d7e4cc554bd8bb0459cc065c2d5aad`

## Maintenance rule

**ChatGPT changes → Cloudflare Preview / Production deployment → verify published site → GitHub backup.**

1. Cloudflare production is authoritative. **Never** deploy older GitHub content over Cloudflare production.
2. Save the new exact effective production source to GitHub after a successful release, including updates made through Cloudflare Pages Functions.
3. Preserve previous GitHub commits and write the production build / deployment reference in the commit message.
4. Never commit service-role keys, passwords, tokens, email contents or private Supabase records.
5. Do not modify Supabase production data as part of a frontend backup.
6. If the Cloudflare connector requires reauthentication, stop without repeatedly prompting or guessing source code. Retrieve the publicly served site if reliable; otherwise report the blocker.

See [CLOUDFLARE-BACKUP.md](CLOUDFLARE-BACKUP.md) for recovery limitations.

**Warning**: This repository was created as **public**. Switch it to Private in GitHub settings if you do not want the source indexed or publicly visible.
