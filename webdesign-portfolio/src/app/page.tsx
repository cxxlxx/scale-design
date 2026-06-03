import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import styles from "./page.module.css";

const services = [
  {
    num: "01",
    title: "Brand Identity",
    desc: "Visual systems built with precision and intention. Logos, typography, colour, and motion that speak before a word is read.",
    detail: "Strategy — Visual Identity — Guidelines",
  },
  {
    num: "02",
    title: "Web Design",
    desc: "Bespoke interfaces designed to captivate and convert. Every layout considered. No templates. Ever.",
    detail: "UX — Art Direction — Responsive Design",
  },
  {
    num: "03",
    title: "Development",
    desc: "Clean, performant, hand-written code. Built on the modern web stack and deployed for speed.",
    detail: "Next.js — TypeScript — Vercel",
  },
  {
    num: "04",
    title: "UI / UX",
    desc: "Frictionless flows and considered interactions. Designed to keep visitors engaged and returning.",
    detail: "Wireframes — Prototypes — User Testing",
  },
];

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>

        {/* ── HERO ── */}
        <section className={styles.hero} aria-label="Hero">

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

          <div className={styles.heroCentre}>
            <div className={styles.typeWrap} aria-hidden="true">
              <span className={styles.typeTop}>Scale</span>
            </div>

            <div className={styles.imagePlaceholder}>
              <div className={styles.imagePlaceholderInner}>
                <span className={styles.imagePlaceholderLabel}>
                  Drop your hero image here<br />
                  <span>/public/hero.jpg</span>
                </span>
              </div>
            </div>

            <div className={styles.typeWrapBottom} aria-hidden="true">
              <span className={styles.typeBottom}>Studio</span>
            </div>

            <div className={styles.taglineRow}>
              <p className={styles.tagline}>
                A boutique web design studio in Australia
              </p>
              <a href="/work" className={styles.heroCta}>
                View Work →
              </a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.badgeWrap} aria-label="Scale Studio — Boutique Web Design Australia">
              <svg className={styles.badge} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path id="circlePath" d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" fill="none" />
                <text className={styles.badgeText}>
                  <textPath href="#circlePath" startOffset="0%">
                    Scale Studio® — Boutique Web Design — Australia —&nbsp;
                  </textPath>
                </text>
                <text x="100" y="95" textAnchor="middle" className={styles.badgeCentre}>SS</text>
                <text x="100" y="115" textAnchor="middle" className={styles.badgeCentreSmall}>®</text>
              </svg>
            </div>
          </div>

        </section>

        {/* ── SERVICES ── */}
        <section className={styles.services} aria-label="Services">

          <div className={styles.servicesHeader}>
            <span className={styles.sectionIndex}>—</span>
            <span className={styles.sectionLabel}>Services</span>
            <h2 className={styles.sectionTitle}>What We Do</h2>
          </div>

          <div className={styles.serviceList}>
            {services.map(({ num, title, desc, detail }) => (
              <article key={num} className={styles.serviceRow}>
                <span className={styles.serviceNum}>{num}</span>
                <div className={styles.serviceBody}>
                  <h3 className={styles.serviceName}>{title}</h3>
                  <p className={styles.serviceDesc}>{desc}</p>
                </div>
                <p className={styles.serviceDetail}>{detail}</p>
                <span className={styles.serviceArrow}>↗</span>
              </article>
            ))}
          </div>

          {/* Bottom strip */}
          <div className={styles.servicesFooter}>
            <p className={styles.servicesNote}>
              Every project is taken on personally — no outsourcing, no junior handoffs.
            </p>
            <a href="/contact" className={styles.heroCta}>Start a Project →</a>
          </div>

        </section>

        {/* ── PLACEHOLDER for Work + Footer ── */}
        <div className={styles.comingSoon}>
          <p>Work &amp; Footer coming in the next steps →</p>
        </div>

      </main>
    </>
  );
}
