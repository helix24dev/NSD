import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Idx from "@/components/Idx";
import Calculator from "@/components/Calculator";
import LeadForm from "@/components/LeadForm";
import StatLedger from "@/components/StatLedger";
import { site } from "@/lib/site";
import styles from "./investors.module.css";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Investor overview for Non-Stop Delivery: the investment case, an interactive fleet-to-returns model, due-diligence checklist and a court-attested transaction process.",
};

const qa = [
  ["Q-01", "Who owns the bikes?", "Whether the investor, NSD or another entity holds legal title to the fleet assets is confirmed in the transaction documents."],
  ["Q-02", "How is the investor paid?", "The revenue-share, distribution or other economic mechanism is documented in the definitive agreement."],
  ["Q-03", "What if a platform contract changes?", "Exposure, termination provisions, replacement capacity and the resulting economics are documented."],
  ["Q-04", "What happens at the end of the term?", "Asset ownership, residual value, renewal and exit mechanics are defined upfront."],
  ["Q-05", "What costs sit outside the model?", "Maintenance, insurance, registration, recruitment and downtime are set out in a clear cost schedule."],
  ["Q-06", "What reporting does the investor receive?", "Cadence, KPIs, financial reporting, fleet deployment and exceptions reporting are specified."],
  ["Q-07", "What documents are available?", "Company profile, financials, agreements and fleet economics are available during diligence."],
  ["Q-08", "What are the key operating risks?", "Platform concentration, rider attrition, vehicle downtime and contract renewal are disclosed and addressed."],
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        crumb="Investors"
        title={
          <>
            Fund units. <em>Earn per unit deployed.</em>
          </>
        }
        lede="NSD supplies trained riders and maintained bikes under contract to Talabat, Noon, Keeta and Amazon, and earns recurring revenue per unit deployed. This page sets out the case, the model and what you should be able to verify."
      >
        <nav className={`${styles.subnav} reveal`} data-delay="200" aria-label="On this page">
          <a href="#case"><b>01</b>The case</a>
          <a href="#model"><b>02</b>Returns model</a>
          <a href="#diligence"><b>03</b>Due diligence</a>
          <a href="#process"><b>04</b>Process</a>
          <a href="#enquiry"><b>05</b>Request overview</a>
        </nav>
        <div style={{ marginTop: 56 }}>
          <StatLedger />
        </div>
      </PageHero>

      {/* ---------- CASE ---------- */}
      <section className="section section--navy-mid section--grain" id="case">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Idx n="01 / 05" label="The investment case" />
              <h2 className="h-lg reveal">Four operating pillars.</h2>
              <p className="lede reveal" data-delay="100">
                Built on evidence an investor can verify, not broad claims.
              </p>
            </div>
            <Link href="/about#facts" className="arrow-link reveal">
              Company facts →
            </Link>
          </div>
          <div className="reveal">
            {[
              ["W-01", "Platform partnerships", "Long-term contracts with Talabat, Noon, Keeta and Amazon anchor demand. Relationship scope and contract evidence are available for review in diligence."],
              ["W-02", "Strong UAE legal framework", "Agreements follow UAE law, including court-attested MOUs. Investor rights and remedies are set out in the transaction documents."],
              ["W-03", "Transparent reporting", "Regular reporting through NSD's MIS/CRM systems gives visibility into deployed units and performance."],
              ["W-04", "Scalable fleet economics", "More bikes and riders deployed can increase contracted income — the calculator below makes the unit economics explicit."],
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

      {/* ---------- MODEL ---------- */}
      <section className="section section--navy section--grain section--grid" id="model">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Idx n="02 / 05" label="Interactive model" />
              <h2 className="h-lg reveal">Fleet-to-Returns Calculator</h2>
              <p className="lede reveal" data-delay="100">
                Move the sliders to model an investment and see the estimated return.
              </p>
            </div>
          </div>
          <div className="reveal" data-delay="120">
            <Calculator />
          </div>
          <div className="note">
            <b>NOTE —</b>
            <span>
              This is an illustrative straight-line model based only on the entered investment, return and term.
              It assumes the entered return stays constant and does not separately model downtime, taxes,
              financing, residual asset value, platform changes or rider attrition. It is not a forecast,
              guarantee, offer or investment advice — consult your own advisors before committing capital.
            </span>
          </div>
        </div>
      </section>

      {/* ---------- DILIGENCE ---------- */}
      <section className="section section--paper" id="diligence">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Idx n="03 / 05" label="Due diligence" />
              <h2 className="h-lg reveal">What an investor should be able to verify.</h2>
              <p className="lede reveal" data-delay="100">
                This page should answer the hard questions before asking for capital.
              </p>
            </div>
          </div>
          <div className="qa-grid reveal">
            {qa.map(([n, q, a]) => (
              <div className="qa-item" key={n}>
                <div className="qn mono">{n}</div>
                <h4>{q}</h4>
                <p>{a}</p>
              </div>
            ))}
          </div>

          <div className="card-grid card-grid--2 reveal" style={{ marginTop: 48 }}>
            <div className="card">
              <div className="cn">Operating detail</div>
              <p>
                Fleet count, rider count, utilisation and monthly deployed units are available on request,
                verified against NSD&rsquo;s operating records.
              </p>
            </div>
            <div className="card">
              <div className="cn">Platform detail</div>
              <p>
                Relationship start dates, active status and contracted scope for each platform are available
                for review during diligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="section section--paper-2" id="process">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Idx n="04 / 05" label="Transaction process" />
              <h2 className="h-lg reveal">A structured, four-stage process.</h2>
            </div>
          </div>
          <div className="stamp-row">
            {[
              ["Contract review", "Terms, fleet scope and expected returns."],
              ["Court-attested MOU", "Signed and attested under UAE law."],
              ["Comprehensive agreement", "Capital, revenue share and reporting terms."],
              ["Ongoing monitoring", "Tracked through NSD's MIS/CRM systems."],
            ].map(([t, d], i) => (
              <div className="stamp reveal" data-delay={i * 90} key={t}>
                <div className="ring">0{i + 1}</div>
                <div className="st">Stage {["one", "two", "three", "four"][i]}</div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ENQUIRY ---------- */}
      <section className="section section--navy section--grain" id="enquiry">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Idx n="05 / 05" label="Get in touch" />
              <h2 className="h-lg reveal">Request the investor overview.</h2>
              <p className="lede reveal" data-delay="100">
                Share your details below. NSD&rsquo;s team will follow up directly — no obligation.
              </p>
            </div>
          </div>
          <div className={styles.contactGrid}>
            <div className="reveal">
              <LeadForm variant="investor" />
            </div>
            <div className="label-box reveal" data-delay="120">
              <div className="to">Head office</div>
              <div className="addr">
                {site.legal}
                <br />
                {site.address[0]}
                <br />
                {site.address[1]}
                <br />
                <br />
                <a href={site.phoneHref}>{site.phone}</a>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <br />
                <a href={site.url}>www.nonstopdelivery.com</a>
              </div>
              <div className="seal">Investor line</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
