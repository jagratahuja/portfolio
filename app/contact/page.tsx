"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, Mail, Send } from "lucide-react";

export default function ContactPage() {
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
          source: "contact-page-form",
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
    <main className="relative min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <section className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#3b82f6]/20 to-[#a855f7]/20 border border-[#3b82f6]/30 text-sm text-[#00d4ff] mb-4">
            Contact Form
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">
              Send a Message
            </span>
          </h1>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Send directly from your browser. If needed, email-app fallback is still supported.
          </p>
        </section>

        <section className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1c] border border-[#1e3a5f]/50">
          <div className="mb-4">
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
          <div className="mb-6 inline-flex items-center gap-2 text-sm text-[#94a3b8]">
            <Mail className="w-4 h-4 text-[#00d4ff]" />
            Sending to jagrat.ahuja@live.com
          </div>

          <form onSubmit={onSubmit}>
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
                rows={6}
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
            <input type="hidden" name="source" value="contact-page-form" readOnly />

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
        </section>
      </div>
    </main>
  );
}
