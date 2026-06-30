"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const data = [
  {
    title: "Frontend", color: "#569CD6",
    items: [
      { name: "React", v: 85 }, { name: "Next.js", v: 75 },
      { name: "JavaScript", v: 80 }, { name: "TypeScript", v: 70 },
      { name: "Tailwind", v: 80 },
    ],
  },
  {
    title: "Backend", color: "#CE9178",
    items: [
      { name: "Node.js", v: 40 }, { name: "REST API", v: 60 },
      { name: "Golang", v: 60 }, { name: "Gin", v: 40 }, { name: "Fiber", v: 40 },
    ],
  },
  {
    title: "Security", color: "#4EC9B0",
    items: [
      { name: "Pentest", v: 70 }, { name: "API Security", v: 60 },
      { name: "Network+", v: 50 }, { name: "Security+", v: 50 }, { name: "CEH", v: 40 },
    ],
  },
  {
    title: "Tools", color: "#C586C0",
    items: [
      { name: "Git", v: 80 }, { name: "Docker", v: 30 },
      { name: "Linux", v: 70 }, { name: "Figma", v: 50 }, { name: "MongoDB", v: 35 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-20 lg:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-8 sm:mb-10"
        >
          <p className="font-mono text-[10px] sm:text-xs text-[#569CD6]/30 mb-2">توانمندی‌ها</p>
          <h2 className="text-white font-black text-2xl sm:text-3xl md:text-4xl mb-3">
            مهارت‌های <span className="gradient-text">فنی</span>
          </h2>
          <p className="text-sm sm:text-base text-[#b0b8b0] max-w-lg mx-auto">
            فریمورک‌ها، زبان‌ها و ابزارهایی که بلدم
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {data.map((cat, ci) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: ci * 0.06 }}
            >
              <TiltCard glare={false}>
                <div className="rounded-xl p-4 sm:p-5 h-full transition-all duration-500"
                  style={{ background: "rgba(6, 8, 12, 0.6)", border: `1px solid ${cat.color}06` }}
                >
                  <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.02)" }}>
                    <h3 className="font-semibold text-sm sm:text-base" style={{ color: cat.color }}>{cat.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {cat.items.map((sk, si) => (
                      <div key={sk.name}>
                        <div className="flex justify-between font-mono text-xs sm:text-sm mb-1">
                          <span className="text-[#b0b8c0] truncate ml-1">{sk.name}</span>
                          <span className="font-bold shrink-0 text-xs sm:text-sm" style={{ color: cat.color }}>{sk.v}%</span>
                        </div>
                        <div className="h-2 rounded-full overflow-hidden bg-white/[0.02]">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: `${sk.v}%` }} viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 + si * 0.04, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full rounded-full relative overflow-hidden"
                            style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)`, boxShadow: `0 0 8px ${cat.color}22` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
