import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Fleet from "@/components/Fleet";
import Picture from "@/components/Picture";
import AppLogos from "@/components/AppLogos";
import CtaBand from "@/components/CtaBand";
import { IconRider, IconBike, IconRoute } from "@/components/Icons";
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
                and Amazon, so orders keep moving every hour of every day.
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
              <Picture
                name="home-hero"
                alt="Delivery riders in different coloured uniforms on motorbikes on a UAE street"
                ratio="4x3"
                priority
                fallback={<Fleet />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- APPS ---------------- */}
      <section className={styles.apps}>
        <div className="wrap">
          <p className={styles.appsCap}>Our riders deliver for</p>
          <AppLogos />
        </div>
      </section>

      {/* ---------------- WHAT WE DO ---------------- */}
      <section className="section" id="what-we-do">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="h-lg reveal">
                We supply the riders. <em>The apps do the delivering.</em>
              </h2>
              <p className="lede reveal" data-delay="100">
                We are not a delivery app. We are the team behind the scenes that keeps the apps supplied with
                people and bikes.
              </p>
            </div>
            <Link href="/services" className="text-link reveal">
              More about what we do →
            </Link>
          </div>

          <div className="card-grid">
            <div className="card reveal">
              <div className="icon">
                <IconRider />
              </div>
              <h4>Trained riders</h4>
              <p>We find, onboard and train riders to each app&rsquo;s standards, then support them on every shift.</p>
            </div>
            <div className="card reveal" data-delay="100">
              <div className="icon">
                <IconBike />
              </div>
              <h4>Well-maintained bikes</h4>
              <p>Every rider comes with a motorbike we own, service and keep on the road, so downtime stays low.</p>
            </div>
            <div className="card reveal" data-delay="200">
              <div className="icon">
                <IconRoute />
              </div>
              <h4>Ready when apps need more</h4>
              <p>New zones, busy seasons, big launches. We add riders and bikes as demand grows, with clear reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- WHY THE UAE ---------------- */}
      <section className="section section--soft" id="why-uae">
        <div className="wrap">
          <div className="two">
            <Picture
              name="home-uae"
              alt="A delivery rider on a motorbike with the Dubai skyline behind"
              ratio="4x3"
              className="reveal"
              fallback={<Fleet compact />}
            />
            <div>
              <Eyebrow>Why the UAE</Eyebrow>
              <h2 className="h-lg reveal">Online ordering keeps growing. So does the need for riders.</h2>
              <div className="copy reveal" data-delay="100" style={{ marginTop: 20 }}>
                <p>
                  Food, groceries and shopping: UAE customers expect it at the door, fast. As the apps win more
                  customers they need more riders on the road, and city plans like Dubai 2040 and Abu Dhabi 2030
                  are built around exactly that kind of movement.
                </p>
                <p>The apps grow the demand. We grow the supply.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOR INVESTORS ---------------- */}
      <section className="section" id="investors">
        <div className="wrap">
          <div className="two two--top">
            <div>
              <Eyebrow>For investors</Eyebrow>
              <h2 className="h-lg reveal">
                Fund bikes on the road. <em>Earn from every one.</em>
              </h2>
              <p className="lede reveal" data-delay="100" style={{ marginTop: 16 }}>
                You fund the bikes and riders. We recruit, train, maintain and deploy them. The apps keep them busy.
                You receive a share of what each bike earns, every month, for the length of the term.
              </p>
              <div className="btn-row reveal" data-delay="160">
                <Link href="/investors" className="btn btn-primary">
                  How it works
                </Link>
                <Link href="/investors/calculator" className="btn btn-secondary">
                  Returns calculator
                </Link>
              </div>
            </div>
            <div className="card reveal" data-delay="120">
              <ul className="checks" style={{ marginTop: 0 }}>
                <li>Steady demand from four leading delivery apps</li>
                <li>Signed, attested agreements under UAE law</li>
                <li>Regular reports on bikes, income and costs</li>
                <li>More bikes on the road means more income</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Need riders for your app, or thinking about investing? Let’s talk." />
    </>
  );
}
