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
    <aside className="flex h-full flex-col border-b border-white/10 bg-white/2 p-5 sm:p-6 lg:border-b-0 lg:border-r">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-violet-500 text-base font-bold text-white shadow-lg shadow-cyan-500/20 sm:h-12 sm:w-12 sm:text-lg">
            X
          </div>

          <div>
            <h3 className="text-base font-semibold text-white sm:text-lg">
              Xai Workspace
            </h3>

            <p className="text-xs text-white/50 sm:text-sm">
              AI Intelligence Platform
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-8 flex-1 space-y-2 sm:mt-10 lg:mt-12">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`group flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all duration-300 sm:rounded-2xl sm:px-4 sm:py-3 ${item.active
                ? "border-cyan-400/30 bg-cyan-500/10 text-cyan-300 shadow-lg shadow-cyan-500/10"
                : "border-transparent text-white/60 hover:border-white/10 hover:bg-white/5 hover:text-white"
                }`}
            >
              <Icon
                size={18}
                className="transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5"
              />

              <span className="text-sm font-medium sm:text-base">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* AI Status */}
      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-violet-500/10 p-4 sm:mt-10 sm:rounded-3xl sm:p-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,.8)]" />

          <span className="text-xs font-medium text-emerald-400 sm:text-sm">
            AI Services Online
          </span>
        </div>

        <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/50 sm:text-sm">
              Insights Today
            </span>

            <span className="text-sm font-semibold text-white sm:text-base">
              2,048
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-white/50 sm:text-sm">
              Accuracy
            </span>

            <span className="text-sm font-semibold text-white sm:text-base">
              99.8%
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-white/50 sm:text-sm">
              Active Models
            </span>

            <span className="text-sm font-semibold text-white sm:text-base">
              12
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}