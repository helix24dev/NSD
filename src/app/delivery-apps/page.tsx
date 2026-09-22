import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import AppLogos from "@/components/AppLogos";
import Picture from "@/components/Picture";
import Fleet from "@/components/Fleet";
import CtaBand from "@/components/CtaBand";
import { IconClock, IconRider, IconWrench, IconShield } from "@/components/Icons";
import { fleetColors } from "@/lib/site";
import styles from "./apps.module.css";

export const metadata: Metadata = {
  title: "Delivery apps we ride for",
  description:
    "Non Stop Delivery riders deliver for Talabat, Noon, Keeta and Amazon across the UAE. We supply trained riders and motorbikes so the apps can keep up with demand.",
};

const apps = [
  { name: "Talabat", kind: "Food and grocery delivery" },
  { name: "Noon", kind: "Online shopping and quick delivery" },
  { name: "Keeta", kind: "Food delivery" },
  { name: "Amazon", kind: "Online shopping and last-mile delivery" },
];

export default function DeliveryAppsPage() {
  return (
    <>
      <PageHero
        crumb="Delivery apps"
        title={
          <>
            Our riders deliver for the UAE&rsquo;s <em>leading apps.</em>
          </>
        }
        lede="Four of the biggest names in UAE delivery rely on riders and bikes from Non Stop Delivery. We don't run an app of our own. We keep theirs supplied."
      />

      <div className={styles.marqueeWrap}>
        <div className="wrap">
          <AppLogos grid />
        </div>
      </div>

      <section className="section" id="apps">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow>Who we ride for</Eyebrow>
              <h2 className="h-lg reveal">Four apps. One fleet behind them.</h2>
              <p className="lede reveal" data-delay="100">
                Our riders take orders on each app directly. We look after the people and the bikes.
              </p>
            </div>
          </div>
          <div className="card-grid card-grid--4">
            {apps.map((a, i) => (
              <div className="card reveal" data-delay={i * 80} key={a.name}>
                <span className={styles.swatch} style={{ background: fleetColors[i] }} aria-hidden />
                <h4 className={styles.name}>{a.name}</h4>
                <p>{a.kind}</p>
                <ul className="checks">
                  <li>Riders on the app every day</li>
                  <li>Bikes we own and maintain</li>
                  <li>Coverage by zone and shift</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" id="why-us">
        <div className="wrap">
          <div className="two two--top">
            <div>
              <Eyebrow data-tone="blue">Why apps choose us</Eyebrow>
              <h2 className="h-lg reveal">We add riders. We never compete.</h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                Apps own the customer and the order. We stay behind the scenes and make sure there are always
                enough riders and bikes on the road.
              </p>
            </div>
            <div className="points reveal" data-delay="140">
              {[
                [IconClock, "A decade on UAE roads", "Over 10 years in UAE logistics and 5+ years running delivery fleets."],
                [IconRider, "Riders ready from day one", "Trained to each app's standards, with documents in order."],
                [IconWrench, "Bikes that stay on the road", "Owned and serviced by us, with fast replacements when needed."],
                [IconShield, "Everything in writing", "Clear terms under UAE law and reporting on a set schedule."],
              ].map(([Icon, t, d]) => {
                const I = Icon as typeof IconClock;
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

      <section className="section" id="work-with-us">
        <div className="wrap">
          <div className="two">
            <div>
              <Eyebrow data-tone="green">Growing in the UAE?</Eyebrow>
              <h2 className="h-lg reveal">Add Non Stop Delivery riders to your app.</h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                Tell us the zones, how many riders you need and your start date. We&rsquo;ll come back with a
                simple plan and per-bike pricing.
              </p>
              <div className="btn-row reveal" data-delay="160">
                <Link href="/contact" className="btn btn-primary">
                  Ask for riders
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  What we do
                </Link>
              </div>
            </div>
            <div className="reveal" data-delay="140">
              <Picture
                name="apps-riders"
                alt="Delivery riders in several different coloured uniforms waiting outside a restaurant"
                ratio="4x3"
                fallback={<Fleet compact />}
              />
            </div>
          </div>
          <div className="card-grid card-grid--2" style={{ marginTop: 20 }}>
            <div className="card reveal">
              <h4>What comes with every rider</h4>
              <ul className="checks">
                <li>Hired, trained and documented</li>
                <li>A motorbike we own and maintain</li>
                <li>On your app, in your zones, on your schedule</li>
                <li>Clear reporting on a set schedule</li>
                <li>Terms agreed in writing under UAE law</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Riders for apps. Returns for investors."
        primary={{ href: "/contact", label: "Ask for riders" }}
        secondary={{ href: "/investors", label: "For investors" }}
      />
    </>
  );
}
