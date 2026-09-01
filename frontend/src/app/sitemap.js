import { BLOG_POSTS } from "./blog/posts";
import { SERVICES } from "./services/data";
import { CASE_STUDIES } from "./case-study/data";
import { LUCKNOW_MONEY_PAGES } from "./lucknow-pages-data";

export default async function sitemap() {
  const baseUrl = "https://twinscloud.com";

  // Static paths
  const staticRoutes = [
    "",
    "/lucknow",
    "/about",
    "/service",
    "/project",
    "/case-study",
    "/training",
    "/rfq",
    "/consultation",
    "/calculator",
    "/terms-of-service",
    "/privacy-policy",
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/lucknow" ? 0.9 : route === "/blog" ? 0.7 : 0.8,
  }));

  const serviceUrls = SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudyUrls = CASE_STUDIES.map((c) => ({
    url: `${baseUrl}/case-study/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const lucknowMoneyPageUrls = LUCKNOW_MONEY_PAGES.map((p) => ({
    url: `${baseUrl}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.95,
  }));

  // Fetch dynamic blog posts
  let blogUrls = [];
  try {
    const response = await fetch("http://localhost:5050/api/posts", { next: { revalidate: 3600 } });
    if (response.ok) {
      const result = await response.json();
      const posts = result.data || [];
      blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.createdAt || new Date()),
        changeFrequency: "monthly",
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.error("Sitemap dynamic posts fetch error, falling back to static posts:", error.message);
  }

  // Fallback if API fails or returns no posts
  if (blogUrls.length === 0) {
    blogUrls = BLOG_POSTS.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  }

  return [...staticUrls, ...lucknowMoneyPageUrls, ...serviceUrls, ...caseStudyUrls, ...blogUrls];
}
