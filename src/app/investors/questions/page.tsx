import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import InvestorNav from "@/components/InvestorNav";
import Eyebrow from "@/components/Eyebrow";
import CtaBand from "@/components/CtaBand";
import { IconBag, IconCoins } from "@/components/Icons";
import { questions } from "@/lib/investors";

export const metadata: Metadata = {
  title: "Investor questions, answered",
  description:
    "Who owns the bikes, how investors are paid, what happens at the end of the term and the main risks. Straight answers from Non Stop Delivery before you invest.",
};

export default function QuestionsPage() {
  return (
    <>
      <PageHero
        crumb="Investors / Your questions"
        title={
          <>
            The things you should ask <em>before investing.</em>
          </>
        }
        lede="Straight answers to the questions we hear most. Everything here is also written into the documents you sign."
      >
        <InvestorNav />
      </PageHero>

      <section className="section section--soft" id="questions">
        <div className="wrap">
          <div className="faq reveal">
            {questions.map(([q, a]) => (
              <div className="faq-item" key={q}>
                <h4>{q}</h4>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="detail">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow>Available on request</Eyebrow>
              <h2 className="h-lg reveal">The detail behind the answers.</h2>
            </div>
          </div>
          <div className="card-grid card-grid--2">
            <div className="card reveal">
              <div className="icon">
                <IconBag />
              </div>
              <h4>The fleet, in detail</h4>
              <p>Number of bikes, number of riders, hours on the road and monthly income, checked against our records.</p>
            </div>
            <div className="card reveal" data-delay="80">
              <div className="icon">
                <IconCoins />
              </div>
              <h4>The apps, in detail</h4>
              <p>How long we have ridden for each app, how many riders are on each, and how the work is arranged.</p>
            </div>
          </div>
          <div className="btn-row">
            <Link href="/investors/enquiry" className="btn btn-primary">
              Ask for the investor pack
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a question that is not here? Ask us directly."
        primary={{ href: "/investors/enquiry", label: "Get in touch" }}
        secondary={{ href: "/investors/calculator", label: "Returns calculator" }}
      />
    </>
  );
}
