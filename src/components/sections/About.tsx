"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Compass, Sparkles, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export function About() {
  const facts = [
    {
      icon: MapPin,
      label: "Base Location",
      value: "Gujarat, India",
    },
    {
      icon: Briefcase,
      label: "Current Focus",
      value: "Freelance web development for businesses",
    },
    {
      icon: Sparkles,
      label: "Career Goal",
      value: "Open to full-time engineering opportunities",
    },
    {
      icon: Compass,
      label: "Work Style",
      value: "Remote-friendly & travel-inspired mindset",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 md:py-40 px-5 sm:px-8 md:px-12 bg-[#08090B] border-t border-white/[0.06] text-[#F5F4F0]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Tagline */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#91B9F5]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#91B9F5]" />
              <span>ABOUT</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-[#F5F4F0] section-headline tracking-tight"
            >
              Developer by skills.
              <br />
              <span className="font-serif-accent text-[#91B9F5] font-normal">
                Explorer by nature.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-4"
            >
              <p className="text-xs font-mono uppercase tracking-widest text-[#A3A6AD]">
                Craftsmanship & Exploration
              </p>
            </motion.div>
          </div>

          {/* Right Column: Editorial Bio & Clear Facts */}
          <div className="lg:col-span-7 space-y-10">
            {/* Supporting Story Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-6 text-base sm:text-lg md:text-xl text-[#F5F4F0]/90 font-light leading-relaxed"
            >
              <p>
                I&apos;m <strong className="text-white font-medium">Rutvik</strong>, a JavaScript
                developer who enjoys turning ideas into thoughtful digital experiences. I build
                websites and web applications using React, Next.js, and the JavaScript ecosystem.
              </p>
              <p className="text-[#A3A6AD]">
                Away from the screen, I&apos;m drawn to mountains, new places, and the challenge of
                figuring things out along the way. That curiosity and resilience directly shape how
                I approach software: embracing complex problems and staying disciplined until the
                solution is clear and performant.
              </p>
            </motion.div>

            {/* Facts Grid (Clean, minimalist, no fake numbers) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-white/[0.08]"
            >
              {facts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className="p-5 rounded-lg bg-[#111317]/60 border border-white/[0.06] hover:border-white/15 transition-colors space-y-2"
                  >
                    <div className="flex items-center gap-2 text-[#91B9F5]">
                      <Icon className="w-4 h-4 text-[#91B9F5]" />
                      <span className="text-[11px] font-mono tracking-wider uppercase text-[#A3A6AD]">
                        {fact.label}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-medium text-[#F5F4F0]">
                      {fact.value}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            {/* Direct Connect Prompt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2 flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-[#A3A6AD]"
            >
              <a
                href="#contact"
                className="hover-underline text-[#F5F4F0] hover:text-[#91B9F5] transition-colors flex items-center gap-2"
              >
                <span>Discuss a project or role</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
