"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Send, CheckCircle2, FileText, Sparkles } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/site";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Freelance Website Project",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to contact api or mailto fallback
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSent(true);
      } else {
        // Fallback: trigger email client
        window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
          formData.subject + " - from " + formData.name
        )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
        setSent(true);
      }
    } catch {
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        formData.subject + " - from " + formData.name
      )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 md:py-48 px-5 sm:px-8 md:px-12 bg-[#08090B] border-t border-white/[0.08] text-[#F5F4F0] overflow-hidden"
    >
      {/* Subtle Atmospheric Mountain Night Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          viewBox="0 0 1440 400"
          className="absolute bottom-0 w-full h-auto text-white/5"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,280L120,240L240,290L360,210L480,260L600,180L720,240L840,160L960,220L1080,150L1200,210L1320,170L1440,240L1440,400L0,400Z" />
          <path d="M0,320L160,280L320,330L480,270L640,310L800,250L960,290L1120,240L1280,280L1440,260L1440,400L0,400Z" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: The Emotional Closing Statement */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#91B9F5]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>LET&apos;S CONNECT</span>
            </motion.div>

            {/* Final Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-[#F5F4F0] section-headline tracking-tight"
            >
              Let&apos;s build something
              <br />
              <span className="font-serif-accent text-white font-normal">
                worth remembering.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-[#A3A6AD] font-light leading-relaxed max-w-xl"
            >
              Have a project in mind, need a developer, or think we&apos;d work well together?
              I&apos;d love to hear from you.
            </motion.p>

            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111317] border border-white/10 text-xs font-mono text-[#F5F4F0]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{siteConfig.availability}</span>
            </motion.div>

            {/* Quick CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F5F4F0] text-[#08090B] font-medium text-xs font-mono uppercase tracking-wider hover:bg-white hover:shadow-[0_0_24px_rgba(145,185,245,0.25)] transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </a>

              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] border border-white/15 text-[#F5F4F0] font-medium text-xs font-mono uppercase tracking-wider hover:border-[#91B9F5] hover:text-[#91B9F5] transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-[#91B9F5]" />
                <span>Download Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Direct Contact Links: Only Email and WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-4 rounded-lg bg-[#111317]/50 border border-white/[0.05] hover:border-white/15 transition-colors group flex items-center justify-between"
              >
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A6AD] block">
                    Direct Email
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-[#F5F4F0] group-hover:text-[#91B9F5] transition-colors">
                    {siteConfig.email}
                  </span>
                </div>
                <Mail className="w-4 h-4 text-white/40 group-hover:text-[#91B9F5] transition-colors shrink-0" />
              </a>

              <a
                href={`https://wa.me/919723962344?text=${encodeURIComponent("Hi Rutvik, I came across your portfolio and would like to connect!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-[#111317]/50 border border-white/[0.05] hover:border-white/15 transition-colors group flex items-center justify-between"
              >
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A6AD] block">
                    WhatsApp
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-[#F5F4F0] group-hover:text-emerald-400 transition-colors">
                    {siteConfig.phone}
                  </span>
                </div>
                <WhatsappIcon className="w-4 h-4 text-white/40 group-hover:text-emerald-400 transition-colors shrink-0" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-[#111317] border border-white/[0.08] shadow-2xl relative"
          >
            {sent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-medium text-white">
                  Message Dispatched
                </h3>
                <p className="text-sm text-[#A3A6AD] max-w-sm mx-auto font-light">
                  Thank you for reaching out. I will review your note and respond back within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="text-xs font-mono uppercase text-[#91B9F5] hover-underline pt-4"
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A3A6AD]">
                    Send A Direct Note
                  </span>
                  <span className="text-[11px] font-mono text-[#91B9F5]">
                    Replies within 24h
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#A3A6AD]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-lg bg-[#08090B] border border-white/10 text-sm text-[#F5F4F0] placeholder:text-[#A3A6AD]/40 focus:outline-none focus:border-[#91B9F5] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#A3A6AD]">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#08090B] border border-white/10 text-sm text-[#F5F4F0] placeholder:text-[#A3A6AD]/40 focus:outline-none focus:border-[#91B9F5] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#A3A6AD]">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#08090B] border border-white/10 text-sm text-[#F5F4F0] focus:outline-none focus:border-[#91B9F5] transition-colors"
                  >
                    <option value="Freelance Website Project">Freelance Website Project</option>
                    <option value="Full-Time Software Engineering Role">Full-Time Software Engineering Role</option>
                    <option value="Contract / Consultation">Contract / Consultation</option>
                    <option value="General Collaboration">General Collaboration</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#A3A6AD]">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or engineering opportunity..."
                    className="w-full px-4 py-3 rounded-lg bg-[#08090B] border border-white/10 text-sm text-[#F5F4F0] placeholder:text-[#A3A6AD]/40 focus:outline-none focus:border-[#91B9F5] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#F5F4F0] hover:bg-white text-[#08090B] font-medium text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
