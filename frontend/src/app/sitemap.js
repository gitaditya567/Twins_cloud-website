import { BLOG_POSTS } from "./blog/posts";

export default async function sitemap() {
  const baseUrl = "https://twinscloud.com";
  
  // Static paths
  const staticRoutes = [
    "",
    "/about",
    "/service",
    "/project",
    "/case-study",
    "/training",
    "/rfq",
    "/consultation",
    "/calculator",
    "/blog",
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/blog" ? 0.7 : 0.8,
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

  return [...staticUrls, ...blogUrls];
}
