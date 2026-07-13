"use client";

import {
  ArrowUpRight,
  Code2,
  Cpu,
  Globe,
  Mail,
} from "lucide-react";

const productLinks = [
  "Platform",
  "Capabilities",
  "Insights",
  "Documentation",
];

const resourceLinks = [
  "API Reference",
  "Developer Guide",
  "SDKs",
  "Changelog",
];

const companyLinks = [
  "About",
  "Careers",
  "Contact",
  "Privacy Policy",
];

export default function Footer() {

  const socialIcons = [
    Globe,
    Code2,
    Cpu,
    Mail,
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Top */}
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-violet-500 text-xl font-bold text-white shadow-lg shadow-cyan-500/20">
                X
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Xai Workspace
                </h2>

                <p className="text-white/50">
                  Enterprise AI Intelligence
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-md leading-8 text-white/60">
              Transform fragmented business data into intelligent,
              actionable insights with a modern AI platform designed
              for enterprise teams.
            </p>

            {/* Social */}
            <div className="mt-8 flex gap-4">
              {socialIcons.map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    <Icon size={20} />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="mt-6 space-y-4">
              {productLinks.map((link) => (
                <li key={link}>
                  <button className="group flex items-center gap-2 text-white/60 transition-colors hover:text-cyan-300">
                    {link}

                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="mt-6 space-y-4">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <button className="group flex items-center gap-2 text-white/60 transition-colors hover:text-cyan-300">
                    {link}

                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((link) => (
                <li key={link}>
                  <button className="group flex items-center gap-2 text-white/60 transition-colors hover:text-cyan-300">
                    {link}

                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <p className="text-white/50">
            © {new Date().getFullYear()} Xai Workspace. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <span>AI Intelligence Platform</span>

            <span className="hidden md:block">•</span>

            <span>Enterprise Ready</span>

            <span className="hidden md:block">•</span>

            <span>Built with Next.js & React Three Fiber</span>
          </div>
        </div>
      </div>
    </footer>
  );
}