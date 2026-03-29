"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, FileText, Github, Wrench } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/lib/projects-data";

const featuredProjects = projectsData.filter((project) => project.featured);
const toolProjectSlugs = new Set([
  "timescope",
  "decision-maker",
  "color-palette-generator",
  "curiosity-engine",
  "habit-tracker",
]);

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
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            A collection of projects showcasing my skills in building practical
            tools and applications.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`group relative xl:col-span-2 ${
                index === 3
                  ? "xl:col-start-2"
                  : index === 4
                    ? "xl:col-start-4"
                    : ""
              }`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3b82f6]/20 to-[#a855f7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

              <div
                className={`relative h-full p-6 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] border transition-all duration-300 overflow-hidden flex flex-col ${
                  project.isArchive
                    ? "border-[#f59e0b]/40 group-hover:border-[#f59e0b]/60"
                    : "border-[#1e3a5f]/50 group-hover:border-transparent"
                }`}
              >
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-[#3b82f6]/60 to-[#a855f7]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                  <div className="w-full h-full rounded-2xl bg-[#0a0f1c]" />
                </div>

                <div className="min-h-8 mb-4 flex items-center gap-2">
                  <span className="inline-flex px-3 py-1 text-xs rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#a855f7]/20 border border-[#3b82f6]/30 text-[#00d4ff]">
                    Featured
                  </span>
                  {project.isArchive && (
                    <span className="inline-flex px-3 py-1 text-xs rounded-full bg-gradient-to-r from-[#f59e0b]/20 to-[#f97316]/20 border border-[#f59e0b]/40 text-[#fbbf24]">
                      Proof Asset
                    </span>
                  )}
                  {toolProjectSlugs.has(project.slug) && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-gradient-to-r from-[#14b8a6]/20 to-[#3b82f6]/20 border border-[#14b8a6]/30 text-[#5eead4]">
                      <Wrench className="w-3 h-3" />
                      Tool
                    </span>
                  )}
                </div>

                <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#a855f7] p-[1px]">
                  <div className="w-full h-full rounded-xl bg-[#0d1424] flex items-center justify-center text-[#f0f4ff] text-lg font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#f0f4ff] mb-2 font-[family-name:var(--font-space-grotesk)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#3b82f6] group-hover:to-[#a855f7] transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-[#cbd5e1] text-sm mb-2 leading-5 h-[60px] overflow-hidden font-medium">
                  {project.positioningLine}
                </p>
                <p className="text-[#94a3b8] text-sm mb-4 leading-5 h-[60px] overflow-hidden">
                  {project.supportLine}
                </p>

                {project.isArchive && (
                  <p className="text-xs text-[#fbbf24] mb-3 font-medium">
                    Built as long-form proof of progression, consistency, and
                    systems thinking.
                  </p>
                )}

                <div className="flex flex-wrap content-start gap-2 mb-4 h-16 overflow-hidden">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-[#1e3a5f]/50 text-[#94a3b8] border border-[#1e3a5f]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[#1e3a5f]/30 h-10 whitespace-nowrap overflow-x-auto">
                  {project.isArchive ? (
                    <>
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#64748b] hover:text-[#00d4ff] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View</span>
                      </a>
                      <span className="flex items-center gap-2 text-sm text-[#475569] cursor-not-allowed">
                        <ExternalLink className="w-4 h-4" />
                        <span>Download (Coming Soon)</span>
                      </span>
                    </>
                  ) : (
                    <>
                      {project.sourceAvailable !== false && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-[#64748b] hover:text-[#00d4ff] transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                      )}
                      {project.summaryUrl && (
                        <a
                          href={project.summaryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-[#64748b] hover:text-[#00d4ff] transition-colors"
                        >
                          <FileText className="w-4 h-4" />
                          <span>Summary</span>
                        </a>
                      )}
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-[#64748b] hover:text-[#00d4ff] transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 text-sm text-[#475569] cursor-not-allowed">
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo (Coming Soon)</span>
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 text-base font-medium text-white rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#a855f7] hover:from-[#a855f7] hover:to-[#3b82f6] transition-all duration-300 shadow-lg shadow-[#3b82f6]/25 hover:shadow-[#a855f7]/25"
          >
            <span>See what all I have built</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
