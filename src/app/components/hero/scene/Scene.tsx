"use client";

import { OrbitControls } from "@react-three/drei";
import DataSphere from "./DataSphere";
import FloatingParticles from "./FloatingParticles";
import Lights from "./Lights";
import NodeNetwork from "./NodeNetwork";

export default function Scene() {
  return (
    <>
      <Lights />

      <FloatingParticles />

      <NodeNetwork />

      <DataSphere />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}