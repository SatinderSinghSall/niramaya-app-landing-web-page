import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: "Niramaya — Your Journey to Better Wellness",
    template: "%s | Niramaya",
  },

  description:
    "Niramaya is a personalized wellness app for understanding your wellbeing, setting goals, tracking progress, and discovering Yoga and Ayurveda.",

  applicationName: "Niramaya",

  keywords: [
    "Niramaya",
    "wellness",
    "wellbeing",
    "personalized wellness",
    "Yoga",
    "Ayurveda",
    "health goals",
  ],

  authors: [
    {
      name: "Niramaya",
    },
  ],

  creator: "Niramaya",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: "Niramaya",
    title: "Niramaya — Your Journey to Better Wellness",
    description:
      "Understand your wellbeing, build healthier habits, and discover personalized guidance for everyday wellness.",
    url: "/",
  },

  twitter: {
    card: "summary_large_image",
    title: "Niramaya — Your Journey to Better Wellness",
    description:
      "Understand your wellbeing, build healthier habits, and discover personalized guidance for everyday wellness.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#EEF2E6] text-[#263F31] antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
