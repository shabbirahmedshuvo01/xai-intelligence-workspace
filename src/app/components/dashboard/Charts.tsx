"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const chartData = [
  { day: "Mon", insights: 24 },
  { day: "Tue", insights: 38 },
  { day: "Wed", insights: 44 },
  { day: "Thu", insights: 61 },
  { day: "Fri", insights: 55 },
  { day: "Sat", insights: 78 },
  { day: "Sun", insights: 96 },
];

export default function Charts() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-6 max-w-75 sm:max-w-full">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Analytics
          </span>

          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
            Weekly Intelligence
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">
            AI-generated insights collected over the last 7 days.
          </p>
        </div>

        <div className="w-full rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-3 text-center md:w-auto">
          <p className="text-xs uppercase tracking-wider text-emerald-400">
            Growth
          </p>

          <h4 className="mt-1 text-2xl font-bold text-white">
            +28%
          </h4>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6 h-56 sm:h-64 lg:h-80 xl:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="insightGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#22D3EE"
                  stopOpacity={0.45}
                />
                <stop
                  offset="100%"
                  stopColor="#22D3EE"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="rgba(255,255,255,.06)"
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#94A3B8",
                fontSize: 11,
              }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              width={28}
              tick={{
                fill: "#94A3B8",
                fontSize: 11,
              }}
            />

            <Tooltip
              cursor={{
                stroke: "#22D3EE",
                strokeOpacity: 0.2,
              }}
              contentStyle={{
                background: "#0F172A",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: "14px",
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="insights"
              stroke="#22D3EE"
              strokeWidth={3}
              fill="url(#insightGradient)"
              animationDuration={1400}
              activeDot={{
                r: 5,
                stroke: "#22D3EE",
                strokeWidth: 2,
                fill: "#030712",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Footer Stats */}
      <div className="mt-6 grid grid-cols-1 gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-white/40">
            Highest Day
          </p>

          <h4 className="mt-2 text-lg font-semibold text-white sm:text-xl">
            Sunday
          </h4>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-white/40">
            Peak Insights
          </p>

          <h4 className="mt-2 text-lg font-semibold text-white sm:text-xl">
            96
          </h4>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-white/40">
            Weekly Growth
          </p>

          <h4 className="mt-2 text-lg font-semibold text-emerald-400 sm:text-xl">
            +28%
          </h4>
        </div>
      </div>
    </section>
  );
}