"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BLOG_POSTS } from "../page.js";
import styles from "../blog.module.css";

export default function BlogPostPage({ params }) {
  const router = useRouter();
  const { slug } = use(params);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/posts/${slug}`);
        const result = await response.json();
        if (response.ok) {
          setPost(result.data);
        } else {
          const fallback = BLOG_POSTS.find((p) => p.slug === slug);
          setPost(fallback || null);
        }
      } catch (err) {
        console.error("Failed to fetch post, using fallback:", err);
        const fallback = BLOG_POSTS.find((p) => p.slug === slug);
        setPost(fallback || null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.blogPage}>
        <div className={styles.container} style={{ textAlign: "center", padding: "100px 0" }}>
          <h2 style={{ fontSize: "24px" }}>Loading article...</h2>
        </div>
      </div>
    );
  }

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

  return (
    <div className={styles.blogPage}>
      <div className={styles.container}>
        <div className={styles.postWrapper}>
          
          <button onClick={() => router.push("/blog")} className={styles.backBtn}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Blog</span>
          </button>

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
