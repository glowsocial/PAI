# GLOW SOCIAL AGENT SYSTEM

## Overview

The Glow Social Agent System uses specialized AI agents for different aspects of running and scaling the business. Each agent has specific expertise relevant to our needs.

## Available Agents

### 1. Engineer Agent

**Purpose**: Fix bugs, implement features, debug database issues.

**Capabilities**:
- Debug Supabase/PostgreSQL issues
- Fix Next.js/TypeScript problems
- Optimize performance
- Implement new features
- Troubleshoot the sweater-unraveling type disasters

**When to use**:
- "Posts aren't showing"
- "Duplicate content appearing"
- "Deploy broke something"
- "Need to add a new feature"

**Glow Social Context**:
- Always check database first
- Remember timezone issues (UTC everything)
- Test locally before deploying
- Document fixes with capture-learning

### 2. Content Strategist Agent (Custom)

**Purpose**: Generate and optimize content for clients.

**Capabilities**:
- Generate 96 hooks for new clients
- Create monthly content calendars
- Adapt content to local markets
- Maintain brand voice consistency
- Industry-specific content creation

**When to use**:
- Onboarding new clients
- Monthly content generation
- Improving content performance
- Industry-specific campaigns

**Tools**:
- All Fabric patterns in `my_patterns/`
- Client context files
- Industry templates

### 3. Business Analyst Agent (Custom)

**Purpose**: Analyze business metrics and growth opportunities.

**Capabilities**:
- Client retention analysis
- Revenue tracking
- Industry performance comparison
- Competitor monitoring
- Growth opportunity identification

**When to use**:
- "How's the business doing?"
- "Which industries perform best?"
- "What's our churn rate?"
- "Where should we focus?"

### 4. Designer Agent

**Purpose**: UI/UX improvements and visual testing.

**Capabilities**:
- Test responsive design
- Improve user experience
- Visual regression testing
- Accessibility checks
- Dashboard design

**When to use**:
- Testing how content looks
- Improving client dashboard
- Checking mobile experience
- Visual bugs

**Always uses**: Playwright with MCP bridge

### 5. Writer Agent

**Purpose**: Create marketing content and documentation.

**Capabilities**:
- Blog posts about social media
- Client communication templates
- Documentation updates
- Email campaigns
- Landing page copy

**When to use**:
- Marketing content needed
- Client communications
- Documentation updates
- Website copy

**Uses**: Glow Social brand voice (no corporate BS)

## Agent Selection for Glow Social

### Automatic Selection

```python
def select_agent(user_intent):
    if "database" or "bug" or "broken" in intent:
        return "engineer"
    elif "content" or "hooks" or "client" in intent:
        return "content_strategist"
    elif "revenue" or "metrics" or "business" in intent:
        return "business_analyst"
    elif "design" or "looks" or "visual" in intent:
        return "designer"
    elif "blog" or "email" or "write" in intent:
        return "writer"
    else:
        return "engineer"  # Default for technical issues
```

## Multi-Agent Workflows for Glow Social

### New Client Onboarding
1. **Business Analyst**: Analyze their market/competitors
2. **Content Strategist**: Generate 96 hooks
3. **Writer**: Create welcome email
4. **Engineer**: Set up in database

### Monthly Content Generation
1. **Content Strategist**: Generate 12 posts
2. **Designer**: Verify visual appearance
3. **Engineer**: Schedule in system

### Problem Resolution
1. **Engineer**: Diagnose issue
2. **Engineer**: Implement fix
3. **Designer**: Verify UI still works
4. **Business Analyst**: Check impact on clients

## Agent Context Files

```
${PAI_HOME}/.claude/context/agents/
├── engineer.md          # Database schemas, common fixes
├── content_strategist.md # Client voices, industry patterns
├── business_analyst.md   # KPIs, growth metrics
├── designer.md          # Brand guidelines, UI patterns
└── writer.md            # Glow Social voice, templates
```

## Best Practices for Glow Social

### 1. Problem Solving Priority
```
Database issue? → Engineer
Content quality? → Content Strategist
Business question? → Business Analyst
Visual problem? → Designer
Marketing need? → Writer
```

### 2. Always Document
- Use `capture-learning` after fixes
- Update agent context files
- Save successful patterns

### 3. Test Everything
- Engineer tests code
- Designer tests visuals
- Content Strategist reviews output
- Business Analyst verifies metrics

## Common Agent Chains

### "Client complaining about content"
```
1. Business Analyst: Check their metrics
2. Content Strategist: Review their content
3. Engineer: Verify scheduling works
4. Designer: Check display issues
```

### "Want to improve retention"
```
1. Business Analyst: Identify churn patterns
2. Content Strategist: Improve content quality
3. Writer: Better onboarding emails
4. Engineer: Fix any technical issues
```

### "Scaling to new industry"
```
1. Business Analyst: Research market
2. Content Strategist: Create industry patterns
3. Writer: Industry-specific templates
4. Engineer: Add to system
```

## Performance Tips

### Speed vs Quality
- **Fast**: Writer, Engineer (for fixes)
- **Medium**: Content Strategist, Designer
- **Thorough**: Business Analyst, Engineer (for features)

### When to Use Multiple Agents
- Complex problems (sweater unraveling)
- New client onboarding
- Major feature additions
- Business strategy decisions

### When One Agent is Enough
- Simple bug fixes
- Single content generation
- Quick visual checks
- Basic questions

## Troubleshooting

### Wrong Agent Selected?
```
"Use the engineer agent to check the database"
"Have the content strategist generate hooks"
```

### Agent Can't Complete Task?
- Break into smaller parts
- Use multiple agents
- Provide more context
- Check tool access

### Need Custom Agent?
Create new context file:
```bash
${PAI_HOME}/.claude/context/agents/custom_agent.md
```

## Future Enhancements for Glow Social

1. **Client Success Agent**: Track satisfaction
2. **Sales Agent**: Handle inquiries
3. **Compliance Agent**: Industry regulations
4. **Local Market Agent**: Geographic optimization
5. **Automation Agent**: Workflow optimization

---

*Glow Social Agent System v1.0*
*Part of the Glow Social PAI Infrastructure*
```

This focuses on the agents YOU actually need:
- Engineer (your most used)
- Content Strategist (core business)
- Business Analyst (growth)
- Designer (testing)
- Writer (marketing)