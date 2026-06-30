"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const projects = [
  {
    title: "کرابو",
    desc: "گالری و فروشگاه طلا کرابو",
    link: "http://krabo.gold",
    color: "#569CD6",
    stars: "12",
    forks: "3",
  },
  {
    title: "سامانه پدافند",
    desc: "سامانه پدافند غیر عامل",
    link: "https://padafand.edus.ir/",
    color: "#4EC9B0",
    stars: "8",
    forks: "2",
  },
  {
    title: "پنل",
    desc: "پنل مدیریت هلدینگ ۵۰۴۰",
    link: "https://panel.5040.me/",
    color: "#CE9178",
    stars: "5",
    forks: "1",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-8 sm:mb-10"
        >
          <p className="font-mono text-[10px] sm:text-xs text-[#569CD6]/30 mb-2">نمونه‌کارها</p>
          <h2 className="text-white font-black text-2xl sm:text-3xl md:text-4xl mb-3">
            پروژه‌های <span className="gradient-text">من</span>
          </h2>
          <p className="text-sm sm:text-base text-[#b0b8b0] max-w-lg mx-auto">
            نمونه‌کارها و پروژه‌های انجام شده
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -5 }}
            >
              <TiltCard glowColor={p.color}>
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="block rounded-xl p-5 transition-all duration-500 group h-full"
                  style={{ background: "rgba(6, 8, 12, 0.6)", border: `1px solid ${p.color}06` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full shrink-0" style={{ background: p.color }} />
                    <h3 className="text-sm sm:text-base font-semibold text-white/90 transition-colors group-hover:text-[#569CD6]">{p.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#b0b8c0] mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex items-center gap-3 text-[10px] sm:text-xs font-mono">
                    <span className="flex items-center gap-1 text-white/20">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      {p.stars}
                    </span>
                    <span className="flex items-center gap-1 text-white/20">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      {p.forks}
                    </span>
                    <span className="flex items-center gap-1 text-white/20 mr-auto">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      مشاهده
                    </span>
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
