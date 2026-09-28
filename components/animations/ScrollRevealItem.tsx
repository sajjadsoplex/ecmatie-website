"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealItemProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollRevealItem({
  children,
  className = "",
}: ScrollRevealItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: 25,
        },

        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}