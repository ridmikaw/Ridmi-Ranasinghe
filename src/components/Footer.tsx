import "remixicon/fonts/remixicon.css";

const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

const socials = [
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
  { remix: "ri-mail-line", href: "mailto:ridmi@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative py-14 bg-[#fff4ea] border-t border-pink-500/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-7">
          {/* Logo */}
          <div className="text-2xl font-black">
            <span className="gradient-text">RR</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6 justify-center">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[#7c6a56] hover:text-pink-600 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-3">
            {socials.map(({ remix, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-white border border-pink-500/15 flex items-center justify-center text-[#7c6a56] hover:text-pink-600 hover:border-pink-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <i className={`${remix} text-base`} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

          {/* Copyright */}
          <p className="text-[#7c6a56] text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Ridmi Ranasinghe. Built with
            <i
              className="ri-heart-fill text-pink-500"
              style={{ fontSize: "11px" }}
            />
            &amp; Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
