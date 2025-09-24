# 🛠️ GLOW SOCIAL TOOLS DOCUMENTATION - YOUR PROBLEM-SOLVING TOOLKIT

## 🚨 CRITICAL RULE: TOOLS FIRST, ALWAYS 🚨

**STOP AND READ THIS CAREFULLY:**

When I ask you to do ANYTHING, your FIRST thought should be:
"Which tool, pattern, or command already exists for this?"

**NOT**: "Let me write new code from scratch"
**NOT**: "Let me create a new solution"
**INSTEAD**: "Let me use the appropriate tool that already exists"

## 🎯 Core Tool Categories for Glow Social

### 1. Content Generation (Fabric Patterns)
**Location**: `~/.config/fabric/patterns/` and `~/Documents/projects/fabric/data/my_patterns/`

**Your Custom Patterns**:
- `glow_social_voice` - Transform any text into our brand voice
- `debug_existing_feature` - Diagnose broken features
- `plan_new_feature` - Plan implementation before coding
- `debug_mystery` - Investigate weird behavior
- `debug_regression` - Find why something stopped working
- `analyze_performance` - Identify bottlenecks

**Usage**: 
```bash
echo "corporate jargon text" | fabric --pattern glow_social_voice
echo "save button not working" | fabric --pattern debug_existing_feature

2. Web Development & Testing (Playwright MCP)
THIS IS HOW YOU SEE AND TEST THE APP!
🚨 MANDATORY - ALWAYS USE THE MCP BRIDGE 🚨

ALWAYS use --browser chrome --extension
This uses my real browser with all cookies and sessions
Opens NEW windows for troubleshooting (doesn't disrupt my work)

Common Glow Social Testing Tasks:
// Check if posts are displaying
mcp__playwright__browser_navigate({url: "https://app.glowsocial.com/dashboard"})
mcp__playwright__browser_snapshot() // See what's actually rendered

// Test scheduling interface
mcp__playwright__browser_click({element: "Schedule Post button", ref: "#schedule-btn"})

// Verify client content
mcp__playwright__browser_type({element: "search", ref: "#client-search", text: "Bob's Roofing"})
// Check if posts are displaying
mcp__playwright__browser_navigate({url: "https://app.glowsocial.com/dashboard"})
mcp__playwright__browser_snapshot() // See what's actually rendered

// Test scheduling interface
mcp__playwright__browser_click({element: "Schedule Post button", ref: "#schedule-btn"})

// Verify client content
mcp__playwright__browser_type({element: "search", ref: "#client-search", text: "Bob's Roofing"})
3. Database Operations (Supabase)
Common Queries We Need:
-- Check for duplicate posts
SELECT * FROM content_posts 
WHERE user_id = ? AND scheduled_for = ?
ORDER BY created_at DESC;

-- Find missing posts
SELECT * FROM content_posts 
WHERE scheduled_for < NOW() 
AND published = false;

-- Check client subscriptions
SELECT * FROM subscriptions 
WHERE user_id = ? 
AND status = 'active';
Always Check:

Timezone issues (everything should be UTC)
User ID joins
The scheduled_for timestamps
The sweater incident taught us: CHECK THE DATABASE FIRST

4. Client Management Commands
Location: ${PAI_HOME}/.claude/commands/
Key Commands for Glow Social:

capture-learning.md - Document what went wrong and how we fixed it
generate-monthly-content.md - Create 12 posts for a client
analyze-client-performance.md - Check how their content is doing
onboard-new-client.md - Set up everything for a new client

5. Web Research
For Competitor & Industry Analysis:
Use ${PAI_HOME}/.claude/commands/web-research.md for:

Researching what competitors are posting
Finding industry trends
Getting content ideas
Understanding local market dynamics

DON'T use fetch for research - use the web-research command!
6. Deployment & Monitoring
Vercel Deployment:

Push to GitHub → Vercel auto-deploys
Check environment variables are set
Verify Supabase connection strings
Test immediately after deploy

What to Check Post-Deploy:

Can users log in?
Are posts displaying?
Is scheduling working?
Are API routes responding?

7. Financial & Business Analytics
When I ask about business metrics:

Client retention rates
Monthly recurring revenue
Which industries perform best
Cost per client acquisition

Use the answer-finance-question command for parsing any financial documents.
🎤 Voice System for Agents
Task({
  description: "Fix database issue",
  prompt: `
    [TASK]
    Check why posts aren't showing for Bob's Roofing
    
    [ALWAYS CHECK]
    - Database first (timezone issues?)
    - User ID joins
    - scheduled_for timestamps
  `,
  subagent_type: "engineer"
})
📁 AVAILABLE COMMANDS
Check these first - they solve complete problems!
ls ${PAI_HOME}/.claude/commands/
Read each command's description to understand when to use it.
🔌 MCP SERVERS for Glow Social
Essential MCP Servers:

Playwright - Browser testing and visual debugging

Test the app
Debug UI issues
Verify client content displays correctly
Check responsive design


Web Research - Industry and competitor intelligence

Find what's working for competitors
Discover content trends
Research local markets


Database (when we set it up) - Direct Supabase queries

Check data integrity
Debug scheduling issues
Verify client content



🚨 TROUBLESHOOTING WORKFLOWS
"Posts aren't showing"

Check database: scheduled_for timestamps
Check timezone handling
Verify user_id joins
Check Supabase RLS policies

"Duplicate posts"

Query content_posts for duplicates
Check cron job logs
Verify scheduling logic
Look for race conditions

"Deploy broke something"

Check Vercel logs
Verify environment variables
Test API routes
Check Supabase connection

"Client content looks wrong"

Check their brand voice settings
Verify content generation ran
Check the 96 hooks are loaded
Test with Playwright to see actual output

📚 Documentation & References
Our Stack Documentation (use Ref MCP when coding):

Next.js 15 documentation
Supabase client libraries
Vercel deployment guides
TypeScript best practices
Tailwind CSS utilities

Always check latest docs before implementing new features!
🎯 Remember Our Goals
Every tool usage should move us toward:

More modular - Solve once, reuse forever
More reliable - Consistent quality across all clients
More efficient - Less time per client
More scalable - Same effort for 10 or 1000 clients

🚫 What We DON'T Need

Pentesting tools (we're not a security company)
Stripe integration (we handle billing differently)
Advanced scraping (we don't scrape protected content)
Complex orchestration (Glow Social app handles this)

Focus on tools that help us:

Generate better content
Fix problems faster
Understand our clients
Scale efficiently