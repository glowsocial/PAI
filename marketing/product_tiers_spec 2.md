# Glow Social Product Tiers & Logic Specification

This document defines the feature sets, pricing, and backend logic for the three subscription tiers. Use this as the source of truth for both marketing copy and permission logic implementation.

---

## 1. Core
**Price:** $49 / month
**Tagline:** "Social media that runs itself."

### Feature Set (Marketing)
- ✓ **12 Posts / Month** (3 posts per week)
- ✓ **Static Images Only** (High-quality stock/AI)
- ✓ **Platforms:** Facebook, Instagram, LinkedIn, Google Business
- ✓ **Approve in 2 minutes**
- ✓ **Cancel anytime**

### Technical Implementation Specs
- **System Automation:** 12 Static Posts scheduled automatically per month.
- **Manual Post Limit:** 0 (Users cannot create extra custom posts without upgrading or paying per post? *Clarification needed: previously implied strictly maintenance*).
- **Video Credits:** 0
- **Carousel Credits:** 0
- **AI Re-rolls:** Limited (Standard allocation).
- **Upgrade Trigger:** Clicking "Create Custom Post" prompts upgrade to Pro.

---

## 2. Pro
**Price:** $99 / month
**Tagline:** "Social media that learns and adapts."

### Feature Set (Marketing)
- ✓ **36 Posts / Month** (Daily presence + bonus content)
- ✓ **Format Mix:** 20 Static, 4 Videos, 4 Carousels
- ✓ **8 Custom Post Credits:** For specific announcements/promos.
- ✓ **Advanced Analytics:** Learns what content plays best.
- ✓ **Platforms:** All Standard + Priority scheduling.

### Technical Implementation Specs
- **System Automation:** 
    - 20 Static Posts
    - 4 Short-form Videos (Pexels API + TTS)
    - 4 Carousels
- **Manual Post Limit:** 8 Custom Posts / Month.
- **Video Credits:** 4 (Part of automation mix).
- **Carousel Credits:** 4 (Part of automation mix).
- **Analytics Level:** `tier_2` (Includes engagement trends and content type performance).

---

## 3. Unlimited (formerly Momentum)
**Price:** $199 / month
**Tagline:** "Social media that dominates."

### Feature Set (Marketing)
- ✓ **Daily "Done-For-You" Base:** We auto-generate 30 optimized posts/mo so your feed is never empty.
- ✓ **UNLIMITED Video Generation:** Create as many Reel/TikTok style videos as you want at no extra cost.
- ✓ **UNLIMITED Custom Posts:** "Create Post" button is always active.
- ✓ **UNLIMITED AI Ideas:** Generate ideas until you find the perfect one.
- ✓ **All Platforms:** Adds **TikTok & YouTube Shorts** support.

### Technical Implementation Specs
- **System Automation (The Floor):**
    - Target: 30 posts scheduled per month.
    - Mix: ~10 Video, ~10 Carousel, ~10 Static (Optimized based on user analytics).
    - *Note:* Automation fills the calendar to ensure daily presence.
- **Manual Post Limit:** `null` (Unlimited).
- **Video Generation Limit:** `null` (Unlimited).
- **Carousel Limit:** `null` (Unlimited).
- **AI Generation Credits:** `null` (Unlimited).
- **Platforms:** Adds `tiktok`, `youtube_shorts` to `supported_platforms` array.
- **Cost Control:** Videos utilize Pexels API + Text-to-Speech to minimize generation costs, creating a high margin on the $199 price point.
