"use client";

import { useState } from "react";

type Particle = {
  position: [number, number, number];
  color: string;
};

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    position: [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8,
    ] as [number, number, number],
    color: Math.random() > 0.5 ? "#22D3EE" : "#A855F7",
  }));
}

export default function FloatingParticles() {
  // Lazy initializer: runs exactly once, on mount, not on every render.
  const [particles] = useState(() => generateParticles(120));

  return (
    <>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position}>
          <sphereGeometry args={[0.025]} />
          <meshBasicMaterial color={particle.color} />
        </mesh>
      ))}
    </>
  );
}