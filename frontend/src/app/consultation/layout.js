import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Schedule a Cloud Consultation",
  description: "Book a 1-on-1 consultation session with our certified cloud architects and technology consultants to optimize your infrastructure.",
  path: "/consultation",
});

export default function ConsultationLayout({ children }) {
  return children;
}
