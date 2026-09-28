import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="ecmatie-container">
        <div className="relative overflow-hidden rounded-[40px] border border-[#1769e0]/10 bg-gradient-to-br from-[#eef6ff] to-[#effcf9] px-8 py-16 text-center sm:px-12">

          {/* Background Glow */}
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#1769e0]/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">

            {/* Eyebrow */}
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769e0]">
              Your journey starts here
            </p>

            {/* Heading */}
            <h2 className="mt-5">
              Ready to build your
              <span className="ecmatie-gradient-text">
                {" "}next step?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-lg">
              Explore ECMatie and see how we're building a better way for
              students to manage education and career development.
            </p>

            {/* CTA */}
            <a
              href="#closed-testing"
              aria-label="Install ECMatie"
              className="
                mt-9
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#071b3a]
                px-8
                py-4
                text-sm
                font-semibold
                !text-white
                shadow-[0_15px_40px_rgba(7,27,58,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#0b315f]
                hover:shadow-[0_20px_50px_rgba(7,27,58,0.25)]
              "
            >
              <span className="!text-white">
                Install ECMatie
              </span>

              <ArrowRight
                size={17}
                strokeWidth={2.5}
                className="!text-white transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}