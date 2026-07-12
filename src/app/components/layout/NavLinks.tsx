import { NAV_ITEMS } from "@/constants/navigation";

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}