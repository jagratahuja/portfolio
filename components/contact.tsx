"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Send, ArrowUpRight } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#a855f7]/20 border border-[#3b82f6]/30 text-sm text-[#00d4ff] mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">
              {"Let's Connect"}
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            {"Have an idea or want to collaborate? I'd love to hear from you."}
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Email card */}
          <motion.a
            href="mailto:jagrat.ahuja@live.com"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative block"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] border border-[#1e3a5f]/50 hover:border-[#3b82f6]/50 transition-all duration-300 overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-[#00d4ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b82f6]/20 to-[#00d4ff]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#64748b] mb-1">Email me at</p>
                  <p className="text-lg font-semibold text-[#f0f4ff] group-hover:text-[#00d4ff] transition-colors flex items-center gap-2">
                    jagrat.ahuja@live.com
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </p>
                </div>
              </div>
            </div>
          </motion.a>

          {/* GitHub card */}
          <motion.a
            href="https://github.com/jagratahuja"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative block"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] border border-[#1e3a5f]/50 hover:border-[#a855f7]/50 transition-all duration-300 overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/5 to-[#ec4899]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a855f7]/20 to-[#ec4899]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Github className="w-8 h-8 text-[#a855f7]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#64748b] mb-1">Check out my work</p>
                  <p className="text-lg font-semibold text-[#f0f4ff] group-hover:text-[#a855f7] transition-colors flex items-center gap-2">
                    github.com/jagratahuja
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </p>
                </div>
              </div>
            </div>
          </motion.a>
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="mailto:jagrat.ahuja@live.com"
            className="group inline-flex items-center gap-3 px-8 py-4 text-base font-medium text-white rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#a855f7] hover:from-[#a855f7] hover:to-[#3b82f6] transition-all duration-300 shadow-lg shadow-[#3b82f6]/25 hover:shadow-[#a855f7]/25"
          >
            <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Send me a message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
