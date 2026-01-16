# Analyze Performance Workflow

Analyzes content/campaign performance and provides optimization recommendations.

## When to Use
- Content isn't performing
- Campaign underperforming
- Want to optimize results
- Testing variations
- Learning from success/failure

## Execution

```bash
# Analyze content performance
fabric "CONTENT: [the content]
METRICS: [engagement, clicks, conversions]
PLATFORM: [where posted]
AUDIENCE: [target]
GOAL: [what you wanted to achieve]" -p analyze_performance --custom

# Analyze sales call
fabric "[call transcript or summary]" -p sales_call_diagnosis --custom
```

## Input Format

**For Content Analysis:**
```
CONTENT: [Full content or summary]
METRICS:
- Impressions: X
- Engagement rate: X%
- Clicks: X
- Conversions: X
PLATFORM: [LinkedIn/Facebook/Instagram/Email]
AUDIENCE: [Who saw it]
GOAL: [Lead gen/engagement/sales]
CONTEXT: [Any relevant notes]
```

**For Sales Call:**
```
CALL SUMMARY: [What happened]
OUTCOME: [Result]
OBJECTIONS: [What they said]
NEXT_STEPS: [If any]
```

## Example

```bash
fabric "CONTENT: 'Is your roof ready for Seattle's winter storms? Most homeowners don't realize their roof needs maintenance until it's too late. Get a free inspection before the rain hits. Link in bio.'
METRICS:
- Impressions: 2,847
- Engagement: 34 (1.2%)
- Link clicks: 3 (0.1%)
- Leads: 0
PLATFORM: Instagram
AUDIENCE: Seattle homeowners, 35-65
GOAL: Generate inspection bookings
CONTEXT: Posted on Monday at 10am, included roof photo" -p analyze_performance --custom
```

## Output

**Performance Analysis:**
- What worked
- What didn't work
- Why (hypothesis)

**Optimization Recommendations:**
- Hook improvements
- CTA optimization
- Platform-specific adjustments
- Timing suggestions
- Visual recommendations

**Testing Ideas:**
- A/B test variations
- Different angles to try
- Platform experiments

**Next Steps:**
- Immediate actions
- Long-term strategy adjustments

## Related Workflows

**For debugging features:**
```bash
# Debug existing feature
fabric "[feature description + issue]" -p debug_existing_feature --custom

# Debug regression
fabric "[what changed + symptoms]" -p debug_regression --custom
```
