import Link from "next/link";
import { ArrowLeft, Download, FileText, Film } from "lucide-react";

const docs = [
  {
    title: "Plan.docx",
    description: "Complete plan for the movie.",
    href: "/movie/Plan.docx",
  },
  {
    title: "STORYLINE.docx",
    description: "Storyline of the movie.",
    href: "/movie/STORYLINE.docx",
  },
];

export default function MoviePage() {
  return (
    <main className="relative min-h-screen px-4 py-24">
      <div className="max-w-4xl mx-auto">
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
            Download the complete movie plan and the movie storyline documents.
          </p>
        </section>

        <section className="grid gap-5">
          {docs.map((doc) => (
            <article
              key={doc.href}
              className="rounded-2xl border border-[#1e3a5f]/60 bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] p-5 md:p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/15 px-3 py-1 text-xs text-[#00d4ff]">
                    <FileText className="h-3.5 w-3.5" />
                    DOCX File
                  </div>
                  <h2 className="text-xl font-semibold text-[#f0f4ff] mb-1">
                    {doc.title}
                  </h2>
                  <p className="text-sm text-[#94a3b8]">{doc.description}</p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={doc.href}
                    download
                    className="inline-flex items-center gap-2 rounded-xl border border-[#3b82f6]/40 bg-[#1e3a5f]/40 px-4 py-2.5 text-sm font-medium text-[#f0f4ff] hover:text-[#00d4ff] hover:border-[#00d4ff]/60 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
