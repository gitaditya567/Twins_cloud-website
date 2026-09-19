"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Automatically reload once on chunk load errors
    if (error?.message?.includes("ChunkLoadError") || error?.message?.includes("Loading chunk")) {
      const key = "tc_chunk_err_reload";
      const last = sessionStorage.getItem(key);
      const now = Date.now();
      if (!last || now - parseInt(last, 10) > 10000) {
        sessionStorage.setItem(key, now.toString());
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <div style={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      textAlign: "center"
    }}>
      <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "16px", color: "#111827" }}>
        Something went wrong!
      </h2>
      <p style={{ color: "#6b7280", marginBottom: "24px", maxWidth: "480px" }}>
        The page encountered a temporary loading error. Please try reloading or visit our homepage.
      </p>
      <div style={{ display: "flex", gap: "12px" }}>
        <button
          onClick={() => window.location.reload()}
          style={{
            background: "#f9841a",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "8px",
            border: "none",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          Reload Page
        </button>
        <Link
          href="/"
          style={{
            background: "#f3f4f6",
            color: "#374151",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            display: "inline-flex",
            alignItems: "center"
          }}
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
