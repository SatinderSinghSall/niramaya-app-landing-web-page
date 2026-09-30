import type { Metadata } from "next";

import HowItWorksHero from "@/components/how-it-works/HowItWorksHero";
import Steps from "@/components/how-it-works/Steps";
import Personalization from "@/components/how-it-works/Personalization";
import HowItWorksCTA from "@/components/how-it-works/HowItWorksCTA";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "How It Works | Niramaya",
  description:
    "See how Niramaya brings together onboarding, your wellness profile, goals, wellness discovery, Yoga, Ayurveda, consultation and progress tracking.",
  path: "/how-it-works",
  keywords: [
    "how Niramaya works",
    "Niramaya wellness journey",
    "wellness onboarding",
    "health profile",
    "wellness goals",
    "wellness progress",
    "Yoga",
    "Ayurveda",
    "Ayurvedic consultation",
  ],
});

export default function HowItWorksPage() {
  return (
    <main>
      <HowItWorksHero />
      <Steps />
      <Personalization />
      <HowItWorksCTA />
    </main>
  );
}
