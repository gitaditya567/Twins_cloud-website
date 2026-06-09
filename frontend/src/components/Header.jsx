"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Service", href: "/service" },
    { name: "Project", href: "/project" },
    { name: "Training", href: "/training" },
    { name: "Case Study", href: "/case-study" },
    { name: "About us", href: "/about" },
    { name: "RFQ", href: "/rfq" },
    { name: "Consultation", href: "/consultation" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Left Logo */}
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="TwinsCloud Logo Left"
              width={130}
              height={52}
              className={styles.logoImage}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className={styles.navDesktop}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
              <span className={styles.navIndicator}></span>
            </Link>
          ))}
        </nav>

        {/* Right Logo */}
        <div className={`${styles.logoWrapper} ${styles.logoRight}`}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="TwinsCloud Logo Right"
              width={130}
              height={52}
              className={styles.logoImage}
              priority
            />
          </Link>
        </div>

        {/* Hamburger Menu Toggle Button */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ""}`}>
        <div className={styles.drawerHeader}>
          <Image
            src="/logo.png"
            alt="TwinsCloud Logo Drawer"
            width={120}
            height={48}
            className={styles.logoImage}
          />
          <button
            className={styles.drawerClose}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <nav className={styles.navMobile}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
    </header>
  );
}
