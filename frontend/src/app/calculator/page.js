"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./calculator.module.css";

export default function CalculatorPage() {
  const router = useRouter();
  
  // States for Calculator Slider Inputs
  const [servers, setServers] = useState(5);
  const [storage, setStorage] = useState(500); // GB
  const [bandwidth, setBandwidth] = useState(1000); // GB
  const [tier, setTier] = useState("standard"); // standard | enterprise

  // Computed Cost States
  const [legacyCost, setLegacyCost] = useState(0);
  const [optimizedCost, setOptimizedCost] = useState(0);
  const [savings, setSavings] = useState(0);

  // Recalculate values whenever inputs change
  useEffect(() => {
    // 1. Legacy Costs (Inefficient legacy host pricing)
    const legacyServerCost = servers * 40;
    const legacyStorageCost = storage * 0.15;
    const legacyBandwidthCost = bandwidth * 0.12;
    const legacySupportFee = tier === "enterprise" ? 150 : 0;
    const totalLegacy = Math.round(legacyServerCost + legacyStorageCost + legacyBandwidthCost + legacySupportFee);

    // 2. TwinsCloud Optimized Costs (AWS right-sized instances + CloudFront CDN + S3 Intelligent-Tiering)
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
    // Save configuration details to SessionStorage to automatically prefill the RFQ Form
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
          <span className={styles.badge}>ROI Tool</span>
          <h1 className={styles.title}>
            AWS Cloud <span className={styles.highlight}>Cost Calculator</span>
          </h1>
          <p className={styles.subtitle}>
            Adjust the sliders below to estimate your monthly hosting overhead and discover how much you can save with TwinsCloud engineering optimization.
          </p>
        </header>

        {/* Calculator UI Grid */}
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
      </div>
    </div>
  );
}
