# Marketing Patterns Skill

**Hierarchical structure using Daniel Miessler's Skills → Workflows → Patterns framework**

## Structure

```
marketing-patterns/
├── SKILL.md              # Domain knowledge & intent routing (151 lines, was 335)
├── workflows/            # Common marketing workflows
│   ├── onboard-client.md
│   ├── generate-social.md
│   ├── email-campaign.md
│   ├── vsl-script.md
│   ├── sales-letter.md
│   ├── analyze-performance.md
│   └── optimize-titles.md
└── [patterns stored separately]
    ├── ~/Documents/projects/fabric/data/my_patterns/ (73)
    └── ~/Documents/projects/fabric/data/BethanyWorks/patterns/ (16)
```

## What Changed

### Before
- Single 335-line SKILL.md with everything
- Decision matrices for 73 patterns
- Glow Social workflows buried in documentation
- Hard to find daily-use tasks

### After
- Focused 151-line SKILL.md with routing only
- 7 workflow files for most common tasks (30-50 lines each)
- Clear entry points for Glow Social operations
- Easy to find what you need daily

## How to Use

### For Glow Social Daily Tasks

**Client Onboarding:**
```bash
# See workflows/onboard-client.md
fabric "BUSINESS_NAME: ... BUSINESS_TYPE: ... LOCATION: ..." -p onboard_generate_96_hooks --custom
```

**Content Creation:**
```bash
# See workflows/generate-social.md
fabric "BUSINESS_NAME: ... HOOK: ... FORMAT: question" -p generate_social_post --custom
```

**Email Marketing:**
```bash
# See workflows/email-campaign.md
fabric "BUSINESS: ... OFFER: ... TARGET: ..." -p 10x_email_campaign --custom
```

### For Other Patterns

1. Check SKILL.md pattern categories
2. List patterns: `ls ~/Documents/projects/fabric/data/my_patterns/`
3. Execute: `fabric "[content]" -p [pattern] --custom`

## Workflow Files

**Glow Social Core Workflows:**
- onboard-client.md - Generate 96 hooks (every new client)
- generate-social.md - Daily content creation
- analyze-performance.md - Content optimization

**Revenue Generation Workflows:**
- email-campaign.md - High-converting campaigns
- vsl-script.md - Video sales letters
- sales-letter.md - Long-form sales pages

**Optimization Workflows:**
- optimize-titles.md - Headlines and subject lines

## Benefits for Glow Social

**Onboarding Speed:**
- Before: Search through 335 lines to find hook generation
- After: Open `workflows/onboard-client.md` - done

**Daily Content Creation:**
- Before: Find pattern in decision matrix, remember format
- After: `workflows/generate-social.md` has all formats and examples

**Performance Analysis:**
- Before: Hunt for analyze_performance pattern
- After: `workflows/analyze-performance.md` with structured input format

**Team Onboarding:**
- Give new team member the 7 workflow files
- They have everything needed for Glow Social operations
- No 335-line docs to read

## File Size Comparison

| File | Before | After | Reduction |
|------|--------|-------|-----------|
| SKILL.md | 335 lines | 151 lines | 55% |
| Individual workflows | N/A | 30-50 lines each | - |
| **Total for common tasks** | 335 lines | ~50 lines avg | 85% |

## Workflow Details

**onboard-client.md** - 96 hook generation
- Input requirements
- Example execution
- Output structure
- Next steps

**generate-social.md** - Social post creation
- Format options (question, myth, story, etc.)
- Platform optimization
- Multi-platform adaptation

**email-campaign.md** - Email sequences
- Campaign types
- Pattern selection
- Sequence building

**vsl-script.md** - Video sales letters
- VSL types (standard, 10-min, hero's journey, podcast)
- Script structure
- Timing breakdown

**sales-letter.md** - Long-form sales pages
- Input requirements
- Complete structure
- Length guidance

**analyze-performance.md** - Content optimization
- Input format for analysis
- Optimization recommendations
- Testing strategies

**optimize-titles.md** - Headline generation
- Title formulas
- Platform-specific optimization
- Testing strategy

## Adding New Workflows

As Glow Social evolves, add new workflows:

1. Create `workflows/[task-name].md`
2. Document input format, execution, output
3. Add to SKILL.md routing table
4. Main file stays clean

## Pattern Count

- Custom marketing patterns: 73
- BethanyWorks patterns: 16
- Common workflows extracted: 7
- Focus on high-frequency tasks for Glow Social

## Integration Notes

These workflows map directly to Glow Social features:
- Onboarding flow → `onboard-client.md`
- Content generation → `generate-social.md`
- Performance dashboard → `analyze-performance.md`
- Email marketing → `email-campaign.md`

Can be integrated as:
- AI prompt templates
- Workflow automation
- Team training resources
- API endpoint structures
