---
name: fabric
description: Intelligent pattern selection for Fabric CLI. Automatically selects the right pattern from 242+ specialized prompts based on your intent - threat modeling, analysis, summarization, content creation, extraction, and more. USE WHEN processing content, analyzing data, creating summaries, threat modeling, or transforming text.
---

# Fabric Skill

**Domain:** Content processing, analysis, and transformation using Fabric patterns

## Setup Check

**IMPORTANT: Verify Fabric repository is available:**

```bash
if [ ! -d "$HOME/.claude/skills/fabric/fabric-repo" ]; then
  cd "$HOME/.claude/skills/fabric"
  git clone https://github.com/danielmiessler/fabric.git fabric-repo
fi
```

## When to Activate

**Primary Use Cases:**
- "Create a threat model for..."
- "Summarize this article/video/paper..."
- "Extract wisdom/insights from..."
- "Analyze this [code/malware/claims/debate]..."
- "Improve my writing/code/prompt..."
- "Create a [visualization/summary/report]..."
- "Rate/review/judge this content..."

## Intent Routing

When user requests Fabric processing, route to appropriate workflow:

| User Intent | Workflow File |
|-------------|---------------|
| "threat model", "security assessment" | `workflows/threat-model.md` |
| "summarize", "TLDR", "condense" | `workflows/summarize.md` |
| "extract wisdom", "insights", "key ideas" | `workflows/extract-wisdom.md` |
| "analyze code", "review code" | `workflows/analyze-code.md` |
| "improve writing", "edit", "polish" | `workflows/improve-writing.md` |

**For other patterns:** Consult full pattern list below or search `fabric-repo/data/patterns/`

## Common Workflows

**Quick Access:**
- [Threat Modeling](workflows/threat-model.md) - Security assessments, STRIDE models
- [Summarize](workflows/summarize.md) - Articles, videos, papers, meetings
- [Extract Wisdom](workflows/extract-wisdom.md) - Insights, ideas, takeaways
- [Analyze Code](workflows/analyze-code.md) - Code review, security analysis
- [Improve Writing](workflows/improve-writing.md) - Content enhancement, editing

## Pattern Categories

**230+ official patterns organized by:**

1. **Threat Modeling & Security** (15 patterns)
   - create_threat_model, create_stride_threat_model, analyze_malware

2. **Summarization** (20 patterns)
   - summarize, youtube_summary, summarize_paper

3. **Extraction** (30+ patterns)
   - extract_wisdom, extract_insights, extract_recommendations

4. **Analysis** (35+ patterns)
   - analyze_code, analyze_claims, analyze_debate

5. **Creation** (50+ patterns)
   - create_prd, create_visualization, create_keynote

6. **Improvement** (10 patterns)
   - improve_writing, improve_prompt, review_code

7. **Rating** (8 patterns)
   - rate_content, judge_output, rate_ai_response

## Basic Execution

```bash
# From URL
fabric -u "URL" -p [pattern]

# From YouTube
fabric -y "YOUTUBE_URL" -p [pattern]

# From file/pipe
cat file.txt | fabric -p [pattern]

# Direct text
fabric "your text" -p [pattern]
```

## Pattern Discovery

**List all patterns:**
```bash
ls ~/.claude/skills/fabric/fabric-repo/data/patterns/
```

**Search patterns:**
```bash
ls ~/.claude/skills/fabric/fabric-repo/data/patterns/ | grep [keyword]
```

**Update patterns:**
```bash
cd ~/.claude/skills/fabric/fabric-repo
git pull origin main
```

## Resources

- **Pattern Directory:** `~/.claude/skills/fabric/fabric-repo/data/patterns/`
- **Fabric Repo:** https://github.com/danielmiessler/fabric
- **Official Docs:** https://github.com/danielmiessler/fabric/blob/main/README.md
