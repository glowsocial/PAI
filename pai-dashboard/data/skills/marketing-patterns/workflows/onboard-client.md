# Onboard Client Workflow

Generates 96 hooks (8 categories × 12 variations) for new clients.

## When to Use
- New Glow Social client onboarding
- Client needs content hooks library
- Building initial content strategy
- Generating hook inventory

## Execution

```bash
fabric "BUSINESS_NAME: [name]
BUSINESS_TYPE: [industry]
LOCATION: [city, state]
TARGET_AUDIENCE: [description]
UNIQUE_VALUE: [what makes them different]" -p onboard_generate_96_hooks --custom
```

## Input Requirements

**Essential:**
- Business name
- Business type/industry
- Location (if local business)

**Optional but Recommended:**
- Target audience details
- Unique value proposition
- Pain points they solve
- Competitor differentiation

## Example

```bash
fabric "BUSINESS_NAME: Emerald Roofing
BUSINESS_TYPE: Residential roofing contractor
LOCATION: Seattle, WA
TARGET_AUDIENCE: Homeowners 35-65, concerned about home maintenance
UNIQUE_VALUE: 24-hour emergency response, lifetime workmanship warranty" -p onboard_generate_96_hooks --custom
```

## Output

96 hooks across 8 categories:
1. Educational hooks (12)
2. Problem-solution hooks (12)
3. Story/case study hooks (12)
4. Seasonal/timely hooks (12)
5. Myth-busting hooks (12)
6. Comparison hooks (12)
7. Behind-the-scenes hooks (12)
8. Community/local hooks (12)

## Next Steps

After generating hooks:
1. Review and select best performers
2. Use `generate-social` workflow to create posts
3. Schedule in Glow Social platform
4. Track performance with `analyze-performance` workflow
