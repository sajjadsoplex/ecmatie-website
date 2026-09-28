"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function MagneticButton({
  children,
  href,
  className = "",
}: MagneticButtonProps) {
  const content = (
    <motion.span
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
      className={`
        inline-flex
        items-center
        justify-center
        ${className}
      `}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return <button type="button">{content}</button>;
}