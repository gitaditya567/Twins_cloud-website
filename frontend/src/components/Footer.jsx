"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const services = [
    { name: "Cloud Consulting & Reselling", href: "/service" },
    { name: "MERN Stack Development", href: "/service" },
    { name: "AWS DevOps Automation", href: "/service" },
    { name: "IT Infrastructure Solutions", href: "/service" },
    { name: "Data Management Experts", href: "/service" },
    { name: "Expert Technology Training", href: "/training" }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About TwinsCloud", href: "/about" },
    { name: "Our Services", href: "/service" },
    { name: "Client Case Studies", href: "/case-study" },
    { name: "Our Projects", href: "/project" },
    { name: "Request a Quote (RFQ)", href: "/rfq" },
    { name: "Schedule Consultation", href: "/consultation" }
  ];

  return (
    <footer className={styles.footer}>
      {/* Dynamic Ambient Glow Backdrops */}
      <div className={styles.glowBlob1}></div>
      <div className={styles.glowBlob2}></div>

      {/* Top Banner section */}
      <div className={styles.topBanner}>
        <div className={styles.topBannerContent}>
          <span className={styles.bannerBadge}>Get Started</span>
          <h2 className={styles.bannerTitle}>
            Ready to accelerate your <span className={styles.highlight}>Cloud Journey?</span>
          </h2>
          <p className={styles.bannerText}>
            Join dozens of enterprise partners scaling their development with TwinsCloud engineering experts.
          </p>
        </div>
        <div className={styles.bannerActions}>
          <Link href="/rfq" className={styles.primaryBtn}>
            Request Quote
          </Link>
          <Link href="/consultation" className={styles.secondaryBtn}>
            Schedule Call
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        {/* Columns Grid */}
        <div className={styles.footerGrid}>
          
          {/* Column 1: Brand details & Social links */}
          <div className={`${styles.gridCol} ${styles.brandCol}`}>
            <div className={styles.logoWrapper}>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="TwinsCloud Logo"
                  width={180}
                  height={36}
                  className={styles.logoImage}
                />
              </Link>
            </div>
            <p className={styles.brandDescription}>
              TwinsCloud is an AWS Channel Reseller and premier cloud engineering consulting partner. We deliver robust DevOps workflows, full-stack applications, and specialized industry training.
            </p>
            <div className={styles.socialWrapper}>
              <h4 className={styles.colTitleSmall}>Follow Us</h4>
              <div className={styles.socialLinks}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Our Services links */}
          <div className={styles.gridCol}>
            <h3 className={styles.colTitle}>Our Services</h3>
            <ul className={styles.linkList}>
              {services.map((item, idx) => (
                <li key={idx} className={styles.linkItem}>
                  <Link href={item.href} className={styles.footerLink}>
                    <span className={styles.bullet}></span>
                    <span className={styles.linkText}>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className={styles.gridCol}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((item, idx) => (
                <li key={idx} className={styles.linkItem}>
                  <Link href={item.href} className={styles.footerLink}>
                    <span className={styles.bullet}></span>
                    <span className={styles.linkText}>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Contact */}
          <div className={`${styles.gridCol} ${styles.newsletterCol}`}>
            <h3 className={styles.colTitle}>Stay Updated</h3>
            <p className={styles.newsletterDesc}>
              Subscribe to our technology newsletter for insights, cloud-native updates, and training announcements.
            </p>
            <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.subscribeInput}
                  required
                />
                <span className={styles.inputBorder}></span>
              </div>
              <button type="submit" className={styles.subscribeBtn}>
                {subscribed ? (
                  <span className={styles.successText}>✓ Subscribed</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.btnArrow}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </>
                )}
              </button>
            </form>
            <div className={styles.contactDetails}>
              <h4 className={styles.colTitleSmall}>Office Support</h4>
              <p className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.contactIcon}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+919876543210" className={styles.interactiveContact}>+91 98765 43210</a>
              </p>
              <p className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.contactIcon}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@twinscloud.com" className={styles.interactiveContact}>info@twinscloud.com</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Divider, and Policy links */}
        <div className={styles.bottomBar}>
          <div className={styles.divider}></div>
          <div className={styles.bottomBarContent}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} <strong>TwinsCloud Private Limited</strong>. All rights reserved.
            </p>
            <div className={styles.policyLinks}>
              <Link href="/privacy-policy" className={styles.policyLink}>
                Privacy Policy
              </Link>
              <span className={styles.dotSeparator}></span>
              <Link href="/terms-of-service" className={styles.policyLink}>
                Terms of Service
              </Link>
              <span className={styles.dotSeparator}></span>
              <span className={styles.brandingMuted}>AWS Partner Network</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
