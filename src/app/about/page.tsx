import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Idx from "@/components/Idx";
import StatLedger from "@/components/StatLedger";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Non Stop Delivery LLC — a Dubai-based fleet and workforce operator with 10+ years in UAE logistics and 5+ years of dedicated 3PL expertise.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title={
          <>
            Ten years on UAE roads. <em>Built for platforms.</em>
          </>
        }
        lede="Non Stop Delivery LLC is a Dubai-headquartered fleet and workforce operator. We supply the riders and bikes that keep the UAE's largest delivery platforms moving — and we don't compete with them."
      >
        <div style={{ marginTop: 56 }}>
          <StatLedger />
        </div>
      </PageHero>

      <section className="section section--paper">
        <div className="wrap">
          <div className="two">
            <div>
              <Idx n="01 / 04" label="Who we are" />
              <h2 className="h-lg reveal">A supply partner, one layer back from the customer.</h2>
            </div>
            <div className="copy reveal" data-delay="120">
              <p>
                NSD has operated in UAE logistics for more than a decade, with the last five-plus years dedicated
                to third-party fleet and workforce supply. Today we are a contracted partner to Talabat, Noon,
                Keeta and Amazon.
              </p>
              <p>
                Our model is deliberately narrow. Platforms own the customer, the app and the order. NSD owns the
                hard operational layer underneath: recruiting and training riders, running and maintaining a
                motorbike fleet, and keeping units deployed reliably, shift after shift.
              </p>
              <p>
                That focus is what lets us scale supply as fast as our partners scale demand — and what turns
                every deployed unit into contracted, recurring revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper-2" id="facts">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Idx n="02 / 04" label="Company facts" />
              <h2 className="h-lg reveal">At a glance.</h2>
              <p className="lede reveal" data-delay="100">
                A concise operating profile for initial review. Further detail is available during diligence.
              </p>
            </div>
          </div>
          <div className="fact-grid reveal">
            <div className="fact-col">
              <div className="fact-row"><span>Legal entity</span><b>{site.legal}</b></div>
              <div className="fact-row"><span>Sector</span><b>Logistics — 3PL fleet &amp; workforce</b></div>
              <div className="fact-row"><span>Headquarters</span><b>Al Quoz 2, Dubai, UAE</b></div>
              <div className="fact-row"><span>Operating history</span><b>10+ years in UAE logistics</b></div>
              <div className="fact-row"><span>3PL specialisation</span><b>5+ years dedicated</b></div>
            </div>
            <div className="fact-col">
              <div className="fact-row"><span>Business model</span><b>B2B fleet &amp; workforce supply</b></div>
              <div className="fact-row"><span>Contracted platforms</span><b>Talabat, Noon, Keeta, Amazon</b></div>
              <div className="fact-row"><span>Fleet type</span><b>Motorbikes — rider + bike units</b></div>
              <div className="fact-row"><span>Revenue model</span><b>Contracted, recurring per unit</b></div>
              <div className="fact-row"><span>Governing law</span><b>UAE — court-attested agreements</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--navy-mid section--grain" id="how-we-operate">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Idx n="03 / 04" label="How we operate" />
              <h2 className="h-lg reveal">Four operating pillars.</h2>
              <p className="lede reveal" data-delay="100">
                Built on evidence a partner or investor can verify, not broad claims.
              </p>
            </div>
          </div>
          <div className="reveal">
            {[
              ["W-01", "Platform partnerships", "Long-term contracts with Talabat, Noon, Keeta and Amazon anchor demand. Relationship scope and contract evidence are available for review in diligence."],
              ["W-02", "Strong UAE legal framework", "Agreements follow UAE law, including court-attested MOUs. Rights and remedies are set out in the transaction documents."],
              ["W-03", "Transparent reporting", "Regular reporting through NSD's MIS/CRM systems gives visibility into deployed units and performance."],
              ["W-04", "Scalable fleet economics", "More bikes and riders deployed can increase contracted income — the investor model makes the unit economics explicit."],
            ].map(([n, t, d]) => (
              <div className="case-row" key={n}>
                <div className="cn mono">{n}</div>
                <div className="ct">
                  <h4>{t}</h4>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper" id="hq">
        <div className="wrap">
          <div className="two two--center two--wide">
            <div className="photo reveal" style={{ aspectRatio: "3/2" }}>
              <Image
                src="/images/rider-on-shift.jpg"
                alt="An NSD rider on shift for a partner delivery platform"
                width={1248}
                height={832}
                sizes="(max-width: 900px) 100vw, 45vw"
              />
              <div className="photo-tag">Al Quoz 2 · Dubai</div>
            </div>
            <div>
              <Idx n="04 / 04" label="Head office" />
              <h2 className="h-lg reveal">Based in Al Quoz, operating across the UAE.</h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                Our depot and head office sit in Al Quoz 2, Dubai — central to the platforms we serve and the
                zones our riders work.
              </p>
              <div className="copy reveal" data-delay="160" style={{ marginTop: 24 }}>
                <p className="mono" style={{ fontSize: 13.5, lineHeight: 1.9 }}>
                  {site.legal}
                  <br />
                  {site.address[0]}
                  <br />
                  {site.address[1]}
                  <br />
                  <a href={site.phoneHref} className="arrow-link">
                    {site.phone}
                  </a>
                  <br />
                  <a href={`mailto:${site.email}`} className="arrow-link">
                    {site.email}
                  </a>
                </p>
              </div>
              <div className="btn-row reveal" data-delay="220">
                <Link href="/contact" className="btn btn-solid">
                  Contact NSD →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Want the full operating profile? Start with the investor overview." />
    </>
  );
}
