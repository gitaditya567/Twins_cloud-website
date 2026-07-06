import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "../posts.js";
import styles from "../blog.module.css";

async function getPost(slug) {
  try {
    // Determine the backend port dynamically (defaulting to 5050)
    // Since it executes on the server side, this fetches from the Node.js backend.
    const res = await fetch(`http://localhost:5050/api/posts/${slug}`, {
      next: { revalidate: 3600 } // revalidate cache every hour
    });
    if (res.ok) {
      const result = await res.json();
      return result.data;
    }
  } catch (err) {
    console.error(`Failed to fetch post "${slug}" from backend, using fallback:`, err.message);
  }
  return BLOG_POSTS.find((p) => p.slug === slug) || null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Article Not Found - TwinsCloud",
      description: "The requested technical article was not found on TwinsCloud.",
    };
  }

  return {
    title: `${post.title} | TwinsCloud Blog`,
    description: post.summary,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://twinscloud.com/blog/${slug}`,
      type: "article",
      publishedTime: new Date(post.date).toISOString() || new Date().toISOString(),
      authors: [post.author || "TwinsCloud Architect"],
      tags: [post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    }
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className={styles.blogPage}>
        <div className={styles.container} style={{ textAlign: "center", padding: "100px 0" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Article Not Found</h2>
          <Link href="/blog" className={styles.backBtn}>
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Schema markup (JSON-LD) for Article
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "description": post.summary,
    "datePublished": new Date(post.date).toISOString() || new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://twinscloud.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TwinsCloud",
      "logo": {
        "@type": "ImageObject",
        "url": "https://twinscloud.com/logo-new.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://twinscloud.com/blog/${slug}`
    }
  };

  return (
    <div className={styles.blogPage}>
      {/* Inject Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className={styles.container}>
        <div className={styles.postWrapper}>
          
          <Link href="/blog" className={styles.backBtn}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Blog</span>
          </Link>

          <article>
            <header className={styles.postHeader}>
              <span className={styles.postCategory}>{post.category}</span>
              <h1 className={styles.postTitle}>{post.title}</h1>
              <div className={styles.postMeta}>
                <span>By <strong>{post.author}</strong></span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </header>

            <div 
              className={styles.postContent} 
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </article>

        </div>
      </div>
    </div>
  );
}
