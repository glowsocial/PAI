"use client";

interface HistoryEntry {
  date: string;
  title: string;
  path: string;
  type: "session" | "learning" | "research";
}

const typeStyles = {
  session: { bg: "bg-blue-900/30", text: "text-blue-400", label: "Session" },
  learning: {
    bg: "bg-green-900/30",
    text: "text-green-400",
    label: "Learning",
  },
  research: {
    bg: "bg-purple-900/30",
    text: "text-purple-400",
    label: "Research",
  },
};

interface HistoryTimelineProps {
  entries: HistoryEntry[];
  onViewEntry?: (path: string, title: string) => void;
}

export function HistoryTimeline({
  entries,
  onViewEntry,
}: HistoryTimelineProps) {
  if (entries.length === 0) {
    return (
      <div className="text-center py-8 text-zinc-500">
        <p>No history entries found</p>
        <p className="text-sm mt-1">History will appear here as you use PAI</p>
      </div>
    );
  }

  // Group by date
  const groupedByDate: Record<string, HistoryEntry[]> = {};
  for (const entry of entries) {
    if (!groupedByDate[entry.date]) groupedByDate[entry.date] = [];
    groupedByDate[entry.date].push(entry);
  }

  return (
    <div className="space-y-4">
      {Object.entries(groupedByDate).map(([date, dateEntries]) => (
        <div key={date}>
          <h3 className="text-sm font-medium text-zinc-400 mb-2">{date}</h3>
          <div className="space-y-2">
            {dateEntries.map((entry, i) => {
              const style = typeStyles[entry.type];
              return (
                <button
                  key={`${entry.path}-${i}`}
                  onClick={() => onViewEntry?.(entry.path, entry.title)}
                  className={`${style.bg} border border-zinc-800 rounded-lg p-3 hover:border-zinc-600 transition-colors w-full text-left`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${style.bg} ${style.text}`}
                    >
                      {style.label}
                    </span>
                    <span className="text-sm text-white">{entry.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
