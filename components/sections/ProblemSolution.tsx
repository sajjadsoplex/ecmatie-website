import { ArrowRight, Compass, GraduationCap, Route } from "lucide-react";

const problems = [
  "Unorganized study schedules",
  "Unclear career direction",
  "Difficulty tracking progress",
  "Limited student connections",
];

const solutions = [
  {
    icon: GraduationCap,
    title: "Study Planning",
    description:
      "Organize subjects, schedules, tasks, and daily study progress.",
  },
  {
    icon: Route,
    title: "Career Roadmaps",
    description:
      "Break your career goal into structured stages and milestones.",
  },
  {
    icon: Compass,
    title: "One Student Journey",
    description:
      "Bring education, skills, career development, and networking together.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="ecmatie-section bg-[#f8fbff]">
      <div className="ecmatie-container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#1769e0]">
              The Problem
            </p>

            <h2>
              Education is more than
              <span className="ecmatie-gradient-text"> studying.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg">
              Students often manage their studies, career planning,
              development, and networking across disconnected tools.
            </p>

            <div className="mt-8 space-y-3">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#1769e0]" />
                  <span className="font-medium text-[#071b3a]">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#12b8a6]">
              The ECMatie Approach
            </p>

            <h2>
              One place to
              <span className="ecmatie-gradient-text"> move forward.</span>
            </h2>

            <div className="mt-8 space-y-4">
              {solutions.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_15px_45px_rgba(7,27,58,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(7,27,58,0.09)]"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#effcf9] text-[#12b8a6]">
                        <Icon size={27} />
                      </div>

                      <div>
                        <h3 className="text-xl">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6">
                          {item.description}
                        </p>
                      </div>

                      <ArrowRight
                        size={19}
                        className="ml-auto mt-2 shrink-0 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#1769e0]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}