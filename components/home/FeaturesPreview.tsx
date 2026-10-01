import Link from "next/link";
import Container from "@/components/common/Container";

const features = [
  {
    title: "Health Profile",
    description:
      "Keep important aspects of your health and wellbeing organized in one centralized place.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    tag: "Organization",
  },
  {
    title: "Goals",
    description:
      "Define meaningful wellness goals and turn your daily intentions into measurable progress.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    tag: "Milestones",
  },
  {
    title: "Progress",
    description:
      "See how your wellness efforts develop over time and stay connected to your personal journey.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tag: "Analytics",
  },
  {
    title: "Explore",
    description:
      "Discover curated wellness content and recommendations across different areas of wellbeing.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    tag: "Discovery",
  },
  {
    title: "Yoga",
    description:
      "Explore guided yoga practices, breathwork, and alignment tips tailored to your interests.",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800",
    tag: "Mind & Body",
  },
  {
    title: "Ayurveda",
    description:
      "Discover ancient Ayurveda-focused principles, lifestyle routines, and holistic wellness recommendations.",
    image:
      "https://images.unsplash.com/photo-1608248597359-f53835f8502d?auto=format&fit=crop&q=80&w=800",
    tag: "Heritage",
  },
];

export default function FeaturesPreview() {
  return (
    <section className="bg-stone-50/70 py-16 sm:py-24 border-b border-stone-200/60">
      <Container>
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#17382C]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#17382C]">
            Features & Capabilities
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-4xl lg:text-[3.2rem] font-serif">
            Everything you need for <br className="hidden sm:block" />
            better everyday wellbeing.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-600">
            Niramaya brings together essential tools and resources to help you
            understand yourself, build healthy habits, and make steady progress.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl bg-stone-950 min-h-[380px] flex flex-col justify-between p-7 shadow-sm border border-stone-200/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-[#17382C]/40"
            >
              {/* Background Image with Smooth Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-70"
                style={{ backgroundImage: `url(${feature.image})` }}
              />

              {/* Balanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

              {/* Top Meta info */}
              <div className="relative z-10 flex justify-between items-center">
                <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/15 shadow-sm">
                  {feature.tag}
                </span>
                <span className="text-xs font-mono font-semibold tracking-wider text-white/80 bg-black/30 px-2 py-0.5 rounded-md">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Bottom Text info */}
              <div className="relative z-10 transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                <h3 className="text-2xl font-semibold tracking-tight text-white font-serif">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-200/90 font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA LINK - POLISHED BUTTON */}
        <div className="mt-14 text-center">
          <Link
            href="/features"
            className="group inline-flex items-center gap-3 rounded-full bg-[#17382C] px-8 py-4 text-sm font-medium text-white shadow-md shadow-[#17382C]/20 transition-all duration-300 hover:bg-[#112a21] hover:shadow-xl hover:shadow-[#17382C]/30 hover:-translate-y-0.5"
          >
            <span className="text-white tracking-wide">
              Explore all features
            </span>
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
