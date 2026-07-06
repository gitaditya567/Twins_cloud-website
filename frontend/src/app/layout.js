import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuickActions from "../components/QuickActions";

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
    default: "TwinsCloud - Premium Cloud Solutions & Training",
    template: "%s | TwinsCloud",
  },
  description: "TwinsCloud delivers modern cloud engineering, enterprise project consultancy, comprehensive technology training, and customized RFQ solutions.",
  keywords: [
    "cloud solutions", "AWS reseller", "DevOps pipeline", "MERN Stack", 
    "software engineering", "IT training", "internship", "project consultancy",
    "cloud lifecycle", "website development", "app development"
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
    title: "TwinsCloud - Premium Cloud Solutions & Training",
    description: "TwinsCloud delivers modern cloud engineering, enterprise project consultancy, comprehensive technology training, and customized RFQ solutions.",
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
    title: "TwinsCloud - Premium Cloud Solutions & Training",
    description: "TwinsCloud delivers modern cloud engineering, enterprise project consultancy, comprehensive technology training, and customized RFQ solutions.",
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
  "@type": "Organization",
  "name": "TwinsCloud Private Limited",
  "url": "https://twinscloud.com",
  "logo": "https://twinscloud.com/logo-new.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "support@twinscloud.com",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.linkedin.com/company/twinscloud"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
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
