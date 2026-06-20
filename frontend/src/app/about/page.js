import React from "react";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Floating Animated Technology Texture Spots */}
      <div className={styles.glowSpot1} />
      <div className={styles.glowSpot2} />
      <div className={styles.glowSpot3} />

      <div className={`${styles.aboutContainer} animateFadeInUp`}>
        {/* Page Header */}
        <header className={styles.aboutHeader}>
          <span className={styles.aboutBadge}>Who We Are</span>
          <h1 className={styles.aboutTitle}>
            About <span className={styles.highlight}>TwinsCloud</span>
          </h1>
          <p className={styles.aboutSubtitle}>
            Providing qualified cloud consultation, full-stack systems engineering, and dedicated cloud resale programs.
          </p>
        </header>

        {/* Company Profile Intro Section */}
        <section className={styles.introSection}>
          <div className={styles.introLeft}>
            <span className={styles.introBadge}>Corporate Profile</span>
            <h3>TwinsCloud Private Limited</h3>
            <p className={styles.introText}>
              <strong>TwinsCloud</strong> is recognized as a premier technology services and cloud engineering consultancy group. 
              We systematically architect and implement software and cloud ecosystems that enable organizations to thrive in 
              highly demanding markets.
            </p>
            <p className={styles.introText}>
              Through advanced development methodology, full-stack systems, and robust database setups, we enable enterprises 
              to automate their pipelines, secure their data assets, and deploy applications with zero friction.
            </p>
          </div>

          {/* Animated SVG Technology Circuit Graphic */}
          <div className={styles.introGraphic}>
            <div className={styles.circuitGrid} />
            <div className={styles.orbRing} />
            <div className={styles.cloudOrb}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.cloudOrbSvg}
              >
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
              </svg>
            </div>
          </div>
        </section>

        {/* AWS Partnership & Vision Grid */}
        <section className={styles.awsSection}>
          {/* AWS reseller card */}
          <div className={styles.awsCard}>
            <h3 className={styles.awsTitle}>
              AWS Reseller <span className={styles.awsLogoText}>Program</span>
            </h3>
            <p className={styles.awsText}>
              The **TwinsCloud AWS Channel Reseller Program** enables qualified partners to resell AWS services to both commercial and public sector end customers. We work closely with organizations to build highly available, scalable, and audit-compliant cloud architectures on Amazon Web Services.
            </p>
          </div>

          {/* Core Vision card */}
          <div className={styles.visionCard}>
            <h3 className={styles.visionTitle}>Our Vision</h3>
            <p className={styles.visionText}>
              At TwinsCloud, our vision is to become the world&apos;s leading **Cloud Consulting company**, delivering unmatched business value to our customers with the highest level of Customer Satisfaction. We actively help our customers reduce operational expenses and maximize market efficiency.
            </p>
          </div>
        </section>

        {/* TwinsCloud Lifecycle Section */}
        <section className={styles.lifecycleSection}>
          <div className={styles.lifecycleHeader}>
            <span className={styles.aboutBadge}>Operational Flow</span>
            <h3>TwinsCloud Lifecycle</h3>
            <p className={styles.aboutSubtitle}>
              Our optimized approach to managing your cloud lifecycle seamlessly.
            </p>
          </div>

          <div className={styles.lifecycleGrid}>
            {/* Left Column: Lifecycle Hub */}
            <div className={styles.lifecycleHub}>
              <span className={styles.hubTitle}>TwinsCloud Lifecycle</span>
              <p className={styles.hubText}>
                Save Money, Cost, Data & Time with Cloud Computing
              </p>
            </div>

            {/* Right Column: 5 steps list */}
            <div className={styles.lifecycleSteps}>
              <div className={`${styles.stepCard} ${styles.themeOrange}`}>
                <div className={styles.stepBadge}>1</div>
                <div className={styles.stepInfo}>
                  <h4>Reduce Infrastructure Cost</h4>
                  <p>Systematically optimize resource allocation and clean up idle capacities to lower cloud billing overheads.</p>
                </div>
              </div>

              <div className={`${styles.stepCard} ${styles.themeCrimson}`}>
                <div className={styles.stepBadge}>2</div>
                <div className={styles.stepInfo}>
                  <h4>Configuration & Implementation</h4>
                  <p>Implement highly secure network pathways and custom server parameters aligned with best-practice architectures.</p>
                </div>
              </div>

              <div className={`${styles.stepCard} ${styles.themePurple}`}>
                <div className={styles.stepBadge}>3</div>
                <div className={styles.stepInfo}>
                  <h4>Scalability</h4>
                  <p>Integrate elastic scaling patterns enabling application clusters to expand or contract dynamically based on real-time load.</p>
                </div>
              </div>

              <div className={`${styles.stepCard} ${styles.themePink}`}>
                <div className={styles.stepBadge}>4</div>
                <div className={styles.stepInfo}>
                  <h4>On Boarding and Testing</h4>
                  <p>Seamlessly onboard user roles and perform rigorous automated load-tests to validate build stability prior to deployment.</p>
                </div>
              </div>

              <div className={`${styles.stepCard} ${styles.themeGreen}`}>
                <div className={styles.stepBadge}>5</div>
                <div className={styles.stepInfo}>
                  <h4>24*7 Support</h4>
                  <p>Provide around-the-clock proactive system checks and call support to ensure high availability and client peace of mind.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars / Strengths */}
        <section className={styles.pillarsSection}>
          <div className={styles.pillarsHeader}>
            <h3>Strategic Value & Recognition</h3>
          </div>
          
          <div className={styles.cardGrid}>
            {/* Card 1: Subversive Tech */}
            <div className={`${styles.featureCard} ${styles.cardOrange}`}>
              <div className={`${styles.cardIcon} ${styles.iconOrange}`}>⚡</div>
              <h4>Subversive Technology</h4>
              <p>
                With a strong focus on cloud architectures, we give our clients the leverage to scale their business operations, alleviate standard marketing loads, and optimize enterprise responsibilities.
              </p>
            </div>

            {/* Card 2: AWS Startup Recognition */}
            <div className={`${styles.featureCard} ${styles.cardBlue}`}>
              <div className={`${styles.cardIcon} ${styles.iconBlue}`}>🏆</div>
              <h4>AWS Start-up Recognition</h4>
              <p>
                TwinsCloud is recognized as an AWS start-up for our amazing vision that brings the strength of the cloud to organizations, helping them achieve strict industry standards.
              </p>
            </div>

            {/* Card 3: Acceleration & Quality */}
            <div className={`${styles.featureCard} ${styles.cardPurple}`}>
              <div className={`${styles.cardIcon} ${styles.iconPurple}`}>🚀</div>
              <h4>Accelerated Delivery</h4>
              <p>
                We accelerate organizational workloads at a strategic pace, delivering high-quality cloud and software services within well-defined time bounds.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
