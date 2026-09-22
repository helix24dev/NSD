# Image slots

Every photo on the site is a slot. Drop a file into `public/images/<name>.webp` (or `.jpg` / `.png`) and it is
picked up on the next build; until then the slot shows the multi-colour fleet illustration.

Rules for every image: riders in a mix of colours (orange, yellow, green, blue, red), no logos on uniforms or
boxes, no NSD branding, no readable brand names, UAE setting, daylight, clean and premium.

| File | Where | Size | Prompt |
| --- | --- | --- | --- |
| `home-hero` | Home hero, right side | 1600 x 1200 (4:3) | Editorial photo of five food delivery riders on scooters at a traffic light in Dubai, each wearing a plain uniform in a different bright colour (orange, yellow, green, blue, red) with matching plain delivery boxes, no logos or text anywhere, warm late-afternoon light, modern glass towers softly blurred behind, shallow depth of field, premium commercial photography |
| `home-uae` | Home, "Why the UAE" | 1600 x 1200 (4:3) | A single delivery rider on a scooter riding along a wide Dubai boulevard with the skyline in the background, plain yellow uniform and plain box with no logos, golden hour, motion blur on the road, cinematic wide shot |
| `about-team` | About, "Where we are" | 1600 x 1200 (4:3) | Small operations team of four people in plain navy polo shirts standing confidently in front of a row of clean delivery scooters in a bright depot, no logos or text, natural light, friendly and professional, UAE |
| `services-workshop` | What we do, hero | 1600 x 1000 (16:10) | A mechanic in a plain grey shirt servicing a delivery scooter in a clean, well-lit workshop, tools neatly arranged, a row of scooters in orange, green and blue behind, no logos or text, documentary style |
| `apps-riders` | Delivery apps, "Growing in the UAE" | 1600 x 1200 (4:3) | Four delivery riders in plain uniforms of different colours (orange, yellow, green, blue) waiting with their scooters outside a modern restaurant in Dubai, plain delivery boxes, no logos or text, midday light, candid |
| `investors-fleet` | Investors, "The idea in one minute" | 1600 x 1200 (4:3) | A neat row of twelve brand-new delivery scooters lined up outside a depot in the UAE, alternating plain boxes in orange, yellow, green, blue and red, no logos or text, low angle, crisp morning light, symmetrical |
| `investors-signing` | Investors / How it works | 1600 x 1200 (4:3) | Two business people reviewing and signing documents at a bright modern office desk in Dubai, a tablet and a folder on the table, no readable text, warm natural light, professional and calm |

## Delivery app logos

Put official logo files at `public/logos/talabat.svg`, `public/logos/noon.svg`, `public/logos/keeta.svg` and
`public/logos/amazon.svg` (PNG also works). They replace the coloured wordmarks automatically. Use the
horizontal versions from each company's brand or press page.
