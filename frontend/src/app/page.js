"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const videoRef = useRef(null);
  const statRef = useRef(null);
  const [experienceYears, setExperienceYears] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);


  const rotatingWords = [
    "App Development Company",
    "Cloud Consulting Partner",
    "DevOps Automation Team",
    "Enterprise Systems Integrator",
    "MERN Stack Experts"
  ];
  const [wordIndex, setWordIndex] = useState(0);

  const clients = [
    {
      name: "Design & Vision Built Environment Awards",
      logo: "/client-great-indian-entrepreneurship.png",
      desc: "Leadership Awards & Conference"
    },
    {
      name: "Architecture Herald",
      logo: "/client-architecture-design.png",
      desc: "Editorial Design Magazine"
    },
    {
      name: "Bimla International Public School",
      logo: "/client-bips.png",
      desc: "Educational Institution & ERP"
    },
    {
      name: "Kishtwar Tourism",
      logo: "/client-kishtwar-tourism.png",
      desc: "Govt. Tourism Portal"
    },
    {
      name: "Shri Machail Mata Yatra",
      logo: "/client-machail-mata.png",
      desc: "Pilgrimage Management System"
    },
    {
      name: "India Elite School Awards",
      logo: "/client-elite-school.png",
      desc: "Education Awards Platform"
    },
    {
      name: "The Great Indian Entrepreneurship Awards",
      logo: "/client-great-indian-entrepreneurship.png",
      desc: "Startup Awards Platform"
    },
    {
      name: "Architecture & Interior Design Excellence Awards",
      logo: "/client-architecture-design.png",
      desc: "Architecture & Design Awards"
    },
    {
      name: "Pincode Credits",
      logo: "/client-pincode-credits.png",
      desc: "Financial Services Platform"
    },
    {
      name: "NIT Patna",
      logo: "/client-nit-patna.png",
      desc: "National Institute of Technology"
    },
    {
      name: "Delhi Public School Sitapur",
      logo: "/client-dps-sitapur.png",
      desc: "Educational Institution"
    },
    {
      name: "Lucknow Public Schools & Colleges",
      logo: "/client-lucknow-public-school.png",
      desc: "Educational Group"
    },
    {
      name: "SRMU",
      logo: "/client-srmu.png",
      desc: "Shri Ramswaroop Memorial University"
    },
    {
      name: "Aptitech Education",
      logo: "/client-aptitech.png",
      desc: "Educational Institution"
    },
    {
      name: "Tobacco Monitoring App",
      logo: "/client-tobacco-monitoring.png",
      desc: "Government Health App"
    },
    {
      name: "BNCET Lucknow",
      logo: "/client-bncet.png",
      desc: "Engineering College"
    },
    {
      name: "edawai",
      logo: "/client-edawai.png",
      desc: "Healthcare E-Commerce"
    },
    {
      name: "Begin Up",
      logo: "/client-beginup.png",
      desc: "Business Consultancy"
    }
  ];
  const [fadeWord, setFadeWord] = useState(true);

  const testimonials = [
    {
      id: 0,
      company: "Griffin Publications",
      name: "Mousumi Sachdeva",
      role: "MD of GRIFFIN PUBLICATIONS",
      image: "/testimonial-mousumi.png",
      quote: "TwinsCloud has been excelling in both development and cloud hosting services. Having a provider that excels in both aspects is crucial for a seamless & efficient online presence. The fact that the TC team is responsive and provides support through channels like WhatsApp to the best experience, making it easier communicate & get assistance when needed."
    },
    {
      id: 1,
      company: "Digital Fine Fast",
      name: "Anshuman Garg",
      role: "Digital Fine Fast Brands Pvt. Ltd.",
      image: "/testimonial-anshuman.png",
      quote: "TwinsCloud Has Been So Positive! Their Prompt Responses, Dependability, And Ability To Find Solutions Within The Expected Timeframe. Cost Optimization And Security Are Two Critical Aspects Of Cloud Management But Twinscloud Manage Very Well. Will Definitely Be Working With Them For The Long Term. Thanks TwinsCloud For Making Our Cloud Journey Is Too Easy."
    },
    {
      id: 2,
      company: "Beginup Research",
      name: "Dr Anand Gopal Naik",
      role: "Managing Director, Beginup Research Intelligence Pvt. Ltd.",
      image: "/testimonial-anand.png",
      quote: "TwinsCloud Develop Around 10 Websites For Our Group, Along With Providing SES Services For Bulk Marketing. It's Great That You Find Their Services To Be Both High-Quality And Affordable Price. A Reliable And Responsive Team, Coupled With Cost-Effective Solutions, Can Significantly Contribute To The Success Of Projects."
    },
    {
      id: 3,
      company: "Mayapuri/Bollyy",
      name: "Ghanshyam Namdev",
      role: "IT HEAD OF MAYAPURI/BOLLYY",
      image: "/testimonial-ghanshyam.jpg",
      quote: "TwinsCloud Has Contributed Significantly To Our AWS Cloud Platform, Helping Build A Robust Infrastructure That Allows For Effective Cost Management And Security. It Seems Like TwinsCloud Has Played A Key Role In Ensuring The Success Of Your AWS Environment. Building A Long-Term Working Relationship Is Valuable, Especially When It Comes To Navigating The Complexities Of The Cloud."
    },
    {
      id: 4,
      company: "LPS Lucknow",
      name: "Luvkush Singh",
      role: "IT Head Of LPS Lucknow",
      image: "/testimonial-luvkush.png",
      quote: "Exceptional Service From This Tech Company! Their Innovative Solutions Have Transformed Our Business Operations, Boosting Efficiency And Productivity. The Team's Expertise And Prompt Support Have Been Invaluable. Seamless Integration And User-Friendly Interfaces Make Them Stand Out. Highly Recommend Their Cutting-Edge Tech Solutions!"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeTestimonial, testimonials.length]);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setFadeWord(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setFadeWord(true);
      }, 350);
    }, 3200);
    return () => clearInterval(wordInterval);
  }, [rotatingWords.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.load();
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("TwinsCloud Video: Background video playing successfully.");
          })
          .catch((err) => {
            console.warn("TwinsCloud Video: Autoplay prevented, waiting for user action.", err);
          });
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          let start = 0;
          const end = 10;
          const duration = 1000; // Stretches count up to 1 second
          const stepTime = Math.floor(duration / end);
          
          const timer = setInterval(() => {
            start += 1;
            setExperienceYears(start);
            if (start === end) {
              clearInterval(timer);
            }
          }, stepTime);
          
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = statRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const marqueeRef = useRef(null);

  useEffect(() => {
    const container = marqueeRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.centerActive);
          } else {
            entry.target.classList.remove(styles.centerActive);
          }
        });
      },
      {
        root: container,
        rootMargin: "0px -42% 0px -42%",
        threshold: 0
      }
    );

    const cards = container.querySelectorAll(`.${styles.clientLogoCard}`);
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);



  const getHighlightIcon = (title) => {
    switch (title) {
      case "Cloud Services":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.highlightSvg}>
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          </svg>
        );
      case "MERN Stack Dev":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.highlightSvg}>
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
            <line x1="14" y1="4" x2="10" y2="20" />
          </svg>
        );
      case "Expert Training":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.highlightSvg}>
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
          </svg>
        );
      default:
        return null;
    }
  };

  const highlights = [
    {
      title: "Cloud Services",
      desc: "Architecting reliable, scalable and highly secure cloud environments tailored to your needs.",
      icon: "☁️"
    },
    {
      title: "MERN Stack Dev",
      desc: "Full-cycle production applications built on MongoDB, Express, React, and Node.js.",
      icon: "⚡"
    },
    {
      title: "Expert Training",
      desc: "Level up your engineering teams with hands-on labs and enterprise training courses.",
      icon: "🎓"
    }
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section with Technology Video Background */}
      <section className={styles.hero}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={styles.videoBackground}
          onPlay={() => console.log("TwinsCloud Video Event: play started")}
          onLoadedData={() => console.log("TwinsCloud Video Event: data loaded successfully")}
          onError={(e) => {
            const mediaError = e.target.error;
            console.error("TwinsCloud Video Event: Loading failed!", {
              code: mediaError ? mediaError.code : "unknown",
              message: mediaError ? mediaError.message : "No error message"
            });
          }}
        >
          {/* Local high-performance source (zero CORS or external CDN dependencies) */}
          <source src="/tech-video.mp4" type="video/mp4" />
          
          {/* Fallback Mixkit CDN source */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-computer-38392-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className={styles.videoOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.badge}>Welcome To TwinsCloud</span>
          <h1 className={styles.title}>
            Best Software, Website,<br />
            <span className={`${styles.highlight} ${fadeWord ? styles.wordIn : styles.wordOut}`}>
              {rotatingWords[wordIndex]}
            </span>
          </h1>
          <p className={styles.subtitle}>
            Your Cloud Lifecycle Consulting Partner
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/consultation" className={styles.primaryBtn}>
              Schedule Consultation
            </Link>
            <Link href="/rfq" className={styles.secondaryBtn}>
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div className={styles.scrollDownIndicator} onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          });
        }}>
          <div className={styles.mouseIcon}>
            <div className={styles.mouseWheel} />
          </div>
          <span className={styles.scrollDownText}>Scroll Down</span>
        </div>
      </section>

      {/* Infinite Ticker Marquee Ribbon */}
      <div className={styles.tickerStrip}>
        <div className={styles.tickerTrack}>
          <div className={styles.tickerGroup}>
            <span>✦ AWS CHANNEL RESELLER</span>
            <span>✦ CLOUD LIFECYCLE CONSULTING</span>
            <span>✦ DevOps & CI/CD PIPELINES</span>
            <span>✦ SECURE MERN STACK APPLICATIONS</span>
            <span>✦ 24/7 DEDICATED SUPPORT</span>
            <span>✦ EXPERT TECHNOLOGY TRAINING</span>
            <span>✦ 99.9% UPTIME GUARANTEED</span>
            <span>✦ ENTERPRISE DATA MIGRATIONS</span>
          </div>
          <div className={styles.tickerGroup} aria-hidden="true">
            <span>✦ AWS CHANNEL RESELLER</span>
            <span>✦ CLOUD LIFECYCLE CONSULTING</span>
            <span>✦ DevOps & CI/CD PIPELINES</span>
            <span>✦ SECURE MERN STACK APPLICATIONS</span>
            <span>✦ 24/7 DEDICATED SUPPORT</span>
            <span>✦ EXPERT TECHNOLOGY TRAINING</span>
            <span>✦ 99.9% UPTIME GUARANTEED</span>
            <span>✦ ENTERPRISE DATA MIGRATIONS</span>
          </div>
        </div>
      </div>

      {/* Our Clients & Projects Section */}
      <section className={styles.clientsSection}>
        <div className={styles.clientsContainer}>
          <div className={styles.clientsHeader}>
            <span className={styles.clientsBadge}>Trusted By & Featured Projects</span>
            <h2 className={styles.clientsTitle}>Our Valued Clients</h2>
            <p className={styles.clientsSubtitle}>
              Empowering government initiatives, tourism portals, and prestigious national corporate awards platforms with robust cloud architecture and custom software.
            </p>
          </div>

          <div ref={marqueeRef} className={styles.logosMarquee}>
            <div className={styles.marqueeTrack}>
              {/* First set of logos */}
              {clients.map((client, index) => (
                <div key={`client-1-${index}`} className={styles.clientLogoCard}>
                  <div className={styles.clientLogoWrapper}>
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={70}
                      className={styles.clientLogoImage}
                    />
                  </div>
                </div>
              ))}
              {/* Second set of logos for infinite loop */}
              {clients.map((client, index) => (
                <div key={`client-2-${index}`} className={styles.clientLogoCard} aria-hidden="true">
                  <div className={styles.clientLogoWrapper}>
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={70}
                      className={styles.clientLogoImage}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Capabilities Section */}
      <section className={styles.visionSection}>
        <div className={styles.visionContainer}>
          {/* Left Column: Vision & Experience */}
          <div className={styles.visionLeft}>
            <span className={styles.visionBadge}>Who We Are</span>
            <h2 className={styles.visionTitle}>
              10+ Years of Driving <br />
              <span className={styles.highlight}>Cloud & Digital Excellence</span>
            </h2>
            <p className={styles.visionText}>
              <strong>TwinsCloud Private Limited</strong> is a premier cloud engineering partner. Our vision is to become the world’s leading Cloud Consulting company, delivering unmatched business value to our customers with the highest level of satisfaction.
            </p>
            <p className={styles.visionText}>
              The <strong>TwinsCloud AWS Channel Reseller Program</strong> enables qualified partners to resell AWS services to both commercial and public sector end customers. We systematically help our customers reduce operational expenses and scale effectively.
            </p>
            <Link href="/about" className={styles.knowMoreBtn}>
              Know More <span className={styles.knowMoreArrow}>→</span>
            </Link>
          </div>

          {/* Right Column: Premium Animated 3D Illustration */}
          <div className={styles.visionRight}>
            <div className={styles.illustrationWrapper}>
              <div className={styles.imageStatBadge} ref={statRef}>
                <span className={styles.imageStatNumber}>{experienceYears}+</span>
                <span className={styles.imageStatLabel}>Years of Cloud Expertise</span>
              </div>
              <Image
                src="/cloud-illustration.png"
                alt="TwinsCloud Infrastructure Illustration"
                width={540}
                height={540}
                className={styles.illustrationImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities (Our Core Expertise) Section */}
      <section className={styles.capabilitiesSection}>
        <div className={styles.capabilitiesContainer}>
          <div className={styles.capabilitiesHeader}>
            <span className={styles.capabilitiesBadge}>Our Strengths</span>
            <h3>Our Core Expertise</h3>
            <p>Providing specialized services in data, software, analytics, and infrastructure.</p>
          </div>
          <div className={styles.capabilityGrid}>
            {/* Card 1: Data Management (Orange Accent) */}
            <div className={`${styles.capabilityCard} ${styles.cardOrange}`}>
              <div className={`${styles.capabilityIcon} ${styles.iconOrange}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.capabilitySvg}>
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
                </svg>
              </div>
              <span className={`${styles.cardCategory} ${styles.categoryOrange}`}>Database</span>
              <h3>Data Management Experts</h3>
              <p>Secure database lifecycle management, cloud data migrations, and warehousing.</p>
              <div className={styles.capabilityLearnMore}>
                <span>Learn More</span>
                <span className={styles.capabilityArrow}>→</span>
              </div>
            </div>

            {/* Card 2: Mobile App Dev (Blue Accent) */}
            <div className={`${styles.capabilityCard} ${styles.cardBlue}`}>
              <div className={`${styles.capabilityIcon} ${styles.iconBlue}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.capabilitySvg}>
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                  <path d="M9 6h6" />
                  <path d="M9 10h6" />
                  <path d="M9 14h3" />
                </svg>
              </div>
              <span className={`${styles.cardCategory} ${styles.categoryBlue}`}>Mobile App</span>
              <h3>Mobile App Developments</h3>
              <p>High-performance native and cross-platform applications built for scale.</p>
              <div className={styles.capabilityLearnMore}>
                <span>Learn More</span>
                <span className={styles.capabilityArrow}>→</span>
              </div>
            </div>

            {/* Card 3: IT Infrastructure (Purple Accent) */}
            <div className={`${styles.capabilityCard} ${styles.cardPurple}`}>
              <div className={`${styles.capabilityIcon} ${styles.iconPurple}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.capabilitySvg}>
                  <rect x="2" y="3" width="20" height="5" rx="1" />
                  <rect x="2" y="11" width="20" height="5" rx="1" />
                  <rect x="2" y="19" width="20" height="5" rx="1" />
                  <line x1="6" y1="5.5" x2="6.01" y2="5.5" />
                  <line x1="6" y1="13.5" x2="6.01" y2="13.5" />
                  <line x1="6" y1="21.5" x2="6.01" y2="21.5" />
                  <line x1="18" y1="5.5" x2="18.01" y2="5.5" />
                  <line x1="18" y1="13.5" x2="18.01" y2="13.5" />
                  <line x1="18" y1="21.5" x2="18.01" y2="21.5" />
                </svg>
              </div>
              <span className={`${styles.cardCategory} ${styles.categoryPurple}`}>Cloud Ops</span>
              <h3>IT Infrastructure Solutions</h3>
              <p>Architecting resilient, automated, and secure multi-cloud system environments.</p>
              <div className={styles.capabilityLearnMore}>
                <span>Learn More</span>
                <span className={styles.capabilityArrow}>→</span>
              </div>
            </div>

            {/* Card 4: Data Analytics (Teal Accent) */}
            <div className={`${styles.capabilityCard} ${styles.cardTeal}`}>
              <div className={`${styles.capabilityIcon} ${styles.iconTeal}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.capabilitySvg}>
                  <path d="M2 20h20" />
                  <path d="M5 17V10" />
                  <path d="M9 17V6" />
                  <path d="M13 17V12" />
                  <path d="M17 17V8" />
                  <path d="M3 10l6-6 8 8 5-5" />
                </svg>
              </div>
              <span className={`${styles.cardCategory} ${styles.categoryTeal}`}>Analytics</span>
              <h3>Data Analytics Consulting</h3>
              <p>Business intelligence consulting, dashboard development, and analytical insights.</p>
              <div className={styles.capabilityLearnMore}>
                <span>Learn More</span>
                <span className={styles.capabilityArrow}>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className={styles.processSection}>
        <div className={styles.processHeader}>
          <span className={styles.processBadge}>Work Process</span>
          <h2 className={styles.processTitle}>We Follow a Great Process</h2>
          <p className={styles.processSubtitle}>
            Our structured engineering methodology ensures project delivery with zero friction.
          </p>
        </div>

        <div className={styles.timelineContainer}>
          {/* Background Timeline Lines */}
          <div className={styles.connectingLine}>
            <div className={styles.activeLine} />
          </div>

          {/* Step 1 */}
          <div className={styles.timelineStep}>
            <div className={`${styles.stepNode} ${styles.stepOrange}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.stepIcon}>
                <rect x="3" y="3" width="18" height="12" rx="2" />
                <path d="M9 15v4" />
                <path d="M15 15v4" />
                <path d="M12 19v3" />
                <path d="M7 7h10" />
                <path d="M7 11h6" />
              </svg>
            </div>
            <span className={styles.stepNumber}>Step 01</span>
            <h3 className={styles.stepTitle}>Analysis & Meeting</h3>
            <p className={styles.stepDesc}>Initial client alignment, feasibility audits, and constraint mapping.</p>
          </div>

          {/* Step 2 */}
          <div className={styles.timelineStep}>
            <div className={`${styles.stepNode} ${styles.stepBlue}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.stepIcon}>
                <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.553a1 1 0 0 1 1.447-.894L9 7l6-3 5.447 2.724A1 1 0 0 1 21 7.618v10.829a1 1 0 0 1-1.447.894L15 17l-6 3z" />
                <path d="M9 7v13" />
                <path d="M15 4v13" />
              </svg>
            </div>
            <span className={styles.stepNumber}>Step 02</span>
            <h3 className={styles.stepTitle}>Project Roadmap</h3>
            <p className={styles.stepDesc}>Scope definition, milestones design, and engineering timelines.</p>
          </div>

          {/* Step 3 */}
          <div className={styles.timelineStep}>
            <div className={`${styles.stepNode} ${styles.stepDotted}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.stepIcon}>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </div>
            <span className={styles.stepNumber}>Step 03</span>
            <h3 className={styles.stepTitle}>Design & Prototyping</h3>
            <p className={styles.stepDesc}>High-fidelity UI/UX wireframes, architecture drafts, and mockups.</p>
          </div>

          {/* Step 4 */}
          <div className={styles.timelineStep}>
            <div className={`${styles.stepNode} ${styles.stepDotted}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.stepIcon}>
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <polyline points="10 8 8 10 10 12" />
                <polyline points="14 8 16 10 14 12" />
              </svg>
            </div>
            <span className={styles.stepNumber}>Step 04</span>
            <h3 className={styles.stepTitle}>Development</h3>
            <p className={styles.stepDesc}>Agile engineering sprints, clean coding, and unit test coverage.</p>
          </div>

          {/* Step 5 */}
          <div className={styles.timelineStep}>
            <div className={`${styles.stepNode} ${styles.stepDotted}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.stepIcon}>
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <span className={styles.stepNumber}>Step 05</span>
            <h3 className={styles.stepTitle}>Testing & Deployment</h3>
            <p className={styles.stepDesc}>QA auditing, security checks, and seamless production launch.</p>
          </div>

          {/* Step 6 */}
          <div className={styles.timelineStep}>
            <div className={`${styles.stepNode} ${styles.stepDotted}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.stepIcon}>
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
                <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
            <span className={styles.stepNumber}>Step 06</span>
            <h3 className={styles.stepTitle}>Maintenance & Support</h3>
            <p className={styles.stepDesc}>24/7 cloud monitoring, updates, and helpdesk support.</p>
          </div>
        </div>
      </section>

      {/* Services/Highlights Section */}
      <section className={styles.highlightsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Scale Faster</span>
          <h2>Accelerate Your Growth</h2>
          <p>Explore our core engineering services designed to scale your operations, streamline pipelines, and empower your technical teams.</p>
        </div>
        <div className={styles.grid}>
          {highlights.map((item, index) => (
            <div key={index} className={`${styles.card} ${
              item.title === "Cloud Services" ? styles.cardBlue :
              item.title === "MERN Stack Dev" ? styles.cardOrange :
              styles.cardPurple
            }`}>
              <div className={`${styles.cardIcon} ${
                item.title === "Cloud Services" ? styles.iconBlue :
                item.title === "MERN Stack Dev" ? styles.iconOrange :
                styles.iconPurple
              }`}>
                {getHighlightIcon(item.title)}
              </div>
              <span className={`${styles.cardTag} ${
                item.title === "Cloud Services" ? styles.tagBlue :
                item.title === "MERN Stack Dev" ? styles.tagOrange :
                styles.tagPurple
              }`}>
                {item.title === "Cloud Services" ? "Infrastructure" :
                 item.title === "MERN Stack Dev" ? "Development" :
                 "Training"}
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className={styles.cardArrowLink}>
                <span>Explore Details</span>
                <span className={styles.arrowIcon}>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Partners Section */}
      <section className={styles.partnersSection}>
        <div className={styles.partnersContainer}>
          <div className={styles.partnersHeader}>
            <span className={styles.partnersBadge}>We Make Relationships</span>
            <h2 className={styles.partnersTitle}>Our Partners</h2>
            <p className={styles.partnersSubtitle}>
              Collaborating with industry-leading technology providers to design and scale cloud-native infrastructure.
            </p>
          </div>

          <div className={styles.partnersGrid}>
            {/* AWS Partner */}
            <div className={`${styles.partnerCard} ${styles.partnerAws}`}>
              <div className={styles.partnerLogoWrapper}>
                <Image
                  src="/partner-aws.png"
                  alt="AWS Partner Logo"
                  width={150}
                  height={60}
                  className={styles.partnerLogoImage}
                />
              </div>
              <div className={styles.partnerInfo}>
                <h4>AWS Consulting Partner</h4>
                <p>Advanced cloud architecting, secure scaling, and lifecycle operations.</p>
              </div>
            </div>

            {/* CloudBerry Lab */}
            <div className={`${styles.partnerCard} ${styles.partnerCloudberry}`}>
              <div className={styles.partnerLogoWrapper}>
                <Image
                  src="/partner-cloudberry.png"
                  alt="CloudBerry Lab Logo"
                  width={150}
                  height={60}
                  className={styles.partnerLogoImage}
                />
              </div>
              <div className={styles.partnerInfo}>
                <h4>CloudBerry Lab</h4>
                <p>Resilient cloud storage, server backup, and data lifecycle management.</p>
              </div>
            </div>

            {/* Trend Micro */}
            <div className={`${styles.partnerCard} ${styles.partnerTrend}`}>
              <div className={styles.partnerLogoWrapper}>
                <Image
                  src="/partner-trend.png"
                  alt="Trend Micro Logo"
                  width={150}
                  height={60}
                  className={styles.partnerLogoImage}
                />
              </div>
              <div className={styles.partnerInfo}>
                <h4>Trend Micro</h4>
                <p>Enterprise cloud security audits, proactive shielding, and threat management.</p>
              </div>
            </div>

            {/* Redington */}
            <div className={`${styles.partnerCard} ${styles.partnerRedington}`}>
              <div className={styles.partnerLogoWrapper}>
                <Image
                  src="/partner-redington.png"
                  alt="Redington Logo"
                  width={150}
                  height={60}
                  className={styles.partnerLogoImage}
                />
              </div>
              <div className={styles.partnerInfo}>
                <h4>Redington</h4>
                <p>Scalable software licensing distribution and digital logistics services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className={styles.whySection}>
        <div className={styles.whyContainer}>
          <div className={styles.whyHeader}>
            <span className={styles.whyBadge}>Why Choose Us</span>
            <h2 className={styles.whyTitle}>Twinscloud Services Provider</h2>
            <p className={styles.whySubtitle}>
              Experience of flexibility to handle demand services when a new product launches. And assuring customer peace of mind when you choose us.
            </p>
          </div>

          <div className={styles.whyGrid}>
            {/* Card 1: Flexibility & Demand */}
            <div className={`${styles.whyCard} ${styles.whyCardOrange}`}>
              <div className={`${styles.whyIconWrapper} ${styles.whyIconOrange}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.whySvg}>
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>Twinscloud Services Provider</h3>
              <p>Experience of flexibility to handle demand services when a new product launches. And assuring customer peace of mind when you choose us.</p>
            </div>

            {/* Card 2: Safe and Secured */}
            <div className={`${styles.whyCard} ${styles.whyCardRed}`}>
              <div className={`${styles.whyIconWrapper} ${styles.whyIconRed}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.whySvg}>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3>Safe and Secured</h3>
              <p>Establish and enforce security of website and software with privacy policies because your business needs to meet your compliance requirement.</p>
            </div>

            {/* Card 3: Client Satisfaction */}
            <div className={`${styles.whyCard} ${styles.whyCardBlue}`}>
              <div className={`${styles.whyIconWrapper} ${styles.whyIconBlue}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.whySvg}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>99% Client Satisfaction</h3>
              <p>Our recent survey shows that 99% of our clients are satisfied and happy with the services we provided. Assuring you quality service is our commitment.</p>
            </div>

            {/* Card 4: Transparency */}
            <div className={`${styles.whyCard} ${styles.whyCardPurple}`}>
              <div className={`${styles.whyIconWrapper} ${styles.whyIconPurple}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.whySvg}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3>Transparency</h3>
              <p>Twinscloud clear everything to their customer before starting the project and when project is going on like invoice, AWS console billing dashboard and workflow.</p>
            </div>

            {/* Card 5: 99.9% Uptime Guarantee */}
            <div className={`${styles.whyCard} ${styles.whyCardTeal}`}>
              <div className={`${styles.whyIconWrapper} ${styles.whyIconTeal}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.whySvg}>
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>99.9% Uptime Guarantee</h3>
              <p>Best network and server architecture to run application smoothly without downtime. Our server is dedicated and customized. We provide best uptime guarantee.</p>
            </div>

            {/* Card 6: 24/7 Dedicated Support */}
            <div className={`${styles.whyCard} ${styles.whyCardGreen}`}>
              <div className={`${styles.whyIconWrapper} ${styles.whyIconGreen}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.whySvg}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>24/7 Dedicated Support</h3>
              <p>Our proven ability to provide responsive and reliable last mile application call support 24 hours a day, 7 days a week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Specialists Section */}
      <section className={styles.teamSection}>
        <div className={styles.teamContainer}>
          <div className={styles.teamHeader}>
            <span className={styles.teamBadge}>Expert Minds</span>
            <h2 className={styles.teamTitle}>Meet Our Specialists</h2>
            <p className={styles.teamSubtitle}>
              Our highly qualified cloud engineers, software developers, and DevOps architects are dedicated to scaling your digital business.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {/* Specialist 1: Prem Srivastava */}
            <div className={`${styles.teamCard} ${styles.teamCardOrange}`}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="/team-prem.png"
                  alt="Prem srivastava"
                  width={400}
                  height={400}
                  className={styles.teamImage}
                  priority
                />
                <div className={styles.teamCardGlow} />
              </div>
              <div className={styles.teamInfo}>
                <span className={`${styles.teamTag} ${styles.tagOrange}`}>AWS Cloud</span>
                <h3>Prem srivastava</h3>
                <p>Aws Sr. solution architect</p>
              </div>
            </div>

            {/* Specialist 2: Ravikant */}
            <div className={`${styles.teamCard} ${styles.teamCardBlue}`}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="/team-ravikant.png"
                  alt="Ravikant"
                  width={400}
                  height={400}
                  className={styles.teamImage}
                />
                <div className={styles.teamCardGlow} />
              </div>
              <div className={styles.teamInfo}>
                <span className={`${styles.teamTag} ${styles.tagBlue}`}>Full Stack</span>
                <h3>Ravikant</h3>
                <p>Sr. Software Engineer</p>
              </div>
            </div>

            {/* Specialist 3: Akash Dakave */}
            <div className={`${styles.teamCard} ${styles.teamCardPurple}`}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="/team-akash.png"
                  alt="Akash Dakave"
                  width={400}
                  height={400}
                  className={styles.teamImage}
                />
                <div className={styles.teamCardGlow} />
              </div>
              <div className={styles.teamInfo}>
                <span className={`${styles.teamTag} ${styles.tagPurple}`}>DevOps / CI-CD</span>
                <h3>Akash Dakave</h3>
                <p>Aws DevOps Engineer</p>
              </div>
            </div>

            {/* Specialist 4: Prince Pandey */}
            <div className={`${styles.teamCard} ${styles.teamCardTeal}`}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="/team-prince.png"
                  alt="Prince Pandey"
                  width={400}
                  height={400}
                  className={styles.teamImage}
                />
                <div className={styles.teamCardGlow} />
              </div>
              <div className={styles.teamInfo}>
                <span className={`${styles.teamTag} ${styles.tagTeal}`}>Team Lead</span>
                <h3>Prince Pandey</h3>
                <p>Development team head</p>
              </div>
            </div>

            {/* Specialist 5: Mr. Ansh */}
            <div className={`${styles.teamCard} ${styles.teamCardGray}`}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="/team-ansh.png"
                  alt="Mr. Ansh"
                  width={400}
                  height={400}
                  className={styles.teamImage}
                />
                <div className={styles.teamCardGlow} />
              </div>
              <div className={styles.teamInfo}>
                <span className={`${styles.teamTag} ${styles.tagGray}`}>Cloud Trainee</span>
                <h3>Mr. Ansh</h3>
                <p>Server/Cloud trainee</p>
              </div>
            </div>

            {/* Specialist 6: Ram Ji */}
            <div className={`${styles.teamCard} ${styles.teamCardOrange}`}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="/team-ram.png"
                  alt="Ram Ji"
                  width={400}
                  height={400}
                  className={styles.teamImage}
                />
                <div className={styles.teamCardGlow} />
              </div>
              <div className={styles.teamInfo}>
                <span className={`${styles.teamTag} ${styles.tagOrange}`}>Web Developer</span>
                <h3>Ram Ji</h3>
                <p>Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialHeader}>
            <span className={styles.testimonialBadge}>Testimonials</span>
            <h2 className={styles.testimonialTitle}>What our clients say about us</h2>
            <p className={styles.testimonialSubtitle}>
              Hear from business leaders and technology officers who have scaled their operations with TwinsCloud.
            </p>
          </div>

          {/* Testimonial Tabs */}
          <div className={styles.testimonialTabs}>
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                className={`${styles.testimonialTabBtn} ${activeTestimonial === idx ? styles.activeTab : ""}`}
                onClick={() => setActiveTestimonial(idx)}
              >
                {t.company}
              </button>
            ))}
          </div>

          {/* Testimonial Content Card */}
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent} key={activeTestimonial}>
              {/* Left Column: Image/Avatar */}
              <div className={styles.testimonialImageCol}>
                <div className={styles.testimonialImageWrapper}>
                  {testimonials[activeTestimonial].image ? (
                    <Image
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      width={180}
                      height={180}
                      className={styles.testimonialImage}
                      priority
                    />
                  ) : (
                    <div className={styles.testimonialAvatar}>
                      {testimonials[activeTestimonial].initials}
                    </div>
                  )}
                  <div className={styles.testimonialImageGlow} />
                </div>
              </div>

              {/* Right Column: Quote details */}
              <div className={styles.testimonialQuoteCol}>
                <div className={styles.quoteIcon}>“</div>
                <p className={styles.testimonialQuoteText}>
                  {testimonials[activeTestimonial].quote}
                </p>
                <div className={styles.testimonialAuthorInfo}>
                  <h4>{testimonials[activeTestimonial].name}</h4>
                  <p>{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
