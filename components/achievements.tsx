"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Trophy,
  Medal,
  Award,
  Star,
  Newspaper,
  Crown,
  Mic,
  ExternalLink,
  FileText,
} from "lucide-react";
import { achievementsContent } from "@/content/achievements";

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  award: Award,
  star: Star,
  newspaper: Newspaper,
  crown: Crown,
  mic: Mic,
} as const;

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
            {achievementsContent.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">
              {achievementsContent.heading}
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            {achievementsContent.subtitle}
          </p>
          <div className="mt-6">
            <a
              href={achievementsContent.globalCertificates.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#a855f7] hover:from-[#a855f7] hover:to-[#3b82f6] transition-all duration-300"
            >
              <FileText className="w-4 h-4" />
              <span>{achievementsContent.globalCertificates.label}</span>
            </a>
          </div>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {achievementsContent.achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.iconKey as keyof typeof iconMap] ?? Star;

            return (
              <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative"
            >
              <div
                className="relative p-5 rounded-xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] border border-[#1e3a5f]/50 hover:border-[#3b82f6]/50 transition-all duration-300 h-full"
              >

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${achievement.color}20`,
                      border: `1px solid ${achievement.color}40`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: achievement.color }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-[#f0f4ff] mb-1 group-hover:text-[#00d4ff] transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-[#64748b] mb-3">
                      {achievement.description}
                    </p>

                    {(achievement.proofUrl || (achievement as any).spacedForProof) && (
                      <>
                        {achievement.proofUrl && (
                          <a
                            href={achievement.proofUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>View Proof</span>
                          </a>
                        )}
                        {!(achievement.proofUrl) && (achievement as any).spacedForProof && (
                          <div className="h-[22px]" />
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{ backgroundColor: `${achievement.color}10` }}
                />
              </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
