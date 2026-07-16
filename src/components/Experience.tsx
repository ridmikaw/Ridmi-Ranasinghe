"use client";

import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Derana MacroLabs",
    location: "Colombo, Sri Lanka",
    period: "January 2026 – Present",
    type: "Full-time",
    description: [
      "Contributing to OnePlace, a centralized BMS and ERP platform with scalable, high-quality features.",
      "Building modern frontend experiences with seamless API integration.",
      "Collaborating in agile teams to deliver maintainable and reliable production features.",
    ],
    tech: ["JavaScript", "Next.js", "TypeScript", "NestJS", "REST APIs"],
  },
  {
    role: "Intern Software Engineer",
    company: "Derana MacroLabs",
    location: "Colombo, Sri Lanka",
    period: "July 2025 – December 2025",
    type: "Internship",
    description: [
      "Contributed to Ada Derana Sinhala, Tamil, and English platforms.",
      "Delivered enhancements for the eTunes platform to improve user experience and responsiveness.",
      "Worked on frontend architecture and component quality for high-traffic media products.",
    ],
    tech: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Intern Software Engineer",
    company: "GeoEdge (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    period: "September 2024 – March 2025",
    type: "Internship",
    description: [
      "Delivered fullstack development for key projects including the Pasanka ERP System and Rathnaweera AutoCare (RAC).",
      "Performed manual and automation testing for Nimesh Motor Work's Vehicle Repair Management System.",
      "Supported feature delivery across both frontend and backend modules in production workflows.",
    ],
    tech: ["React", "Node.js", "Express.js", "MySQL", "Selenium"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 relative bg-[#fdf7f0] overflow-hidden"
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[300px] rounded-full bg-violet-400/12 blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-pink-600 text-xs font-bold tracking-[0.35em] uppercase mb-3">
            Where I&apos;ve worked
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#1f1508]">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-4 w-16 h-1.5 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px timeline-line hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative md:pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-4 top-7 hidden md:flex w-5 h-5 rounded-full items-center justify-center bg-gradient-to-br from-orange-500 via-pink-500 to-violet-500 border-[3px] border-white shadow-[0_0_16px_rgba(236,72,153,0.55)] -translate-x-1/2" />

                {/* Card */}
                <div className="glass glass-hover gradient-ring rounded-2xl p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <i className="ri-briefcase-fill text-lg text-pink-500" />
                        <h3 className="text-[#1f1508] font-black text-xl">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-pink-600 font-semibold flex items-center gap-1.5">
                        <i className="ri-building-line text-sm" />
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1.5 text-sm shrink-0">
                      <div className="flex items-center gap-1.5 text-[#7c6a56]">
                        <i className="ri-calendar-line" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-[#7c6a56]">
                        <i className="ri-map-pin-line" />
                        {exp.location}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-violet-500/12 text-violet-600 border border-violet-500/25">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.description.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-[#4b3a29] text-sm"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-orange-600 bg-orange-500/10 border border-orange-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
