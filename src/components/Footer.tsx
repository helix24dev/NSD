import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";
import DubaiClock from "./DubaiClock";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Image src="/brand/nsd-lockup.png" alt="Non-Stop Delivery" width={150} height={69} />
            <p className={styles.blurb}>
              Fleet &amp; workforce operator supplying contracted rider and bike capacity to the UAE&rsquo;s
              leading delivery platforms.
            </p>
            <div className={styles.tags}>
              <span>NSD</span>
              <span>UAE</span>
              <span>3PL</span>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.colCap}>Navigate</div>
            <ul>
              <li>
                <Link href="/">
                  <b>00</b>Home
                </Link>
              </li>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>
                    <b>{n.n}</b>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <div className={styles.colCap}>Investors</div>
            <ul>
              <li><Link href="/investors#case">The case</Link></li>
              <li><Link href="/investors#model">Returns model</Link></li>
              <li><Link href="/investors#diligence">Due diligence</Link></li>
              <li><Link href="/investors#process">Process</Link></li>
              <li><Link href="/investors#enquiry">Request overview</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <div className={styles.colCap}>Head office</div>
            <address className={styles.addr}>
              {site.legal}
              <br />
              {site.address[0]}
              <br />
              {site.address[1]}
              <br />
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            © <span>{new Date().getFullYear()}</span> {site.legal.toUpperCase()} · FOR DISCUSSION ONLY, NOT AN
            OFFER OR FINANCIAL ADVICE. All investment terms, returns and legal rights are subject to definitive
            documentation and due diligence.
          </div>
          <DubaiClock />
        </div>
      </div>
    </footer>
  );
}
