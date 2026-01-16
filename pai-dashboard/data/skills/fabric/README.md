# Fabric Skill

**Hierarchical structure using Daniel Miessler's Skills → Workflows → Patterns framework**

## Structure

```
fabric/
├── SKILL.md              # Domain knowledge & intent routing (119 lines, was 379)
├── workflows/            # Common task workflows
│   ├── threat-model.md
│   ├── summarize.md
│   ├── extract-wisdom.md
│   ├── analyze-code.md
│   └── improve-writing.md
└── fabric-repo/          # Official Fabric patterns (230+)
    └── data/patterns/
```

## What Changed

### Before
- Single 379-line SKILL.md with everything
- Routing logic + documentation + examples all mixed
- Hard to find specific use cases
- Overwhelming decision matrices

### After
- Focused 119-line SKILL.md with just routing
- Common workflows in separate, focused files (20-30 lines each)
- Clear entry points for frequent tasks
- Easy to add new workflows without bloating main file

## How to Use

### For Common Tasks

Just reference the workflow:

- "Create a threat model" → See `workflows/threat-model.md`
- "Summarize this article" → See `workflows/summarize.md`
- "Extract wisdom from video" → See `workflows/extract-wisdom.md`

### For Other Patterns

1. Check SKILL.md for pattern categories
2. Search pattern directory: `ls fabric-repo/data/patterns/ | grep [keyword]`
3. Execute: `fabric "[content]" -p [pattern]`

## Workflow Files

Each workflow file contains:
- When to use it
- Execution examples
- Pattern selection guide
- Input format
- Output description

**Current workflows:**
- threat-model.md - Security assessments, STRIDE models
- summarize.md - Articles, videos, papers, meetings
- extract-wisdom.md - Insights, ideas, takeaways
- analyze-code.md - Code review, security analysis
- improve-writing.md - Content enhancement, editing

## Benefits

**Discoverability:**
- `ls workflows/` shows all common tasks immediately
- No need to read 379 lines to find what you need

**Maintainability:**
- Update threat modeling? Edit `workflows/threat-model.md` only
- Add new workflow? Create new file, don't touch existing ones

**Portability:**
- Share whole skill: `cp -r fabric/ ~/team-share/`
- Share just one workflow: `cp workflows/summarize.md ~/share/`

**Focused Files:**
- SKILL.md: 119 lines (was 379, 69% reduction)
- Each workflow: 20-30 lines
- Easy to understand and modify

## Adding New Workflows

1. Create `workflows/[task-name].md`
2. Follow existing workflow format
3. Add entry in SKILL.md intent routing table
4. Done - main file stays clean

## Pattern Count

- Official Fabric patterns: 230+
- Most common workflows extracted: 5
- Can add more workflows as usage patterns emerge
