"use client";

import { ArrowUpRight, TrendingUp } from "lucide-react";

type Props = {
  category: string;
  title: string;
  description: string;
  value: string;
  trend: string;
};

export default function InsightCard({
  category,
  title,
  description,
  value,
  trend,
}: Props) {
  return (
    <article className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/3 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/5 hover:shadow-[0_0_45px_rgba(34,211,238,0.12)]">
      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Category */}
      <div className="relative flex items-center justify-between">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
          {category}
        </span>

        <ArrowUpRight
          size={18}
          className="text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
        />
      </div>

      {/* Title */}
      <h3 className="relative mt-6 text-2xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="relative mt-4 leading-7 text-white/60">
        {description}
      </p>

      {/* Bottom */}
      <div className="relative mt-8 flex items-end justify-between border-t border-white/10 pt-6">
        <div>
          <p className="text-sm text-white/40">
            AI Confidence
          </p>

          <h4 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h4>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-400">
          <TrendingUp size={16} />
          {trend}
        </div>
      </div>
    </article>
  );
}