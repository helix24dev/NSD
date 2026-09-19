import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Idx from "@/components/Idx";
import RouteDiagram from "@/components/RouteDiagram";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Fleet & Workforce",
  description:
    "NSD supplies contracted rider and motorbike units to UAE delivery platforms — recruitment, training, fleet maintenance, deployment and MIS/CRM reporting.",
};

const services = [
  {
    title: "Rider recruitment & training",
    lede: "A trained, compliant rider for every unit.",
    body:
      "We source and onboard riders, train them to each platform's operating standards, and keep them supported on shift. Platforms get capacity that is ready on day one.",
    points: ["Sourcing & onboarding", "Platform SOP training", "Documentation & compliance", "Shift scheduling & support"],
  },
  {
    title: "Motorbike fleet & maintenance",
    lede: "A maintained bike, matched to every rider.",
    body:
      "NSD operates the motorbike fleet behind each unit — servicing, gear and replacement — so vehicle downtime doesn't become platform downtime.",
    points: ["Fleet ownership & operation", "Scheduled servicing", "Gear, kit & branding", "Replacement & downtime cover"],
  },
  {
    title: "Deployment & operations",
    lede: "Units deployed to the partner's app, at the partner's pace.",
    body:
      "Riders work the platform's own app. NSD manages the fleet and workforce layer underneath — attendance, utilisation and exceptions — so partners can scale demand without building supply.",
    points: ["Contracted per-unit supply", "Utilisation management", "Exceptions handling", "Scale-up on demand"],
  },
  {
    title: "Reporting through MIS/CRM",
    lede: "Visibility into every deployed unit.",
    body:
      "Regular reporting through NSD's MIS/CRM systems gives partners and investors a clear view of deployed units and performance, with a defined cadence and KPI set.",
    points: ["Deployed-unit reporting", "Performance KPIs", "Financial reporting", "Exceptions reporting"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Fleet & Workforce"
        title={
          <>
            Riders and bikes, <em>supplied under contract.</em>
          </>
        }
        lede="One unit is one trained rider paired with one maintained motorbike. NSD recruits, trains, equips, deploys and reports — platforms simply plug capacity into their app."
      >
        <div style={{ marginTop: 56 }}>
          <RouteDiagram />
        </div>
      </PageHero>

      <section className="section section--paper" id="services">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Idx label="Fleet & workforce" />
              <h2 className="h-lg reveal">Four services. One operating layer.</h2>
            </div>
          </div>
          <div className="card-grid card-grid--2">
            {services.map((s, i) => (
              <div className="card reveal" data-delay={i * 80} key={s.title}>
                <h4>{s.title}</h4>
                <p style={{ fontWeight: 600, color: "var(--ink)", marginBottom: 10 }}>{s.lede}</p>
                <p>{s.body}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy-mid section--grain" id="unit">
        <div className="wrap">
          <div className="two">
            <div>
              <Idx label="The unit" />
              <h2 className="h-lg reveal">
                One rider. One bike. <em>One contracted unit.</em>
              </h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                Everything NSD does resolves to the unit — the thing platforms contract for and investors can
                fund.
              </p>
            </div>
            <div className="reveal" data-delay="140">
              {[
                ["Rider", "Recruited, trained to platform SOPs, documented and supported on shift."],
                ["Bike", "Motorbike owned and maintained by NSD, with gear and downtime cover."],
                ["Deployment", "Assigned to a partner platform and working the partner's app."],
                ["Revenue", "Each deployed unit earns contracted, recurring income."],
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

      <section className="section section--paper" id="for-platforms">
        <div className="wrap">
          <div className="two two--center">
            <div>
              <Idx label="For platforms" />
              <h2 className="h-lg reveal">Need capacity in a new zone or for a peak?</h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                NSD already supplies Talabat, Noon, Keeta and Amazon. Tell us the zone, the volume and the
                start date.
              </p>
              <div className="btn-row reveal" data-delay="160">
                <Link href="/contact" className="btn btn-solid">
                  Request capacity →
                </Link>
                <Link href="/partners" className="btn btn-line">
                  Current partners
                </Link>
              </div>
            </div>
            <div className="reveal" data-delay="140">
              {[
                ["Scope the requirement", "Zones, unit count, shift pattern and platform SOPs."],
                ["Agree the contract", "Per-unit terms under UAE law, with reporting cadence defined."],
                ["Deploy and report", "Units go live on the platform's app; NSD reports through MIS/CRM."],
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

      <CtaBand
        title="Scale supply with NSD — or fund it."
        primary={{ href: "/contact", label: "Talk to NSD →" }}
        secondary={{ href: "/investors", label: "Investor overview" }}
      />
    </>
  );
}
