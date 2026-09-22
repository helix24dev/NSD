import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Fleet from "@/components/Fleet";
import CtaBand from "@/components/CtaBand";
import { IconRider, IconBike, IconRoute, IconReport, IconWrench, IconClock, IconBag } from "@/components/Icons";

export const metadata: Metadata = {
  title: "What we do — delivery riders and bikes",
  description:
    "Non Stop Delivery hires and trains delivery riders, supplies and maintains motorbikes, and keeps both on the road for the UAE's leading delivery apps.",
};

const services = [
  {
    Icon: IconRider,
    title: "Hiring and training riders",
    lede: "A trained, ready rider for every bike.",
    body: "We find the riders, sort their paperwork, train them to each app's standards and support them on every shift — so they're ready from day one.",
    points: ["Hiring and onboarding", "Training for each app", "Documents and compliance", "Shift planning and support"],
  },
  {
    Icon: IconBike,
    title: "Bikes and maintenance",
    lede: "A well-kept motorbike for every rider.",
    body: "We own the bikes, service them on schedule, supply gear and safety kit, and swap in a replacement quickly if anything goes wrong.",
    points: ["Bikes owned by us", "Regular servicing", "Gear and safety kit", "Fast replacements"],
  },
  {
    Icon: IconRoute,
    title: "Keeping riders on the road",
    lede: "Riders on the app, when and where they're needed.",
    body: "Riders take orders on the app itself. We handle attendance, coverage and day-to-day issues, so apps can grow demand without building their own fleet.",
    points: ["Riders work on the app", "Coverage by zone and shift", "Issues handled fast", "Scale up when needed"],
  },
  {
    Icon: IconReport,
    title: "Simple, regular reporting",
    lede: "You always know what's on the road.",
    body: "Apps and investors get clear reports on riders, bikes, hours and income — on a set schedule, in plain language.",
    points: ["Bikes and riders on the road", "Hours and performance", "Income and costs", "Anything that needs attention"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="What we do"
        title={
          <>
            Riders and bikes, <em>ready to deliver.</em>
          </>
        }
        lede="One trained rider, one well-maintained motorbike. We hire, train, equip and look after both — delivery apps simply add the capacity to their app."
      >
        <div style={{ marginTop: 40 }} className="reveal">
          <Fleet compact />
        </div>
      </PageHero>

      <section className="section" id="services">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="h-lg reveal">Everything a delivery app needs from a fleet.</h2>
            </div>
          </div>
          <div className="card-grid card-grid--2">
            {services.map((s, i) => (
              <div className="card reveal" data-delay={i * 80} key={s.title}>
                <div className="icon">
                  <s.Icon />
                </div>
                <h4>{s.title}</h4>
                <p style={{ fontWeight: 600, color: "var(--ink)", marginBottom: 8 }}>{s.lede}</p>
                <p>{s.body}</p>
                <ul className="checks">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" id="the-unit">
        <div className="wrap">
          <div className="two two--top">
            <div>
              <Eyebrow>One rider, one bike</Eyebrow>
              <h2 className="h-lg reveal">
                Everything we do comes down to <em>one rider and one bike.</em>
              </h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                That&rsquo;s the unit the apps ask for and the unit investors can fund. Here&rsquo;s what goes into
                each one.
              </p>
            </div>
            <div className="points reveal" data-delay="140">
              {[
                [IconRider, "The rider", "Hired, trained for the app, documented and supported on every shift."],
                [IconWrench, "The bike", "Owned and serviced by us, with gear, kit and quick replacements."],
                [IconClock, "The shifts", "Assigned to an app and a zone, working the hours the app needs."],
                [IconBag, "The income", "Every bike on the road earns a steady amount each month."],
              ].map(([Icon, t, d]) => {
                const I = Icon as typeof IconBag;
                return (
                  <div className="point" key={t as string}>
                    <div className="dot">
                      <I />
                    </div>
                    <div>
                      <h4>{t as string}</h4>
                      <p>{d as string}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="for-apps">
        <div className="wrap">
          <div className="two">
            <div>
              <Eyebrow>For delivery apps</Eyebrow>
              <h2 className="h-lg reveal">Need more riders in a new zone, or for a busy season?</h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                Our riders already deliver for Talabat, Noon, Keeta and Amazon. Tell us the zone, how many riders
                you need and when — we&rsquo;ll take it from there.
              </p>
              <div className="btn-row reveal" data-delay="160">
                <Link href="/contact" className="btn btn-primary">
                  Ask for riders
                </Link>
                <Link href="/delivery-apps" className="btn btn-secondary">
                  Who we ride for
                </Link>
              </div>
            </div>
            <div className="card-grid reveal" data-delay="140" style={{ gridTemplateColumns: "1fr" }}>
              <div className="card">
                <h4>What you get</h4>
                <ul className="checks">
                  <li>Riders who are hired, trained and documented</li>
                  <li>Motorbikes we own and maintain</li>
                  <li>Riders on your app, in your zones, on your schedule</li>
                  <li>Clear reporting on a set schedule</li>
                  <li>Everything agreed in writing under UAE law</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="More riders for your app — or a fleet to invest in."
        primary={{ href: "/contact", label: "Talk to us" }}
        secondary={{ href: "/investors", label: "For investors" }}
      />
    </>
  );
}
