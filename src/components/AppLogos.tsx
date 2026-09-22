import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

/**
 * Logo strip for the delivery apps our riders work for.
 * Drop official logo files into public/logos/<slug>.svg (or .png) and they are used automatically;
 * until then each app is shown as a wordmark in its own brand colours.
 */
const apps = [
  { slug: "talabat", name: "Talabat" },
  { slug: "noon", name: "noon" },
  { slug: "keeta", name: "Keeta" },
  { slug: "amazon", name: "amazon" },
];

function logoFile(slug: string) {
  for (const ext of ["svg", "png", "webp"]) {
    const file = path.join(process.cwd(), "public", "logos", `${slug}.${ext}`);
    if (fs.existsSync(file)) return `/logos/${slug}.${ext}`;
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
              <Image src={src} alt={a.name} width={140} height={30} />
            ) : (
              <span className="wm">{a.name}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
