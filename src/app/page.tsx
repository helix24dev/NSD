import Link from "next/link";
import Image from "next/image";
import Idx from "@/components/Idx";
import RouteDiagram from "@/components/RouteDiagram";
import Marquee from "@/components/Marquee";
import StatLedger from "@/components/StatLedger";
import CtaBand from "@/components/CtaBand";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className={`section--navy section--grain section--grid ${styles.hero}`}>
        <div className="wrap">
          <div className={styles.heroTop}>
            <div>
              <Idx label="Non-Stop Delivery · Dubai, UAE" />
              <h1 className={`${styles.h1} reveal`}>
                Fleet &amp; workforce operator for the UAE&rsquo;s <em>top delivery platforms.</em>
              </h1>
              <p className={`lede ${styles.heroLede} reveal`} data-delay="120">
                NSD supplies trained riders and maintained bikes under contract to Talabat, Noon, Keeta and
                Amazon — and earns recurring revenue per unit deployed.
              </p>
              <div className="btn-row reveal" data-delay="220">
                <Link href="/services" className="btn btn-solid">
                  What we supply →
                </Link>
                <Link href="/investors" className="btn btn-line">
                  Investor overview
                </Link>
              </div>
            </div>

            <div className={`${styles.ledger} reveal`} data-delay="300">
              <div className={styles.ledgerCap}>Key figures</div>
              <div className={styles.row}>
                <span>Operating in UAE</span>
                <b className="mono tnum">10+ yrs</b>
              </div>
              <div className={styles.row}>
                <span>Dedicated 3PL expertise</span>
                <b className="mono tnum">5+ yrs</b>
              </div>
              <div className={styles.row}>
                <span>Contracted platforms</span>
                <b className="mono tnum">4</b>
              </div>
              <div className={styles.row}>
                <span>Business model</span>
                <b className="mono">B2B fleet + workforce</b>
              </div>
              <div className={styles.row}>
                <span>Revenue model</span>
                <b className="mono">Contracted / recurring</b>
              </div>
            </div>
          </div>

          <div className={styles.route}>
            <RouteDiagram />
          </div>
        </div>

        <div className={styles.marqueeWrap}>
          <Marquee />
        </div>

        <div className="wrap">
          <StatLedger />
        </div>
      </section>

      {/* ---------------- WHAT WE DO ---------------- */}
      <section className="section section--paper" id="what">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Idx label="What NSD does" />
              <h2 className="h-lg reveal">
                We keep the platforms running — <em>one layer back</em> from the customer.
              </h2>
            </div>
            <Link href="/services" className="arrow-link reveal">
              Fleet &amp; workforce services →
            </Link>
          </div>

          <div className="card-grid">
            <div className="card reveal">
              <h4>Riders, recruited and trained</h4>
              <p>
                We source, onboard and train riders to platform standards, then keep them deployed and supported
                on shift.
              </p>
              <ul>
                <li>Recruitment &amp; onboarding</li>
                <li>Training to platform SOPs</li>
                <li>Shift management &amp; support</li>
              </ul>
            </div>
            <div className="card reveal" data-delay="100">
              <h4>Bikes, owned and maintained</h4>
              <p>
                Each unit is a rider paired with a maintained motorbike. NSD runs the fleet: servicing, gear and
                replacement so uptime stays high.
              </p>
              <ul>
                <li>Motorbike fleet operations</li>
                <li>Scheduled maintenance</li>
                <li>Gear, kit &amp; compliance</li>
              </ul>
            </div>
            <div className="card reveal" data-delay="200">
              <h4>Capacity, delivered under contract</h4>
              <p>
                Platforms scale demand; NSD scales the supply. Deployed units convert into contracted, recurring
                revenue with reporting through our MIS/CRM.
              </p>
              <ul>
                <li>Contracted per-unit supply</li>
                <li>Deployment to partner apps</li>
                <li>MIS/CRM performance reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="section section--navy-mid section--grain" id="model">
        <div className="wrap">
          <div className="two">
            <div>
              <Idx label="The model" />
              <h2 className="h-lg reveal">A fleet &amp; workforce partner — not a delivery company.</h2>
              <div className="copy reveal" data-delay="120" style={{ marginTop: 26 }}>
                <p>
                  Non-Stop Delivery LLC supplies trained riders and maintained bikes to the UAE&rsquo;s largest
                  e-commerce and delivery platforms. We don&rsquo;t handle end deliveries — we keep the platforms
                  running.
                </p>
                <p>
                  NSD sits one layer back from consumer delivery activity, supplying the fleet and workforce
                  capacity that platform partners require.
                </p>
              </div>
              <div className="btn-row reveal" data-delay="200">
                <Link href="/about" className="btn btn-line">
                  About NSD
                </Link>
              </div>
            </div>
            <div className="reveal" data-delay="160">
              {[
                ["Platforms need capacity", "Talabat, Noon, Keeta and Amazon need a constant supply of riders and bikes."],
                ["NSD supplies the fleet", "We recruit and train riders, and maintain the bikes."],
                ["Platforms run the deliveries", "Riders work the platform's app while NSD operates the fleet and workforce layer."],
                ["NSD earns recurring revenue", "Contracts convert deployed units into recurring contracted revenue."],
              ].map(([t, d]) => (
                <div className="handoff-item" key={t}>
                  <div className="hn"><span className="mk" /></div>
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

      {/* ---------------- MARKET ---------------- */}
      <section className="section section--paper" id="market">
        <div className="wrap">
          <div className="two two--center two--wide">
            <div className={`photo reveal ${styles.photo}`}>
              <Image
                src="/images/rider-on-shift.jpg"
                alt="An NSD rider on shift for a partner delivery platform"
                width={1248}
                height={832}
                sizes="(max-width: 900px) 100vw, 45vw"
              />
              <div className="photo-tag">NSD rider, on shift for a partner platform</div>
            </div>
            <div>
              <Idx label="Market drivers" />
              <h2 className="h-lg reveal">E-commerce is at the core of the UAE&rsquo;s next growth phase.</h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                Two forces drive demand for NSD&rsquo;s fleet: e-commerce growth and government infrastructure
                investment.
              </p>
              <div className="reveal" data-delay="180" style={{ marginTop: 26 }}>
                {[
                  ["E-commerce at the core", "UAE online retail keeps growing, and platforms need more riders to keep up."],
                  ["Vision-led infrastructure", "Dubai 2040 and Abu Dhabi 2030 both prioritise smart, sustainable mobility."],
                  ["Platforms need supply, not competition", "Talabat, Noon, Keeta and Amazon are scaling demand. NSD scales the supply."],
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
        </div>
      </section>

      {/* ---------------- PARTNERS ---------------- */}
      <section className="section section--navy section--grain" id="partners">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Idx label="Platform partners" />
              <h2 className="h-lg reveal">Contracted fleet &amp; workforce partner to four platforms.</h2>
            </div>
            <Link href="/partners" className="arrow-link reveal">
              Partner detail →
            </Link>
          </div>
          <div className={styles.partnerRow}>
            {["Talabat", "Noon", "Keeta", "Amazon"].map((p, i) => (
              <Link href="/partners" className={`${styles.partnerCell} reveal`} data-delay={i * 80} key={p}>
                <span className={styles.pname}>{p}</span>
                <span className={`${styles.pmeta} mono`}>Rider + bike units · contracted</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- INVESTOR TEASER ---------------- */}
      <section className="section section--paper-2" id="investors">
        <div className="wrap">
          <div className="two two--center">
            <div>
              <Idx label="For investors" />
              <h2 className="h-lg reveal">
                Fund units. <em>Earn per unit deployed.</em>
              </h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                A structured, court-attested route to participate in NSD&rsquo;s fleet economics — with an
                interactive returns model and a due-diligence checklist built in.
              </p>
              <div className="btn-row reveal" data-delay="180">
                <Link href="/investors#model" className="btn btn-solid">
                  Model your returns →
                </Link>
                <Link href="/investors" className="btn btn-line">
                  Read the investment case
                </Link>
              </div>
            </div>
            <div className={`${styles.pillars} reveal`} data-delay="160">
              {[
                ["W-01", "Platform partnerships", "Long-term contracts anchor demand."],
                ["W-02", "Strong UAE legal framework", "Court-attested MOUs and agreements."],
                ["W-03", "Transparent reporting", "Visibility through NSD's MIS/CRM."],
                ["W-04", "Scalable fleet economics", "More units deployed, more contracted income."],
              ].map(([n, t, d]) => (
                <div className={styles.pillar} key={n}>
                  <span className="mk" />
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

      <CtaBand title="Ready to talk about capacity or capital?" />
    </>
  );
}
