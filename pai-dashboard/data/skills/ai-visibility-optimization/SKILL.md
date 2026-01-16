---
name: ai-visibility-optimization
description: LLM SEO and AI visibility optimization strategies. Use this skill to optimize businesses for discovery by ChatGPT, Claude, Perplexity, and Google AI Overview. Includes audit, schema markup, content strategy, and citation tracking.
---

# AI Visibility Optimization Skill

**Domain:** LLM SEO and AI discoverability for businesses

## Pattern Locations

**AI Visibility Patterns:** `~/Documents/projects/fabric/data/my_patterns/ai_visibility_*` (13 patterns)

## When to Activate

**Primary Use Cases:**
- "How do I get ChatGPT to recommend my business?"
- "Audit my AI visibility"
- "Create schema markup for my site"
- "How do I rank in AI search results?"
- "Make my business visible to LLMs"
- "Optimize for Perplexity/Claude/ChatGPT"

## Intent Routing

Route user requests to appropriate workflows:

| User Intent | Workflow File |
|-------------|---------------|
| "audit my AI visibility", "what's my score" | `workflows/audit.md` |
| "create schema markup", "add structured data" | `workflows/schema.md` |
| "content strategy for AI", "what should I publish" | `workflows/content-strategy.md` |
| "FAQ page for AI", "Q&A optimization" | `workflows/faq-creation.md` |
| "competitor AI analysis", "who's ranking" | `workflows/competitor-analysis.md` |

**For other AI visibility tasks:** Use fabric patterns directly (see pattern list below)

## Common Workflows

**Quick Access:**
- [Audit](workflows/audit.md) - Complete AI visibility audit and scoring
- [Schema Markup](workflows/schema.md) - Generate and implement schema
- [Content Strategy](workflows/content-strategy.md) - Volume-based Q&A strategy
- [FAQ Creation](workflows/faq-creation.md) - AI-optimized FAQ pages
- [Competitor Analysis](workflows/competitor-analysis.md) - See who's ranking

## Available Patterns (13 Total)

### Strategy & Planning
- **ai_visibility_strategy** - Complete visibility strategy (tiered approach)
- **ai_visibility_strategy_audit** - Comprehensive audit framework
- **ai_visibility_score_tracker** - Track progress over time
- **ai_visibility_strategy_analyze_competitor** - Competitor visibility analysis

### Technical Implementation
- **ai_visibility_strategy_generate_schema** - Schema markup generation
- **ai_visibility_strategy_generate_entity_docs** - Entity documentation
- **ai_visibility_strategy_generate_citation_network** - Citation network building

### Content Optimization
- **ai_visibility_strategy_create_faq** - FAQ page creation for AI
- **ai_visibility_strategy_optimize_content_semantics** - Semantic optimization
- **ai_visibility_strategy_create_podcast_strategy** - Podcast AI strategy
- **ai_visibility_strategy_create_interactive_tools** - Interactive tools for AI

### Directory & Platform
- **ai_visibility_strategy_optimize_directory** - Directory optimization
- **ai_visibility_strategy_monitor_ai_mentions** - Track AI mentions

## Basic Execution

```bash
# Run complete audit
fabric "[business description]" -p ai_visibility_strategy_audit

# Generate schema markup
fabric "[business description]" -p ai_visibility_strategy_generate_schema

# Create FAQ content
fabric "[business + questions]" -p ai_visibility_strategy_create_faq

# Analyze competitor
fabric "[competitor name + industry]" -p ai_visibility_strategy_analyze_competitor
```

## Key Concepts

### 2025 Research Stats (Updated Dec 2025)

**Market Reality:**
- **60-65% of searches** end without clicks (zero-click reality)
- **527% increase** in AI assistant traffic (Jan-May 2025)
- Gartner predicts traditional search traffic drops **25% by 2026**
- **16% of Google desktop searches** now show AI Overviews

**Content Format Performance:**
- **Listicles get 32%** of all AI citations (3x more than any other format)
- **FAQ schema = 527%** increase in AI-referred sessions
- **40-60 word answer blocks** are optimal for AI extraction
- Include current year in titles/meta for freshness signals

**ROI for Service Businesses:**
- **287-415% ROI** in first 90 days for consultants
- **25x higher conversion** from AI traffic vs traditional SEO
- **27-40% of AI visitors** become sales-qualified leads
- Results visible in **2-4 weeks** with proper implementation

### AI Visibility Score (0-110 scale)
- **0-30:** Critical - Not visible
- **31-50:** Low - Minimal presence
- **51-70:** Moderate - Emerging
- **71-85:** Good - Strong presence
- **86-110:** Excellent - Dominant

### Platform Citation Behavior (Updated Dec 2025)
Different AI platforms cite sources differently. Use this for client conversations:

| Platform | Avg Citations/Query | Behavior | Monthly Drift |
|----------|---------------------|----------|---------------|
| **ChatGPT** | 2.62 | Fewest citations, relies heavily on training data | 54.1% |
| **Claude** | ~3-4 | Moderate citations, strong on accuracy | ~50% |
| **Perplexity** | 6.61 | Most citations, 6-10x higher CTR, 20-30% conversion | ~45% |
| **Gemini** | 6.1 | High citations, integrated with Google search | ~50% |
| **Google AI Overview** | 3-5 | 16% of desktop searches, E-E-A-T focused | 59.3% |

**Implications:**
- Perplexity is easiest to get cited in (more slots, highest conversion)
- ChatGPT is hardest (fewer citations, must be authoritative)
- High monthly drift = requires ongoing optimization, not one-time setup
- Start tracking Perplexity first for quick wins
- ChatGPT mentions indicate strong authority (high bar)

### Tiered Strategy
1. **Tier 1:** Knowledge Graph Builders (Wikidata, Crunchbase, LinkedIn)
2. **Tier 2:** Industry Authority Platforms (G2, Capterra, Product Hunt)
3. **Tier 3:** Semantic Content Hubs (FAQ, resource centers)
4. **Tier 4:** Dynamic Content Sources (podcasts, YouTube)

### Content Strategy (Updated Dec 2025)

**Format Priority:**
1. **Listicles** - 32% of AI citations (prioritize this format)
2. **Q&A pages** with FAQ schema - 527% increase in AI sessions
3. **How-to guides** with clear steps

**Structure Requirements:**
- **Answer-ready blocks:** 40-60 word extractable summaries at top of pages
- **Freshness signals:** Include current year (2025) in titles and meta
- **Schema:** FAQ, Article, Person (for consultants), Organization

**Volume Strategy:**
- **Goal:** 90+ Q&A posts per month (1 every 8 hours)
- **Format:** 200-400 words, one question = one answer
- **Focus:** Direct answers to questions people ask AI

## Troubleshooting Decision Trees

Quick diagnosis for common AI visibility problems:

### Low Citation Rate (0-10% Share of Answers)
```
Is your robots.txt blocking AI crawlers?
├─ Yes → Add GPTBot, ClaudeBot, PerplexityBot to Allow list
└─ No → Is your content JavaScript-rendered?
         ├─ Yes → Implement SSR/SSG or pre-rendering
         └─ No → Do you have Organization schema?
                  ├─ No → Add schema markup (workflows/schema.md)
                  └─ Yes → Are you on Knowledge Graph platforms?
                           ├─ No → Submit to Crunchbase, LinkedIn, Google Business
                           └─ Yes → Content volume problem. Create 3 Core Pages first.
```

### High Impressions, Low Citations
```
Are you being mentioned but not linked?
├─ Yes → Content lacks specificity. Add concrete data, case studies, unique insights.
└─ No → Are competitors being cited instead?
         ├─ Yes → Citation optimization needed. Get mentioned by URLs LLMs cite most.
         └─ No → Your content may answer the wrong questions.
                  Run Product Question validation (see audit.md)
```

### Platform-Specific Issues
```
Appearing in Perplexity but not ChatGPT?
└─ Normal. ChatGPT has higher bar. Focus on:
   - More authoritative backlinks
   - Longer content history (training data lag)
   - Wikipedia/Wikidata mentions

Appearing in ChatGPT but not Perplexity?
└─ Unusual. Check:
   - PerplexityBot not blocked in robots.txt
   - Content is crawlable (not behind auth)
   - Run validation test in Perplexity

Not appearing anywhere?
└─ Start with Technical Optimization:
   1. robots.txt configuration
   2. Schema markup
   3. Knowledge graph submissions
   4. Then content strategy
```

### Technical Blockers
```
AI crawlers blocked?
└─ Check robots.txt for: Disallow: / or specific bot blocks

Content not in raw HTML?
└─ JavaScript rendering issue. Solutions:
   - Next.js/Nuxt with SSR
   - Pre-rendering service (Prerender.io)
   - Static site generation for key pages

Slow page load (>3s)?
└─ AI crawlers have timeouts. Optimize:
   - Image compression
   - CDN usage
   - Server response time
```

## Resources

- **Implementation Guide:** `~/Documents/projects/PAI/marketing/LLM_SEO_IMPLEMENTATION_GUIDE.md`
- **Audit Worksheet:** `~/Documents/projects/PAI/marketing/AI_VISIBILITY_AUDIT_WORKSHEET.md`
- **Service Package:** `~/Documents/projects/PAI/marketing/AI_VISIBILITY_SERVICE_PACKAGE.md`
- **Pattern Directory:** `~/Documents/projects/fabric/data/my_patterns/ai_visibility_*`

## Integration with Other Skills

**Works well with:**
- `marketing-patterns` - For content creation (onboard_generate_96_hooks → FAQ answers)
- `fabric` - For general content processing (summarize, extract_wisdom)
- `glow-social` - For implementation on Glow Social platform

## Testing Your AI Visibility

**Manual Testing Protocol:**
1. Ask ChatGPT: "What's the best [your category] for [your audience]?"
2. Ask Claude: Same question
3. Ask Perplexity: Same question
4. Document if you're mentioned and at what position
5. Track monthly in spreadsheet

**Target Queries for Glow Social:**
- "best social media tool for small business"
- "automated content generation social media"
- "how to create social media content faster"
- "social media scheduling with content generation"
- "small business marketing automation tools"

## Quick Start

**If you have 1 hour:**
1. Run audit workflow (15 min)
2. Generate schema markup (15 min)
3. Implement on website (20 min)
4. Submit to 3 directories (10 min)

**Result:** 20-30 point visibility improvement in 30 days

## Success Metrics

**Month 1 Goals:**
- AI Visibility Score: +20-30 points
- Schema markup implemented (Person + FAQ + Organization)
- 10+ directory listings
- First FAQ page live with answer-ready blocks
- **Expected:** Schema fixes surface in AI systems within days

**Month 3 Goals:**
- AI Visibility Score: +40-50 points
- 120+ Q&A posts published (prioritize listicle format)
- Mentioned in 5/10 test queries
- 30+ customer reviews
- **Expected ROI:** 287-415% for service businesses

**Month 6 Goals:**
- AI Visibility Score: 75-85+
- Top-3 in 7/10 test queries
- 300+ Q&A posts
- Consistent AI citations
- **Conversion:** 25x higher from AI traffic vs traditional SEO
