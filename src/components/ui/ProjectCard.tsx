"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col bg-[#0D0F12] border border-white/[0.08] rounded-xl overflow-hidden hover:border-[#91B9F5]/40 transition-colors duration-500 shadow-xl"
    >
      {/* Screenshot Frame with Aspect Ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#08090B] border-b border-white/[0.06]">
        <Image
          src={project.image}
          alt={`Screenshot preview of ${project.title}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Subtle Dark Vignette & Gradient for Editorial Consistency */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-transparent to-transparent opacity-80" />


      </div>

      {/* Card Content & Details */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          {/* Category & Year */}
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#A3A6AD]">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          {/* Project Title with Live Link */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#F5F4F0] tracking-tight group-hover:text-white transition-colors">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline inline-flex items-center gap-2"
              >
                <span>{project.title}</span>
                <ArrowUpRight className="w-5 h-5 text-[#91B9F5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#A3A6AD] font-light leading-relaxed">
            {project.description}
          </p>

          {/* Detailed Deliverables / Highlights */}
          {project.detailedPoints && project.detailedPoints.length > 0 && (
            <ul className="space-y-2 pt-2 border-t border-white/[0.06] text-xs sm:text-sm text-[#F5F4F0]/80">
              {project.detailedPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#91B9F5] font-mono leading-none mt-1">―</span>
                  <span className="font-light leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Tech Stack & Action Links */}
        <div className="pt-4 border-t border-white/[0.06] space-y-4">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded text-[11px] font-mono tracking-wider uppercase bg-white/[0.03] border border-white/[0.07] text-[#A3A6AD]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase px-4 py-2 rounded-full bg-white/[0.06] hover:bg-[#91B9F5] hover:text-[#08090B] text-[#F5F4F0] border border-white/10 transition-colors"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {project.secondaryUrl && (
              <a
                href={project.secondaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase px-4 py-2 rounded-full bg-transparent hover:border-[#91B9F5] text-[#A3A6AD] hover:text-[#F5F4F0] border border-white/10 transition-colors"
              >
                <span>{project.secondaryUrlLabel || "Secondary Link"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
