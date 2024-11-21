"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HyperTextProps {
  text: string;
  duration?: number; // Time for each animation cycle
  glitchSpeed?: number; // Speed of glitching effect
  className?: string; // Additional CSS class for styling
  animateOnLoad?: boolean; // Trigger animation on component load
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()".split("");

// Function to get a random character
const getRandomChar = () => alphabets[Math.floor(Math.random() * alphabets.length)];

// HyperText Component
export function HyperText({
  text,
  duration = 800,
  glitchSpeed = 100,
  className,
  animateOnLoad = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(text.split(""));
  const [isAnimating, setIsAnimating] = useState(animateOnLoad);
  const iterations = useRef(0);

  // Animation effect for glitching letters
  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      if (iterations.current < text.length) {
        // Update each letter until the correct letter is reached
        setDisplayText((prev) =>
          prev.map((char, index) =>
            char === " " || index < iterations.current
              ? text[index]
              : getRandomChar()
          )
        );
        iterations.current += 1;
      } else {
        setIsAnimating(false);
        clearInterval(interval); // Clear interval when animation is complete
      }
    }, glitchSpeed);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [isAnimating, glitchSpeed, text]);

  return (
    <div className={`overflow-hidden flex ${className}`}>
      <AnimatePresence>
        {displayText.map((char, index) => (
          <motion.h1
            key={index}
            className="font-mono"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 3 }}
          >
            {char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
