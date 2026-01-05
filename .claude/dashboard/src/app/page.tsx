"use client";

import { useEffect, useState } from "react";
import { SkillCard } from "@/components/SkillCard";
import { PatternList } from "@/components/PatternList";
import { HistoryTimeline } from "@/components/HistoryTimeline";
import { QuickActions } from "@/components/QuickActions";
import { SystemHealth } from "@/components/SystemHealth";
import { FileViewer } from "@/components/FileViewer";

interface Skill {
  name: string;
  description: string;
  path: string;
  workflows: { name: string; filename: string; path: string }[];
}

interface FabricPattern {
  name: string;
  description: string;
  path: string;
}

interface HistoryEntry {
  date: string;
  title: string;
  path: string;
  type: "session" | "learning" | "research";
}

interface HealthData {
  paiDir: string;
  skillsCount: number;
  patternsCount: number;
  hasHistory: boolean;
  hasObservability: boolean;
}

type Tab = "skills" | "fabric" | "history";

export default function Dashboard() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [patterns, setPatterns] = useState<FabricPattern[]>([]);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [health, setHealth] = useState<HealthData | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("skills");
  const [loading, setLoading] = useState(true);
  const [viewingFile, setViewingFile] = useState<{
    path: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [skillsRes, patternsRes, historyRes, healthRes] =
          await Promise.all([
            fetch("/api/skills"),
            fetch("/api/fabric"),
            fetch("/api/history"),
            fetch("/api/health"),
          ]);

        const [skillsData, patternsData, historyData, healthData] =
          await Promise.all([
            skillsRes.json(),
            patternsRes.json(),
            historyRes.json(),
            healthRes.json(),
          ]);

        setSkills(skillsData);
        setPatterns(patternsData);
        setHistory(historyData);
        setHealth(healthData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleViewFile = (path: string, title: string) => {
    setViewingFile({ path, title });
  };

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: "skills", label: "Skills", count: skills.length },
    { id: "fabric", label: "Fabric Patterns", count: patterns.length },
    { id: "history", label: "History", count: history.length },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* File Viewer Modal */}
      {viewingFile && (
        <FileViewer
          path={viewingFile.path}
          title={viewingFile.title}
          onClose={() => setViewingFile(null)}
        />
      )}

      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤖</span>
              <div>
                <h1 className="text-xl font-bold">PAI Dashboard</h1>
                <p className="text-sm text-zinc-500">
                  Personal AI Infrastructure
                </p>
              </div>
            </div>
            <div className="text-sm text-zinc-500">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-zinc-500">Loading PAI data...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main content - 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              {/* Stats cards */}
              <div className="grid grid-cols-3 gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`p-4 rounded-lg border transition-all ${
                      activeTab === tab.id
                        ? "bg-blue-900/20 border-blue-500"
                        : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
                    <div className="text-3xl font-bold">{tab.count}</div>
                    <div className="text-sm text-zinc-400">{tab.label}</div>
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  {activeTab === "skills" && "📦 Skills"}
                  {activeTab === "fabric" && "📊 Fabric Patterns"}
                  {activeTab === "history" && "📜 Recent History"}
                </h2>

                {activeTab === "skills" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skills.map((skill) => (
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        onViewFile={handleViewFile}
                      />
                    ))}
                  </div>
                )}

                {activeTab === "fabric" && (
                  <PatternList
                    patterns={patterns}
                    onViewPattern={(path, name) =>
                      handleViewFile(`${path}/system.md`, `Fabric: ${name}`)
                    }
                  />
                )}

                {activeTab === "history" && (
                  <HistoryTimeline
                    entries={history}
                    onViewEntry={(path, title) => handleViewFile(path, title)}
                  />
                )}
              </div>
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">
              <SystemHealth health={health} />

              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                <h3 className="font-medium text-white mb-3 flex items-center gap-2">
                  <span>⚡</span> Quick Actions
                </h3>
                <QuickActions />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-zinc-600">
          PAI Dashboard • Local development at localhost:3000
        </div>
      </footer>
    </div>
  );
}
