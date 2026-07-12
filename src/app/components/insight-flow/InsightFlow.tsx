"use client";

import { FLOW_STEPS } from "@/data/insights";
import { motion } from "framer-motion";
import FlowCard from "./FlowCard";

export default function InsightFlow() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
            How Xai Works
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-white">
            From Raw Data to
            <span className="block bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Intelligent Decisions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Xai transforms fragmented business information into structured
            intelligence through an AI-powered workflow designed for modern
            teams.
          </p>
        </motion.div>

        {/* Flow */}
        <div className="mx-auto flex max-w-5xl flex-col gap-10">
          {FLOW_STEPS.map((item, index) => (
            <FlowCard
              key={item.id}
              step={item.id}
              title={item.title}
              description={item.description}
              isLast={index === FLOW_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}