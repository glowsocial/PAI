# Glow Social Product Tiers & Logic Specification

This document defines the feature sets, pricing, and backend logic for the subscription tiers. Use this as the source of truth for both marketing copy and permission logic implementation.

**IMPORTANT: We have moved to an UNLIMITED pricing model. Remove all "scarcity" logic (credits/limits) and focus on "ease of use" (Pick, Click, Post).**

---

## 1. Daily Posting
**Price:** $49 / month
**Tagline:** "Unlimited AI-generated posts. Daily posting. Cancel anytime."

### Feature Set (Marketing)
- ✓ **Unlimited AI-Generated Posts**
- ✓ **Daily Posting to All Platforms**
- ✓ **Cancel Anytime**
- ✓ **Custom images included**
- ✓ **Brand voice that sounds like you**
- ✓ **Platforms:** Facebook, Instagram, LinkedIn, Google Business, and more

### Technical Implementation Specs
- **Post Limit:** `null` (Unlimited)
- **Video Credits:** 0 (Upgrade to Unlimited for videos)
- **Carousel Credits:** 0 (Upgrade to Unlimited for carousels)
- **AI Re-rolls:** Unlimited

### Gamification (Dashboard)
- **Remove:** "Credits Remaining" or "X/20 Posts Used"
- **Show:** "Posts Published This Month" counter (counts UP to encourage usage)

---

## 2. Unlimited
**Price:** $99 / month
**Tagline:** "Unlimited everything. Videos, carousels, and analytics."

### Feature Set (Marketing)
- ✓ **Unlimited AI-Generated Posts**
- ✓ **Daily Posting to All Platforms**
- ✓ **Cancel Anytime**
- ✓ **Unlimited carousel posts**
- ✓ **Unlimited short-form videos**
- ✓ **Performance analytics**
- ✓ **Platforms:** All platforms including TikTok & YouTube Shorts

### Technical Implementation Specs
- **Post Limit:** `null` (Unlimited)
- **Manual Post Limit:** `null` (Unlimited)
- **Video Generation Limit:** `null` (Unlimited)
- **Carousel Limit:** `null` (Unlimited)
- **AI Generation Credits:** `null` (Unlimited)
- **Analytics Level:** `tier_2` (Includes engagement trends and content type performance)
- **Platforms:** Adds `tiktok`, `youtube_shorts` to `supported_platforms` array

### Gamification (Dashboard)
- **Show:** "Posts Published This Month" counter (counts UP to encourage usage)
- **Show:** Content type breakdown (videos, carousels, static posts)

---

## Onboarding: The "Magic Moment"

### Critical Requirement
When a new user finishes onboarding, do NOT drop them on a blank calendar or dashboard.

### Immediate Action
The system must immediately generate and display **3-5 draft posts ready for review**.

### Logic
The user needs to feel the "Magic" immediately. The first view must be **content**, not a "Create" button.

---

## "Pick, Click, Post" Workflow

### How It Works (User Flow)
1. **Connect:** "Connect your accounts."
2. **Pick:** "Swipe through tailored ideas. Pick the ones you like." (Use a checkmark/swipe icon)
3. **Post:** "Click to publish. We handle the captions, images, and hashtags."

### Terminology Updates
Replace the following terms throughout the codebase:
- "Strategy" → "Find"
- "Curate" → "Pick"
- "Analyze" → "Track" (where appropriate in user-facing copy)

---

## Cost Control Notes
- Videos utilize Pexels API + Text-to-Speech to minimize generation costs
- High margin maintained on the $99 Unlimited price point
- Unlimited model encourages retention over upsells
