"use client";

import {
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import AIOrb from "./AIOrb";
import DataRings from "./DataRings";
import FloatingNodes from "./FloatingNodes";

export default function SignatureCanvas() {
  return (
    <div className="h-125 w-full lg:h-155">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
      >
        {/* Ambient */}
        <ambientLight intensity={0.9} />

        {/* Cyan Light */}
        <pointLight
          position={[4, 3, 3]}
          intensity={35}
          color="#22D3EE"
        />

        {/* Purple Light */}
        <pointLight
          position={[-4, -2, -3]}
          intensity={28}
          color="#A855F7"
        />

        {/* Top Light */}
        <spotLight
          position={[0, 8, 6]}
          intensity={40}
          angle={0.35}
          penumbra={1}
          color="#ffffff"
        />

        <Environment preset="city" />

        <AIOrb />

        <DataRings />

        <FloatingNodes />

        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}