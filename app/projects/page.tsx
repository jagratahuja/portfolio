import Link from "next/link";
import { projectsData, futureTools } from "@/lib/projects-data";
import { ExternalLink, FileText, Github, ArrowLeft, Wrench } from "lucide-react";

const toolProjectSlugs = new Set([
  "timescope",
  "decision-maker",
  "color-palette-generator",
  "curiosity-engine",
  "habit-tracker",
]);

function getCenteredGridClass(index: number, total: number) {
  const remainder = total % 3;
  const lastRowStart = total - remainder;

  if (remainder === 1 && index === total - 1) {
    return "xl:col-start-3";
  }

  if (remainder === 2 && index >= lastRowStart) {
    return index === lastRowStart ? "xl:col-start-2" : "xl:col-start-4";
  }

  return "";
}

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <section className="mb-16 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#a855f7]/20 border border-[#3b82f6]/30 text-sm text-[#00d4ff] mb-4">
            Full Project Library
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">
              All Projects
            </span>
          </h1>
          <p className="text-[#94a3b8] max-w-3xl mx-auto">
            A complete view of shipped tools and systems, with links to source
            code and live demos where available.
          </p>
        </section>

        <section className="grid md:grid-cols-2 xl:grid-cols-6 gap-6 mb-20">
          {projectsData.map((project, index) => (
            <article
              key={project.slug}
              className={`group relative h-full p-6 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] border border-[#1e3a5f]/50 hover:border-[#3b82f6]/50 transition-all duration-300 overflow-hidden xl:col-span-2 ${getCenteredGridClass(index, projectsData.length)}`}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#3b82f6]/5 to-[#a855f7]/5" />

              <div className="relative flex flex-col h-full">
                <div className="min-h-8 mb-4 flex items-center gap-2">
                  {project.featured && (
                    <span className="inline-flex px-3 py-1 text-xs rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#a855f7]/20 border border-[#3b82f6]/30 text-[#00d4ff]">
                      Featured
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

                <h2 className="text-xl font-bold text-[#f0f4ff] mb-2 font-[family-name:var(--font-space-grotesk)]">
                  {project.title}
                </h2>
                <p className="text-[#cbd5e1] text-sm mb-2 leading-5 h-10 overflow-hidden font-medium">
                  {project.positioningLine}
                </p>
                <p className="text-[#94a3b8] text-sm mb-4 leading-5 h-10 overflow-hidden">
                  {project.supportLine}
                </p>

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
                          <span>View My Code</span>
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
            </article>
          ))}
        </section>

        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)]">
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">
                Future Projects
              </span>
            </h2>
            <p className="text-[#94a3b8]">Systems and tools currently in development.</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-6">
            {futureTools.map((tool, index) => (
              <article
                key={tool.name}
                className={`p-6 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] border border-[#1e3a5f]/50 xl:col-span-2 ${
                  getCenteredGridClass(index, futureTools.length)
                }`}
              >
                <h3 className="text-lg font-semibold text-[#f0f4ff] mb-2">
                  {tool.name}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  {tool.purpose}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
