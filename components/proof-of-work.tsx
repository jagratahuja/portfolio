"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, CalendarDays, FolderGit2 } from "lucide-react";
import { proofOfWorkContent } from "@/content/proof-of-work";

const statIcons = [Activity, CalendarDays, FolderGit2];

export function ProofOfWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const maxTimelineValue = Math.max(...proofOfWorkContent.timelineBars);

  return (
    <section id="proof" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#a855f7]/20 border border-[#3b82f6]/30 text-sm text-[#00d4ff] mb-4">
            {proofOfWorkContent.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">
              {proofOfWorkContent.heading}
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-3xl mx-auto">
            {proofOfWorkContent.subtitle}
          </p>
          <p className="text-[#64748b] text-sm mt-3">
            {proofOfWorkContent.asOfNote}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4 mb-8">
          {proofOfWorkContent.stats.map((stat, index) => {
            const Icon = statIcons[index] ?? Activity;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 + index * 0.12 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] border border-[#1e3a5f]/50"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#a855f7]/20 border border-[#3b82f6]/30 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#00d4ff]" />
                </div>
                <p className="text-sm text-[#94a3b8] mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-[#f0f4ff] mb-1 font-[family-name:var(--font-space-grotesk)]">
                  {stat.value}
                  <span className="text-base text-[#94a3b8] ml-1">{stat.context}</span>
                </p>
                <p className="text-sm text-[#64748b]">{stat.note}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="relative p-6 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] border border-[#1e3a5f]/50"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
            <p className="text-[#cbd5e1] text-sm font-medium">
              {proofOfWorkContent.timelineLabel}
            </p>
            <a
              href={proofOfWorkContent.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm rounded-lg text-[#f0f4ff] bg-gradient-to-r from-[#3b82f6] to-[#a855f7] hover:from-[#a855f7] hover:to-[#3b82f6] transition-all duration-300"
            >
              {proofOfWorkContent.cta.label}
            </a>
          </div>

          <div className="flex items-end gap-2 h-28">
            {proofOfWorkContent.timelineBars.map((value, index) => (
              <div key={index} className="flex-1 h-full flex items-end">
                <motion.div
                  initial={{ height: 0 }}
                  animate={
                    isInView
                      ? {
                          height: `${Math.max((value / maxTimelineValue) * 100, 12)}%`,
                        }
                      : {}
                  }
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.02 }}
                  className="w-full rounded-t-md bg-gradient-to-t from-[#3b82f6] to-[#a855f7] opacity-85"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
