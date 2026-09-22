"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`wrap ${styles.bar}`}>
          <Link href="/" className={styles.brand} aria-label="Non Stop Delivery home">
            <Image src="/brand/nsd-mark-dark.png" alt="NSD" width={82} height={29} priority />
            <span>Non Stop Delivery</span>
          </Link>

          <nav className={styles.nav} aria-label="Main">
            <ul>
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link href={item.href} className={active ? styles.active : ""}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.right}>
            <Link href="/investors/enquiry" className={`btn btn-primary ${styles.cta}`}>
              Investor enquiry
            </Link>
            <button
              type="button"
              className={styles.burger}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className={styles.burgerLines} data-open={open} aria-hidden />
              <span className={styles.srOnly}>{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header>: its backdrop-filter would otherwise be the containing block for this fixed panel. */}
      <div id="mobile-nav" className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`} aria-hidden={!open}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/investors/enquiry" className="btn btn-primary">
          Investor enquiry
        </Link>
      </div>
    </>
  );
}
