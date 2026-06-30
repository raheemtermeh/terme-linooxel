"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const contacts = [
  {
    label: "ایمیل",
    value: "m.rahimt@yahoo.com",
    icon: "✉",
    href: "mailto:m.rahimt@yahoo.com",
  },
  {
    label: "تلفن",
    value: "09190319486",
    icon: "📞",
    href: "tel:+989190319486",
  },
  {
    label: "تلگرام",
    value: "@MmdRhimm",
    icon: "💬",
    href: "https://t.me/MmdRhimm",
  },
  {
    label: "گیت‌هاب",
    value: "raheemtermeh",
    icon: "🐙",
    href: "https://github.com/raheemtermeh",
  },
  {
    label: "لینکدین",
    value: "Mohamad Termeh chi",
    icon: "💼",
    href: "www.linkedin.com/in/mohammad-termehchi-a40685281",
  },
  { label: "موقعیت", value: "تهران، ایران", icon: "📍" },
];

const socials = [
  {
    href: "https://github.com/raheemtermeh",
    aria: "GitHub",
    color: "#569CD6",
    paths:
      "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    href: "https://linkedin.com/in/raheemtermeh",
    aria: "LinkedIn",
    color: "#4EC9B0",
    paths:
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    href: "https://t.me/MmdRhimm",
    aria: "Telegram",
    color: "#CE9178",
    paths:
      "M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-8 sm:mb-10"
        >
          <p className="font-mono text-[10px] sm:text-xs text-[#569CD6]/30 mb-2">ارتباط</p>
          <h2 className="text-white font-black text-2xl sm:text-3xl md:text-4xl mb-3">
            تماس <span className="gradient-text">با من</span>
          </h2>
          <p className="text-sm sm:text-base text-[#b0b8b0] max-w-lg mx-auto">
            راه‌های ارتباطی و شبکه‌های اجتماعی
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TiltCard>
            <div className="rounded-xl p-5 sm:p-6"
              style={{ background: "rgba(6, 8, 12, 0.6)", border: "1px solid rgba(86, 156, 214, 0.05)" }}
            >
              <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                {contacts.map(c => (
                  <div key={c.label}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)" }}
                  >
                    <span className="text-base sm:text-lg shrink-0">{c.icon}</span>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs font-mono text-white/20">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} target="_blank" rel="noopener noreferrer"
                          className="text-sm sm:text-base text-white/80 hover:text-[#569CD6] transition-colors truncate block"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-white/80 truncate">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(86, 156, 214, 0.03)" }}>
                <p className="text-center text-white/20 text-xs font-mono mb-4">شبکه‌های اجتماعی</p>
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  {socials.map(s => (
                    <motion.a key={s.aria} href={s.href} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.12, y: -2 }}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{ background: `${s.color}04`, color: s.color, border: `1px solid ${s.color}06` }}
                      aria-label={s.aria}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={s.paths} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
