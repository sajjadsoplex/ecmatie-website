const journey = [
  {
    number: "01",
    title: "Understand yourself",
    text: "Explore your interests, education, skills, and direction.",
  },
  {
    number: "02",
    title: "Plan your studies",
    text: "Organize subjects, schedules, and daily academic tasks.",
  },
  {
    number: "03",
    title: "Build your skills",
    text: "Work toward the capabilities your future path requires.",
  },
  {
    number: "04",
    title: "Shape your career",
    text: "Follow a structured roadmap toward your career goal.",
  },
];

export default function StudentJourney() {
  return (
    <section className="ecmatie-section bg-[#f8fbff]">
      <div className="ecmatie-container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769e0]">
              The Journey
            </p>

            <h2 className="mt-4">
              Education today.
              <br />
              <span className="ecmatie-gradient-text">
                Career tomorrow.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-lg">
              ECMatie is designed to grow with you as your goals and skills
              evolve.
            </p>
          </div>

          <div className="space-y-4">
            {journey.map((item) => (
              <div
                key={item.number}
                className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1769e0] to-[#12b8a6] text-sm font-bold text-white">
                  {item.number}
                </div>

                <div>
                  <h3 className="text-xl">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}