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
];

export default function FAQList() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4D6A50]">
              Common questions
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#263F31] sm:text-4xl">
              Everything you need to know to get started.
            </h2>
          </div>

          <div className="border-t border-[#E3E7DF]">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
