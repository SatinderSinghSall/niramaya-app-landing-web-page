import type { Metadata } from "next";

import ContactHero from "@/components/information/ContactHero";
import ContactDetails from "@/components/information/ContactDetails";
import ContactForm from "@/components/information/ContactForm";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact Niramaya",
  description:
    "Contact Niramaya with questions about the wellness application, website and platform experience.",
  path: "/contact",
  keywords: [
    "contact Niramaya",
    "Niramaya support",
    "Niramaya contact",
    "wellness app support",
  ],
});

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
          <ContactDetails />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
