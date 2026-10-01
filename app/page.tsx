import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import WhyNiramaya from "@/components/home/WhyNiramaya";
import FeaturesPreview from "@/components/home/FeaturesPreview";
import HowItWorksPreview from "@/components/home/HowItWorksPreview";
import WellnessPreview from "@/components/home/WellnessPreview";
import YogaAyurvedaPreview from "@/components/home/YogaAyurvedaPreview";
import GoalsProgressPreview from "@/components/home/GoalsProgressPreview";
import AppPreview from "@/components/home/AppPreview";
import FinalCTA from "@/components/home/FinalCTA";

import LandingAppNotice from "@/components/home/LandingAppNotice";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <WhyNiramaya />
      <FeaturesPreview />
      <HowItWorksPreview />
      <WellnessPreview />
      <YogaAyurvedaPreview />
      <GoalsProgressPreview />
      <AppPreview />
      <FinalCTA />

      <LandingAppNotice />
    </>
  );
}
