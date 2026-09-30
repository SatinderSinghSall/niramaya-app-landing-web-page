import type { Metadata } from "next";

import AppHero from "@/components/product/AppHero";
import AppShowcase from "@/components/product/AppShowcase";
import AppScreens from "@/components/product/AppScreens";
import AppFeatures from "@/components/product/AppFeatures";
import AppJourney from "@/components/product/AppJourney";
import AppDownloadCTA from "@/components/product/AppDownloadCTA";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "The Niramaya App | Wellness in One Place",
  description:
    "Explore the Niramaya mobile app, including your wellness profile, goals, progress, Yoga, Ayurveda, exploration and consultation experience.",
  path: "/app",
  keywords: [
    "Niramaya app",
    "Niramaya mobile app",
    "wellness app",
    "wellness dashboard",
    "wellness goals",
    "progress tracking",
    "Yoga app",
    "Ayurveda app",
  ],
});

export default function AppPage() {
  return (
    <main>
      <AppHero />
      <AppShowcase />
      <AppScreens />
      <AppFeatures />
      <AppJourney />
      <AppDownloadCTA />
    </main>
  );
}
