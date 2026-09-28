"use client";

import { motion } from "framer-motion";

const elements = [
  {
    className: "left-[8%] top-[22%]",
    size: "h-3 w-3",
    delay: 0,
    duration: 5,
  },
  {
    className: "right-[12%] top-[28%]",
    size: "h-2 w-2",
    delay: 1,
    duration: 6,
  },
  {
    className: "left-[16%] bottom-[25%]",
    size: "h-2 w-2",
    delay: 2,
    duration: 5.5,
  },
  {
    className: "right-[20%] bottom-[20%]",
    size: "h-3 w-3",
    delay: 0.5,
    duration: 7,
  },
  {
    className: "left-[45%] top-[15%]",
    size: "h-2 w-2",
    delay: 1.5,
    duration: 6,
  },
];

export default function FloatingElements() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.className} ${element.size} rounded-full bg-[#12b8a6]/30 blur-[1px]`}
          animate={{
            y: [0, -18, 0, 14, 0],
            x: [0, 8, -5, 6, 0],
            opacity: [0.25, 0.65, 0.35, 0.6, 0.25],
            scale: [1, 1.3, 0.9, 1.15, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}