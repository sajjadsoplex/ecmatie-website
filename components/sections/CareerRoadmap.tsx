import Image from "next/image";
import { ArrowRight, Flag, Route } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

const stages = [
  "Foundation",
  "Core Knowledge",
  "Skill Development",
  "Experience",
  "Career Readiness",
];

export default function CareerRoadmap() {
  return (
    <section className="ecmatie-section">
      <div className="ecmatie-container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#12b8a6]">
              Career Roadmap
            </p>

            <h2 className="mt-4">
              Don't just choose a career.
              <span className="ecmatie-gradient-text">
                {" "}build toward it.
              </span>
            </h2>

            <p className="mt-6 text-lg">
              ECMatie turns your career goal into a structured journey with
              stages and milestones.
            </p>

            <div className="mt-8 space-y-3">
              {stages.map((stage, index) => (
                <div
                  key={stage}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#effcf9] text-sm font-bold text-[#12b8a6]">
                    {index + 1}
                  </div>

                  <span className="font-semibold text-[#071b3a]">
                    {stage}
                  </span>

                  <ArrowRight
                    size={17}
                    className="ml-auto text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-r from-[#1769e0]/10 to-[#12b8a6]/10 blur-3xl" />

            <div className="overflow-hidden rounded-[32px] border border-white bg-white p-2 shadow-[0_30px_100px_rgba(7,27,58,0.15)]">
              <Image
                src={assetPath("/screenshots/roadmap/career-roadmap.png")}
                alt="ECMatie career roadmap"
                width={700}
                height={1400}
                className="w-full rounded-[25px]"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-white bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#071b3a] text-white">
                <Flag size={18} />
              </div>

              <div>
                <p className="text-xs text-slate-500">Your goal</p>
                <p className="text-sm font-bold text-[#071b3a]">
                  Your future career
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl items-center justify-center gap-3 text-center text-sm text-slate-500">
          <Route size={18} className="text-[#1769e0]" />
          Your path can evolve as you grow.
        </div>
      </div>
    </section>
  );
}