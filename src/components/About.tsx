"use client";

import { motion } from "framer-motion";

const personalInfo = [
  { label: "نام کامل", value: "محمد ترمه چی" },
  { label: "سن", value: "۱۹ سال" },
  { label: "تاریخ تولد", value: "۱۳۸۵/۶/۲۵" },
  { label: "وضعیت نظام وظیفه", value: "معافیت تحصیلی" },
  { label: "ایمیل", value: "m.rahimt@yahoo.com" },
  { label: "تلفن", value: "09190319486" },
];

const englishSkills = [
  { label: "خواندن", value: 80, color: "#569CD6" },
  { label: "نوشتن", value: 60, color: "#4EC9B0" },
  { label: "شنیداری", value: 60, color: "#CE9178" },
  { label: "صحبت کردن", value: 60, color: "#C586C0" },
];

const dots = [50, 35, 25, 60, 40, 30, 55, 45, 20, 65, 38, 48];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-28 px-4 overflow-hidden">
      {/* Decorative background dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {dots.map((d, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: d,
              height: d,
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              background: i % 2 === 0 ? "rgba(86,156,214,0.03)" : "rgba(78,201,176,0.03)",
            }}
            animate={{
              y: [0, -10 - (i % 15), 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-8 sm:mb-10"
        >
          <p className="font-mono text-[10px] sm:text-xs text-[#569CD6]/30 mb-2">پروفایل</p>
          <h2 className="text-white font-black text-2xl sm:text-3xl md:text-4xl mb-3">
            درباره <span className="gradient-text">من</span>
          </h2>
          <p className="text-sm sm:text-base text-[#b0b8b0] max-w-lg mx-auto">
            بیوگرافی، اطلاعات شخصی و مهارت‌های زبانی
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "rgba(6, 8, 12, 0.65)",
            border: "1px solid rgba(86,156,214,0.08)",
            backdropFilter: "blur(24px)",
            boxShadow: "0 0 60px rgba(86,156,214,0.03)",
          }}
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ padding: "1px" }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-full h-full rounded-2xl" style={{
              background: "linear-gradient(135deg, rgba(86,156,214,0.15), rgba(78,201,176,0.05), rgba(197,134,192,0.1), rgba(86,156,214,0.15))",
            }} />
          </motion.div>

          <div className="relative p-5 sm:p-8 md:p-10">
            {/* Top row: decorative initial + bio */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-8">
              {/* Large decorative initial */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 80 }}
                className="shrink-0 flex justify-center"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
                  {/* Glow rings */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{ border: "1px solid rgba(86,156,214,0.08)" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-2 rounded-xl"
                    style={{ border: "1px solid rgba(78,201,176,0.06)" }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Center letter */}
                  <div className="absolute inset-3 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, rgba(86,156,214,0.08), rgba(78,201,176,0.04))", border: "1px solid rgba(86,156,214,0.06)" }}
                  >
                    <motion.span
                      className="font-black text-4xl sm:text-5xl md:text-6xl"
                      style={{ background: "linear-gradient(135deg, #569CD6, #4EC9B0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      م
                    </motion.span>
                  </div>
                </div>
              </motion.div>

              {/* Bio text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 text-center md:text-right"
              >
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-[2px]" style={{ background: "linear-gradient(90deg, #569CD6, transparent)" }} />
                  <span className="font-mono text-[10px] sm:text-xs text-[#569CD6]/50 tracking-widest">BIOGRAPHY</span>
                </div>
                <p className="text-[#b0b8b0] text-sm sm:text-base leading-relaxed md:leading-loose">
                  محمد ترمه چی هستم، ۱۹ ساله. حدود چهار ساله که در حوزه وب فعالیت می‌کنم.
                  دو سال سابقه با هلدینگ ۵۰۴۰ و ۶ ماه با آموزش و پرورش.
                  تخصص اصلی‌ام فرانت‌اند با React و Next.js و آشنا با Golang و امنیت وب.
                </p>
              </motion.div>
            </div>

            {/* Divider with decorative dots */}
            <div className="flex items-center gap-2 mb-6">
              <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(86,156,214,0.06), transparent)" }} />
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#569CD6" }} />
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4EC9B0" }} />
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C586C0" }} />
              <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(86,156,214,0.06), transparent)" }} />
            </div>

            {/* Bottom row: Personal info + English skills */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Info */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-4 h-[2px]" style={{ background: "linear-gradient(90deg, #4EC9B0, transparent)" }} />
                  <span className="font-mono text-[10px] sm:text-xs text-[#4EC9B0]/50 tracking-widest">DETAILS</span>
                </div>
                <div className="space-y-2.5">
                  {personalInfo.map((item, i) => (
                    <motion.div key={item.label} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ delay: 0.35 + i * 0.04 }}
                      className="flex items-center gap-3 py-1"
                    >
                      <span className="font-mono text-[9px] sm:text-[10px] text-white/15 w-5 shrink-0 text-right">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-white/40 text-xs sm:text-sm w-28 shrink-0">{item.label}</span>
                      <span className="text-white/20 hidden sm:inline">/</span>
                      <span className="text-white/80 text-sm sm:text-base">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* English Skills */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-4 h-[2px]" style={{ background: "linear-gradient(90deg, #C586C0, transparent)" }} />
                  <span className="font-mono text-[10px] sm:text-xs text-[#C586C0]/50 tracking-widest">LANGUAGE</span>
                </div>
                <div className="space-y-4">
                  {englishSkills.map((skill, i) => (
                    <div key={skill.label}>
                      <div className="flex justify-between font-mono text-xs sm:text-sm mb-1.5">
                        <span className="text-[#b0b8b0]">{skill.label}</span>
                        <span className="font-bold" style={{ color: skill.color }}>{skill.value}%</span>
                      </div>
                      <div className="h-2.5 rounded-full overflow-hidden bg-white/[0.02] relative">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.value}%` }} viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full relative"
                          style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}66)`, boxShadow: `0 0 10px ${skill.color}22` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
