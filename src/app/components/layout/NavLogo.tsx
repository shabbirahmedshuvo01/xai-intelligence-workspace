import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-violet-500 font-bold text-white shadow-lg shadow-cyan-500/20">
        X
      </div>

      <div>
        <h2 className="text-lg font-bold tracking-tight text-white">
          XAI Workspace
        </h2>

        <p className="text-xs text-white/50">
          Intelligence Platform
        </p>
      </div>
    </Link>
  );
}