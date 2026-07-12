"use client";

import { Line } from "@react-three/drei";

const nodes: [number, number, number][] = [
  [-1.2, 0.8, -0.5],
  [-0.5, 1.3, 0],
  [0.8, 1, 0.3],
  [1.4, 0.2, 0],
  [1, -0.9, 0.4],
  [-0.3, -1.3, -0.2],
  [-1.3, -0.4, 0.1],
  [0, 0, 0],
];

const connections = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 0],
  [0, 7],
  [2, 7],
  [4, 7],
  [6, 7],
];

export default function NodeNetwork() {
  return (
    <>
      {connections.map(([a, b], index) => (
        <Line
          key={index}
          points={[nodes[a], nodes[b]]}
          color="#7DD3FC"
          lineWidth={1}
          transparent
          opacity={0.35}
        />
      ))}
    </>
  );
}