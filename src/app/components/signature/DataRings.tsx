"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Ring({
  rotation,
  speed,
  color,
  radius,
}: {
  rotation: [number, number, number];
  speed: number;
  color: string;
  radius: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * (speed * 0.7);
    ref.current.rotation.z += delta * (speed * 0.4);
  });

  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, 0.025, 16, 180]} />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.45}
      />
    </mesh>
  );
}

export default function DataRings() {
  return (
    <group>
      <Ring
        radius={1.45}
        rotation={[0, 0, 0]}
        speed={0.25}
        color="#22D3EE"
      />

      <Ring
        radius={1.7}
        rotation={[Math.PI / 2, 0.4, 0]}
        speed={0.4}
        color="#A855F7"
      />

      <Ring
        radius={1.95}
        rotation={[0.8, Math.PI / 2, 0.3]}
        speed={0.15}
        color="#60A5FA"
      />
    </group>
  );
}