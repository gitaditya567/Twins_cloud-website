import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio & Projects",
  description: "Browse the successful projects delivered by TwinsCloud, from government portals to enterprise ERP platforms and school automation systems.",
  path: "/project",
});

export default function ProjectLayout({ children }) {
  return children;
}
