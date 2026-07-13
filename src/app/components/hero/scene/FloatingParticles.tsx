"use client";

import { Instance, Instances } from "@react-three/drei";
import { useMemo } from "react";

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
    ],
    color: Math.random() > 0.5 ? "#22D3EE" : "#A855F7",
  }));
}

export default function FloatingParticles() {
  const particles = useMemo(
    () => generateParticles(120),
    []
  );

  return (
    <Instances limit={120}>
      <sphereGeometry args={[0.025, 8, 8]} />

      <meshBasicMaterial />

      {particles.map((particle, index) => (
        <Instance
          key={index}
          position={particle.position}
          color={particle.color}
        />
      ))}
    </Instances>
  );
}