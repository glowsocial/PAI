import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execAsync = promisify(exec);

// Get patterns from fabric directory
export async function getFabricPatterns() {
  const patternsDir = path.join(process.env.HOME, '.config/fabric/patterns');

  try {
    const patterns = [];
    const patternDirs = await fs.promises.readdir(patternsDir);

    for (const patternName of patternDirs) {
      const patternPath = path.join(patternsDir, patternName);
      const stat = await fs.promises.stat(patternPath);

      if (stat.isDirectory()) {
        const systemMdPath = path.join(patternPath, 'system.md');

        let description = 'No description available';
        try {
          const systemContent = await fs.promises.readFile(systemMdPath, 'utf-8');
          // Extract first line or first paragraph as description
          const firstLine = systemContent.split('\n')[0].replace(/^#+\s*/, '').trim();
          description = firstLine || 'AI pattern for processing text';
        } catch (error) {
          // Use default description if system.md doesn't exist
        }

        // Categorize patterns
        let category = 'General';
        if (patternName.includes('glow') || patternName.includes('social')) {
          category = 'Glow Social';
        } else if (patternName.includes('extract') || patternName.includes('analyze')) {
          category = 'Analysis';
        } else if (patternName.includes('write') || patternName.includes('create')) {
          category = 'Content';
        } else if (patternName.includes('research') || patternName.includes('find')) {
          category = 'Research';
        } else if (patternName.includes('security') || patternName.includes('threat')) {
          category = 'Security';
        } else if (patternName.includes('summarize') || patternName.includes('summary')) {
          category = 'Content';
        }

        patterns.push({
          name: patternName,
          category,
          description: description.substring(0, 150)
        });
      }
    }

    return patterns.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error('Error reading patterns:', error);
    return [];
  }
}

// Execute fabric command with pattern and input
export async function runFabricPattern(pattern, input) {
  try {
    const command = `echo "${input.replace(/"/g, '\\"')}" | fabric --pattern ${pattern}`;
    const { stdout, stderr } = await execAsync(command, {
      timeout: 30000, // 30 second timeout
      maxBuffer: 1024 * 1024 // 1MB buffer
    });

    if (stderr && !stdout) {
      throw new Error(stderr);
    }

    return stdout || stderr;
  } catch (error) {
    throw new Error(`Error running fabric pattern: ${error.message}`);
  }
}