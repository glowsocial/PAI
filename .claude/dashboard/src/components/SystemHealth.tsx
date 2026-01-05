"use client";

interface HealthData {
  paiDir: string;
  skillsCount: number;
  patternsCount: number;
  hasHistory: boolean;
  hasObservability: boolean;
}

export function SystemHealth({ health }: { health: HealthData | null }) {
  if (!health) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
        <p className="text-zinc-500">Loading system health...</p>
      </div>
    );
  }

  const checks = [
    {
      name: "PAI Directory",
      ok: true,
      detail: health.paiDir,
    },
    {
      name: "Skills Loaded",
      ok: health.skillsCount > 0,
      detail: `${health.skillsCount} skills`,
    },
    {
      name: "Fabric Patterns",
      ok: health.patternsCount > 0,
      detail: `${health.patternsCount} patterns`,
    },
    {
      name: "History System",
      ok: health.hasHistory,
      detail: health.hasHistory ? "Active" : "Not found",
    },
    {
      name: "Observability",
      ok: health.hasObservability,
      detail: health.hasObservability ? "Available" : "Not found",
    },
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
      <h3 className="font-medium text-white mb-3 flex items-center gap-2">
        <span>⚙️</span> System Health
      </h3>
      <div className="space-y-2">
        {checks.map((check) => (
          <div
            key={check.name}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-zinc-400">{check.name}</span>
            <span
              className={`flex items-center gap-1 ${
                check.ok ? "text-green-400" : "text-yellow-400"
              }`}
            >
              {check.ok ? "✓" : "⚠"} {check.detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
