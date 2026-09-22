import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.top}>
          <div>
            <Link href="/" className={styles.brand} aria-label="Non Stop Delivery home">
              <Image src="/brand/nsd-mark-dark.png" alt="NSD" width={96} height={34} />
              <span>Non Stop Delivery</span>
            </Link>
            <p className={styles.blurb}>
              Trained delivery riders and well-maintained motorbikes for the UAE&rsquo;s leading delivery apps.
            </p>
          </div>

          <div className={styles.col}>
            <div className={styles.colCap}>Company</div>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <div className={styles.colCap}>Investors</div>
            <ul>
              <li>
                <Link href="/investors">Overview</Link>
              </li>
              <li>
                <Link href="/investors/calculator">Returns calculator</Link>
              </li>
              <li>
                <Link href="/investors/questions">Your questions</Link>
              </li>
              <li>
                <Link href="/investors/how-it-works">How it works</Link>
              </li>
              <li>
                <Link href="/investors/enquiry">Get in touch</Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <div className={styles.colCap}>Contact</div>
            <address className={styles.addr}>
              {site.legal}
              <br />
              {site.location}
              <br />
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            © {new Date().getFullYear()} {site.legal}. For information only, not an offer or financial advice.
            Investment terms and returns are subject to final documentation and due diligence.
          </div>
        </div>
      </div>
    </footer>
  );
}
