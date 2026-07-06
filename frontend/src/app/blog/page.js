"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./blog.module.css";

import { BLOG_POSTS } from "./posts.js";
export { BLOG_POSTS };

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Cloud", "MERN Stack", "DevOps", "Security"];

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5050/api/posts");
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
