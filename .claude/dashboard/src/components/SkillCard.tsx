"use client";

import { useState } from "react";

interface Workflow {
  name: string;
  filename: string;
  path: string;
}

interface Skill {
  name: string;
  description: string;
  path: string;
  workflows: Workflow[];
}

const skillIcons: Record<string, string> = {
  Art: "🎨",
  Research: "🔬",
  Fabric: "📊",
  CreateCLI: "🛠",
  BrightData: "🔍",
  CORE: "⚡",
  Createskill: "✨",
  Observability: "📈",
  Prompting: "💬",
  StoryExplanation: "📖",
  AlexHormoziPitch: "🎯",
  Ffuf: "🔓",
  PAI: "🤖",
  "content-cloning": "📝",
};

interface SkillCardProps {
  skill: Skill;
  onViewFile: (path: string, title: string) => void;
}

export function SkillCard({ skill, onViewFile }: SkillCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const icon = skillIcons[skill.name] || "📦";

  // Truncate description for display
  const shortDesc =
    skill.description.length > 100
      ? skill.description.slice(0, 100) + "..."
      : skill.description;

  const slashCommand = `/${skill.name}`;

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(slashCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const viewSkillFile = () => {
    onViewFile(`${skill.path}/SKILL.md`, `${skill.name} - SKILL.md`);
  };

  const viewWorkflow = (wf: Workflow) => {
    onViewFile(wf.path, `${skill.name} → ${wf.name}`);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <div>
            <h3 className="font-semibold text-white">{skill.name}</h3>
            <p className="text-sm text-zinc-400">
              {skill.workflows.length} workflow
              {skill.workflows.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
        <button
          onClick={copyCommand}
          className="text-xs px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
          title={`Copy ${slashCommand}`}
        >
          {copied ? "✓ Copied" : slashCommand}
        </button>
      </div>

      <p className="mt-3 text-sm text-zinc-300">{shortDesc}</p>

      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={viewSkillFile}
          className="text-sm text-blue-400 hover:text-blue-300 underline"
        >
          View SKILL.md
        </button>

        {skill.workflows.length > 0 && (
          <>
            <span className="text-zinc-600">•</span>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm text-zinc-400 hover:text-zinc-300 flex items-center gap-1"
            >
              {expanded ? "Hide" : "Show"} workflows
              <span className="transform transition-transform duration-200">
                {expanded ? "▲" : "▼"}
              </span>
            </button>
          </>
        )}
      </div>

      {expanded && skill.workflows.length > 0 && (
        <ul className="mt-3 space-y-1 pl-2 border-l border-zinc-700">
          {skill.workflows.map((wf) => (
            <li key={wf.name} className="py-1">
              <button
                onClick={() => viewWorkflow(wf)}
                className="text-sm text-zinc-400 hover:text-blue-400 transition-colors text-left"
              >
                → {wf.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
