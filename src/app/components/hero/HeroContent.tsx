import { HERO_CONTENT } from "@/constants/hero";
import HeroActions from "./HeroActions";
import HeroBadge from "./HeroBadge";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <HeroBadge />

      <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white lg:text-7xl">
        {HERO_CONTENT.title}
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
        {HERO_CONTENT.description}
      </p>

      <HeroActions />

      <div className="mt-12">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-300">
          Trusted by modern teams
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-8 text-slate-300">
          <span>OpenAI</span>
          <span>Stripe</span>
          <span>Vercel</span>
          <span>Notion</span>
        </div>
      </div>
    </div>
  );
}