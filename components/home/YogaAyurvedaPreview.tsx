import Link from "next/link";
import Container from "@/components/common/Container";

export default function YogaAyurvedaPreview() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="border border-[#E3E7DF] bg-[#EEF2E6] p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#4D6A50]">
              Yoga
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#263F31]">
              Movement, breath and mindful practice.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-[#6D796F]">
              Explore Yoga practices and information that can become part of
              your everyday wellness routine.
            </p>

            <Link
              href="/yoga"
              className="mt-8 inline-block text-sm font-semibold text-[#4D6A50]"
            >
              Explore Yoga →
            </Link>
          </article>

          <article className="border border-[#E3E7DF] bg-[#F8F9F6] p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#4D6A50]">
              Ayurveda
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#263F31]">
              Traditional wisdom for everyday wellbeing.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-[#6D796F]">
              Discover Ayurveda-focused information and recommendations as
              another part of your broader wellness exploration.
            </p>

            <Link
              href="/ayurveda"
              className="mt-8 inline-block text-sm font-semibold text-[#4D6A50]"
            >
              Explore Ayurveda →
            </Link>
          </article>
        </div>
      </Container>
    </section>
  );
}
