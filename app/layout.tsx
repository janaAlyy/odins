import type { Metadata } from "next";

import "./globals.css";

import { AnalyticsPlaceholder } from "@/components/analytics-placeholder";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ODIN | Enterprise Technology Systems",
    template: "%s | ODIN"
  },
  description: siteConfig.description,
  openGraph: {
    title: "ODIN | Enterprise Technology Systems",
    description: siteConfig.description,
    url: "/",
    siteName: "ODIN",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "ODIN corporate technology"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ODIN | Enterprise Technology Systems",
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-blue focus:px-3 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="min-h-[70vh]">
          {children}
        </main>
        <Footer />
        <AnalyticsPlaceholder />
      </body>
    </html>
  );
}
