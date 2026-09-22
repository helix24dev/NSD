import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Fleet from "@/components/Fleet";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import CtaBand from "@/components/CtaBand";
import { IconRider, IconBike, IconRoute, IconGrowth, IconMap, IconBag, IconShield, IconReport, IconChart } from "@/components/Icons";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className={`${styles.hero} d-pattern`}>
        <div className="wrap">
          <div className={styles.heroGrid}>
            <div>
              <Eyebrow>Delivery riders and bikes across the UAE</Eyebrow>
              <h1 className={`${styles.h1} reveal`}>
                The riders behind the UAE&rsquo;s <em>favourite delivery apps.</em>
              </h1>
              <p className={`lede ${styles.heroLede} reveal`} data-delay="100">
                Non Stop Delivery supplies trained riders and well-maintained motorbikes to Talabat, Noon, Keeta
                and Amazon — so orders keep moving, every hour of every day.
              </p>
              <div className="btn-row reveal" data-delay="200">
                <Link href="/services" className="btn btn-primary">
                  What we do
                </Link>
                <Link href="/investors" className="btn btn-secondary">
                  For investors
                </Link>
              </div>
              <div className={`${styles.heroFacts} reveal`} data-delay="300">
                <div>
                  <b>10+ years</b>
                  <span>in the UAE</span>
                </div>
                <div>
                  <b>4 apps</b>
                  <span>our riders deliver for</span>
                </div>
                <div>
                  <b>Rider + bike</b>
                  <span>supplied together</span>
                </div>
              </div>
            </div>
            <div className={`${styles.heroArt} reveal`} data-delay="150">
              <Fleet />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- APPS ---------------- */}
      <section className={styles.apps}>
        <div className="wrap">
          <p className={styles.appsCap}>Our riders deliver for</p>
        </div>
        <Marquee />
      </section>

      {/* ---------------- WHAT WE DO ---------------- */}
      <section className="section" id="what-we-do">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="h-lg reveal">
                We keep delivery apps moving — <em>one rider and one bike at a time.</em>
              </h2>
            </div>
            <Link href="/services" className="text-link reveal">
              See how we work →
            </Link>
          </div>

          <div className="card-grid">
            <div className="card reveal">
              <div className="icon">
                <IconRider />
              </div>
              <h4>Trained riders</h4>
              <p>We find, onboard and train riders to each app&rsquo;s standards, then support them on every shift.</p>
              <ul className="checks">
                <li>Hiring and onboarding</li>
                <li>Training for each app</li>
                <li>Shift planning and support</li>
              </ul>
            </div>
            <div className="card reveal" data-delay="100">
              <div className="icon">
                <IconBike />
              </div>
              <h4>Well-maintained bikes</h4>
              <p>Every rider comes with a motorbike we own, service and keep on the road — so downtime stays low.</p>
              <ul className="checks">
                <li>Regular servicing</li>
                <li>Gear and safety kit</li>
                <li>Quick replacements</li>
              </ul>
            </div>
            <div className="card reveal" data-delay="200">
              <div className="icon">
                <IconRoute />
              </div>
              <h4>Ready when apps need more</h4>
              <p>New zones, busy seasons, big launches — we add riders and bikes as demand grows, with clear reporting.</p>
              <ul className="checks">
                <li>Scale up quickly</li>
                <li>Riders work on the app itself</li>
                <li>Simple monthly reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="section section--soft" id="how-it-works">
        <div className="wrap">
          <div className="two two--top">
            <div>
              <Eyebrow>Simple by design</Eyebrow>
              <h2 className="h-lg reveal">We supply the riders. The apps do the delivering.</h2>
              <div className="copy reveal" data-delay="100" style={{ marginTop: 22 }}>
                <p>
                  Non Stop Delivery isn&rsquo;t a delivery app. We&rsquo;re the team behind the scenes that keeps
                  the apps supplied with people and bikes.
                </p>
                <p>
                  Delivery apps own the customer, the order and the app. We own the hard part underneath — the
                  riders, the bikes, and keeping both on the road day after day.
                </p>
              </div>
              <div className="btn-row reveal" data-delay="200">
                <Link href="/about" className="btn btn-secondary">
                  About Non Stop Delivery
                </Link>
              </div>
            </div>
            <div className="points reveal" data-delay="150">
              {[
                [IconBag, "Apps need more riders", "Talabat, Noon, Keeta and Amazon need a steady supply of riders and bikes as orders grow."],
                [IconRider, "We supply and train them", "We hire and train the riders and keep every bike serviced and ready."],
                [IconRoute, "Riders deliver on the app", "Riders take orders on the app itself while we look after everything else."],
                [IconChart, "Every bike earns each month", "Each rider-and-bike unit on the road brings in steady monthly income."],
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
      </section>

      {/* ---------------- WHY THE UAE ---------------- */}
      <section className="section" id="why-uae">
        <div className="wrap">
          <div className="two">
            <div className={`${styles.fleetCard} reveal`}>
              <Fleet compact />
              <p>Riders in every colour, on every road in the UAE.</p>
            </div>
            <div>
              <Eyebrow>Why the UAE</Eyebrow>
              <h2 className="h-lg reveal">Online ordering keeps growing. So does the need for riders.</h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                Two things drive demand for our fleet: people ordering more online, and a country investing in
                the roads and cities that make fast delivery possible.
              </p>
              <div className="points reveal" data-delay="180" style={{ marginTop: 24 }}>
                {[
                  [IconGrowth, "More online orders every year", "Food, groceries and shopping — UAE customers expect it at the door, fast."],
                  [IconMap, "Cities built for movement", "Dubai 2040 and Abu Dhabi 2030 plans put smart, connected mobility first."],
                  [IconBag, "Apps grow demand, we grow supply", "As the apps win more customers, they need more riders on the road."],
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

      {/* ---------------- NUMBERS ---------------- */}
      <section className="section section--soft" id="numbers">
        <div className="wrap">
          <div className="sec-head sec-head--center">
            <div>
              <Eyebrow>In numbers</Eyebrow>
              <h2 className="h-lg reveal">A decade on UAE roads.</h2>
            </div>
          </div>
          <Stats />
        </div>
      </section>

      {/* ---------------- FOR INVESTORS (bento) ---------------- */}
      <section className="section" id="investors">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow>For investors</Eyebrow>
              <h2 className="h-lg reveal">
                Fund bikes on the road. <em>Earn from every one.</em>
              </h2>
              <p className="lede reveal" data-delay="100">
                A clear way to invest in the UAE&rsquo;s delivery growth — with a returns calculator, honest answers
                and a step-by-step process.
              </p>
            </div>
            <Link href="/investors" className="text-link reveal">
              Read the investor page →
            </Link>
          </div>

          <div className="bento">
            <div className="tile tile-navy b-6 r-2 reveal">
              <div className="small">The idea</div>
              <h3>Every bike we put on the road earns a steady monthly income.</h3>
              <p>
                You fund the bikes and riders. We recruit, train, maintain and deploy them. The apps keep them
                busy. You receive a share of what each bike earns, every month, for the length of the term.
              </p>
              <Link href="/investors#calculator" className="btn btn-primary">
                Try the returns calculator
              </Link>
            </div>
            <div className="tile tile-tint b-3 reveal" data-delay="80">
              <div className="small">Demand</div>
              <div className="big">4</div>
              <p>leading delivery apps our riders deliver for</p>
            </div>
            <div className="tile tile-soft b-3 reveal" data-delay="120">
              <div className="small">Experience</div>
              <div className="big">10+</div>
              <p>years operating in the UAE</p>
            </div>
            <div className="tile tile-white b-3 reveal" data-delay="160">
              <div className="card-icon">
                <IconShield />
              </div>
              <h4 className={styles.tileH4}>Backed by UAE law</h4>
              <p>Signed and attested agreements set out exactly what you own and what you receive.</p>
            </div>
            <div className="tile tile-white b-3 reveal" data-delay="200">
              <div className="card-icon">
                <IconReport />
              </div>
              <h4 className={styles.tileH4}>Clear monthly reporting</h4>
              <p>Bikes on the road, income earned and any issues — reported to you regularly.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Need riders for your app, or thinking about investing? Let’s talk." />
    </>
  );
}
