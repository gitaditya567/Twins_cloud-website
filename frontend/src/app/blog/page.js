"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./blog.module.css";

// Rich Technical Articles Data Set
export const BLOG_POSTS = [
  {
    slug: "aws-cost-optimization-startups",
    title: "AWS Cost Optimization: Best Practices for Startups",
    summary: "Discover how to right-size EC2 instances, leverage spot policies, and utilize S3 Intelligent-Tiering to slash monthly AWS billing by up to 40%.",
    category: "Cloud",
    date: "June 24, 2026",
    author: "Prince Kumar",
    readTime: "5 min read",
    content: `
<p>Cloud infrastructure is essential for modern applications, but cost efficiency remains a common hurdle. Startups often deploy oversized compute servers, leading to substantial wasted expenses. At TwinsCloud, we help organizations streamline their resource utilization to ensure high availability at minimum expense.</p>

<h2>1. Right-Sizing Compute Instances</h2>
<p>Analyze your active workloads over a 14-day window. If average CPU utilization is below 15%, you are running oversized instances. Transitioning from standard <code>t3.large</code> instances to <code>t3.medium</code> or modern <code>t4g.medium</code> (powered by AWS Graviton ARM processors) can immediately reduce server compute costs by over 30%.</p>

<pre><code># Example command to check EC2 instance metrics via AWS CLI
aws cloudwatch get-metric-statistics \\
  --namespace AWS/EC2 \\
  --metric-name CPUUtilization \\
  --dimensions Name=InstanceId,Value=i-1234567890abcdef0 \\
  --statistics Average \\
  --start-time 2026-06-10T00:00:00Z \\
  --end-time 2026-06-24T00:00:00Z \\
  --period 3600
</code></pre>

<h2>2. Leveraging Spot & Savings Plans</h2>
<p>For stateless microservices or background queues, always prefer Spot Instances. Spot instances allow you to bid on spare EC2 capacity with discounts up to 90% off on-demand rates. For baseline workloads, commit to an AWS Compute Savings Plan for 1 or 3 years to receive discounts up to 72%.</p>

<h2>3. Intelligent Data Storage Tiering</h2>
<p>Move logs and older assets from standard Amazon S3 storage buckets to S3 Intelligent-Tiering. This automatically shifts your files to cheaper archives (like Glacier Instant Retrieval) when they are not accessed for 30 consecutive days, keeping access latency immediate while decreasing storage bills.</p>
    `
  },
  {
    slug: "why-mern-stack-apps-in-2026",
    title: "Why We Build Dynamic MERN Stack Apps in 2026",
    summary: "An in-depth look at how MongoDB, Express, React, and Node.js combined with modern serverless execution provide the ultimate development velocity.",
    category: "MERN Stack",
    date: "June 18, 2026",
    author: "Ansh Singh",
    readTime: "6 min read",
    content: `
<p>The MERN Stack (MongoDB, Express, React, Node.js) remains the gold standard for full-stack engineering in 2026. The unified language barrier—using JavaScript and TypeScript from frontend components to database handlers—maximizes engineering velocity and simplifies team orchestration.</p>

<h2>1. JSON-to-JSON Pipeline Harmony</h2>
<p>Legacy software architectures suffer from database schema translations (mapping SQL records to backend logic to JSON payloads). MERN stack uses JSON documents in MongoDB, processes them natively in Express/Node.js, and serves them directly to React pages. This eliminates object-relational mapping (ORM) friction.</p>

<pre><code>// Native Node.js mongoose schema declaration
const rfqSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  projectDescription: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
</code></pre>

<h2>2. Sub-Second API Responses with Node.js</h2>
<p>Node.js uses an asynchronous, event-driven, non-blocking I/O loop. For database-intensive web applications (like booking, CRM, or SaaS tools), Node.js can handle thousands of concurrent queries without spawning separate threads, resulting in blazing-fast response cycles.</p>

<h2>3. React Hydration & Server Components</h2>
<p>In modern web stacks, React is deployed using hybrid frameworks like Next.js. Combining static server rendering (SSR) for blogs/pages and dynamic client-side hydration for forms provides the best of both worlds: robust SEO indexing and instant user interface responsiveness.</p>
    `
  },
  {
    slug: "devops-dockerizing-nodejs-ecs",
    title: "DevOps Pipelines: Dockerizing Node.js on AWS ECS",
    summary: "Learn how to build lightweight Docker containers, establish secure container registers, and orchestrate auto-scaling on Amazon ECS Fargate.",
    category: "DevOps",
    date: "June 12, 2026",
    author: "Akash Deep",
    readTime: "7 min read",
    content: `
<p>Containerization ensures that your web application runs identically across local development setups and public cloud servers. Below is the exact checklist TwinsCloud engineers follow to dockerize and deploy high-performance Node.js REST APIs.</p>

<h2>1. Designing a Lightweight Multi-Stage Dockerfile</h2>
<p>Avoid copying dev-dependencies or node modules directly into production builds. By using a multi-stage Docker build, you compile and test inside a heavy base environment, but produce a production image containing only compiled code and production modules.</p>

<pre><code># Multi-stage Dockerfile example
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:20-alpine AS runner
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=builder /app ./
EXPOSE 5000
CMD ["node", "server.js"]
</code></pre>

<h2>2. Orchestrating with Amazon ECS Fargate</h2>
<p>AWS ECS Fargate allows you to run containers in serverless mode—meaning you do not have to manage underlying EC2 hardware. Fargate automatically scales CPU and memory resources up or down based on inbound network traffic indicators.</p>

<h2>3. Automated CI/CD Workflows</h2>
<p>Establish a Git trigger using GitHub Actions. Upon a merge to <code>main</code>, the pipeline builds the docker container, pushes it to Amazon ECR (Elastic Container Registry), and updates the ECS Task Definition to trigger a zero-downtime rolling deployment.</p>
    `
  },
  {
    slug: "defending-nodejs-api-ddos",
    title: "Defending Node.js API Endpoints Against DDoS",
    summary: "Protect your MERN stack backend from malicious floods using Express rate limiters, security headers, and AWS CloudFront Web Application Firewall.",
    category: "Security",
    date: "June 05, 2026",
    author: "Prem Kumar",
    readTime: "4 min read",
    content: `
<p>API endpoints, especially public endpoints like RFQ forms or subscription APIs, are vulnerable to botnets attempting denial-of-service (DDoS) floods. Securing your backend requires a defense-in-depth model combining network layers and software limiters.</p>

<h2>1. Express Rate Limiting</h2>
<p>Never leave your public routes unprotected. Use the <code>express-rate-limit</code> middleware in Node.js to cap the number of requests a single IP address can make within a specified timeframe (e.g., maximum 10 requests per minute on contact routes).</p>

<pre><code>// Implementing rate limiter middleware in Express
const rateLimit = require('express-rate-limit');

const rfqLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  message: { message: 'Too many requests. Please try again later.' }
});

app.use('/api/rfq', rfqLimiter);
</code></pre>

<h2>2. Injecting Secure Response Headers</h2>
<p>Implement <code>helmet</code> middleware to add secure headers. This automatically disables the <code>X-Powered-By</code> header (preventing hackers from identifying that your site runs Node.js) and configures secure Content Security Policies (CSP).</p>

<h2>3. AWS CloudFront WAF Integration</h2>
<p>Deploy your Next.js frontend and Node.js APIs behind AWS CloudFront. By attaching AWS WAF (Web Application Firewall), you filter out malicious bot requests, rate-limit attackers at the edge network (before they hit your Node.js processes), and guard against SQL-injection or Cross-Site Scripting (XSS) vectors.</p>
    `
  }
];

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Cloud", "MERN Stack", "DevOps", "Security"];

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/posts");
        const result = await response.json();
        if (response.ok) {
          setPosts(result.data);
        } else {
          setPosts(BLOG_POSTS);
        }
      } catch (err) {
        console.error("Failed to fetch posts from backend, using fallback:", err);
        setPosts(BLOG_POSTS);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Filter and Search logic
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.summary.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || post.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.blogPage}>
      <div className={styles.container}>
        
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.badge}>Our Blog</span>
          <h1 className={styles.title}>
            Technology <span className={styles.highlight}>Insights</span>
          </h1>
          <p className={styles.subtitle}>
            Deep dives, DevOps pipelines, and cloud optimization blueprints written by TwinsCloud software architects.
          </p>
        </header>

        {/* Controls Bar */}
        <div className={styles.controls}>
          <input
            type="text"
            className={styles.searchBar}
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className={styles.filterGroup}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`${styles.filterBtn} ${category === cat ? styles.filterBtnActive : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className={styles.grid}>
          {loading ? (
            <p style={{ textAlign: "center", color: "#718096", gridColumn: "1/-1", margin: "40px 0" }}>
              Loading articles...
            </p>
          ) : filteredPosts.length === 0 ? (
            <p style={{ textAlign: "center", color: "#718096", gridColumn: "1/-1", margin: "40px 0" }}>
              No articles found matching your search.
            </p>
          ) : (
            filteredPosts.map((post) => (
              <article key={post.slug} className={styles.postCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderGlow} />
                  <span className={styles.cardCategory}>{post.category}</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                  </Link>
                  <p className={styles.cardSummary}>{post.summary}</p>
                  <Link href={`/blog/${post.slug}`} className={styles.readMoreBtn}>
                    <span>Read Article</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
