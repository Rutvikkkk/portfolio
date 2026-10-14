"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mountain, FileText } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Slow, atmospheric parallax that does not crop out the silhouette
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scaleParallax = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[680px] overflow-hidden flex flex-col justify-end text-[#F5F4F0]"
    >
      {/* Background Image Container with Restrained Parallax */}
      <motion.div
        style={{ y: yParallax, scale: scaleParallax }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <Image
          src={siteConfig.mountainStory.imagePath}
          alt="Rutvik Bhil at Kedarkantha Peak Summit at sunrise, 12,500 ft"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[center_35%] sm:object-[center_30%] select-none brightness-[0.88] contrast-[1.04]"
        />

        {/* Sophisticated Dark Cinematic Overlays for Text Contrast & Depth */}
        {/* Deep gradient from bottom-left to protect text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/55 to-transparent opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090B]/85 via-[#08090B]/40 to-transparent opacity-85" />
        {/* Subtle top vignette for nav contrast */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#08090B]/80 to-transparent" />
      </motion.div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pb-12 sm:pb-16 pt-24 flex flex-col justify-end">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Location & Elevation Marker */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-center gap-3 text-[11px] sm:text-xs font-mono tracking-widest uppercase text-[#91B9F5]/90"
          >
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#08090B]/60 backdrop-blur-md border border-white/10">
              <Mountain className="w-3.5 h-3.5 text-[#91B9F5]" />
              <span>
                {siteConfig.mountainStory.peak} • {siteConfig.mountainStory.location}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-[#F5F4F0]">{siteConfig.mountainStory.elevation}</span>
            </div>
          </motion.div>

          {/* Hero Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-[#F5F4F0] hero-headline tracking-tight"
          >
            Harder paths.
            <br />
            <span className="text-white font-normal">Stronger versions</span> of you.
          </motion.h1>

          {/* Supporting Kedarkantha Story & Visual Signature */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4 max-w-2xl"
          >
            <p className="text-sm sm:text-base md:text-lg text-[#F5F4F0]/85 font-light leading-relaxed">
              {siteConfig.mountainStory.story}
            </p>

            {/* Visual Signature Quote */}
            <div className="pt-1 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#91B9F5]/60" />
              <blockquote className="font-serif-accent text-base sm:text-lg md:text-xl text-[#91B9F5]/90">
                &ldquo;Discomfort today. A better version tomorrow.&rdquo;
              </blockquote>
            </div>
          </motion.div>

          {/* CTA Buttons & Scroll Indicator Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {/* View Work CTA */}
            <button
              type="button"
              onClick={scrollToProjects}
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#F5F4F0] text-[#08090B] font-medium text-xs sm:text-sm tracking-wide uppercase hover:bg-white hover:shadow-[0_0_30px_rgba(145,185,245,0.25)] transition-all duration-300"
            >
              <span>View My Work</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            </button>

            {/* Download Resume CTA */}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/15 text-[#F5F4F0] font-medium text-xs sm:text-sm tracking-wide uppercase hover:bg-white/10 hover:border-[#91B9F5]/60 hover:text-[#91B9F5] transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5 text-[#91B9F5]" />
              <span>Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            {/* Functional Circular Scroll Indicator */}
            <button
              type="button"
              onClick={scrollToAbout}
              aria-label="Scroll down to About section"
              className="hidden sm:inline-flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-[#A3A6AD] hover:text-[#F5F4F0] transition-colors ml-auto group"
            >
              <span>Scroll</span>
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#91B9F5] transition-colors">
                <ArrowDown className="w-3.5 h-3.5 text-[#91B9F5] animate-bounce" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
