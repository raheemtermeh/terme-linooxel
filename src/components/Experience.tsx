"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const experiences = [
  
  {
    title: "Front-End Developer",
    company: "هلدینگ ۵۰۴۰",
    period: "شهریور ۱۴۰۰ - آذر ۱۴۰۲",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "FullStack Developer",
    company: "آموزش و پرورش",
    period: "دی ۱۴۰۳ - خرداد ۱۴۰۴",
    tags: ["React", "PureJS", "couchDB"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20 lg:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-8 sm:mb-10"
        >
          <p className="font-mono text-[10px] sm:text-xs text-[#569CD6]/30 mb-2">سابقه کار</p>
          <h2 className="text-white font-black text-2xl sm:text-3xl md:text-4xl mb-3">
            سوابق <span className="gradient-text">شغلی</span>
          </h2>
          <p className="text-sm sm:text-base text-[#b0b8b0] max-w-lg mx-auto">
            شرکت‌ها و پروژه‌هایی که باهاشون کار کردم
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute right-[19px] sm:right-[23px] md:right-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#569CD6]/20 via-[#4EC9B0]/10 to-transparent" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col md:flex-row items-start gap-4"
              >
                <div className="hidden md:flex md:w-1/2 justify-end">
                  {i % 2 === 0 && <ExpCard exp={exp} index={i} />}
                </div>

                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.15, type: "spring", stiffness: 200 }}
                  className="relative z-10 flex items-center justify-center w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] rounded-full shrink-0 mt-1"
                  style={{ background: "#0a0a0a", border: "2px solid rgba(86,156,214,0.15)" }}
                >
                  <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ background: "#569CD6", boxShadow: "0 0 6px rgba(86,156,214,0.3)" }}
                  />
                </motion.div>

                <div className="md:w-1/2 w-full">
                  {i % 2 !== 0 && <div className="hidden md:block"><ExpCard exp={exp} index={i} /></div>}
                  <div className="md:hidden"><ExpCard exp={exp} index={i} /></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }} className="mt-14 sm:mt-20"
        >
          <div className="text-center mb-6">
            <p className="font-mono text-[10px] sm:text-xs text-[#CE9178]/30 mb-1">تحصیلات</p>
            <h3 className="text-white/90 font-bold text-xl sm:text-2xl">تحصیلات <span className="text-[#CE9178]">دانشگاهی</span></h3>
          </div>
          <TiltCard glowColor="#CE9178">
            <div className="rounded-xl p-5 sm:p-6 max-w-xl mx-auto"
              style={{ background: "rgba(6, 8, 12, 0.6)", border: "1px solid rgba(206, 145, 120, 0.06)" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: "rgba(206,145,120,0.08)" }}>
                  🎓
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-white/90 mb-1">کارشناسی مهندسی کامپیوتر</h4>
                  <p className="text-sm text-[#569CD6]/80">دانشگاه آزاد اسلامی واحد یادگار امام (تهران)</p>
                  <p className="text-xs text-white/30 mt-1">۱۴۰۳ - اکنون</p>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}

function ExpCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  return (
    <TiltCard glowColor="#569CD6">
      <div className="rounded-xl p-5 transition-all duration-500 group"
        style={{ background: "rgba(6, 8, 12, 0.6)", border: "1px solid rgba(86, 156, 214, 0.04)" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono" style={{ background: "rgba(86,156,214,0.08)", color: "#569CD6" }}>
            {index + 1}
          </div>
          <h3 className="text-sm sm:text-base font-semibold text-white/90 transition-colors group-hover:text-[#569CD6]">{exp.title}</h3>
        </div>
        <p className="text-xs sm:text-sm text-[#4EC9B0]/80 mb-1">{exp.company}</p>
        <p className="text-[10px] sm:text-xs text-white/30 mb-3 font-mono">{exp.period}</p>
        <div className="flex flex-wrap gap-1.5">
          {exp.tags.map(t => (
            <span key={t} className="text-[10px] sm:text-xs px-2.5 py-0.5 rounded font-mono"
              style={{ background: "rgba(86, 156, 214, 0.04)", color: "#569CD6" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}
