import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <p className={styles.tagline}>
            Designing the web&apos;s most memorable experiences.
          </p>
        </div>
        <nav className={styles.footerNav}>
          <Link href="/work">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div className={styles.bottom}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} Studio. All rights reserved.
        </span>
        <span className={styles.made}>
          Crafted with intention.
        </span>
      </div>
    </footer>
  );
}
