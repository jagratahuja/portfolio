"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-[#0a0f1c]/80 backdrop-blur-lg border-b border-[#1e3a5f]/30"
        style={{ opacity: backgroundOpacity }}
      />

      <nav className="relative max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent"
          >
            JA
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-[#94a3b8] hover:text-[#f0f4ff] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#a855f7] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#a855f7] hover:from-[#a855f7] hover:to-[#3b82f6] transition-all duration-300"
          >
            {"Let's Talk"}
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[#1e3a5f]/30 text-[#f0f4ff]"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 p-4 bg-[#0a0f1c]/95 backdrop-blur-lg border-b border-[#1e3a5f]/30"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base text-[#94a3b8] hover:text-[#f0f4ff] transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#a855f7] mt-2"
              >
                {"Let's Talk"}
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
