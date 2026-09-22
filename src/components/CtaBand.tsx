import Link from "next/link";

export default function CtaBand({
  title,
  primary = { href: "/investors", label: "For investors" },
  secondary = { href: "/contact", label: "Talk to us" },
}: {
  title: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta-band reveal">
          <h3>{title}</h3>
          <div className="btn-row">
            <Link href={primary.href} className="btn btn-primary">
              {primary.label}
            </Link>
            <Link href={secondary.href} className="btn btn-secondary">
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
