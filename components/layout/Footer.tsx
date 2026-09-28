import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="ecmatie-container py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Image
              src="/brand/logo.png"
              alt="ECMatie — Your Education and Career Mate"
              width={145}
              height={60}
              className="h-12 w-auto object-contain"
            />

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
              ECMatie is your education and career mate — helping students
              organize their journey from learning toward their future.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-bold text-[#071b3a]">Explore</h3>

            <div className="mt-5 space-y-3">
              <a
                href="#features"
                className="block text-sm text-slate-500 transition-colors hover:text-[#1769e0]"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="block text-sm text-slate-500 transition-colors hover:text-[#1769e0]"
              >
                How It Works
              </a>

              <a
                href="#app"
                className="block text-sm text-slate-500 transition-colors hover:text-[#1769e0]"
              >
                App
              </a>

              <a
                href="#founder"
                className="block text-sm text-slate-500 transition-colors hover:text-[#1769e0]"
              >
                Founder
              </a>
            </div>
          </div>

          {/* ECMatie */}
          <div>
            <h3 className="text-sm font-bold text-[#071b3a]">ECMatie</h3>

            <div className="mt-5 space-y-4">
              {/* Closed Testing */}
              <a
                href="#closed-testing"
                className="
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  bg-[#071b3a]
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  !text-white
                  shadow-[0_10px_30px_rgba(7,27,58,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#0b315f]
                "
              >
                <span className="!text-white">Closed Testing</span>
                <ArrowUpRight size={14} className="text-white" />
              </a>

              {/* WhatsApp Channel */}
              <a
                href="https://whatsapp.com/channel/0029VbDRo898kyyW4mDfaX3u"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join ECMatie WhatsApp Channel"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#12b8a6]/20
                  bg-[#effcf9]
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-[#087f78]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#12b8a6]/40
                  hover:bg-[#e5faf6]
                "
              >
                <MessageCircle
                  size={15}
                  strokeWidth={2.5}
                  className="text-[#12b8a6] transition-transform duration-300 group-hover:scale-110"
                />

                <span>WhatsApp Channel</span>

                <ArrowUpRight
                  size={14}
                  className="text-[#087f78] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* Website */}
              <a
                href="https://ecmatie.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-slate-500 transition-colors hover:text-[#1769e0]"
              >
                ecmatie.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ECMatie. All rights reserved.</p>

          <p>ECMatie: Your Education and Career Mate.</p>
        </div>
      </div>
    </footer>
  );
}