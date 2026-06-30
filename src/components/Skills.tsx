"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "remixicon/fonts/remixicon.css";

type Category = "Languages" | "Frameworks & Libraries" | "Databases" | "Tools";

const skillCategories: Record<
  Category,
  { gradient: string; items: { name: string; level: number }[] }
> = {
  Languages: {
    gradient: "from-orange-500 to-red-500",
    items: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "Go", level: 65 },
      { name: "PHP", level: 70 },
      { name: "C", level: 75 },
      { name: "C++", level: 72 },
      { name: "Kotlin", level: 68 },
      { name: "R", level: 60 },
    ],
  },
  "Frameworks & Libraries": {
    gradient: "from-amber-500 to-orange-500",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Node.js", level: 87 },
      { name: "Express.js", level: 85 },
      { name: "NestJS", level: 75 },
      { name: "Spring Boot", level: 82 },
      { name: "Angular", level: 70 },
      { name: "Flutter", level: 65 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  Databases: {
    gradient: "from-red-500 to-amber-500",
    items: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  Tools: {
    gradient: "from-yellow-500 to-orange-500",
    items: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 72 },
      { name: "Selenium", level: 75 },
      { name: "Axios", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "HTML/CSS", level: 93 },
    ],
  },
};

const categories = Object.keys(skillCategories) as Category[];

export default function Skills() {
  const [active, setActive] = useState<Category>("Languages");

  return (
    <section
      id="skills"
      className="py-28 relative bg-[#080400] overflow-hidden"
    >
      <div className="absolute left-0 bottom-0 w-[450px] h-[450px] rounded-full bg-orange-600/6 blur-[120px] pointer-events-none" />

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
            What I know
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-4 w-14 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                active === cat
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-[0_0_22px_rgba(249,115,22,0.35)]"
                  : "text-white/50 border border-white/10 hover:border-orange-500/40 hover:text-white"
              }`}
            >
              <i
                className={`ri-${cat === "Languages" ? "code-line" : cat === "Frameworks & Libraries" ? "layout-grid-line" : cat === "Databases" ? "database-2-line" : "tools-line"} text-base`}
              />
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {skillCategories[active].items.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                className="glass glass-hover p-5 rounded-2xl group cursor-default transition-all duration-300"
              >
                {/* Progress bar */}
                <div className="w-full bg-white/5 rounded-full h-1.5 mb-3 overflow-hidden">
                  <motion.div
                    className={`h-1.5 rounded-full bg-gradient-to-r ${skillCategories[active].gradient}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 0.9,
                      delay: i * 0.04 + 0.15,
                      ease: "easeOut",
                    }}
                  />
                </div>

                <p className="text-white/80 text-sm font-semibold group-hover:text-orange-400 transition-colors leading-tight">
                  {skill.name}
                </p>
                <p className="text-white/25 text-xs mt-1">{skill.level}%</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
