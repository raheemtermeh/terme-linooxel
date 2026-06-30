"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const roles = ["Frontend Developer", "React & Next.js Specialist", "Web Security Enthusiast"];

const techBadges = [
  { label: "React", color: "#61DAFB" },
  { label: "Next.js", color: "#00D4FF" },
  { label: "Golang", color: "#6A9955" },
  { label: "Security", color: "#CE9178" },
  { label: "TypeScript", color: "#569CD6" },
];

type Phase = "boot" | "typing" | "exec" | "output";

export default function Hero() {
  const [phase, setPhase] = useState<Phase>("boot");
  const [typedCmd, setTypedCmd] = useState("");
  const [bootStep, setBootStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [displayRole, setDisplayRole] = useState("");
  const roleIdxRef = useRef(0);
  const deletingRef = useRef(false);

  const command = "./profile --info";
  const bootLines = [
    "Windows PowerShell",
    "Copyright (C) Microsoft Corporation. All rights reserved.",
    "",
  ];

  // Boot sequence
  useEffect(() => {
    if (bootStep < bootLines.length) {
      const t = setTimeout(() => setBootStep(s => s + 1), 300);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase("typing"), 200);
    return () => clearTimeout(t);
  }, [bootStep]);

  // Typing command
  useEffect(() => {
    if (phase !== "typing") return;
    if (typedCmd.length < command.length) {
      const t = setTimeout(() => setTypedCmd(command.slice(0, typedCmd.length + 1)), 50);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase("exec"), 400);
    return () => clearTimeout(t);
  }, [phase, typedCmd]);

  // Exec / loading bar
  useEffect(() => {
    if (phase !== "exec") return;
    if (progress < 100) {
      const t = setTimeout(() => setProgress(p => Math.min(p + Math.random() * 15 + 5, 100)), 80);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase("output"), 300);
    return () => clearTimeout(t);
  }, [phase, progress]);

  // Role typing in output
  useEffect(() => {
    if (phase !== "output") return;
    const current = roles[roleIdxRef.current];
    let timer: ReturnType<typeof setTimeout>;
    if (!deletingRef.current) {
      if (displayRole.length < current.length)
        timer = setTimeout(() => setDisplayRole(current.slice(0, displayRole.length + 1)), 60);
      else
        timer = setTimeout(() => { deletingRef.current = true; }, 2000);
    } else {
      if (displayRole.length > 0)
        timer = setTimeout(() => setDisplayRole(current.slice(0, displayRole.length - 1)), 25);
      else {
        deletingRef.current = false;
        roleIdxRef.current = (roleIdxRef.current + 1) % roles.length;
        timer = setTimeout(() => setDisplayRole(roles[roleIdxRef.current].slice(0, 1)), 80);
      }
    }
    return () => clearTimeout(timer);
  }, [phase, displayRole]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 sm:pt-24">
      <div className="relative w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl overflow-hidden"
          style={{ background: "rgba(6, 8, 12, 0.75)", border: "1px solid rgba(86,156,214,0.08)", backdropFilter: "blur(20px)", boxShadow: "0 0 40px rgba(0,0,0,0.3)" }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 select-none" style={{ background: "rgba(0,0,0,0.35)", borderBottom: "1px solid rgba(86,156,214,0.06)" }}>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-[10px] sm:text-xs font-mono text-white/10 tracking-wide">✦ term — profile.ps1 — 80×24</span>
            </div>
            <div className="w-12" />
          </div>

          {/* Terminal body */}
          <div className="p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm leading-relaxed" dir="ltr">
            {/* Boot messages */}
            {bootStep < bootLines.length && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-0.5">
                {bootLines.slice(0, bootStep).map((line, i) => (
                  <div key={i} className={`text-white/20 ${i === 1 ? "text-[#6A9955]" : ""}`}>{line}</div>
                ))}
              </motion.div>
            )}

            {/* Prompt + command typing */}
            {(phase === "typing" || phase === "exec") && bootStep >= bootLines.length && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-baseline gap-2 flex-wrap">
                <span className="text-[#569CD6]/40 text-[10px] sm:text-xs shrink-0">✦ ~ ❯</span>
                <span className="text-[#DCDCAA]">{typedCmd}</span>
                {phase === "typing" && typedCmd.length < command.length && (
                  <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="text-white/30">▊</motion.span>
                )}
              </motion.div>
            )}

            {/* Loading / progress bar */}
            {phase === "exec" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 space-y-2">
                <div className="text-[#6A9955] text-[10px] sm:text-xs">در حال پردازش...</div>
                <div className="h-1.5 rounded-full overflow-hidden bg-white/[0.02] max-w-xs">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ width: `${progress}%`, background: "linear-gradient(90deg, #569CD6, #4EC9B0)", boxShadow: "0 0 8px rgba(86,156,214,0.2)" }}
                  />
                </div>
              </motion.div>
            )}

            {/* Output: profile info */}
            {phase === "output" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <div className="text-[#4EC9B0] text-[10px] sm:text-xs mb-3">✔ profile loaded successfully</div>

                {/* Property list */}
                <div className="space-y-1.5 sm:space-y-2 mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#569CD6] text-[10px] sm:text-xs shrink-0 w-24">Name</span>
                    <span className="text-white/30">:</span>
                    <span className="text-white text-base sm:text-lg md:text-xl font-bold">محمد ترمه چی</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#569CD6] text-[10px] sm:text-xs shrink-0 w-24">Role</span>
                    <span className="text-white/30">:</span>
                    <span className="text-[#4EC9B0]">{displayRole}</span>
                    <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="text-[#4EC9B0]">▊</motion.span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#569CD6] text-[10px] sm:text-xs shrink-0 w-24">Age</span>
                    <span className="text-white/30">:</span>
                    <span className="text-[#CE9178]">19</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#569CD6] text-[10px] sm:text-xs shrink-0 w-24">Experience</span>
                    <span className="text-white/30">:</span>
                    <span className="text-[#CE9178]">3+ years</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#569CD6] text-[10px] sm:text-xs shrink-0 w-24">Location</span>
                    <span className="text-white/30">:</span>
                    <span className="text-[#4EC9B0]">Tehran, Iran</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#569CD6] text-[10px] sm:text-xs shrink-0 w-24">Tech Stack</span>
                    <span className="text-white/30">:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {techBadges.map(b => (
                        <span key={b.label} className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded font-mono"
                          style={{ background: `${b.color}10`, color: b.color, border: `1px solid ${b.color}15` }}
                        >
                          {b.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-4 py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                  {[
                    { label: "AGE", value: "19", color: "#569CD6" },
                    { label: "EXP", value: "3+", color: "#4EC9B0" },
                    { label: "PROJECTS", value: "10+", color: "#CE9178" },
                  ].map((stat, i) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 150 }}
                      className="flex items-baseline gap-1.5"
                    >
                      <span className="font-black text-lg sm:text-xl md:text-2xl font-mono" style={{ color: stat.color }}>{stat.value}</span>
                      <span className="text-[8px] sm:text-[10px] font-mono tracking-wider text-white/20">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap items-center gap-3">
                  <a href="#projects"
                    className="group relative px-5 py-2.5 rounded-lg font-mono text-xs sm:text-sm overflow-hidden transition-all duration-300 hover:scale-105"
                    style={{ border: "1px solid rgba(86,156,214,0.15)", color: "#569CD6", background: "rgba(86,156,214,0.03)" }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="text-white/15 text-[8px] sm:text-[10px]">&gt;</span>
                      مشاهده پروژه‌ها
                    </span>
                  </a>
                  <a href="#contact"
                    className="group relative px-5 py-2.5 rounded-lg font-mono text-xs sm:text-sm overflow-hidden transition-all duration-300 hover:scale-105"
                    style={{ border: "1px solid rgba(78,201,176,0.12)", color: "#4EC9B0", background: "rgba(78,201,176,0.03)" }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="text-white/15 text-[8px] sm:text-[10px]">&gt;</span>
                      تماس با من
                    </span>
                  </a>
                </div>

                {/* Bottom cursor */}
                <div className="mt-4">
                  <span className="text-[#569CD6]/30 text-[10px] sm:text-xs">✦ ~ ❯</span>
                  <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="text-white/20 ml-1">▊</motion.span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Scroll hint */}
        {phase === "output" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-4 text-center"
          >
            <motion.span animate={{ y: [0, 5, 0], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-white/10 inline-block"
            >
              ▼ ادامه ▼
            </motion.span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
