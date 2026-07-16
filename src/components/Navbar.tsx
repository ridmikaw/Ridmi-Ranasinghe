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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/70 backdrop-blur-xl border-b border-pink-500/15 shadow-[0_8px_30px_rgba(236,72,153,0.12)]"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl font-black gradient-text">RR</span>
          <span className="text-[#7c6a56] font-light text-sm hidden sm:block">
            Portfolio
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-all duration-300 relative group ${
                active === link.href
                  ? "text-pink-600"
                  : "text-[#4b3a29] hover:text-pink-600"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 transition-all duration-300 ${
                  active === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary px-5 py-2 rounded-xl text-sm font-bold text-white"
          >
            Hire Me
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
        <div className="md:hidden mt-2 mx-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-pink-500/15 p-4 shadow-[0_12px_40px_rgba(236,72,153,0.15)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 px-4 text-[#4b3a29] hover:text-pink-600 hover:bg-pink-500/10 rounded-xl transition-all text-sm font-semibold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 btn-primary text-center py-3 px-4 rounded-xl text-white font-bold text-sm"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
