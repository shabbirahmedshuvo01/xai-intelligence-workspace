"use client";

import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function AIOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += delta * 0.25;
    meshRef.current.rotation.x += delta * 0.08;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.4}
      floatIntensity={0.8}
    >
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.05, 32]} />

        <MeshTransmissionMaterial
          thickness={0.8}
          roughness={0}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.08}
          anisotropy={0.2}
          distortion={0.18}
          distortionScale={0.35}
          temporalDistortion={0.12}
          backside
          samples={12}
          resolution={512}
          color="#7C3AED"
        />
      </mesh>

      <mesh scale={1.18}>
        <icosahedronGeometry args={[1.05, 2]} />

        <meshBasicMaterial
          color="#22D3EE"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>
    </Float>
  );
}