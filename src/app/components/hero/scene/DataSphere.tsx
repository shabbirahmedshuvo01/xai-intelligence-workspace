"use client";

import { Float } from "@react-three/drei";

export default function DataSphere() {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={1.5}
    >
      <mesh>
        <icosahedronGeometry args={[1.2, 2]} />

        <meshStandardMaterial
          color="#6D28D9"
          emissive="#22D3EE"
          emissiveIntensity={1.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}