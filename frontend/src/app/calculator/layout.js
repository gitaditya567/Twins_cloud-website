import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AWS Cloud Cost Calculator",
  description: "Estimate your cloud infrastructure costs and find opportunities for cost savings with our interactive AWS Cost Calculator.",
  path: "/calculator",
});

export default function CalculatorLayout({ children }) {
  return children;
}
