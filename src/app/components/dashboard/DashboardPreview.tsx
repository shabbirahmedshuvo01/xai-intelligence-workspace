import Charts from "./Charts";
import Metrics from "./Metrics";
import Sidebar from "./Sidebar";
import Table from "./Table";

export default function DashboardPreview() {
  return (
    <section
      id="platform"
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      {/* Section Heading */}
      <div className="mb-16 text-center">
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          Platform Preview
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Intelligence Workspace
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
          A unified workspace where AI organizes data, monitors business
          activity, and delivers actionable insights in real time.
        </p>
      </div>

      {/* Dashboard */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl">
        <div className="grid min-h-180 lg:grid-cols-[260px_1fr]">
          {/* Left Sidebar */}
          <Sidebar />

          {/* Right Content */}
          <div className="space-y-8 p-8">
            <Metrics />

            <Charts />

            <Table />
          </div>
        </div>
      </div>
    </section>
  );
}