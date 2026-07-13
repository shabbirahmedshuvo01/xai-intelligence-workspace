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

const NODE_COUNT = 50;

function generateNodes(count: number): NodeData[] {
  return Array.from({ length: count }, () => ({
    position: [
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
    ] as [number, number, number],

    color: COLORS[Math.floor(Math.random() * COLORS.length)],

    size: 0.015 + Math.random() * 0.02,

    speed: 0.5 + Math.random(),
  }));
}

export default function FloatingNodes() {
  const groupRef = useRef<THREE.Group>(null);

  const [nodes] = useState(() => generateNodes(NODE_COUNT));

  useFrame(({ clock }) => {
    const group = groupRef.current;
    if (!group) return;

    const t = clock.elapsedTime;
    const children = group.children;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const node = nodes[i];

      child.position.y =
        node.position[1] +
        Math.sin(t * node.speed + i) * 0.06;

      child.position.x =
        node.position[0] +
        Math.cos(t * node.speed + i) * 0.04;

      child.rotation.y += 0.006;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <mesh
          key={index}
          position={node.position}
        >
          <sphereGeometry args={[node.size, 8, 8]} />

          <meshBasicMaterial
            color={node.color}
            transparent
            opacity={0.75}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}