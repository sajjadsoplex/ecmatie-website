import { ArrowRight, Map, UserRound, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserRound,
    title: "Build your profile",
    description:
      "Define your education, interests, skills, and career direction.",
  },
  {
    number: "02",
    icon: Map,
    title: "Plan your journey",
    description:
      "Organize your studies and create a roadmap toward your goals.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Keep progressing",
    description:
      "Complete tasks, track progress, and grow your student network.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="ecmatie-section">
      <div className="ecmatie-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769e0]">
            How It Works
          </p>

          <h2 className="mt-4">
            From where you are
            <br />
            <span className="ecmatie-gradient-text">to where you're going.</span>
          </h2>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-16 hidden h-px bg-gradient-to-r from-[#1769e0]/20 via-[#12b8a6] to-[#1769e0]/20 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-[28px] border border-slate-200 bg-white p-7 text-center shadow-[0_15px_50px_rgba(7,27,58,0.05)]"
              >
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#1769e0] to-[#12b8a6] text-white shadow-lg">
                  <Icon size={26} />
                </div>

                <p className="mt-6 text-xs font-bold tracking-[0.2em] text-[#1769e0]">
                  {step.number}
                </p>

                <h3 className="mt-3 text-xl">{step.title}</h3>

                <p className="mt-3 text-sm leading-6">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}