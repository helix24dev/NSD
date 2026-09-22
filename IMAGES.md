# Images and logos

## Artwork (`public/images/`)

Transparent WebP cut-outs, rendered by `src/components/Picture.tsx` at their natural aspect ratio with a soft drop shadow.

| File | Size | Used on |
| --- | --- | --- |
| `riders-front.webp` | 1500 x 908 | Home hero, Delivery apps |
| `riders-back.webp` | 1522 x 896 | Home (Why the UAE), About |
| `fleet-bikes.webp` | 1600 x 752 | What we do hero, Investors overview |

All three show riders and bikes in five colours (orange, yellow, green, blue, red) with plain boxes and no branding.
To swap one, replace the file and update its size in `Picture.tsx`.

## Delivery app logos (`public/logos/`)

`src/components/AppLogos.tsx` renders `<slug>.svg` when present and a wordmark otherwise.

| App | File | Source |
| --- | --- | --- |
| Talabat | `talabat.svg` | Wikimedia Commons, File:Talabat logo.svg |
| Noon | `noon.svg` | Wikimedia Commons, File:Noon Website Logo.svg |
| Amazon | `amazon.svg` | Wikimedia Commons, File:Amazon logo.svg |
| Keeta | none yet, shows as a wordmark | Add `keeta.svg` (or .png) from Keeta's brand assets |

These are third-party trademarks shown to identify the apps our riders deliver for.
