export default function NavActions() {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <button className="rounded-xl border border-slate-700 px-5 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-slate-500 hover:text-white">
        Sign In
      </button>

      <button className="rounded-xl bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500">
        Explore Workspace
      </button>
    </div>
  );
}