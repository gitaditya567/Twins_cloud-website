import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy and data protection guidelines for TwinsCloud Private Limited.",
  path: "/privacy-policy",
});

export default function PrivacyLayout({ children }) {
  return <>{children}</>;
}
