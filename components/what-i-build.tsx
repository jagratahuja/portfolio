"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function WhatIBuild() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <section id="what-i-build" className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#a855f7]/20 border border-[#3b82f6]/30 text-sm text-[#00d4ff] mb-4">
            What I Build
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">
              Building the Future
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-3xl mx-auto text-lg leading-relaxed">
            I build productivity and learning systems for students, designed to
            improve efficiency through clear tracking, better workflows, and
            measurable optimization.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
