import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-cyan-400 font-bold text-white shadow-lg">
        X
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-semibold tracking-tight text-white">
          Xai
        </span>

        <span className="text-xs text-slate-400">
          Intelligence Workspace
        </span>
      </div>
    </Link>
  );
}