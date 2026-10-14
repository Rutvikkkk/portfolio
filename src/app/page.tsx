"use client";

import React from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { StorySection } from "@/components/sections/StorySection";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[#08090B] text-[#F5F4F0] overflow-hidden">
      {/* SECTION 1 — HERO */}
      <Hero />

      {/* SECTION 2 — INTRODUCTION / ABOUT */}
      <About />

      {/* SCROLL-DRIVEN PERSONAL STORY (KEDARKANTHA CHAPTERS) */}
      <StorySection />

      {/* SECTION 3 — SELECTED WORK */}
      <Projects />

      {/* SECTION 4 — EXPERIENCE */}
      <Experience />

      {/* SECTION 5 — TOOLKIT */}
      <TechStack />

      {/* SECTION 6 — CLOSING CONTACT */}
      <Contact />
    </main>
  );
}
