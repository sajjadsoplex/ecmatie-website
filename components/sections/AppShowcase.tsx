import Image from "next/image";

const screenshots = [
  {
    src: "/screenshots/home/dashboard.png",
    title: "Home",
    description: "See your daily progress at a glance.",
  },
  {
    src: "/screenshots/study/daily-schedule.png",
    title: "Daily Schedule",
    description: "Turn your plans into actionable study tasks.",
  },
  {
    src: "/screenshots/study/subjects.png",
    title: "Subjects",
    description: "Keep your academic subjects organized.",
  },
  {
    src: "/screenshots/roadmap/career-roadmap.png",
    title: "Career Roadmap",
    description: "Follow your path toward your career goal.",
  },
];

export default function AppShowcase() {
  return (
    <section id="app" className="ecmatie-section bg-[#071b3a]">
      <div className="ecmatie-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#35d8c5]">
            Inside ECMatie
          </p>

          <h2 className="mt-4 text-white">
            Designed around
            <br />
            <span className="text-[#35d8c5]">your journey.</span>
          </h2>

          <p className="mx-auto mt-6 text-lg text-slate-300">
            A closer look at the experience we're building for students.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {screenshots.map((screen) => (
            <div key={screen.src} className="group">
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur">
                <Image
                  src={screen.src}
                  alt={`ECMatie ${screen.title}`}
                  width={600}
                  height={1200}
                  className="w-full rounded-[22px] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <h3 className="mt-5 text-lg text-white">{screen.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {screen.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}