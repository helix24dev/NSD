import { site } from "@/lib/site";

export default function Marquee() {
  const items = [...site.partners, ...site.partners];
  return (
    <div className="marquee" aria-label="Contracted fleet and workforce partner to Talabat, Noon, Keeta and Amazon">
      <div className="marquee-track">
        {items.map((name, i) => (
          <div className="marquee-item" key={i} aria-hidden={i >= site.partners.length}>
            <span className="name">{name}</span>
            <span className="sep">Contracted partner</span>
          </div>
        ))}
      </div>
    </div>
  );
}
