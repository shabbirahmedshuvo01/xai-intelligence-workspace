"use client";

import {
  BarChart3,
  Bot,
  BrainCircuit,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Analytics",
    icon: BarChart3,
  },
  {
    label: "Knowledge",
    icon: BrainCircuit,
  },
  {
    label: "Automation",
    icon: Bot,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
          Workspace
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          Xai Dashboard
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          AI Intelligence Workspace
        </p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-300 ${item.active
                ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/20"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
            >
              <Icon size={20} />

              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
        <p className="text-xs uppercase tracking-widest text-cyan-400">
          AI Status
        </p>

        <h4 className="mt-2 text-lg font-semibold text-white">
          Online
        </h4>

        <p className="mt-1 text-sm text-gray-400">
          All intelligence services are running normally.
        </p>
      </div>
    </aside>
  );
}