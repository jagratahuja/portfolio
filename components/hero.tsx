"use client";

import { motion } from "framer-motion";
import { Github, ArrowDown } from "lucide-react";
import { useState } from "react";

const skills = [
  { name: "Python", color: "#3776AB" },
  { name: "C#", color: "#239120" },
  { name: "Java", color: "#ED8B00" },
  { name: "Unity", color: "#00D4FF" },
  { name: "Tkinter", color: "#A855F7" },
];

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const orbitRadius = 160;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#3b82f6]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 -right-20 w-72 h-72 bg-[#a855f7]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[#14b8a6]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1c]/50 to-[#0a0f1c]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left side - Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#a855f7]/20 border border-[#3b82f6]/30 text-sm text-[#00d4ff] mb-6">
                Student Developer
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-[#f0f4ff] via-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent animate-gradient">
                Jagrat Ahuja
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#94a3b8] mb-4 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Student developer focused on productivity systems and educational tools.
            </motion.p>

            <motion.p
              className="text-base text-[#64748b] mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Building practical software solutions with 100+ Python programs and growing.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white overflow-hidden rounded-xl transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#a855f7] transition-all duration-300 group-hover:scale-105" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#a855f7] to-[#3b82f6]" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 shadow-[0_0_30px_10px_rgba(59,130,246,0.5)]" />
                <span className="relative flex items-center gap-2">
                  View Projects
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>

              <a
                href="https://github.com/jagratahuja"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium overflow-hidden rounded-xl border border-[#1e3a5f] bg-[#0d1424]/80 hover:border-[#3b82f6]/50 transition-all duration-300"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#3b82f6]/10 to-[#a855f7]/10" />
                <span className="relative flex items-center gap-2 text-[#f0f4ff]">
                  <Github className="w-5 h-5" />
                  GitHub Profile
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image with skill orbit */}
          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div
              className="relative w-80 h-80 md:w-[400px] md:h-[400px] flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Orbiting skills container */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: isHovered ? 30 : 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {skills.map((skill, index) => {
                  const angle = (index * 360) / skills.length;
                  const radians = (angle * Math.PI) / 180;
                  const x = Math.cos(radians) * orbitRadius;
                  const y = Math.sin(radians) * orbitRadius;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      className="absolute"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      }}
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: isHovered ? 30 : 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <motion.div
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm whitespace-nowrap"
                        style={{
                          backgroundColor: `${skill.color}20`,
                          border: `1px solid ${skill.color}50`,
                          color: skill.color,
                          boxShadow: isHovered
                            ? `0 0 20px ${skill.color}40`
                            : `0 0 10px ${skill.color}20`,
                        }}
                      >
                        {skill.name}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Profile image container - centered */}
              <motion.div
                className="relative w-56 h-56 md:w-64 md:h-64 rounded-full z-10"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#a855f7] blur-xl transition-opacity duration-300 ${
                    isHovered ? "opacity-60" : "opacity-30"
                  }`}
                />

                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-[#3b82f6] via-[#a855f7] to-[#14b8a6] animate-gradient animate-pulse-glow">
                  <div className="w-full h-full rounded-full bg-[#0a0f1c] overflow-hidden">
                    {/* Profile image placeholder */}
                    <img
                      src="/profile-placeholder.png"
                      alt="Jagrat Ahuja"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-[#64748b]"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
