import fs from "node:fs";
import path from "node:path";

/**
 * Logo strip for the delivery apps our riders work for.
 * Official logo files live in public/logos/<slug>.svg; an app without a file shows as a wordmark.
 */
const apps = [
  { slug: "talabat", name: "Talabat", height: 26 },
  { slug: "noon", name: "noon", height: 40 },
  { slug: "keeta", name: "Keeta", height: 28 },
  { slug: "amazon", name: "amazon", height: 30 },
];

function logoFile(slug: string) {
  for (const ext of ["svg", "png", "webp"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "logos", `${slug}.${ext}`))) return `/logos/${slug}.${ext}`;
  }
  return null;
}

export default function AppLogos({ grid = false }: { grid?: boolean }) {
  return (
    <div className={`logos ${grid ? "logos--grid" : ""}`}>
      {apps.map((a) => {
        const src = logoFile(a.slug);
        return (
          <div className={`logo logo--${a.slug}`} key={a.slug} title={a.name}>
            {src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt={a.name} style={{ height: a.height }} loading="lazy" />
            ) : (
              <span className="wm">{a.name}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
