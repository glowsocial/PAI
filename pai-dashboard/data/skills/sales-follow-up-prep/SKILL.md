---
name: sales-follow-up-prep
description: Complete follow-up sales call preparation using Same Side Selling Quadrant Framework. Analyzes prospect context, maps topics to impact quadrants, generates discovery questions, and creates time-allocated call agenda. USE WHEN preparing for follow-up calls, discovery calls, or sales meetings.
---

# Sales Follow-Up Call Preparation Skill

## When to Activate This Skill
- Preparing for follow-up sales call
- Discovery call preparation
- Sales meeting prep
- Need to prioritize discussion topics
- Want to apply Same Side Selling framework
- Creating call agenda/script
- Analyzing prospect situation before call

## What This Skill Does

Guides you through comprehensive follow-up call preparation using Ian Altman's Same Side Selling Quadrant Framework, helping you:

1. Gather and analyze prospect context
2. Map discussion topics to the 4 quadrants (PROBLEM, DELIVER, FILLER, IRRELEVANT)
3. Prioritize high-impact topics (70% PROBLEM, 25% DELIVER, 5% other)
4. Generate quadrant-specific discovery questions
5. Create time-allocated call agenda
6. Prepare objection handlers and next steps

## The Same Side Selling Quadrant Framework

```
                    HIGH IMPACT
                         |
         DELIVER    |    PROBLEM
     (Addressed)    | (Not Addressed)
                         |
    -----------------+------------------
                         |
         FILLER     |   IRRELEVANT
     (Addressed)    | (Not Addressed)
                         |
                    LOW IMPACT
```

**Focus Areas:**
- **PROBLEM Quadrant** (70% of call time): High-impact issues they haven't solved
- **DELIVER Quadrant** (25% of call time): High-impact issues they're addressing inadequately
- **FILLER/IRRELEVANT** (5% or skip): Low-impact topics

## How to Execute

This skill will guide you through:

### Step 1: Gather Prospect Context
- Company name and industry
- Your solution/offering
- Previous conversation notes
- Stated pain points or goals
- Current solutions they use
- Decision timeline and authority

### Step 2: Brain Dump Topics
- List all potential discussion topics
- Include their stated problems
- Your solution's key features
- Industry challenges
- Competitive differentiators
- Implementation details

### Step 3: Quadrant Analysis (Using Fabric Pattern)
- Run topics through `same_side_quadrant` pattern
- Map each topic to appropriate quadrant
- Assess impact level (high/low)
- Determine current state (addressed/not addressed)
- Get prioritized topic list

### Step 4: Question Preparation
- Generate 5-7 discovery questions for each PROBLEM topic
- Generate 3-5 differentiation questions for each DELIVER topic
- Prepare acknowledgment scripts for FILLER topics
- Create objection handlers

### Step 5: Build Call Agenda
- Structure 40-minute call timeline
- Allocate time by quadrant priority
- Plan opening (2 min)
- PROBLEM deep dive (28 min)
- DELIVER differentiation (10 min)
- Transition to solution (5 min)
- Close with next steps (5 min)

### Step 6: Final Review
- Review complete call prep package
- Verify question quality
- Confirm time allocation
- Prepare supporting materials

## Supporting Fabric Patterns

This skill leverages:
- **same_side_quadrant** - Core quadrant analysis and topic mapping
- **pain_funnel** - Deep pain discovery for PROBLEM quadrant topics
- **sales_call_diagnosis** - Overall call structure and closing
- **sms_followup** - Post-call follow-up sequence (if needed)

## Output Deliverables

You'll receive:

1. **Quadrant-Mapped Topics**
   - Each topic categorized with justification
   - Impact assessment and current state
   - Priority ranking

2. **Prepared Questions**
   - PROBLEM quadrant: Deep discovery questions
   - DELIVER quadrant: Differentiation questions
   - Objection handlers ready

3. **Time-Allocated Call Agenda**
   ```
   Opening (2 min):
   - Recap and set agenda

   PROBLEM Deep Dive (28 min):
   - Topic 1: 15 min [with sub-bullets]
   - Topic 2: 10 min [with sub-bullets]
   - Topic 3: 3 min [with sub-bullets]

   DELIVER Differentiation (10 min):
   - Current solution gap analysis

   Transition to Solution (5 min):
   - Summarize findings
   - Bridge to your solution

   Close (5 min):
   - Next steps and timeline
   ```

4. **Call Script/Notes Document**
   - Full prep package you can reference during call
   - Key talking points
   - Questions organized by topic
   - Next steps to propose

## Use Cases

- **First Follow-Up Call**: After initial discovery, diving deeper
- **Second/Third Call**: Addressing specific high-impact topics
- **Demo Preparation**: Focus on relevant features only
- **Proposal Call**: Justify pricing with quantified pain
- **Executive Call**: Streamlined agenda on strategic issues only
- **Competitive Situation**: DELIVER quadrant differentiation focus

## Best Practices

1. **Be Honest About Impact**
   - Don't artificially inflate topic importance
   - If they don't care about it, it goes in IRRELEVANT
   - Focus your limited time on what truly matters to them

2. **Quantify PROBLEM Quadrant Topics**
   - Calculate cost of inaction
   - Revenue impact
   - Time savings
   - Competitive risk

3. **Respect DELIVER Quadrant**
   - Don't dismiss their current solutions
   - Find the gaps and frustrations
   - Show differentiation, not just features

4. **Ruthlessly Skip FILLER/IRRELEVANT**
   - Your time is limited
   - Every minute on low-impact topics is a minute not solving real problems
   - Acknowledge and redirect

5. **Prepare for Resistance**
   - Some prospects will want to discuss FILLER topics
   - Have tactful redirects ready
   - "That's interesting, and we can circle back if we have time. But first, I want to make sure we address [PROBLEM topic] because that's costing you [quantified impact]."

## Integration with Other Skills

**Combine with:**
- **alex-hormozi-pitch** - After quadrant analysis, structure irresistible offer
- **marketing-patterns** - Use `10x_email_campaign` for post-call nurture
- **fabric patterns** - `analyze_performance` to review call effectiveness

## Example Workflow

```
User: "I have a follow-up call tomorrow with a prospect in the home services industry"

Skill: "Great! Let's prep your call using Same Side Selling. First, tell me about the prospect..."

[Gathers context]

Skill: "Now, what are all the potential topics you could discuss?"

[Brain dumps topics]

Skill: "Let me run these through the quadrant framework..."

[Uses same_side_quadrant fabric pattern]

Skill: "Here's your quadrant analysis:

PROBLEM QUADRANT (Focus 70% of time):
1. Lead generation - Getting only 3 leads/week, needs 15+ (HIGH IMPACT)
2. Scheduling chaos - Manual booking losing 20+ hours/week (HIGH IMPACT)

DELIVER QUADRANT (Focus 25% of time):
3. Using basic CRM but reps don't use it - Data quality issues (HIGH IMPACT, inadequate solution)

FILLER QUADRANT (Acknowledge <5%):
4. Have email templates - Working fine

IRRELEVANT QUADRANT (Skip):
5. Custom dashboard colors - Never mentioned, low impact

Now let me prepare your discovery questions..."

[Generates questions for each quadrant]

Skill: "Here's your complete 40-minute call agenda with time allocations..."

[Delivers full call prep package]
```

## Quick Start

When you activate this skill, just say:
- "I need to prep for a follow-up call"
- "Help me prepare for tomorrow's sales meeting"
- "I have a discovery call and need to prioritize topics"

I'll guide you through each step systematically.

## Resources

- **Pattern Location**: `~/Documents/projects/fabric/data/my_patterns/same_side_quadrant/`
- **Related Patterns**: pain_funnel, sales_call_diagnosis, sms_followup
- **Book Reference**: "Same Side Selling" by Ian Altman & Jack Quarles
