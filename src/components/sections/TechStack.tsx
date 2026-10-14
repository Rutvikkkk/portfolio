"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories, allSkillsList } from "@/data/skills";

export function TechStack() {
  return (
    <section
      id="toolkit"
      className="relative py-24 sm:py-32 md:py-40 px-5 sm:px-8 md:px-12 bg-[#111317] border-t border-white/[0.06] text-[#F5F4F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="TOOLKIT"
          headline="Tools I use"
          accentHeadline="to bring ideas to life."
          description="A curated, battle-tested JavaScript stack focused on building responsive interfaces, reliable APIs, and maintainable systems."
        />

        {/* Categorized Compact Grid (No percentages, no bloated cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-[#08090B]/60 border border-white/[0.06] flex flex-col justify-between space-y-6 hover:border-white/15 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#91B9F5]">
                  <span>0{index + 1}</span>
                  <span>{cat.category}</span>
                </div>
                <p className="text-xs text-[#A3A6AD] font-light leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded text-xs font-mono tracking-wider text-[#F5F4F0] bg-white/[0.03] border border-white/[0.08]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle Horizontal Ticker (Pause on hover, clean typography) */}
        <div className="mt-16 pt-10 border-t border-white/[0.06] relative">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#A3A6AD] mb-4">
            Ecosystem At A Glance
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {allSkillsList.map((skill) => (
              <div
                key={skill}
                className="px-3.5 py-1.5 rounded-full bg-[#08090B] border border-white/10 text-xs sm:text-sm font-mono text-[#F5F4F0]/90 hover:border-[#91B9F5] hover:text-[#91B9F5] transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
