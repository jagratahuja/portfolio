"use client";

import { motion, useInView } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import { Mail, Github, ArrowUpRight, Send } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const formEndpoint = "https://formspree.io/f/mvzvrajw";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    gotcha: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");

  const getMailtoUrl = () => {
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    return `mailto:jagrat.ahuja@live.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setSubmitState("idle");

      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _gotcha: formData.gotcha,
          source: "homepage-form",
        }),
      });

      if (!response.ok) {
        let errorMessage = "Form submission failed";
        try {
          const errorPayload = await response.json();
          if (errorPayload?.error) {
            errorMessage = errorPayload.error;
          }
        } catch {
          // Ignore JSON parse issues and keep fallback message.
        }
        throw new Error(errorMessage);
      }

      setSubmitState("success");
      setFormData({ name: "", email: "", subject: "", message: "", gotcha: "" });
    } catch {
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
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

        {/* Browser user form */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="mb-3">
            {formEndpoint ? (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-[#22c55e]/40 bg-[#22c55e]/10 text-[#86efac]">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                Browser form active
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-[#f97316]/40 bg-[#f97316]/10 text-[#fdba74]">
                <span className="w-2 h-2 rounded-full bg-[#f97316]" />
                Email app fallback active
              </span>
            )}
          </div>
          <div className="mb-4 text-sm text-[#94a3b8]">Prefer not to leave your browser? Send a quick message below.</div>
          <form
            onSubmit={onSubmit}
            className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] border border-[#1e3a5f]/50"
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm text-[#94a3b8] mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a1222] border border-[#1e3a5f]/60 text-[#f0f4ff] placeholder:text-[#4b5f7d] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/40 focus:border-[#3b82f6]/60 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm text-[#94a3b8] mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a1222] border border-[#1e3a5f]/60 text-[#f0f4ff] placeholder:text-[#4b5f7d] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/40 focus:border-[#3b82f6]/60 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="contact-subject" className="block text-sm text-[#94a3b8] mb-2">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={(event) => setFormData((prev) => ({ ...prev, subject: event.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-[#0a1222] border border-[#1e3a5f]/60 text-[#f0f4ff] placeholder:text-[#4b5f7d] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/40 focus:border-[#3b82f6]/60 transition-colors"
                placeholder="What would you like to discuss?"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="contact-message" className="block text-sm text-[#94a3b8] mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-[#0a1222] border border-[#1e3a5f]/60 text-[#f0f4ff] placeholder:text-[#4b5f7d] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/40 focus:border-[#3b82f6]/60 transition-colors resize-y"
                placeholder="Write your message..."
              />
            </div>

            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              value={formData.gotcha}
              onChange={(event) => setFormData((prev) => ({ ...prev, gotcha: event.target.value }))}
              className="hidden"
              aria-hidden="true"
            />
            <input type="hidden" name="source" value="homepage-form" readOnly />

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-3 px-7 py-3 text-base font-medium text-white rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#a855f7] hover:from-[#a855f7] hover:to-[#3b82f6] transition-all duration-300 shadow-lg shadow-[#3b82f6]/25 hover:shadow-[#a855f7]/25"
            >
              <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              {isSubmitting ? "Sending..." : "Send message"}
            </button>

            {submitState === "success" && (
              <p className="mt-4 text-sm text-[#22c55e]">Message sent successfully.</p>
            )}
            {submitState === "error" && (
              <div className="mt-4">
                <p className="text-sm text-[#f97316]">Could not send right now. Please try again.</p>
                <a
                  href={getMailtoUrl()}
                  className="inline-flex mt-2 text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
                >
                  Open email app instead
                </a>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
