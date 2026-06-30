"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./calculator.module.css";

export default function CalculatorPage() {
  const router = useRouter();
  
  // Tab Switcher State: 'website' | 'cloud'
  const [activeTab, setActiveTab] = useState("website");

  // ==========================================
  // 1. WEBSITE COST CALCULATOR STATES
  // ==========================================
  const [websiteType, setWebsiteType] = useState("static"); // static | dynamic
  const [pages, setPages] = useState(5);
  const [includeDomain, setIncludeDomain] = useState(true);
  const [includeHosting, setIncludeHosting] = useState(true);
  const [ecommerce, setEcommerce] = useState(false);
  const [auth, setAuth] = useState(false);
  const [seo, setSeo] = useState(true);
  const [support, setSupport] = useState(false);

  // Website Computed Costs
  const [devCost, setDevCost] = useState(0);
  const [recurringCost, setRecurringCost] = useState(0);

  // Recalculate Website Costs
  useEffect(() => {
    // Development Cost Calculation
    const baseDev = websiteType === "static" ? 8000 : 25000;
    const pageCostMultiplier = websiteType === "static" ? 1000 : 2000;
    const pagesCost = pages * pageCostMultiplier;
    
    let featuresDev = 0;
    if (ecommerce) featuresDev += 10000;
    if (auth) featuresDev += 8000;
    if (seo) featuresDev += 3000;
    
    setDevCost(baseDev + pagesCost + featuresDev);

    // Recurring (Annual) Cost Calculation
    let annualRecurring = 0;
    if (includeDomain) annualRecurring += 800; // Domain cost per year
    
    if (includeHosting) {
      // Hosting: Static is ₹1,800/yr, Dynamic is ₹10,000/yr
      const annualHosting = websiteType === "static" ? 1800 : 10000;
      annualRecurring += annualHosting;
    }
    
    if (support) {
      annualRecurring += 5000; // Annual support/maintenance & SSL
    }

    setRecurringCost(annualRecurring);
  }, [websiteType, pages, includeDomain, includeHosting, ecommerce, auth, seo, support]);

  const handleGetWebsiteQuote = () => {
    const descriptionText = `Hi TwinsCloud Team,\n\nI used your Website Cost Calculator and would like a custom quote for the following details:\n- Website Type: ${websiteType === "static" ? "Static Website (HTML/React Landing)" : "Dynamic Website (MERN/PHP + Admin Panel)"}\n- Pages: ${pages}\n- Include Domain: ${includeDomain ? "Yes (₹800/yr)" : "No"}\n- Include Cloud Hosting: ${includeHosting ? `Yes (₹${websiteType === "static" ? "1,800" : "10,000"}/yr)` : "No"}\n- E-Commerce Setup: ${ecommerce ? "Yes (₹10,000)" : "No"}\n- User Auth & Profiles: ${auth ? "Yes (₹8,000)" : "No"}\n- SEO & Search Console Setup: ${seo ? "Yes (₹3,000)" : "No"}\n- Priority Support & SSL: ${support ? "Yes (₹5,000/yr)" : "No"}\n\nEstimated Development Cost: ₹${devCost.toLocaleString("en-IN")}\nEstimated Annual Recurring: ₹${recurringCost.toLocaleString("en-IN")}/yr.\n\nLet's discuss my project.`;
    
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("rfq_prefill", descriptionText);
    }
    
    router.push("/rfq");
  };


  // ==========================================
  // 2. CLOUD INFRASTRUCTURE CALCULATOR STATES
  // ==========================================
  const [servers, setServers] = useState(5);
  const [storage, setStorage] = useState(500); // GB
  const [bandwidth, setBandwidth] = useState(1000); // GB
  const [tier, setTier] = useState("standard"); // standard | enterprise

  // Cloud Computed Costs
  const [legacyCost, setLegacyCost] = useState(0);
  const [optimizedCost, setOptimizedCost] = useState(0);
  const [savings, setSavings] = useState(0);

  // Recalculate Cloud Costs
  useEffect(() => {
    const legacyServerCost = servers * 40;
    const legacyStorageCost = storage * 0.15;
    const legacyBandwidthCost = bandwidth * 0.12;
    const legacySupportFee = tier === "enterprise" ? 150 : 0;
    const totalLegacy = Math.round(legacyServerCost + legacyStorageCost + legacyBandwidthCost + legacySupportFee);

    const optimizedServerCost = servers * 28;
    const optimizedStorageCost = storage * 0.08;
    const optimizedBandwidthCost = bandwidth * 0.05;
    const optimizedSupportFee = tier === "enterprise" ? 80 : 0;
    const totalOptimized = Math.round(optimizedServerCost + optimizedStorageCost + optimizedBandwidthCost + optimizedSupportFee);

    setLegacyCost(totalLegacy);
    setOptimizedCost(totalOptimized);
    setSavings(totalLegacy - totalOptimized);
  }, [servers, storage, bandwidth, tier]);

  const handleGetSetup = () => {
    const descriptionText = `Hi TwinsCloud Team,\n\nI used your online cost calculator and would like a quote for the following infrastructure details:\n- Servers: ${servers}\n- Database Storage: ${storage} GB\n- Monthly Bandwidth: ${bandwidth} GB\n- Support Tier: ${tier === "enterprise" ? "Enterprise Support (24x7)" : "Standard Support"}\n\nEstimated Monthly Savings: $${savings}/mo. Let's discuss optimization.`;
    
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("rfq_prefill", descriptionText);
    }
    
    router.push("/rfq");
  };

  return (
    <div className={styles.calculatorPage}>
      {/* Glow Effects */}
      <div className={styles.glowSpot1} />
      <div className={styles.glowSpot2} />

      <div className={`${styles.container} animateFadeInUp`}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.badge}>ROI &amp; Pricing Tool</span>
          <h1 className={styles.title}>
            TwinsCloud <span className={styles.highlight}>Cost Estimator</span>
          </h1>
          <p className={styles.subtitle}>
            Select a calculator below to estimate your custom website development charges or calculate your monthly cloud hosting savings.
          </p>
        </header>

        {/* Tab Selection Switcher */}
        <div className={styles.tabsContainer}>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === "website" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("website")}
          >
            🕸️ Website Design &amp; Development
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === "cloud" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("cloud")}
          >
            ☁️ AWS Cloud Infrastructure
          </button>
        </div>

        {/* =======================================================
            TAB 1: WEBSITE DEVELOPMENT CHARGES ESTIMATOR
            ======================================================= */}
        {activeTab === "website" && (
          <div className={styles.grid}>
            
            {/* Inputs Form */}
            <div className={styles.card}>
              <h3 className={styles.sectionTitle}>Configure Your Website</h3>
              
              {/* Website Type Selection */}
              <div className={styles.sliderGroup}>
                <span className={styles.labelText} style={{ display: 'block', marginBottom: '12px' }}>Website Type</span>
                <div className={styles.tierGroup}>
                  <button
                    type="button"
                    onClick={() => {
                      setWebsiteType("static");
                      // Reset ecommerce and auth if switching to static
                      setEcommerce(false);
                      setAuth(false);
                    }}
                    className={`${styles.tierBtn} ${websiteType === "static" ? styles.tierBtnActive : ""}`}
                  >
                    <span className={styles.tierName}>Static Website</span>
                    <span className={styles.tierDesc}>Informational, fast-loading, portfolios, landing pages.</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setWebsiteType("dynamic")}
                    className={`${styles.tierBtn} ${websiteType === "dynamic" ? styles.tierBtnActive : ""}`}
                  >
                    <span className={styles.tierName}>Dynamic Website</span>
                    <span className={styles.tierDesc}>Interactive, database systems, admin panels, e-commerce.</span>
                  </button>
                </div>
              </div>

              {/* Number of Pages Slider */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderLabel}>
                  <span className={styles.labelText}>Number of Website Pages</span>
                  <span className={styles.labelValue}>{pages} Pages</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={pages}
                  onChange={(e) => setPages(parseInt(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>

              {/* Domain & Hosting Checkboxes */}
              <div className={styles.sliderGroup}>
                <span className={styles.labelText} style={{ display: 'block', marginBottom: '12px' }}>Add-ons &amp; Hosting Setup</span>
                <div className={styles.checkboxGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={includeDomain}
                      onChange={(e) => setIncludeDomain(e.target.checked)}
                      className={styles.checkboxInput}
                    />
                    Include Domain (.com/.in/.org) — (+₹800/yr)
                  </label>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={includeHosting}
                      onChange={(e) => setIncludeHosting(e.target.checked)}
                      className={styles.checkboxInput}
                    />
                    Include High-Performance Hosting — (+₹{websiteType === "static" ? "1,800" : "10,000"}/yr)
                  </label>
                </div>
              </div>

              {/* Premium Features Checkboxes */}
              <div className={styles.sliderGroup}>
                <span className={styles.labelText} style={{ display: 'block', marginBottom: '12px' }}>Premium integrations</span>
                <div className={styles.checkboxGroup}>
                  {websiteType === "dynamic" && (
                    <>
                      <label className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={ecommerce}
                          onChange={(e) => setEcommerce(e.target.checked)}
                          className={styles.checkboxInput}
                        />
                        E-Commerce &amp; Payment Gateway — (+₹10,000)
                      </label>
                      <label className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={auth}
                          onChange={(e) => setAuth(e.target.checked)}
                          className={styles.checkboxInput}
                        />
                        User Authentication &amp; Profiles — (+₹8,000)
                      </label>
                    </>
                  )}
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={seo}
                      onChange={(e) => setSeo(e.target.checked)}
                      className={styles.checkboxInput}
                    />
                    SEO Audit &amp; Google Console Setup — (+₹3,000)
                  </label>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={support}
                      onChange={(e) => setSupport(e.target.checked)}
                      className={styles.checkboxInput}
                    />
                    24/7 Priority Maintenance &amp; SSL Cert — (+₹5,000/yr)
                  </label>
                </div>
              </div>

            </div>

            {/* Results Display Card */}
            <div className={styles.resultsCard}>
              <h3 className={styles.sectionTitle} style={{ color: '#fff', borderBottomColor: 'rgba(255,255,255,0.1)' }}>Website Pricing Summary</h3>
              
              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>One-Time Development Cost</span>
                <span className={styles.resultValue} style={{ fontSize: '26px', color: '#f9841a', fontWeight: '900' }}>
                  ₹{devCost.toLocaleString("en-IN")}
                </span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Annual Hosting &amp; Domain Renewal</span>
                <span className={styles.resultValue} style={{ fontSize: '20px', color: '#48bb78' }}>
                  ₹{recurringCost.toLocaleString("en-IN")} / yr
                </span>
              </div>

              {/* Cost Breakdown */}
              <div className={styles.breakdownContainer}>
                <h4 className={styles.breakdownTitle}>Estimated Breakdown</h4>
                <ul className={styles.breakdownList}>
                  <li className={styles.breakdownItem}>
                    <span>Base Development ({websiteType === "static" ? "Static" : "Dynamic"}):</span>
                    <span className={styles.breakdownItemVal}>₹{websiteType === "static" ? "8,000" : "25,000"}</span>
                  </li>
                  <li className={styles.breakdownItem}>
                    <span>Custom Pages ({pages} Pages):</span>
                    <span className={styles.breakdownItemVal}>₹{(pages * (websiteType === "static" ? 1000 : 2000)).toLocaleString("en-IN")}</span>
                  </li>
                  {ecommerce && (
                    <li className={styles.breakdownItem}>
                      <span>E-Commerce Integration:</span>
                      <span className={styles.breakdownItemVal}>+₹10,000</span>
                    </li>
                  )}
                  {auth && (
                    <li className={styles.breakdownItem}>
                      <span>User Authentication &amp; DB:</span>
                      <span className={styles.breakdownItemVal}>+₹8,000</span>
                    </li>
                  )}
                  {seo && (
                    <li className={styles.breakdownItem}>
                      <span>Google SEO Optimization:</span>
                      <span className={styles.breakdownItemVal}>+₹3,000</span>
                    </li>
                  )}
                  {includeDomain && (
                    <li className={styles.breakdownItem}>
                      <span>Domain Registration (1st year):</span>
                      <span className={styles.breakdownItemVal}>+₹800</span>
                    </li>
                  )}
                  {includeHosting && (
                    <li className={styles.breakdownItem}>
                      <span>Cloud Hosting Setup (1st year):</span>
                      <span className={styles.breakdownItemVal}>+₹{websiteType === "static" ? "1,800" : "10,000"}</span>
                    </li>
                  )}
                  {support && (
                    <li className={styles.breakdownItem}>
                      <span>Priority SSL &amp; Support:</span>
                      <span className={styles.breakdownItemVal}>+₹5,000</span>
                    </li>
                  )}
                </ul>
              </div>

              <p style={{ fontSize: '13.5px', color: '#a0aec0', lineHeight: '1.6', margin: '25px 0', textAlign: 'center' }}>
                All calculations are estimates. Taxes are not included. Proposal details will be pre-filled on the contact page.
              </p>

              <button type="button" onClick={handleGetWebsiteQuote} className={styles.actionBtn}>
                Request Proposal for This Build
              </button>
            </div>

          </div>
        )}

        {/* =======================================================
            TAB 2: ORIGINAL AWS CLOUD COST SAVINGS CALCULATOR
            ======================================================= */}
        {activeTab === "cloud" && (
          <div className={styles.grid}>
            
            {/* Inputs Card */}
            <div className={styles.card}>
              <h3 className={styles.sectionTitle}>Configure Infrastructure</h3>
              
              {/* Servers Slider */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderLabel}>
                  <span className={styles.labelText}>Compute Instances (Servers)</span>
                  <span className={styles.labelValue}>{servers} Units</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={servers}
                  onChange={(e) => setServers(parseInt(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>

              {/* Storage Slider */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderLabel}>
                  <span className={styles.labelText}>Database / File Storage</span>
                  <span className={styles.labelValue}>{storage >= 1000 ? `${(storage / 1000).toFixed(1)} TB` : `${storage} GB`}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="10000"
                  step="50"
                  value={storage}
                  onChange={(e) => setStorage(parseInt(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>

              {/* Bandwidth Slider */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderLabel}>
                  <span className={styles.labelText}>Monthly Outbound Bandwidth</span>
                  <span className={styles.labelValue}>{bandwidth >= 1000 ? `${(bandwidth / 1000).toFixed(1)} TB` : `${bandwidth} GB`}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="20000"
                  step="100"
                  value={bandwidth}
                  onChange={(e) => setBandwidth(parseInt(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>

              {/* Support Tier Selectors */}
              <div className={styles.sliderGroup}>
                <span className={styles.labelText} style={{ display: 'block', marginBottom: '12px' }}>Support Tier</span>
                <div className={styles.tierGroup}>
                  <button
                    type="button"
                    onClick={() => setTier("standard")}
                    className={`${styles.tierBtn} ${tier === "standard" ? styles.tierBtnActive : ""}`}
                  >
                    <span className={styles.tierName}>Standard</span>
                    <span className={styles.tierDesc}>Business hour email updates & basic system monitoring.</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTier("enterprise")}
                    className={`${styles.tierBtn} ${tier === "enterprise" ? styles.tierBtnActive : ""}`}
                  >
                    <span className={styles.tierName}>Enterprise</span>
                    <span className={styles.tierDesc}>24x7 premium emergency calls & custom cloud dashboards.</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Results Display Card */}
            <div className={styles.resultsCard}>
              <h3 className={styles.sectionTitle} style={{ color: '#fff', borderBottomColor: 'rgba(255,255,255,0.1)' }}>Estimated Monthly Costs</h3>
              
              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Standard Legacy Cloud</span>
                <span className={styles.resultValue} style={{ textDecoration: 'line-through', color: '#e53e3e' }}>
                  ${legacyCost} / mo
                </span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>TwinsCloud Optimized AWS</span>
                <span className={styles.resultValue} style={{ fontSize: '22px', color: '#48bb78' }}>
                  ${optimizedCost} / mo
                </span>
              </div>

              {/* Savings Badge */}
              <div className={styles.resultSavings}>
                <span className={styles.savingsLabel}>Estimated Savings</span>
                <span className={styles.savingsValue}>${savings} / month</span>
              </div>

              <p style={{ fontSize: '13px', color: '#a0aec0', lineHeight: '1.5', marginBottom: '30px', textAlign: 'center' }}>
                Optimizations achieved through auto-scaling groups, CDN integration, and reserved spot instance pools.
              </p>

              <button type="button" onClick={handleGetSetup} className={styles.actionBtn}>
                Request This Optimized Quote
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
