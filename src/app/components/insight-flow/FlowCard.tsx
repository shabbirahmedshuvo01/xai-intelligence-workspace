"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { BrainCircuit, Database, Sparkles } from "lucide-react";

type FlowCardProps = {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
};

const icons = {
  1: Database,
  2: BrainCircuit,
  3: Sparkles,
};

export default function FlowCard({
  step,
  title,
  description,
  isLast = false,
}: FlowCardProps) {
  const Icon = icons[step as keyof typeof icons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.6,
        delay: step * 0.15,
      }}
      className="relative flex gap-8"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div
          className={clsx(
            "flex h-14 w-14 items-center justify-center rounded-full",
            "border border-cyan-400/30 bg-white/5 backdrop-blur-md",
            "shadow-[0_0_30px_rgba(34,211,238,0.12)]"
          )}
        >
          <Icon
            size={24}
            className="text-cyan-300"
          />
        </div>

        {!isLast && (
          <div className="mt-4 h-28 w-px bg-linear-to-b from-cyan-400/60 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div
        className={clsx(
          "flex-1 rounded-3xl border border-white/10",
          "bg-white/3",
          "p-8 backdrop-blur-xl",
          "transition-all duration-300",
          "hover:border-cyan-400/30",
          "hover:bg-white/5",
          "hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
        )}
      >
        <div className="mb-3 flex items-center gap-3">
          <span className="text-sm font-semibold text-cyan-300">
            0{step}
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 max-w-xl leading-8 text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}