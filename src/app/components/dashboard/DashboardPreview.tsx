import Charts from "./Charts";
import Metrics from "./Metrics";
import Sidebar from "./Sidebar";
import Table from "./Table";

export default function DashboardPreview() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden py-16 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Platform Preview
          </span>

          <h2 className="mt-6 font-bold tracking-tight text-white text-3xl sm:text-4xl lg:text-5xl">
            Intelligence Workspace
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60">
            A unified workspace where AI organizes business data,
            uncovers hidden patterns, and delivers actionable
            intelligence in real time.
          </p>
        </div>

        {/* Dashboard */}
        <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/3 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-xl">
          <div className="grid lg:grid-cols-[280px_1fr]">
            {/* Sidebar */}
            <div className="hidden lg:block">
              <Sidebar />
            </div>

            {/* Main Content */}
            <div className="space-y-6 p-4 sm:p-6 lg:p-8">
              <Metrics />

              <Charts />

              <Table />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}