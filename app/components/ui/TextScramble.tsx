"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const chars = "!<>-_\\/[]{}—=+*^?#________";

export function TextScramble({
  text,
  className = "",
  delay = 0,
  duration = 2000,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const scramble = useCallback(() => {
    const length = text.length;
    const iterations = duration / 50;
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < (iteration / iterations) * length) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration++;

      if (iteration >= iterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsComplete(true);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text, duration]);

  useEffect(() => {
    const timer = setTimeout(scramble, delay);
    return () => clearTimeout(timer);
  }, [scramble, delay]);

  return (
    <motion.span
      className={`font-mono ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayText}
      {!isComplete && (
        <span className="inline-block w-2 h-5 bg-[#64ffda] ml-1 cursor-blink" />
      )}
    </motion.span>
  );
}
