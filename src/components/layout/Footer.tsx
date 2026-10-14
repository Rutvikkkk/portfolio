"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#08090B] border-t border-white/[0.06] text-[#A3A6AD] py-12 px-5 sm:px-8 md:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
        {/* Brand & Identity */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-center sm:text-left justify-center sm:justify-start">
          <span className="text-[#F5F4F0] font-medium">{siteConfig.name}</span>
          <span className="text-white/20">•</span>
          <span>{siteConfig.role}</span>
          <span className="text-white/20">•</span>
          <span>{siteConfig.location}</span>
        </div>

        {/* Dynamic Year & Back to Top */}
        <div className="flex items-center gap-6">
          <span className="text-white/40">© {currentYear}</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover-underline flex items-center gap-1.5 text-[#F5F4F0] hover:text-[#91B9F5] transition-colors focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
