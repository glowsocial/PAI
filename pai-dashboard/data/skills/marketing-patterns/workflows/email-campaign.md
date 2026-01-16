# Email Campaign Workflow

Creates high-converting email campaigns and sequences.

## When to Use
- Launching new offer
- Re-engagement campaigns
- Welcome sequences
- Sales campaigns
- Newsletter series

## Execution

```bash
# 10x email campaign (high-converting)
fabric "BUSINESS: [name]
OFFER: [what you're selling]
TARGET: [audience]
PAIN_POINT: [problem they have]
SOLUTION: [how you solve it]
DEADLINE: [urgency/scarcity]" -p 10x_email_campaign --custom

# Power offer email
fabric "[offer details]" -p power_offer_email --custom

# Soft pitch email
fabric "[content with soft pitch]" -p soft_pitch_email --custom
```

## Pattern Selection

| Campaign Type | Pattern |
|---------------|---------|
| High-converting sale | `10x_email_campaign` |
| Irresistible offer | `power_offer_email` |
| Soft pitch/nurture | `soft_pitch_email` |
| Cold outreach | `cold_outreach` |
| SMS follow-up | `sms_followup` |

## Example

```bash
fabric "BUSINESS: Emerald Roofing
OFFER: Free roof inspection + $500 off any repair over $2000
TARGET: Homeowners in Seattle who experienced recent storms
PAIN_POINT: Worried about hidden roof damage leading to expensive leaks
SOLUTION: Professional 23-point inspection identifies issues early
DEADLINE: Offer expires in 7 days due to storm season demand" -p 10x_email_campaign --custom
```

## Output

Complete email campaign including:
- Attention-grabbing subject lines (3-5 options)
- Compelling opening
- Problem agitation
- Solution presentation
- Social proof/credibility
- Strong CTA
- Urgency/scarcity elements
- P.S. hook

## Sequence Building

For multi-email sequences:
1. Email 1: Identify problem
2. Email 2: Agitate + introduce solution
3. Email 3: Social proof + testimonials
4. Email 4: Handle objections
5. Email 5: Urgency + final CTA

Generate each separately or request full sequence.
