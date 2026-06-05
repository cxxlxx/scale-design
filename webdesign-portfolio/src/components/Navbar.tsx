"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Full-height left rail — fixed to page edge */}
      <div className={styles.railLeft} aria-hidden="true">
        <span className={styles.railText}>Scale Designs® — Boutique Web Design — Australia —</span>
      </div>

      {/* Full-height right rail — fixed to page edge */}
      <div className={styles.railRight} aria-hidden="true">
        <Link href="/contact" className={styles.railLink}>
          General Inquiry — Get In Touch —
        </Link>
      </div>

      {/* Compact top nav bar */}
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Main navigation">

          <div className={styles.navLeft}>
            <Link href="/work"     className={`${styles.link} ${pathname === "/work"     ? styles.active : ""}`}>Work</Link>
            <Link href="/services" className={`${styles.link} ${pathname === "/services" ? styles.active : ""}`}>Services</Link>
            <Link href="/about"    className={`${styles.link} ${pathname === "/about"    ? styles.active : ""}`}>About</Link>
          </div>

          <Link href="/" className={styles.logo} aria-label="Scale Designs home">
            Scale Designs®
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
      </header>
    </>
  );
}
