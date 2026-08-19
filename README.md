# Michelle Turpin P.C.

Production Astro website for Michelle Turpin P.C. GitHub is the source of truth and Netlify is the deployment target.

## Local development

1. Copy `.env.example` to `.env`.
2. The production origin is configured as `https://taxlawsolutions.com`. Override `SITE_URL` only for a separate preview environment. The production Formspree endpoint is already configured; override `PUBLIC_FORMSPREE_ENDPOINT` only when testing against another Formspree form.
3. Run `pnpm install`.
4. Run `pnpm dev`.

All website forms must use Formspree unless the workflow owner explicitly overrides that standard.
