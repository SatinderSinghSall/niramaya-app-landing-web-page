import type { Metadata } from "next";

import YogaHero from "@/components/yoga/YogaHero";
import YogaOverview from "@/components/yoga/YogaOverview";
import YogaCategories from "@/components/yoga/YogaCategories";
import YogaExperience from "@/components/yoga/YogaExperience";
import YogaCTA from "@/components/yoga/YogaCTA";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Yoga | Niramaya",
  description:
    "Explore Yoga content, categories, search, details and recommendations through the Niramaya wellness experience.",
  path: "/yoga",
  keywords: [
    "Niramaya Yoga",
    "Yoga",
    "Yoga practices",
    "Yoga categories",
    "Yoga recommendations",
    "Yoga wellness",
  ],
});

export default function YogaPage() {
  return (
    <main>
      <YogaHero />
      <YogaOverview />
      <YogaCategories />
      <YogaExperience />
      <YogaCTA />
    </main>
  );
}
