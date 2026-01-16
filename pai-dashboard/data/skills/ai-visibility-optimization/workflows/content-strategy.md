# Content Strategy Workflow

AEO topic-based strategy optimized for LLM RAG (Retrieval Augmented Generation).

## When to Use

- Planning content calendar for AI visibility
- Client asking "what should I publish?"
- Need to dominate AI search results
- Building authority in specific topic area

## The Strategy

**Core Principle:** LLMs don't crawl like Google. They cross-reference authority. They mention what they can verify across structured, factual, and linked pages. You don't need 100 blogs - you need pages that train the machine who you are.

**Focus:** The 5% of AEO that drives impact:
1. **New Pages** - Create landing pages for AEO topics you haven't covered
2. **Content Enhancement** - Fill gaps on existing pages
3. **Citation Optimization** - Get mentioned by URLs that LLMs cite

**Avoid:** Technical AEO (page speed, schema audits) - wastes time, drives no impact.

**Format:** Topic cluster pages (1500-3000 words)
**Structure:** One page targets 100-500 related questions
**Schema:** Article schema on every page
**Question Filter:** Product Questions only (questions that show products in answers)

## Quick Start: The 3 Core Pages First

Before creating 15-20 topic pages, start with these 3 foundation pages. These train LLMs on WHO you are and WHY you're authoritative.

### Page 1: Context Page (Brand Definition)

Your brand's source of truth for machines.

**What to include:**
- What your brand does (clear category + product)
- Founding story (dates, people, locations)
- Links to credible mentions (press, podcasts, social proof)
- Schema markup: `Organization`, `Founder`, `SoftwareApplication`

**Example URL:** `/about` or `/company`

**Validation Prompt:**
Ask ChatGPT: *"Explain what [your brand] does and who founded it."*
If ChatGPT struggles, your Context Page is incomplete.

**Example for Glow Social:**
```markdown
# About Glow Social

Glow Social is an AI-powered social media content generation platform founded in 2024 by [Founder Name] to help small businesses create consistent, engaging social media content without the time investment.

## What We Do
Glow Social generates 30 days of custom social media content in minutes using the 196 Hook System - a proven content framework with industry-specific templates.

## Our Story
Founded in [City, State] in 2024, Glow Social was built to solve the #1 challenge small business owners face: creating social media content consistently while running their business.

## Press & Mentions
- Featured in [Publication]
- Podcast: [Link to podcast appearance]
- Case study: [Link to customer success story]

[JSON-LD Schema: Organization + Founder + SoftwareApplication]
```

### Page 2: Proof Page (Evidence Hub)

This is where credibility becomes code. LLMs love quantifiable signals.

**Structure:**
- 3-5 case studies with quantifiable metrics
- Client logos (with alt text)
- Data-backed results in `<table>` or `<ul>` formats
- Schema: `Article`, `CaseStudy`, `Review`

**Example URL:** `/case-studies` or `/results`

**Why it works:** Your metrics aren't just bragging rights - they're retrieval anchors for LLMs.

**Example for Glow Social:**
```markdown
# Glow Social Case Studies

## Case Study 1: Real Estate Agent Saves 10 Hours/Week

**Client:** Jane D., Real Estate Agent in Austin, TX
**Challenge:** Spending 12 hours/week creating social media content
**Solution:** Used Glow Social's 196 Hook System to batch create 30 days of content
**Results:**
- Time savings: 10 hours/week (12 hours → 2 hours)
- Posting consistency: 100% (up from 40%)
- Engagement: 3x increase
- New leads: 15 new leads in 90 days from social media

## Case Study 2: Construction Company Increases Engagement 4x

**Client:** ABC Construction, Seattle, WA
**Challenge:** Inconsistent posting, low engagement
**Solution:** Automated content generation with industry-specific templates
**Results:**
- Posting frequency: 5x increase (1 post/week → 5 posts/week)
- Engagement rate: 4x increase
- Website traffic: 60% increase from social
- New project inquiries: 12 in 60 days

[JSON-LD Schema: CaseStudy + Review]
```

### Page 3: Insight Page (Authority Layer)

This is your training data. You're not writing for search - you're writing for recall.

**Structure:**
- 10+ first-principle insights about your domain
- Long-tail context like "Why X matters in [industry]"
- Outbound links to other trusted sources
- Schema: `FAQPage` + `HowTo`

**Example URL:** `/insights` or `/resources` or `/blog`

**Why it works:** When LLMs learn from this, you start appearing in responses like: "According to Glow Social..." or "[Founder] explains..."

**Example for Glow Social:**
```markdown
# Social Media Marketing Insights for Small Business

## Why Batch Content Creation Works Better Than Daily Posting

Most small businesses try to create social media content daily. This is exhausting and leads to inconsistency.

Batch creation (creating 30 posts in one session) works better because:
1. Context switching costs 23 minutes per interruption (University of California study)
2. Creative momentum builds when you stay in "creation mode"
3. You can template and reuse structures across posts

According to [Link to external authority source], businesses that batch create see 5-10x time savings.

## The 196 Hook System: Why Templates Accelerate Content Creation

Content templates eliminate the "blank page" problem. The 196 Hook System is based on proven content frameworks that work across industries.

Research shows [Link to study] that decision fatigue reduces creative output. Templates remove decisions, freeing energy for customization.

## Why Social Media Consistency Matters More Than Quality

Most businesses fail at social media because they aim for perfection. B+ content posted consistently beats A+ content posted sporadically.

[Link to engagement study] shows that posting 5x/week with B+ quality drives 3x more engagement than posting 1x/week with A+ quality.

[10+ more insights with outbound links]

[JSON-LD Schema: FAQPage + HowTo]
```

### The Architecture: Internal Linking Loop

Create a circular link between all 3 core pages:

`/about` → `/case-studies` → `/insights` → `/about`

This ensures that when one page is indexed, your entire authority network is mapped.

**Example internal links:**
- About page: "See our [case studies] and [insights]"
- Case studies page: "Learn more [about Glow Social] and read our [insights]"
- Insights page: "Discover [who we are] and view [results]"

### Validation Testing

**Test your authority with these prompts:**

1. **Brand Recognition Test:**
   - Prompt: *"Based on the web, explain what [Your Brand] does and who it's for."*
   - Success: ChatGPT accurately describes your product and target customer

2. **Authority Test:**
   - Prompt: *"Based on the web, which brands are most authoritative in [your niche]?"*
   - Success: Your brand is mentioned in the top 5-10

3. **Evidence Test:**
   - Prompt: *"Show me case studies or proof that [Your Brand] works."*
   - Success: ChatGPT references your case studies with metrics

4. **Insight Recall Test:**
   - Prompt: *"What does [Your Brand or Founder] say about [topic]?"*
   - Success: ChatGPT references your insights page

**If any test fails:** Your core pages need more structured data, more external links, or better schema markup.

### Quick Start Timeline

**Week 1:** Create the 3 core pages
- Day 1-2: Context Page (About)
- Day 3-4: Proof Page (Case Studies)
- Day 5-7: Insight Page (10 insights with outbound links)

**Week 2:** Implement schema markup and internal linking loop

**Week 3:** Validation testing with prompts above

**Week 4+:** Begin creating AEO topic pages (see execution steps below)

---

## Execution

### Step 1: Identify AEO Topics

An AEO Topic is a cluster of many questions with similar intent. Start by identifying 10-20 core topics for your business.

**Example AEO Topics for Glow Social:**
1. "Social media content generation for small business"
2. "Automated social media posting"
3. "Social media scheduling tools"
4. "Content ideas for social media marketing"
5. "How to create social media content faster"

**Sources for topic ideas:**
- Customer support tickets (what do people ask?)
- Sales call common questions
- Competitor page topics
- Industry forums (Reddit, Quora)
- Your product's core use cases

### Step 2: Question Research (Per Topic)

For EACH AEO topic, identify 100-500 related questions.

**Question Types (Head, Mid-Tail, Long-Tail):**

**Head Questions (High volume, high competition)**
- "social media content generator"
- "best social media tools"
- "automated social media"

**Mid-Tail Questions (Medium volume, moderate competition)**
- "social media content generator for small business"
- "best social media tools for solopreneurs"
- "automated social media scheduling"

**Long-Tail Questions (Low volume, low competition)**
- "social media content generator for real estate agents"
- "best social media tools for real estate with MLS integration"
- "automated social media scheduling for construction companies"

**Filter for Product Questions:**
Test questions in ChatGPT/Claude/Perplexity:
- ✅ Keep: Questions that show products in answers
- ❌ Remove: Informational questions with no product mentions

**Question Sources:**
- ChatGPT: "Generate 100 questions people ask about [AEO topic]"
- "People also ask" in Google
- AnswerThePublic.com
- Competitor FAQ pages
- Related searches in Perplexity

### Step 3: Group Questions Into Topics

Use keyword/question clustering:
- Questions with similar intent = same AEO topic
- Each topic = 1 landing page
- That page targets all related questions

**Example Topic Cluster:**
**AEO Topic**: "How to create social media content faster"
**Question cluster (200+ questions)**:
- "how to create social media content in bulk"
- "fastest way to generate social posts"
- "automate social media content creation"
- "batch create social media posts"
- "social media content in 5 minutes"
- "quick social media content ideas"
- etc. (200 more variations)

### Step 4: Content Production Template

**AEO Topic Landing Page Structure:**

```markdown
# [Main Topic Question As H1]
Example: "How to Create Social Media Content Faster (Complete Guide)"

## Direct Answer (First Paragraph)
[Answer the core question in 2-3 sentences immediately]
[Include your product naturally if relevant]

## Table of Contents
- [Section covering sub-question cluster 1]
- [Section covering sub-question cluster 2]
- [Section covering sub-question cluster 3]
- etc.

## [H2: First Sub-Topic]
Answers 20-50 related questions

### [H3: Specific variation]
Direct answer, 1-2 paragraphs

### [H3: Another specific variation]
Direct answer, 1-2 paragraphs

## [H2: Second Sub-Topic]
Answers 20-50 more related questions

### [H3: Specific variation]
...

## [H2: Third Sub-Topic]
...

## Comparison Tables
[If relevant: product comparisons, feature matrices]

## Summary / Key Takeaways
[Bulleted list of main points]

## Next Steps / CTA
[Link to your product/service]

---

**Related Topics:**
- [Link to related topic cluster 1]
- [Link to related topic cluster 2]
- [Link to related topic cluster 3]
```

**Real Example:**

```markdown
# How to Create Social Media Content Faster: Complete Guide for Small Businesses

Creating social media content faster comes down to three strategies: batch creation (create 30 posts in one session), content templates (reusable frameworks), and automation tools like Glow Social that generate custom content ideas in minutes. Most small businesses can reduce content creation time from 10 hours/week to under 1 hour/week.

## Table of Contents
- Batch Creation Strategies
- Content Templates & Frameworks
- Automation Tools That Work
- Time-Saving Workflows
- Common Mistakes to Avoid

## Batch Creation Strategies

Batch creation means creating multiple posts in a single session instead of creating content daily. This is the fastest method for most businesses.

### How to Batch Create 30 Days of Content in 2 Hours

1. Pick one day per month as "content day"
2. Gather 30 content ideas (use the 196 Hook System or similar framework)
3. Write all captions at once
4. Create/source all images at once
5. Schedule everything in your tool

Most businesses report 5-10x time savings with batch creation.

### Best Times to Batch Create Content

The best time to batch create is:
- First Monday of each month (plan the month ahead)
- Sunday afternoons (prepare the week)
- After successful sales calls (capture momentum)

### How Many Posts Should You Create in a Batch?

Start with 7-10 posts (one week). Once comfortable, batch create 30 posts (full month). Advanced users batch create 90 days at a time.

## Content Templates & Frameworks

Templates eliminate the "blank page" problem. Reusable frameworks speed up creation by 70%.

### The 196 Hook System for Social Media

The 196 Hook System is a content framework with 196 customizable content ideas:
- Organized by industry and audience type
- Each hook is a proven content format
- Customize hooks to your business in seconds

Example hooks:
- "3 mistakes [industry] makes with [problem]"
- "Behind the scenes: How we [process]"
- "Client result: [Specific outcome]"

[Link to Glow Social's 196 Hook System]

### 5-Minute Social Post Template

**Template:**
1. Line 1: Hook (question or bold statement)
2. Lines 2-4: Problem description
3. Lines 5-7: Solution steps
4. Line 8: CTA or question to audience

**Example:**
Struggling to post consistently?
Most small businesses fail at social media because they try to create content daily. That's exhausting.
Instead: Batch create 30 posts in one session. Use templates. Schedule everything.
Result: 1 hour/month vs 10 hours/week.
What's stopping you from batch creating?

## Automation Tools That Work

Automation tools generate content ideas, write captions, and schedule posts.

### Best Tools for Automated Content Creation

**Glow Social** (Best for small business)
- Generates 30 days of custom content in 2 minutes
- Uses 196 Hook System for industry-specific ideas
- Includes scheduling and multi-platform support
- $49/month
[Link]

**Hootsuite** (Best for teams)
- Scheduling and collaboration
- No content generation
- $99/month+

**Buffer** (Best for simplicity)
- Simple scheduling
- Limited content ideas
- $60/month

### How to Choose the Right Tool

Choose based on your biggest bottleneck:
- Need content IDEAS? → Glow Social (generates custom ideas)
- Need SCHEDULING only? → Buffer (simple scheduler)
- Need TEAM collaboration? → Hootsuite (team features)

## Time-Saving Workflows

### The 1-Hour/Month Content System

**Week 1 of month:**
- Spend 20 minutes generating 30 content ideas (use Glow Social or 196 Hook System)
- Spend 30 minutes writing captions for all 30 posts
- Spend 10 minutes scheduling

**Weeks 2-4:**
- Nothing. Content auto-posts.

Total time: 1 hour/month for 30 posts.

### Repurposing Content Across Platforms

Create once, post everywhere:
1. Write long-form LinkedIn post (150 words)
2. Shorten to Twitter thread (10 tweets)
3. Pull quote for Instagram (50 words + image)
4. Turn into TikTok script (30 seconds)

One idea = 4 posts = 4x efficiency.

## Common Mistakes to Avoid

### Mistake 1: Creating Content Daily

Daily creation = 10 hours/week. Batch creation = 1 hour/month.

### Mistake 2: No Template or Framework

Without templates, you stare at a blank page for 30 minutes. Use the 196 Hook System or similar framework.

### Mistake 3: Perfectionism

B+ content posted consistently beats A+ content posted sporadically. Aim for "good enough" and publish.

## Summary: How to Create Social Media Content Faster

- **Batch create**: 30 posts in one session (not daily creation)
- **Use templates**: 196 Hook System or similar frameworks
- **Automate**: Tools like Glow Social generate ideas in minutes
- **Repurpose**: One idea = 4 platform-specific posts
- **Accept B+ quality**: Consistency beats perfection

## Get Started with Glow Social

Generate 30 days of custom social media content in 2 minutes with the 196 Hook System.
[Start Free Trial] [View Pricing]

---

**Related Topics:**
- [Best Social Media Scheduling Tools for Small Business]
- [196 Hook System: Complete Guide]
- [How to Batch Create Social Media Content]
```

**Key Structure Notes:**
- Main H1 targets the head question for the AEO topic
- Each H2 targets a cluster of 20-50 related questions
- Each H3 targets specific question variations
- Naturally mentions your product where relevant
- Comprehensive (1500-3000 words)
- Direct answers throughout (LLMs extract snippets)

### Step 5: Publishing Schedule

**Recommended Publishing Cadence:**

**Month 1 (Foundation):**
- Create 5-7 AEO topic landing pages
- Each page targets 100-300 questions
- Focus on: Your core product use cases

**Month 2-3 (Expansion):**
- Create 5-7 MORE topic pages
- Total: 10-15 comprehensive pages
- Focus on: Competitor comparisons, adjacent topics

**Ongoing:**
- Create 2-3 new topic pages/month
- Enhance existing pages (add sections, answer more questions)
- Update pages monthly (freshness signals authority)

**Why fewer, better pages?**
- 15 comprehensive pages targeting 3000 questions > 90 thin pages targeting 90 questions
- LLMs reward depth and comprehensiveness
- Easier to maintain and update
- Better for Citation Optimization (high-quality pages get cited more)

### Step 5: SEO & Schema Optimization

**Complete Schema Markup Strategy:**

**1. Organization Schema (Homepage or About Page):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Glow Social",
  "url": "https://glowsocial.com",
  "logo": "https://glowsocial.com/logo.png",
  "description": "AI-powered social media content generation platform",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "[Founder Name]"
  },
  "sameAs": [
    "https://twitter.com/glowsocial",
    "https://linkedin.com/company/glowsocial"
  ]
}
```

**2. SoftwareApplication Schema (Product Page):**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Glow Social",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "49",
    "priceCurrency": "USD"
  }
}
```

**3. Article Schema (Topic Pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Question as title]",
  "description": "[First paragraph]",
  "datePublished": "[Date]",
  "dateModified": "[Date]",
  "author": {
    "@type": "Person",
    "name": "[Author]"
  }
}
```

**4. CaseStudy/Review Schema (Proof Page):**
```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "SoftwareApplication",
    "name": "Glow Social"
  },
  "author": {
    "@type": "Person",
    "name": "[Client Name]"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "reviewBody": "[Case study results]"
}
```

**5. FAQPage Schema (Insight Pages with Q&A):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "[Question]",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "[Answer]"
    }
  }]
}
```

**6. HowTo Schema (Process/Tutorial Pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "[How-to title]",
  "step": [{
    "@type": "HowToStep",
    "text": "[Step description]"
  }]
}
```

**The Invisible Bonus Layer (Technical Optimization):**

✅ **Consistent meta tags across all pages:**
```html
<meta name="description" content="[Clear, concise description]">
<meta property="og:title" content="[Page title]">
<meta property="og:description" content="[Description]">
<meta property="og:image" content="[Image URL]">
```

✅ **JSON-LD linking founder + brand:**
Link Organization schema to Founder schema across multiple pages

✅ **Press links or citations from external sites:**
Link to credible external sources that mention you

✅ **Performance:**
- Fast load (<500ms ideal)
- Minimal JS
- Clean HTML structure

✅ **Machines reward predictability, humans reward clarity**
Use consistent formatting, clear headings, structured data

**Internal Linking:**
- Link to 3-5 related questions in each post
- Create topic clusters (10-15 related questions)
- Breadcrumb navigation
- **Circular linking loop:** About → Case Studies → Insights → About

**URL Structure:**
- `/questions/how-long-does-it-take-to-see-social-media-results/`
- Keep question in URL exactly as asked

## Content Production Workflow

### Batch Production System

**Week 1: Research (4 hours)**
- Identify 100 questions
- Categorize by type
- Prioritize by search volume/importance

**Week 2-4: Batch Writing (10 hours/week)**
- Write 20-30 posts per batch session
- Use template for consistency
- Focus on clarity over perfection

**Ongoing: Scheduling (2 hours/week)**
- Schedule posts in WordPress/CMS
- Add schema markup
- Internal linking
- Quality check

### Tools Needed

- Content calendar spreadsheet
- WordPress (or CMS with scheduling)
- Schema markup plugin (Yoast/RankMath)
- AnswerThePublic (question research)
- Grammarly (quality check)

## Success Metrics

**Month 1:**
- 5-7 AEO topic landing pages published
- Each page targets 100-300 questions
- All with Article schema
- First AI mentions (Share of Answers: 5-10%)

**Month 2:**
- 10-12 total topic pages
- Share of Answers: 15-25%
- Traffic from LLMs increasing
- Citations starting to appear

**Month 3:**
- 15-20 total topic pages
- Share of Answers: 30-40%
- Appearing in 3-4 out of 10 test queries
- Traffic increase: 50-100%

**Month 6:**
- 25-30 topic pages (ongoing enhancement)
- Share of Answers: 50-70%
- Appearing in 7-8 out of 10 test queries
- Dominant in your AEO topics

## Why This Works (The 5% of AEO)

**LLM RAG Behavior:**
1. **LLMs search, then summarize** - They use real-time search (RAG), not static training
2. **Comprehensive pages win** - Pages that answer 100+ questions get cited more
3. **Citations drive mentions** - The more other pages mention you, the more LLMs suggest you
4. **Fresh content matters** - Updated pages signal authority

**AEO vs. Traditional SEO:**
- Traditional SEO: Target individual keywords, create 100 thin pages
- AEO: Target question clusters, create 15 comprehensive pages
- Result: Higher Share of Answers with less content to maintain

## Common Mistakes to Avoid (Based on The 5%)

❌ **Creating 100 thin pages** - AEO rewards comprehensive pages over volume
❌ **Targeting non-Product Questions** - Informational queries don't show products
❌ **Focusing on Technical AEO** - Page speed audits waste time, drive no impact
❌ **Ignoring citations** - You need other sites to mention you
❌ **One-and-done content** - Update pages monthly to signal freshness

✅ **Do this instead (The 5%):**
- 15-20 comprehensive topic pages (not 100 thin pages)
- Target Product Questions only (filter in research phase)
- Skip Technical AEO (focus on content + citations)
- Citation Optimization (get mentioned by top URLs)
- Monthly updates (keep pages fresh)

## Integration with Service Package

**Month 1:** 5-7 AEO topic pages (foundation)
**Month 2:** 5-7 MORE pages (expansion)
**Month 3:** 2-3 new pages + enhance existing (optimization)
**Ongoing:** 2-3 new pages/month + monthly updates

Total after 90 days: 15-20 comprehensive pages targeting 2000-4000 questions = critical mass for AI visibility
