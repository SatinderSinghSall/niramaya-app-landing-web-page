import type { Metadata } from "next";

import LegalHeader from "@/components/legal/LegalHeader";
import LegalSidebar from "@/components/legal/LegalSidebar";
import LegalSection from "@/components/legal/LegalSection";
import LegalFooterCTA from "@/components/legal/LegalFooterCTA";
import Container from "@/components/common/Container";
import { createMetadata } from "@/lib/seo";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "use", label: "Using Niramaya" },
  { id: "accounts", label: "Accounts" },
  { id: "responsibilities", label: "User Responsibilities" },
  { id: "wellness", label: "Wellness Content" },
  { id: "consultation", label: "Consultation" },
  { id: "property", label: "Intellectual Property" },
  { id: "availability", label: "Service Availability" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
];

export const metadata: Metadata = createMetadata({
  title: "Terms of Use | Niramaya",
  description:
    "Read the Niramaya Terms of Use governing use of the website and wellness application.",
  path: "/terms",
  keywords: ["Niramaya terms", "Niramaya terms of use", "wellness app terms"],
});

export default function TermsPage() {
  return (
    <main>
      <LegalHeader
        eyebrow="Terms"
        title="Terms of Use"
        description="The general terms and expectations for using the Niramaya website and wellness application."
        updated="September 30, 2026"
      />

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,760px)] lg:justify-center lg:gap-16">
            <LegalSidebar sections={sections} />

            <article>
              <LegalSection id="introduction" number="01" title="Introduction">
                <p>
                  These Terms of Use describe the general terms applicable to
                  use of Niramaya and its website.
                </p>

                <p>
                  Niramaya is a wellness and wellbeing application developed
                  around a personalized wellness journey.
                </p>
              </LegalSection>

              <LegalSection id="use" number="02" title="Using Niramaya">
                <p>
                  Users may use Niramaya for its intended wellness, information
                  and application-management purposes.
                </p>

                <p>
                  Users should use the application responsibly and should not
                  attempt to interfere with the operation or security of the
                  application or its backend services.
                </p>
              </LegalSection>

              <LegalSection id="accounts" number="03" title="Accounts">
                <p>
                  Niramaya provides registration, login, password management and
                  account-management functionality.
                </p>

                <p>
                  Users are responsible for providing accurate information
                  through the application and for maintaining the
                  confidentiality of their account credentials.
                </p>
              </LegalSection>

              <LegalSection
                id="responsibilities"
                number="04"
                title="User Responsibilities"
              >
                <p>
                  Users should provide information truthfully and use Niramaya
                  only for lawful and appropriate purposes.
                </p>

                <p>
                  Users should also review information presented within the
                  application carefully and make appropriate decisions about how
                  they use wellness-related information.
                </p>
              </LegalSection>

              <LegalSection id="wellness" number="05" title="Wellness Content">
                <p>
                  Niramaya provides wellness-oriented information,
                  recommendations and experiences, including Yoga and
                  Ayurveda-related content.
                </p>

                <p>
                  Such content is intended for wellness and informational
                  purposes and should not be treated as a replacement for
                  professional medical diagnosis, treatment or medical advice.
                </p>
              </LegalSection>

              <LegalSection id="consultation" number="06" title="Consultation">
                <p>
                  Niramaya includes Ayurvedic consultation workflows, including
                  functionality associated with online and offline consultation.
                </p>

                <p>
                  Consultation-related interactions should be understood in
                  accordance with the information and terms presented for the
                  applicable consultation service.
                </p>
              </LegalSection>

              <LegalSection
                id="property"
                number="07"
                title="Intellectual Property"
              >
                <p>
                  The Niramaya website, application, interface, branding,
                  original content and software components are part of the
                  project and should not be copied, redistributed or modified in
                  ways that violate applicable rights or the project&apos;s
                  applicable license.
                </p>
              </LegalSection>

              <LegalSection
                id="availability"
                number="08"
                title="Service Availability"
              >
                <p>
                  Niramaya is a software application and website. Availability
                  of particular features may depend on the current application
                  implementation, backend services and development status.
                </p>
              </LegalSection>

              <LegalSection id="changes" number="09" title="Changes">
                <p>
                  Niramaya may evolve as the project develops. Features,
                  interfaces and supporting services may therefore change over
                  time.
                </p>
              </LegalSection>

              <LegalSection id="contact" number="10" title="Contact">
                <p>
                  Questions about these Terms of Use can be directed through the
                  Niramaya contact page.
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
