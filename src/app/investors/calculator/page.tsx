import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import InvestorNav from "@/components/InvestorNav";
import Calculator from "@/components/Calculator";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Returns calculator for a delivery fleet",
  description:
    "Estimate what a fleet of delivery bikes could earn. Change the number of bikes, cost per bike, monthly return and term to see total investment, payback time and profit.",
};

export default function CalculatorPage() {
  return (
    <>
      <PageHero
        crumb="Investors / Returns calculator"
        title={
          <>
            See what a fleet <em>could earn.</em>
          </>
        }
        lede="Change the number of bikes, the cost per bike, the monthly return and the term. The estimate updates as you go."
      >
        <InvestorNav />
      </PageHero>

      <section className="section section--soft" id="calculator">
        <div className="wrap">
          <div className="reveal">
            <Calculator />
          </div>
          <p className="note">
            This calculator is for illustration only. It uses the numbers you enter, assumes the monthly return
            stays the same, and does not separately include downtime, taxes, financing, the resale value of the
            bikes, changes at the apps or rider turnover. It is not a forecast, a guarantee, an offer or
            financial advice. Please speak to your own advisers before investing.
          </p>
          <div className="btn-row">
            <Link href="/investors/questions" className="btn btn-secondary">
              What is not in the numbers?
            </Link>
            <Link href="/investors/enquiry" className="btn btn-primary">
              Ask for real fleet figures
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want the actual numbers behind our fleet? Ask for the investor pack."
        primary={{ href: "/investors/enquiry", label: "Get in touch" }}
        secondary={{ href: "/investors/how-it-works", label: "How it works" }}
      />
    </>
  );
}
