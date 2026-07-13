"use client";

import dynamic from "next/dynamic";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

const HeroCanvas = dynamic(
  () => import("./HeroCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="hidden h-150 w-full animate-pulse rounded-3xl bg-white/5 md:block" />
    ),
  }
);

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      <HeroBackground />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <HeroContent />

        <HeroCanvas />
      </div>
    </section>
  );
}