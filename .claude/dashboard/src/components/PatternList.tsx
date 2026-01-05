"use client";

import { useState, useMemo } from "react";

interface FabricPattern {
  name: string;
  description: string;
  path: string;
}

// Categorize patterns by prefix
const categories: Record<string, string> = {
  analyze: "🔍 Analyze",
  create: "✨ Create",
  extract: "📤 Extract",
  summarize: "📝 Summarize",
  write: "✍️ Write",
  improve: "🔧 Improve",
  explain: "💡 Explain",
  rate: "⭐ Rate",
  find: "🔎 Find",
  check: "✅ Check",
  compare: "⚖️ Compare",
  label: "🏷️ Label",
  get: "📥 Get",
  other: "📦 Other",
};

function categorizePattern(name: string): string {
  for (const prefix of Object.keys(categories)) {
    if (prefix !== "other" && name.startsWith(prefix)) {
      return prefix;
    }
  }
  return "other";
}

interface PatternListProps {
  patterns: FabricPattern[];
  onViewPattern?: (path: string, name: string) => void;
}

export function PatternList({ patterns, onViewPattern }: PatternListProps) {
  const [search, setSearch] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const filteredPatterns = useMemo(() => {
    if (!search) return patterns;
    const lower = search.toLowerCase();
    return patterns.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower)
    );
  }, [patterns, search]);

  const groupedPatterns = useMemo(() => {
    const groups: Record<string, FabricPattern[]> = {};

    for (const pattern of filteredPatterns) {
      const category = categorizePattern(pattern.name);
      if (!groups[category]) groups[category] = [];
      groups[category].push(pattern);
    }

    return groups;
  }, [filteredPatterns]);

  const copyPatternName = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search patterns..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500"
        />
        <p className="text-sm text-zinc-500 mt-2">
          {filteredPatterns.length} of {patterns.length} patterns
        </p>
      </div>

      <div className="space-y-2">
        {Object.entries(groupedPatterns)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([category, categoryPatterns]) => (
            <div
              key={category}
              className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedCategory(
                    expandedCategory === category ? null : category
                  )
                }
                className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="font-medium text-white">
                  {categories[category] || category}
                </span>
                <span className="text-zinc-400 text-sm">
                  {categoryPatterns.length} patterns{" "}
                  {expandedCategory === category ? "▲" : "▼"}
                </span>
              </button>

              {expandedCategory === category && (
                <div className="border-t border-zinc-800 max-h-64 overflow-y-auto">
                  {categoryPatterns.map((pattern) => (
                    <div
                      key={pattern.name}
                      className="px-4 py-2 border-b border-zinc-800 last:border-b-0 hover:bg-zinc-800/50 flex items-center justify-between group"
                    >
                      <div className="flex-1 min-w-0">
                        <button
                          onClick={() =>
                            onViewPattern?.(pattern.path, pattern.name)
                          }
                          className="text-sm font-mono text-blue-400 hover:text-blue-300 text-left"
                        >
                          {pattern.name}
                        </button>
                        <p className="text-xs text-zinc-500 mt-1 truncate">
                          {pattern.description}
                        </p>
                      </div>
                      <button
                        onClick={() => copyPatternName(pattern.name)}
                        className="ml-2 text-xs px-2 py-1 rounded bg-zinc-700 hover:bg-zinc-600 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Copy
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
