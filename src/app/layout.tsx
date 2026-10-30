import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#071F1A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Dellawa, Neluwa, Sri Lanka`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Dellakkadawala",
    "Dellakkadawala Eco Resort",
    "Dellawa resort",
    "Neluwa eco resort",
    "Galle eco resort",
    "Sinharaja rainforest retreat",
    "Sri Lanka river resort",
    "river bathing Neluwa",
    "kayaking Galle",
    "nature day out Sri Lanka",
  ],
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL("https://dellakkadawalaecoresort.com"),
  openGraph: {
    title: `${siteConfig.name} | Peace Beside the River`,
    description: siteConfig.description,
    url: "https://dellakkadawalaecoresort.com",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero/hero1.jpg",
        width: 1920,
        height: 1080,
        alt: "Dellakkadawala Eco Resort nestled beside the river in Dellawa, Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Peace Beside the River`,
    description: siteConfig.description,
    images: ["/images/hero/hero1.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/logo.jpg" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/images/logo.jpg" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#071F1A] text-[#F5F1E6]">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
