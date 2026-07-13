"use client";

import { Instance, Instances } from "@react-three/drei";
import { useMemo } from "react";

type Particle = {
  position: [number, number, number];
  color: string;
};

const PARTICLE_COUNT = 72;

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
    () => generateParticles(PARTICLE_COUNT),
    []
  );

  return (
    <Instances limit={PARTICLE_COUNT}>
      <sphereGeometry args={[0.02, 6, 6]} />

      <meshBasicMaterial toneMapped={false} />

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