import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px 24px",
        textAlign: "center",
        backgroundColor: "#0a0d14",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "6px 16px",
          borderRadius: "999px",
          background: "rgba(249, 132, 26, 0.15)",
          border: "1px solid rgba(249, 132, 26, 0.3)",
          color: "#f9841a",
          fontSize: "14px",
          fontWeight: "700",
          marginBottom: "20px",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        Error 404
      </div>

      <h1
        style={{
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: "900",
          lineHeight: 1.1,
          marginBottom: "16px",
          color: "#ffffff",
        }}
      >
        Page <span style={{ color: "#f9841a" }}>Not Found</span>
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#94a3b8",
          maxWidth: "540px",
          marginBottom: "36px",
          lineHeight: 1.6,
        }}
      >
        The page you are looking for doesn't exist, was moved, or has an invalid URL.
      </p>

      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link
          href="/"
          style={{
            backgroundColor: "#f9841a",
            color: "#ffffff",
            padding: "14px 28px",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "16px",
            textDecoration: "none",
            transition: "all 0.2s ease",
            boxShadow: "0 4px 20px rgba(249, 132, 26, 0.3)",
          }}
        >
          Return to Homepage
        </Link>
        <Link
          href="/service"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#ffffff",
            padding: "14px 28px",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "16px",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
        >
          View Services
        </Link>
      </div>
    </div>
  );
}
