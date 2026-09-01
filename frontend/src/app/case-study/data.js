export const CASE_STUDIES = [
  {
    slug: "bimla-international-public-school-erp",
    title: "Bimla International Public School (BIPS) Portal & ERP",
    client: "Bimla International Public School, Lucknow",
    tags: ["MERN Stack", "Education Tech", "Central ERP"],
    summary: "A unified public admissions portal and centralized school ERP for a Lucknow institution, replacing manual spreadsheets with real-time dashboards.",
    challenge: "Bimla International Public School (BIPS) needed a high-performance public portal to manage admissions and build a clean online presence. Additionally, school administrators required a secure, centralized ERP system to manage student profiles, fee collections, role permissions, and academic calendars, replacing slow manual spreadsheets.",
    solution: "We architected a unified solution built completely on the MERN stack. The public-facing portal provides responsive interfaces for parents and students. The admin ERP system serves as a dashboard displaying real-time school statistics, daily fee collection logs, auto-calculated student-to-teacher distributions, and database audit logs.",
    results: [
      "Centralized School ERP dashboard managing 765+ active students and 22+ teachers.",
      "Real-time fee collection graph and ledger summaries tracking up to 90,050 INR in collections.",
      "High PageSpeed public website built with React, reducing page load latency by 45%.",
      "AWS-based deployment featuring automated backup guardrails and data encryption at rest."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS EC2 & S3", "JWT Security", "Mongoose ORM"],
    images: [
      { src: "/case-study-bips-web.png", caption: "BIPS Public-Facing Web Portal" },
      { src: "/case-study-bips-erp.png", caption: "BIPS Admin ERP Management Dashboard" }
    ],
    relatedService: "school-management-software"
  },
  {
    slug: "architecture-herald",
    title: "Architecture Herald Digital Magazine Portal",
    client: "Architecture Herald",
    tags: ["MERN Stack", "Booking System", "Payment API"],
    summary: "A payment-integrated editorial platform with automated interview scheduling, resolving transaction failures and calendar conflicts.",
    challenge: "As a premier editorial magazine re-defining how luxury architecture and interior design are showcased, Architecture Herald faced major UI/UX bottlenecks. Crucially, they suffered from registration transaction failures, manual session slot management errors for creator interviews, and slow page loading speeds.",
    solution: "We deployed a fully responsive, high-performance web portal built on the MERN stack. We integrated an automated calendar slot allocation system for candidate registrations and virtual interviews. The registration portal was optimized to handle bulk form payloads, backed by multiple payment gateways (Razorpay, Stripe) for frictionless domestic and international design submissions.",
    results: [
      "Complete UI Design and UX overhaul aligned to premium editorial brand guidelines.",
      "Integrated multiple payment gateway pipelines (Stripe & Razorpay) resolving transaction conversions.",
      "Automated interview slot allocation dashboard managing dates with zero calendar overlaps.",
      "Continuous monthly cloud maintenance, caching rules, and asset optimization, resulting in 99.9% uptime."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "Razorpay API", "Nginx & PM2", "AWS Cloud"],
    images: [
      { src: "/case-study-herald.png", caption: "Architecture Herald Editorial Portal" }
    ],
    relatedService: "web-development"
  },
  {
    slug: "machail-mata-yatra-portal",
    title: "Shri Machail Mata Yatra 2026 Devotee Portal",
    client: "Shri Machail Mata Yatra",
    tags: ["MERN Stack", "Govt IT System", "Cloud Scaling"],
    summary: "A high-concurrency pilgrimage registration portal with real-time slot tracking, OTP verification, and auto-scaling AWS infrastructure.",
    challenge: "The Shri Machail Mata Yatra is a major annual pilgrimage that brings hundreds of thousands of devotees to the region. Administrators needed a reliable devotee registration and slot booking portal that could display real-time slot availability, prevent double bookings, verify mobile numbers via OTP systems, handle photo uploads, and scale dynamically during peak traffic spikes.",
    solution: "We designed and engineered a MERN-stack devotee portal. The dashboard features a real-time availability check (tracking Total, Booked, and Available slots dynamically on date selection). We integrated secure mobile OTP verifications to eliminate automated bot entries, and built cloud-native hosting architectures on AWS to guarantee zero-downtime, sub-second responses during high concurrency traffic periods.",
    results: [
      "Integrated real-time database slot counters dynamically matching available passes.",
      "OTP verification SMS pipeline securing the portal against spam registrations.",
      "Optimized image and photo upload streams, reducing bandwidth utilization.",
      "Deployed on auto-scaling AWS structures, successfully managing over 50,000 daily registrations."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS Auto Scaling", "OTP Service Integration", "CloudWatch Metrics"],
    images: [
      { src: "/case-study-machail.jpg", caption: "Shri Machail Mata Yatra 2026 Devotee Portal" }
    ],
    relatedService: "apps-on-cloud"
  },
  {
    slug: "design-vision-awards-25",
    title: "Design & Vision Built Environment Awards (D&V '25)",
    client: "Design & Vision Awards & Conference",
    tags: ["PHP Stack", "E-Commerce", "Admin Panel"],
    summary: "An e-commerce ticketing and book-store checkout system for a 600+ delegate architecture conference, resolving payment and load bottlenecks.",
    challenge: "The D&V '25 Awards & Conference at Novotel Goa Panjim brings together over 600+ industry leaders in architecture and real estate. The organizers faced severe checkout issues, domestic and international payment gateway problems, UI design issues, and an unoptimized online book store module that led to transaction drops.",
    solution: "We designed and deployed a comprehensive PHP-based event portal. We built an online e-commerce book store and ticket checkout flow, resolving critical checkout and loading bottlenecks. Multiple payment gateways (Razorpay, Stripe) were integrated with absolute currency scaling. A secure admin console was built to help managers track registrations, invoice summaries, and sales metrics, backed by continuous site maintenance audits.",
    results: [
      "Built a complete book store and conference ticket e-commerce system with secure checkouts.",
      "Integrated multiple payment gateway APIs resolving transaction bottlenecks.",
      "Custom administrative analytics panel tracking delegate registration metrics in real-time.",
      "Overhauled UI/UX layout alignment for high readability and premium branding depth."
    ],
    tech: ["PHP", "MySQL Database", "Laravel Framework", "Apache / Nginx", "Razorpay SDK", "Stripe SDK", "AWS Hosting"],
    images: [
      { src: "/case-study-designawards.png", caption: "D&V '25 Leadership Awards Portal" }
    ],
    relatedService: "web-development"
  },
  {
    slug: "pincode-credits-financial-platform",
    title: "Pincode Credits Financial Services Platform",
    client: "Pincode Credits",
    tags: ["Enterprise", "Fintech"],
    summary: "A transaction-audited ledger backend for credit line distributions, hardened for data transmission security and backup compliance.",
    challenge: "Pincode Credits required a highly secure backend to manage credit line distributions with full transaction auditability, where every ledger entry needed to be traceable and every backup verifiably compliant.",
    solution: "We architected a highly secure, transaction-audited ledger backend for credit line distributions, hardening data transmission security and database backup compliance on containerized AWS infrastructure.",
    results: [
      "Transaction-audited ledger backend supporting credit line distribution workflows.",
      "Hardened data transmission security across all API endpoints.",
      "Database backup compliance processes verified against audit requirements.",
      "Containerized deployment on AWS ECS for consistent, repeatable releases."
    ],
    tech: ["Node.js", "Express", "PostgreSQL", "Docker", "AWS ECS"],
    images: [
      { src: "/client-pincode-credits.png", caption: "Pincode Credits Platform" }
    ],
    relatedService: "cloud-consulting"
  }
];

export function getCaseStudyBySlug(slug) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
