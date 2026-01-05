# Audit Workflow

**Trigger:** "audit [domain]", "visibility audit", "check AI visibility for [business]"

## Process

### Step 1: Gather Business Context

Ask or research:
- Business name and domain
- Industry/vertical
- Target audience (B2B/B2C, company size, geography)
- Main competitors (for comparison queries)
- Key services/products

### Step 2: AI Mention Testing (30 points)

Test 5-10 non-branded queries across platforms:

**Platforms to test:**
1. ChatGPT (chat.openai.com)
2. Claude (claude.ai)
3. Perplexity (perplexity.ai)
4. Google (check for AI Overview)

**Query Templates:**
- "Best [industry] [service] for [audience]"
- "[Service] consultants/agencies in [location]"
- "Who to hire for [problem]"
- "Top [specialty] experts 2025"
- "[Competitor] alternatives"
- "[Brand name] [keyword]" (brand test)

**Scoring:**
- 0 mentions = 0-5 points
- 1-2 category mentions = 10 points
- 3-4 mentions = 15 points
- 5-6 mentions = 20 points
- 7+ mentions with good positioning = 25-30 points

### Step 3: Schema Markup Analysis (20 points)

Check using browser DevTools or [Rich Results Test](https://search.google.com/test/rich-results).

**Look for:**
- [ ] FAQPage schema (5 pts) - CRITICAL
- [ ] Organization/LocalBusiness (3 pts)
- [ ] Person schema for founders/consultants (3 pts)
- [ ] Product/Service schema (3 pts)
- [ ] Article/BlogPosting (2 pts)
- [ ] Review/AggregateRating (2 pts)
- [ ] HowTo schema (1 pt)
- [ ] BreadcrumbList (1 pt)

### Step 4: Knowledge Graph Presence (15 points)

Check these platforms:
- [ ] Google Business Profile - verified? (3 pts)
- [ ] LinkedIn Company Page - active? (2 pts)
- [ ] Crunchbase listing (3 pts)
- [ ] Wikidata entry (4 pts)
- [ ] Wikipedia page (3 pts)

### Step 5: Directory Listings (15 points)

**For B2B/Software:**
- [ ] G2 (3 pts)
- [ ] Capterra (3 pts)
- [ ] Clutch.co (3 pts)
- [ ] GoodFirms (2 pts)
- [ ] Product Hunt (2 pts)
- [ ] Industry-specific directories (2 pts)

**For Local Businesses:**
- [ ] Google Business Profile (5 pts)
- [ ] Yelp (3 pts)
- [ ] Industry directories (4 pts)
- [ ] Local chambers/associations (3 pts)

### Step 6: Content & Authority (10 points)

- [ ] FAQ page with schema (3 pts)
- [ ] Blog/content hub with 20+ articles (2 pts)
- [ ] Case studies with metrics (2 pts)
- [ ] Comparison/alternative pages (2 pts)
- [ ] Visible credentials/certifications (1 pt)

### Step 7: Reviews & Social Proof (10 points)

- [ ] Google Reviews: 10+ reviews, 4.5+ stars (3 pts)
- [ ] G2/Capterra reviews: 5+ reviews (3 pts)
- [ ] Testimonials on website (2 pts)
- [ ] LinkedIn recommendations (2 pts)

### Step 8: Technical Optimization (10 points)

- [ ] HTTPS enabled (1 pt)
- [ ] robots.txt allows AI crawlers (3 pts)
- [ ] Page load < 3 seconds (2 pts)
- [ ] Mobile responsive (1 pt)
- [ ] XML sitemap exists (1 pt)
- [ ] 10+ pages indexed (2 pts)

Check robots.txt for:
```
GPTBot, ChatGPT-User, Claude-Web, ClaudeBot, PerplexityBot, Google-Extended
```
Should be `Allow: /` not `Disallow: /`

## Step 9: Generate Report

Use template at:
`~/Documents/projects/ai-visibility-system/templates/audit-report.md`

Fill in all sections with findings from Steps 1-8.

**Calculate total score:**
```
AI Mentions:     __/30
Schema:          __/20
Knowledge Graph: __/15
Directories:     __/15
Content:         __/10
Reviews:         __/10
Technical:       __/10
─────────────────────
TOTAL:           __/110
```

### Step 10: Identify Quick Wins

Prioritize by:
1. **High impact + low effort** (do first)
2. **High impact + high effort** (plan for)
3. **Low impact + low effort** (batch together)
4. **Low impact + high effort** (skip or defer)

Common quick wins by gap:
- No directories → Submit to Clutch, GoodFirms (2-3 hours)
- No FAQ schema → Create FAQ page with schema (4-6 hours)
- No reviews → Request 5 testimonials (1-2 hours outreach)
- Bad robots.txt → Add AI crawler rules (30 min)

### Step 11: Create 90-Day Roadmap

**Week 1-2:** Foundation (directories, technical fixes)
**Week 3-4:** Content infrastructure (FAQ, service pages)
**Month 2:** Authority building (case studies, reviews)
**Month 3:** Scale (content volume, guest posts)

### Step 12: Save Report

Save to:
```
~/Documents/projects/ai-visibility-system/client-deliverables/[client-name]-audit-[YYYY-MM-DD].md
```

---

## Output Format

The final deliverable should include:
1. Executive summary with score
2. Category-by-category breakdown
3. Strengths (what's working)
4. Critical gaps (what's broken)
5. Top 5 quick wins with time estimates
6. 90-day roadmap
7. Expected score progression
