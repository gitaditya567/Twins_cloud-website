import BlogClient from "./BlogClient";
import { BLOG_POSTS } from "./posts.js";

export { BLOG_POSTS };

export const metadata = {
  title: "Technology Insights & Engineering Blog | TwinsCloud",
  description: "Explore technical guides, DevOps pipelines, cloud migration architecture, and MERN stack engineering tutorials written by TwinsCloud architects.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Technology Insights & Engineering Blog | TwinsCloud",
    description: "Explore technical guides, DevOps pipelines, cloud migration architecture, and MERN stack engineering tutorials written by TwinsCloud architects.",
    url: "https://twinscloud.com/blog",
    type: "website",
  },
};

async function getPosts() {
  const postsMap = new Map();

  // 1. Preload all 10 static in-depth blog posts
  BLOG_POSTS.forEach((post) => {
    postsMap.set(post.slug, post);
  });

  // 2. Overlay any dynamic posts from backend API
  try {
    const res = await fetch("http://localhost:5050/api/posts", {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const result = await res.json();
      if (Array.isArray(result.data)) {
        result.data.forEach((post) => {
          if (post && post.slug) {
            postsMap.set(post.slug, {
              ...postsMap.get(post.slug),
              ...post,
            });
          }
        });
      }
    }
  } catch (err) {
    // Fallback if backend API is offline during SSR build
  }

  return Array.from(postsMap.values());
}

export default async function BlogPage() {
  const posts = await getPosts();

  return <BlogClient initialPosts={posts} />;
}
