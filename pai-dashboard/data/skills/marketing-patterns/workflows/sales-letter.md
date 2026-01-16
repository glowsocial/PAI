# Sales Letter Workflow

Creates long-form sales letters for sales pages and direct mail.

## When to Use
- Sales page needed
- Long-form offer presentation
- Direct mail campaign
- High-ticket product/service
- Detailed offer explanation required

## Execution

```bash
# Full sales letter
fabric "PRODUCT: [name]
AUDIENCE: [target market]
PAIN_POINTS: [3-5 major problems]
SOLUTION: [your offer]
UNIQUE_MECHANISM: [what makes it work]
PROOF: [results, testimonials]
PRICE: [investment]
GUARANTEE: [risk reversal]
URGENCY: [deadline/scarcity]" -p sales_letter --custom

# Long-form TSL (text sales letter)
fabric "[offer details]" -p long_form_tsl --custom
```

## Input Requirements

**Essential:**
- Clear product/service description
- Target audience definition
- Main pain points (3-5)
- Unique solution/mechanism
- Price point
- Guarantee/risk reversal

**Highly Recommended:**
- Testimonials/social proof
- Results/case studies
- Founder story
- Origin story (how solution was discovered)
- Objection handling points

## Example

```bash
fabric "PRODUCT: Elite Roof Protection Program
AUDIENCE: Affluent homeowners (homes $800k+) in Pacific Northwest
PAIN_POINTS:
- Worry about expensive roof damage from storms
- Don't know when roof needs maintenance
- Past bad experiences with contractors
- Concerned about home value preservation
- Too busy to manage home maintenance
SOLUTION: Comprehensive roof care program with predictive maintenance
UNIQUE_MECHANISM: 'Roof Health Score' system - AI-powered analysis predicts issues before they become expensive
PROOF: 287 homes protected, $2.1M in prevented damage, 4.9/5 rating
PRICE: $297/month (avg saves $8,400 in emergency repairs)
GUARANTEE: If we miss any issue that causes damage, we pay for the repair
URGENCY: Only accepting 15 new clients this quarter" -p sales_letter --custom
```

## Output Structure

**Pre-headline:** Big promise tease

**Headline:** Main promise/benefit

**Lead:** Hook + agitate pain

**Story Section:**
- Relate to reader
- Share discovery story
- Introduce unique mechanism

**Credibility Section:**
- Social proof
- Testimonials
- Results
- Authority indicators

**Offer Section:**
- What's included
- Value breakdown
- Pricing/investment
- Bonuses

**Guarantee Section:**
- Risk reversal
- Money-back guarantee
- Performance guarantee

**Urgency Section:**
- Deadline
- Scarcity
- Reason why

**CTA Section:**
- Clear next step
- Order form
- Contact information

**FAQ Section:**
- Common objections
- Detailed answers

**Close:**
- Recap benefits
- Final CTA
- P.S. hooks (3-5)

## Length

Typical output: 3,000-8,000 words

For shorter versions, use:
- `power_offer_email` (500-800 words)
- `ten_minute_vsl` (1,500-2,000 words as script)
