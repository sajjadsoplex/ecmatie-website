import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GradientText from "@/components/ui/GradientText";
import { assetPath } from "@/lib/assetPath";

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#071b3a] py-24 md:py-32"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-[-180px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#1769e0]/15 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#12b8a6]/10 blur-[120px]" />

      <div className="relative mx-auto grid w-[min(1180px,calc(100%-40px))] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

        {/* =====================================================
            FOUNDER IMAGE
            ===================================================== */}

        <ScrollReveal>
          <div className="relative mx-auto w-full max-w-[470px]">

            {/* Outer glow */}
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#1769e0]/30 to-[#12b8a6]/20 blur-2xl" />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl">

              <Image
                src={assetPath("/founder/sajjad.png")}
                alt="Founder of ECMatie"
                width={900}
                height={1100}
                className="block h-auto w-full object-contain"
                priority
              />

            </div>
          </div>
        </ScrollReveal>

        {/* =====================================================
            FOUNDER CONTENT
            ===================================================== */}

        <ScrollReveal delay={0.15}>
          <div className="max-w-2xl">

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#12b8a6]">
              The Person Behind ECMatie
            </p>

            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building a better way to navigate{" "}
              <GradientText>education and career.</GradientText>
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-white/70">
              <p>
                ECMatie is built around a simple idea: students should not
                have to figure out their education, skills, and career path
                completely on their own.
              </p>

              <p>
                We are building a place where students can organize where
                they are, understand where they want to go, and take the
                next step with more clarity.
              </p>
            </div>

            {/* Founder identity */}

            <div className="mt-10 border-l-2 border-[#12b8a6] pl-5">
              <p className="text-xl font-bold text-white">
                Sajjad Ullah
              </p>

              <p className="mt-1 text-sm text-white/55">
                Founder, ECMatie
              </p>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}