"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>

      {/* Left vertical rail */}
      <div className={styles.railLeft}>
        <span className={styles.railText}>Scale Studio® — Boutique Web Design</span>
      </div>

      {/* Main nav bar */}
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.navLeft}>
          <Link href="/work" className={`${styles.link} ${pathname === "/work" ? styles.active : ""}`}>
            Work
          </Link>
          <Link href="/services" className={`${styles.link} ${pathname === "/services" ? styles.active : ""}`}>
            Services
          </Link>
          <Link href="/about" className={`${styles.link} ${pathname === "/about" ? styles.active : ""}`}>
            About
          </Link>
        </div>

        <Link href="/" className={styles.logo} aria-label="Scale Studio home">
          Scale Studio®
        </Link>

        <div className={styles.navRight}>
          <span className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            Open for Projects
          </span>
          <Link href="/contact" className={`${styles.link} ${pathname === "/contact" ? styles.active : ""}`}>
            Contact
          </Link>
        </div>
      </nav>

      {/* Right vertical rail */}
      <div className={styles.railRight}>
        <Link href="/contact" className={styles.railLink}>
          General Inquiry
        </Link>
      </div>

    </header>
  );
}
