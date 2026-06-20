"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    let timer;
    let isOriginal = true;
    const originalTitle = "TwinsCloud - Premium Cloud Solutions & Training";
    const blinkTitle = "★ TwinsCloud Pvt. Ltd. ★";

    const startBlinking = () => {
      timer = setInterval(() => {
        document.title = isOriginal ? blinkTitle : originalTitle;
        isOriginal = !isOriginal;
      }, 1500);
    };

    startBlinking();

    return () => {
      clearInterval(timer);
      document.title = originalTitle;
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Service", href: "/service" },
    { name: "Project", href: "/project" },
    { name: "Training", href: "/training" },
    { name: "Case Study", href: "/case-study" },
    { name: "About us", href: "/about" },
    { name: "RFQ", href: "/rfq" },
  ];

  const showSolidHeader = scrolled || !isHome;

  return (
    <header className={`${styles.header} ${showSolidHeader ? styles.scrolled : ""}`}>

      <div className={styles.container}>
        {/* Left Logo */}
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="TwinsCloud Logo"
              width={180}
              height={36}
              className={styles.logoImage}
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
      </div>
    </header>
  );
}
