import Image from "next/image";
import { MessageCircle, Network, UserPlus } from "lucide-react";

export default function StudentNetwork() {
  return (
    <section className="ecmatie-section bg-[#f8fbff]">
      <div className="ecmatie-container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute inset-0 -z-10 rounded-full bg-[#12b8a6]/10 blur-3xl" />

            <div className="overflow-hidden rounded-[32px] border border-white bg-white p-2 shadow-[0_30px_100px_rgba(7,27,58,0.14)]">
              <Image
                src="/screenshots/network/connections.png"
                alt="ECMatie student network"
                width={700}
                height={1400}
                className="w-full rounded-[25px]"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#12b8a6]">
              Student Network
            </p>

            <h2 className="mt-4">
              Learn alongside people
              <span className="ecmatie-gradient-text">
                {" "}going somewhere.
              </span>
            </h2>

            <p className="mt-6 text-lg">
              Discover other students, build meaningful connections, and
              create a network around your academic and career journey.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <UserPlus className="text-[#1769e0]" />
                <p className="mt-4 font-bold text-[#071b3a]">Connect</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <Network className="text-[#12b8a6]" />
                <p className="mt-4 font-bold text-[#071b3a]">Network</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <MessageCircle className="text-[#1769e0]" />
                <p className="mt-4 font-bold text-[#071b3a]">Engage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}