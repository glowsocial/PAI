---
name: AIVisibilityOptimization
description: AI Visibility audits and optimization for client businesses. USE WHEN user says 'run visibility audit', 'AI visibility', 'LLM SEO', 'check AI presence', 'how visible is [business] to AI', OR mentions Perplexity/ChatGPT/Claude visibility for a business.
---

# AI Visibility Optimization

**Your AI Visibility Specialist Employee**

This skill runs comprehensive AI visibility audits using the 7-category, 110-point scoring framework. It knows the methodology, research data, and can produce client-ready deliverables.

## What This Employee Does

1. **Runs full audits** - Tests AI mentions, checks schema, analyzes directories
2. **Scores businesses** - Uses the 110-point framework consistently
3. **Generates reports** - Client-ready deliverables in markdown
4. **Recommends quick wins** - Prioritized by impact and effort
5. **Creates action plans** - 90-day roadmaps with specific tasks

## Workflow Routing

| Trigger | Workflow | Description |
|---------|----------|-------------|
| "audit [domain]", "visibility audit" | Audit | Full 7-category assessment |
| "quick wins for [domain]" | QuickWins | Top 5 fast improvements |
| "schema for [business type]" | Schema | Generate appropriate schema markup |
| "content plan for [domain]" | ContentPlan | AI-optimized content strategy |
| "check [domain] mentions" | MentionTest | Test AI mentions across platforms |

## The 110-Point Framework

| Category | Max | What It Measures |
|----------|-----|------------------|
| AI Mention Testing | 30 | Share of answers in category queries |
| Schema Markup | 20 | Structured data for AI extraction |
| Knowledge Graph Presence | 15 | Wikipedia, Crunchbase, Wikidata |
| Directory Listings | 15 | G2, Clutch, Capterra, etc. |
| Content & Authority | 10 | FAQ pages, blog, case studies |
| Reviews & Social Proof | 10 | Google, G2, testimonials |
| Technical Optimization | 10 | robots.txt, sitemap, crawlability |

## Score Interpretation

| Score | Rating | Action |
|-------|--------|--------|
| 0-30 | ❌ Critical | Invisible to AI - urgent fixes needed |
| 31-50 | ⚠️ Low | Minimal presence - significant gaps |
| 51-70 | 🟡 Moderate | Some visibility - optimize for gains |
| 71-90 | ✅ Good | Competitive presence - refine strategy |
| 91-110 | 🏆 Excellent | AI recommends them - maintain lead |

## Key Research Data

**Citation Rates (2025):**
- Perplexity: 6.61 citations/query (highest ROI)
- Google AI Overview: 4.5 citations (16% of searches)
- Claude: 3.8 citations
- ChatGPT: 2.62 citations (hardest, highest trust)

**Content Performance:**
- Listicles: 32% of AI citations
- FAQ/Q&A: 24% of citations
- FAQ Schema: +527% AI sessions

## Example Usage

```
User: "Run an AI visibility audit on acmeconsulting.com"
→ Triggers Audit workflow
→ Tests 5-10 queries across ChatGPT, Claude, Perplexity
→ Checks schema, directories, content
→ Produces scored report with quick wins

User: "What quick wins would help techstartup.io?"
→ Triggers QuickWins workflow
→ Analyzes current state
→ Returns prioritized 5 actions with impact estimates

User: "Generate FAQ schema for a B2B consultant"
→ Triggers Schema workflow
→ Returns JSON-LD template customized for consultants
```

## Output Location

All audit reports go to:
```
~/Documents/projects/ai-visibility-system/client-deliverables/[client-name]-audit-[date].md
```

## Methodology Reference

Full methodology documentation:
- Scoring rubric: `~/Documents/projects/ai-visibility-system/methodology/scoring-rubric.md`
- Research sources: `~/Documents/projects/ai-visibility-system/methodology/research-sources.md`
- Report template: `~/Documents/projects/ai-visibility-system/templates/audit-report.md`

---

## How to Invoke

```
/AIVisibilityOptimization audit example.com
/AIVisibilityOptimization quick-wins example.com
/AIVisibilityOptimization schema "B2B SaaS"
/AIVisibilityOptimization content-plan example.com
```
