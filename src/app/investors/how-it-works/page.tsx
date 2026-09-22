import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InvestorNav from "@/components/InvestorNav";
import Eyebrow from "@/components/Eyebrow";
import CtaBand from "@/components/CtaBand";
import { IconShield, IconReport, IconCoins, IconClock } from "@/components/Icons";
import { steps } from "@/lib/investors";

export const metadata: Metadata = {
  title: "How investing in a fleet works",
  description:
    "The four steps from first conversation to bikes on the road: review the terms, sign and attest under UAE law, agree the details, and receive regular reports and returns.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        crumb="Investors / How it works"
        title={
          <>
            From first conversation <em>to bikes on the road.</em>
          </>
        }
        lede="Four clear steps. Everything is agreed in writing under UAE law before a single bike is bought."
      >
        <InvestorNav />
      </PageHero>

      <section className="section section--soft" id="steps">
        <div className="wrap">
          <div className="timeline">
            {steps.map(([t, d], i) => (
              <div className="tl reveal" data-delay={i * 90} key={t}>
                <div className="mark" />
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="documents">
        <div className="wrap">
          <div className="two">
            <div>
              <Eyebrow>What the documents cover</Eyebrow>
              <h2 className="h-lg reveal">Nothing left to assume.</h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                Before you invest, the signed documents set out every part of the arrangement in plain terms.
              </p>
              <div className="points reveal" data-delay="140" style={{ marginTop: 24 }}>
                {[
                  [IconShield, "Ownership", "Who holds title to the bikes during and after the term."],
                  [IconCoins, "Your share", "How much you receive, how it is calculated and when it is paid."],
                  [IconReport, "Reporting", "What you receive, how often, and who to call if something needs attention."],
                  [IconClock, "The end of the term", "Renewal, exit and what happens to the bikes."],
                ].map(([Icon, t, d]) => {
                  const I = Icon as typeof IconShield;
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
            <div className="card reveal" data-delay="120">
              <h4>Before you sign, you will have seen</h4>
              <ul className="checks">
                <li>The company profile and financials</li>
                <li>The number of bikes and riders on the road today</li>
                <li>A clear cost schedule for each bike</li>
                <li>The reporting you will receive and how often</li>
                <li>The full agreement, in plain terms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready for step one? Let us walk you through the terms."
        primary={{ href: "/investors/enquiry", label: "Get in touch" }}
        secondary={{ href: "/investors/questions", label: "Your questions" }}
      />
    </>
  );
}
