"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./scene/Scene";

export default function HeroCanvas() {
  return (
    <div className="relative hidden h-150 w-full md:block">
      <Canvas
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{
          position: [0, 0, 5],
          fov: 50,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}