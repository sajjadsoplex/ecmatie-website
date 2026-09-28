"use client";

import { motion } from "framer-motion";

export default function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#fbfdff]" />

      {/* Blue glow */}
      <motion.div
        className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-[#1769e0]/10 blur-[110px]"
        animate={{
          x: [0, 60, -20, 0],
          y: [0, 40, 90, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Teal glow */}
      <motion.div
        className="absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full bg-[#12b8a6]/10 blur-[120px]"
        animate={{
          x: [0, -50, 20, 0],
          y: [0, -40, -80, 0],
          scale: [1, 0.94, 1.08, 1],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Central soft glow */}
      <motion.div
        className="absolute left-1/2 top-[35%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#1769e0]/5 blur-[120px]"
        animate={{
          scale: [1, 1.15, 0.9, 1],
          opacity: [0.35, 0.55, 0.3, 0.35],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(to_right,#071b3a_1px,transparent_1px),linear-gradient(to_bottom,#071b3a_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />
    </div>
  );
}