import type { Metadata } from "next";

import LegalHeader from "@/components/legal/LegalHeader";
import LegalSidebar from "@/components/legal/LegalSidebar";
import LegalSection from "@/components/legal/LegalSection";
import LegalFooterCTA from "@/components/legal/LegalFooterCTA";
import Container from "@/components/common/Container";
import { createMetadata } from "@/lib/seo";

const sections = [
  { id: "general", label: "General Information" },
  { id: "medical", label: "Not Medical Advice" },
  { id: "diagnosis", label: "No Diagnosis or Treatment" },
  { id: "yoga", label: "Yoga & Physical Activity" },
  { id: "ayurveda", label: "Ayurveda Information" },
  { id: "recommendations", label: "Recommendations" },
  { id: "consultation", label: "Professional Consultation" },
  { id: "emergency", label: "Urgent Situations" },
];

export const metadata: Metadata = createMetadata({
  title: "Wellness Disclaimer | Niramaya",
  description:
    "Read the Niramaya wellness disclaimer covering informational content, Yoga, Ayurveda, recommendations and professional care.",
  path: "/disclaimer",
  keywords: [
    "Niramaya disclaimer",
    "wellness disclaimer",
    "Niramaya medical disclaimer",
    "Yoga Ayurveda disclaimer",
  ],
});

export default function DisclaimerPage() {
  return (
    <main>
      <LegalHeader
        eyebrow="Important information"
        title="Wellness Disclaimer"
        description="Important information about the wellness, Yoga, Ayurveda and recommendation experiences provided through Niramaya."
        updated="September 30, 2026"
      />

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="mb-12 border border-[#D7E1D2] bg-[#EEF2E6] p-6 sm:p-8 lg:ml-[276px]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4D6A50]">
              Please read carefully
            </p>

            <p className="mt-3 max-w-4xl text-base font-medium leading-7 text-[#354B3B]">
              Niramaya is intended as a wellness application. Its informational
              content and recommendations are not a replacement for diagnosis,
              treatment or professional medical care.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,760px)] lg:justify-center lg:gap-16">
            <LegalSidebar sections={sections} />

            <article>
              <LegalSection
                id="general"
                number="01"
                title="General Information"
              >
                <p>
                  Niramaya provides wellness-oriented information, tools and
                  experiences designed to support everyday wellness and
                  wellbeing.
                </p>

                <p>
                  Information available through the application should be
                  considered general informational content rather than
                  individualized medical advice.
                </p>
              </LegalSection>

              <LegalSection id="medical" number="02" title="Not Medical Advice">
                <p>
                  Niramaya is not intended to provide medical advice, diagnosis
                  or treatment.
                </p>

                <p>
                  Information displayed within the application should not be
                  relied upon as a substitute for advice from a qualified
                  healthcare professional.
                </p>
              </LegalSection>

              <LegalSection
                id="diagnosis"
                number="03"
                title="No Diagnosis or Treatment"
              >
                <p>
                  Niramaya does not replace a professional assessment, diagnosis
                  or treatment plan.
                </p>

                <p>
                  Users should consult an appropriately qualified healthcare
                  professional when they need medical advice, diagnosis or
                  treatment.
                </p>
              </LegalSection>

              <LegalSection
                id="yoga"
                number="04"
                title="Yoga & Physical Activity"
              >
                <p>
                  Yoga-related information within Niramaya is provided for
                  wellness and informational purposes.
                </p>

                <p>
                  Physical activities may not be appropriate for every person.
                  Users should consider their individual circumstances and seek
                  appropriate professional guidance when necessary.
                </p>
              </LegalSection>

              <LegalSection
                id="ayurveda"
                number="05"
                title="Ayurveda Information"
              >
                <p>
                  Niramaya includes Ayurveda-related content and recommendations
                  as part of its wellness experience.
                </p>

                <p>
                  Such information should not be interpreted as a diagnosis or
                  individualized medical treatment recommendation.
                </p>
              </LegalSection>

              <LegalSection
                id="recommendations"
                number="06"
                title="Recommendations"
              >
                <p>
                  Niramaya can provide wellness-oriented recommendations based
                  on information available within the application and the
                  content represented by its wellness modules.
                </p>

                <p>
                  Recommendations should be considered informational and should
                  not replace professional assessment or advice.
                </p>
              </LegalSection>

              <LegalSection
                id="consultation"
                number="07"
                title="Professional Consultation"
              >
                <p>
                  Niramaya includes Ayurvedic consultation workflows that can
                  support connections with professional consultation services.
                </p>

                <p>
                  Consultation with a qualified professional is separate from
                  the general informational content presented by the
                  application.
                </p>
              </LegalSection>

              <LegalSection
                id="emergency"
                number="08"
                title="Urgent Situations"
              >
                <p>
                  Niramaya should not be used for emergency medical situations.
                </p>

                <p>
                  If you believe you are experiencing an emergency or immediate
                  health risk, seek appropriate emergency or professional
                  medical assistance.
                </p>
              </LegalSection>
            </article>
          </div>
        </Container>
      </section>

      <LegalFooterCTA />
    </main>
  );
}
