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
          thickness={0.4}
          roughness={0.08}
          transmission={0.95}
          ior={1.25}
          chromaticAberration={0.015}
          anisotropy={0}
          distortion={0.05}
          distortionScale={0.08}
          temporalDistortion={0.02}
          backside={false}
          samples={4}
          resolution={128}
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