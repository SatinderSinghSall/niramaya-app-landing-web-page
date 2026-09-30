import type { Metadata } from "next";

import AyurvedaHero from "@/components/ayurveda/AyurvedaHero";
import AyurvedaOverview from "@/components/ayurveda/AyurvedaOverview";
import AyurvedaDiscovery from "@/components/ayurveda/AyurvedaDiscovery";
import AyurvedaConsultation from "@/components/ayurveda/AyurvedaConsultation";
import AyurvedaCTA from "@/components/ayurveda/AyurvedaCTA";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Ayurveda | Niramaya",
  description:
    "Explore Ayurvedic wellness content, recommendations, search, discovery and consultation workflows through Niramaya.",
  path: "/ayurveda",
  keywords: [
    "Niramaya Ayurveda",
    "Ayurveda",
    "Ayurvedic wellness",
    "Ayurvedic recommendations",
    "Ayurvedic consultation",
    "wellness content",
  ],
});

export default function AyurvedaPage() {
  return (
    <main>
      <AyurvedaHero />
      <AyurvedaOverview />
      <AyurvedaDiscovery />
      <AyurvedaConsultation />
      <AyurvedaCTA />
    </main>
  );
}
