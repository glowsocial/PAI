# Fabric Pattern Naming Convention

## Pattern Categories & Prefixes

### 🏢 Business/Industry Specific
- `biz_[industry]_[action]` - Industry-specific patterns
  - `biz_cpa_hooks` - CPA/accounting firm hooks
  - `biz_roofing_hooks` - Roofing company hooks
  - `biz_hvac_seasonal` - HVAC seasonal content
  - `biz_dental_education` - Dental practice educational content

### 📱 Social Media Platform
- `social_[platform]_[action]` - Platform-specific patterns
  - `social_linkedin_optimize` - Optimize for LinkedIn
  - `social_facebook_adapt` - Adapt for Facebook
  - `social_instagram_caption` - Instagram caption creator
  - `social_twitter_thread` - Twitter thread builder

### ✍️ Content Generation
- `content_[type]_[purpose]` - Content creation patterns
  - `content_hooks_generate` - Generate attention hooks
  - `content_cta_create` - Create calls-to-action
  - `content_story_tell` - Story-based content
  - `content_myth_bust` - Myth-busting posts

### 🎯 Marketing/Strategy
- `marketing_[strategy]_[action]` - Marketing patterns
  - `marketing_competitor_analyze` - Analyze competitor content
  - `marketing_seasonal_ideas` - Seasonal campaign ideas
  - `marketing_local_events` - Local event tie-ins
  - `marketing_urgency_create` - Create urgency (ethically)

### 🎨 Brand Voice
- `voice_[brand]_[style]` - Brand voice patterns
  - `voice_glow_casual` - Glow Social casual voice
  - `voice_glow_professional` - Glow Social professional
  - `voice_corporate_friendly` - Corporate but approachable
  - `voice_local_neighbor` - Helpful neighbor tone

### 📊 Analysis
- `analyze_[what]_[purpose]` - Analysis patterns
  - `analyze_audience_insights` - Audience analysis
  - `analyze_content_performance` - Content performance
  - `analyze_keyword_opportunities` - Keyword opportunities

### 🔧 Utility
- `util_[function]_[action]` - Utility patterns
  - `util_format_cleanup` - Clean up formatting
  - `util_length_adjust` - Adjust content length
  - `util_emoji_add` - Add appropriate emojis
  - `util_hashtag_generate` - Generate hashtags

## Naming Rules

1. **Always lowercase** with underscores
2. **Maximum 3 parts**: category_subcategory_action
3. **Action verbs** at the end (generate, create, analyze, optimize)
4. **Industry codes** when applicable:
   - cpa, roofing, hvac, dental, plumbing, electrical
   - legal, medical, fitness, restaurant, retail

## Examples of Good Names

✅ GOOD:
- `biz_cpa_hooks` - Clear industry and purpose
- `social_linkedin_optimize` - Platform and action clear
- `content_story_tell` - Content type and purpose

❌ BAD:
- `generate_hooks` - Too generic, no context
- `analyze_paper` - What kind of paper? For what?
- `ai` - Completely unclear

## Migration Plan

Old Name → New Name:
- `generate_hooks` → `content_hooks_generate`
- `adapt_for_platform` → `social_multi_adapt`
- `glow_social_voice` → `voice_glow_casual`

## Directory Structure (Future)

Consider organizing into subdirectories:
```
patterns/
├── biz/          # Industry-specific
├── social/       # Platform-specific
├── content/      # Content generation
├── marketing/    # Marketing strategies
├── voice/        # Brand voices
├── analyze/      # Analysis tools
└── util/         # Utilities
```