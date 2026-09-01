import LucknowMoneyPageTemplate from "../../components/LucknowMoneyPageTemplate";
import { getMoneyPageBySlug } from "../lucknow-pages-data";

const page = getMoneyPageBySlug("school-erp-software-development-company-in-lucknow");

export const metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: {
    canonical: `/${page.slug}`
  }
};

export default function Page() {
  return <LucknowMoneyPageTemplate page={page} />;
}
