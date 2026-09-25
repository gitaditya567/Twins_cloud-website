"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./QuickActions.module.css";

export default function QuickActions() {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolledPast, setScrolledPast] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 400);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolledPast(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Close dropdown on click outside
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleScrollClick = () => {
    if (scrolledPast) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    }
  };

  if (!visible) return null;

  // Circular scroll progress calculations
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className={styles.quickActionsContainer} ref={widgetRef}>
      {/* Floating Action Dropdown Menu */}
      <div className={`${styles.dropdownMenu} ${isOpen ? styles.dropdownOpen : ""}`} aria-hidden={!isOpen}>
        <div className={styles.dropdownHeader}>
          <div className={styles.headerTitleGroup}>
            <span className={styles.headerDot}></span>
            <span className={styles.dropdownTitle}>Quick Connect</span>
          </div>
          <span className={styles.dropdownSub}>We're Online</span>
        </div>

        <div className={styles.actionList}>
          {/* WhatsApp Action - Highlighted Green */}
          <a 
            href="https://wa.me/919580880060?text=Hi%20TwinsCloud,%20I%20have%20an%20inquiry%20regarding%20your%20cloud%20and%20web%20services." 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.dropdownItem} ${styles.whatsappItem}`}
            onClick={() => setIsOpen(false)}
            aria-label="Chat on WhatsApp"
          >
            <div className={`${styles.iconBadge} ${styles.whatsappBadge}`}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.itemIcon}>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.863-9.848.001-2.63-1.019-5.101-2.874-6.958C16.398 1.94 13.921.92 11.299.92 5.86.92 1.437 5.337 1.435 10.774c-.001 1.558.428 3.084 1.242 4.416L1.693 20.3l5.22-1.37a.127.127 0 0 0-.266.224zm12.39-7.234c-.33-.164-1.951-.964-2.251-1.074-.3-.109-.518-.164-.736.164-.218.327-.844 1.062-1.035 1.28-.19.219-.381.247-.712.082-1.63-.816-2.73-1.437-3.82-3.3-.29-.497.29-.461.83-1.536.09-.18.044-.34-.022-.47-.066-.13-.574-1.385-.788-1.895-.208-.5-.455-.43-.623-.43-.16-.005-.343-.006-.527-.006-.183 0-.482.069-.735.343-.252.274-.963.94-.963 2.29 0 1.352.984 2.657 1.12 2.84 1.232 1.63 2.766 2.923 4.887 3.834 1.543.662 2.502.83 3.398.697.873-.13 2.677-1.095 3.057-2.152.38-1.057.38-1.963.266-2.152-.114-.19-.33-.298-.66-.462z" />
              </svg>
            </div>
            <div className={styles.itemText}>
              <span className={styles.itemTitle}>WhatsApp Chat</span>
              <span className={styles.itemDesc}>Instant Message</span>
            </div>
            <span className={styles.arrowChevron}>&rarr;</span>
          </a>

          {/* Call Action - Highlighted Blue */}
          <a 
            href="tel:+919580880060" 
            className={`${styles.dropdownItem} ${styles.callItem}`}
            onClick={() => setIsOpen(false)}
            aria-label="Call Us Directly"
          >
            <div className={`${styles.iconBadge} ${styles.callBadge}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.itemIcon}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className={styles.itemText}>
              <span className={styles.itemTitle}>Call Us</span>
              <span className={styles.itemDesc}>+91 9580880060</span>
            </div>
            <span className={styles.arrowChevron}>&rarr;</span>
          </a>

          {/* Inquiry / RFQ Action - Highlighted Orange */}
          <Link 
            href="/rfq" 
            className={`${styles.dropdownItem} ${styles.inquiryItem}`}
            onClick={() => setIsOpen(false)}
            aria-label="Request a Quote"
          >
            <div className={`${styles.iconBadge} ${styles.inquiryBadge}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.itemIcon}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div className={styles.itemText}>
              <span className={styles.itemTitle}>Request Quote</span>
              <span className={styles.itemDesc}>Get Estimation</span>
            </div>
            <span className={styles.arrowChevron}>&rarr;</span>
          </Link>
        </div>
      </div>

      {/* Floating Control Buttons Capsule */}
      <div className={styles.capsule}>
        {/* Scroll Top Button */}
        <button 
          onClick={handleScrollClick} 
          className={`${styles.actionBtn} ${styles.scrollBtn} ${scrolledPast ? styles.scrolledUp : styles.scrolledDown}`}
          aria-label={scrolledPast ? "Scroll to top" : "Scroll down"}
        >
          <svg className={styles.progressCircle} width="42" height="42" viewBox="0 0 42 42">
            <circle
              className={styles.progressCircleBg}
              cx="21"
              cy="21"
              r={radius}
              strokeWidth="2.5"
              fill="none"
            />
            <circle
              className={styles.progressCirclePath}
              cx="21"
              cy="21"
              r={radius}
              strokeWidth="2.5"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <svg
            className={styles.scrollArrowIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>

        {/* Highlighted Main Contact Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`${styles.mainToggleBtn} ${isOpen ? styles.activeToggle : ""}`}
          aria-label="Contact options"
          aria-expanded={isOpen}
        >
          <span className={styles.pulseGlow}></span>
          
          <div className={styles.toggleIconInner}>
            {isOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.closeIcon}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={styles.contactIcon}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            )}
          </div>
          <span className={styles.toggleText}>{isOpen ? "Close" : "Contact"}</span>
        </button>
      </div>
    </div>
  );
}
