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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
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
        <div
          className={styles.progress}
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden
        />
        <div className={`wrap ${styles.bar}`}>
          <Link
            href="/"
            className={styles.brand}
            aria-label="Non-Stop Delivery — home"
          >
            <Image
              src="/brand/nsd-mark.png"
              alt="NSD"
              width={62}
              height={22}
              priority
            />
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            <ul>
              {nav.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={active ? styles.active : ""}
                    >
                      <b>{item.n}</b>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.right}>
            <Link href="/investors#enquiry" className={styles.cta}>
              Investor enquiry →
            </Link>
            <button
              type="button"
              className={styles.burger}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise become the containing block for this fixed panel. */}
      <div
        id="mobile-nav"
        className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}
        aria-hidden={!open}
      >
        <ul>
          <li>
            <Link href="/">
              <b>00</b>Home
            </Link>
          </li>
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <b>{item.n}</b>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/investors#enquiry" className="btn btn-solid">
          Investor enquiry →
        </Link>
      </div>
    </>
  );
}
