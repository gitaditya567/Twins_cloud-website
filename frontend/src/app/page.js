"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay was prevented by the browser:", err);
      });
    }
  }, []);

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
      {/* Hero Section with Technology Video Background */}
      <section className={styles.hero}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={styles.videoBackground}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-computer-38392-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className={styles.videoOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.badge}>Welcome To TwinsCloud</span>
          <h1 className={styles.title}>
            Best Software, Website,<br />
            <span className={styles.highlight}>App Development Company</span>
          </h1>
          <p className={styles.subtitle}>
            Your Cloud Lifecycle Consulting Partner
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
