import {
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Network,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Study Planning",
    description:
      "Create subjects, organize tasks, manage your schedule, and build consistent study habits.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "See your study activity and progress as you work toward your academic goals.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Roadmaps",
    description:
      "Turn a career goal into stages, milestones, and a structured development journey.",
  },
  {
    icon: Network,
    title: "Student Network",
    description:
      "Discover students, build connections, and become part of a learning community.",
  },
  {
    icon: CheckCircle2,
    title: "Personal Growth",
    description:
      "Bring your learning and career development into one continuous journey.",
  },
];

export default function Features() {
  return (
    <section id="features" className="ecmatie-section">
      <div className="ecmatie-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769e0]">
            Everything in one place
          </p>

          <h2 className="mt-4">
            Your education.
            <br />
            <span className="ecmatie-gradient-text">Your future.</span>
          </h2>

          <p className="mx-auto mt-6 text-lg">
            ECMatie brings the core parts of a student's academic and career
            journey together.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`group rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_15px_50px_rgba(7,27,58,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#12b8a6]/20 hover:shadow-[0_25px_70px_rgba(7,27,58,0.09)] ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#eef6ff] to-[#effcf9] text-[#1769e0]">
                  <Icon size={27} />
                </div>

                <h3 className="mt-7 text-2xl">{feature.title}</h3>

                <p className="mt-3 leading-7">
                  {feature.description}
                </p>

                <div className="mt-8 h-1 w-12 rounded-full bg-gradient-to-r from-[#1769e0] to-[#12b8a6] transition-all duration-300 group-hover:w-20" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}