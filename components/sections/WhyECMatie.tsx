import {
  Compass,
  Layers3,
  Sparkles,
  Target,
} from "lucide-react";

const points = [
  {
    icon: Layers3,
    title: "Connected",
    description:
      "Your study planning, career development, progress, and networking live together.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description:
      "Turn broad ambitions into concrete steps and milestones.",
  },
  {
    icon: Compass,
    title: "Structured",
    description:
      "Make your next step clearer with organized plans and roadmaps.",
  },
  {
    icon: Sparkles,
    title: "Built for Students",
    description:
      "Designed around the real journey students take from education toward careers.",
  },
];

export default function WhyECMatie() {
  return (
    <section className="ecmatie-section">
      <div className="ecmatie-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#12b8a6]">
            Why ECMatie
          </p>

          <h2 className="mt-4">
            More than another
            <br />
            <span className="ecmatie-gradient-text">
              productivity app.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_15px_50px_rgba(7,27,58,0.05)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#effcf9] text-[#12b8a6]">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-xl">{point.title}</h3>

                <p className="mt-3 text-sm leading-6">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}