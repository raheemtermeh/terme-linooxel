"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

function SoftGlow({ position }: { position: [number, number, number] }) {
  const ref = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * 0.2;
    ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.3;
    ref.current.position.x = position[0] + Math.cos(t * 0.7 + position[1]) * 0.3;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.6, 16, 16]} />
      <meshBasicMaterial transparent opacity={0.04} color="#00FF88" />
    </mesh>
  );
}

export default function ThreeBackground() {
  const dots = useMemo(() =>
    Array.from({ length: 20 }, () => [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 12,
      -5 - Math.random() * 10,
    ] as [number, number, number]),
  []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" style={{ opacity: 0.3 }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight />
        {dots.map((pos, i) => (
          <SoftGlow key={i} position={pos} />
        ))}
      </Canvas>
    </div>
  );
}
