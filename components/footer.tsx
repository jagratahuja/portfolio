"use client";

import { motion } from "framer-motion";
import { Github, Mail, Heart } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-[#1e3a5f]/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent"
            >
              JA
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/jagratahuja"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#1e3a5f]/30 flex items-center justify-center text-[#94a3b8] hover:text-[#f0f4ff] hover:bg-[#1e3a5f]/50 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:jagrat.ahuja@live.com"
              className="w-10 h-10 rounded-lg bg-[#1e3a5f]/30 flex items-center justify-center text-[#94a3b8] hover:text-[#f0f4ff] hover:bg-[#1e3a5f]/50 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-[#1e3a5f]/30 text-center"
        >
          <p className="text-sm text-[#64748b] flex items-center justify-center gap-1">
            Built with <Heart className="w-4 h-4 text-[#ec4899]" /> by Jagrat Ahuja
          </p>
          <p className="text-xs text-[#475569] mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
