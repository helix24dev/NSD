import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Idx from "@/components/Idx";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Non Stop Delivery LLC in Al Quoz 2, Dubai — for fleet and workforce capacity, platform partnerships or investor enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title={
          <>
            Talk to <em>NSD.</em>
          </>
        }
        lede="Capacity for a platform, a partnership, an investor question or a rider enquiry — send it through and the right person at NSD will follow up directly."
      />

      <section className="section section--navy section--grain" id="form">
        <div className="wrap">
          <div className={styles.grid}>
            <div>
              <Idx label="Enquiry" />
              <div className="reveal" style={{ marginTop: 8 }}>
                <LeadForm variant="general" />
              </div>
            </div>

            <div className={styles.side}>
              <Idx label="Head office" />
              <div className="label-box reveal">
                <div className="to">Non Stop Delivery LLC</div>
                <div className="addr">
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
                <div className="seal">Al Quoz · DXB</div>
              </div>

              <div className={`${styles.routes} reveal`} data-delay="120">
                {[
                  ["Platforms", "Rider and bike capacity for a zone, a launch or a seasonal peak — scoped and contracted per unit."],
                  ["Investors", "The investor overview, returns model and diligence pack, followed by a direct conversation with NSD."],
                  ["Riders", "Trained, equipped and deployed to a partner platform, with NSD running the fleet behind you."],
                ].map(([t, d]) => (
                  <div className={styles.routeRow} key={t}>
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
        </div>
      </section>
    </>
  );
}
