import type { Metadata } from "next";

import ResourcesHero from "@/components/information/ResourcesHero";
import ResourceGrid from "@/components/information/ResourceGrid";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Resources | Niramaya Wellness",
  description:
    "Explore Niramaya wellness resources covering Yoga, Ayurveda, goals, progress, the mobile app and getting started.",
  path: "/resources",
  keywords: [
    "Niramaya resources",
    "wellness resources",
    "Yoga resources",
    "Ayurveda resources",
    "wellness goals",
  ],
});

export default function ResourcesPage() {
  return (
    <main>
      <ResourcesHero />
      <ResourceGrid />
    </main>
  );
}
