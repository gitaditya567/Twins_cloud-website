import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuickActions from "../components/QuickActions";
import DevToolsGuard from "../components/DevToolsGuard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://twinscloud.com"),
  title: {
    default: "Software & Website Development Company in Lucknow | TwinsCloud",
    template: "%s | TwinsCloud",
  },
  description: "TwinsCloud is a Lucknow-based software & website development company and AWS Consulting Partner, specializing in school ERP systems, cloud migrations, DevOps automation, and MERN stack applications.",
  keywords: [
    "Software Development Company in Lucknow", "Website Development Company in Lucknow",
    "School Management Software in Lucknow", "School ERP Software Lucknow",
    "Mobile App Development Company in Lucknow",
    "Software Development Company India", "AWS Consulting Partner", "DevOps Company",
    "MERN Stack Development Company", "Cloud Migration Services", "ERP Development Company",
    "cloud solutions", "AWS reseller", "DevOps pipeline", "MERN Stack",
    "software engineering", "IT training", "internship", "project consultancy"
  ],
  authors: [{ name: "TwinsCloud" }],
  creator: "TwinsCloud",
  publisher: "TwinsCloud",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/logo-new.png",
    shortcut: "/logo-new.png",
    apple: "/logo-new.png",
  },
  openGraph: {
    title: "Software & Website Development Company in Lucknow | TwinsCloud",
    description: "TwinsCloud delivers software & website development, school ERP systems, cloud engineering, and enterprise project consultancy from our Lucknow office.",
    url: "https://twinscloud.com",
    siteName: "TwinsCloud",
    images: [
      {
        url: "/logo-new.png",
        width: 800,
        height: 800,
        alt: "TwinsCloud Logo",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software & Website Development Company in Lucknow | TwinsCloud",
    description: "TwinsCloud delivers software & website development, school ERP systems, cloud engineering, and enterprise project consultancy from our Lucknow office.",
    images: ["/logo-new.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "TwinsCloud Private Limited",
  "url": "https://twinscloud.com",
  "logo": "https://twinscloud.com/logo-new.png",
  "image": "https://twinscloud.com/logo-new.png",
  "telephone": "+91-9580880060",
  "email": "support@twinscloud.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mubarakpur, Kamalabad Barhauli",
    "addressLocality": "Lucknow",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "226201",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Lucknow" },
    { "@type": "Country", "name": "India" }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9580880060",
    "email": "support@twinscloud.com",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.linkedin.com/in/twinscloud-private-limited-66561a234/",
    "https://www.instagram.com/officialtwinscloud/",
    "https://www.facebook.com/Tiwnscloud/",
    "https://github.com/Twinscloud18"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', function(e) {
                var msg = e && (e.message || (e.error && e.error.message) || '');
                if (msg && (msg.indexOf('ChunkLoadError') !== -1 || msg.indexOf('Loading chunk') !== -1)) {
                  var key = 'tc_chunk_reload';
                  var last = sessionStorage.getItem(key);
                  var now = Date.now();
                  if (!last || now - parseInt(last, 10) > 10000) {
                    sessionStorage.setItem(key, now.toString());
                    window.location.reload();
                  }
                }
              });
            `
          }}
        />
      </head>
      <body>
        <DevToolsGuard />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </main>
        <Footer />
        <QuickActions />
      </body>
    </html>
  );
}
