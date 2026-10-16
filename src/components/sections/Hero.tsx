"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, FileText, Mountain } from "lucide-react";
import { siteConfig } from "@/data/site";
import {
  ReactIcon,
  NextjsIcon,
  NodeIcon,
  MongoIcon,
  TailwindIcon,
  SupabaseIcon,
} from "@/components/ui/TechIcons";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-end sm:justify-center pt-20 sm:pt-28 pb-8 sm:pb-16 bg-[#080B10] text-[#F5F7FA]"
    >
      {/* =========================================================================
          MOBILE ONLY: Upper Summit Photograph with Cinematic Fade (Matching Reference)
          ========================================================================= */}
      <div className="sm:hidden absolute top-0 inset-x-0 h-[82svh] min-h-[580px] pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/images/kedarkantha-summit.jpg"
          alt="Rutvik Bhil at Kedarkantha Peak Summit"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[62%_20%] brightness-[0.96] contrast-[1.06]"
        />

        {/* Blueprint grid subtle touch on photo */}
        <div className="absolute inset-0 blueprint-grid opacity-15" />

        {/* Electric-Blue backlight on summit behind Rutvik */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 46% 34%, rgba(103, 183, 255, 0.28) 0%, transparent 60%)",
          }}
        />

        {/* Top vignette for Navbar legibility */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#080B10]/95 via-[#080B10]/40 to-transparent z-10" />

        {/* Bottom smooth fade to solid #080B10 background */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#080B10] from-20% via-[#080B10]/75 via-55% to-transparent z-10" />
      </div>

      {/* =========================================================================
          DESKTOP ONLY: 100% UNTOUCHED ORIGINAL DESKTOP BACKGROUND
          ========================================================================= */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Expanded Image Container: Shifts Rutvik to the right and higher up */}
        <div className="absolute -top-[6%] -bottom-[6%] left-0 w-[165%] lg:w-[178%] xl:w-[185%] h-[112%]">
          <Image
            src="/images/kedarkantha-summit.jpg"
            alt="Rutvik Bhil at Kedarkantha Peak Summit"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-[center_35%] lg:object-[center_36%] brightness-[0.88] contrast-[1.08]"
          />
        </div>

        {/* Blueprint Grid Overlay across the scene */}
        <div className="absolute inset-0 blueprint-grid opacity-25 z-10" />

        {/* Electric-Blue Radial Aura centered behind Rutvik head on the right */}
        <div
          className="absolute right-[16%] sm:right-[24%] lg:right-[28%] top-[12%] sm:top-[16%] w-[340px] sm:w-[480px] lg:w-[540px] h-[340px] sm:h-[480px] lg:h-[540px] rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(103, 183, 255, 0.42) 0%, rgba(48, 76, 112, 0.22) 50%, transparent 75%)",
          }}
        />

        {/* Atmospheric Gradient: Keeps left landscape visible while guaranteeing high text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B10]/95 via-[#080B10]/80 via-45% to-transparent z-10" />

        {/* Subtle overall dark film layer for rich contrast */}
        <div className="absolute inset-0 bg-[#080B10]/20 z-10" />

        {/* Top Vignette for Navbar contrast */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#080B10]/90 via-[#080B10]/40 to-transparent z-10" />

        {/* Bottom Transition into next section */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080B10] via-[#080B10]/80 to-transparent z-10" />
      </div>

      {/* RIGHT SIDE ANNOTATION: Handwritten Signature, Roles & Hand-drawn Arrow (Desktop Only - 100% Untouched) */}
      <div className="hidden lg:flex flex-col items-start absolute right-[6%] xl:right-[10%] top-[20%] xl:top-[22%] z-20 select-none pointer-events-none">
        {/* Handwritten Name */}
        <span className="font-script text-3xl xl:text-4xl text-[#F5F7FA] tracking-wide -rotate-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          Rutvik Bhil
        </span>

        {/* Monospace Roles */}
        <div className="mt-1 flex flex-col space-y-0.5 text-[10px] xl:text-[11px] font-mono tracking-[0.24em] text-[#CBD5E1] uppercase drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
          <span>FULL-STACK DEVELOPER</span>
          <span>TRAVELER</span>
          <span>PROBLEM SOLVER</span>
        </div>

        {/* Curved Hand-drawn SVG Arrow pointing down-left towards Rutvik */}
        <div className="mt-2.5 ml-3">
          <svg
            className="w-11 h-9 xl:w-13 xl:h-10 text-[#CBD5E1] filter drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
            viewBox="0 0 52 38"
            fill="none"
          >
            <path
              d="M 44 4 C 34 16, 22 26, 6 26 M 6 26 L 16 20 M 6 26 L 14 32"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* FOREGROUND CONTENT: Exact Reference Design on Phone, 100% Preserved on Desktop */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 mt-auto sm:my-auto mb-0">
        <div className="w-full lg:max-w-2xl xl:max-w-[680px] space-y-3 sm:space-y-7 text-left">
          
          {/* =========================================================================
              MOBILE ONLY CONTENT (Matching Reference Image Exact Content & Typography)
              ========================================================================= */}
          <div className="sm:hidden space-y-3">
            {/* Mountain Summit Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 backdrop-blur-md">
              <Mountain className="w-3.5 h-3.5 text-[#CBD5E1]" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#CBD5E1] uppercase font-medium">
                KEDARKANTHA • 12,500 FT
              </span>
            </div>

            {/* Mobile Headline */}
            <h1 className="font-display font-medium text-[31px] leading-[1.12] text-white tracking-tight">
              Harder paths.
              <br />
              Stronger versions of you.
            </h1>

            {/* Mobile Paragraph */}
            <p className="text-[#CBD5E1] text-[12px] leading-relaxed max-w-sm font-normal">
              Three days of high-altitude trek to reach 12,500 ft. A reminder that resilience, craft, and patience conquer any terrain.
            </p>

            {/* Quote Line */}
            <div className="pt-0.5 flex items-center gap-2 text-[12px] italic font-serif text-[#94A3B8]">
              <span className="w-4 h-[1px] bg-white/30 shrink-0" />
              <span>&ldquo;Discomfort today. A better version tomorrow.&rdquo;</span>
            </div>

            {/* Mobile Dual Action Buttons (Skills removed from phone as requested) */}
            <div className="pt-2 flex flex-row items-center gap-3 w-full">
              {/* Primary: VIEW WORK */}
              <button
                type="button"
                onClick={scrollToProjects}
                className="flex-1 group inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-[#F5F4F0] text-[#080B10] font-mono font-semibold text-[11px] tracking-wider uppercase hover:bg-white transition-all duration-300 active:scale-[0.98]"
              >
                <span>VIEW WORK</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </button>

              {/* Secondary: RESUME */}
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#080B10]/80 border border-white/20 text-[#F5F4F0] font-mono font-medium text-[11px] tracking-wider uppercase hover:border-white/40 hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-md active:scale-[0.98]"
              >
                <FileText className="w-3.5 h-3.5 text-[#CBD5E1]" />
                <span>RESUME</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#CBD5E1] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* =========================================================================
              DESKTOP ONLY CONTENT (100% Intact & Untouched)
              ========================================================================= */}
          <div className="hidden sm:block space-y-7">
            {/* Status Badge: OPEN TO NEW OPPORTUNITIES */}
            <div className="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_10px_#22c55e] shrink-0 animate-pulse" />
              <span className="text-[#A2ACB9] font-medium text-xs tracking-[0.2em] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                OPEN TO NEW OPPORTUNITIES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[70px] text-white tracking-tight sm:leading-[1.06] drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
              I build digital
              <br />
              products that
              <br />
              <span className="text-[#67B7FF]">move businesses</span>
              <br />
              forward.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-[#CBD5E1] sm:text-base md:text-lg max-w-xl leading-relaxed font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
              Full-stack developer with 1+ year of experience building responsive websites,
              web applications, and real-world client projects.
            </p>

            {/* Dual Action Buttons */}
            <div className="pt-2 flex flex-row items-center gap-4 w-auto">
              <button
                type="button"
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F5F4F0] text-[#080B10] font-semibold text-sm hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300 active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#080B10]/60 border border-white/20 text-[#F5F4F0] font-medium text-sm hover:border-[#67B7FF] hover:text-[#67B7FF] hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-md active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-[#67B7FF]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Desktop Tech Stack Row (Preserved on Desktop Only) */}
            <div className="pt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-[#CBD5E1]">
              <div className="flex items-center gap-2 hover:text-[#F5F7FA] transition-colors cursor-default drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                <ReactIcon className="w-5 h-5 shrink-0" />
                <span>React</span>
              </div>

              <div className="flex items-center gap-2 hover:text-[#F5F7FA] transition-colors cursor-default drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                <NextjsIcon className="w-5 h-5 shrink-0" />
                <span>Next.js</span>
              </div>

              <div className="flex items-center gap-2 hover:text-[#F5F7FA] transition-colors cursor-default drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                <NodeIcon className="w-5 h-5 shrink-0" />
                <span>Node.js</span>
              </div>

              <div className="flex items-center gap-2 hover:text-[#F5F7FA] transition-colors cursor-default drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                <MongoIcon className="w-5 h-5 shrink-0" />
                <span>MongoDB</span>
              </div>

              <div className="flex items-center gap-2 hover:text-[#F5F7FA] transition-colors cursor-default drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                <TailwindIcon className="w-5 h-5 shrink-0" />
                <span>Tailwind CSS</span>
              </div>

              <div className="flex items-center gap-2 hover:text-[#F5F7FA] transition-colors cursor-default drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                <SupabaseIcon className="w-5 h-5 shrink-0" />
                <span>Supabase</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
