"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";

const stats = [
  { remix: "ri-briefcase-line", value: "2+", label: "Years Experience" },
  { remix: "ri-code-line", value: "20+", label: "Projects Built" },
  { remix: "ri-globe-line", value: "10+", label: "Technologies" },
  { remix: "ri-cup-line", value: "∞", label: "Cups of Coffee" },
];

const tags = [
  "Problem Solver",
  "Team Player",
  "Fast Learner",
  "Detail Oriented",
  "Agile",
];

export default function About() {
  const [showCVModal, setShowCVModal] = useState(false);

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#0a0600]">
      {/* Accent orb */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-600/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-orange-500 text-xs font-bold tracking-[0.35em] uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            About <span className="gradient-text">Ridmi</span>
          </h2>
          <div className="mt-4 w-14 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Avatar card ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative rotating rings */}
              <div className="absolute -inset-6 rounded-3xl border border-orange-500/15 rotate-3 pointer-events-none" />
              <div className="absolute -inset-6 rounded-3xl border border-amber-400/10 -rotate-2 pointer-events-none" />

              {/* Card */}
              <div className="relative w-72 h-80 rounded-3xl glass overflow-hidden flex flex-col items-center justify-center">
                {/* Shimmer */}
                <div className="absolute inset-0 shimmer-overlay pointer-events-none" />

                {/* Avatar circle */}
                <div className="relative w-24 h-24 rounded-full ring-2 ring-orange-400/50 shadow-[0_0_40px_rgba(249,115,22,0.45)] z-10 overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Ridmi Ranasinghe profile photo"
                    fill
                    sizes="96px"
                    className="object-cover"
                    priority
                  />
                </div>

                <p className="mt-6 text-white/80 font-bold text-lg z-10">
                  Ridmi Ranasinghe
                </p>
                <p className="text-orange-400 text-sm z-10">
                  Associate Software Engineer
                </p>

                <div className="mt-4 flex items-center gap-2 z-10">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-white/35">
                    Open to opportunities
                  </span>
                </div>

                {/* Bottom gradient bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-red-500" />
              </div>
            </div>
          </motion.div>

          {/* ── Bio ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-2xl md:text-3xl font-black text-white mb-5">
              Passionate Full-Stack Engineer
            </h3>
            <p className="text-white/55 leading-relaxed mb-4">
              I&apos;m a versatile software engineer with expertise spanning the
              full technology stack. From building robust backend systems with
              Java and Spring Boot to crafting seamless frontend experiences
              with React and Next.js — I love bringing ideas to life through
              code.
            </p>
            <p className="text-white/55 leading-relaxed mb-8">
              With hands-on experience across multiple languages and frameworks,
              I thrive on solving complex problems and continuously learning new
              technologies. My approach combines technical precision with a
              creative mindset to deliver high-quality, scalable solutions.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold text-orange-400 border border-orange-500/30 bg-orange-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowCVModal(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold text-white border border-orange-500/25 hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-300"
              >
                <i className="ri-file-pdf-line" />
                View CV
              </button>
              <a
                href="/Ridmi-Ranasinghe.pdf"
                download="Ridmi-Ranasinghe-CV.pdf"
                className="inline-flex items-center justify-center gap-2 btn-primary px-7 py-3 rounded-xl font-bold text-white"
              >
                <i className="ri-download-line" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map(({ remix, value, label }) => (
            <div
              key={label}
              className="glass glass-hover p-7 rounded-2xl text-center transition-all duration-300 group"
            >
              <i
                className={`${remix} text-2xl text-orange-500 group-hover:text-orange-400 transition-colors mx-auto mb-3 block`}
              />
              <div className="text-3xl font-black gradient-text">{value}</div>
              <div className="text-white/45 text-sm mt-1">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* CV Preview Modal */}
        {showCVModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-gray-50">
                <h3 className="text-lg font-bold text-gray-800">
                  Curriculum Vitae - Ridmi Ranasinghe
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="/Ridmi-Ranasinghe.pdf"
                    download="Ridmi-Ranasinghe-CV.pdf"
                    className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    <i className="ri-download-line" />
                    Download
                  </a>
                  <button
                    onClick={() => setShowCVModal(false)}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    aria-label="Close"
                  >
                    <i className="ri-close-line text-2xl text-gray-700" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto bg-gray-100">
                <iframe
                  src="/Ridmi-Ranasinghe.pdf#toolbar=0"
                  className="w-full h-full"
                  title="CV Preview"
                />
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-gray-200 bg-gray-50 text-sm text-gray-600 text-center">
                Use your browser's PDF controls to navigate. Press Escape or
                click the X to close.
              </div>
            </motion.div>

            {/* Backdrop click to close */}
            <div
              onClick={() => setShowCVModal(false)}
              className="fixed inset-0 z-[99]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
