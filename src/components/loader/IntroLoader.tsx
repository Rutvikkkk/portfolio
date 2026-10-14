"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroLoaderProps {
  onComplete?: () => void;
}

const introImages = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=2000&q=85",
];

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [stage, setStage] = useState<"initial" | "cycling" | "expanding" | "done">("initial");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setStage("done");
      if (onComplete) onComplete();
      return;
    }

    // Step 1: Initial state shows "Rutvik Bhil" for 350ms
    const timer1 = setTimeout(() => {
      setStage("cycling");
    }, 400);

    // Step 2: Cycle through images in the center slot
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        if (prev < introImages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 280);

    // Step 3: Expand the last image to full screen
    const timer2 = setTimeout(() => {
      clearInterval(interval);
      setStage("expanding");
    }, 400 + (introImages.length - 1) * 280 + 200);

    // Step 4: Complete transition and fade overlay out to unveil hero
    const timer3 = setTimeout(() => {
      setStage("done");
      if (onComplete) onComplete();
    }, 400 + (introImages.length - 1) * 280 + 1300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(interval);
    };
  }, [onComplete]);

  if (stage === "done") {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-[#070707] flex items-center justify-center overflow-hidden select-none">
      {/* Expanding Final Fullscreen Image */}
      {stage === "expanding" && (
        <motion.div
          initial={{
            width: "18vw",
            height: "12vw",
            borderRadius: "4px",
            scale: 1,
          }}
          animate={{
            width: "100vw",
            height: "100vh",
            borderRadius: "0px",
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            ease: [0.77, 0, 0.175, 1], // Luxury cubic-bezier easing like benward.io
          }}
          className="absolute inset-0 z-20 overflow-hidden flex items-center justify-center"
        >
          <img
            src={introImages[introImages.length - 1]}
            alt="Kedarkantha mountain summit"
            className="w-full h-full object-cover filter brightness-[0.75]"
          />
        </motion.div>
      )}

      {/* Main Name + In-between Image Container */}
      <motion.div
        animate={{
          opacity: stage === "expanding" ? 0 : 1,
          scale: stage === "expanding" ? 1.05 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
        className="relative z-10 flex items-center justify-center text-white font-display text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7.5vw] font-light tracking-[-0.03em] leading-none"
      >
        {/* First Name */}
        <span className="pr-[0.15em] font-normal">Rutvik</span>

        {/* Center Inline Cycling Image Slot */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: stage === "initial" ? 0 : "15vw",
            opacity: stage === "initial" ? 0 : 1,
          }}
          transition={{
            duration: 0.35,
            ease: [0.77, 0, 0.175, 1],
          }}
          className="overflow-hidden h-[0.72em] rounded-sm mx-[0.1em] flex-shrink-0 flex items-center justify-center bg-neutral-900 relative"
          style={{ minWidth: stage === "initial" ? 0 : "60px" }}
        >
          {stage !== "initial" && (
            <img
              src={introImages[currentImageIndex]}
              alt="Ascent preview"
              className="w-full h-full object-cover filter brightness-[0.85]"
            />
          )}
        </motion.div>

        {/* Last Name */}
        <span className="pl-[0.15em] font-normal">Bhil</span>
      </motion.div>

      {/* Minimal Footer Credits */}
      <div className="absolute bottom-6 text-[11px] font-mono tracking-widest uppercase text-neutral-600">
        12,500 FT SUMMIT EXPEDITION • FULL-STACK & SAAS
      </div>
    </div>
  );
}
