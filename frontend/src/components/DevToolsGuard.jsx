"use client";

import { useEffect } from "react";

export default function DevToolsGuard() {
  useEffect(() => {
    // Only enforce restrictions in production mode
    if (process.env.NODE_ENV !== "production") return;

    // 1. Disable Right Click Context Menu
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // 2. Block Keyboard Shortcuts for DevTools & View Source
    const handleKeyDown = (e) => {
      // F12 key
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element picker)
      if (e.ctrlKey && e.shiftKey && ["I", "J", "C", "i", "j", "c"].includes(e.key)) {
        e.preventDefault();
        return false;
      }
      // Ctrl+U (View Page Source)
      if (e.ctrlKey && (e.key === "U" || e.key === "u")) {
        e.preventDefault();
        return false;
      }
      // Cmd+Option+I / Cmd+Option+J / Cmd+Option+C (Mac)
      if (e.metaKey && e.altKey && ["I", "J", "C", "i", "j", "c"].includes(e.key)) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
