import Image from "next/image";
import Container from "@/components/common/Container";

const screens = [
  {
    title: "Home",
    description: "Your main wellness dashboard.",
    image: "/app/home.png",
  },
  {
    title: "Goals",
    description: "Create and follow your wellness goals.",
    image: "/app/goals.png",
  },
  {
    title: "Progress",
    description: "Record and review your progress.",
    image: "/app/progress.png",
  },
  {
    title: "Yoga",
    description: "Explore Yoga practices and content.",
    image: "/app/yoga.png",
  },
  {
    title: "Ayurveda",
    description: "Discover Ayurvedic wellness content.",
    image: "/app/ayurveda.png",
  },
  {
    title: "Explore",
    description: "Discover wellness content in one place.",
    image: "/app/explore.png",
  },
];

export default function AppScreens() {
  return (
    <section id="screens" className="bg-white py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#EEF2E6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4D6A50]">
            Inside Niramaya
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-[#263F31] sm:text-5xl">
            See the experience.
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#6D796F] sm:text-base">
            Explore the screens that make up the Niramaya mobile experience.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {screens.map((screen, index) => (
            <article
              key={screen.title}
              className="group overflow-hidden rounded-[2rem] border border-[#E3E7DF] bg-[#FAFBF8] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
            >
              <div className="relative flex min-h-[470px] items-center justify-center overflow-hidden bg-[#EEF2E6] p-7">
                <div className="absolute left-5 top-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#929B92]">
                  0{index + 1}
                </div>

                <div className="relative h-[410px] w-[205px] overflow-hidden rounded-[2.1rem] border-[5px] border-[#263F31] bg-[#263F31] shadow-[0_25px_50px_rgba(38,63,49,0.2)]">
                  <Image
                    src={screen.image}
                    alt={`Niramaya ${screen.title} mobile app screen`}
                    fill
                    sizes="205px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#263F31]">
                  {screen.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#6D796F]">
                  {screen.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
