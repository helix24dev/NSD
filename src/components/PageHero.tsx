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
    <section className="section section--navy section--grain section--grid page-hero">
      <div className="wrap">
        <div className="crumbs">
          <Link href="/">NSD</Link>
          <i>/</i>
          <span>{crumb}</span>
        </div>
        <h1 className="reveal">{title}</h1>
        <p className="lede reveal" data-delay="120">
          {lede}
        </p>
        {children}
      </div>
    </section>
  );
}
