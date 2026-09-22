# NSD — Non-Stop Delivery website

Multi-page corporate site for Non Stop Delivery LLC, built with Next.js 16 (App Router) and exported as static HTML.

## Pages

| Route         | Purpose                                                                 |
| ------------- | ----------------------------------------------------------------------- |
| `/`           | Home — hero with fleet illustration, what we do, how it works, why the UAE, numbers, investor bento |
| `/about`      | Company story, facts, how we work, where we are                          |
| `/services`   | What we do: hiring, bikes, keeping riders on the road, reporting          |
| `/delivery-apps` | Talabat, Noon, Keeta, Amazon; why apps use NSD; work with us |
| `/investors`  | Why invest (bento), returns calculator, questions, how it works, enquiry form |
| `/contact`    | Enquiry form and contact details                                         |

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

- `src/app/globals.css` — design tokens (white theme, Poppins, brand orange, fleet palette) and shared component styles (cards, bento, forms).
- `src/lib/site.ts` — company details, contact info, delivery apps list, navigation, fleet colours.
- `src/components/Fleet.tsx` — the multi-colour rider illustration (no branding).
- `src/components/Calculator.tsx` — the interactive returns model (client component, canvas chart).
- `src/components/LeadForm.tsx` — enquiry form; submits via `mailto:` to `info@nonstopdelivery.com`. Swap the `onSubmit` for a form backend (Formspree, Resend, etc.) when one is chosen.
- `public/brand/` — dark logo mark, the D tile used as the hero background pattern.

## Content notes

All figures come from the original investor overview (10+ years in the UAE, 5+ years running fleets, four delivery apps). Nothing numeric has been added; fleet and rider counts are intentionally "available on request". Copy stays in plain language and avoids describing the app relationships in legal terms.
