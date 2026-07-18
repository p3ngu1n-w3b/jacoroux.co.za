import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "website designer George",
    "web developer Garden Route",
    "business website South Africa",
    "freelance frontend developer",
    "Next.js developer South Africa",
    "website design Western Cape",
    "Jaco Roux",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: "Jaco Roux | Websites that win clients",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Jaco Roux — websites that win clients",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaco Roux | Websites that win clients",
    description: siteConfig.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "k17C09MrQFd6tTRTakD-Uz-t1ZkQFYIgjwh4LY3g1r4",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/icon.png" }],
    apple: [{ url: "/icon.png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      jobTitle: "Senior Frontend Developer & Website Designer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "George",
        addressRegion: "Western Cape",
        addressCountry: "ZA",
      },
      sameAs: [siteConfig.linkedin],
      knowsLanguage: ["en", "af"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      name: `${siteConfig.name} Web Design`,
      url: siteConfig.url,
      image: `${siteConfig.url}/og.png`,
      description: siteConfig.description,
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Garden Route",
        },
        {
          "@type": "Country",
          name: "South Africa",
        },
      ],
      founder: { "@id": `${siteConfig.url}/#person` },
      email: siteConfig.email,
      priceRange: "RR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body className={`${geistSans.variable} ${syne.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-neon-pink focus:px-3 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
