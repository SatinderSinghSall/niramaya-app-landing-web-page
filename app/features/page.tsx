import type { Metadata } from "next";

import FeatureHero from "@/components/features/FeatureHero";
import FeatureGrid from "@/components/features/FeatureGrid";
import FeatureCTA from "@/components/features/FeatureCTA";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Features | Niramaya",
  description:
    "Explore Niramaya's wellness features, including personalized onboarding, health profiles, goals, progress tracking, wellness discovery, Yoga, Ayurveda and consultation.",
  path: "/features",
  keywords: [
    "Niramaya features",
    "wellness features",
    "health profile",
    "wellness goals",
    "progress tracking",
    "Yoga",
    "Ayurveda",
    "Ayurvedic consultation",
  ],
});

export default function FeaturesPage() {
  return (
    <>
      <FeatureHero />
      <FeatureGrid />
      <FeatureCTA />
    </>
  );
}
