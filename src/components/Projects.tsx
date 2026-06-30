"use client";

import { motion } from "framer-motion";

import "remixicon/fonts/remixicon.css";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    accentFrom: "#f97316",
    accentTo: "#ef4444",
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task manager with real-time updates, drag-and-drop boards, and team workspaces.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    accentFrom: "#fbbf24",
    accentTo: "#f97316",
    github: "#",
    demo: "#",
  },
  {
    title: "Real-time Chat App",
    description:
      "Scalable chat application supporting rooms, DMs, file sharing, and push notifications.",
    tech: ["Socket.io", "React", "Node.js", "Redis"],
    accentFrom: "#ef4444",
    accentTo: "#f97316",
    github: "#",
    demo: "#",
  },
  {
    title: "Spring Boot REST API",
    description:
      "Microservices REST API with JWT auth, RBAC, rate limiting, and OpenAPI documentation.",
    tech: ["Java", "Spring Boot", "MySQL", "Docker"],
    accentFrom: "#f97316",
    accentTo: "#fbbf24",
    github: "#",
    demo: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Interactive data dashboard with real-time charts, multi-dimension filtering, and CSV export.",
    tech: ["Python", "React", "PostgreSQL", "Chart.js"],
    accentFrom: "#eab308",
    accentTo: "#f97316",
    github: "#",
    demo: "#",
  },
  {
    title: "Mobile Shopping App",
    description:
      "Cross-platform mobile app with product catalog, cart, wishlist, and secure checkout flow.",
    tech: ["Flutter", "Kotlin", "Firebase", "REST API"],
    accentFrom: "#ef4444",
    accentTo: "#fbbf24",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 relative bg-[#0a0600] overflow-hidden"
    >
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-red-600/6 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-orange-500 text-xs font-bold tracking-[0.35em] uppercase mb-3">
            What I&apos;ve built
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 w-14 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass rounded-2xl overflow-hidden group transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.12)] hover:border-orange-500/40"
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${project.accentFrom}, ${project.accentTo})`,
                }}
              />

              <div className="p-6">
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentFrom}22, ${project.accentTo}22)`,
                    border: `1px solid ${project.accentFrom}33`,
                  }}
                >
                  <i className="ri-code-box-line text-lg text-orange-400" />
                </div>

                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-white/55 border border-white/8"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-5">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-orange-400 transition-colors"
                  >
                    <i className="ri-github-line text-sm" />
                    Source Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-orange-400 transition-colors"
                  >
                    <i className="ri-external-link-line text-sm" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
