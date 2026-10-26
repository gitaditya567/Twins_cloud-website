// Per-page metadata helper. Next.js does not derive og:/twitter: tags from a page's
// title, so any page that only sets `title` inherits the homepage's social tags from
// the root layout. Use this so every page gets its own title, canonical, OG and Twitter tags.
const SITE_NAME = "TwinsCloud";
const DEFAULT_IMAGE = { url: "/logo-new.png", width: 800, height: 800, alt: "TwinsCloud Logo" };

/**
 * @param {object} opts
 * @param {string} opts.title        Page title without the " | TwinsCloud" suffix (added here)
 * @param {string} opts.description
 * @param {string} opts.path         Path starting with "/", resolved against metadataBase
 * @param {string} [opts.type]       Open Graph type, e.g. "website" or "article"
 * @param {object} [opts.openGraph]  Extra Open Graph fields (publishedTime, authors, tags...)
 */
export function pageMetadata({ title, description, path, type = "website", openGraph = {} }) {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    // absolute: a nested layout with its own title stops the root "%s | TwinsCloud"
    // template from reaching child pages, so set the full title explicitly
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      images: [DEFAULT_IMAGE],
      locale: "en_US",
      type,
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_IMAGE.url],
    },
  };
}
