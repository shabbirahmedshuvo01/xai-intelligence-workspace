"use client";

import InsightCard from "./InsightCard";

const insights = [
  {
    category: "Predictive AI",
    title: "Revenue Forecast",
    description:
      "AI analyzed historical sales, customer behavior, and market signals to predict next month's revenue with high confidence.",
    value: "98.4%",
    trend: "+21%",
  },
  {
    category: "Business Intelligence",
    title: "Customer Retention",
    description:
      "Machine learning identified customer segments with the highest churn risk and recommended personalized retention strategies.",
    value: "96.1%",
    trend: "+18%",
  },
  {
    category: "Automation",
    title: "Operational Efficiency",
    description:
      "Automated workflows reduced manual processing time while increasing operational accuracy across connected systems.",
    value: "94.8%",
    trend: "+32%",
  },
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden py-20 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            AI Insights
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Intelligence That Drives
            <span className="bg-linear-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Better Decisions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60">
            Xai continuously transforms complex business information into
            actionable intelligence, helping organizations predict trends,
            optimize operations, and make faster strategic decisions.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {insights.map((insight) => (
            <InsightCard
              key={insight.title}
              category={insight.category}
              title={insight.title}
              description={insight.description}
              value={insight.value}
              trend={insight.trend}
            />
          ))}
        </div>

        {/* Bottom Statistics */}
        <div className="mt-20 grid gap-6 rounded-4xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Predictions
            </p>

            <h3 className="mt-3 text-4xl font-bold text-white">
              1.2M+
            </h3>

            <p className="mt-2 text-white/50">
              AI forecasts generated
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Accuracy
            </p>

            <h3 className="mt-3 text-4xl font-bold text-white">
              99.2%
            </h3>

            <p className="mt-2 text-white/50">
              Average prediction confidence
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Reports
            </p>

            <h3 className="mt-3 text-4xl font-bold text-white">
              18K
            </h3>

            <p className="mt-2 text-white/50">
              Business reports delivered
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Decisions
            </p>

            <h3 className="mt-3 text-4xl font-bold text-white">
              24/7
            </h3>

            <p className="mt-2 text-white/50">
              Continuous AI monitoring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}