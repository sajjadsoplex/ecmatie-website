import { Clock3, Download, Smartphone } from "lucide-react";

export default function ClosedTesting() {
  return (
    <section id="closed-testing" className="ecmatie-section">
      <div className="ecmatie-container">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#071b3a] via-[#0b315f] to-[#087f78] p-8 text-center sm:p-12 lg:p-16">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#12b8a6]/20 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#1769e0]/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur">
              <Smartphone size={29} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#35d8c5]">
              Google Play
            </p>

            <h2 className="mt-4 text-white">
              ECMatie is currently in
              <span className="text-[#35d8c5]"> closed testing.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We're currently testing ECMatie with a limited group of
              students. The public Google Play release will be available
              soon.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                <Clock3 size={16} />
                Public launch coming soon
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                <Download size={16} />
                Google Play
              </div>
            </div>

            <p className="mt-8 text-sm text-slate-400">
              Interested in becoming a tester? Follow ECMatie for future
              testing opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}