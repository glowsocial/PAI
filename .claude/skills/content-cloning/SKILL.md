---
name: content-cloning
description: |\
  Generate social media posts for local businesses based on proven content formats.
  
  USE WHEN user says "generate post", "create post", "make a post", "clone content", 
  "social media post", "content idea", or any request to create social media content 
  for local businesses.
---

## Workflow Routing (SYSTEM PROMPT)

**When user wants to generate a new social media post:**
Examples: "generate a new post", "create a post", "make a social media post", "clone a quick tip post", "create content", "generate a quick tip", "make a community question post"
→ **READ:** ~/.claude/skills/content-cloning/workflows/generate-post.md
→ **EXECUTE:** Generate a new social media post based on proven templates

---

## When to Activate This Skill

### Direct Post Generation Requests
- "generate a post", "create a post", "make a post"
- "generate social media post", "create social media content"
- "new post", "another post", "make another one"

### Content Cloning Requests
- "clone a post", "clone content", "use the content cloning skill"
- "clone a quick tip", "clone a community question"
- "use a template", "based on a template"

### Content Ideas Requests
- "content ideas", "give me a content idea"
- "what should I post", "help me create content"
- "need a post for my business"

### Category-Specific Requests
- "quick tip post", "make a quick tip"
- "community question", "engagement post"
- "myth vs fact post", "educational post"

### Use Case Indicators
- User is working on social media content for a local business
- User needs inspiration for social media posts
- User wants to leverage proven content formats
- User mentions Glow Social or local business social media strategy

---

## Extended Context

This skill helps local businesses create engaging social media content by leveraging proven content formats from a curated swipe file. 

### Core Message
The skill aligns all generated content with this message: "Local businesses need to have a presence on social media. And local businesses are not content creators, and they don't have the same budgets that equity-backed franchises and corporate stores have. So they need Glow Social."

### Available Categories

**quick_tips** - Tips and tricks for local business social media success
- Examples located at: `~/Documents/projects/PAI/marketing/swipe_file/quick_tips/`
- Format: Actionable advice with clear benefits

**community_questions** - Engaging questions to build community
- Examples located at: `~/Documents/projects/PAI/marketing/swipe_file/community_questions/`
- Format: Questions that encourage audience interaction

**myth_vs_fact** - Educational posts debunking common myths
- Examples located at: `~/Documents/projects/PAI/marketing/swipe_file/myth_vs_fact/`
- Format: Clear myth-busting with explanations

### Workflow Reference

**generate-post.md** - Main workflow for creating new posts
- Selects random template from chosen category
- Generates unique content following the template pattern
- Maintains consistent tone and messaging
