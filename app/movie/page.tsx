import Link from "next/link";
import { ArrowLeft, Download, FileText, Film } from "lucide-react";

const resources = [
  {
    title: "Plan.docx",
    description: "Complete plan for the movie.",
    href: "/movie/Plan.docx",
    type: "docx",
  },
  {
    title: "STORYLINE.docx",
    description: "Storyline of the movie.",
    href: "/movie/STORYLINE.docx",
    type: "docx",
  },
  {
    title: "Official Movie Drive Folder",
    description: "Official Google Drive folder for everything movie related.",
    href: "https://drive.google.com/drive/folders/1nCMqTDDRatJ5zUAPS5EeZ3qrjALFVr7x?usp=sharing",
    type: "drive",
  },
];

export default function MoviePage() {
  return (
    <main className="relative min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <section className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#14b8a6] text-white">
            <Film className="h-7 w-7" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#f0f4ff] mb-3 font-[family-name:var(--font-space-grotesk)]">
            Movie Docs Hub
          </h1>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Preview Movie v1 below, then use the redirects for docs and the official folder.
          </p>
        </section>

        <section className="mb-10">
          <div className="mb-3 flex items-center justify-center">
            <a
              href="https://www.youtube.com/watch?v=0pVd_I-F9MA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-[#14b8a6]/40 bg-[#14b8a6]/10 px-4 py-2 text-sm font-medium text-[#5eead4] hover:bg-[#14b8a6]/20 transition-colors"
            >
              Open on YouTube
            </a>
          </div>
          <div className="mb-3 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#14b8a6]/40 bg-[#14b8a6]/12 px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-[#5eead4]">
              <span className="h-2 w-2 rounded-full bg-[#5eead4] animate-pulse" />
              Now Playing: Movie v1
            </span>
          </div>
          <div className="relative rounded-3xl border border-[#1e3a5f]/60 bg-gradient-to-br from-[#0d1424] via-[#0b1a31] to-[#070d1a] p-3 md:p-4 shadow-[0_0_0_1px_rgba(59,130,246,0.12),0_30px_80px_rgba(2,8,23,0.9)] overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(94,234,212,0.14),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.16),transparent_40%)]" />
            <div className="relative rounded-2xl border border-[#3b82f6]/30 bg-black/70 p-2 md:p-3">
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-[#14b8a6]/30 bg-black">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/0pVd_I-F9MA?si=vx0gQXX83wHuV_dz&vq=hd1080&hd=1&rel=0&playsinline=1"
                  title="Movie v1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-col items-center gap-2">
            <p className="text-center text-sm text-[#94a3b8]">Movie v1 reference screen</p>
          </div>
        </section>

        <section className="grid gap-5">
          {resources.map((resource) => (
            <article
              key={resource.href}
              className="rounded-2xl border border-[#1e3a5f]/60 bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] p-5 md:p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/15 px-3 py-1 text-xs text-[#00d4ff]">
                    <FileText className="h-3.5 w-3.5" />
                    {resource.type === "drive" ? "Google Drive" : "DOCX File"}
                  </div>
                  <h2 className="text-xl font-semibold text-[#f0f4ff] mb-1">
                    {resource.title}
                  </h2>
                  <p className="text-sm text-[#94a3b8]">{resource.description}</p>
                </div>

                <div className="flex items-center gap-3">
                  {resource.type === "drive" ? (
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#14b8a6]/40 bg-[#14b8a6]/10 px-4 py-2.5 text-sm font-medium text-[#5eead4] hover:bg-[#14b8a6]/20 transition-colors"
                    >
                      Open Official Folder
                    </a>
                  ) : (
                    <a
                      href={resource.href}
                      download
                      className="inline-flex items-center gap-2 rounded-xl border border-[#3b82f6]/40 bg-[#1e3a5f]/40 px-4 py-2.5 text-sm font-medium text-[#f0f4ff] hover:text-[#00d4ff] hover:border-[#00d4ff]/60 transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
