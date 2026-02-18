# PAI v3.0 — Custom Configuration

This directory contains Kathleen's customizations for PAI v3.0.

## Contents

- **settings.json** — Customized v3.0 settings with Celo identity, hooks, and permissions
- **PAI.md** — Global context file with Celo identity
- **skills/** — Custom skills (glow-social, marketing-patterns, ai-visibility-optimization, alex-hormozi-pitch, ffuf)

## Installation

From the PAI repo root:

```bash
bash install-v3-custom.sh
```

This will:
1. Back up your current `~/.claude/` directory
2. Install all v3.0 components (hooks, skills, agents, MEMORY, etc.)
3. Overlay your custom skills and configuration
4. Set up the Celo identity

## After Installation

1. Update your `MCP_API_KEY` in `~/.claude/settings.json`
2. Source your shell: `source ~/.zshrc`
3. Start a new Claude Code session to verify

## ⚠️ Security Note

The `settings.json` in this repo has `MCP_API_KEY` set to `"REDACTED"`. You must replace this with your actual key after installation. **Never commit your real API key to this repo.**
