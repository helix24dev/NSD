import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import LeadForm from "@/components/LeadForm";
import { IconBag, IconCoins, IconRider } from "@/components/Icons";
import { site } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Non Stop Delivery in the UAE for delivery riders and bikes, investing in a fleet, or riding with us.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title={
          <>
            Let&rsquo;s <em>talk.</em>
          </>
        }
        lede="Riders for your app, a fleet to invest in, or a question about riding with us. Send a message and the right person will get back to you."
      />

      <section className="section section--soft" id="form">
        <div className="wrap">
          <div className={styles.grid}>
            <div className="card reveal">
              <Eyebrow>Send a message</Eyebrow>
              <LeadForm variant="general" />
            </div>

            <div className={styles.side}>
              <div className="contact-box reveal">
                <div className="small">Non Stop Delivery</div>
                <div className="lines">
                  {site.legal}
                  <br />
                  {site.location}
                  <br />
                  <br />
                  <a href={site.phoneHref}>{site.phone}</a>
                  <br />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>

              <div className="points reveal" data-delay="120">
                {[
                  [IconBag, "Delivery apps", "Riders and bikes for a zone, a launch or a busy season."],
                  [IconCoins, "Investors", "The investor pack, the returns calculator and a direct conversation."],
                  [IconRider, "Riders", "Join a fleet that trains you, equips you and looks after the bike."],
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
        </div>
      </section>
    </>
  );
}
