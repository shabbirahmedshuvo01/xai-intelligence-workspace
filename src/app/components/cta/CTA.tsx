"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/20 bg-linear-to-br from-[#0B1225] via-[#111827] to-[#0F172A] p-8 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-xl sm:p-10 lg:p-16">
          {/* Decorative Glow */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

          <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                <Sparkles size={16} />

                Ready to Transform Your Business?
              </div>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Unlock AI-Powered
                <span className="bg-linear-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                  {" "}
                  Intelligence
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/60">
                Connect your data, automate workflows, and generate actionable
                insights with an enterprise AI platform built for modern teams.
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
                <div>
                  <h3 className="text-3xl font-bold text-white">99.2%</h3>

                  <p className="mt-2 text-sm text-white/50">
                    AI Accuracy
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">500+</h3>

                  <p className="mt-2 text-sm text-white/50">
                    Enterprise Clients
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">24/7</h3>

                  <p className="mt-2 text-sm text-white/50">
                    AI Monitoring
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4 lg:min-w-70">
              <button className="group flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-cyan-400 to-violet-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,.35)]">
                Get Started

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
                Book a Demo
              </button>

              <p className="text-center text-sm text-white/40">
                No credit card required • Free trial available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}