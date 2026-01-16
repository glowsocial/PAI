# VSL Script Workflow

Creates video sales letter scripts for high-ticket offers and launches.

## When to Use
- Product/service launch
- Webinar presentation
- Sales video needed
- High-ticket offer
- Course/program sales

## Execution

```bash
# Standard VSL framework
fabric "PRODUCT: [name]
PRICE: [price point]
TARGET: [audience]
PAIN_POINT: [main problem]
SOLUTION: [your solution]
UNIQUE_MECHANISM: [what makes it different]
GUARANTEE: [risk reversal]" -p vsl_framework --custom

# 10-minute VSL (shorter)
fabric "[offer details]" -p ten_minute_vsl --custom

# Hero's journey VSL (story-driven)
fabric "[offer + story]" -p hero_journey_vsl --custom

# Podcast-style VSL (conversational)
fabric "[offer details]" -p podcast_vsl --custom
```

## Pattern Selection

| VSL Type | Pattern | Best For |
|----------|---------|----------|
| Standard framework | `vsl_framework` | Most offers |
| Quick/concise | `ten_minute_vsl` | Lower ticket |
| Story-driven | `hero_journey_vsl` | Transformation products |
| Conversational | `podcast_vsl` | Authority-based offers |

## Example

```bash
fabric "PRODUCT: Roofing Business Academy
PRICE: $2,997
TARGET: Roofing contractors doing under $500k/year
PAIN_POINT: Inconsistent leads, low margins, working 80+ hours/week
SOLUTION: Proven system to generate consistent high-ticket residential leads
UNIQUE_MECHANISM: The 'Premium Homeowner Pipeline' - targets homeowners who need premium roof replacements (avg ticket $15k-$35k)
GUARANTEE: 30-day money-back + we'll work with you until you get your first premium client" -p vsl_framework --custom
```

## Output

Complete VSL script including:

**Hook (0:00-0:30):**
- Pattern interrupt
- Big promise
- Curiosity gap

**Story/Agitation (0:30-5:00):**
- Relatability
- Pain point amplification
- Failed solutions

**Solution (5:00-10:00):**
- Unique mechanism
- How it works
- Proof/results

**Offer (10:00-12:00):**
- What's included
- Value stack
- Price reveal

**Close (12:00-15:00):**
- Guarantee
- Urgency/scarcity
- Strong CTA
- FAQ handling

## Webinar Variation

```bash
fabric "[VSL details]" -p webinar_funnel --custom
```

Includes:
- Registration page copy
- Reminder emails
- Webinar slides outline
- Live presentation script
- Replay strategy
