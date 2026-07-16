"use client";

import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";

const roles = ["Software Engineer", "Full-Stack Developer", "Problem Solver"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayed.length < role.length) {
        timeout = setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          80,
        );
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background ───────────────────────────────────────────── */}
      <div className="absolute inset-0 aurora-bg">
        {/* Animated glowing orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-orange-400/25 blur-[140px] animate-orb-pulse"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-pink-400/25 blur-[120px] animate-orb-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-2/3 left-1/2 w-[400px] h-[400px] rounded-full bg-violet-400/22 blur-[110px] animate-orb-pulse"
          style={{ animationDelay: "4s" }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(236,72,153,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#fdf7f0] to-transparent" />
      </div>

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-white/70 backdrop-blur-md text-pink-600 text-sm font-semibold mb-10 shadow-[0_4px_18px_rgba(236,72,153,0.15)] animate-fade-in">
          <i className="ri-stars-line text-sm" />
          Available for new opportunities
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>

        {/* Name */}
        <h1
          className="animate-slide-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span className="block text-[#7c6a56] text-base md:text-lg font-semibold tracking-[0.35em] uppercase mb-3">
            Hello, I&rsquo;m
          </span>
          <span className="block text-6xl md:text-8xl lg:text-9xl font-black gradient-text leading-none">
            Ridmi
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl font-black text-[#1f1508] leading-none mt-1">
            Ranasinghe
          </span>
        </h1>

        <div
          className="mt-6 flex justify-center animate-slide-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <a
            href="https://macrolabs.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl border border-pink-500/20 bg-white/70 px-4 py-3 backdrop-blur-md shadow-[0_6px_20px_rgba(249,115,22,0.1)] hover:border-pink-400/60 hover:bg-white/90 hover:shadow-[0_10px_30px_rgba(236,72,153,0.2)] transition-all duration-300"
            aria-label="Associate Software Engineer at Derana Macrolabs"
          >
            <div className="text-left leading-tight">
              <p className="text-[10px] uppercase tracking-[0.22em] text-pink-500/80">
                Current Role
              </p>
              <p className="text-sm md:text-base font-bold text-[#1f1508]">
                Associate Software Engineer
              </p>
              <p className="text-xs md:text-sm text-orange-600">
                Derana Macrolabs
              </p>
            </div>

            <i className="ri-external-link-line text-pink-500 group-hover:text-violet-500 transition-colors" />
          </a>
        </div>
        {/* Typing subtitle */}
        <div
          className="mt-8 h-10 flex items-center justify-center text-xl md:text-2xl font-bold text-[#4b3a29] animate-slide-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <span className="mr-1 gradient-text">{displayed}</span>
          <span className="animate-blink text-pink-500 font-light">|</span>
        </div>

        {/* CTA buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          <a
            href="#projects"
            className="btn-primary px-9 py-4 rounded-2xl font-bold text-white text-base shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-9 py-4 rounded-2xl font-bold text-[#4b3a29] text-base bg-white/70 backdrop-blur-md border border-pink-500/25 hover:border-pink-500/60 hover:bg-white hover:text-pink-600 hover:shadow-[0_8px_24px_rgba(236,72,153,0.15)] transition-all duration-300"
          >
            Let&rsquo;s Talk
          </a>
        </div>

        {/* Social links */}
        <div
          className="mt-10 flex items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: "0.9s", opacity: 0 }}
        >
          {[
            {
              remix: "ri-github-fill",
              href: "https://github.com/ridmikaw",
              label: "GitHub",
            },
            {
              remix: "ri-linkedin-box-fill",
              href: "https://www.linkedin.com/in/ridmi-ranasinghe-4920a8202/",
              label: "LinkedIn",
            },
            {
              remix: "ri-mail-line",
              href: "mailto:ridmikranasinghe@gmail.com",
              label: "Email",
            },
          ].map(({ remix, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur-md border border-pink-500/15 flex items-center justify-center text-[#7c6a56] hover:text-pink-600 hover:border-pink-500/50 hover:bg-white hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(236,72,153,0.2)] transition-all duration-300"
            >
              <i className={`${remix} text-lg`} />
            </a>
          ))}
        </div>

        {/* Scroll cue */}
        <div
          className="mt-20 flex flex-col items-center gap-2 text-[#a3927e] text-xs animate-float"
          style={{ animationDelay: "0s" }}
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll</span>
          <i className="ri-arrow-down-line text-sm animate-bounce" />
        </div>
      </div>
    </section>
  );
}
