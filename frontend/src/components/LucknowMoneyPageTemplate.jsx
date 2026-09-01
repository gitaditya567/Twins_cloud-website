import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "../app/services/data";
import { LUCKNOW_CLIENTS, LUCKNOW_TESTIMONIAL, LUCKNOW_MONEY_PAGES } from "../app/lucknow-pages-data";
import styles from "./LucknowMoneyPageTemplate.module.css";

export default function LucknowMoneyPageTemplate({ page }) {
  const services = page.servicesCovered
    .map((s) => ({ ...SERVICES.find((svc) => svc.slug === s.slug), note: s.note }))
    .filter((s) => s.slug);

  const siblingPages = page.siblings
    .map((slug) => LUCKNOW_MONEY_PAGES.find((p) => p.slug === slug))
    .filter(Boolean);

  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TwinsCloud Private Limited",
    "url": `https://twinscloud.com/${page.slug}`,
    "areaServed": { "@type": "City", "name": "Lucknow" },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mubarakpur, Kamalabad Barhauli",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "226201",
      "addressCountry": "IN"
    },
    "telephone": "+91-9580880060"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": page.faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://twinscloud.com/" },
      { "@type": "ListItem", "position": 2, "name": "Lucknow Office", "item": "https://twinscloud.com/lucknow" },
      { "@type": "ListItem", "position": 3, "name": page.h1, "item": `https://twinscloud.com/${page.slug}` }
    ]
  };

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className={styles.glowSpot1} />
      <div className={styles.glowSpot2} />

      <div className={`${styles.container} animateFadeInUp`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/lucknow">Lucknow</Link>
          <span>/</span>
          <span>{page.h1}</span>
        </nav>

        <header className={styles.header}>
          <span className={styles.badge}>{page.badge}</span>
          <h1 className={styles.title}>{page.h1}</h1>
          <p className={styles.subtitle}>{page.heroSubtitle}</p>
          <div className={styles.heroActions}>
            <Link href="/consultation" className={styles.primaryBtn}>Schedule Free Consultation</Link>
            <Link href="/rfq" className={styles.secondaryBtn}>Request a Quote</Link>
          </div>
        </header>

        <section className={styles.introSection}>
          {page.intro.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </section>

        <section className={styles.servicesSection}>
          <h2>What We Deliver</h2>
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <Link href={`/services/${s.slug}`} key={s.slug} className={styles.serviceCard}>
                <h3>{s.title}</h3>
                <p>{s.note}</p>
                <span className={styles.serviceArrow}>Learn more →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.differentiatorsSection}>
          <h2>Why TwinsCloud</h2>
          <ul className={styles.differentiatorsList}>
            {page.differentiators.map((d, idx) => (
              <li key={idx}><span className={styles.checkIcon}>✓</span>{d}</li>
            ))}
          </ul>
        </section>

        <section className={styles.clientsSection}>
          <h2>Trusted by Lucknow Institutions</h2>
          <div className={styles.clientsGrid}>
            {LUCKNOW_CLIENTS.map((c, idx) => (
              <div className={styles.clientCard} key={idx}>
                <Image src={c.logo} alt={c.name} width={130} height={56} className={styles.clientLogo} />
                <span className={styles.clientName}>{c.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.testimonialSection}>
          <div className={styles.testimonialCard}>
            <Image
              src={LUCKNOW_TESTIMONIAL.image}
              alt={LUCKNOW_TESTIMONIAL.name}
              width={80}
              height={80}
              className={styles.testimonialImage}
            />
            <div>
              <p className={styles.testimonialQuote}>&ldquo;{LUCKNOW_TESTIMONIAL.quote}&rdquo;</p>
              <p className={styles.testimonialAuthor}>{LUCKNOW_TESTIMONIAL.name} — {LUCKNOW_TESTIMONIAL.role}</p>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {page.faqs.map((f, idx) => (
              <details className={styles.faqItem} key={idx}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Let&apos;s Talk About Your Project</h2>
          <p>Free consultation, transparent quoting, and a local Lucknow team — schedule a call or send us your requirements.</p>
          <div className={styles.ctaActions}>
            <Link href="/consultation" className={styles.primaryBtn}>Schedule Free Consultation</Link>
            <Link href="/rfq" className={styles.secondaryBtn}>Request a Quote</Link>
          </div>
        </section>

        <section className={styles.siblingsSection}>
          <h2>Explore More in Lucknow</h2>
          <div className={styles.siblingsGrid}>
            <Link href="/lucknow" className={styles.siblingCard}>
              <h3>TwinsCloud Lucknow Office</h3>
              <p>Address, map, team, and full local service list.</p>
            </Link>
            {siblingPages.map((s) => (
              <Link href={`/${s.slug}`} key={s.slug} className={styles.siblingCard}>
                <h3>{s.h1}</h3>
                <p>{s.heroSubtitle}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
