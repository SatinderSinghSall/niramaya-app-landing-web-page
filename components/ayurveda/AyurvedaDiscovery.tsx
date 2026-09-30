import { Bookmark, Compass, Search, ArrowUpRight } from "lucide-react";
import Container from "@/components/common/Container";

const discovery = [
  {
    icon: Compass,
    title: "Explore",
    text: "Discover Ayurveda alongside other wellness content.",
  },
  {
    icon: Search,
    title: "Search",
    text: "Find Ayurveda content using the application's search experience.",
  },
  {
    icon: Bookmark,
    title: "Favorites",
    text: "Save supported wellness content for easier access later.",
  },
];

export default function AyurvedaDiscovery() {
  return (
    <section className="bg-[#F4F1E8] py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#716A4F]">
              Discovery
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#30372D] sm:text-5xl">
              Ayurveda lives inside a wider wellness experience.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#6F746B] sm:text-base">
              Move between Ayurveda content and the rest of the Niramaya
              discovery experience without losing the bigger picture.
            </p>

            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#716A4F]">
              Explore connected wellness
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          <div className="space-y-3">
            {discovery.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-center gap-5 rounded-3xl border border-[#E3DFD3] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F1EEE3] text-[#716A4F]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#A3A093]">
                        0{index + 1}
                      </span>

                      <h3 className="font-semibold text-[#30372D]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-1 text-xs leading-5 text-[#8A8A80]">
                      {item.text}
                    </p>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-[#AAA79B] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
