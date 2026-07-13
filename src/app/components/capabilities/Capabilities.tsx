"use client";

import {
  BrainCircuit,
  Database,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import CapabilityCard from "./CapabilityCard";

const capabilities = [
  {
    icon: <Database size={28} />,
    title: "Unified Data",
    description:
      "Aggregate structured and unstructured business data from multiple platforms into one intelligent workspace.",
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "AI Intelligence",
    description:
      "Analyze relationships, detect hidden patterns, and generate business-ready insights using advanced AI models.",
  },
  {
    icon: <Workflow size={28} />,
    title: "Smart Automation",
    description:
      "Automate repetitive workflows and trigger intelligent actions based on real-time business events.",
  },
  {
    icon: <Search size={28} />,
    title: "Semantic Search",
    description:
      "Ask questions in natural language and instantly retrieve contextual answers across your knowledge base.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Enterprise Security",
    description:
      "Built with secure authentication, access control, and enterprise-grade data protection at every layer.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Predictive Insights",
    description:
      "Forecast business trends and uncover opportunities before they happen with predictive AI intelligence.",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden py-20 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Capabilities
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everything You Need to Build
            <span className="bg-linear-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              {" "}
              AI Intelligence
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60">
            Xai combines intelligent automation, semantic understanding,
            enterprise security, and predictive analytics into a single
            AI-powered workspace designed for modern teams.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability) => (
            <CapabilityCard
              key={capability.title}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}