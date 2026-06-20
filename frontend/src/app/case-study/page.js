"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./case-study.module.css";

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const end = parseFloat(target);
    if (isNaN(end)) return;

    const duration = 1200; // 1.2 seconds

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const currentVal = progress * end;
      setCount(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [target]);

  const isDecimal = target.toString().includes(".");
  const displayCount = isDecimal ? count.toFixed(1) : Math.floor(count);

  return <span>{displayCount}{suffix}</span>;
}

export default function CaseStudyPage() {
  const stats = [
    { target: 99.9, suffix: "%", label: "Deployment Success Rate" },
    { target: 15, suffix: "K+", label: "Daily Active Portal Users" },
    { target: 40, suffix: "%", label: "Average Infrastructure Cost Saved" }
  ];

  const secondaryStudies = [
    {
      title: "Pincode Credits Financial Services",
      category: "Enterprise",
      desc: "Architected a highly secure, transaction-audited ledger backend for credit line distributions, hardening data transmission security and database backup compliance.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Docker", "AWS ECS"]
    }
  ];

  return (
    <div className={styles.caseStudyPage}>
      {/* Background animated spots */}
      <div className={styles.glowSpot1} />
      <div className={styles.glowSpot2} />

      <div className={`${styles.caseStudyContainer} animateFadeInUp`}>
        {/* Page Header */}
        <header className={styles.caseStudyHeader}>
          <span className={styles.caseStudyBadge}>Success Stories</span>
          <h1 className={styles.caseStudyTitle}>
            Our Case <span className={styles.highlight}>Studies</span>
          </h1>
          <p className={styles.caseStudySubtitle}>
            Read in-depth reviews of how we solved complex technical challenges and added business value for our enterprise partners.
          </p>
        </header>

        {/* Stats Grid */}
        <section className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statNumber}>
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Featured Case Study 1: BIPS */}
        <section className={styles.featuredSection}>
          <div className={styles.featuredMeta}>
            <span className={`${styles.metaBadge} ${styles.metaMern}`}>MERN Stack</span>
            <span className={`${styles.metaBadge} ${styles.metaEdu}`}>Education Tech</span>
            <span className={`${styles.metaBadge} ${styles.metaGov}`}>Central ERP</span>
          </div>

          <h2 className={styles.featuredTitle}>Bimla International Public School (BIPS) Portal &amp; ERP</h2>

          <div className={styles.featuredGrid}>
            {/* Left Content Details */}
            <div className={styles.featuredContent}>
              <div className={styles.contentBlock}>
                <h3>The Challenge</h3>
                <p>
                  Bimla International Public School (BIPS) needed a high-performance public portal to manage admissions and build a clean online presence. Additionally, school administrators required a secure, centralized ERP system to manage student profiles, fee collections, role permissions, and academic calendars, replacing slow manual spreadsheets.
                </p>
              </div>

              <div className={styles.contentBlock}>
                <h3>The Solution</h3>
                <p>
                  We architected a unified solution built completely on the MERN stack. The public-facing portal provides responsive interfaces for parents and students. The admin ERP system serves as a dashboard displaying real-time school statistics, daily fee collection logs, auto-calculated student-to-teacher distributions, and database audit logs.
                </p>
              </div>

              <div className={styles.contentBlock}>
                <h3>Key Deliverables &amp; Results</h3>
                <ul className={styles.keyResultsList}>
                  <li>Centralized School ERP dashboard managing 765+ active students and 22+ teachers.</li>
                  <li>Real-time fee collection graph and ledger summaries tracking up to 90,050 INR in collections.</li>
                  <li>High PageSpeed public website built with React, reducing page load latency by 45%.</li>
                  <li>AWS-based deployment featuring automated backup guardrails and data encryption at rest.</li>
                </ul>
              </div>
            </div>

            {/* Right Images Column */}
            <div className={styles.screenshotsContainer}>
              <div className={styles.screenshotWrapper}>
                <Image
                  src="/case-study-bips-web.png"
                  alt="Bimla International Public School Web Portal"
                  width={600}
                  height={350}
                  className={styles.screenshotImage}
                  priority
                />
                <div className={styles.screenshotCaption}>BIPS Public-Facing Web Portal</div>
              </div>

              <div className={styles.screenshotWrapper}>
                <Image
                  src="/case-study-bips-erp.png"
                  alt="Bimla International Public School ERP Dashboard"
                  width={600}
                  height={350}
                  className={styles.screenshotImage}
                />
                <div className={styles.screenshotCaption}>BIPS Admin ERP Management Dashboard</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study 2: Architecture Herald */}
        <section className={styles.featuredSection}>
          <div className={styles.featuredMeta}>
            <span className={`${styles.metaBadge} ${styles.metaMern}`}>MERN Stack</span>
            <span className={`${styles.metaBadge} ${styles.metaGov}`}>Booking System</span>
            <span className={`${styles.metaBadge} ${styles.metaMern}`}>Payment API</span>
          </div>

          <h2 className={styles.featuredTitle}>Architecture Herald Digital Magazine Portal</h2>

          <div className={styles.featuredGrid}>
            {/* Left Content Details */}
            <div className={styles.featuredContent}>
              <div className={styles.contentBlock}>
                <h3>The Challenge</h3>
                <p>
                  As a premier editorial magazine re-defining how luxury architecture and interior design are showcased, Architecture Herald faced major UI/UX bottlenecks. Crucially, they suffered from registration transaction failures, manual session slot management errors for creator interviews, and slow page loading speeds.
                </p>
              </div>

              <div className={styles.contentBlock}>
                <h3>The Solution</h3>
                <p>
                  We deployed a fully responsive, high-performance web portal built on the MERN stack. We integrated an automated calendar slot allocation system for candidate registrations and virtual interviews. The registration portal was optimized to handle bulk form payloads, backed by multiple payment gateways (Razorpay, Stripe) for frictionless domestic and international design submissions.
                </p>
              </div>

              <div className={styles.contentBlock}>
                <h3>Key Deliverables &amp; Results</h3>
                <ul className={styles.keyResultsList}>
                  <li>Complete UI Design and UX overhaul aligned to premium editorial brand guidelines.</li>
                  <li>Integrated multiple payment gateway pipelines (Stripe &amp; Razorpay) resolving transaction conversions.</li>
                  <li>Automated interview slot allocation dashboard managing dates with zero calendar overlaps.</li>
                  <li>Continuous monthly cloud maintenance, caching rules, and asset optimization, resulting in 99.9% uptime.</li>
                </ul>
              </div>
            </div>

            {/* Right Images Column */}
            <div className={styles.screenshotsContainer}>
              <div className={styles.screenshotWrapper}>
                <Image
                  src="/case-study-herald.png"
                  alt="Architecture Herald Digital Magazine Portal"
                  width={600}
                  height={350}
                  className={styles.screenshotImage}
                />
                <div className={styles.screenshotCaption}>Architecture Herald Editorial Portal</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study 3: Shri Machail Mata Yatra 2026 */}
        <section className={styles.featuredSection}>
          <div className={styles.featuredMeta}>
            <span className={`${styles.metaBadge} ${styles.metaMern}`}>MERN Stack</span>
            <span className={`${styles.metaBadge} ${styles.metaGov}`}>Govt IT System</span>
            <span className={`${styles.metaBadge} ${styles.metaEdu}`}>Cloud Scaling</span>
          </div>

          <h2 className={styles.featuredTitle}>Shri Machail Mata Yatra 2026 Devotee Portal</h2>

          <div className={styles.featuredGrid}>
            {/* Left Content Details */}
            <div className={styles.featuredContent}>
              <div className={styles.contentBlock}>
                <h3>The Challenge</h3>
                <p>
                  The Shri Machail Mata Yatra is a major annual pilgrimage that brings hundreds of thousands of devotees to the region. Administrators needed a reliable devotee registration and slot booking portal that could display real-time slot availability, prevent double bookings, verify mobile numbers via OTP systems, handle photo uploads, and scale dynamically during peak traffic spikes.
                </p>
              </div>

              <div className={styles.contentBlock}>
                <h3>The Solution</h3>
                <p>
                  We designed and engineered a MERN-stack devotee portal. The dashboard features a real-time availability check (tracking Total, Booked, and Available slots dynamically on date selection). We integrated secure mobile OTP verifications to eliminate automated bot entries, and built cloud-native hosting architectures on AWS to guarantee zero-downtime, sub-second responses during high concurrency traffic periods.
                </p>
              </div>

              <div className={styles.contentBlock}>
                <h3>Key Deliverables &amp; Results</h3>
                <ul className={styles.keyResultsList}>
                  <li>Integrated real-time database slot counters dynamically matching available passes.</li>
                  <li>OTP verification SMS pipeline securing the portal against spam registrations.</li>
                  <li>Optimized image and photo upload streams, reducing bandwidth utilization.</li>
                  <li>Deployed on auto-scaling AWS structures, successfully managing over 50,000 daily registrations.</li>
                </ul>
              </div>
            </div>

            {/* Right Images Column */}
            <div className={styles.screenshotsContainer}>
              <div className={styles.screenshotWrapper}>
                <Image
                  src="/case-study-machail.jpg"
                  alt="Shri Machail Mata Yatra 2026 Online Registration Portal"
                  width={600}
                  height={350}
                  className={styles.screenshotImage}
                />
                <div className={styles.screenshotCaption}>Shri Machail Mata Yatra 2026 Devotee Portal</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study 4: Design & Vision (D&V '25) Awards */}
        <section className={styles.featuredSection}>
          <div className={styles.featuredMeta}>
            <span className={`${styles.metaBadge} ${styles.metaMern}`}>MERN Stack</span>
            <span className={`${styles.metaBadge} ${styles.metaGov}`}>E-Commerce</span>
            <span className={`${styles.metaBadge} ${styles.metaEdu}`}>Admin Panel</span>
          </div>

          <h2 className={styles.featuredTitle}>Design &amp; Vision Built Environment Awards (D&amp;V &apos;25)</h2>

          <div className={styles.featuredGrid}>
            {/* Left Content Details */}
            <div className={styles.featuredContent}>
              <div className={styles.contentBlock}>
                <h3>The Challenge</h3>
                <p>
                  The D&amp;V &apos;25 Awards &amp; Conference at Novotel Goa Panjim brings together over 600+ industry leaders in architecture and real estate. The organizers faced severe checkout issues, domestic and international payment gateway problems, UI design issues, and an unoptimized online book store module that led to transaction drops.
                </p>
              </div>

              <div className={styles.contentBlock}>
                <h3>The Solution</h3>
                <p>
                  We designed and deployed a comprehensive MERN-stack event portal. We built an online e-commerce book store and ticket checkout flow, resolving critical checkout and loading bottlenecks. Multiple payment gateways (Razorpay, Stripe) were integrated with absolute currency scaling. A secure admin console was built to help managers track registrations, invoice summaries, and sales metrics, backed by continuous site maintenance audits.
                </p>
              </div>

              <div className={styles.contentBlock}>
                <h3>Key Deliverables &amp; Results</h3>
                <ul className={styles.keyResultsList}>
                  <li>Built a complete book store and conference ticket e-commerce system with secure checkouts.</li>
                  <li>Integrated multiple payment gateway APIs resolving transaction bottlenecks.</li>
                  <li>Custom administrative analytics panel tracking delegate registration metrics in real-time.</li>
                  <li>Overhauled UI/UX layout alignment for high readability and premium branding depth.</li>
                </ul>
              </div>
            </div>

            {/* Right Images Column */}
            <div className={styles.screenshotsContainer}>
              <div className={styles.screenshotWrapper}>
                <Image
                  src="/case-study-designawards.png"
                  alt="D&V '25 Built Environment Leadership Awards Portal"
                  width={600}
                  height={350}
                  className={styles.screenshotImage}
                />
                <div className={styles.screenshotCaption}>D&amp;V &apos;25 Leadership Awards Portal</div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Case Studies Section */}
        <section className={styles.secondarySection}>
          <div className={styles.secondarySectionHeader}>
            <h2>Other Client Migrations &amp; Audits</h2>
          </div>

          <div className={styles.secondaryGrid}>
            {secondaryStudies.map((study, index) => (
              <div key={index} className={styles.studyCard}>
                <div className={styles.featuredMeta}>
                  <span className={`${styles.metaBadge} ${study.category === "Government" ? styles.metaGov : styles.metaMern}`}>
                    {study.category}
                  </span>
                </div>
                <h3>{study.title}</h3>
                <p>{study.desc}</p>
                <div className={styles.techList}>
                  {study.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
