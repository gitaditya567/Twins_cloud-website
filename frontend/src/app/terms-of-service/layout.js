import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service & Non-Payment Policy",
  description: "Terms of Service, Service Level Agreement (SLA), Suspension, and Data Deletion Policy for TwinsCloud Private Limited.",
  path: "/terms-of-service",
});

export default function TermsLayout({ children }) {
  return <>{children}</>;
}
