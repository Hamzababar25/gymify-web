# gymify.pk

Marketing site and legal pages for the Gymify app (https://gymify.pk).

- Next.js 16, static export (`next build` → `out/`), Tailwind 4.
- Hosted as a static-assets Cloudflare Worker named `gymify` with custom domains gymify.pk and www.gymify.pk (`wrangler.jsonc`).
- Deploy: `npx wrangler login` once, then `pnpm run deploy`.
- `src/content/legal.ts` is a copy of the app's `src/constants/legal.ts` (gym-navigator-front-app) — keep them in sync.
- The Play Console uses https://gymify.pk/privacy (privacy policy) and https://gymify.pk/delete-account (account deletion).
- DNS: only the gymify.pk / www records belong to this site. Never touch the MX/SPF (Cloudflare Email Routing) or the Resend records (`send`, `rsend`, `resend._domainkey`, `_dmarc`).
