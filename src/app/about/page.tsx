import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Fleet from "@/components/Fleet";
import Picture from "@/components/Picture";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Non Stop Delivery is a UAE delivery fleet company with over 10 years on the road, supplying trained riders and motorbikes to the country's leading delivery apps.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title={
          <>
            Ten years on UAE roads. <em>Built for delivery apps.</em>
          </>
        }
        lede="Non Stop Delivery LLC is a UAE fleet company. We supply the riders and bikes that keep the country's biggest delivery apps moving. We don't run our own app, and we don't compete with theirs."
      />

      <section className="section">
        <div className="wrap">
          <div className="two two--top">
            <div>
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="h-lg reveal">The team behind the riders.</h2>
              <div className="copy reveal" data-delay="100" style={{ marginTop: 20 }}>
                <p>
                  We have worked in UAE logistics for more than ten years, and for the last five-plus we have
                  focused on one thing: supplying delivery riders and motorbikes to the apps people use every day.
                </p>
                <p>
                  Our job is simple to explain and hard to do well. We hire and train riders, we buy and look after
                  the bikes, and we keep both on the road shift after shift. The apps handle the customer and the
                  order. We handle everything that gets the rider to the door.
                </p>
              </div>
            </div>
            <div className="facts reveal" data-delay="120" style={{ gridTemplateColumns: "1fr" }}>
              <div>
                <div className="fact"><span>Company</span><b>{site.legal}</b></div>
                <div className="fact"><span>What we do</span><b>Delivery riders and bikes</b></div>
                <div className="fact"><span>Where</span><b>{site.location}</b></div>
                <div className="fact"><span>Years in the UAE</span><b>10+</b></div>
                <div className="fact"><span>Years running fleets</span><b>5+</b></div>
                <div className="fact"><span>Who we ride for</span><b>Talabat, Noon, Keeta, Amazon</b></div>
                <div className="fact"><span>How we earn</span><b>Monthly, per bike on the road</b></div>
                <div className="fact"><span>Agreements</span><b>Under UAE law, attested</b></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="where">
        <div className="wrap">
          <div className="two">
            <Picture
              name="about-team"
              alt="The Non Stop Delivery operations team at a depot with motorbikes in the background"
              ratio="4x3"
              className="reveal"
              fallback={<Fleet compact />}
            />
            <div>
              <Eyebrow>Where we are</Eyebrow>
              <h2 className="h-lg reveal">Based in the UAE, riding across it.</h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                Our riders cover the zones the apps need, and our team is a phone call away.
              </p>
              <div className="btn-row reveal" data-delay="160">
                <Link href="/contact" className="btn btn-primary">
                  Contact us
                </Link>
                <a href={site.phoneHref} className="btn btn-secondary">
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Want the full picture? Start with the investor page." />
    </>
  );
}
