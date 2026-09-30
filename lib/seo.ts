import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface SeoOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/og-image.png",
}: SeoOptions): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title,
    description,

    keywords: [
      "Niramaya",
      "wellness",
      "wellbeing",
      "health goals",
      "Yoga",
      "Ayurveda",
      "personalized wellness",
      ...keywords,
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - ${title}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
