"use client";

const rows = [
  {
    source: "Sales Database",
    status: "Processed",
    confidence: "98%",
  },
  {
    source: "Customer Support",
    status: "Analyzing",
    confidence: "91%",
  },
  {
    source: "Marketing Reports",
    status: "Completed",
    confidence: "95%",
  },
  {
    source: "ERP System",
    status: "Queued",
    confidence: "--",
  },
];

export default function Table() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/3 p-6">
      <h3 className="mb-5 text-lg font-semibold text-white">
        Recent Data Sources
      </h3>

      <div className="overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full text-left">
          <thead className="bg-white/5 text-xs uppercase tracking-widest text-white/50">
            <tr>
              <th className="px-5 py-4">Source</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Confidence</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr
                key={row.source}
                className="border-t border-white/10 transition hover:bg-white/5"
              >
                <td className="px-5 py-4 text-white">{row.source}</td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${row.status === "Processed" ||
                      row.status === "Completed"
                      ? "bg-cyan-500/15 text-cyan-300"
                      : row.status === "Analyzing"
                        ? "bg-violet-500/15 text-violet-300"
                        : "bg-yellow-500/15 text-yellow-300"
                      }`}
                  >
                    {row.status}
                  </span>
                </td>

                <td className="px-5 py-4 text-white/80">
                  {row.confidence}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}