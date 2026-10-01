import Container from "@/components/common/Container";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "What is Niramaya?",
    answer:
      "Niramaya is a full-stack mobile wellness and wellbeing application designed around a personalized wellness journey. It brings together wellness information, goals, progress, Yoga, Ayurveda, exploration and other account-related experiences.",
  },
  {
    question: "What information is collected during onboarding?",
    answer:
      "The onboarding experience includes areas covering personal details, physical health, wellbeing, lifestyle, nutrition, sleep, fitness and Yoga, and wellness preferences.",
  },
  {
    question: "Can I create wellness goals?",
    answer:
      "Yes. Niramaya includes functionality for creating, viewing and managing wellness goals and tracking goal-related progress.",
  },
  {
    question: "Can I track my progress?",
    answer:
      "Yes. Progress tracking is one of the application's main wellness modules and is connected with the goals experience.",
  },
  {
    question: "What is available in the Yoga section?",
    answer:
      "The Yoga experience provides Yoga-related content and recommendations that users can explore within the Niramaya application.",
  },
  {
    question: "What is available in the Ayurveda section?",
    answer:
      "The Ayurveda experience provides Ayurveda-related content and recommendations, including product-related exploration documented as part of the application.",
  },
  {
    question: "Does Niramaya support consultation?",
    answer:
      "Yes. The application includes Ayurvedic consultation workflows, including support for online and offline consultation workflows.",
  },
  {
    question: "Can I search and save content?",
    answer:
      "Yes. Search and favorites are included among the application's wellness and discovery functionality.",
  },
  {
    question: "Can I manage my wellness profile?",
    answer:
      "Yes. Niramaya includes health-profile management along with profile and account settings.",
  },
  {
    question: "Is Niramaya a medical or diagnostic application?",
    answer:
      "Niramaya is intended as a wellness application. Its informational content and recommendations are not a replacement for diagnosis, treatment or professional medical care.",
  },

  // ------------------------------------------------------------
  // Additional FAQs
  // ------------------------------------------------------------

  {
    question: "How does Niramaya personalize my wellness experience?",
    answer:
      "Niramaya connects your wellness profile, lifestyle information, preferences and goals to create a more personalized experience across the application.",
  },
  {
    question: "Can I update my wellness information after onboarding?",
    answer:
      "Yes. Niramaya includes health-profile and profile-management functionality so you can manage relevant personal and wellness information after completing onboarding.",
  },
  {
    question: "What can I see on the Niramaya dashboard?",
    answer:
      "The personalized dashboard brings together relevant areas of your wellness experience, including your profile, goals, progress and wellness-related experiences.",
  },
  {
    question: "Can I manage my wellness goals after creating them?",
    answer:
      "Yes. Niramaya provides functionality for viewing and managing wellness goals as part of the goals and progress experience.",
  },
  {
    question: "Is progress connected to my wellness goals?",
    answer:
      "Yes. Goals and progress are connected within the Niramaya wellness experience so you can follow progress related to the goals you create.",
  },
  {
    question: "Does Niramaya include a progress journal?",
    answer:
      "Yes. A progress journal is included as part of the progress-related functionality within the application.",
  },
  {
    question: "Can I explore different wellness topics?",
    answer:
      "Yes. The wellness discovery experience allows you to explore different areas and content across the Niramaya platform.",
  },
  {
    question: "Does Niramaya provide personalized recommendations?",
    answer:
      "Yes. Personalized recommendations are included within the wellness discovery experience and are connected to the broader personalized wellness journey.",
  },
  {
    question: "Can I search for wellness content?",
    answer:
      "Yes. Search functionality is included within the wellness and discovery experience to help you find relevant content.",
  },
  {
    question: "Can I save content for later?",
    answer:
      "Yes. Niramaya includes favorites functionality so you can save content and return to it later.",
  },
  {
    question: "Can I explore Yoga categories?",
    answer:
      "Yes. The Yoga experience includes practice-related content and categories that can be explored within the Niramaya wellness experience.",
  },
  {
    question: "Can I explore Ayurveda-related content?",
    answer:
      "Yes. Niramaya includes a dedicated Ayurveda experience with Ayurveda-related content and wellness-oriented recommendations.",
  },
  {
    question: "Can I book an Ayurvedic consultation?",
    answer:
      "Yes. Consultation booking is included within Niramaya's consultation experience, including Ayurvedic consultation workflows.",
  },
  {
    question: "Does Niramaya support online consultations?",
    answer:
      "Yes. Online consultation workflows are included as part of the application's consultation functionality.",
  },
  {
    question: "Does Niramaya support offline consultations?",
    answer:
      "Yes. Offline consultation workflows are also included within the consultation experience.",
  },
  {
    question: "Can I view my consultation history?",
    answer:
      "Yes. Niramaya includes consultation history as part of its consultation-related functionality.",
  },
  {
    question: "Can I manage my fitness and Yoga preferences?",
    answer:
      "Yes. Fitness and Yoga preferences are included among the wellness information and preferences represented within the Niramaya experience.",
  },
  {
    question: "Does Niramaya include nutrition and sleep information?",
    answer:
      "Yes. Nutrition and sleep are included among the lifestyle and wellness areas represented during the Niramaya onboarding and profile experience.",
  },
  {
    question: "Can I manage my notifications?",
    answer:
      "Yes. Niramaya includes notification functionality and notification-related settings within the application.",
  },
  {
    question: "Can I change my application settings?",
    answer:
      "Yes. Niramaya includes app settings where available application and preference-related settings can be managed.",
  },
  {
    question: "Can I change my password?",
    answer:
      "Yes. Password management is included as part of Niramaya's account functionality.",
  },
  {
    question: "Can I manage my Niramaya account?",
    answer:
      "Yes. Niramaya includes account-management functionality alongside profile and application settings.",
  },
  {
    question: "Can I create a new Niramaya account?",
    answer:
      "Yes. Niramaya includes signup and account-creation functionality as part of its authentication experience.",
  },
  {
    question: "Can I sign in to my Niramaya account?",
    answer:
      "Yes. Login functionality is included as part of the application's authentication experience.",
  },
  {
    question: "What areas are connected in the Niramaya experience?",
    answer:
      "Niramaya connects your wellness profile, goals, progress, wellness discovery, Yoga, Ayurveda and consultation experiences within one application.",
  },
];

export default function FAQList() {
  return (
    <section className="bg-white">
      <Container>
        <div className="py-14 sm:py-16 lg:py-20">
          {/* ====================================================== */}
          {/* HEADER                                                  */}
          {/* ====================================================== */}

          <div className="grid gap-7 border-b border-[#DDE3D9] pb-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#9AA49B]">
                  01
                </span>

                <span className="h-px w-7 bg-[#C9D4C6]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4D6A50]">
                  Common questions
                </span>
              </div>

              <h2 className="mt-5 max-w-xl text-[2.5rem] font-semibold leading-[1] tracking-[-0.05em] text-[#263F31] sm:text-[3.25rem]">
                Everything you need to
                <span className="text-[#4D6A50]"> get started.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <p className="max-w-lg text-sm leading-7 text-[#6D796F] lg:text-right">
                Find answers about Niramaya, its wellness experience, account
                features and the different areas available in the application.
              </p>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#929B92]">
                  {faqs.length} questions
                </span>
              </div>
            </div>
          </div>

          {/* ====================================================== */}
          {/* FAQ LIST                                                 */}
          {/* ====================================================== */}

          <div className="mt-8">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="group border-b border-[#E3E7DF] transition-colors duration-200 hover:bg-[#F7F8F4]"
              >
                <div className="flex items-start gap-4 px-3 sm:px-5">
                  {/* Number */}
                  <div className="hidden pt-6 sm:block">
                    <span className="text-[9px] font-bold tracking-[0.15em] text-[#A2ABA3]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* FAQ */}
                  <div className="min-w-0 flex-1">
                    <FAQItem question={faq.question} answer={faq.answer} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ====================================================== */}
          {/* FOOTER                                                  */}
          {/* ====================================================== */}

          <div className="mt-7 flex flex-col gap-2 border-t border-[#DDE3D9] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9AA49B]">
              Niramaya Help Center
            </span>

            <span className="text-xs text-[#929B92]">
              Wellness · Product · Getting started
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
