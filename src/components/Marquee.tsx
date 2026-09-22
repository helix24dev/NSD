import { site, fleetColors } from "@/lib/site";

export default function Marquee() {
  const items = [...site.apps, ...site.apps];
  return (
    <div className="marquee" aria-label={`Our riders deliver for ${site.apps.join(", ")}`}>
      <div className="marquee-track">
        {items.map((name, i) => (
          <div className="marquee-item" key={i} aria-hidden={i >= site.apps.length}>
            <i style={{ background: fleetColors[i % fleetColors.length] }} />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
