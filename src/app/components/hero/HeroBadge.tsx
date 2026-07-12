import { HERO_CONTENT } from "@/constants/hero";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

      <span className="text-sm font-medium tracking-wide text-slate-300">
        {HERO_CONTENT.badge}
      </span>
    </div>
  );
}