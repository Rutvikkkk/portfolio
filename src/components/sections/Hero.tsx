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
      className="relative w-full h-[100svh] min-h-[580px] sm:min-h-[680px] overflow-hidden flex flex-col justify-end text-[#F5F4F0] bg-[#08090B]"
    >
      {/* Background Image Container with Restrained Parallax */}
      <motion.div
        style={{ y: yParallax, scale: scaleParallax }}
        className="absolute inset-x-0 top-0 h-[48svh] sm:h-full sm:inset-0 w-full will-change-transform pointer-events-none"
      >
        <Image
          src={siteConfig.mountainStory.imagePath}
          alt="Rutvik Bhil at Kedarkantha Peak Summit at sunrise, 12,500 ft"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[52%_12%] sm:object-[center_30%] select-none brightness-[0.94] contrast-[1.04]"
        />

        {/* Sophisticated Dark Cinematic Overlays for Text Contrast & Depth */}
        {/* On mobile, seamless dissolve from summit photograph into solid #08090B */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/60 via-40% to-transparent sm:via-[#08090B]/55 sm:opacity-95" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#08090B]/85 via-[#08090B]/40 to-transparent opacity-85" />
        {/* Subtle top vignette for nav contrast */}
        <div className="absolute inset-x-0 top-0 h-28 sm:h-40 bg-gradient-to-b from-[#08090B]/90 via-[#08090B]/30 to-transparent" />
      </motion.div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pb-10 sm:pb-16 pt-20 sm:pt-24 flex flex-col justify-end">
        <div className="max-w-4xl space-y-4 sm:space-y-7">
          {/* Location & Elevation Marker */}
          <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono tracking-widest uppercase">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111317]/90 backdrop-blur-md border border-white/10 shadow-sm text-[#91B9F5]/90">
              <Mountain className="w-3.5 h-3.5 text-[#91B9F5] shrink-0" />
              <span className="sm:hidden">Kedarkantha • 12,500 FT</span>
              <span className="hidden sm:inline">
                {siteConfig.mountainStory.peak} • {siteConfig.mountainStory.location} • {siteConfig.mountainStory.elevation}
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-2 text-[#A3A6AD]">
              <span className="text-white/30">•</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#91B9F5] animate-pulse" />
              <span>Full-Stack Developer</span>
            </div>
          </div>

          {/* Hero Main Headline */}
          <h1 className="font-display font-light text-[#F5F4F0] hero-headline tracking-tight">
            Harder paths.
            <br />
            <span className="text-white font-normal">Stronger versions</span> of you.
          </h1>

          {/* Supporting Kedarkantha Story & Visual Signature */}
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <p className="text-xs sm:text-base md:text-lg text-[#E8E7E3] font-normal sm:font-light leading-relaxed">
              <span className="sm:hidden">
                Three days of high-altitude trek to reach 12,500 ft. A reminder that resilience, craft, and patience conquer any terrain.
              </span>
              <span className="hidden sm:inline">
                {siteConfig.mountainStory.story}
              </span>
            </p>

            {/* Visual Signature Quote */}
            <div className="pt-0.5 sm:pt-1 flex items-center gap-2.5 sm:gap-3">
              <div className="w-6 sm:w-8 h-[1px] bg-[#91B9F5]/60 shrink-0" />
              <blockquote className="font-serif-accent text-sm sm:text-lg md:text-xl text-[#A8CCFF]">
                &ldquo;Discomfort today. A better version tomorrow.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* CTA Buttons & Scroll Indicator Row */}
          <div className="pt-2 sm:pt-3 flex items-center gap-3 sm:gap-6">
            {/* View Work CTA */}
            <button
              type="button"
              onClick={scrollToProjects}
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-[#F5F4F0] text-[#08090B] font-medium text-xs sm:text-sm tracking-wide uppercase hover:bg-white hover:shadow-[0_0_30px_rgba(145,185,245,0.25)] transition-all duration-300"
            >
              <span>View Work</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            </button>

            {/* Download Resume CTA */}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/15 text-[#F5F4F0] font-medium text-xs sm:text-sm tracking-wide uppercase hover:bg-white/10 hover:border-[#91B9F5]/60 hover:text-[#91B9F5] transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5 text-[#91B9F5]" />
              <span>Resume</span>
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
          </div>
        </div>
      </div>
    </section>
  );
}
