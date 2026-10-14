"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Footprints, Sunrise, Mountain } from "lucide-react";
import { siteConfig } from "@/data/site";

interface StoryChapter {
  id: string;
  number: string;
  title: string;
  quote: string;
  narrative: string;
  reflection: string;
  icon: React.ComponentType<{ className?: string }>;
}

const chapters: StoryChapter[] = [
  {
    id: "struggle",
    number: "01",
    title: "THE STRUGGLE",
    quote: "There were moments I wanted to quit.",
    narrative:
      "Trekking for three days through steep Himalayan trails and sub-zero temperatures. My body was pushed to its limits, oxygen was thinner, and turning back began to sound like the comfortable choice.",
    reflection:
      "In software, the hardest bugs and ambiguous architectures feel identical. Quitting is easy; staying committed through the friction is what builds competence.",
    icon: Footprints,
  },
  {
    id: "climb",
    number: "02",
    title: "THE CLIMB",
    quote: "My body was struggling. I kept moving anyway.",
    narrative:
      "I broke the mountain down into individual paces. You don't reach 12,500 feet in a sudden leap; you take one deliberate step, breathe, adjust, and take another through the dark morning snow.",
    reflection:
      "Engineering complex web applications demands that same steady rhythm: isolating problems, iterating on components, and maintaining momentum when the task is demanding.",
    icon: Compass,
  },
  {
    id: "sunrise",
    number: "03",
    title: "THE SUNRISE",
    quote: "Some experiences make every difficult step worth it.",
    narrative:
      "Standing at the Kedarkantha summit at dawn, watching the golden morning light wash over the Himalayan peaks. It was the most awe-inspiring sunrise of my life—a moment impossible without every ounce of prior effort.",
    reflection:
      "Deploying a polished, high-performance website that truly helps a client's business brings that exact fulfillment. Discomfort today creates a better version tomorrow.",
    icon: Sunrise,
  },
];

export function StorySection() {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section
      id="story"
      className="relative py-24 sm:py-32 md:py-40 px-5 sm:px-8 md:px-12 bg-[#111317] border-t border-white/[0.06] text-[#F5F4F0]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#91B9F5] mb-4"
          >
            <Mountain className="w-3.5 h-3.5" />
            <span>THE KEDARKANTHA EXPEDITION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-[#F5F4F0] section-headline tracking-tight"
          >
            Persistence forged at{" "}
            <span className="text-white font-normal">12,500 feet.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-[#A3A6AD] font-light mt-4 leading-relaxed"
          >
            How a three-day high-altitude summit taught me discipline, resilience, and the
            mindset I bring to every web project.
          </motion.p>
        </div>

        {/* Desktop Interactive Layout & Mobile Clean Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left: Atmospheric Summit Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden border border-white/[0.12] bg-[#08090B] shadow-2xl">
              <Image
                src={siteConfig.mountainStory.imagePath}
                alt="Kedarkantha summit ridge and morning light"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_35%] transition-transform duration-1000 ease-out"
              />

              {/* Editorial Frame Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-black/30" />

              <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-white/70 bg-[#08090B]/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
                <span>EXPEDITION ARCHIVE</span>
                <span>30.04° N • 78.18° E</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-[#08090B]/80 backdrop-blur-md border border-white/10 space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#91B9F5]">
                  CHAPTER {chapters[activeChapter].number} OF 03
                </span>
                <p className="font-serif-accent text-sm sm:text-base text-white">
                  &ldquo;{chapters[activeChapter].quote}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: The 3 Sequential Story Chapters */}
          <div className="lg:col-span-7 space-y-4">
            {chapters.map((chapter, index) => {
              const Icon = chapter.icon;
              const isActive = activeChapter === index;

              return (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveChapter(index)}
                  className={`p-6 sm:p-8 rounded-lg cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-[#08090B] border-[#91B9F5]/40 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                      : "bg-[#08090B]/40 border-white/[0.05] hover:border-white/15 hover:bg-[#08090B]/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono tracking-widest uppercase text-[#91B9F5]">
                          {chapter.number} — {chapter.title}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#91B9F5] animate-pulse" />
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif-accent text-[#F5F4F0]">
                        &ldquo;{chapter.quote}&rdquo;
                      </h3>

                      <p className="text-sm sm:text-base text-[#A3A6AD] font-light leading-relaxed">
                        {chapter.narrative}
                      </p>

                      <div className="pt-2 border-t border-white/[0.06] text-xs sm:text-sm text-[#F5F4F0]/80 font-mono">
                        <span className="text-[#91B9F5] mr-2">Core takeaway:</span>
                        {chapter.reflection}
                      </div>
                    </div>

                    <div
                      className={`p-2.5 rounded-md border ${
                        isActive
                          ? "bg-[#91B9F5]/10 border-[#91B9F5]/30 text-[#91B9F5]"
                          : "bg-white/[0.02] border-white/10 text-white/40"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
