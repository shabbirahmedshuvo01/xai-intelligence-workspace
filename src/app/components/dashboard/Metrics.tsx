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
    change: "+18%",
    icon: Database,
  },
  {
    title: "AI Insights",
    value: "1,209",
    change: "+32%",
    icon: BrainCircuit,
  },
  {
    title: "Automations",
    value: "36",
    change: "+8%",
    icon: Bot,
  },
  {
    title: "Efficiency",
    value: "94%",
    change: "+5%",
    icon: TrendingUp,
  },
];

export default function Metrics() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;

        return (
          <div
            key={metric.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Icon size={24} />
              </div>

              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                {metric.change}
              </span>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-400">
                {metric.title}
              </p>

              <h3 className="mt-2 text-4xl font-bold text-white">
                {metric.value}
              </h3>
            </div>
          </div>
        );
      })}
    </section>
  );
}