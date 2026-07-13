"use client";

import SignatureCanvas from "./SignatureCanvas";

export default function SignatureSection() {
  return (
    <section
      id="signature"
      className="relative overflow-hidden py-24 lg:py-36"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.08),transparent_65%)]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(6,10,16,.8),transparent)]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            AI Intelligence Network
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Every Insight
            <span className="bg-linear-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Starts With Connected Data
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/60">
            Xai continuously connects scattered business information into one
            intelligent knowledge graph, allowing AI to recognize patterns,
            relationships, and opportunities instantly.
          </p>
        </div>

        {/* Canvas */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-linear-to-b from-white/5 to-white/2 backdrop-blur-xl">
          <div className="h-105 sm:h-130 lg:h-175">
            <SignatureCanvas />
          </div>

          {/* Bottom Stats */}
          <div className="grid gap-6 border-t border-white/10 bg-black/20 p-8 sm:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                Connected Nodes
              </p>

              <h3 className="mt-2 text-4xl font-bold text-white">
                12.4K
              </h3>

              <p className="mt-2 text-white/50">
                Live business entities
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                AI Relationships
              </p>

              <h3 className="mt-2 text-4xl font-bold text-white">
                2.8M
              </h3>

              <p className="mt-2 text-white/50">
                Connections discovered
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                Response Time
              </p>

              <h3 className="mt-2 text-4xl font-bold text-white">
                0.42s
              </h3>

              <p className="mt-2 text-white/50">
                Average AI processing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}