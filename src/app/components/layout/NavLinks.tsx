import { NAV_ITEMS } from "@/constants/navigation";
import Link from "next/link";

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="relative text-sm font-medium text-white/60 transition-all duration-300 hover:text-cyan-300"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}