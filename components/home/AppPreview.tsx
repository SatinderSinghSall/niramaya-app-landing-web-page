import Link from "next/link";
import Container from "@/components/common/Container";

export default function AppPreview() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="overflow-hidden border border-[#DCE3D9] bg-[#EEF2E6]">
          <div className="grid items-center gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_0.8fr] lg:p-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4D6A50]">
                The Niramaya app
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#263F31] sm:text-4xl">
                Your wellness journey, wherever you are.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#6D796F]">
                From your health profile and goals to progress, Yoga, Ayurveda
                and consultations, Niramaya brings your wellness experience
                together in one app.
              </p>

              <Link
                href="/app"
                className="mt-8 inline-flex items-center rounded-lg bg-[#4D6A50] px-6 py-3.5 text-sm font-medium text-white hover:bg-[#3F5942]"
              >
                Discover the app
              </Link>
            </div>

            <div className="mx-auto w-full max-w-xs">
              <div className="rounded-[2rem] border-[7px] border-[#263F31] bg-white p-3 shadow-xl">
                <div className="rounded-[1.4rem] bg-[#F7F9F5] p-5">
                  <div className="mx-auto h-1 w-16 rounded-full bg-[#D5DDD2]" />

                  <p className="mt-8 text-xs text-[#929B92]">Good morning</p>

                  <h3 className="mt-1 text-xl font-semibold text-[#263F31]">
                    Your wellness
                  </h3>

                  <div className="mt-6 rounded-xl bg-white p-4">
                    <p className="text-xs text-[#929B92]">Today's progress</p>

                    <div className="mt-4 h-2 rounded-full bg-[#E8ECE5]">
                      <div className="h-full w-[64%] rounded-full bg-[#4D6A50]" />
                    </div>

                    <p className="mt-3 text-sm font-medium text-[#263F31]">
                      Keep going — you're making progress.
                    </p>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white p-4">
                      <p className="text-xs text-[#929B92]">Goals</p>
                      <p className="mt-1 font-semibold text-[#263F31]">04</p>
                    </div>

                    <div className="rounded-xl bg-white p-4">
                      <p className="text-xs text-[#929B92]">Progress</p>
                      <p className="mt-1 font-semibold text-[#263F31]">64%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
