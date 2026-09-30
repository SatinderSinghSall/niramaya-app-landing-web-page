import type { Metadata } from "next";

import AboutHero from "@/components/information/AboutHero";
import AboutStory from "@/components/information/AboutStory";
import AboutPrinciples from "@/components/information/AboutPrinciples";
import AboutEcosystem from "@/components/information/AboutEcosystem";
import AboutCTA from "@/components/information/AboutCTA";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Niramaya | Wellness & Wellbeing",
  description:
    "Learn about Niramaya, a personalized wellness and wellbeing mobile application bringing goals, progress, Yoga, Ayurveda and wellness discovery together.",
  path: "/about",
  keywords: [
    "about Niramaya",
    "Niramaya wellness",
    "wellbeing application",
    "wellness platform",
  ],
});

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutPrinciples />
      <AboutEcosystem />
      <AboutCTA />
    </main>
  );
}
