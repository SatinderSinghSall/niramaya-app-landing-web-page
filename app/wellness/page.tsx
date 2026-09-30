import type { Metadata } from "next";

import WellnessHero from "@/components/wellness/WellnessHero";
import WellnessOverview from "@/components/wellness/WellnessOverview";
import WellnessAreas from "@/components/wellness/WellnessAreas";
import WellnessJourney from "@/components/wellness/WellnessJourney";
import WellnessCTA from "@/components/wellness/WellnessCTA";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Wellness | Niramaya",
  description:
    "Explore Niramaya's wellness experience, including Yoga, Ayurveda, recommendations, search, favorites and progress.",
  path: "/wellness",
  keywords: [
    "Niramaya wellness",
    "wellness journey",
    "Yoga",
    "Ayurveda",
    "wellness recommendations",
    "wellness content",
  ],
});

export default function WellnessPage() {
  return (
    <main>
      <WellnessHero />
      <WellnessOverview />
      <WellnessAreas />
      <WellnessJourney />
      <WellnessCTA />
    </main>
  );
}
