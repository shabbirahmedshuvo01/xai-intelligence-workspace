"use client";

import {
  Environment,
  OrbitControls
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Suspense } from "react";
import AIOrb from "./AIOrb";
import DataRings from "./DataRings";
import FloatingNodes from "./FloatingNodes";

export default function SignatureCanvas() {
  return (
    <div className="h-125 w-full bg-[#050816] lg:h-155">
      <Canvas
        style={{
          background: "#050816",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#050816", 1);
        }}
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
      >
        <ambientLight intensity={0.8} />

        <pointLight
          position={[4, 3, 3]}
          intensity={20}
          color="#22D3EE"
        />

        <pointLight
          position={[-4, -2, -3]}
          intensity={18}
          color="#A855F7"
        />

        <spotLight
          position={[0, 8, 6]}
          intensity={22}
          angle={0.35}
          penumbra={1}
        />

        <Suspense fallback={null}>
          <Environment preset="sunset" />
        </Suspense>

        <AIOrb />

        <DataRings />

        <FloatingNodes />

        <OrbitControls
          autoRotate
          autoRotateSpeed={0.35}
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}