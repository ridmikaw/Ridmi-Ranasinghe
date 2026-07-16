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

const tagColors = [
  "text-orange-600 border-orange-500/30 bg-orange-500/10",
  "text-pink-600 border-pink-500/30 bg-pink-500/10",
  "text-violet-600 border-violet-500/30 bg-violet-500/10",
  "text-rose-600 border-rose-500/30 bg-rose-500/10",
  "text-amber-600 border-amber-500/30 bg-amber-500/10",
];

export default function About() {
  const [showCVModal, setShowCVModal] = useState(false);

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#fffaf4]">
      {/* Accent orbs */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-pink-400/12 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-10 w-[380px] h-[380px] rounded-full bg-violet-400/10 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-pink-600 text-xs font-bold tracking-[0.35em] uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#1f1508]">
            About <span className="gradient-text">Ridmi</span>
          </h2>
          <div className="mt-4 w-16 h-1.5 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500" />
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
              <div className="absolute -inset-6 rounded-3xl border-2 border-pink-500/20 rotate-3 pointer-events-none" />
              <div className="absolute -inset-6 rounded-3xl border-2 border-violet-400/15 -rotate-2 pointer-events-none" />

              {/* Card */}
              <div className="relative w-72 h-80 rounded-3xl glass overflow-hidden flex flex-col items-center justify-center">
                {/* Shimmer */}
                <div className="absolute inset-0 shimmer-overlay pointer-events-none" />

                {/* Avatar circle */}
                <div className="relative w-24 h-24 rounded-full ring-4 ring-pink-400/40 shadow-[0_0_40px_rgba(236,72,153,0.4)] z-10 overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Ridmi Ranasinghe profile photo"
                    fill
                    sizes="96px"
                    className="object-cover"
                    priority
                  />
                </div>

                <p className="mt-6 text-[#1f1508] font-bold text-lg z-10">
                  Ridmi Ranasinghe
                </p>
                <p className="text-pink-600 text-sm font-semibold z-10">
                  Associate Software Engineer
                </p>

                <div className="mt-4 flex items-center gap-2 z-10">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-[#7c6a56]">
                    Open to opportunities
                  </span>
                </div>

                {/* Bottom gradient bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500" />
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
            <h3 className="text-2xl md:text-3xl font-black text-[#1f1508] mb-5">
              Passionate Full-Stack Engineer
            </h3>
            <p className="text-[#4b3a29] leading-relaxed mb-4">
              I&apos;m a Sri Lankan software engineer currently working as an
              Associate Software Engineer at Derana MacroLabs. Previously, I
              worked as a Fullstack Software Engineer Intern at Derana MacroLabs
              and as a Fullstack Software Engineer Intern at GeoEdge (Pvt) Ltd,
              contributing to full-stack, AI-powered, and cloud-native product
              engineering.and focused on full-stack product engineering,
              AI-powered platforms, and cloud-native systems. I&apos;ve
              contributed across fast-paced product teams, delivering scalable
              solutions in telecom, SaaS, media-tech, and enterprise domains.
            </p>
            <p className="text-[#4b3a29] leading-relaxed mb-8">
              My stack includes Node.js, TypeScript, React, Next.js,
              Java/Spring, Python, Go, Docker, Kubernetes, AWS/GCP, Kafka, and
              modern AI tooling. I&apos;m passionate about solving real-world
              problems, building high-impact digital experiences, and growing
              through continuous learning and technical leadership.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag, i) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-xs font-bold border transition-transform hover:-translate-y-0.5 ${tagColors[i % tagColors.length]}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowCVModal(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold text-[#4b3a29] bg-white border border-pink-500/25 hover:border-pink-500/60 hover:text-pink-600 hover:shadow-[0_8px_22px_rgba(236,72,153,0.15)] transition-all duration-300"
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
              className="glass glass-hover gradient-ring p-7 rounded-2xl text-center group"
            >
              <i
                className={`${remix} text-2xl text-pink-500 group-hover:text-violet-500 transition-colors mx-auto mb-3 block`}
              />
              <div className="text-3xl font-black gradient-text">{value}</div>
              <div className="text-[#7c6a56] text-sm mt-1">{label}</div>
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
