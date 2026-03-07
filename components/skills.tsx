"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming",
    color: "#3b82f6",
    skills: ["Python", "C#", "Java"],
  },
  {
    title: "Libraries",
    color: "#a855f7",
    skills: ["Tkinter", "Pygame", "Turtle"],
  },
  {
    title: "Tools",
    color: "#14b8a6",
    skills: ["VS Code", "Visual Studio", "Unity Engine", "Replit"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#a855f7]/20 border border-[#3b82f6]/30 text-sm text-[#00d4ff] mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            <span className="bg-gradient-to-r from-[#f0f4ff] via-[#a855f7] to-[#14b8a6] bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.15 }}
              className="relative group"
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] border border-[#1e3a5f]/50 h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3
                    className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)]"
                    style={{ color: category.color }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.4 + categoryIndex * 0.15 + skillIndex * 0.1,
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="group/skill relative"
                    >
                      <div
                        className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-default"
                        style={{
                          backgroundColor: `${category.color}15`,
                          border: `1px solid ${category.color}40`,
                          color: category.color,
                        }}
                      >
                        <span className="relative z-10">{skill}</span>
                      </div>
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 blur-md -z-10"
                        style={{ backgroundColor: `${category.color}30` }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
