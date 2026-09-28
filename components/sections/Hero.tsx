"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      <div className="ecmatie-container relative z-10 flex min-h-[calc(100vh-8rem)] items-center justify-center">
        <div className="mx-auto max-w-6xl text-center">

          {/* =====================================================
              TAGLINE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#12b8a6]/20 bg-white/75 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.25em] text-[#1769e0] shadow-sm backdrop-blur-md">
              <Sparkles size={14} />
              Your Education and Career Mate
            </div>
          </motion.div>

          {/* =====================================================
              HERO TITLE
          ===================================================== */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="ecmatie-gradient-text text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[6.5rem]"
          >
            Build Your Future.
            <br />
            One Step at a Time.
          </motion.h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
          >
            Plan your studies, build your skills, discover your career path,
            track your progress, and connect with students on one platform.
          </motion.p>

          {/* =====================================================
              PRIMARY CTA BUTTONS
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {/* Install ECMatie */}

            <a
              href="#closed-testing"
              aria-label="Install ECMatie"
              className="
                group
                inline-flex
                min-w-[190px]
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#071b3a]
                px-8
                py-4
                text-sm
                font-bold
                !text-white
                shadow-[0_15px_40px_rgba(7,27,58,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#0b315f]
                hover:shadow-[0_20px_50px_rgba(7,27,58,0.30)]
              "
            >
              <span className="!text-white">
                Install ECMatie
              </span>

              <ArrowRight
                size={17}
                strokeWidth={2.5}
                className="text-white transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Explore ECMatie */}

            <a
              href="#features"
              aria-label="Explore ECMatie"
              className="
                group
                inline-flex
                min-w-[190px]
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[#1769e0]/20
                bg-white/75
                px-8
                py-4
                text-sm
                font-bold
                text-[#071b3a]
                shadow-sm
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#12b8a6]/40
                hover:bg-white
              "
            >
              <span className="text-[#071b3a]">
                Explore ECMatie
              </span>

              <ArrowDown
                size={17}
                strokeWidth={2.5}
                className="text-[#071b3a] transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </motion.div>

          {/* =====================================================
              WHATSAPP CHANNEL
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-5 flex justify-center"
          >
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
                bg-white/70
                px-5
                py-2.5
                text-sm
                font-semibold
                text-[#087f78]
                shadow-sm
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#12b8a6]/40
                hover:bg-[#effcf9]
              "
            >
              <MessageCircle
                size={17}
                strokeWidth={2.5}
                className="text-[#12b8a6] transition-transform duration-300 group-hover:scale-110"
              />

              <span>
                Join WhatsApp Channel
              </span>

              <ArrowRight
                size={15}
                className="text-[#087f78] transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* =====================================================
              CLOSED TESTING STATUS
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#12b8a6]/20 bg-[#effcf9]/80 px-4 py-2 text-xs font-medium text-[#087f78] backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#12b8a6]" />

            Currently in closed testing
          </motion.div>

          {/* =====================================================
              APP PREVIEW
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mx-auto mt-16 max-w-4xl"
          >
            <div className="relative mx-auto max-w-sm">

              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  -z-10
                  scale-110
                  rounded-[40px]
                  bg-gradient-to-r
                  from-[#1769e0]/15
                  to-[#12b8a6]/15
                  blur-3xl
                "
              />

              {/* Screenshot */}

              <div
                className="
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/70
                  bg-white/80
                  p-2
                  shadow-[0_30px_100px_rgba(7,27,58,0.15)]
                  backdrop-blur-xl
                "
              >
                <Image
                  src="/screenshots/home/dashboard.png"
                  alt="ECMatie student dashboard"
                  width={700}
                  height={1400}
                  priority
                  className="h-auto w-full rounded-[25px]"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}