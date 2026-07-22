"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim() || submitting) return;

    setSubmitting(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 5000);
      } else {
        const data = await response.json();
        alert(data.message || "Failed to subscribe.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to connect to subscription server.");
    } finally {
      setSubmitting(false);
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
    { name: "AWS Cost Calculator", href: "/calculator" },
    { name: "Request a Quote (RFQ)", href: "/rfq" },
    { name: "Schedule Consultation", href: "/consultation" }
  ];

  return (
    <footer className={styles.footer}>
      {/* Dynamic Ambient Glow Backdrops */}
      <div className={styles.glowBlob1}></div>
      <div className={styles.glowBlob2}></div>

      {/* Top Banner section */}
      {false && (
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
      )}

      <div className={styles.container}>
        {/* Columns Grid */}
        <div className={styles.footerGrid}>
          
          {/* Column 1: Brand details & Social links */}
          <div className={`${styles.gridCol} ${styles.brandCol}`}>
            <div className={styles.logoWrapper}>
              <Link href="/">
                <Image
                  src="/logo-new-light.png"
                  alt="TwinsCloud Private Limited - Premium Cloud Solutions & Training Logo"
                  title="TwinsCloud Private Limited - Premium Cloud Solutions & Training Logo"
                  width={160}
                  height={122}
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
                <a href="https://www.linkedin.com/in/twinscloud-private-limited-66561a234/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="LinkedIn" title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/officialtwinscloud/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Instagram" title="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/Tiwnscloud/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Facebook" title="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://github.com/Twinscloud18" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="GitHub" title="GitHub">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
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
                <a href="tel:+919580880060" className={styles.interactiveContact}>+91 95808 80060</a>
              </p>
              <p className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.contactIcon}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:Support@twinscloud.com" className={styles.interactiveContact}>Support@twinscloud.com</a>
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
