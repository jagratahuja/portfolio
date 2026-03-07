"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ChartBar, Gamepad2, Code2 } from "lucide-react";

const projects = [
  {
    title: "StudyOS",
    description:
      "Study efficiency analysis system that analyzes focus level, study duration, and task completion to generate productivity insights.",
    tech: ["Python", "SQLite", "Tkinter", "Matplotlib"],
    icon: ChartBar,
    gradient: "from-[#3b82f6] to-[#00d4ff]",
    borderGradient: "from-[#3b82f6]/50 to-[#00d4ff]/50",
  },
  {
    title: "XSCAPE: The Equation Quest",
    description:
      "Educational math game designed to help students practice equations and inequalities through an interactive level-based system.",
    tech: ["Unity", "C#", "WebGL"],
    icon: Gamepad2,
    gradient: "from-[#a855f7] to-[#ec4899]",
    borderGradient: "from-[#a855f7]/50 to-[#ec4899]/50",
  },
  {
    title: "Python Programs Collection",
    description:
      "Archive of 100+ Python programs exploring algorithms, GUI tools, utilities, and logic-based experiments.",
    tech: ["Python", "Tkinter", "Pygame"],
    icon: Code2,
    gradient: "from-[#14b8a6] to-[#22c55e]",
    borderGradient: "from-[#14b8a6]/50 to-[#22c55e]/50",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#a855f7]/20 border border-[#3b82f6]/30 text-sm text-[#00d4ff] mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            <span className="bg-gradient-to-r from-[#f0f4ff] via-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            A collection of projects showcasing my skills in building practical
            tools and applications.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                }}
              />
              
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] border border-[#1e3a5f]/50 group-hover:border-transparent transition-all duration-300 overflow-hidden">
                {/* Glow border effect on hover */}
                <div className={`absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br ${project.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}>
                  <div className="w-full h-full rounded-2xl bg-[#0a0f1c]" />
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${project.gradient} p-[1px]`}>
                  <div className="w-full h-full rounded-xl bg-[#0d1424] flex items-center justify-center">
                    <project.icon className="w-7 h-7 text-[#f0f4ff]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#f0f4ff] mb-3 font-[family-name:var(--font-space-grotesk)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#f0f4ff] group-hover:to-[#00d4ff] transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-[#94a3b8] text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-[#1e3a5f]/50 text-[#94a3b8] border border-[#1e3a5f]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-[#1e3a5f]/30">
                  <button className="flex items-center gap-2 text-sm text-[#64748b] hover:text-[#00d4ff] transition-colors">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm text-[#64748b] hover:text-[#00d4ff] transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
