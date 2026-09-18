import Link from "next/link";

export default function CtaBand({
  title,
  primary = { href: "/investors", label: "Investor overview →" },
  secondary = { href: "/contact", label: "Talk to NSD" },
}: {
  title: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="section--navy section--grain" style={{ paddingBlock: 0 }}>
      <div className="wrap">
        <div className="cta-band reveal">
          <h3>{title}</h3>
          <div className="btn-row">
            <Link href={primary.href} className="btn btn-solid">
              {primary.label}
            </Link>
            <Link href={secondary.href} className="btn btn-line">
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
