import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Development Services in Lucknow",
  description: "TwinsCloud's core services from our Lucknow office: web development, school ERP software, AWS cloud consulting, DevOps automation, and cloud migrations.",
  path: "/service",
});

export default function ServiceLayout({ children }) {
  return children;
}
