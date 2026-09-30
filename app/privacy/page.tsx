import type { Metadata } from "next";

import LegalHeader from "@/components/legal/LegalHeader";
import LegalSidebar from "@/components/legal/LegalSidebar";
import LegalSection from "@/components/legal/LegalSection";
import LegalFooterCTA from "@/components/legal/LegalFooterCTA";
import Container from "@/components/common/Container";
import { createMetadata } from "@/lib/seo";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "information", label: "Information We Collect" },
  { id: "use", label: "How Information Is Used" },
  { id: "account", label: "Account Information" },
  { id: "wellness", label: "Wellness Information" },
  { id: "security", label: "Security" },
  { id: "choices", label: "Your Choices" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
];

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | Niramaya",
  description:
    "Read the Niramaya Privacy Policy and learn how information is handled within the Niramaya wellness application and website.",
  path: "/privacy",
  keywords: [
    "Niramaya privacy policy",
    "Niramaya privacy",
    "wellness app privacy",
  ],
});

export default function PrivacyPage() {
  return (
    <main>
      <LegalHeader
        eyebrow="Privacy"
        title="Privacy Policy"
        description="Information about how Niramaya approaches information collected through its wellness application and website."
        updated="September 30, 2026"
      />

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,760px)] lg:justify-center lg:gap-16">
            <LegalSidebar sections={sections} />

            <article>
              <LegalSection id="introduction" number="01" title="Introduction">
                <p>
                  Niramaya is a wellness and wellbeing application designed
                  around a personalized wellness journey. This Privacy Policy
                  explains, at a high level, how information may be handled when
                  using the Niramaya website and application.
                </p>

                <p>
                  Niramaya is designed to bring personal wellness information,
                  goals, progress, Yoga, Ayurveda and related wellness
                  experiences together in one application.
                </p>
              </LegalSection>

              <LegalSection
                id="information"
                number="02"
                title="Information We Collect"
              >
                <p>
                  The Niramaya onboarding experience can collect information
                  across several areas of a user&apos;s wellness profile.
                </p>

                <p>
                  These areas include personal details, physical health,
                  wellbeing, lifestyle, nutrition, sleep, fitness and Yoga, and
                  wellness preferences.
                </p>

                <p>
                  The application may also handle information associated with
                  account management, goals, progress, favorites, notifications,
                  consultation workflows and profile settings.
                </p>
              </LegalSection>

              <LegalSection
                id="use"
                number="03"
                title="How Information Is Used"
              >
                <p>
                  Information provided through Niramaya is used to support the
                  functionality of the application and its personalized wellness
                  experience.
                </p>

                <p>
                  Depending on the feature being used, this can include
                  supporting the wellness dashboard, goals, progress,
                  exploration, recommendations, health-profile management and
                  other application functionality.
                </p>
              </LegalSection>

              <LegalSection
                id="account"
                number="04"
                title="Account Information"
              >
                <p>
                  Niramaya includes user registration, authentication, profile
                  management, password management and account-management
                  functionality.
                </p>

                <p>
                  Users should keep their account credentials confidential and
                  use the account-management controls provided by the
                  application appropriately.
                </p>
              </LegalSection>

              <LegalSection
                id="wellness"
                number="05"
                title="Wellness Information"
              >
                <p>
                  Niramaya can contain information related to personal health
                  and wellbeing because these areas form part of the
                  application&apos;s onboarding and wellness-profile experience.
                </p>

                <p>
                  Users should provide information carefully and only through
                  the appropriate application interfaces.
                </p>
              </LegalSection>

              <LegalSection id="security" number="06" title="Security">
                <p>
                  Niramaya uses authentication and protected application
                  architecture as part of its mobile and backend systems.
                </p>

                <p>
                  The project documentation identifies JWT-based authentication,
                  protected backend routes, password management and secure token
                  storage on mobile as part of the application architecture.
                </p>
              </LegalSection>

              <LegalSection id="choices" number="07" title="Your Choices">
                <p>
                  Niramaya provides account and profile-management functionality
                  through the application. Available controls can include
                  profile updates, password management and account management.
                </p>
              </LegalSection>

              <LegalSection
                id="changes"
                number="08"
                title="Changes to This Policy"
              >
                <p>
                  This Privacy Policy may be updated as the Niramaya website,
                  application and associated practices develop.
                </p>

                <p>
                  When changes are made, the updated version should replace the
                  previous version on this page.
                </p>
              </LegalSection>

              <LegalSection id="contact" number="09" title="Contact">
                <p>
                  For questions regarding this Privacy Policy or the Niramaya
                  website, please use the contact page.
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
