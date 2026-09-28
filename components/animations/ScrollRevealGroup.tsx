"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export default function ScrollRevealGroup({
  children,
  className = "",
  stagger = 0.08,
}: ScrollRevealGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}