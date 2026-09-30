import Link from "next/link";
import Container from "@/components/common/Container";

export default function GoalsProgressPreview() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4D6A50]">
              Goals & Progress
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#263F31] sm:text-4xl">
              Turn intentions into progress.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#6D796F]">
              Wellness becomes easier to continue when you can see what you are
              working toward. Set goals, monitor progress and keep your journey
              moving forward.
            </p>

            <Link
              href="/features"
              className="mt-8 inline-block text-sm font-semibold text-[#4D6A50]"
            >
              Discover goals & progress →
            </Link>
          </div>

          <div className="rounded-2xl border border-[#DCE3D9] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#929B92]">
                  Wellness journey
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[#263F31]">
                  Your goals
                </h3>
              </div>

              <span className="text-2xl font-semibold text-[#4D6A50]">72%</span>
            </div>

            <div className="mt-7 h-2 rounded-full bg-[#E8ECE5]">
              <div className="h-full w-[72%] rounded-full bg-[#4D6A50]" />
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3">
              <div className="border border-[#E3E7DF] p-4">
                <p className="text-xs text-[#929B92]">Total</p>
                <p className="mt-1 text-lg font-semibold text-[#263F31]">05</p>
              </div>

              <div className="border border-[#E3E7DF] p-4">
                <p className="text-xs text-[#929B92]">Active</p>
                <p className="mt-1 text-lg font-semibold text-[#263F31]">03</p>
              </div>

              <div className="border border-[#E3E7DF] p-4">
                <p className="text-xs text-[#929B92]">Done</p>
                <p className="mt-1 text-lg font-semibold text-[#263F31]">02</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
