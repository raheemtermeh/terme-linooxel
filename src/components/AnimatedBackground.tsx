"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      {[
        { size: 500, x: "10%", y: "-10%", color: "rgba(86,156,214,0.05)", duration: 25 },
        { size: 400, x: "70%", y: "20%", color: "rgba(78,201,176,0.04)", duration: 30 },
        { size: 350, x: "40%", y: "60%", color: "rgba(197,134,192,0.04)", duration: 35 },
        { size: 300, x: "85%", y: "70%", color: "rgba(255,225,53,0.03)", duration: 28 },
        { size: 450, x: "20%", y: "80%", color: "rgba(86,156,214,0.03)", duration: 22 },
      ].map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            background: `radial-gradient(circle, ${blob.color}, transparent 70%)`,
            animation: `blob-drift-${i} ${blob.duration}s ease-in-out infinite alternate`,
          }}
        />
      ))}
      <style>{`
        ${[0,1,2,3,4].map(i => `
          @keyframes blob-drift-${i} {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(${30 + i * 15}px, ${-20 + i * 10}px) scale(${1.1 + i * 0.05}); }
          }
        `).join('\n')}
      `}</style>
    </div>
  );
}
