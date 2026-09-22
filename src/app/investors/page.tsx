import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Calculator from "@/components/Calculator";
import LeadForm from "@/components/LeadForm";
import { IconShield, IconReport, IconGrowth, IconBag, IconCoins } from "@/components/Icons";
import { site } from "@/lib/site";
import styles from "./investors.module.css";

export const metadata: Metadata = {
  title: "Invest in a UAE delivery fleet",
  description:
    "Fund delivery bikes and riders with Non Stop Delivery and earn a monthly return from every bike on the road. Try the returns calculator and see how it works.",
};

const questions = [
  ["Who owns the bikes?", "Whether you, Non Stop Delivery or another party holds title to the bikes is set out clearly in the signed documents."],
  ["How do I get paid?", "Your share of what each bike earns is paid on a set schedule. The exact terms are written into the agreement."],
  ["What if an app needs fewer riders?", "We ride for four apps, so riders can move between them. What happens in that case is written down before you invest."],
  ["What happens at the end of the term?", "Who keeps the bikes, what they're worth, and whether you renew or exit — all agreed up front."],
  ["What costs are not in the calculator?", "Maintenance, insurance, registration, hiring and downtime are listed in a clear cost schedule you see before signing."],
  ["What reporting do I receive?", "Bikes on the road, income, costs and anything that needs attention — sent to you on a regular schedule."],
  ["What can I review before investing?", "Company profile, financials, agreements and the numbers behind the bikes are all available on request."],
  ["What are the main risks?", "Depending on a few apps, rider turnover, bike downtime and renewals — we explain each one and how we manage it."],
];

const steps = [
  ["Review the terms", "Go through the plan, the number of bikes and the expected returns with us."],
  ["Sign and attest", "A signed memorandum, attested under UAE law."],
  ["Agree the details", "Your investment, your share of income and how we report to you — in writing."],
  ["Watch it work", "Bikes go on the road and you receive regular reports and returns."],
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        crumb="Investors"
        title={
          <>
            Fund bikes on the road. <em>Earn from every one.</em>
          </>
        }
        lede="Non Stop Delivery supplies riders and bikes to the UAE's leading delivery apps. Investors fund the bikes; every bike on the road earns a monthly income. This page explains how it works, what you can expect and what you should check."
      >
        <nav className={`${styles.subnav} reveal`} data-delay="200" aria-label="On this page">
          <a href="#why">Why invest</a>
          <a href="#calculator">Returns calculator</a>
          <a href="#questions">Your questions</a>
          <a href="#steps">How it works</a>
          <a href="#enquiry">Get in touch</a>
        </nav>
      </PageHero>

      {/* ---------- WHY INVEST (bento) ---------- */}
      <section className="section section--soft" id="why">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow>Why invest</Eyebrow>
              <h2 className="h-lg reveal">A simple idea, backed by real demand.</h2>
              <p className="lede reveal" data-delay="100">
                You fund the bikes and riders. We put them to work for the apps. You earn from every bike, every
                month.
              </p>
            </div>
            <Link href="/about#facts" className="text-link reveal">
              About the company →
            </Link>
          </div>

          <div className="bento">
            <div className="tile tile-navy b-8 r-2 reveal">
              <div className="small">How you earn</div>
              <h3>Every rider-and-bike unit on the road earns a steady monthly income — and you receive a share of it.</h3>
              <p>
                The apps keep our riders busy. We keep the riders and bikes on the road. For the length of your
                term, each bike you fund pays you back month after month.
              </p>
              <Link href="#calculator" className="btn btn-primary">
                See the numbers
              </Link>
            </div>
            <div className="tile tile-orange b-4 reveal" data-delay="80">
              <div className="small">Demand</div>
              <div className="big">4</div>
              <p>leading UAE delivery apps our riders deliver for — Talabat, Noon, Keeta and Amazon</p>
            </div>
            <div className="tile tile-white b-4 reveal" data-delay="120">
              <div className="small">Experience</div>
              <div className="big">10+</div>
              <p>years on UAE roads, 5+ running delivery fleets</p>
            </div>
            <div className="tile tile-white b-4 reveal" data-delay="160">
              <div className="card-icon">
                <IconShield />
              </div>
              <h4 className={styles.tileH4}>Backed by UAE law</h4>
              <p>Signed, attested agreements set out what you own, what you receive and what happens at the end.</p>
            </div>
            <div className="tile tile-white b-4 reveal" data-delay="200">
              <div className="card-icon">
                <IconReport />
              </div>
              <h4 className={styles.tileH4}>Regular reporting</h4>
              <p>Bikes on the road, income and costs, reported to you on a set schedule in plain language.</p>
            </div>
            <div className="tile tile-white b-4 reveal" data-delay="240">
              <div className="card-icon">
                <IconGrowth />
              </div>
              <h4 className={styles.tileH4}>Grows with demand</h4>
              <p>More bikes on the road means more income. The apps keep growing, and so does the need for riders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CALCULATOR ---------- */}
      <section className="section" id="calculator">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow>Returns calculator</Eyebrow>
              <h2 className="h-lg reveal">See what a fleet could earn.</h2>
              <p className="lede reveal" data-delay="100">
                Change the number of bikes, the cost per bike, the monthly return and the term to see an estimate.
              </p>
            </div>
          </div>
          <div className="reveal" data-delay="120">
            <Calculator />
          </div>
          <p className="note">
            This calculator is for illustration only. It uses the numbers you enter, assumes the monthly return
            stays the same, and does not separately include downtime, taxes, financing, the bikes&rsquo; resale
            value, changes at the apps or rider turnover. It is not a forecast, a guarantee, an offer or
            financial advice — please speak to your own advisers before investing.
          </p>
        </div>
      </section>

      {/* ---------- QUESTIONS ---------- */}
      <section className="section section--soft" id="questions">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow>Your questions</Eyebrow>
              <h2 className="h-lg reveal">The things you should ask before investing.</h2>
              <p className="lede reveal" data-delay="100">
                Straight answers to the questions we hear most. Everything here is also written into the documents.
              </p>
            </div>
          </div>
          <div className="faq reveal">
            {questions.map(([q, a]) => (
              <div className="faq-item" key={q}>
                <h4>{q}</h4>
                <p>{a}</p>
              </div>
            ))}
          </div>

          <div className="card-grid card-grid--2 reveal" style={{ marginTop: 20 }}>
            <div className="card">
              <div className="icon">
                <IconBag />
              </div>
              <h4>The fleet, in detail</h4>
              <p>Number of bikes, number of riders, hours on the road and monthly income — available on request and checked against our records.</p>
            </div>
            <div className="card">
              <div className="icon">
                <IconCoins />
              </div>
              <h4>The apps, in detail</h4>
              <p>How long we&rsquo;ve ridden for each app, how many riders are on each, and how the work is arranged — available when you get in touch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- STEPS ---------- */}
      <section className="section" id="steps">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow>How it works</Eyebrow>
              <h2 className="h-lg reveal">From first conversation to bikes on the road.</h2>
            </div>
          </div>
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

      {/* ---------- ENQUIRY ---------- */}
      <section className="section section--soft" id="enquiry">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <h2 className="h-lg reveal">Ask for the investor pack.</h2>
              <p className="lede reveal" data-delay="100">
                Leave your details and our team will get back to you directly. No obligation.
              </p>
            </div>
          </div>
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
