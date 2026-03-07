"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Lightbulb, GraduationCap, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "100+ Programs",
    description: "Python projects built and counting",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Creating practical software solutions",
  },
  {
    icon: GraduationCap,
    title: "Class 11 CBSE",
    description: "Focused on CS and Mathematics",
  },
  {
    icon: Rocket,
    title: "Self-Taught",
    description: "Started coding during COVID",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#a855f7]/20 border border-[#3b82f6]/30 text-sm text-[#00d4ff] mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            <span className="bg-gradient-to-r from-[#f0f4ff] to-[#00d4ff] bg-clip-text text-transparent">
              Building the Future
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-[#94a3b8] mb-6 leading-relaxed">
              I&apos;m a{" "}
              <span className="text-[#00d4ff]">Class 11 CBSE student</span>{" "}
              passionate about computer science and mathematics. My journey into
              programming began during the COVID period, and since then, I&apos;ve been
              building tools that improve efficiency and solve real problems.
            </p>
            <p className="text-lg text-[#94a3b8] mb-6 leading-relaxed">
              I specialize in designing systems that make a difference,
              particularly in{" "}
              <span className="text-[#a855f7]">education</span> and{" "}
              <span className="text-[#14b8a6]">productivity</span>. From
              educational games to study analysis tools, I believe in creating
              software that has real-world impact.
            </p>
            <p className="text-lg text-[#94a3b8] leading-relaxed">
              With over{" "}
              <span className="text-[#3b82f6] font-semibold">
                100 Python programs
              </span>{" "}
              under my belt, I continue to explore new technologies and
              challenge myself with increasingly complex projects.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] border border-[#1e3a5f]/50 hover:border-[#3b82f6]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#3b82f6]/5 to-[#a855f7]/5" />
                <div className="relative">
                  <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#a855f7]/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <h3 className="font-semibold text-[#f0f4ff] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#64748b]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
