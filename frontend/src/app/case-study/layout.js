import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Client Case Studies",
  description: "Read in-depth case studies showcasing how TwinsCloud solved cloud scaling, cost optimization, and enterprise software challenges.",
  path: "/case-study",
});

export default function CaseStudyLayout({ children }) {
  return children;
}
