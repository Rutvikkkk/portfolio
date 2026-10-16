"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  const [filter, setFilter] = useState<"all" | "production" | "concepts">("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "production") return !p.isDemo;
    if (filter === "concepts") return p.isDemo;
    return true;
  });

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 md:py-40 px-5 sm:px-8 md:px-12 bg-[#08090B] border-t border-white/[0.06] text-[#F5F4F0]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <SectionHeading
            label="SELECTED WORK"
            headline="Built with purpose."
            accentHeadline="Made to be useful."
            description="Real production platforms built for active businesses alongside high-craft concept demos."
            className="mb-0"
          />

          {/* Restrained Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#111317] border border-white/[0.08] text-xs font-mono tracking-wider uppercase">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                filter === "all"
                  ? "bg-[#67B7FF] text-[#080B10] font-medium"
                  : "text-[#A3A6AD] hover:text-[#F5F7FA]"
              }`}
            >
              <span>All</span>
              <span>({projects.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setFilter("production")}
              className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                filter === "production"
                  ? "bg-[#67B7FF] text-[#080B10] font-medium"
                  : "text-[#A3A6AD] hover:text-[#F5F7FA]"
              }`}
            >
              <span>Live Work</span>
              <span>({projects.filter((p) => !p.isDemo).length})</span>
            </button>
            <button
              type="button"
              onClick={() => setFilter("concepts")}
              className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                filter === "concepts"
                  ? "bg-[#67B7FF] text-[#080B10] font-medium"
                  : "text-[#A3A6AD] hover:text-[#F5F7FA]"
              }`}
            >
              <span>Concepts</span>
              <span>({projects.filter((p) => p.isDemo).length})</span>
            </button>
          </div>
        </div>

        {/* Editorial Grid: 2 per row on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={index < 2}
            />
          ))}
        </div>

        {/* Freelance & Collaborations Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-6 sm:p-8 rounded-xl bg-[#111317]/60 border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#91B9F5]">
              Looking to build a custom website?
            </span>
            <p className="text-base text-[#F5F4F0] font-light">
              I handle complete web development—from responsive UI architecture to custom admin panels and Vercel deployment.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F4F0] text-[#08090B] font-medium text-xs font-mono uppercase tracking-wider hover:bg-[#91B9F5] transition-colors whitespace-nowrap"
          >
            <span>Start a Conversation</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
