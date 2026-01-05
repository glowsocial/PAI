"use client";

const actions = [
  {
    name: "Research",
    icon: "🔬",
    description: "Multi-source research",
    command: "/research",
  },
  {
    name: "Create Skill",
    icon: "✨",
    description: "Build a new skill",
    command: "/Createskill",
  },
  {
    name: "Hormozi Pitch",
    icon: "🎯",
    description: "Create irresistible offer",
    command: "/AlexHormoziPitch",
  },
  {
    name: "Observability",
    icon: "📈",
    description: "Monitor agents",
    command: "/Observability",
  },
  {
    name: "PAI Update",
    icon: "🔄",
    description: "Update PAI system",
    command: "/paiupdate",
  },
  {
    name: "Create CLI",
    icon: "🛠",
    description: "Build TypeScript CLI",
    command: "/CreateCLI",
  },
];

export function QuickActions() {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {actions.map((action) => (
        <button
          key={action.name}
          onClick={() => copyToClipboard(action.command)}
          className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-left hover:border-blue-500 hover:bg-zinc-800 transition-all group"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">{action.icon}</span>
            <span className="font-medium text-white">{action.name}</span>
          </div>
          <p className="text-xs text-zinc-500 mt-1">{action.description}</p>
          <p className="text-xs text-blue-400 mt-2 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
            Click to copy: {action.command}
          </p>
        </button>
      ))}
    </div>
  );
}
