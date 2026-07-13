"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

type NodeData = {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
};

const COLORS = [
  "#22D3EE",
  "#60A5FA",
  "#A855F7",
];

function generateNodes(count: number): NodeData[] {
  return Array.from({ length: count }, () => ({
    position: [
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
    ] as [number, number, number],

    color: COLORS[Math.floor(Math.random() * COLORS.length)],

    size: 0.015 + Math.random() * 0.03,

    speed: 0.5 + Math.random() * 1.5,
  }));
}

export default function FloatingNodes() {
  const groupRef = useRef<THREE.Group>(null);

  // Runs ONLY once
  const [nodes] = useState(() => generateNodes(90));

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const t = clock.elapsedTime;

    groupRef.current.children.forEach((child, index) => {
      const node = nodes[index];

      child.position.y =
        node.position[1] +
        Math.sin(t * node.speed + index) * 0.08;

      child.position.x =
        node.position[0] +
        Math.cos(t * node.speed + index) * 0.05;

      child.rotation.y += 0.01;
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <mesh
          key={index}
          position={node.position}
        >
          <sphereGeometry args={[node.size, 12, 12]} />

          <meshBasicMaterial
            color={node.color}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}