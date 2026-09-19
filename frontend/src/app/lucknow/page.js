import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LUCKNOW_MONEY_PAGES } from "../lucknow-pages-data";
import styles from "./lucknow.module.css";

export const metadata = {
  title: "Lucknow Office | Software & Website Development Company",
  description: "Visit TwinsCloud's Lucknow office at Mubarakpur, Kamalabad Barhauli. Software development, website development, and school ERP systems built and supported locally in Lucknow, UP.",
  alternates: {
    canonical: "/lucknow"
  }
};

const NAP = {
  name: "TwinsCloud Private Limited",
  street: "Mubarakpur, Kamalabad Barhauli",
  locality: "Lucknow",
  region: "Uttar Pradesh",
  postalCode: "226201",
  phone: "+91 95808 80060",
  phoneHref: "+919580880060",
  email: "Support@twinscloud.com"
};

const fullAddress = `${NAP.street}, ${NAP.locality}, ${NAP.region} ${NAP.postalCode}`;

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": NAP.name,
  "image": "https://twinscloud.com/logo-new.png",
  "url": "https://twinscloud.com/lucknow",
  "telephone": NAP.phoneHref,
  "email": NAP.email.toLowerCase(),
  "address": {
    "@type": "PostalAddress",
    "streetAddress": NAP.street,
    "addressLocality": NAP.locality,
    "addressRegion": NAP.region,
    "postalCode": NAP.postalCode,
    "addressCountry": "IN"
  },
  "areaServed": { "@type": "City", "name": "Lucknow" },
  "sameAs": [
    "https://www.linkedin.com/in/twinscloud-private-limited-66561a234/",
    "https://www.instagram.com/officialtwinscloud/",
    "https://www.facebook.com/Tiwnscloud/",
    "https://github.com/Twinscloud18"
  ]
};

const faqs = [
  {
    q: "Where is TwinsCloud's Lucknow office located?",
    a: `Our office is located at ${fullAddress}. You can reach us by phone at ${NAP.phone} or by email at ${NAP.email}.`
  },
  {
    q: "Does TwinsCloud work with schools and colleges in Lucknow?",
    a: "Yes. We've built and supported school ERP and website projects for institutions including Lucknow Public Schools & Colleges, Delhi Public School Sitapur, BNCET Lucknow, and Shri Ramswaroop Memorial University (SRMU)."
  },
  {
    q: "What services does the Lucknow team deliver?",
    a: "Website and web application development, school management / ERP software, mobile apps, AWS cloud consulting, DevOps automation, and enterprise cloud migrations — the same services we deliver nationally, from our Lucknow office."
  },
  {
    q: "Can I visit the office or schedule an on-site meeting?",
    a: "Yes, reach out via the contact details on this page or through our consultation form to schedule a visit or an on-site discussion."
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

const lucknowClients = [
  { name: "Lucknow Public Schools & Colleges", logo: "/client-lucknow-public-school.png", desc: "Educational Group" },
  { name: "Delhi Public School Sitapur", logo: "/client-dps-sitapur.png", desc: "Educational Institution" },
  { name: "BNCET Lucknow", logo: "/client-bncet.png", desc: "Engineering College" },
  { name: "SRMU", logo: "/client-srmu.png", desc: "Shri Ramswaroop Memorial University" },
  { name: "Bimla International Public School", logo: "/client-bips.png", desc: "Educational Institution & ERP" }
];

const localServices = [
  { title: "Website Development in Lucknow", desc: "Custom, SEO-ready business and institutional websites built on Next.js and the MERN stack.", href: "/services/web-development" },
  { title: "School Management Software", desc: "ERP portals for admissions, fees, attendance, and report cards — built for CBSE/ICSE/UP board schools.", href: "/services/school-management-software" },
  { title: "AWS Cloud Consulting & DevOps", desc: "Cloud migrations, cost audits, and CI/CD automation for growing Lucknow businesses.", href: "/services/cloud-consulting" },
  { title: "Report Card Software", desc: "Automated grade calculation and secure result portals for schools.", href: "/services/report-card-software" }
];

export default function LucknowPage() {
  return (
    <div className={styles.lucknowPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className={styles.glowSpot1} />
      <div className={styles.glowSpot2} />

      <div className={`${styles.container} animateFadeInUp`}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.badge}>Our Lucknow Office</span>
          <h1 className={styles.title}>
            Software &amp; Website Development Company in <span className={styles.highlight}>Lucknow</span>
          </h1>
          <p className={styles.subtitle}>
            TwinsCloud Private Limited is headquartered with a dedicated Lucknow office, delivering website
            development, school ERP systems, mobile apps, and AWS cloud consulting to businesses and educational
            institutions across Lucknow and Uttar Pradesh.
          </p>
        </header>

        {/* NAP + Map */}
        <section className={styles.napSection}>
          <div className={styles.napCard}>
            <h2>Visit Us</h2>
            <ul className={styles.napList}>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.napIcon}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  <strong>{NAP.name}</strong><br />
                  {NAP.street}, {NAP.locality}, {NAP.region} {NAP.postalCode}, India
                </span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.napIcon}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={`tel:${NAP.phoneHref}`}>{NAP.phone}</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.napIcon}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href={`mailto:${NAP.email}`}>{NAP.email}</a>
              </li>
            </ul>
            <div className={styles.napActions}>
              <Link href="/consultation" className={styles.primaryBtn}>Schedule a Meeting</Link>
              <Link href="/rfq" className={styles.secondaryBtn}>Request a Quote</Link>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              title="TwinsCloud Lucknow Office Map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* Services */}
        <section className={styles.servicesSection}>
          <h2>What We Deliver in Lucknow</h2>
          <div className={styles.servicesGrid}>
            {localServices.map((s, idx) => (
              <Link href={s.href} key={idx} className={styles.serviceCard}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className={styles.serviceArrow}>Learn more →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Lucknow money pages */}
        <section className={styles.servicesSection}>
          <h2>Lucknow Service Pages</h2>
          <div className={styles.servicesGrid}>
            {LUCKNOW_MONEY_PAGES.map((p) => (
              <Link href={`/${p.slug}`} key={p.slug} className={styles.serviceCard}>
                <h3>{p.h1}</h3>
                <p>{p.heroSubtitle}</p>
                <span className={styles.serviceArrow}>Learn more →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Local clients */}
        <section className={styles.clientsSection}>
          <h2>Trusted by Lucknow Institutions</h2>
          <div className={styles.clientsGrid}>
            {lucknowClients.map((c, idx) => (
              <div className={styles.clientCard} key={idx}>
                <div className={styles.clientLogoWrapper}>
                  <Image src={c.logo} alt={c.name} width={140} height={64} className={styles.clientLogo} />
                </div>
                <span className={styles.clientName}>{c.name}</span>
                <span className={styles.clientDesc}>{c.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className={styles.teamSection}>
          <h2>Our Engineering Team</h2>
          <p className={styles.teamSubtitle}>
            The same in-house engineers, architects, and developers behind every Lucknow project.
          </p>
          <div className={styles.teamGrid}>
            {[
              { name: "Prem Srivastava", role: "AWS Sr. Solution Architect", img: "/team-prem.webp" },
              { name: "Prince Pandey", role: "Development Team Head", img: "/team-prince.webp" },
              { name: "Aditya Sharma", role: "Full Stack Developer", img: "/team-aditya.webp" },
              { name: "Ravikant", role: "Sr. Software Engineer", img: "/team-ravikant.webp" }
            ].map((m, idx) => (
              <div className={styles.teamCard} key={idx}>
                <Image src={m.img} alt={m.name} width={100} height={100} className={styles.teamImage} />
                <span className={styles.teamName}>{m.name}</span>
                <span className={styles.teamRole}>{m.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqs.map((f, idx) => (
              <details className={styles.faqItem} key={idx}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <h2>Start Your Project With Our Lucknow Team</h2>
          <p>Free consultation, transparent quoting, and local support — no relocation of your data or your point of contact.</p>
          <div className={styles.ctaActions}>
            <Link href="/consultation" className={styles.primaryBtn}>Schedule Free Consultation</Link>
            <Link href="/rfq" className={styles.secondaryBtn}>Request a Quote</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
