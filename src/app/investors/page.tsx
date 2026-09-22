import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import InvestorNav from "@/components/InvestorNav";
import Picture from "@/components/Picture";
import CtaBand from "@/components/CtaBand";
import { IconShield, IconReport, IconCoins } from "@/components/Icons";
import styles from "./investors.module.css";

export const metadata: Metadata = {
  title: "Invest in a UAE delivery fleet",
  description:
    "Fund delivery bikes and riders with Non Stop Delivery and earn a monthly return from every bike on the road. See how it works, try the returns calculator and get your questions answered.",
};

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
        lede="Investors fund the bikes. We put them to work for the UAE's leading delivery apps. Every bike on the road earns a monthly income, and you receive a share of it for the length of the term."
      >
        <InvestorNav />
      </PageHero>

      <section className="section section--soft" id="overview">
        <div className="wrap">
          <div className="bento bento--compact">
            <Link href="/investors/calculator" className="tile tile-navy tile-link b-6 r-2 reveal">
              <span className="arrow">→</span>
              <div className="small">How you earn</div>
              <h3>Every rider-and-bike unit on the road earns a steady monthly income, and you receive a share of it.</h3>
              <p>
                The apps keep our riders busy. We keep the riders and bikes on the road. For the length of your
                term, each bike you fund pays you back month after month.
              </p>
              <span className="btn btn-primary">Try the returns calculator</span>
            </Link>
            <div className="tile tile-orange b-3 reveal" data-delay="60">
              <div className="small">Demand</div>
              <div className="big">4</div>
              <p>leading UAE delivery apps our riders deliver for</p>
            </div>
            <div className="tile tile-white b-3 reveal" data-delay="100">
              <div className="small">Experience</div>
              <div className="big">10+</div>
              <p>years on UAE roads, 5+ running fleets</p>
            </div>
            <Link href="/investors/how-it-works" className="tile tile-white tile-link b-3 reveal" data-delay="140">
              <span className="arrow">→</span>
              <div className="card-icon">
                <IconShield />
              </div>
              <h4 className={styles.tileH4}>Backed by UAE law</h4>
              <p>Signed, attested agreements set out what you own and what you receive.</p>
            </Link>
            <div className="tile tile-white b-3 reveal" data-delay="180" style={{ gridColumn: "span 3" }}>
              <div className="card-icon">
                <IconReport />
              </div>
              <h4 className={styles.tileH4}>Regular reporting</h4>
              <p>Bikes on the road, income and costs, reported on a set schedule.</p>
            </div>
            <Link href="/investors/enquiry" className="tile tile-white tile-link b-6 reveal" data-delay="220">
              <span className="arrow">→</span>
              <div className="card-icon">
                <IconCoins />
              </div>
              <h4 className={styles.tileH4}>Ask for the investor pack</h4>
              <p>Company profile, fleet numbers and documents, followed by a direct conversation.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="the-idea">
        <div className="wrap">
          <div className="two">
            <Picture
              name="fleet-bikes"
              alt="Five delivery motorbikes with coloured delivery boxes, ready for the road"
              className="reveal"
            />
            <div>
              <Eyebrow>The idea in one minute</Eyebrow>
              <h2 className="h-lg reveal">You fund the bikes. We put them to work.</h2>
              <div className="copy reveal" data-delay="100" style={{ marginTop: 20 }}>
                <p>
                  Delivery apps in the UAE need more riders every year, and Non Stop Delivery has supplied them for
                  over a decade. What limits how many bikes we can put on the road is capital.
                </p>
                <p>
                  You fund a number of bikes and riders. We recruit, train, equip and deploy them, and the apps
                  keep them busy. Each bike earns every month, and you receive your share for the length of the
                  term.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to talk numbers? Ask for the investor pack."
        primary={{ href: "/investors/enquiry", label: "Get in touch" }}
        secondary={{ href: "/investors/calculator", label: "Returns calculator" }}
      />
    </>
  );
}
