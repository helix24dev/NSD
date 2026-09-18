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
              <Idx n="01 / 02" label="Send an enquiry" />
              <div className="reveal" style={{ marginTop: 8 }}>
                <LeadForm variant="general" />
              </div>
            </div>

            <div className={styles.side}>
              <Idx n="02 / 02" label="Head office" />
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
                  ["Platforms", "Need rider + bike capacity in a zone or for a peak? Choose “Fleet & workforce supply”."],
                  ["Investors", "Want the investor overview or a diligence pack? Choose “Investor enquiry”."],
                  ["Riders", "Interested in riding with NSD for a partner platform? Choose “Careers / riders”."],
                ].map(([t, d], i) => (
                  <div className={styles.routeRow} key={t}>
                    <span>0{i + 1}</span>
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
