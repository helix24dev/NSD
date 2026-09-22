import Link from "next/link";
import type { ReactNode } from "react";

export default function PageHero({
  crumb,
  title,
  lede,
  children,
}: {
  crumb: string;
  title: ReactNode;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero d-pattern">
      <div className="wrap">
        <div className="crumbs">
          <Link href="/">Home</Link>
          <i>/</i>
          <span>{crumb}</span>
        </div>
        <h1 className="reveal">{title}</h1>
        <p className="lede reveal" data-delay="100">
          {lede}
        </p>
        {children}
      </div>
    </section>
  );
}
