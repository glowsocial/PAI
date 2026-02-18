#!/bin/bash
# PAI v3.0 Custom Install Script
# Installs PAI v3.0 with Kathleen's customizations (Celo identity, custom skills)
#
# Usage: bash install-v3-custom.sh
# Run from the PAI repo root: ~/Documents/projects/PAI/

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
V3_DIR="$SCRIPT_DIR/Releases/v3.0/.claude"
CUSTOM_DIR="$SCRIPT_DIR/custom"
CLAUDE_DIR="$HOME/.claude"

echo "========================================="
echo "  PAI v3.0 Custom Install"
echo "  Identity: Celo"
echo "========================================="
echo ""

# Check prerequisites
if ! command -v bun &> /dev/null; then
    echo "Installing bun..."
    curl -fsSL https://bun.sh/install | bash
    export PATH="$HOME/.bun/bin:$PATH"
    echo "Bun installed!"
fi

# Backup current installation
if [ -d "$CLAUDE_DIR" ]; then
    BACKUP_NAME="claude-backup-pre-v3-$(date +%Y%m%d-%H%M%S)"
    echo "Backing up current ~/.claude to ~/$BACKUP_NAME"
    cp -r "$CLAUDE_DIR" "$HOME/$BACKUP_NAME"
    echo "Backup complete!"
    echo ""
fi

echo "Installing v3.0 components..."

# 1. Hooks (v3.0)
echo "  [1/8] Hooks..."
rm -rf "$CLAUDE_DIR/hooks"
cp -r "$V3_DIR/hooks" "$CLAUDE_DIR/hooks"

# 2. Skills (v3.0 + custom)
echo "  [2/8] Skills..."
rm -rf "$CLAUDE_DIR/skills"
cp -r "$V3_DIR/skills" "$CLAUDE_DIR/skills"

# Copy custom skills if they exist in the custom directory
if [ -d "$CUSTOM_DIR/skills" ]; then
    echo "  [2b/8] Custom skills..."
    cp -r "$CUSTOM_DIR/skills"/* "$CLAUDE_DIR/skills/" 2>/dev/null || true
fi

# 3. MEMORY system
echo "  [3/8] MEMORY system..."
if [ ! -d "$CLAUDE_DIR/MEMORY" ]; then
    cp -r "$V3_DIR/MEMORY" "$CLAUDE_DIR/MEMORY"
fi

# 4. Agents
echo "  [4/8] Agents..."
rm -rf "$CLAUDE_DIR/agents"
cp -r "$V3_DIR/agents" "$CLAUDE_DIR/agents"

# 5. Lib
echo "  [5/8] Lib..."
cp -r "$V3_DIR/lib" "$CLAUDE_DIR/lib"

# 6. Status line & misc files
echo "  [6/8] Status line & misc..."
cp "$V3_DIR/statusline-command.sh" "$CLAUDE_DIR/statusline-command.sh"
cp "$V3_DIR/CLAUDE.md" "$CLAUDE_DIR/CLAUDE.md"
cp "$V3_DIR/.gitignore" "$CLAUDE_DIR/.gitignore"

# 7. VoiceServer & Installer
echo "  [7/8] VoiceServer & Installer..."
cp -r "$V3_DIR/VoiceServer" "$CLAUDE_DIR/VoiceServer"
cp -r "$V3_DIR/PAI-Install" "$CLAUDE_DIR/PAI-Install"

# 8. Custom configuration (settings.json + PAI.md)
echo "  [8/8] Custom configuration (Celo identity)..."
cp "$CUSTOM_DIR/settings.json" "$CLAUDE_DIR/settings.json"
cp "$CUSTOM_DIR/PAI.md" "$CLAUDE_DIR/PAI.md"

echo ""
echo "========================================="
echo "  PAI v3.0 Install Complete!"
echo "========================================="
echo ""
echo "Skills:  $(ls -d "$CLAUDE_DIR/skills"/*/ 2>/dev/null | wc -l | tr -d ' ')"
echo "Hooks:   $(ls "$CLAUDE_DIR/hooks"/*.hook.ts 2>/dev/null | wc -l | tr -d ' ')"
echo "Agents:  $(ls "$CLAUDE_DIR/agents"/*.md 2>/dev/null | wc -l | tr -d ' ')"
echo "Tools:   $(ls "$CLAUDE_DIR/skills/PAI/Tools"/*.ts 2>/dev/null | wc -l | tr -d ' ')"
echo ""
echo "IMPORTANT: Update your MCP_API_KEY in ~/.claude/settings.json"
echo ""
echo "To use the Algorithm CLI:"
echo "  bun ~/.claude/skills/PAI/Tools/algorithm.ts --help"
echo ""
