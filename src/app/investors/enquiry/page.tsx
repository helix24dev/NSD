import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InvestorNav from "@/components/InvestorNav";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";
import styles from "../investors.module.css";

export const metadata: Metadata = {
  title: "Investor enquiry",
  description:
    "Ask Non Stop Delivery for the investor pack. Leave your details and the team will get back to you directly, with no obligation.",
};

export default function EnquiryPage() {
  return (
    <>
      <PageHero
        crumb="Investors / Get in touch"
        title={
          <>
            Ask for the <em>investor pack.</em>
          </>
        }
        lede="Leave your details and our team will get back to you directly. No obligation."
      >
        <InvestorNav />
      </PageHero>

      <section className="section section--soft" id="enquiry">
        <div className="wrap">
          <div className={styles.contactGrid}>
            <div className="card reveal">
              <LeadForm variant="investor" />
            </div>
            <div className="contact-box reveal" data-delay="120">
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
          </div>
        </div>
      </section>
    </>
  );
}
