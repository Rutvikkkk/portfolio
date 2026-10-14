"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Calendar, MapPin, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences, education } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 md:py-40 px-5 sm:px-8 md:px-12 bg-[#08090B] border-t border-white/[0.06] text-[#F5F4F0]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="EXPERIENCE"
          headline="The work"
          accentHeadline="behind the work."
          description="A verifiable track record of frontend engineering, API integrations, and production website delivery."
        />

        {/* Minimalist Editorial Timeline / Divider Layout */}
        <div className="space-y-12 sm:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="pt-8 border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
            >
              {/* Left Column (4 cols): Meta details */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#91B9F5]">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>0{index + 1} • {exp.type}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-medium text-[#F5F4F0]">
                  {exp.company}
                </h3>

                <div className="flex flex-col gap-1 text-xs font-mono text-[#A3A6AD]">
                  <span className="flex items-center gap-1.5 text-white/80">
                    <Calendar className="w-3 h-3 text-[#91B9F5]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-white/40" />
                    {exp.location}
                  </span>
                </div>

                {/* Optional verified project links */}
                {exp.links && (
                  <div className="pt-3 flex flex-wrap gap-3">
                    {exp.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-underline inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-[#91B9F5]"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column (8 cols): Role and Responsibilities */}
              <div className="lg:col-span-8 space-y-4">
                <h4 className="text-lg sm:text-xl font-medium text-[#F5F4F0] flex items-center gap-3">
                  <span>{exp.role}</span>
                </h4>

                <p className="text-sm sm:text-base text-[#A3A6AD] font-light leading-relaxed">
                  {exp.summary}
                </p>

                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-[#F5F4F0]/85">
                  {exp.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-2.5">
                      <span className="text-[#91B9F5] font-mono leading-none mt-1">―</span>
                      <span className="font-light leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Education Row */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pt-8 border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
          >
            <div className="lg:col-span-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#91B9F5]">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>EDUCATION</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#F5F4F0]">
                {education.institution}
              </h3>
              <div className="text-xs font-mono text-[#A3A6AD]">
                <span>{education.location} • Class of {education.year}</span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-2">
              <h4 className="text-lg sm:text-xl font-medium text-[#F5F4F0]">
                {education.degree} in {education.field}
              </h4>
              <p className="text-sm sm:text-base text-[#A3A6AD] font-light leading-relaxed">
                Foundational computer engineering curriculum covering data structures, algorithm analysis, software engineering methodologies, web technologies, and database management systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
