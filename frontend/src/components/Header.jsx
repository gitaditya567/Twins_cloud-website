"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close mobile menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Service", href: "/service" },
    { name: "Project", href: "/project" },
    { name: "Training", href: "/training" },
    { name: "Case Study", href: "/case-study" },
    { name: "Calculator", href: "/calculator" },
    { name: "About us", href: "/about" },
    { name: "RFQ", href: "/rfq" },
  ];

  const showSolidHeader = scrolled || !isHome;

  return (
    <>
      <header className={`${styles.header} ${showSolidHeader ? styles.scrolled : ""} ${menuOpen ? styles.headerActive : ""}`}>
        <div className={styles.container}>
          {/* Left Logo */}
          <div className={styles.logoWrapper}>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src={showSolidHeader && !menuOpen ? "/logo-new-dark.png" : "/logo-new-light.png"}
                alt="TwinsCloud Logo"
                width={716}
                height={546}
                className={`${styles.logoImage} ${menuOpen ? styles.logoActive : ""}`}
                priority
              />
            </Link>
          </div>

          {/* Desktop & Tablet Navigation Links */}
          <nav className={styles.navDesktop}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={styles.navLink}>
                {link.name}
                <span className={styles.navIndicator}></span>
              </Link>
            ))}
          </nav>

          {/* Right Call-To-Action Button */}
          <div className={styles.navActions}>
            <Link href="/consultation" className={styles.ctaButton}>
              Consultation
            </Link>
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <div className={`${styles.navMobile} ${menuOpen ? styles.navMobileActive : ""}`}>
        <nav className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${styles.mobileNavLink} ${pathname === link.href ? styles.activeMobileLink : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/consultation"
            className={styles.mobileCtaButton}
            onClick={() => setMenuOpen(false)}
          >
            Consultation
          </Link>
        </nav>
      </div>
    </>
  );
}
