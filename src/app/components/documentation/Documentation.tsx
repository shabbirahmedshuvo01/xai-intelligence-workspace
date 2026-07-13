"use client";

import {
  ArrowUpRight,
  BookOpen,
  Braces,
  Code2,
  FileCode2,
  LockKeyhole,
  Webhook,
} from "lucide-react";

const docs = [
  {
    title: "REST API",
    description:
      "Powerful endpoints for accessing AI insights, datasets, and automation workflows.",
    icon: Braces,
  },
  {
    title: "SDK & Libraries",
    description:
      "Official JavaScript, Python, and TypeScript SDKs for rapid development.",
    icon: Code2,
  },
  {
    title: "Authentication",
    description:
      "Secure OAuth2, API Keys, and JWT authentication with enterprise-grade access control.",
    icon: LockKeyhole,
  },
  {
    title: "Webhooks",
    description:
      "Receive real-time events whenever insights, predictions, or automations are completed.",
    icon: Webhook,
  },
  {
    title: "OpenAPI",
    description:
      "Fully documented OpenAPI specification for seamless integration and testing.",
    icon: FileCode2,
  },
  {
    title: "Developer Guide",
    description:
      "Comprehensive tutorials, examples, and best practices to accelerate development.",
    icon: BookOpen,
  },
];

export default function Documentation() {
  return (
    <section
      id="documentation"
      className="relative overflow-hidden py-20 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,.08),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Documentation
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built for
            <span className="bg-linear-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Developers
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60">
            Everything developers need to integrate Xai Intelligence into
            existing products with modern APIs, SDKs, authentication, and
            comprehensive documentation.
          </p>
        </div>

        {/* Documentation Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {docs.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/3 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/5 hover:shadow-[0_0_45px_rgba(34,211,238,.12)]"
              >
                {/* Glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-300">
                  <Icon size={28} />
                </div>

                {/* Content */}
                <div className="relative mt-8">
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/60">
                    {item.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="relative mt-8 flex items-center gap-2 font-medium text-cyan-300 transition-transform duration-300 group-hover:translate-x-1">
                  Read Documentation

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 rounded-4xl border border-cyan-500/20 bg-linear-to-r from-cyan-500/10 to-violet-500/10 p-8 backdrop-blur-xl lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-3xl font-bold text-white">
              Ready to build with Xai?
            </h3>

            <p className="mt-4 max-w-2xl text-white/60">
              Start integrating AI-powered intelligence into your
              applications in minutes using our modern APIs and developer
              toolkit.
            </p>
          </div>

          <button className="mt-8 rounded-2xl bg-linear-to-r from-cyan-400 to-violet-500 px-8 py-4 font-semibold text-white transition-transform duration-300 hover:scale-105 lg:mt-0">
            Explore Docs
          </button>
        </div>
      </div>
    </section>
  );
}