import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import styles from "./page.module.css";

const services = [
  { num: "01", title: "Brand Identity", desc: "Visual systems that speak before a word is read." },
  { num: "02", title: "Web Design",     desc: "Bespoke interfaces built to convert and captivate." },
  { num: "03", title: "UI / UX",        desc: "Frictionless flows that keep visitors returning." },
  { num: "04", title: "Development",    desc: "Clean, performant code — no templates, ever." },
];

const works = [
  { title: "Maison Noire",  cat: "Brand & Web",   year: "2024" },
  { title: "Veld Studio",   cat: "UI Design",     year: "2024" },
  { title: "Opaline Co.",   cat: "E-Commerce",    year: "2023" },
];

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.grid} />
        </div>

        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} />
            Bespoke Web Design Studio
          </p>

          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>We design</span>
            <span className={`${styles.titleLine} ${styles.titleItalic}`}>
              experiences
            </span>
            <span className={styles.titleLine}>worth remembering.</span>
          </h1>

          <p className={styles.heroSub}>
            High-end digital design for brands that refuse the ordinary.
            Every pixel considered. Every interaction felt.
          </p>

          <div className={styles.heroCtas}>
            <a href="/work" className={styles.btnPrimary}>View Work</a>
            <a href="/contact" className={styles.btnGhost}>Start a Project</a>
          </div>
        </div>

        <div className={styles.heroStat}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>47</span>
            <span className={styles.statLabel}>Projects delivered</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>5+</span>
            <span className={styles.statLabel}>Years crafting</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Custom code</span>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className={styles.marqueeWrap} aria-hidden="true">
        <div className={styles.marquee}>
          {[...Array(2)].map((_, i) => (
            <span key={i} className={styles.marqueeTrack}>
              Web Design&nbsp;&nbsp;✦&nbsp;&nbsp;Brand Identity&nbsp;&nbsp;✦&nbsp;&nbsp;UI Design&nbsp;&nbsp;✦&nbsp;&nbsp;Development&nbsp;&nbsp;✦&nbsp;&nbsp;Strategy&nbsp;&nbsp;✦&nbsp;&nbsp;Motion&nbsp;&nbsp;✦&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Services ── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>What we do</span>
          <h2 className={styles.sectionTitle}>
            Every service, <br />
            <em>obsessively refined.</em>
          </h2>
        </div>

        <div className={styles.serviceGrid}>
          {services.map(({ num, title, desc }) => (
            <article key={num} className={styles.serviceCard}>
              <span className={styles.cardNum}>{num}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
              <span className={styles.cardArrow}>→</span>
            </article>
          ))}
        </div>
      </section>

      {/* ── Work Preview ── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Selected work</span>
          <h2 className={styles.sectionTitle}>
            Proof over <br />
            <em>promises.</em>
          </h2>
        </div>

        <div className={styles.workList}>
          {works.map(({ title, cat, year }) => (
            <a href="/work" key={title} className={styles.workItem}>
              <div className={styles.workThumb} />
              <div className={styles.workMeta}>
                <h3 className={styles.workTitle}>{title}</h3>
                <span className={styles.workCat}>{cat}</span>
              </div>
              <span className={styles.workYear}>{year}</span>
              <span className={styles.workArrow}>↗</span>
            </a>
          ))}
        </div>

        <div className={styles.workCta}>
          <a href="/work" className={styles.btnGhost}>See All Projects</a>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <h2 className={styles.ctaBandTitle}>
            Ready to build something <em>extraordinary?</em>
          </h2>
          <a href="/contact" className={styles.btnPrimary}>Get in Touch</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
