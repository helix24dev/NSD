import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InvestorNav from "@/components/InvestorNav";
import CtaBand from "@/components/CtaBand";
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
        lede="Straight answers to the questions we hear most. Everything here is also written into the documents you sign. Fleet numbers, app detail and financials are available on request."
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

      <CtaBand
        title="Have a question that is not here? Ask us directly."
        primary={{ href: "/investors/enquiry", label: "Get in touch" }}
        secondary={{ href: "/investors/calculator", label: "Returns calculator" }}
      />
    </>
  );
}
