import type { Metadata } from "next";

import FAQHero from "@/components/information/FAQHero";
import FAQList from "@/components/information/FAQList";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "FAQ | Niramaya",
  description:
    "Find answers about Niramaya, onboarding, wellness profiles, goals, progress, Yoga, Ayurveda, consultation and the mobile application.",
  path: "/faq",
  keywords: [
    "Niramaya FAQ",
    "Niramaya questions",
    "Niramaya help",
    "wellness app FAQ",
  ],
});

export default function FAQPage() {
  return (
    <main>
      <FAQHero />
      <FAQList />
    </main>
  );
}
