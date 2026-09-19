# NSD — Non-Stop Delivery website

Multi-page corporate site for Non Stop Delivery LLC, built with Next.js 16 (App Router) and exported as static HTML.

## Pages

| Route         | Purpose                                                                 |
| ------------- | ----------------------------------------------------------------------- |
| `/`           | Home — hero, what we do, how the model works, market, partners, investor teaser |
| `/about`      | Company story, facts ledger, four operating pillars, head office        |
| `/services`   | Fleet & workforce services, "the unit", for-platforms process           |
| `/partners`   | Talabat, Noon, Keeta, Amazon; why platforms work with NSD; become a partner |
| `/investors`  | Investment case, Fleet-to-Returns calculator, due diligence, process, enquiry form |
| `/contact`    | General enquiry form, head office, who-to-contact routing               |

`sitemap.xml`, `robots.txt`, favicons and OpenGraph metadata are generated from `src/lib/site.ts`.

## Develop

Requires Node 22.

```
npm install
npm run dev -- --port 3400
```

## Build / deploy

```
npm run build
```

`next.config.ts` sets `output: "export"`, so the finished site is written to `out/` as plain HTML/CSS/JS. `netlify.toml` configures Netlify (build `npm run build`, publish `out`, Node 22); the same output can be uploaded to any static host. No Node runtime is needed in production.

## Where things live

- `src/app/globals.css` — design tokens and shared component styles (ledgers, cards, buttons, forms).
- `src/lib/site.ts` — company details, contact info, partner list, primary navigation.
- `src/components/Calculator.tsx` — the interactive returns model (client component, canvas chart).
- `src/components/LeadForm.tsx` — enquiry form; submits via `mailto:` to `info@nonstopdelivery.com`. Swap the `onSubmit` for a form backend (Formspree, Resend, etc.) when one is chosen.
- `public/brand/` — logo mark and lockup; `public/images/` — photography.

## Content notes

All figures and claims come from the original investor overview (10+ years UAE, 5+ years 3PL, four contracted platforms, Al Quoz HQ). Nothing numeric has been added; fleet/rider counts are intentionally left as "available on request".
