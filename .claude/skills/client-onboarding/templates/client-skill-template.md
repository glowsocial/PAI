---
name: {{CLIENT_SLUG}}
description: {{BUSINESS_NAME}} content generation and strategy - {{INDUSTRY}} business in {{LOCATION}}. Personalized skill for ongoing content creation, AI visibility optimization, and brand management.
version: 1.0.0
author: Glow Social AI
category: client
tags: [glow-social-client, {{INDUSTRY_SLUG}}, {{LOCATION_SLUG}}, content-generation]
---

# {{BUSINESS_NAME}} - Client Skill

## BUSINESS OVERVIEW

**Business Name:** {{BUSINESS_NAME}}
**Industry:** {{INDUSTRY}}
**Location:** {{LOCATION}}
**Target Audience:** {{TARGET_AUDIENCE}}
**Unique Value Proposition:** {{UNIQUE_VALUE}}

**Website:** {{WEBSITE}}
**Onboarded:** {{ONBOARD_DATE}}

## AI VISIBILITY BASELINE

**Current AI Visibility Score:** {{AI_SCORE}}%
**Benchmark Category:** {{AI_BENCHMARK}}
**Last Tracked:** {{AI_LAST_TRACKED}}

**Citation Breakdown:**
- ChatGPT: {{CHATGPT_SCORE}}%
- Claude: {{CLAUDE_SCORE}}%
- Perplexity: {{PERPLEXITY_SCORE}}%

**Primary Gaps:**
{{AI_GAPS}}

**Next Review:** {{AI_NEXT_REVIEW}}

## 96 CUSTOM HOOKS

Hooks are stored in Supabase and accessible via:
```sql
SELECT hooks_json FROM custom_hooks WHERE user_id = '{{USER_ID}}';
```

**Hook Categories:**
1. Pain Point Hooks (12)
2. Benefit Hooks (12)
3. Social Proof Hooks (12)
4. Educational Hooks (12)
5. Myth-Busting Hooks (12)
6. Seasonal/Timely Hooks (12)
7. Behind-the-Scenes Hooks (12)
8. Question Hooks (12)

**Most Effective Hooks (Top 5):**
{{TOP_5_HOOKS}}

## BRAND VOICE & TONE

**Voice Characteristics:**
{{VOICE_DESCRIPTION}}

**Tone Guidelines:**
- {{TONE_GUIDELINE_1}}
- {{TONE_GUIDELINE_2}}
- {{TONE_GUIDELINE_3}}

**Words to Use:**
{{PREFERRED_WORDS}}

**Words to Avoid:**
{{AVOIDED_WORDS}}

## CONTENT GENERATION WORKFLOWS

### Generate Social Post

**Quick Command:**
```bash
fabric "
BUSINESS_NAME: {{BUSINESS_NAME}}
BUSINESS_TYPE: {{INDUSTRY}}
LOCATION: {{LOCATION}}
HOOK: [pick from 96 hooks]
THEME: [topic/focus]
FORMAT: [question/myth/story/tip/standard]
TARGET_AUDIENCE: {{TARGET_AUDIENCE}}
" -p generate_social_post --custom
```

**Recommended Frequency:** 3 posts/week (Mon, Wed, Fri)

### Generate Visual Guidance

```bash
fabric "
BUSINESS: {{BUSINESS_NAME}}
POST_CONTENT: [the generated post]
BRAND_COLORS: {{BRAND_COLORS}}
BRAND_STYLE: {{BRAND_STYLE}}
" -p generate_visual_guidance --custom
```

### Adapt Content Across Platforms

```bash
fabric "
ORIGINAL_POST: [Facebook post]
ADAPT_TO: Instagram, Twitter, LinkedIn
BUSINESS: {{BUSINESS_NAME}}
" -p social_multi_adapt --custom
```

## CONTENT STRATEGY

### Weekly Content Mix (60/30/10 Rule)

**60% Educational/Value** (Mon, Wed)
- Tips and how-tos
- Industry insights
- Problem-solving content

**30% Engagement** (Fri)
- Questions
- Behind-the-scenes
- Customer stories

**10% Promotional** (Once/month)
- Special offers
- Service highlights
- Testimonials

### Seasonal Content Calendar

**{{SEASON_1}}:** {{SEASONAL_TOPICS_1}}
**{{SEASON_2}}:** {{SEASONAL_TOPICS_2}}
**{{SEASON_3}}:** {{SEASONAL_TOPICS_3}}
**{{SEASON_4}}:** {{SEASONAL_TOPICS_4}}

### Topic Clusters

**Primary Topics:**
{{PRIMARY_TOPICS}}

**Secondary Topics:**
{{SECONDARY_TOPICS}}

## AI VISIBILITY OPTIMIZATION

### Monthly AI Visibility Check

```bash
fabric -u "{{WEBSITE}}" -p ai_visibility_score_tracker --custom
```

**Target Score:** {{TARGET_AI_SCORE}}% (within 90 days)

### Quick Wins Already Implemented

{{AI_QUICK_WINS}}

### Ongoing Optimization Tasks

**Month 1-3:**
- {{OPTIMIZATION_TASK_1}}
- {{OPTIMIZATION_TASK_2}}
- {{OPTIMIZATION_TASK_3}}

**Month 4-6:**
- {{OPTIMIZATION_TASK_4}}
- {{OPTIMIZATION_TASK_5}}

**Month 7-12:**
- {{OPTIMIZATION_TASK_6}}
- {{OPTIMIZATION_TASK_7}}

## PERFORMANCE METRICS

### Content Performance Targets

**Engagement Rate:** {{TARGET_ENGAGEMENT}}%
**Reach Growth:** {{TARGET_REACH_GROWTH}}%/month
**Website Clicks:** {{TARGET_CLICKS}}/month
**Inquiry Rate:** {{TARGET_INQUIRIES}}/month

### Current Performance

**Last 30 Days:**
- Average Engagement: {{CURRENT_ENGAGEMENT}}%
- Total Reach: {{CURRENT_REACH}}
- Website Clicks: {{CURRENT_CLICKS}}
- Inquiries Generated: {{CURRENT_INQUIRIES}}

**Best Performing Post:**
{{BEST_POST_SUMMARY}}

## COMPETITIVE INTELLIGENCE

### Main Competitors

**Competitor 1:** {{COMPETITOR_1}}
- AI Visibility Score: {{COMPETITOR_1_AI_SCORE}}%
- Content Strategy: {{COMPETITOR_1_STRATEGY}}

**Competitor 2:** {{COMPETITOR_2}}
- AI Visibility Score: {{COMPETITOR_2_AI_SCORE}}%
- Content Strategy: {{COMPETITOR_2_STRATEGY}}

**Competitor 3:** {{COMPETITOR_3}}
- AI Visibility Score: {{COMPETITOR_3_AI_SCORE}}%
- Content Strategy: {{COMPETITOR_3_STRATEGY}}

### Competitive Advantages

{{COMPETITIVE_ADVANTAGES}}

### Opportunity Gaps

{{OPPORTUNITY_GAPS}}

## QUICK REFERENCE

### Generate This Week's Content

```bash
# Monday post (Educational)
fabric "BUSINESS_NAME: {{BUSINESS_NAME}}, HOOK: [educational hook], FORMAT: tip" -p generate_social_post --custom

# Wednesday post (Value)
fabric "BUSINESS_NAME: {{BUSINESS_NAME}}, HOOK: [value hook], FORMAT: standard" -p generate_social_post --custom

# Friday post (Engagement)
fabric "BUSINESS_NAME: {{BUSINESS_NAME}}, HOOK: [engagement hook], FORMAT: question" -p generate_social_post --custom
```

### Check AI Visibility

```bash
fabric -u "{{WEBSITE}}" -p ai_visibility_score_tracker --custom
```

### Analyze Competitor

```bash
fabric -u "{{COMPETITOR_WEBSITE}}" -p ai_visibility_strategy_analyze_competitor --custom
```

### Optimize Content Semantics

```bash
fabric "POST_CONTENT: [your post]" -p ai_visibility_strategy_optimize_content_semantics --custom
```

## SUPPORT & ESCALATION

**Primary Contact:** {{PRIMARY_CONTACT_NAME}}
**Email:** {{PRIMARY_CONTACT_EMAIL}}
**Phone:** {{PRIMARY_CONTACT_PHONE}}

**Glow Social Dashboard:** https://app.glowsocial.com/dashboard
**Supabase User ID:** {{USER_ID}}

## NOTES & OBSERVATIONS

{{CUSTOM_NOTES}}

---

**Last Updated:** {{LAST_UPDATED}}
**Managed By:** Glow Social AI (Kai)
**Skill Version:** 1.0.0
