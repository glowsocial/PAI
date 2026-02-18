---
name: marketing-patterns
description: Custom Fabric patterns for marketing, sales copy, and content generation - 70+ specialized patterns for social media, email marketing, VSLs, sales letters, SEO, and copywriting. USE WHEN writing marketing copy, creating sales content, generating social posts, optimizing titles, or any marketing/sales copywriting task.
---

# Marketing Patterns Skill

**Domain:** Marketing copy, sales content, and social media generation

## Pattern Locations

**Custom Patterns:** `~/Documents/projects/fabric/data/my_patterns/` (73 patterns)
**BethanyWorks Patterns:** `~/Documents/projects/fabric/data/BethanyWorks/patterns/` (16 patterns)

## When to Activate

**Primary Use Cases:**
- Writing marketing or sales copy
- Generating social media content
- Creating email campaigns
- Writing sales letters or VSLs
- Optimizing titles and headlines
- Client onboarding (Glow Social)
- SEO and AI visibility optimization
- Content strategy and planning

## Intent Routing

Route user requests to workflows:

| User Intent | Workflow File |
|-------------|---------------|
| "onboard new client", "generate hooks" | `workflows/onboard-client.md` |
| "create social post", "generate content" | `workflows/generate-social.md` |
| "write email campaign", "email sequence" | `workflows/email-campaign.md` |
| "VSL script", "video sales letter" | `workflows/vsl-script.md` |
| "sales letter", "sales page" | `workflows/sales-letter.md` |
| "analyze performance", "why isn't this working" | `workflows/analyze-performance.md` |
| "generate titles", "optimize headline" | `workflows/optimize-titles.md` |

## Common Workflows

**Quick Access:**
- [Onboard Client](workflows/onboard-client.md) - Generate 96 hooks for new clients
- [Generate Social](workflows/generate-social.md) - Daily social content creation
- [Email Campaign](workflows/email-campaign.md) - High-converting email sequences
- [VSL Script](workflows/vsl-script.md) - Video sales letter scripts
- [Sales Letter](workflows/sales-letter.md) - Long-form sales pages
- [Analyze Performance](workflows/analyze-performance.md) - Content optimization
- [Optimize Titles](workflows/optimize-titles.md) - Headlines and subject lines

## Pattern Categories (73 Total)

### Content Generation & Social Media (12 patterns)
- onboard_generate_96_hooks, generate_social_post, social_multi_adapt
- glow_social_voice, bethanyworks_voice
- analyze_performance, debug_existing_feature

### Marketing & Sales (28 patterns)
**Frameworks:** 10_20_3_formula, 10x_aov_rule, ascension_model, level_3_customer
**Copywriting:** awareness_bridge, five_awareness, problem_solution, value_bombs
**Email:** 10x_email_campaign, power_offer_email, soft_pitch_email, cold_outreach
**Sales Systems:** sales_call_diagnosis, pain_funnel, dm_setter_scripts
**Long-Form:** sales_letter, vsl_framework, long_form_tsl, webinar_funnel

### SEO & AI Visibility (12 patterns)
- ai_visibility_strategy, ai_visibility_strategy_audit
- ai_visibility_strategy_analyze_competitor, ai_visibility_strategy_generate_schema
- llm_seo_audit

### Title & Headline Generation (10 patterns)
- title_optimization_suite, create_how_to_titles, create_list_titles
- generate_question_titles, generate_comparison_titles, generate_local_titles

### BethanyWorks Specific (4 patterns)
- bethanyworks_voice, bethanyworks_blog, bethanyworks_seo, bethanyworks_content_audit

## Basic Execution

```bash
# Use custom patterns
fabric "your content" -p pattern_name --custom

# Specify pattern directory
fabric "your content" -p pattern_name --pattern-dir ~/Documents/projects/fabric/data/my_patterns

# Set custom patterns path
export FABRIC_CUSTOM_PATTERNS=~/Documents/projects/fabric/data/my_patterns:~/Documents/projects/fabric/data/BethanyWorks/patterns
```

## Key Patterns for Glow Social

**Most Used (Daily):**
1. `onboard_generate_96_hooks` - Every new client
2. `generate_social_post` - Daily content generation
3. `glow_social_voice` - Brand consistency

**Revenue Generators (Weekly/Monthly):**
1. `10x_email_campaign` - High-converting campaigns
2. `sales_letter` - Major offers
3. `vsl_framework` - Video marketing
4. `power_offer_email` - Irresistible offers

**Client Retention (Ongoing):**
1. `content_60_30_10` - Balanced content strategy
2. `content_multiplication` - Content ROI maximization
3. `social_multi_adapt` - Cross-platform efficiency
4. `analyze_performance` - Optimization insights

## Resources

- **Master Index:** `~/Documents/projects/fabric/data/my_patterns/MASTER_INDEX.md`
- **Pattern Template:** `~/Documents/projects/fabric/data/patterns/official_pattern_template/`
- **Custom Patterns:** Your marketing second brain - 73 proven frameworks

## Your Marketing Second Brain

This is your marketing expertise, systematized:
- 73 proven frameworks for copywriting and content
- Battle-tested on real clients and projects
- Structured knowledge from books, courses, practice
- Reusable templates for every marketing scenario
- Consistent voice across all content
- Scalable - write once, use everywhere
