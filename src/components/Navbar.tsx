"use client";

import { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = [
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const offset = window.scrollY + 120;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && offset >= el.offsetTop) current = `#${id}`;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div
        className={`w-full max-w-4xl transition-all duration-500 rounded-2xl border px-5 py-3 flex items-center justify-between ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl border-pink-500/20 shadow-[0_8px_32px_rgba(236,72,153,0.12)]"
            : "bg-white/60 backdrop-blur-xl border-white/70"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-black gradient-text">RR</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold px-4 py-1.5 rounded-xl transition-all duration-200 ${
                active === link.href
                  ? "text-pink-600 bg-pink-500/10"
                  : "text-[#4b3a29] hover:text-pink-600 hover:bg-pink-500/8"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs text-orange-500 font-semibold">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Available for work
          </span>
          <a
            href="#contact"
            className="btn-primary px-4 py-2 rounded-xl text-sm font-bold text-white flex items-center gap-1"
          >
            Let&apos;s Talk
            <i className="ri-arrow-right-up-line text-base" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#4b3a29] hover:text-pink-600 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i
            className={`text-2xl transition-all ${menuOpen ? "ri-close-line" : "ri-menu-line"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl bg-white/90 backdrop-blur-2xl border border-pink-500/15 p-3 shadow-[0_12px_40px_rgba(236,72,153,0.15)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 px-4 text-[#4b3a29] hover:text-pink-600 hover:bg-pink-500/10 rounded-xl transition-all text-sm font-semibold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 btn-primary text-center py-2.5 px-4 rounded-xl text-white font-bold text-sm"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </nav>
  );
}
