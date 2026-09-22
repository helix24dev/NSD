import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Picture from "@/components/Picture";
import CtaBand from "@/components/CtaBand";
import { IconRider, IconBike, IconRoute, IconReport } from "@/components/Icons";

export const metadata: Metadata = {
  title: "What we do: delivery riders and bikes",
  description:
    "Non Stop Delivery hires and trains delivery riders, supplies and maintains motorbikes, and keeps both on the road for the UAE's leading delivery apps.",
};

const services = [
  {
    Icon: IconRider,
    title: "Hiring and training riders",
    body: "We find the riders, sort their paperwork, train them to each app's standards and support them on every shift, so they are ready from day one.",
    points: ["Hiring and onboarding", "Training for each app", "Documents and compliance", "Shift planning and support"],
  },
  {
    Icon: IconBike,
    title: "Bikes and maintenance",
    body: "We own the bikes, service them on schedule, supply gear and safety kit, and swap in a replacement quickly if anything goes wrong.",
    points: ["Bikes owned by us", "Regular servicing", "Gear and safety kit", "Fast replacements"],
  },
  {
    Icon: IconRoute,
    title: "Keeping riders on the road",
    body: "Riders take orders on the app itself. We handle attendance, coverage and day-to-day issues, so apps can grow demand without building their own fleet.",
    points: ["Riders work on the app", "Coverage by zone and shift", "Issues handled fast", "Scale up when needed"],
  },
  {
    Icon: IconReport,
    title: "Simple, regular reporting",
    body: "Apps and investors get clear reports on riders, bikes, hours and income, on a set schedule and in plain language.",
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
        lede="One trained rider, one well-maintained motorbike. We hire, train, equip and look after both. Delivery apps simply add the capacity to their app."
      >
        <div style={{ marginTop: 40 }} className="reveal">
          <Picture
            name="fleet-bikes"
            alt="Five delivery motorbikes with orange, green, red, blue and yellow delivery boxes"
            sizes="(max-width: 900px) 100vw, 1180px"
          />
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

      <CtaBand
        title="Need more riders in a new zone, or for a busy season?"
        primary={{ href: "/contact", label: "Ask for riders" }}
        secondary={{ href: "/delivery-apps", label: "Who we ride for" }}
      />
    </>
  );
}
