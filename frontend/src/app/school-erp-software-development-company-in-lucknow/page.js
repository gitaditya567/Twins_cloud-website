import LucknowMoneyPageTemplate from "../../components/LucknowMoneyPageTemplate";
import { getMoneyPageBySlug } from "../lucknow-pages-data";
import { pageMetadata } from "@/lib/seo";

const page = getMoneyPageBySlug("school-erp-software-development-company-in-lucknow");

export const metadata = pageMetadata({
  title: page.title,
  description: page.metaDescription,
  path: `/${page.slug}`,
});

export default function Page() {
  return <LucknowMoneyPageTemplate page={page} />;
}
