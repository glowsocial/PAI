# AI Visibility Audit Workflow

Complete audit to determine your AI Visibility Score (0-110).

## When to Use

- New client onboarding
- Baseline measurement before optimization
- Monthly progress tracking
- Competitive analysis
- Service sales (show the gap)

## Execution

### Option 1: Self-Audit (Client Does It)

Use the worksheet:
```bash
# Open and complete
~/Documents/projects/PAI/marketing/AI_VISIBILITY_AUDIT_WORKSHEET.md
```

**Time:** 15-20 minutes
**Output:** Numerical score + top 3 quick wins

### Option 2: Full Audit (You Do It)

Use fabric pattern:
```bash
fabric "[BUSINESS DESCRIPTION]" -p ai_visibility_strategy_audit
```

**Input Format:**
```
Business: [Name]
Industry: [Industry]
Website: [URL]
Target Audience: [Description]
Competitors: [List 3-5]
Current Presence: [What exists now]
```

## Audit Components (7 Sections)

### 1. AI Mention Testing (30 points)
**Method 1: Share of Answers (Quantitative)**

Track how often you appear across surfaces, question variations, and runs:

**Setup:**
- Choose 10 Product Questions for your AEO topics
- Test each question 3 times (LLMs give different answers each run)
- Test across 4 surfaces: ChatGPT, Claude, Perplexity, Gemini

**Total tests:** 10 questions × 3 runs × 4 surfaces = 120 total checks

**Scoring:**
- Count how many times you're mentioned out of 120 checks
- Share of Answers = (Mentions / 120) × 100
- Example: 24 mentions / 120 = 20% Share of Answers

**Points:**
- 0-5% Share = 5 points
- 6-15% Share = 10 points
- 16-30% Share = 15 points
- 31-50% Share = 20 points
- 51%+ Share = 30 points

**Why 3 runs per question?** Same question can yield different answers. Multiple runs show true frequency.

**Method 2: Validation Prompts (Qualitative)**

Test your brand authority with these specific prompts:

**1. Brand Recognition Test:**
- Prompt: *"Based on the web, explain what [Your Brand] does and who it's for."*
- Pass: ChatGPT accurately describes your product and target customer
- Fail: ChatGPT doesn't know you or gives generic/wrong answer

**2. Authority Test:**
- Prompt: *"Based on the web, which brands are most authoritative in [your niche]?"*
- Pass: Your brand mentioned in top 5-10
- Fail: Not mentioned at all

**3. Evidence Test:**
- Prompt: *"Show me case studies or proof that [Your Brand] works."*
- Pass: ChatGPT references your case studies with metrics
- Fail: ChatGPT can't find evidence or mentions competitors only

**4. Insight Recall Test:**
- Prompt: *"What does [Your Brand or Founder] say about [topic in your domain]?"*
- Pass: ChatGPT quotes your content or founder's perspective
- Fail: ChatGPT doesn't know your perspective

**Combined Scoring:**
Use Share of Answers (0-30 points) as primary metric. Use Validation Prompts to diagnose WHY Share of Answers is low if needed.

### 2. Schema Markup (20 points)
Check: https://search.google.com/test/rich-results
- Organization schema: 0-10 points
- Product/Service schema: 0-10 points

### 3. Knowledge Graph Presence (15 points)
Check existence on:
- Google Business Profile: 3 points
- Crunchbase: 3 points
- LinkedIn Company Page: 2 points
- Wikidata: 4 points
- Wikipedia: 3 points (bonus)

### 4. Directory Listings (15 points)
Count listings on G2, Capterra, Product Hunt, etc.
- 0-2 listings: 3 points
- 3-5 listings: 7 points
- 6-8 listings: 11 points
- 9+ listings: 15 points

### 5. Content & Authority (10 points)
- FAQ page with schema: 0-3 points
- Blog/content hub: 0-3 points
- Comparison pages: 0-2 points
- Case studies: 0-2 points

### 6. Reviews & Social Proof (10 points)
Total review count across all platforms:
- 0 reviews: 0 points
- 1-5: 2 points
- 6-15: 4 points
- 16-30: 6 points
- 31-50: 8 points
- 51+: 10 points

### 7. Technical Optimization (10 points)
Website basics (5 points):
- HTTPS, mobile-responsive, fast load, sitemap, robots.txt

Structured data coverage (5 points):
- Schema on homepage, product pages, blog, breadcrumbs, video

**AI Crawler Configuration (Critical):**

Check that AI crawlers can access your site. Add to robots.txt:

```
# Allow AI crawlers (RECOMMENDED for AI visibility)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Googlebot
Allow: /
```

**Common Mistake:** Many sites block AI crawlers by default. If you're not appearing in AI answers, check robots.txt first.

**Verification:**
```bash
# Check your robots.txt
curl -s https://yoursite.com/robots.txt | grep -i "gptbot\|claude\|perplexity"
```

**Server-Side Rendering Check:**
- AI crawlers struggle with heavy JavaScript
- Test: `curl -s https://yoursite.com | grep "[your brand name]"`
- If your brand doesn't appear in raw HTML, AI crawlers can't see it
- Fix: Implement SSR/SSG or pre-rendering for key content pages

## Output Format

```markdown
# AI Visibility Audit Report

**Business:** [Name]
**Date:** [Date]
**Auditor:** [Your name]

## Score Summary
- **Total Score:** __/110 (__%)
- **Industry Average:** ~45/110
- **Top Competitor:** __/110

## Score Breakdown
| Category | Score | Max | Status |
|----------|-------|-----|--------|
| AI Mention Testing | __ | 30 | ❌ Critical |
| Schema Markup | __ | 20 | ⚠️ Needs Work |
| Knowledge Graphs | __ | 15 | ✅ Good |
| Directory Listings | __ | 15 | ... |
| Content & Authority | __ | 10 | ... |
| Reviews | __ | 10 | ... |
| Technical | __ | 10 | ... |

## Key Findings
✅ **Strengths:**
- [What's working]

❌ **Critical Gaps:**
- [Major issues]

⚠️ **Opportunities:**
- [Quick wins]

## Top 3 Quick Wins
1. **[Action]** - Impact: High, Time: [X hours], Score Increase: +[X] points
2. **[Action]** - Impact: Medium, Time: [X hours], Score Increase: +[X] points
3. **[Action]** - Impact: High, Time: [X hours], Score Increase: +[X] points

## Recommended Strategy
[Custom roadmap based on current state]

## Next Steps
Week 1: [Actions]
Week 2: [Actions]
Week 3: [Actions]
Week 4: [Actions]
```

## Testing Queries (Product Questions Only)

**Focus on Product Questions** - questions that show products in answers.

**Test these for your business:**
1. "best [your category] for [audience]" ✅ Shows products
2. "how to [solve problem your service solves]" (Test first - may or may not show products)
3. "[your category] vs [competitor name]" ✅ Shows products
4. "what's the best [specific feature] tool" ✅ Shows products
5. "[your category] for [specific use case]" ✅ Shows products
6. "recommended [your category]" ✅ Shows products
7. "top [your category] [current year]" ✅ Shows products
8. "[your category] comparison" ✅ Shows products
9. "alternative to [competitor]" ✅ Shows products
10. "[your category] reviews" ✅ Shows products

**How to identify Product Questions:**
1. Ask the question in ChatGPT
2. Does the answer mention specific products/brands/tools?
3. ✅ Yes = Product Question (use it)
4. ❌ No = Informational query (skip it)

**Example:**
- ✅ "best social media tool for small business" → Shows Hootsuite, Buffer, Glow Social
- ❌ "what is social media marketing" → Defines concept, no products

## Common Gaps by Score Range

### 0-30 (Critical)
**Typical issues:**
- No schema markup
- Not mentioned by any AI
- <5 directory listings
- No Google Business Profile
- No FAQ or blog content

**Priority fix:** Schema markup + Google Business Profile + 5 directories

### 31-50 (Low)
**Typical issues:**
- Basic schema but incomplete
- Occasional AI mention (position 8-10)
- 5-10 directory listings
- Minimal content (<10 posts)
- Few reviews (<10)

**Priority fix:** Content volume + reviews + complete schema

### 51-70 (Moderate)
**Typical issues:**
- Good schema coverage
- Mentioned in 3-5/10 queries
- 10-20 directory listings
- Some content (20-50 posts)
- Moderate reviews (20-30)

**Priority fix:** Increase content volume (100+ posts) + more reviews

## Automation Tips

**Monthly Tracking Spreadsheet:**
```
| Date | Score | ChatGPT Mentions | Claude Mentions | Perplexity | Notes |
|------|-------|------------------|-----------------|------------|-------|
| 2025-01-01 | 38 | 0/10 | 0/10 | 0/10 | Baseline |
| 2025-02-01 | 52 | 2/10 | 1/10 | 0/10 | Added schema |
| 2025-03-01 | 68 | 5/10 | 4/10 | 2/10 | Content volume |
```

**Automated Testing (Advanced):**
Use OpenAI/Anthropic API to test queries programmatically and log results.

## Deliverables

- Completed audit report (markdown or PDF)
- Score breakdown spreadsheet
- Top 3 quick wins list
- 90-day roadmap
- Monthly tracking template
