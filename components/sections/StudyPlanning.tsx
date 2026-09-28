import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

const points = [
  "Create and organize your subjects",
  "Build daily study tasks",
  "Manage your schedule",
  "Track study progress",
  "Build consistent study habits",
];

export default function StudyPlanning() {
  return (
    <section className="ecmatie-section overflow-hidden bg-[#f8fbff]">
      <div className="ecmatie-container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 -z-10 rounded-full bg-[#1769e0]/10 blur-3xl" />

              <div className="overflow-hidden rounded-[32px] border border-white bg-white p-2 shadow-[0_30px_90px_rgba(7,27,58,0.14)]">
                <Image
                  src={assetPath("/screenshots/study/study.png")}
                  alt="ECMatie study planning"
                  width={700}
                  height={1400}
                  className="w-full rounded-[25px]"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769e0]">
              Study Planning
            </p>

            <h2 className="mt-4">
              Turn your study plan into
              <span className="ecmatie-gradient-text"> action.</span>
            </h2>

            <p className="mt-6 text-lg">
              Keep your daily academic work organized and make progress
              visible.
            </p>

            <div className="mt-8 space-y-4">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2
                    size={21}
                    className="shrink-0 text-[#12b8a6]"
                  />

                  <span className="font-medium text-[#071b3a]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-3xl font-bold text-[#1769e0]">Daily</p>
                <p className="mt-1 text-sm">Study planning</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-3xl font-bold text-[#12b8a6]">Progress</p>
                <p className="mt-1 text-sm">Track your journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}