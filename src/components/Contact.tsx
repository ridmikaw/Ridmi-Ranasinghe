"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";

const contactInfo = [
  {
    remix: "ri-mail-line",
    label: "Email",
    value: "ridmi@example.com",
    href: "mailto:ridmi@example.com",
  },
  {
    remix: "ri-phone-line",
    label: "Phone",
    value: "+94 XX XXX XXXX",
    href: "tel:+94XXXXXXXXX",
  },
  {
    remix: "ri-map-pin-line",
    label: "Location",
    value: "Colombo, Sri Lanka",
    href: "#",
  },
];

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate async send — replace with real API call
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const inputCls =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 text-sm placeholder-white/20 focus:outline-none focus:border-orange-500/50 focus:bg-orange-500/5 transition-all duration-300";

  return (
    <section
      id="contact"
      className="py-28 relative bg-[#0a0600] overflow-hidden"
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #f97316 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />
      <div className="absolute left-0 bottom-0 w-[450px] h-[450px] rounded-full bg-orange-600/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-orange-500 text-xs font-bold tracking-[0.35em] uppercase mb-3">
            Let&apos;s connect
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="mt-4 w-14 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* ── Left: info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/55 leading-relaxed mb-10 text-lg max-w-md">
              I&apos;m always open to new opportunities, interesting projects,
              and great conversations. Whether you have a project in mind or
              just want to say hello — my inbox is open.
            </p>

            <div className="space-y-3 mb-10">
              {contactInfo.map(({ remix, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 glass glass-hover rounded-xl transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/25 transition-colors shrink-0">
                    <i className={`${remix} text-base`} />
                  </div>
                  <div>
                    <p className="text-white/35 text-xs">{label}</p>
                    <p className="text-white/80 font-medium text-sm">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                {
                  remix: "ri-github-fill",
                  href: "https://github.com/ridmi-ranasinghe",
                  label: "GitHub",
                },
                {
                  remix: "ri-linkedin-box-fill",
                  href: "https://linkedin.com/in/ridmi-ranasinghe",
                  label: "LinkedIn",
                },
              ].map(({ remix, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-white/45 hover:text-orange-400 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
                >
                  <i className={`${remix} text-lg`} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/45 text-xs font-semibold mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-white/45 text-xs font-semibold mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/45 text-xs font-semibold mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputCls}
                />
              </div>

              <div>
                <label className="block text-white/45 text-xs font-semibold mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inputCls} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className="w-full btn-primary py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sent ? (
                  "Message Sent! ✓"
                ) : sending ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
