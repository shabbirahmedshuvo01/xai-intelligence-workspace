import { HERO_CONTENT } from "@/constants/hero";

export default function HeroActions() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500">
        {HERO_CONTENT.primaryButton}
      </button>

      <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:text-white">
        {HERO_CONTENT.secondaryButton}
      </button>
    </div>
  );
}