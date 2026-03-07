"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Star, Newspaper, Crown, Mic } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Times of India NIE – 18 Under 18 Nomination",
    description: "Nominated in Tech and Innovation Star Category by Shah International School",
    color: "#fbbf24",
    highlight: true,
  },
  {
    icon: Medal,
    title: "3rd Rank – Spectrum Maths Fest",
    description: "Interschool Mathematics Competition",
    color: "#3b82f6",
  },
  {
    icon: Medal,
    title: "3rd Rank – Pi-Fest Mathematics Competition",
    description: "Bosco School",
    color: "#a855f7",
  },
  {
    icon: Award,
    title: "3rd Rank – Mathematics Competition",
    description: "Doon Public School – ₹1000 Cash Prize",
    color: "#14b8a6",
  },
  {
    icon: Star,
    title: "CBSE Science Exhibition Participant",
    description: "Paper from Grass project",
    color: "#00d4ff",
  },
  {
    icon: Medal,
    title: "Multiple Olympiad Medals",
    description: "Gold, Silver, Bronze in Mathematics, Science, English, and Computer",
    color: "#ec4899",
  },
  {
    icon: Crown,
    title: "Earth House Captain",
    description: "School leadership position",
    color: "#22c55e",
  },
  {
    icon: Newspaper,
    title: "Featured in Times of India NIE",
    description: "School French Day Assembly coverage",
    color: "#f97316",
  },
  {
    icon: Mic,
    title: "Public Speaking & Tech Events",
    description: "Participated in multiple school tech and speaking competitions",
    color: "#06b6d4",
  },
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#fbbf24]/20 to-[#f97316]/20 border border-[#fbbf24]/30 text-sm text-[#fbbf24] mb-4">
            Recognition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            <span className="bg-gradient-to-r from-[#f0f4ff] via-[#fbbf24] to-[#f97316] bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Awards, recognitions, and milestones throughout my journey.
          </p>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`group relative ${achievement.highlight ? 'md:col-span-2' : ''}`}
            >
              <div
                className={`relative p-5 rounded-xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] border transition-all duration-300 ${
                  achievement.highlight
                    ? 'border-[#fbbf24]/30 hover:border-[#fbbf24]/60'
                    : 'border-[#1e3a5f]/50 hover:border-[#3b82f6]/50'
                }`}
              >
                {/* Highlight badge */}
                {achievement.highlight && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-[#fbbf24] to-[#f97316] text-[#0a0f1c]">
                      Featured
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${achievement.color}20`,
                      border: `1px solid ${achievement.color}40`,
                    }}
                  >
                    <achievement.icon
                      className="w-6 h-6"
                      style={{ color: achievement.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-[#f0f4ff] mb-1 group-hover:text-[#00d4ff] transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-[#64748b]">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{ backgroundColor: `${achievement.color}10` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
