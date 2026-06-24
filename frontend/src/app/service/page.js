"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./service.module.css";
import TechVisualizer from "../../components/TechVisualizer";

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState("security");
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Report Card Services",
      desc: "Comprehensive academic results parsing, grade calculations, and secure online report distribution portals.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      deliverables: [
        "Automated Grade & GPA Calculation engines",
        "Secure Student & Parent report retrieval portals",
        "Bulk PDF generation and secure cloud distribution",
        "Academic performance visual analytics dashboards"
      ]
    },
    {
      title: "Web Development",
      desc: "Fast, modern, and high-performance applications built on the MERN stack with pristine UI/UX standards.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      deliverables: [
        "Custom SPA & SSR web applications using Next.js / React",
        "Secure RESTful / GraphQL API development",
        "Fully responsive, mobile-first, and premium CSS design",
        "SEO optimization & high PageSpeed performance scores"
      ]
    },
    {
      title: "Apps On Cloud",
      desc: "Serverless deployments, cloud-native hosting, multi-tenant architectures, and microservices integration.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
      deliverables: [
        "AWS Lambda & serverless microservices setup",
        "Multi-tenant software architecture layout",
        "Auto-scaling rules and load balancer configuration",
        "Real-time cloud application performance monitoring"
      ]
    },
    {
      title: "Cloud Consulting Services",
      desc: "Advanced cloud architectural audits, security compliance setups, and strategic resource cost optimization reviews.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      deliverables: [
        "Well-Architected Framework cloud audits",
        "Cost optimization and AWS budget control dashboards",
        "AWS IAM permission hardening & compliance reports",
        "High-availability multi-region setups planning"
      ]
    },
    {
      title: "DevOps",
      desc: "Automated CI/CD workflows, container scaling (Kubernetes), and Infrastructure as Code setups.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
          <path d="M22 12A6 6 0 0 1 12 17L2 12a6 6 0 0 1 10-5l10 5z" />
        </svg>
      ),
      deliverables: [
        "Fully automated CI/CD pipelines (GitHub Actions, Jenkins)",
        "Kubernetes containerization and ECS orchestration",
        "Infrastructure as Code (IaC) scripting using Terraform",
        "Automated logging, alerting, and metrics collection"
      ]
    },
    {
      title: "Migration & Consulting",
      desc: "Zero-downtime database and backend application migrations to AWS with robust security guards.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      deliverables: [
        "Safe database schema and storage migration strategy",
        "Zero-downtime replication using AWS DMS",
        "Post-migration regression testing and data integrity checks",
        "Network configuration and VPN/Direct Connect linkups"
      ]
    },
    {
      title: "School Management Software",
      desc: "ERP portals featuring automated class schedules, fee collections, student tracking, and messaging hubs.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
      deliverables: [
        "Consolidated ERP dashboards for admins, teachers, and parents",
        "Automated fee billing engine with payment gateway integration",
        "Dynamic school timetables and attendance registers",
        "Push notifications and SMS/Email messaging center"
      ]
    },
    {
      title: "Medical Tally Software",
      desc: "Tailored clinic bookkeeping, automated invoice generators, inventory trackers, and regulatory audit boards.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      deliverables: [
        "Clinic bookkeeping and income/expense ledgers",
        "Dynamic medical invoice and billing generators",
        "Pharmaceutical stock & inventory alert engines",
        "HIPAA-aligned data access logs and audit trails"
      ]
    }
  ];

  const tabsContent = {
    security: {
      title: "Security Of Website And Software",
      desc: "This is a cloud-based database security solution that provides full-range protection to enhance your forum security including website scanner, malware removal, website vulnerable detection, data breaches alert as round-the-clock real-time monitoring to prevent threat attack on your website.",
      graphic: (
        <div className={styles.graphicImageWrapper}>
          <Image 
            src="/illustration-security.png" 
            alt="Security of Website & Software illustration" 
            width={340} 
            height={255} 
            className={styles.graphicImage}
            priority
          />
        </div>
      )
    },
    recovery: {
      title: "Disaster Recovery Operations",
      desc: "Our automated disaster recovery plans replication processes minimize downtime. In the event of node failure, standby replica configurations are promoted to live nodes, securing data streams and systems with zero packet loss.",
      graphic: (
        <div className={styles.graphicImageWrapper}>
          <Image 
            src="/illustration-recovery.png" 
            alt="Disaster Recovery illustration" 
            width={340} 
            height={255} 
            className={styles.graphicImage}
          />
        </div>
      )
    },
    backup: {
      title: "Data Backup Guardrails",
      desc: "Continuous database snap-shotting, encryption at rest, and incremental system archives securely pushed to multi-region storage clouds to ensure instant data availability and restore points.",
      graphic: (
        <div className={styles.graphicImageWrapper}>
          <Image 
            src="/illustration-backup.png" 
            alt="Data Backup illustration" 
            width={340} 
            height={255} 
            className={styles.graphicImage}
          />
        </div>
      )
    }
  };

  return (
    <div className={styles.servicePage}>
      {/* Floating animated spotlights */}
      <div className={styles.glowSpot1} />
      <div className={styles.glowSpot2} />

      <div className={`${styles.serviceContainer} animateFadeInUp`}>
        {/* Page Header */}
        <header className={styles.serviceHeader}>
          <span className={styles.serviceBadge}>Services Suite</span>
          <h1 className={styles.serviceTitle}>
            Our Core <span className={styles.highlight}>Services</span>
          </h1>
          <p className={styles.serviceSubtitle}>
            Providing elite cloud architecture audits, bespoke web applications, systems integrations, and secure data backdrops.
          </p>
        </header>

        {/* 8 Services Grid */}
        <section className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.serviceCard}
              onClick={() => setSelectedService(service)}
            >
              <div className={styles.cardIconWrapper}>{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
              <button className={styles.readMoreBtn} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
                <span>Read More</span>
                <span>&gt;</span>
              </button>
            </div>
          ))}
        </section>

        {/* Guardrails Tabbed console section */}
        <section className={styles.tabsSection}>
          <div className={styles.tabsHeader}>
            <h3>Infrastructure Guardrails &amp; Continuity</h3>
            <p>Reliable cloud configurations protecting your application databases and database transactions.</p>
          </div>

          {/* Console Tab Selectors */}
          <div className={styles.tabsConsole}>
            <button
              onClick={() => setActiveTab("security")}
              className={`${styles.tabBtn} ${activeTab === "security" ? styles.activeTabBtn : ""}`}
            >
              🔒 Security
            </button>
            <button
              onClick={() => setActiveTab("recovery")}
              className={`${styles.tabBtn} ${activeTab === "recovery" ? styles.activeTabBtn : ""}`}
            >
              🔄 Disaster Recovery
            </button>
            <button
              onClick={() => setActiveTab("backup")}
              className={`${styles.tabBtn} ${activeTab === "backup" ? styles.activeTabBtn : ""}`}
            >
              💾 Data Backup
            </button>
          </div>

          {/* Active Tab Panel */}
          <div className={styles.tabContentGrid}>
            <div className={styles.tabTextPanel}>
              <h4>{tabsContent[activeTab].title}</h4>
              <p>{tabsContent[activeTab].desc}</p>
            </div>
            <div className={styles.tabGraphicPanel}>
              {tabsContent[activeTab].graphic}
            </div>
          </div>
        </section>

        {/* Tech Stack Visualizer */}
        <TechVisualizer />
      </div>

      {/* Service Details Modal Popup */}
      {selectedService && (
        <div className={styles.modalOverlay} onClick={() => setSelectedService(null)}>
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedService(null)} aria-label="Close modal">
              &times;
            </button>
            <div className={styles.modalHeader}>
              <div className={styles.cardIconWrapper}>{selectedService.icon}</div>
              <h3>{selectedService.title}</h3>
            </div>
            <div className={styles.modalBody}>
              <p>{selectedService.desc}</p>
              <h4 className={styles.deliverablesHeader}>Key Deliverables</h4>
              <ul className={styles.deliverablesList}>
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.modalCta}>
              <Link href="/consultation" className={styles.modalCtaBtn}>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

