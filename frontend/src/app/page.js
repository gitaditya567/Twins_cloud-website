import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const highlights = [
    {
      title: "Cloud Services",
      desc: "Architecting reliable, scalable and highly secure cloud environments tailored to your needs.",
      icon: "☁️"
    },
    {
      title: "MERN Stack Dev",
      desc: "Full-cycle production applications built on MongoDB, Express, React, and Node.js.",
      icon: "⚡"
    },
    {
      title: "Expert Training",
      desc: "Level up your engineering teams with hands-on labs and enterprise training courses.",
      icon: "🎓"
    }
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Next.js + MERN Architecture</span>
          <h1 className={styles.title}>
            Powering Enterprise <br />
            <span className={styles.highlight}>Cloud Solutions</span>
          </h1>
          <p className={styles.subtitle}>
            TwinsCloud builds high-performance web applications and cloud infrastructure to accelerate your digital transformation journey.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/consultation" className={styles.primaryBtn}>
              Schedule Consultation
            </Link>
            <Link href="/rfq" className={styles.secondaryBtn}>
              Request a Quote
            </Link>
          </div>
        </div>

        <div className={styles.heroGraphic}>
          <div className={styles.logoCircle}>
            <Image
              src="/logo.png"
              alt="TwinsCloud Large Logo"
              width={220}
              height={88}
              className={styles.heroLogo}
              priority
            />
          </div>
        </div>
      </section>

      {/* Services/Highlights Section */}
      <section className={styles.highlightsSection}>
        <div className={styles.sectionHeader}>
          <h2>Accelerate Your Growth</h2>
          <p>Explore our main capabilities and engineering services.</p>
        </div>
        <div className={styles.grid}>
          {highlights.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} TwinsCloud. All rights reserved.</p>
      </footer>
    </div>
  );
}
