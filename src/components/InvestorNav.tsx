"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { investorPages } from "@/lib/investors";
import styles from "./InvestorNav.module.css";

export default function InvestorNav() {
  const pathname = usePathname();
  return (
    <nav className={styles.nav} aria-label="Investor pages">
      {investorPages.map((p) => (
        <Link key={p.href} href={p.href} className={pathname === p.href ? styles.active : ""}>
          {p.label}
        </Link>
      ))}
    </nav>
  );
}
