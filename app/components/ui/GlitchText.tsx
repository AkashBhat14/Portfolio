"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className={`inline-block cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        textShadow: isHovered
          ? [
              "2px 0 8px rgba(100, 255, 218, 0.4), -2px 0 8px rgba(189, 52, 254, 0.4)",
              "-2px 0 8px rgba(100, 255, 218, 0.4), 2px 0 8px rgba(189, 52, 254, 0.4)",
              "2px 0 8px rgba(100, 255, 218, 0.4), -2px 0 8px rgba(189, 52, 254, 0.4)",
            ]
          : "none",
      }}
      transition={{
        duration: 0.3,
        repeat: isHovered ? Infinity : 0,
        repeatType: "reverse",
      }}
    >
      {text}
    </motion.span>
  );
}
