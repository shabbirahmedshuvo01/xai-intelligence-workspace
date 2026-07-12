"use client";

import { NavActions, NavLinks, NavLogo } from ".";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <NavLogo />

        <NavLinks />

        <NavActions />
      </div>
    </header>
  );
}