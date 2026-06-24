"use client";

import React, { useState } from "react";
import styles from "./TechVisualizer.module.css";

const TECH_CATALOG = [
  // Frontend
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    icon: "⚡",
    desc: "We build modern, SEO-optimized frontends using Next.js, leveraging Server Components and SSR to combine speed with dynamic client-side hydration.",
    connections: ["Node.js", "REST APIs", "AWS Cloud"]
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    icon: "⚛️",
    desc: "React powers our core user interfaces. We design highly reusable component hierarchies, optimized hook workflows, and robust client states.",
    connections: ["Next.js", "Express", "REST APIs"]
  },
  {
    id: "htmlcss",
    name: "HTML5 & CSS3",
    category: "Frontend",
    icon: "🎨",
    desc: "We utilize modern CSS variables, CSS grid layouts, and advanced keyframe animations to build stunning, responsive user interfaces.",
    connections: ["React", "Next.js"]
  },
  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    icon: "🟢",
    desc: "Node.js acts as the runtime environment for our backend microservices, handling thousands of concurrent read-write tasks through non-blocking event loops.",
    connections: ["Express", "MongoDB", "Docker"]
  },
  {
    id: "express",
    name: "Express",
    category: "Backend",
    icon: "🚂",
    desc: "Express provides the foundation for our REST and GraphQL APIs. We structure security middlewares, rate-limiters, and route mappings cleanly.",
    connections: ["Node.js", "React", "REST APIs", "MongoDB"]
  },
  {
    id: "restapi",
    name: "REST APIs",
    category: "Backend",
    icon: "🔌",
    desc: "We design standards-compliant APIs with secure JSON formatting, precise HTTP status returns, and complete endpoint documentation.",
    connections: ["Next.js", "React", "Express", "PostgreSQL"]
  },
  // Database
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    icon: "🍃",
    desc: "MongoDB houses our dynamic unstructured data. We design indexed collections, compound keys, and optimized aggregate queries for high performance.",
    connections: ["Node.js", "Express", "Redis"]
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    category: "Database",
    icon: "🐘",
    desc: "For structured, transaction-sensitive financial or enterprise data, we rely on PostgreSQL database engines with strict foreign keys and constraints.",
    connections: ["REST APIs", "Node.js", "Redis"]
  },
  {
    id: "redis",
    name: "Redis",
    category: "Database",
    icon: "⚡",
    desc: "We integrate Redis as a low-latency caching layer to speed up heavy API responses and handle session states efficiently.",
    connections: ["MongoDB", "PostgreSQL", "Node.js"]
  },
  // Cloud & DevOps
  {
    id: "aws",
    name: "AWS Cloud",
    category: "Cloud / DevOps",
    icon: "☁️",
    desc: "As an AWS Reseller Partner, we configure EC2 auto-scaling groups, secure S3 policies, CloudFront CDN edge distributions, and RDS databases.",
    connections: ["Next.js", "Docker", "Kubernetes", "Terraform"]
  },
  {
    id: "docker",
    name: "Docker",
    category: "Cloud / DevOps",
    icon: "🐳",
    desc: "We containerize backend and frontend systems using Docker to guarantee that applications run identically in local dev and staging/prod environments.",
    connections: ["Node.js", "AWS Cloud", "Kubernetes"]
  },
  {
    id: "k8s",
    name: "Kubernetes",
    category: "Cloud / DevOps",
    icon: "☸️",
    desc: "For massive container clusters, we implement Kubernetes (EKS) to handle rolling deployments, health checks, self-healing, and dynamic ingress controls.",
    connections: ["Docker", "AWS Cloud", "Terraform"]
  },
  {
    id: "terraform",
    name: "Terraform",
    category: "Cloud / DevOps",
    icon: "🛠️",
    desc: "We write Infrastructure as Code (IaC) using Terraform configurations. This allows us to spin up entire development and production AWS envs in seconds.",
    connections: ["AWS Cloud", "Kubernetes"]
  }
];

export default function TechVisualizer() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [selectedTech, setSelectedTech] = useState(TECH_CATALOG[0]); // Default first item

  const categories = ["Frontend", "Backend", "Database", "Cloud / DevOps"];

  // Filter catalog items
  const filteredTech = TECH_CATALOG.filter((item) => item.category === activeCategory);

  const handleSelectTech = (tech) => {
    setSelectedTech(tech);
  };

  const handleSelectTab = (cat) => {
    setActiveCategory(cat);
    // Auto-select first item of the new category
    const items = TECH_CATALOG.filter((item) => item.category === cat);
    if (items.length > 0) {
      setSelectedTech(items[0]);
    }
  };

  return (
    <div className={styles.visualizer}>
      
      {/* Title */}
      <div className={styles.titleSection}>
        <h3 className={styles.title}>
          Our <span className={styles.titleHighlight}>Technology Stacks</span>
        </h3>
        <p className={styles.subtitle}>
          Click through the categories and items below to explore how we orchestrate cloud and software engineering workflows.
        </p>
      </div>

      {/* Categories Tabs */}
      <div className={styles.tabs}>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => handleSelectTab(cat)}
            className={`${styles.tabBtn} ${activeCategory === cat ? styles.tabBtnActive : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Visualizer Grid */}
      <div className={styles.grid}>
        
        {/* Items Grid */}
        <div className={styles.itemsList}>
          {filteredTech.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelectTech(item)}
              className={`${styles.techItem} ${selectedTech.id === item.id ? styles.techItemActive : ""}`}
            >
              <span className={styles.techIcon}>{item.icon}</span>
              <span className={styles.techName}>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Details Panel */}
        <div className={styles.detailsCard}>
          <div className={styles.detailsHeader}>
            <div className={styles.detailsIcon}>{selectedTech.icon}</div>
            <div>
              <h4 className={styles.detailsTitle}>{selectedTech.name}</h4>
              <span className={styles.detailsTitleSub}>{selectedTech.category} Integration</span>
            </div>
          </div>
          <p className={styles.detailsText}>{selectedTech.desc}</p>
          
          <div className={styles.connections}>
            <span className={styles.connectionsTitle}>Connected Technologies</span>
            <div className={styles.connectionsTags}>
              {selectedTech.connections.map((conn) => (
                <span key={conn} className={styles.connectionTag}>
                  {conn}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
