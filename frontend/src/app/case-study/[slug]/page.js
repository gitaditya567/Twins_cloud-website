import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudyBySlug } from "../data";
import styles from "./case-detail.module.css";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: `/case-study/${study.slug}`
    }
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const related = CASE_STUDIES.filter((c) => c.slug !== study.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": study.title,
    "description": study.summary,
    "about": study.client,
    "author": { "@type": "Organization", "name": "TwinsCloud Private Limited" },
    "publisher": {
      "@type": "Organization",
      "name": "TwinsCloud",
      "logo": { "@type": "ImageObject", "url": "https://twinscloud.com/logo-new.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://twinscloud.com/case-study/${study.slug}` }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://twinscloud.com/" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://twinscloud.com/case-study" },
      { "@type": "ListItem", "position": 3, "name": study.title, "item": `https://twinscloud.com/case-study/${study.slug}` }
    ]
  };

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className={styles.glowSpot1} />
      <div className={styles.glowSpot2} />

      <div className={`${styles.container} animateFadeInUp`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/case-study">Case Studies</Link>
          <span>/</span>
          <span>{study.title}</span>
        </nav>

        <div className={styles.tagRow}>
          {study.tags.map((t, idx) => (
            <span className={styles.tag} key={idx}>{t}</span>
          ))}
        </div>

        <h1 className={styles.title}>{study.title}</h1>
        <p className={styles.client}>{study.client}</p>

        <div className={styles.imagesGrid}>
          {study.images.map((img, idx) => (
            <div className={styles.imageWrapper} key={idx}>
              <Image src={img.src} alt={img.caption} width={600} height={350} className={styles.image} priority={idx === 0} />
              <span className={styles.imageCaption}>{img.caption}</span>
            </div>
          ))}
        </div>

        <section className={styles.block}>
          <h2>The Challenge</h2>
          <p>{study.challenge}</p>
        </section>

        <section className={styles.block}>
          <h2>The Solution</h2>
          <p>{study.solution}</p>
        </section>

        <section className={styles.block}>
          <h2>Key Deliverables &amp; Results</h2>
          <ul className={styles.resultsList}>
            {study.results.map((r, idx) => (
              <li key={idx}><span className={styles.checkIcon}>✓</span>{r}</li>
            ))}
          </ul>
        </section>

        <section className={styles.techSection}>
          <h2>Technologies &amp; Architecture</h2>
          <div className={styles.techGrid}>
            {study.tech.map((t, idx) => (
              <span className={styles.techBadge} key={idx}>{t}</span>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Have a similar project in mind?</h2>
          <p>Talk to our engineering team about your requirements — from our Lucknow office or remotely.</p>
          <div className={styles.ctaActions}>
            <Link href="/consultation" className={styles.primaryBtn}>Schedule Free Consultation</Link>
            <Link href={`/services/${study.relatedService}`} className={styles.secondaryBtn}>
              Explore This Service
            </Link>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <h2>More Case Studies</h2>
          <div className={styles.relatedGrid}>
            {related.map((c) => (
              <Link href={`/case-study/${c.slug}`} key={c.slug} className={styles.relatedCard}>
                <h3>{c.title}</h3>
                <p>{c.summary}</p>
                <span className={styles.relatedArrow}>Read case study →</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
