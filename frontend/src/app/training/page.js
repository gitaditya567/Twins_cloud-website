"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./training.module.css";

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

export default function TrainingPage() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  // Application Form States
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyFormData, setApplyFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    passingYear: "",
    programType: "Summer Training",
    courseOfInterest: "MERN Stack Engineering"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get("apply") === "true") {
        setShowApplyModal(true);
      }
    }
  }, []);

  const handleApplyInputChange = (e) => {
    const { name, value } = e.target;
    setApplyFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await fetch("http://localhost:5000/api/training/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(applyFormData)
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMsg("Your application has been submitted successfully!");
        setApplyFormData({
          name: "",
          email: "",
          phone: "",
          college: "",
          branch: "",
          passingYear: "",
          programType: "Summer Training",
          courseOfInterest: "MERN Stack Engineering"
        });
        setTimeout(() => {
          setShowApplyModal(false);
          setSuccessMsg("");
        }, 2500);
      } else {
        setErrorMsg(data.message || "Failed to submit application.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to connect to backend server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { target: 500, suffix: "+", label: "Engineers Trained" },
    { target: 3, suffix: "+", label: "Sectors Covered" },
    { target: 100, suffix: "%", label: "Hands-on Live Work" }
  ];

  const trainingTracks = [
    {
      title: "Summer / Winter / Vocational Training Programs",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      items: [
        {
          heading: "Summer Training Programs",
          desc: "A structured, hands-on program conducted during the summer break (usually May–July). Designed to help engineering and computer applications students bridge the gap between theory and practical development on live cloud sandboxes."
        },
        {
          heading: "Winter Training Programs",
          desc: "Intensive training crash courses conducted during the winter vacation (usually December–January), focusing on fast-track code configurations, database architectures, and API setups."
        },
        {
          heading: "Vocational Training Programs",
          desc: "A skill-based training framework frequently mandated by universities as a core curriculum requirement. This track concentrates exclusively on developing industry-specific deployment skills and cloud security compliance practices rather than generic lecture modules."
        }
      ]
    },
    {
      title: "Internship / Apprenticeship Training Programs",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      items: [
        {
          heading: "Internships",
          desc: "A short-term professional training opportunity (typically 3 to 6 months) where senior students or recent graduates work directly under AWS start-up engineers on real-world projects to gain authentic corporate software engineering exposure."
        },
        {
          heading: "Apprenticeship Programs",
          desc: "A structured, long-term technical learning path combining hands-on on-the-job training with classroom instruction. Our apprenticeships are aligned to government-affiliated framework structures and lay down direct employment pathways for matching roles."
        }
      ]
    }
  ];

  const curriculum = [
    {
      title: "MERN Stack Engineering",
      desc: "Build fast, SEO-compliant applications. Master single-page architectures, secure JWT session management, RESTful APIs, and MongoDB transactional auditing.",
      topics: ["Next.js", "React", "Express", "Node.js", "MongoDB", "Redux"]
    },
    {
      title: "Cloud & DevOps Architectures",
      desc: "Deploy, auto-scale, and secure enterprise projects on AWS. Learn Terraform Infrastructure as Code, CI/CD automated pipeline builds, and CloudWatch metrics.",
      topics: ["AWS EC2/S3", "ECS/Fargate", "Terraform", "Docker", "Kubernetes", "GitHub Actions"]
    },
    {
      title: "Enterprise ERP & Databases",
      desc: "Design structured university and school management portals, medical invoice logging tables, inventory alerts, and HIPAA-compliant ledger audit histories.",
      topics: ["ERP Systems", "Payment APIs", "Database Migration", "SQL/NoSQL Log Audit"]
    }
  ];

  return (
    <div className={styles.trainingPage}>
      {/* Background spotlights */}
      <div className={styles.glowSpot1} />
      <div className={styles.glowSpot2} />

      <div className={`${styles.trainingContainer} animateFadeInUp`}>
        {/* Page Header */}
        <header className={styles.trainingHeader}>
          <span className={styles.trainingBadge}>Tech Academy</span>
          <h1 className={styles.trainingTitle}>
            Professional <span className={styles.highlight}>Training Programs</span>
          </h1>
          <p className={styles.trainingSubtitle}>
            Bridge the gap between computer science theory and real-world software engineering with our structured internships and cloud architectures modules.
          </p>
        </header>

        {/* Stats metrics */}
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

        {/* Interactive Split Section */}
        <section className={styles.splitSection}>
          {/* Animated SVG Schematic Illustration Panel */}
          <div className={styles.svgPanel}>
            <svg viewBox="0 0 400 400" className={styles.illSvg}>
              {/* Circuit lines in the background */}
              <path
                d="M50 200 h300 M200 50 v300 M100 100 l200 200"
                stroke="rgba(0,112,243,0.08)"
                strokeWidth="2"
                strokeDasharray="5 5"
                className={styles.animatedCircuit}
              />
              
              {/* Glowing Lightbulb representing Knowledge */}
              <g transform="translate(140, 160)">
                <g className={styles.glowingBulb}>
                  <circle cx="60" cy="50" r="45" fill="rgba(249, 132, 26, 0.03)" />
                  <path d="M45 100 h30 v8 h-30 z" fill="#a0aec0" />
                  <path d="M48 108 h24 v4 h-24 z" fill="#718096" />
                  <path
                    d="M60 15 C35 15 25 38 25 55 C25 75 42 85 45 100 h30 C78 85 95 75 95 55 C95 38 85 15 60 15 z"
                    fill="rgba(249, 132, 26, 0.05)"
                    stroke="#f9841a"
                    strokeWidth="3.5"
                  />
                  <path d="M48 100 L55 70 M72 100 L65 70" stroke="#f9841a" strokeWidth="2.5" fill="none" />
                  <path d="M54 70 h12 l-6-10 z" fill="#ffb03a" />
                </g>
              </g>
              
              {/* Spinning Orange Gear */}
              <g transform="translate(90, 100)">
                <g className={styles.spinningGear}>
                  <circle cx="0" cy="0" r="24" fill="none" stroke="#f9841a" strokeWidth="8" />
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 360) / 8;
                    return (
                      <rect
                        key={i}
                        x="-5"
                        y="-32"
                        width="10"
                        height="12"
                        rx="2"
                        fill="#f9841a"
                        transform={`rotate(${angle})`}
                      />
                    );
                  })}
                  <circle cx="0" cy="0" r="10" fill="#fafbfc" stroke="#f9841a" strokeWidth="3" />
                </g>
              </g>

              {/* Spinning Blue Gear */}
              <g transform="translate(290, 270)">
                <g className={styles.spinningGearAlt}>
                  <circle cx="0" cy="0" r="18" fill="none" stroke="#0070f3" strokeWidth="6" />
                  {Array.from({ length: 6 }).map((_, i) => {
                    const angle = (i * 360) / 6;
                    return (
                      <rect
                        key={i}
                        x="-4"
                        y="-24"
                        width="8"
                        height="9"
                        rx="2"
                        fill="#0070f3"
                        transform={`rotate(${angle})`}
                      />
                    );
                  })}
                  <circle cx="0" cy="0" r="8" fill="#fafbfc" stroke="#0070f3" strokeWidth="2" />
                </g>
              </g>

              {/* Floating Tech Robot */}
              <g transform="translate(270, 90)">
                <g className={styles.floatingRobot}>
                  <rect x="-25" y="-35" width="50" height="36" rx="10" fill="#0070f3" />
                  <rect x="-20" y="-30" width="40" height="22" rx="6" fill="#0b0f19" />
                  <circle cx="-10" cy="-19" r="3" fill="#10b981" />
                  <circle cx="10" cy="-19" r="3" fill="#10b981" />
                  <rect x="-30" y="8" width="60" height="38" rx="12" fill="#0070f3" />
                  <rect x="-8" y="1" width="16" height="8" rx="2" fill="#718096" />
                  <circle cx="0" cy="27" r="10" fill="none" stroke="#ffffff" strokeWidth="2.5" />
                  <circle cx="0" cy="27" r="5" fill="#f9841a" />
                  <line x1="0" y1="-35" x2="0" y2="-45" stroke="#718096" strokeWidth="3" />
                  <circle cx="0" cy="-47" r="4" fill="#f9841a" />
                </g>
              </g>

              {/* Floating Orange Rocket representing acceleration */}
              <g transform="translate(80, 280)">
                <g className={styles.rocketThrust}>
                  <path d="M-15 0 C-15 -35 0 -55 0 -55 C0 -55 15 -35 15 0 z" fill="#f9841a" />
                  <path d="M-15 -10 L-25 10 L-15 5 z" fill="#e2700f" />
                  <path d="M15 -10 L25 10 L15 5 z" fill="#e2700f" />
                  <circle cx="0" cy="-22" r="6" fill="#fafbfc" stroke="#0b0f19" strokeWidth="2" />
                  <path d="M-8 4 L0 25 L8 4 z" fill="#ffb03a" />
                </g>
              </g>
            </svg>
          </div>

          {/* Interactive Accordion column details */}
          <div className={styles.accordionColumn}>
            {trainingTracks.map((track, trackIndex) => {
              const isActive = activeAccordion === trackIndex;
              return (
                <div
                  key={trackIndex}
                  className={`${styles.accordionCard} ${isActive ? styles.activeAccordionCard : ""}`}
                >
                  <button
                    onClick={() => setActiveAccordion(isActive ? null : trackIndex)}
                    className={styles.accordionHeader}
                    aria-expanded={isActive}
                  >
                    <div className={styles.accordionHeaderTitle}>
                      {track.icon}
                      <h3>{track.title}</h3>
                    </div>
                    <span className={styles.accordionIcon}>▼</span>
                  </button>
                  <div className={styles.accordionContent}>
                    <div className={styles.programItemList}>
                      {track.items.map((item, itemIndex) => (
                        <div key={itemIndex} className={styles.programItem}>
                          <h4>{item.heading}</h4>
                          <p>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Curriculum Focus Section */}
        <section className={styles.curriculumSection}>
          <div className={styles.sectionHeader}>
            <h2>Program Tech Curriculums</h2>
            <p>Our training paths are engineered around these vital core industry domains.</p>
          </div>

          <div className={styles.curriculumGrid}>
            {curriculum.map((course, idx) => (
              <div key={idx} className={styles.curriculumCard}>
                <div className={styles.curriculumIcon}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
                <div className={styles.curriculumTopics}>
                  {course.topics.map((topic, topicIdx) => (
                    <span key={topicIdx} className={styles.topicBadge}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action banner */}
        <section className={styles.ctaContainer}>
          <h3>Kickstart Your Engineering Career</h3>
          <p>
            Ready to apply for our Summer/Winter Vocational batches or need to integrate custom team-building cloud training for your corporate dev squads? Get in touch today.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px", marginTop: "24px" }}>
            <Link href="/consultation" className={styles.ctaBtn} style={{ marginTop: 0 }}>
              Schedule Consultation &amp; Register
            </Link>
            <button onClick={() => setShowApplyModal(true)} className={styles.applyBtn}>
              Apply for Training / Internship
            </button>
          </div>
        </section>
      </div>

      {/* Application Modal Popup */}
      {showApplyModal && (
        <div className={styles.modalOverlay} onClick={() => setShowApplyModal(false)}>
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setShowApplyModal(false)} aria-label="Close modal">
              &times;
            </button>
            <div className={styles.modalHeader}>
              <h3>Apply for Training / Internship</h3>
              <p>Fill out the form below. Our training team will review and connect with you shortly.</p>
            </div>
            
            {successMsg && <div className={styles.successText}>{successMsg}</div>}
            {errorMsg && <div className={styles.errorText}>{errorMsg}</div>}

            <form onSubmit={handleApplySubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    className={styles.inputField}
                    placeholder="Enter full name"
                    value={applyFormData.name}
                    onChange={handleApplyInputChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    className={styles.inputField}
                    placeholder="Enter email address"
                    value={applyFormData.email}
                    onChange={handleApplyInputChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    className={styles.inputField}
                    placeholder="Enter phone number"
                    value={applyFormData.phone}
                    onChange={handleApplyInputChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>College / University *</label>
                  <input
                    type="text"
                    name="college"
                    className={styles.inputField}
                    placeholder="College/University Name"
                    value={applyFormData.college}
                    onChange={handleApplyInputChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Branch / Course *</label>
                  <input
                    type="text"
                    name="branch"
                    className={styles.inputField}
                    placeholder="e.g. B.Tech CSE, MCA"
                    value={applyFormData.branch}
                    onChange={handleApplyInputChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Passing Year *</label>
                  <input
                    type="text"
                    name="passingYear"
                    className={styles.inputField}
                    placeholder="e.g. 2026, 2027"
                    value={applyFormData.passingYear}
                    onChange={handleApplyInputChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Program Type *</label>
                  <select
                    name="programType"
                    className={styles.selectField}
                    value={applyFormData.programType}
                    onChange={handleApplyInputChange}
                  >
                    <option value="Summer Training">Summer Training</option>
                    <option value="Winter Training">Winter Training</option>
                    <option value="Internship">Internship</option>
                    <option value="Vocational Training">Vocational Training</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Course of Interest *</label>
                  <select
                    name="courseOfInterest"
                    className={styles.selectField}
                    value={applyFormData.courseOfInterest}
                    onChange={handleApplyInputChange}
                  >
                    <option value="MERN Stack Engineering">MERN Stack Engineering</option>
                    <option value="Cloud & DevOps Architectures">Cloud & DevOps Architectures</option>
                    <option value="Enterprise ERP & Databases">Enterprise ERP & Databases</option>
                  </select>
                </div>
              </div>

              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
