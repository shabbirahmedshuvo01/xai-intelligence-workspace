"use client";

import {
  Bot,
  BrainCircuit,
  Database,
  TrendingUp,
} from "lucide-react";

const metrics = [
  {
    title: "Total Sources",
    value: "284",
    growth: "+18%",
    description: "Connected business data sources",
    icon: Database,
  },
  {
    title: "AI Insights",
    value: "1,209",
    growth: "+32%",
    description: "Insights generated this week",
    icon: BrainCircuit,
  },
  {
    title: "Automations",
    value: "36",
    growth: "+8%",
    description: "Active AI automation workflows",
    icon: Bot,
  },
  {
    title: "Efficiency",
    value: "94%",
    growth: "+5%",
    description: "Average processing performance",
    icon: TrendingUp,
  },
];

export default function Metrics() {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;

        return (
          <div
            key={metric.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/8 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)] lg:p-6 max-w-75 md:max-w-full"
          >
            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Header */}
            <div className="relative flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 lg:h-12 lg:w-12">
                <Icon size={20} />
              </div>

              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                {metric.growth}
              </span>
            </div>

            {/* Content */}
            <div className="relative mt-6">
              <p className="text-sm text-white/60">
                {metric.title}
              </p>

              <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {metric.value}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                {metric.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}