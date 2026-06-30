"use client";

import React, { useEffect, useState } from "react";

export default function Template({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Set a tiny timeout to ensure the transition triggers after mounting
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 20);

    const completionTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 700); // Clear transform after transition completes (0.6s + buffer)

    return () => {
      clearTimeout(timer);
      clearTimeout(completionTimer);
    };
  }, []);

  return (
    <div
      style={{
        opacity: isMounted ? 1 : 0,
        transform: animationComplete ? "none" : (isMounted ? "translateY(0)" : "translateY(12px)"),
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
