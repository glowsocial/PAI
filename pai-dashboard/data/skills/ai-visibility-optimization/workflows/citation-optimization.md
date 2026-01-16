# Citation Optimization Workflow

Get mentioned by the specific URLs that LLMs cite most often.

## When to Use

- You're mentioned ONCE in an answer, want to be mentioned MULTIPLE times
- Want to improve Share of Answers for important Product Questions
- Identified key competitor citations you need to infiltrate
- Month 2-3 of AEO strategy (after foundational pages exist)

## The Strategy

**Core Insight from Graphite:**
> "What I find tends to work is you find something that gets mentioned once and then you go create content to basically get mentioned a second time or a third time."

**How LLM RAG Works:**
1. User asks question → LLM runs search
2. Search returns 10-20 URLs (citations)
3. LLM summarizes those citations
4. **The more citations mention you, the more likely you appear in the answer**

**Goal:** Get mentioned by the top 10 cited URLs for your Product Questions.

## Execution

### Step 1: Identify Top Cited URLs

For each of your 10 Product Questions, identify which URLs are cited most often.

**Method:**
1. Ask the Product Question in ChatGPT with web search enabled
2. Note the citation URLs (blue links in answer)
3. Ask the SAME question 3 more times (answers vary)
4. Track which URLs appear most frequently

**Example for "best social media tool for small business":**

Run 1 citations:
- forbes.com/best-social-media-tools
- nerdwallet.com/social-media-comparison
- techcrunch.com/social-media-guide
- hootsuite.com/blog/social-tools
- buffer.com/resources/best-tools

Run 2 citations:
- forbes.com/best-social-media-tools (repeat)
- nerdwallet.com/social-media-comparison (repeat)
- entrepreneur.com/social-tools
- sproutsocial.com/insights/best-tools
- later.com/blog/social-media-tools

Run 3 citations:
- forbes.com/best-social-media-tools (repeat - 3 times total)
- nerdwallet.com/social-media-comparison (repeat - 3 times total)
- pcmag.com/picks/best-social-media
- hootsuite.com/blog/social-tools (repeat)

**Top Cited URLs for this question:**
1. forbes.com/best-social-media-tools (appeared 3/3 times)
2. nerdwallet.com/social-media-comparison (appeared 3/3 times)
3. hootsuite.com/blog/social-tools (appeared 2/3 times)

**Repeat this for all 10 Product Questions.**

### Step 2: Analyze Citation Landscape

Create a spreadsheet tracking:

| Product Question | Top Cited URL | Frequency | Do They Mention Us? | Opportunity |
|------------------|---------------|-----------|---------------------|-------------|
| best social media tool for small business | forbes.com/... | 3/3 | No | High |
| best social media tool for small business | nerdwallet.com/... | 3/3 | No | High |
| automated social media posting | techcrunch.com/... | 2/3 | No | Medium |
| social media scheduling tools | buffer.com/... | 3/3 | Yes | Maintain |

**Categories:**
- **High Opportunity**: Top cited URL (3/3), doesn't mention you yet
- **Medium Opportunity**: Cited 2/3 times, doesn't mention you
- **Maintain**: Already mentions you, keep relationship strong
- **Low Priority**: Rarely cited (1/3 or less)

### Step 3: Citation Acquisition Strategy

For HIGH OPPORTUNITY URLs, use these tactics to get mentioned:

#### Tactic 1: Relationship Building
**Best for:** Publisher sites (Forbes, NerdWallet, TechCrunch)

1. Find the author of the article
2. Connect on LinkedIn or Twitter
3. Engage with their content for 2-4 weeks
4. Send personalized pitch:

```
Subject: Update for your [article title]

Hi [Author],

I loved your article on [topic]. I noticed it doesn't include [your product], which [unique differentiator].

We'd be a great addition to your comparison because:
- [Specific feature/price/use case]
- [Social proof: X customers, Y reviews]
- [Unique angle they don't cover]

Would you be open to adding us to your list? Happy to provide screenshots, pricing details, or answer any questions.

[Your name]
[Your product]
```

#### Tactic 2: Data/Research Contribution
**Best for:** Industry blogs and resource sites

Create valuable research they'll want to cite:

1. Survey your customers (100+ responses)
2. Publish original research report
3. Pitch to citation URLs:

```
Subject: Original research for [their topic]

Hi [Author],

We just published research on [topic related to their article]:
- Surveyed 500 small businesses on social media usage
- Found [surprising insight]
- Full report: [link]

Thought this might be useful for your [article name]. Feel free to cite our findings.

Best,
[Your name]
```

#### Tactic 3: Expert Contribution
**Best for:** Roundup articles and expert quote posts

Offer expert quotes or tips:

```
Subject: Expert contribution for [article]

Hi [Author],

I see you feature expert insights in your articles. I'm the founder of [product] and have [credentials/experience].

Would you be interested in a quote on:
- [Relevant topic 1]
- [Relevant topic 2]

Happy to provide a quick 2-3 sentence expert take for your next update.

Best,
[Your name]
```

#### Tactic 4: Create Comparison Content
**Best for:** Owned citation opportunities

Create your OWN comparison pages that get cited:

1. Write "[Your Product] vs [Competitor A]" comparison page
2. Write "[Your Product] vs [Competitor B]" comparison page
3. Write "Top 10 [Category] Tools (Including [Your Product])" listicle
4. Optimize these pages for SEO + AEO

**Goal:** Get YOUR comparison page to become a top citation.

#### Tactic 5: Product Hunt / G2 / Capterra
**Best for:** Tech/SaaS products

Launch on platforms that get cited:

1. Product Hunt launch (gets cited by TechCrunch, Hacker News)
2. Build G2 profile with 15+ reviews (gets cited by comparison articles)
3. Capterra presence with 10+ reviews (gets cited by software roundups)

**Result:** These platforms become citations that mention you.

### Step 4: Track Citation Growth

Monitor monthly:

**Citation Tracking Spreadsheet:**

| Month | Product Question | Your Mentions in Citations | Total Citations | Citation % |
|-------|------------------|----------------------------|----------------|------------|
| Jan | best social media tool | 0/10 | 10 | 0% |
| Feb | best social media tool | 2/10 | 10 | 20% |
| Mar | best social media tool | 4/10 | 10 | 40% |

**Goal:** Increase "Citation %" each month for top Product Questions.

### Step 5: Multi-Mention Strategy

Once you're mentioned ONCE, optimize to be mentioned MULTIPLE TIMES in the same answer.

**Graphite's insight:**
> "Find something that gets mentioned once and then you go create content to basically get mentioned a second time or a third time."

**How:**
1. If Forbes mentions you, get NerdWallet to mention you too
2. Create YOUR OWN listicle that gets cited (3rd mention)
3. Get mentioned on Reddit/Quora (4th mention)
4. Launch on Product Hunt (5th mention)

**Result:** You appear 5 times in the citation set = very likely to be suggested by LLM.

## Success Metrics

**Month 1 (Baseline):**
- Map top 10 cited URLs for each Product Question
- Identify HIGH opportunity URLs (cited 3/3 times, don't mention you)
- Outreach to 5 HIGH opportunity citations

**Month 2:**
- Get mentioned by 2-3 new citation URLs
- Citation % increases from 0% to 20-30%
- Share of Answers increases

**Month 3:**
- Get mentioned by 5+ citation URLs
- Citation % reaches 40-50%
- Multi-mentions start appearing (mentioned 2-3 times per answer)

**Month 6:**
- Mentioned by 7-8 of top 10 citation URLs
- Citation % reaches 70%+
- Regularly appear with multi-mentions in answers

## Common Mistakes

❌ **Targeting low-frequency citations** - Focus on URLs cited 3/3 times, not 1/3
❌ **Generic outreach** - Personalize every pitch, reference their specific article
❌ **One-and-done** - Follow up 2-3 times if no response
❌ **Ignoring owned citations** - Create YOUR OWN comparison pages
❌ **No tracking** - Track citation % monthly to measure progress

✅ **Do this instead:**
- Target top cited URLs only (3/3 frequency)
- Personalize every outreach message
- Follow up persistently but respectfully
- Create owned comparison content that gets cited
- Track citation % as your primary KPI

## Integration with Other Workflows

**After completing:**
- [content-strategy.md](content-strategy.md) - Need foundational AEO topic pages first
- [audit.md](audit.md) - Identify which Product Questions need citation work

**Use alongside:**
- Review generation (citations love social proof)
- Directory submissions (directories become citations)

## Tools Needed

- Spreadsheet for citation tracking
- ChatGPT Plus (web search to see citations)
- Perplexity Pro (shows citations clearly)
- LinkedIn (for relationship building)
- Email (for outreach)

## Why This Works (The 5%)

Citation Optimization is one of the 3 pillars of "The 5% of AEO" according to Graphite.

**LLM RAG Process:**
1. Search runs for question
2. Returns 10 URLs (citations)
3. LLM reads all 10 citations
4. Summarizes and suggests products **mentioned most often across citations**

**Math:**
- 0/10 citations mention you = 0% chance LLM suggests you
- 3/10 citations mention you = 30% chance
- 7/10 citations mention you = 70% chance
- Multiple mentions across citations = 90%+ chance

**Citation Optimization directly improves Share of Answers.**

## Real Example: Glow Social

**Product Question:** "best social media tool for small business"

**Current State (Month 0):**
- Top citations: Forbes, NerdWallet, TechCrunch, Hootsuite blog, Buffer blog
- Glow Social mentioned: 0/10 citations (0%)
- Share of Answers: 0%

**After Citation Optimization (Month 3):**
- Added to Forbes listicle via expert outreach
- Mentioned in NerdWallet comparison via data contribution
- Launched on Product Hunt → TechCrunch picked it up
- Created "Glow Social vs Hootsuite" comparison page that now gets cited
- Reddit answer mentions Glow Social (5th citation)

**Result:**
- Glow Social mentioned: 5/10 citations (50%)
- Share of Answers: 40% (appears in 4/10 ChatGPT responses)
- Traffic from LLMs: 500 visits/month

---

**Citation Optimization is the fastest path to improving Share of Answers for existing content.**
