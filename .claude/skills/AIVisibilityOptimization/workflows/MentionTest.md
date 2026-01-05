# Mention Test Workflow

**Trigger:** "check mentions for [domain]", "test AI visibility", "is [business] showing up in AI"

## Purpose

Test whether a business appears in AI responses across major platforms for relevant queries.

## Process

### Step 1: Define Test Queries

Create 5-10 queries based on business type:

**For Consultants/Agencies:**
```
1. "Best [specialty] consultants for [target market]"
2. "Top [specialty] experts 2025"
3. "[Service] agency recommendations"
4. "Who to hire for [problem they solve]"
5. "[Competitor] alternatives"
6. "[Tool they specialize in] implementation partners"
```

**For SaaS/Software:**
```
1. "Best [category] software 2025"
2. "[Category] tools for [use case]"
3. "[Competitor] alternatives"
4. "Top [category] platforms"
5. "[Problem] solutions for [audience]"
```

**For Local Businesses:**
```
1. "Best [business type] in [city]"
2. "[Service] near [location]"
3. "Top rated [business type] [city]"
4. "[Service] recommendations [area]"
5. "Where to get [service] in [city]"
```

**Always include brand test:**
```
"[Brand name] [main keyword]"
```

### Step 2: Test Each Platform

Test the same queries on:

| Platform | URL | Notes |
|----------|-----|-------|
| ChatGPT | chat.openai.com | Use GPT-4 if available |
| Claude | claude.ai | Note if it declines to recommend |
| Perplexity | perplexity.ai | Check sources cited |
| Google | google.com | Look for AI Overview box |

### Step 3: Record Results

For each query, document:
- Was the business mentioned? (Yes/No)
- Position if mentioned (1st, 2nd, 3rd, or "listed among")
- What competitors appeared instead
- Any interesting patterns

### Step 4: Calculate Share of Voice

```
Mention Rate = (Queries where mentioned) / (Total queries tested) × 100

Example:
- 10 queries tested
- Mentioned in 2
- Mention rate: 20%
```

**Benchmarks:**
- 0%: Invisible (most small businesses)
- 10-20%: Minimal presence
- 30-50%: Moderate presence
- 60%+: Strong presence

### Step 5: Analyze Competitors

Note which competitors appear consistently. Research what they're doing:
- Do they have FAQ schema?
- Are they on directories?
- How much content do they have?
- Are they cited in articles AI references?

## Output Format

```markdown
# AI Mention Test Results

**Business:** [Name] ([domain])
**Date:** [Date]
**Queries Tested:** [X]

## Summary

| Metric | Value |
|--------|-------|
| Total Queries | [X] |
| Mentions | [Y] |
| Mention Rate | [Z]% |
| Best Platform | [Platform] |

## Detailed Results

### Query 1: "[Query text]"

| Platform | Mentioned? | Position | Competitors |
|----------|------------|----------|-------------|
| ChatGPT | ❌ | N/A | [Competitor 1], [Competitor 2] |
| Claude | ❌ | N/A | [Competitor 1], [Competitor 3] |
| Perplexity | ❌ | N/A | [Competitor 2], [Competitor 4] |
| Google AI | ❌ | N/A | [Competitor 1] |

### Query 2: "[Query text]"
...

### Brand Test: "[Brand + keyword]"

| Platform | Mentioned? | What Appeared |
|----------|------------|---------------|
| ChatGPT | ✅ | LinkedIn profile |
| Claude | ✅ | Website description |
| Perplexity | ✅ | LinkedIn + website |
| Google AI | ✅ | Knowledge panel |

## Key Findings

1. **[Finding 1]** - e.g., "Competitors on Clutch appear consistently"
2. **[Finding 2]** - e.g., "Brand searches work, category searches don't"
3. **[Finding 3]** - e.g., "Perplexity cites G2 heavily for this category"

## Competitors to Study

| Competitor | Appeared in X/Y queries | Why they rank |
|------------|------------------------|---------------|
| [Competitor 1] | 8/10 | Has Clutch profile, FAQ schema |
| [Competitor 2] | 6/10 | 50+ blog posts, case studies |

## Recommendations

Based on this test:
1. [Specific recommendation]
2. [Specific recommendation]
3. [Specific recommendation]
```

## Tips for Accurate Testing

1. **Use incognito/private mode** - Avoid personalization
2. **Test at different times** - AI responses can vary
3. **Be specific** - Vague queries = vague results
4. **Document exact wording** - Small changes affect results
5. **Screenshot interesting results** - For client reports
