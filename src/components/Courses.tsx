"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const colors = ["#569CD6", "#4EC9B0", "#CE9178", "#C586C0", "#DCDCAA"];

const courses = [
  { title: "Reactjs", provider: "مجتمع فنی تهران", status: "Completed" },
  { title: "NextJS", provider: "Self study", status: "Completed" },
  { title: "Golang", provider: "7Learn", status: "Completed" },
  { title: "Web Pentest", provider: "voorivex academy", status: "completed" },
  { title: "api security", provider: "self study", status: "in progress" },
  {
    title: "Linux",
    provider: "self study",
    status: "in progress",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="relative py-16 sm:py-20 lg:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-8 sm:mb-10"
        >
          <p className="font-mono text-[10px] sm:text-xs text-[#569CD6]/30 mb-2">دوره‌ها</p>
          <h2 className="text-white font-black text-2xl sm:text-3xl md:text-4xl mb-3">
            دوره‌ها و <span className="gradient-text">گواهینامه‌ها</span>
          </h2>
          <p className="text-sm sm:text-base text-[#b0b8b0] max-w-lg mx-auto">
            دوره‌های تکمیل شده و گواهینامه‌های معتبر
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {courses.map((c, i) => {
            const clr = colors[i % colors.length];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.3, delay: (i % 12) * 0.03 }} whileHover={{ y: -3 }}
              >
                <TiltCard glare={false}>
                  <div className="rounded-xl p-4 sm:p-5 h-full"
                    style={{ background: "rgba(6, 8, 12, 0.6)", border: `1px solid ${clr}06` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="font-mono text-[9px] sm:text-[10px] text-white/10 shrink-0 ml-2">
                        [{String(i + 1).padStart(2, "0")}]
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded"
                        style={{
                          background: c.status === "Completed" ? "rgba(78,201,176,0.08)" : "rgba(206,145,120,0.08)",
                          color: c.status === "Completed" ? "#4EC9B0" : "#CE9178",
                        }}
                      >
                        {c.status === "Completed" ? "تکمیل شده" : "در حال گذراندن"}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-white/90 mb-2" style={{ color: clr }}>{c.title}</h3>
                    <p className="text-xs sm:text-sm text-white/40 font-mono">{c.provider}</p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
