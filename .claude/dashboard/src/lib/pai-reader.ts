import * as fs from "fs";
import * as path from "path";

// PAI directory detection
// 1. Check explicit PAI_DIR env var (but not if it contains placeholders)
// 2. Check if we're running from within a PAI directory
// 3. Fallback to ~/.claude
function detectPaiDir(): string {
  // Check PAI_DIR env var, but skip if it has placeholders
  const envPaiDir = process.env.PAI_DIR;
  if (envPaiDir && !envPaiDir.includes("__HOME__") && fs.existsSync(envPaiDir)) {
    return envPaiDir;
  }

  // Check if we're running from within a PAI structure
  // (the dashboard is at .claude/dashboard, so go up two levels)
  const currentDir = process.cwd();
  if (currentDir.includes(".claude/dashboard")) {
    const paiDir = path.resolve(currentDir, "..");
    if (fs.existsSync(path.join(paiDir, "skills"))) {
      return paiDir;
    }
  }

  // Fallback to ~/.claude
  return path.join(process.env.HOME || "", ".claude");
}

const PAI_DIR = detectPaiDir();

export interface Skill {
  name: string;
  description: string;
  path: string;
  workflows: Workflow[];
}

export interface Workflow {
  name: string;
  filename: string;
  path: string;
}

export interface FabricPattern {
  name: string;
  description: string;
  path: string;
}

export interface HistoryEntry {
  date: string;
  title: string;
  path: string;
  type: "session" | "learning" | "research";
}

/**
 * Parse YAML frontmatter from a markdown file
 */
function parseFrontmatter(content: string): Record<string, string> {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return {};

  const frontmatter: Record<string, string> = {};
  const lines = frontmatterMatch[1].split("\n");

  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      frontmatter[key] = value;
    }
  }

  return frontmatter;
}

/**
 * Get all skills from the PAI skills directory
 */
export function getSkills(): Skill[] {
  const skillsDir = path.join(PAI_DIR, "skills");

  if (!fs.existsSync(skillsDir)) {
    console.error(`Skills directory not found: ${skillsDir}`);
    return [];
  }

  const skills: Skill[] = [];
  const entries = fs.readdirSync(skillsDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const skillPath = path.join(skillsDir, entry.name);
    const skillMdPath = path.join(skillPath, "SKILL.md");

    if (!fs.existsSync(skillMdPath)) continue;

    try {
      const content = fs.readFileSync(skillMdPath, "utf-8");
      const frontmatter = parseFrontmatter(content);

      // Get workflows
      const workflows = getWorkflows(skillPath);

      skills.push({
        name: frontmatter.name || entry.name,
        description: frontmatter.description || "No description available",
        path: skillPath,
        workflows,
      });
    } catch (error) {
      console.error(`Error reading skill ${entry.name}:`, error);
    }
  }

  return skills.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Get workflows for a skill
 */
function getWorkflows(skillPath: string): Workflow[] {
  const workflowsDir = path.join(skillPath, "workflows");

  if (!fs.existsSync(workflowsDir)) return [];

  const workflows: Workflow[] = [];

  try {
    const files = fs.readdirSync(workflowsDir);

    for (const file of files) {
      if (!file.endsWith(".md")) continue;

      const name = file.replace(".md", "");
      workflows.push({
        name,
        filename: file,
        path: path.join(workflowsDir, file),
      });
    }
  } catch (error) {
    console.error(`Error reading workflows:`, error);
  }

  return workflows.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Get Fabric patterns
 */
export function getFabricPatterns(): FabricPattern[] {
  const patternsDir = path.join(
    PAI_DIR,
    "skills",
    "Fabric",
    "fabric-repo",
    "data",
    "patterns"
  );

  if (!fs.existsSync(patternsDir)) {
    console.error(`Fabric patterns not found: ${patternsDir}`);
    return [];
  }

  const patterns: FabricPattern[] = [];

  try {
    const entries = fs.readdirSync(patternsDir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      const systemMdPath = path.join(patternsDir, entry.name, "system.md");

      let description = "No description available";

      if (fs.existsSync(systemMdPath)) {
        try {
          const content = fs.readFileSync(systemMdPath, "utf-8");
          // Get first meaningful line as description
          const lines = content.split("\n").filter((l) => l.trim());
          const firstLine = lines.find(
            (l) =>
              !l.startsWith("#") &&
              !l.startsWith("---") &&
              l.length > 10 &&
              l.length < 200
          );
          if (firstLine) {
            description = firstLine.slice(0, 150);
            if (firstLine.length > 150) description += "...";
          }
        } catch {
          // Keep default description
        }
      }

      patterns.push({
        name: entry.name,
        description,
        path: path.join(patternsDir, entry.name),
      });
    }
  } catch (error) {
    console.error(`Error reading Fabric patterns:`, error);
  }

  return patterns.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Get history entries from PAI history directory
 */
export function getHistoryEntries(limit = 20): HistoryEntry[] {
  const historyDir = path.join(PAI_DIR, "history");
  const entries: HistoryEntry[] = [];

  const types = [
    { dir: "sessions", type: "session" as const },
    { dir: "learnings", type: "learning" as const },
    { dir: "research", type: "research" as const },
  ];

  for (const { dir, type } of types) {
    const typeDir = path.join(historyDir, dir);
    if (!fs.existsSync(typeDir)) continue;

    try {
      // Get year-month directories
      const monthDirs = fs
        .readdirSync(typeDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name)
        .sort()
        .reverse();

      for (const monthDir of monthDirs.slice(0, 3)) {
        // Last 3 months
        const monthPath = path.join(typeDir, monthDir);
        const files = fs
          .readdirSync(monthPath)
          .filter((f) => f.endsWith(".md"))
          .sort()
          .reverse();

        for (const file of files.slice(0, 10)) {
          // Last 10 per month
          const filePath = path.join(monthPath, file);
          const dateMatch = file.match(/^(\d{4}-\d{2}-\d{2})/);
          const date = dateMatch ? dateMatch[1] : "Unknown";

          // Get title from filename or first line
          let title = file.replace(/^\d{4}-\d{2}-\d{2}[-_]?/, "").replace(".md", "");
          title = title.replace(/[-_]/g, " ").trim() || type;

          entries.push({
            date,
            title: title.charAt(0).toUpperCase() + title.slice(1),
            path: filePath,
            type,
          });
        }
      }
    } catch (error) {
      console.error(`Error reading ${type} history:`, error);
    }
  }

  // Sort by date descending and limit
  return entries
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

/**
 * Read file content
 */
export function readFile(filePath: string): string | null {
  try {
    // Security: only allow reading from PAI directory
    const normalizedPath = path.normalize(filePath);
    if (!normalizedPath.startsWith(PAI_DIR)) {
      console.error("Attempted to read file outside PAI directory");
      return null;
    }

    return fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

/**
 * Get system health info
 */
export function getSystemHealth(): {
  paiDir: string;
  skillsCount: number;
  patternsCount: number;
  hasHistory: boolean;
  hasObservability: boolean;
} {
  const skills = getSkills();
  const patterns = getFabricPatterns();

  return {
    paiDir: PAI_DIR,
    skillsCount: skills.length,
    patternsCount: patterns.length,
    hasHistory: fs.existsSync(path.join(PAI_DIR, "history")),
    hasObservability: fs.existsSync(path.join(PAI_DIR, "skills", "Observability")),
  };
}
