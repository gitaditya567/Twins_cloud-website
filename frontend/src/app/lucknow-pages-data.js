// Shared data for the Lucknow "money pages" (flat, keyword-exact URLs).
// Each entry drives one top-level route via components/LucknowMoneyPageTemplate.jsx.

export const LUCKNOW_CLIENTS = [
  { name: "Lucknow Public Schools & Colleges", logo: "/client-lucknow-public-school.png" },
  { name: "Delhi Public School Sitapur", logo: "/client-dps-sitapur.png" },
  { name: "BNCET Lucknow", logo: "/client-bncet.png" },
  { name: "SRMU", logo: "/client-srmu.png" },
  { name: "Bimla International Public School", logo: "/client-bips.png" }
];

export const LUCKNOW_TESTIMONIAL = {
  company: "LPS Lucknow",
  name: "Luvkush Singh",
  role: "IT Head of LPS Lucknow",
  image: "/testimonial-luvkush.png",
  quote: "Exceptional Service From This Tech Company! Their Innovative Solutions Have Transformed Our Business Operations, Boosting Efficiency And Productivity. The Team's Expertise And Prompt Support Have Been Invaluable. Seamless Integration And User-Friendly Interfaces Make Them Stand Out. Highly Recommend Their Cutting-Edge Tech Solutions!"
};

export const LUCKNOW_MONEY_PAGES = [
  {
    slug: "website-development-company-in-lucknow",
    title: "Website Development Company in Lucknow",
    metaDescription: "TwinsCloud is a website development company in Lucknow building fast, SEO-ready business and institutional websites on Next.js and the MERN stack. Based in Lucknow, serving all of UP.",
    badge: "Web & App Development",
    h1: "Website Development Company in Lucknow",
    heroSubtitle: "We design and build responsive, SEO-optimized business and institutional websites for companies and schools across Lucknow — from our own Lucknow office.",
    intro: [
      "If you're searching for a website development company in Lucknow, the question that matters isn't who can build a website — it's who can build one that loads fast, ranks in search, and keeps working after launch. TwinsCloud is a Lucknow-based software engineering team that builds custom websites on Next.js and the MERN stack, the same technology stack that powers this site.",
      "We've built public-facing portals and admin systems for institutions including Bimla International Public School, Architecture Herald, and Lucknow Public Schools & Colleges — real projects with real production traffic, not template installs."
    ],
    servicesCovered: [
      { slug: "web-development", note: "Custom Next.js / React websites and web applications" },
      { slug: "apps-on-cloud", note: "Cloud-native hosting and scalable architecture" },
      { slug: "cloud-consulting", note: "AWS hosting, performance, and cost audits" }
    ],
    differentiators: [
      "Built on Next.js — the same SEO-friendly, server-rendered stack behind this page",
      "In-house team based in Lucknow, not an outsourced contractor pool",
      "AWS Consulting Partner — hosting and performance handled by the same team that builds your site",
      "10+ years of engineering experience across 200+ delivered projects"
    ],
    faqs: [
      { q: "How much does a business website cost in Lucknow?", a: "It depends on scope — a brochure site, an e-commerce store, and a custom web application all price differently. Request a free quote via our RFQ form and we'll scope it against your actual requirements rather than a flat rate card." },
      { q: "Do you build e-commerce websites?", a: "Yes. We build custom e-commerce storefronts and checkout flows — including the payment gateway integrations (Razorpay, Stripe) we've shipped for past clients like the Design & Vision Awards ticketing platform." },
      { q: "Will my website be SEO-optimized?", a: "Yes. We build on Next.js specifically for its server-side rendering and PageSpeed performance advantages, and we handle on-page SEO fundamentals — meta tags, structured data, sitemaps — as part of every build." },
      { q: "Do you support the website after launch?", a: "Yes, we offer ongoing maintenance and AMC (Annual Maintenance Contract) support covering updates, backups, and bug fixes." }
    ],
    siblings: ["software-development-company-in-lucknow", "mobile-app-development-company-in-lucknow"]
  },
  {
    slug: "school-management-software-in-lucknow",
    title: "School Management Software in Lucknow | School ERP",
    metaDescription: "School management software in Lucknow from TwinsCloud: admissions, fee collection, attendance, timetables, and report cards in one ERP dashboard. Built and supported locally.",
    badge: "School ERP Systems",
    h1: "School Management Software in Lucknow",
    heroSubtitle: "One ERP dashboard for admissions, fees, attendance, timetables, and report cards — built for schools in Lucknow and across Uttar Pradesh.",
    intro: [
      "TwinsCloud builds school management software for institutions in Lucknow that are still running admissions, fee collection, and attendance through spreadsheets and paper registers. Our ERP consolidates all of it into one dashboard for administrators, teachers, and parents.",
      "This isn't a generic template — it's the same system we built and deployed for Bimla International Public School, currently managing 765+ active students and 22+ teachers with real-time fee collection tracking."
    ],
    servicesCovered: [
      { slug: "school-management-software", note: "Admissions, fees, attendance, and timetable ERP" },
      { slug: "report-card-software", note: "Automated grade calculation and result portals" }
    ],
    differentiators: [
      "Proven in production at a real Lucknow school — not a demo build",
      "Consolidated dashboards for admins, teachers, and parents in one login",
      "Automated fee billing with payment gateway integration",
      "Local Lucknow team for onboarding, training, and support"
    ],
    faqs: [
      { q: "What does school management software include?", a: "Our ERP covers admissions, fee billing and collection tracking, attendance registers, timetables, and parent/teacher communication — all from one admin dashboard." },
      { q: "Can it generate report cards automatically?", a: "Yes — see our dedicated report card software, which automates grade and GPA calculation and distributes results through a secure parent/student portal." },
      { q: "Is the software built for CBSE, ICSE, or UP Board schools?", a: "Yes, the grading and report structures are configurable to match your board's format." },
      { q: "How long does implementation take?", a: "It depends on how many modules you need and your existing data. Schedule a free consultation and we'll give you a realistic timeline for your school." },
      { q: "Do you provide training for school staff?", a: "Yes, onboarding and staff training are part of every school ERP deployment." }
    ],
    siblings: ["school-erp-software-development-company-in-lucknow", "website-development-company-in-lucknow"]
  },
  {
    slug: "mobile-app-development-company-in-lucknow",
    title: "Mobile App Development Company in Lucknow",
    metaDescription: "TwinsCloud builds cross-platform mobile apps for schools, retail, and service businesses in Lucknow — backed by the same in-house MERN and cloud engineering team behind our web projects.",
    badge: "Mobile & Cross-Platform Apps",
    h1: "Mobile App Development Company in Lucknow",
    heroSubtitle: "Cross-platform mobile apps built by the same in-house engineering team that ships our web and cloud projects — based in Lucknow.",
    intro: [
      "TwinsCloud extends our MERN stack and cloud engineering expertise into cross-platform mobile app development for businesses, schools, and service providers in Lucknow. Rather than handing your app to a separate freelance team, the same engineers who build your backend and cloud infrastructure build the app that talks to it.",
      "Our approach favors cross-platform frameworks that share code between iOS and Android, which keeps development timelines and maintenance costs lower than maintaining two fully separate native codebases."
    ],
    servicesCovered: [
      { slug: "apps-on-cloud", note: "Cloud-native backends and APIs for mobile apps" },
      { slug: "web-development", note: "Companion web dashboards and admin panels" },
      { slug: "cloud-consulting", note: "AWS infrastructure sized for mobile traffic patterns" }
    ],
    differentiators: [
      "One team for the app, the backend API, and the cloud infrastructure behind it",
      "AWS Consulting Partner — push notifications, storage, and scaling handled in-house",
      "Built alongside real production systems, not outsourced to a third-party shop",
      "Lucknow-based team for direct, ongoing communication"
    ],
    faqs: [
      { q: "Do you build apps for both iOS and Android?", a: "Yes, we build cross-platform apps that run on both platforms from a shared codebase, which is faster to ship and cheaper to maintain than two separate native apps." },
      { q: "Can you build the backend API for an existing app idea?", a: "Yes — we regularly build the Node.js/Express backend and AWS infrastructure that mobile apps depend on, in addition to the app itself." },
      { q: "What kind of apps do you build?", a: "Business utility apps, school communication apps, service booking apps, and internal tools — talk to us about your specific use case via a free consultation." },
      { q: "Do you handle app store submission?", a: "Yes, we can guide submission to the Apple App Store and Google Play Store as part of the project." }
    ],
    siblings: ["website-development-company-in-lucknow", "software-development-company-in-lucknow"]
  },
  {
    slug: "software-development-company-in-lucknow",
    title: "Software Development Company in Lucknow",
    metaDescription: "TwinsCloud is a software development company in Lucknow delivering custom web applications, school ERP systems, AWS cloud consulting, and DevOps automation from our local office.",
    badge: "Custom Software Development",
    h1: "Software Development Company in Lucknow",
    heroSubtitle: "Custom software, cloud infrastructure, and DevOps automation — engineered and supported from our Lucknow office.",
    intro: [
      "TwinsCloud Private Limited is a software development company based in Lucknow, delivering custom web applications, ERP systems, and cloud infrastructure for businesses, schools, and public-sector projects across Uttar Pradesh and India.",
      "We're also an AWS Consulting Partner, which means the same team that writes your application code also architects and manages the cloud infrastructure it runs on — one point of accountability instead of a hand-off between a dev shop and a separate hosting vendor."
    ],
    servicesCovered: [
      { slug: "web-development", note: "Custom web applications on Next.js and the MERN stack" },
      { slug: "school-management-software", note: "School ERP and management systems" },
      { slug: "cloud-consulting", note: "AWS architecture, audits, and cost optimization" },
      { slug: "devops-automation", note: "CI/CD pipelines and infrastructure automation" },
      { slug: "aws-cloud-migration", note: "Zero-downtime migrations to AWS" }
    ],
    differentiators: [
      "AWS Consulting Partner — cloud infrastructure and application code from one team",
      "10+ years of engineering experience, 200+ projects delivered",
      "Real institutional and enterprise clients: NIT Patna, Delhi Public School Sitapur, Pincode Credits",
      "Lucknow-based team available for in-person meetings"
    ],
    faqs: [
      { q: "What kind of software do you build?", a: "Custom web applications, school ERP systems, fintech backends, and government/institutional portals — see our case studies for real examples we've shipped." },
      { q: "Do you only build web software, or also handle infrastructure?", a: "Both. We're an AWS Consulting Partner, so we handle cloud architecture, migrations, and DevOps automation alongside application development." },
      { q: "Can you take over an existing project from another vendor?", a: "Yes, we regularly audit and take over existing codebases and infrastructure — talk to us about your current setup." },
      { q: "How do you price custom software projects?", a: "Pricing depends on scope — request a quote via our RFQ form and we'll come back with a scoped estimate rather than a generic rate card." }
    ],
    siblings: ["website-development-company-in-lucknow", "school-erp-software-development-company-in-lucknow"]
  },
  {
    slug: "school-erp-software-development-company-in-lucknow",
    title: "School ERP Software Development Company in Lucknow",
    metaDescription: "TwinsCloud develops custom school ERP software for institutions in Lucknow — requirements gathering, custom modules, legacy data migration, and ongoing support from a local team.",
    badge: "School ERP Development",
    h1: "School ERP Software Development Company in Lucknow",
    heroSubtitle: "We develop custom school ERP systems from the ground up — not a one-size-fits-all product, but software built around how your institution actually runs.",
    intro: [
      "Where our school management software page covers the ready-to-deploy ERP product, this page is for institutions that need custom ERP development: a system built around specific workflows, migrated from an existing legacy system, or integrated with software you already use.",
      "As a school ERP software development company based in Lucknow, we run a full requirements-gathering process with your administrative staff before writing a line of code — because the fastest way to build the wrong ERP is to start from a template."
    ],
    servicesCovered: [
      { slug: "school-management-software", note: "Core ERP modules: admissions, fees, attendance, timetables" },
      { slug: "report-card-software", note: "Custom grading and report card automation" }
    ],
    differentiators: [
      "Requirements-first process, not a fixed template forced onto your institution",
      "Legacy data migration from spreadsheets or older systems, handled without data loss",
      "Built on the same MERN stack architecture proven at Bimla International Public School",
      "Ongoing development and support from a Lucknow-based team, not a remote call center"
    ],
    faqs: [
      { q: "How is this different from off-the-shelf school ERP software?", a: "Off-the-shelf products force your processes to match their software. We gather your actual workflows first, then build or configure modules around them — including custom fields, approval flows, or integrations off-the-shelf products don't support." },
      { q: "Can you migrate our existing student data?", a: "Yes, migrating data from spreadsheets or a legacy system into the new ERP is part of the development process." },
      { q: "Do you develop custom modules beyond the standard ERP feature set?", a: "Yes — if your institution needs something outside standard admissions/fees/attendance/timetable modules, that's exactly what custom development is for. Tell us the requirement during a consultation." },
      { q: "What's the difference between this page and your School Management Software page?", a: "School Management Software describes our ready ERP product and its modules. This page is for institutions that need custom development work — new modules, legacy migrations, or integrations — on top of or instead of the standard product." }
    ],
    siblings: ["school-management-software-in-lucknow", "software-development-company-in-lucknow"]
  }
];

export function getMoneyPageBySlug(slug) {
  return LUCKNOW_MONEY_PAGES.find((p) => p.slug === slug);
}
