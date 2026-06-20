"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./project.module.css";

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const end = parseFloat(target);
    if (isNaN(end)) return;

    const duration = 1200; // 1.2 seconds

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const currentVal = progress * end;
      setCount(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [target]);

  const isDecimal = target.toString().includes(".");
  const displayCount = isDecimal ? count.toFixed(1) : Math.floor(count);

  return <span>{displayCount}{suffix}</span>;
}

export default function ProjectPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      name: "Design Awards Global",
      title: "D&V '25 Awards & E-Commerce Portal",
      logo: "/client-great-indian-entrepreneurship.png",
      category: "Enterprise",
      role: "Engineered a ticket booking and book store e-commerce checkout flow, resolved payment gateway problems, created an administrative sales panel, and maintained the web portal.",
      technologies: ["MERN Stack", "Express", "MongoDB", "Razorpay", "Stripe API"]
    },
    {
      name: "Architecture Herald",
      title: "Architecture Herald Digital Portal",
      logo: "/client-architecture-design.png",
      category: "Enterprise",
      role: "Designed a premium editorial magazine UI, resolved bulk registration issues, built slot booking structures, integrated multiple payment gateways, and managed continuous security audits.",
      technologies: ["React", "Express", "Node.js", "MongoDB", "Razorpay", "Stripe"]
    },
    {
      name: "Bimla International Public School",
      title: "BIPS Portal & ERP System",
      logo: "/client-bips.png",
      category: "Education",
      role: "Developed a public-facing school portal and a custom centralized ERP management dashboard for fees, attendance, and student profiling.",
      technologies: ["MERN Stack", "Express", "MongoDB", "Redux", "Nginx", "PM2"]
    },
    {
      name: "Kishtwar Tourism",
      title: "Kishtwar Tourism Portal",
      logo: "/client-kishtwar-tourism.png",
      category: "Government",
      role: "Built a high-performance, SEO-optimized tourism discovery portal featuring real-time event booking and interactive maps.",
      technologies: ["React", "AWS S3", "CloudFront", "Tailwind CSS"]
    },
    {
      name: "Shri Machail Mata Yatra",
      title: "Pilgrimage Management System",
      logo: "/client-machail-mata.png",
      category: "Government",
      role: "Designed a secure cloud platform for devotee registrations, helicopter pass booking, and live tracking of pilgrim flow.",
      technologies: ["Next.js", "Node.js", "MongoDB", "AWS RDS", "SMS Alerts"]
    },
    {
      name: "India Elite School Awards",
      title: "Education Awards Platform",
      logo: "/client-elite-school.png",
      category: "Enterprise",
      role: "Developed an interactive school ranking and voting portal with real-time analytics to filter fake ratings and verify nominations.",
      technologies: ["MERN Stack", "Express", "JWT", "AWS Amplify"]
    },
    {
      name: "The Great Indian Entrepreneurship Awards",
      title: "Startup Recognition Platform",
      logo: "/client-great-indian-entrepreneurship.png",
      category: "Enterprise",
      role: "Created a secure application and evaluation portal for startup founders and investors, featuring automated certificate generator.",
      technologies: ["React", "Node.js", "AWS Lambda", "PDFKit", "S3"]
    },
    {
      name: "Architecture & Interior Design Excellence Awards",
      title: "Design Awards Platform",
      logo: "/client-architecture-design.png",
      category: "Enterprise",
      role: "Engineered a visually immersive project gallery and grading system for design professionals, with portfolio upload capability.",
      technologies: ["React.js", "Node.js", "MongoDB", "Cloudinary", "Nginx"]
    },
    {
      name: "Pincode Credits",
      title: "Financial Services Platform",
      logo: "/client-pincode-credits.png",
      category: "Enterprise",
      role: "Designed and deployed a highly secure microservices backend architecture with encrypted database transactions for user credits.",
      technologies: ["Node.js", "Express", "PostgreSQL", "AWS ECS", "Docker"]
    },
    {
      name: "NIT Patna",
      title: "Academic Portal System",
      logo: "/client-nit-patna.png",
      category: "Education",
      role: "Developed a reliable, high-performance portal structure to manage academic calendars, admissions logs, and online gradebooks.",
      technologies: ["React", "Java Spring Boot", "MySQL", "AWS CloudWatch"]
    },
    {
      name: "Delhi Public School Sitapur",
      title: "DPS Sitapur School ERP",
      logo: "/client-dps-sitapur.png",
      category: "Education",
      role: "Deployed a customized campus ERP with automated fee collection systems, student attendance tracking, and parent communication channels.",
      technologies: ["MERN Stack", "Razorpay Integration", "AWS SES", "Redux"]
    },
    {
      name: "Lucknow Public Schools & Colleges",
      title: "LPS Educational Group ERP",
      logo: "/client-lucknow-public-school.png",
      category: "Education",
      role: "Architected a multi-campus, unified portal for students and faculty, serving over 15,000+ daily active users with low latency.",
      technologies: ["Next.js", "Node.js", "MongoDB", "AWS AutoScaling", "Redis"]
    },
    {
      name: "SRMU",
      title: "SRM University Portal",
      logo: "/client-srmu.png",
      category: "Education",
      role: "Optimized university application forms and admission pipelines on AWS cloud infrastructure, cutting average page loads by 40%.",
      technologies: ["React", "PHP Laravel", "AWS EC2", "MySQL", "CloudFront"]
    },
    {
      name: "Aptitech Education",
      title: "Aptitech Training Portal",
      logo: "/client-aptitech.png",
      category: "Education",
      role: "Built an interactive LMS supporting video streaming courses, student assessment modules, and certifications.",
      technologies: ["Next.js", "Express", "MongoDB", "AWS S3", "Vimeo API"]
    },
    {
      name: "Tobacco Monitoring App",
      title: "National Health Monitoring",
      logo: "/client-tobacco-monitoring.png",
      category: "Government",
      role: "Developed a secure health reporting app with geo-tagging, offline data storage, and automated compliance alerts for field officers.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Google Maps API"]
    },
    {
      name: "BNCET Lucknow",
      title: "BNCET Admin Management",
      logo: "/client-bncet.png",
      category: "Education",
      role: "Upgraded institutional databases to AWS with robust backup routines, minimizing average query response times by 30%.",
      technologies: ["React", "Node.js", "AWS RDS", "Database Migration"]
    },
    {
      name: "edawai",
      title: "edawai Healthcare E-Commerce",
      logo: "/client-edawai.png",
      category: "Enterprise",
      role: "Developed a reliable online pharmacy storefront with payment gateways, automated inventory alert mechanisms, and secure order logs.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe API", "AWS Lambda"]
    },
    {
      name: "Begin Up",
      title: "Begin Up Consulting Hub",
      logo: "/client-beginup.png",
      category: "Enterprise",
      role: "Built a customized CRM and consultation scheduling platform for small and medium businesses to manage client appointments.",
      technologies: ["React", "Firebase", "Node.js", "Google Calendar API"]
    }
  ];

  const stats = [
    { target: 15, suffix: "+", label: "Completed Projects" },
    { target: 3, suffix: "+", label: "Industry Sectors" },
    { target: 100, suffix: "%", label: "Cloud-Hardened Success" }
  ];

  // Filter projects based on activeTab and searchQuery
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeTab === "all" ||
      project.category.toLowerCase() === activeTab.toLowerCase();

    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  const getCategoryClass = (category) => {
    if (category === "Government") return styles.cardGov;
    if (category === "Education") return styles.cardEdu;
    return styles.cardEnt;
  };

  const getCategoryTextClass = (category) => {
    if (category === "Government") return styles.textGov;
    if (category === "Education") return styles.textEdu;
    return styles.textEnt;
  };

  return (
    <div className={styles.projectPage}>
      {/* Floating animated spotlights */}
      <div className={styles.glowSpot1} />
      <div className={styles.glowSpot2} />

      <div className={`${styles.projectContainer} animateFadeInUp`}>
        {/* Page Header */}
        <header className={styles.projectHeader}>
          <span className={styles.projectBadge}>Our Work</span>
          <h1 className={styles.projectTitle}>
            Successful <span className={styles.highlight}>Projects</span>
          </h1>
          <p className={styles.projectSubtitle}>
            Discover how we help government bodies, leading universities, and growing startups scale operations and establish secure database environments.
          </p>
        </header>

        {/* Stats Metrics Section */}
        <section className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statNumber}>
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Search & Filters Section */}
        <section className={styles.searchFilterContainer}>
          <div className={styles.searchWrapper}>
            <svg
              className={styles.searchIcon}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by project name or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterConsole}>
            {["all", "government", "education", "enterprise"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${styles.filterBtn} ${
                  activeTab === tab ? styles.activeFilterBtn : ""
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className={styles.grid}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={project.name}
                className={`${styles.projectCard} ${getCategoryClass(
                  project.category
                )}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={styles.logoWrapper}>
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={56}
                    height={56}
                    className={styles.clientLogo}
                  />
                </div>
                <span
                  className={`${styles.cardCategory} ${getCategoryTextClass(
                    project.category
                  )}`}
                >
                  {project.category}
                </span>
                <h4>{project.title}</h4>
                <p>{project.role}</p>
                <div className={styles.techList}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>No projects match your search query or selected category.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
