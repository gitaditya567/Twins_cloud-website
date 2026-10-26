import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology Training & Internship Program in Lucknow",
  description: "Join TwinsCloud's IT training and internship program in Lucknow. Hands-on AWS, DevOps, and MERN Stack training with real project experience and career placement support.",
  path: "/training",
});

export default function TrainingLayout({ children }) {
  return children;
}
