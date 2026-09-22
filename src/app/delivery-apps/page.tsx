import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import AppLogos from "@/components/AppLogos";
import Picture from "@/components/Picture";
import Fleet from "@/components/Fleet";
import CtaBand from "@/components/CtaBand";
import { IconClock, IconRider, IconWrench, IconShield } from "@/components/Icons";
import styles from "./apps.module.css";

export const metadata: Metadata = {
  title: "Delivery apps we ride for",
  description:
    "Non Stop Delivery riders deliver for Talabat, Noon, Keeta and Amazon across the UAE. We supply trained riders and motorbikes so the apps can keep up with demand.",
};

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
        lede="Four of the biggest names in UAE delivery rely on riders and bikes from Non Stop Delivery. Our riders take orders on each app directly. We look after the people and the bikes."
      />

      <div className={styles.marqueeWrap}>
        <div className="wrap">
          <AppLogos grid />
        </div>
      </div>

      <section className="section" id="why-us">
        <div className="wrap">
          <div className="two">
            <div>
              <Eyebrow>Why apps choose us</Eyebrow>
              <h2 className="h-lg reveal">We add riders. We never compete.</h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                Apps own the customer and the order. We stay behind the scenes and make sure there are always
                enough riders and bikes on the road.
              </p>
              <div className="points reveal" data-delay="140" style={{ marginTop: 24 }}>
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
            <Picture
              name="apps-riders"
              alt="Delivery riders in several different coloured uniforms waiting outside a restaurant"
              ratio="4x3"
              className="reveal"
              fallback={<Fleet compact />}
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Growing in the UAE? Add Non Stop Delivery riders to your app."
        primary={{ href: "/contact", label: "Ask for riders" }}
        secondary={{ href: "/services", label: "What we do" }}
      />
    </>
  );
}
