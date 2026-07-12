"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Props = {
  position: [number, number, number];
  color: string;
};

export default function Particle({ position, color }: Props) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.position.y =
      position[1] + Math.sin(clock.elapsedTime + position[0]) * 0.08;

    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.03]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}