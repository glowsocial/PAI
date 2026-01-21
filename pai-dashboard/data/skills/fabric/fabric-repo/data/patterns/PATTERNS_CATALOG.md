# Fabric Patterns Catalog

## 📚 Currently Available Patterns

### Content Generation
| Pattern Name | Purpose | Example Input |
|-------------|---------|--------------|
| `content_hooks_generate` | Generate attention-grabbing opening lines | "roofing company" |
| `biz_cpa_hooks` | CPA-specific hooks with tax focus | "CPA firm for small business" |

### Social Platform Optimization
| Pattern Name | Purpose | Example Input |
|-------------|---------|--------------|
| `social_multi_adapt` | Adapt content for any platform | "[PLATFORM]: linkedin [CONTENT]: text" |

### Brand Voice
| Pattern Name | Purpose | Example Input |
|-------------|---------|--------------|
| `voice_glow_casual` | Apply Glow Social's casual, helpful voice | Any text to transform |

---

## 🎯 Patterns to Create Next

### High Priority (Revenue Generating)
- [ ] `biz_roofing_hooks` - Roofing company hooks
- [ ] `biz_hvac_seasonal` - HVAC seasonal content
- [ ] `biz_dental_education` - Dental practice education
- [ ] `biz_plumbing_emergency` - Plumbing urgency hooks

### Platform Specific
- [ ] `social_linkedin_optimize` - LinkedIn-specific optimization
- [ ] `social_instagram_caption` - Instagram caption creator
- [ ] `social_facebook_community` - Facebook community posts

### Content Types
- [ ] `content_story_tell` - Story-based posts
- [ ] `content_myth_bust` - Myth-busting content
- [ ] `content_tips_practical` - Practical tips format
- [ ] `content_before_after` - Transformation stories

### Marketing Strategy
- [ ] `marketing_competitor_analyze` - Analyze competitor content
- [ ] `marketing_seasonal_calendar` - Seasonal content ideas
- [ ] `marketing_local_events` - Local event tie-ins
- [ ] `marketing_urgency_ethical` - Ethical urgency creation

### Analytics & Intelligence
- [ ] `analyze_engagement_predict` - Predict post performance
- [ ] `analyze_audience_insights` - Extract audience insights
- [ ] `analyze_hashtag_trends` - Trending hashtag analysis

---

## 💡 How to Add a New Pattern

1. **Create pattern file**:
   ```bash
   mkdir ~/.config/fabric/patterns/[pattern_name]
   touch ~/.config/fabric/patterns/[pattern_name]/system.md
   ```

2. **Write the system prompt** following the template

3. **Test locally**:
   ```bash
   echo "test input" | fabric --pattern [pattern_name]
   ```

4. **Add to Cloudflare Worker** in `fabric-worker.js`

5. **Deploy**:
   ```bash
   cd cloudflare-worker
   wrangler deploy
   ```

---

## 🔍 Pattern Discovery Commands

List all patterns:
```bash
ls ~/.config/fabric/patterns/
```

Find business patterns:
```bash
ls ~/.config/fabric/patterns/ | grep ^biz_
```

Find social media patterns:
```bash
ls ~/.config/fabric/patterns/ | grep ^social_
```

View a pattern:
```bash
cat ~/.config/fabric/patterns/[pattern_name]/system.md
```

---

## 📊 Usage Tracking

Track which patterns generate the most value:

| Pattern | Times Used | Revenue Impact | Client Satisfaction |
|---------|------------|----------------|-------------------|
| `content_hooks_generate` | Track here | $ value | ⭐⭐⭐⭐⭐ |
| `biz_cpa_hooks` | Track here | $ value | ⭐⭐⭐⭐⭐ |

---

## 🚀 Pattern Quality Checklist

Before deploying a new pattern:
- [ ] Clear, specific identity and purpose
- [ ] Industry-appropriate language
- [ ] Specific output format defined
- [ ] Examples provided
- [ ] Tested with 5+ different inputs
- [ ] No hallucination-prone instructions
- [ ] Ethical guidelines included