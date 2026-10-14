"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  headline: string;
  accentHeadline?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  headline,
  accentHeadline,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`space-y-4 mb-12 sm:mb-16 md:mb-20 ${
        isCenter ? "text-center mx-auto max-w-3xl" : "max-w-4xl"
      } ${className}`}
    >
      {/* Category / Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase text-[#91B9F5] ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#91B9F5]/80" />
        <span>{label}</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-light text-[#F5F4F0] section-headline tracking-tight"
      >
        {headline}{" "}
        {accentHeadline && (
          <span className="text-white font-normal block sm:inline">
            {accentHeadline}
          </span>
        )}
      </motion.h2>

      {/* Optional Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-[#A3A6AD] font-light leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
