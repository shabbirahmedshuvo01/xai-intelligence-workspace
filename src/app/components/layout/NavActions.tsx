export default function NavActions() {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <button className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-white/70 transition-all hover:border-cyan-400/30 hover:bg-white/5 hover:text-white">
        Sign In
      </button>

      <button className="rounded-xl bg-linear-to-r from-cyan-400 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
        Explore Workspace
      </button>
    </div>
  );
}