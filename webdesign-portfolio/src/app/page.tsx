import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section className={styles.hero} aria-label="Hero">

          {/* Left status column */}
          <div className={styles.heroStatus}>
            <div className={styles.statusBlock}>
              <p className={styles.statusLabel}>Status</p>
              <p className={styles.statusValue}>Open Until<br />Further Notice</p>
            </div>
            <div className={styles.statusBlock}>
              <p className={styles.statusLabel}>Hours</p>
              <p className={styles.statusValue}>Mon–Fri 9am–5pm<br />Sat–Sun Off</p>
            </div>
            <div className={styles.statusBlock}>
              <p className={styles.statusLabel}>Based In</p>
              <p className={styles.statusValue}>Australia</p>
            </div>
          </div>

          {/* Centre — big type + image */}
          <div className={styles.heroCentre}>

            {/* Top line of display type — sits above the image */}
            <div className={styles.typeWrap} aria-hidden="true">
              <span className={styles.typeTop}>Scale</span>
            </div>

            {/* Hero image placeholder — sandwiched between type lines */}
            <div className={styles.imagePlaceholder}>
              <div className={styles.imagePlaceholderInner}>
                <span className={styles.imagePlaceholderLabel}>
                  Drop your hero image here<br />
                  <span>/public/hero.jpg</span>
                </span>
              </div>
            </div>

            {/* Bottom line of display type — overlaps image bottom */}
            <div className={styles.typeWrapBottom} aria-hidden="true">
              <span className={styles.typeBottom}>Studio</span>
            </div>

            {/* Tagline sits below the type */}
            <div className={styles.taglineRow}>
              <p className={styles.tagline}>
                A boutique web design studio in Australia
              </p>
              <a href="/work" className={styles.heroCta}>
                View Work →
              </a>
            </div>

          </div>

          {/* Right column — circular badge */}
          <div className={styles.heroRight}>
            <div className={styles.badgeWrap} aria-label="Scale Studio — Boutique Web Design Australia">
              <svg
                className={styles.badge}
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  id="circlePath"
                  d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                  fill="none"
                />
                <text className={styles.badgeText}>
                  <textPath href="#circlePath" startOffset="0%">
                    Scale Studio® — Boutique Web Design — Australia —&nbsp;
                  </textPath>
                </text>
                <text
                  x="100"
                  y="95"
                  textAnchor="middle"
                  className={styles.badgeCentre}
                >SS
                </text>
                <text
                  x="100"
                  y="115"
                  textAnchor="middle"
                  className={styles.badgeCentreSmall}
                >®
                </text>
              </svg>
            </div>
          </div>

        </section>

        {/* ── PLACEHOLDER for sections coming in later steps ── */}
        <div className={styles.comingSoon}>
          <p>Services, Work &amp; Footer coming in the next steps →</p>
        </div>

      </main>
    </>
  );
}
