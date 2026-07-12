"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./scene/Scene";

export default function HeroCanvas() {
  return (
    <div className="relative h-150 w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
}