import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Idx from "@/components/Idx";
import Marquee from "@/components/Marquee";
import CtaBand from "@/components/CtaBand";
import styles from "./partners.module.css";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "NSD is a contracted fleet and workforce partner to Talabat, Noon, Keeta and Amazon in the UAE, supplying rider and motorbike units under long-term agreements.",
};

const partners = [
  { n: "01", name: "Talabat", kind: "Food & grocery delivery platform" },
  { n: "02", name: "Noon", kind: "E-commerce & quick-commerce platform" },
  { n: "03", name: "Keeta", kind: "Food delivery platform" },
  { n: "04", name: "Amazon", kind: "E-commerce & last-mile delivery" },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        crumb="Partners"
        title={
          <>
            Contracted partner to the UAE&rsquo;s <em>leading platforms.</em>
          </>
        }
        lede="NSD supplies rider and bike units to four major delivery and e-commerce platforms under long-term agreements. We don't compete with them — we keep them supplied."
      />

      <div className="section--navy" style={{ paddingBottom: 0 }}>
        <Marquee />
      </div>

      <section className="section section--paper" id="platforms">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Idx n="01 / 03" label="Platform partners" />
              <h2 className="h-lg reveal">Four platforms. One supply partner.</h2>
              <p className="lede reveal" data-delay="100">
                Relationship start dates, active status and contracted scope for each platform are available for
                review during diligence.
              </p>
            </div>
          </div>
          <div className={styles.grid}>
            {partners.map((p, i) => (
              <div className={`${styles.cell} reveal`} data-delay={i * 80} key={p.name}>
                <span className={`${styles.n} mono`}>{p.n}</span>
                <span className={styles.name}>{p.name}</span>
                <span className={styles.kind}>{p.kind}</span>
                <ul className={styles.list}>
                  <li>Contracted rider + bike units</li>
                  <li>Riders work the platform&rsquo;s app</li>
                  <li>NSD operates the fleet &amp; workforce layer</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy-mid section--grain" id="why">
        <div className="wrap">
          <div className="two">
            <div>
              <Idx n="02 / 03" label="Why platforms work with NSD" />
              <h2 className="h-lg reveal">Supply, not competition.</h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                Platforms own the customer and the order. NSD owns the operational layer underneath — and stays
                there.
              </p>
            </div>
            <div className="reveal" data-delay="140">
              {[
                ["A decade on UAE roads", "10+ years in UAE logistics and 5+ years of dedicated 3PL supply."],
                ["Ready-trained capacity", "Riders arrive trained to the platform's SOPs and documented for compliance."],
                ["Maintained fleet", "NSD-run motorbikes with servicing and downtime cover keep utilisation high."],
                ["Contracts under UAE law", "Court-attested agreements and a defined reporting cadence."],
              ].map(([t, d]) => (
                <div className="mk-point" key={t}>
                  <div className="mk" />
                  <div>
                    <h4>{t}</h4>
                    <p>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper-2" id="become">
        <div className="wrap">
          <div className="two two--center">
            <div>
              <Idx n="03 / 03" label="Become a partner" />
              <h2 className="h-lg reveal">Scaling in the UAE? Add NSD as a supply partner.</h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                Share the zones, unit count and start date. We&rsquo;ll scope the requirement and come back
                with per-unit terms.
              </p>
              <div className="btn-row reveal" data-delay="160">
                <Link href="/contact" className="btn btn-solid">
                  Request capacity →
                </Link>
                <Link href="/services" className="btn btn-line">
                  What we supply
                </Link>
              </div>
            </div>
            <div className="card-grid reveal" data-delay="140" style={{ gridTemplateColumns: "1fr" }}>
              <div className="card">
                <div className="cn">FOR PLATFORMS</div>
                <h4>What a partnership includes</h4>
                <ul>
                  <li>Recruited, trained and documented riders</li>
                  <li>NSD-owned, maintained motorbikes</li>
                  <li>Deployment to your app, at your pace</li>
                  <li>MIS/CRM reporting on a defined cadence</li>
                  <li>Contract under UAE law</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Capacity for platforms. Returns for investors."
        primary={{ href: "/contact", label: "Request capacity →" }}
        secondary={{ href: "/investors", label: "Investor overview" }}
      />
    </>
  );
}
