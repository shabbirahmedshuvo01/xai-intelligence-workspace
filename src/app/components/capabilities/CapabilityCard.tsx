"use client";

import { ArrowUpRight } from "lucide-react";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function CapabilityCard({
  icon,
  title,
  description,
}: Props) {
  return (
    <article className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/3 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/5 hover:shadow-[0_0_50px_rgba(34,211,238,.12)]">
      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-300">
        {icon}
      </div>

      {/* Content */}
      <div className="relative mt-8">
        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-white/60">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="relative mt-8 flex items-center gap-2 font-medium text-cyan-300 transition-transform duration-300 group-hover:translate-x-1">
        Learn More

        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </article>
  );
}