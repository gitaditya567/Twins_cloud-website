import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug } from "../data";
import styles from "./service-detail.module.css";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDesc,
    alternates: {
      canonical: `/services/${service.slug}`
    }
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "name": service.title,
    "description": service.shortDesc,
    "provider": {
      "@type": "ProfessionalService",
      "name": "TwinsCloud Private Limited",
      "url": "https://twinscloud.com",
      "areaServed": { "@type": "City", "name": "Lucknow" }
    },
    "url": `https://twinscloud.com/services/${service.slug}`
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://twinscloud.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://twinscloud.com/service" },
      { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://twinscloud.com/services/${service.slug}` }
    ]
  };

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className={styles.glowSpot1} />
      <div className={styles.glowSpot2} />

      <div className={`${styles.container} animateFadeInUp`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/service">Services</Link>
          <span>/</span>
          <span>{service.title}</span>
        </nav>

        <header className={styles.header}>
          <span className={styles.badge}>Service</span>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.subtitle}>{service.shortDesc}</p>
        </header>

        <section className={styles.overviewSection}>
          <p>{service.overview}</p>
        </section>

        <section className={styles.deliverablesSection}>
          <h2>Key Deliverables</h2>
          <ul className={styles.deliverablesList}>
            {service.deliverables.map((d, idx) => (
              <li key={idx}>
                <span className={styles.checkIcon}>✓</span>
                {d}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to discuss your {service.title.toLowerCase()} project?</h2>
          <p>Talk to our engineering team — from our Lucknow office or remotely, wherever you are.</p>
          <div className={styles.ctaActions}>
            <Link href="/consultation" className={styles.primaryBtn}>Schedule Free Consultation</Link>
            <Link href="/rfq" className={styles.secondaryBtn}>Request a Quote</Link>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <h2>Related Services</h2>
          <div className={styles.relatedGrid}>
            {related.map((s) => (
              <Link href={`/services/${s.slug}`} key={s.slug} className={styles.relatedCard}>
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
                <span className={styles.relatedArrow}>Learn more →</span>
              </Link>
            ))}
          </div>
        </section>

        <p className={styles.lucknowNote}>
          Delivered by our team at <Link href="/lucknow">TwinsCloud&apos;s Lucknow office</Link>, serving clients across Uttar Pradesh and India.
        </p>
      </div>
    </div>
  );
}
