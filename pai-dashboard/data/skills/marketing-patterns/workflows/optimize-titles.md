# Optimize Titles Workflow

Generates and optimizes titles, headlines, and subject lines.

## When to Use
- Need compelling headline
- Email subject line optimization
- Blog post title creation
- Ad headline testing
- Social post hook optimization

## Execution

```bash
# Full title optimization suite
fabric "TOPIC: [your topic]
AUDIENCE: [target]
GOAL: [clicks/engagement/conversions]
CONTENT_TYPE: [blog/email/ad/social]" -p title_optimization_suite --custom

# Specific title types
fabric "[topic]" -p create_how_to_titles --custom
fabric "[topic]" -p create_list_titles --custom
fabric "[topic]" -p create_problem_solution_titles --custom
fabric "[topic]" -p generate_question_titles --custom
```

## Pattern Selection by Type

| Title Type | Pattern | Example Output |
|------------|---------|----------------|
| How-to | `create_how_to_titles` | "How to [achieve result] without [pain]" |
| List-based | `create_list_titles` | "7 Ways to [benefit]" |
| Problem-solution | `create_problem_solution_titles` | "Struggling with [X]? Here's why" |
| Question | `generate_question_titles` | "What if you could [benefit]?" |
| Authority | `generate_authority_titles` | "The Expert's Guide to [topic]" |
| Comparison | `generate_comparison_titles` | "[A] vs [B]: Which is better?" |
| Local | `generate_local_titles` | "Best [service] in [city]" |
| Research | `generate_research_titles` | "New Study Reveals [finding]" |

## Example

```bash
fabric "TOPIC: Roof maintenance tips for Seattle homeowners
AUDIENCE: Homeowners 35-65 in Seattle area
GOAL: Blog traffic and lead generation
CONTENT_TYPE: Blog post" -p title_optimization_suite --custom
```

## Output

**Title Optimization Suite provides:**
- 15-20 title variations
- Multiple formats (how-to, list, question, etc.)
- SEO optimization notes
- Emotional triggers identified
- Click-worthiness score
- A/B testing recommendations

**Individual pattern outputs:**
- 5-10 titles in specified format
- Variations by intensity
- Industry-specific adaptations

## Title Formula Reference

**High-performing formulas:**
1. Number + Adjective + Keyword + Promise
   - "7 Proven Ways to Protect Your Roof This Winter"

2. How to + Desired Outcome + Without + Pain Point
   - "How to Extend Roof Life Without Expensive Replacements"

3. Question + Benefit
   - "Is Your Roof Ready for Seattle's Winter Storms?"

4. Mistake Pattern
   - "5 Roof Maintenance Mistakes Seattle Homeowners Make"

5. Secret/Revealed Pattern
   - "The Hidden Signs Your Roof Needs Immediate Attention"

## Testing Strategy

Generate 5-10 variations, then:
1. A/B test top 2-3
2. Track CTR
3. Iterate on winners
4. Document learnings

## Platform-Specific Optimization

**Email Subject Lines:**
- Keep under 50 characters
- Front-load benefit
- Create curiosity gap
- Avoid spam triggers

**Social Posts:**
- Platform-appropriate length
- Hook in first 5 words
- Emoji usage (if brand-appropriate)

**Blog Posts:**
- SEO keyword inclusion
- 60 characters or less
- Clear value proposition

**Ads:**
- Extremely concise
- Strong hook
- Clear CTA implied
