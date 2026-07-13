"use client";

const jobs = [
  {
    source: "Sales Database",
    status: "Processed",
    confidence: "98%",
    updated: "2 min ago",
  },
  {
    source: "Customer Support",
    status: "Analyzing",
    confidence: "91%",
    updated: "5 min ago",
  },
  {
    source: "Marketing Reports",
    status: "Completed",
    confidence: "95%",
    updated: "12 min ago",
  },
  {
    source: "ERP System",
    status: "Queued",
    confidence: "--",
    updated: "18 min ago",
  },
];

export default function Table() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-6 max-w-75 sm:max-w-full">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Activity
          </p>

          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
            Latest Intelligence Jobs
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">
            Monitor recently processed AI workflows and incoming business data.
          </p>
        </div>

        <button className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-white md:w-auto">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="min-w-175 w-full">
          <thead className="bg-white/5">
            <tr className="text-left">
              <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-white/50 sm:px-6">
                Source
              </th>

              <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-white/50 sm:px-6">
                Status
              </th>

              <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-white/50 sm:px-6">
                Confidence
              </th>

              <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-white/50 sm:px-6">
                Updated
              </th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job) => (
              <tr
                key={job.source}
                className="border-t border-white/10 transition-colors duration-300 hover:bg-white/5"
              >
                <td className="px-4 py-4 text-sm font-medium text-white sm:px-6">
                  {job.source}
                </td>

                <td className="px-4 py-4 sm:px-6">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${job.status === "Processed" ||
                      job.status === "Completed"
                      ? "bg-cyan-500/15 text-cyan-300"
                      : job.status === "Analyzing"
                        ? "bg-violet-500/15 text-violet-300"
                        : "bg-amber-500/15 text-amber-300"
                      }`}
                  >
                    {job.status}
                  </span>
                </td>

                <td className="px-4 py-4 text-sm text-white/70 sm:px-6">
                  {job.confidence}
                </td>

                <td className="px-4 py-4 text-sm text-white/50 sm:px-6">
                  {job.updated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/50 sm:text-sm md:flex-row md:items-center md:justify-between">
        <p>
          Showing <span className="font-semibold text-white">4</span> recent
          intelligence jobs
        </p>

        <p>
          Last synchronized{" "}
          <span className="font-semibold text-cyan-300">
            just now
          </span>
        </p>
      </div>
    </section>
  );
}