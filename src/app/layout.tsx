import type { Metadata, Viewport } from "next";
import {
  siteConfig,
  siteUrl,
  structuredDataGraph,
  defaultOgImage,
} from "@/content/seo";
import { mediaAssets } from "@/content/media-assets";
import { fontBody, fontDisplay } from "@/lib/fonts";
import { Analytics } from "@/components/Analytics";
import "@/styles/globals.scss";

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "business",
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: defaultOgImage.path,
        width: defaultOgImage.width,
        height: defaultOgImage.height,
        alt: defaultOgImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [defaultOgImage.path],
  },
  icons: {
    icon: mediaAssets.logo.src,
    apple: mediaAssets.logo.src,
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${fontBody.variable} ${fontDisplay.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataGraph),
          }}
        />
      </head>
      <body id="home" className={fontBody.className} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
