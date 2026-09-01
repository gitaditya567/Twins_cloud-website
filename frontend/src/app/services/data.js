export const SERVICES = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDesc: "Fast, modern, and high-performance applications built on the MERN stack with pristine UI/UX standards.",
    overview: "We design and build custom SPA and SSR web applications on Next.js, React, and Node.js — engineered for SEO performance, mobile-first responsiveness, and secure API integration. Every build is production-hardened before launch, not prototyped and abandoned.",
    deliverables: [
      "Custom SPA & SSR web applications using Next.js / React",
      "Secure RESTful / GraphQL API development",
      "Fully responsive, mobile-first, and premium CSS design",
      "SEO optimization & high PageSpeed performance scores"
    ]
  },
  {
    slug: "school-management-software",
    title: "School Management Software",
    shortDesc: "ERP portals featuring automated class schedules, fee collections, student tracking, and messaging hubs.",
    overview: "Our school ERP consolidates admissions, fee billing, timetables, attendance, and parent communication into one dashboard for administrators, teachers, and parents. Built and refined across real school deployments, not a generic template.",
    deliverables: [
      "Consolidated ERP dashboards for admins, teachers, and parents",
      "Automated fee billing engine with payment gateway integration",
      "Dynamic school timetables and attendance registers",
      "Push notifications and SMS/Email messaging center"
    ]
  },
  {
    slug: "report-card-software",
    title: "Report Card Software",
    shortDesc: "Comprehensive academic results parsing, grade calculations, and secure online report distribution portals.",
    overview: "Automate grade computation, GPA/CGPA calculation, and report card generation — then distribute results to students and parents through a secure portal instead of manual paperwork.",
    deliverables: [
      "Automated Grade & GPA Calculation engines",
      "Secure Student & Parent report retrieval portals",
      "Bulk PDF generation and secure cloud distribution",
      "Academic performance visual analytics dashboards"
    ]
  },
  {
    slug: "cloud-consulting",
    title: "Cloud Consulting Services",
    shortDesc: "Advanced cloud architectural audits, security compliance setups, and strategic resource cost optimization reviews.",
    overview: "As an AWS Consulting Partner, we run Well-Architected Framework audits, harden IAM permissions, and rebuild cost structures to cut cloud spend without sacrificing availability.",
    deliverables: [
      "Well-Architected Framework cloud audits",
      "Cost optimization and AWS budget control dashboards",
      "AWS IAM permission hardening & compliance reports",
      "High-availability multi-region setups planning"
    ]
  },
  {
    slug: "devops-automation",
    title: "DevOps Automation",
    shortDesc: "Automated CI/CD workflows, container scaling (Kubernetes), and Infrastructure as Code setups.",
    overview: "We replace manual deploys with automated CI/CD pipelines, containerize workloads with Docker and Kubernetes, and codify infrastructure with Terraform so releases ship faster with fewer incidents.",
    deliverables: [
      "Fully automated CI/CD pipelines (GitHub Actions, Jenkins)",
      "Kubernetes containerization and ECS orchestration",
      "Infrastructure as Code (IaC) scripting using Terraform",
      "Automated logging, alerting, and metrics collection"
    ]
  },
  {
    slug: "aws-cloud-migration",
    title: "AWS Cloud Migration & Consulting",
    shortDesc: "Zero-downtime database and backend application migrations to AWS with robust security guards.",
    overview: "We migrate legacy databases and backend applications to AWS using replication-based cutover strategies (AWS DMS), so production traffic never sees downtime during the switch.",
    deliverables: [
      "Safe database schema and storage migration strategy",
      "Zero-downtime replication using AWS DMS",
      "Post-migration regression testing and data integrity checks",
      "Network configuration and VPN/Direct Connect linkups"
    ]
  },
  {
    slug: "apps-on-cloud",
    title: "Apps On Cloud",
    shortDesc: "Serverless deployments, cloud-native hosting, multi-tenant architectures, and microservices integration.",
    overview: "We architect cloud-native applications with serverless compute, multi-tenant data models, and auto-scaling — built to absorb traffic spikes without manual intervention.",
    deliverables: [
      "AWS Lambda & serverless microservices setup",
      "Multi-tenant software architecture layout",
      "Auto-scaling rules and load balancer configuration",
      "Real-time cloud application performance monitoring"
    ]
  },
  {
    slug: "medical-tally-software",
    title: "Medical Tally Software",
    shortDesc: "Tailored clinic bookkeeping, automated invoice generators, inventory trackers, and regulatory audit boards.",
    overview: "Purpose-built bookkeeping and inventory software for clinics — automated invoicing, pharmaceutical stock alerts, and audit-ready access logs in one system.",
    deliverables: [
      "Clinic bookkeeping and income/expense ledgers",
      "Dynamic medical invoice and billing generators",
      "Pharmaceutical stock & inventory alert engines",
      "HIPAA-aligned data access logs and audit trails"
    ]
  }
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
