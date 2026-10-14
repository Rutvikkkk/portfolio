"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Story", href: "#story" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#08090B]/90 backdrop-blur-md border-b border-white/[0.06] py-3.5 sm:py-4"
            : "bg-gradient-to-b from-[#08090B]/80 to-transparent py-4 sm:py-6"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-[#F5F4F0] transition-colors"
          >
            <span className="font-display font-medium text-base sm:text-lg tracking-tight hover-underline">
              {siteConfig.name}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#91B9F5]/70" />
            <span className="hidden md:inline-block text-[11px] font-mono tracking-wider uppercase text-[#A3A6AD]/75">
              Full-Stack Developer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-wide uppercase text-[#A3A6AD]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover-underline text-[#A3A6AD] hover:text-[#F5F4F0] transition-colors py-1 font-mono tracking-wider text-[11px]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Resume & Mobile Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/15 text-[#F5F4F0] hover:border-[#91B9F5] hover:text-[#91B9F5] transition-colors"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F5F4F0] hover:text-[#91B9F5] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#08090B]/98 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-10 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3A6AD]">
                Navigation
              </span>
              <div className="flex flex-col gap-5 text-2xl font-display font-light">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#F5F4F0] hover:text-[#91B9F5] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full py-3 px-5 rounded-lg border border-white/15 text-sm text-[#F5F4F0]"
              >
                <span>Download Resume (PDF)</span>
                <ArrowUpRight className="w-4 h-4 text-[#91B9F5]" />
              </a>
              <div className="text-xs text-[#A3A6AD] font-mono">
                {siteConfig.location} • {siteConfig.email}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
