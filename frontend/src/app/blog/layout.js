import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tech Insights & DevOps Blog",
  description: "Read deep-dive articles, tutorials, and insights on AWS, Docker, Express, Node.js, and web security written by TwinsCloud architects.",
  path: "/blog",
});

export default function BlogLayout({ children }) {
  return children;
}
