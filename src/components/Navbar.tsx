"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "خانه", href: "#hero" },
  { label: "درباره", href: "#about" },
  { label: "تجربیات", href: "#experience" },
  { label: "مهارت‌ها", href: "#skills" },
  { label: "دوره‌ها", href: "#courses" },
  { label: "پروژه‌ها", href: "#projects" },
  { label: "تماس", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3 right-3 left-3 z-50 mx-auto max-w-5xl rounded-xl transition-all duration-500"
      style={{
        background: scrolled ? "rgba(6, 8, 12, 0.85)" : "transparent",
        border: scrolled ? "1px solid rgba(86, 156, 214, 0.06)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        boxShadow: scrolled ? "0 0 30px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <div className="px-4 sm:px-5">
        <div className="flex items-center justify-between h-12 sm:h-14">
          <a href="#hero" className="font-mono text-sm sm:text-base tracking-tight text-[#569CD6]/80 hover:text-[#569CD6] transition-colors font-semibold">
            محمد ترمه چی
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a key={link.href} href={link.href}
                  className="relative px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono transition-all duration-300"
                  style={{ color: isActive ? "#569CD6" : "rgba(255,255,255,0.25)" }}
                >
                  {isActive && (
                    <motion.div layoutId="nav-active"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(86, 156, 214, 0.06)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="منو"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-full rounded bg-[#569CD6]/40"
              />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-full rounded bg-[#569CD6]/40"
              />
              <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-full rounded bg-[#569CD6]/40"
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden rounded-b-xl"
          >
            <div className="px-4 pb-3 flex flex-col gap-0.5">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-mono transition-all"
                  style={{
                    color: activeSection === link.href.slice(1) ? "#569CD6" : "rgba(255,255,255,0.25)",
                    background: activeSection === link.href.slice(1) ? "rgba(86, 156, 214, 0.04)" : "transparent",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
