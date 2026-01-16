# Generate Social Post Workflow

Creates platform-optimized social media posts from hooks.

## When to Use
- Daily content creation
- Converting hooks to posts
- Platform-specific content needed
- Social media scheduling

## Execution

```bash
fabric "BUSINESS_NAME: [name]
BUSINESS_TYPE: [type]
LOCATION: [location]
HOOK: [your hook]
THEME: [content theme]
FORMAT: [question|myth|story|comparison|tip|standard]
TARGET_AUDIENCE: [audience]" -p generate_social_post --custom
```

## Format Options

| Format | Best For | Example |
|--------|----------|---------|
| `question` | Engagement | "Did you know your roof needs..." |
| `myth` | Education | "Myth: All roofing materials last 30 years" |
| `story` | Connection | "Last week we helped a Seattle family..." |
| `comparison` | Decision-making | "Asphalt vs Metal: Which is right for you?" |
| `tip` | Quick value | "Pro tip: Check your gutters monthly" |
| `standard` | General | "Quality roofing services in Seattle" |

## Example

```bash
fabric "BUSINESS_NAME: Emerald Roofing
BUSINESS_TYPE: Roofing
LOCATION: Seattle, WA
HOOK: why fall is the best time for roof inspections
THEME: preventive maintenance
FORMAT: question
TARGET_AUDIENCE: homeowners" -p generate_social_post --custom
```

## Output

Platform-optimized post including:
- Engaging hook/opening
- Value-packed body
- Clear call-to-action
- Relevant hashtags (if appropriate)
- Character count optimized

## Multi-Platform Adaptation

```bash
# Generate base post, then adapt
fabric "[post content]" -p social_multi_adapt --custom
```

Outputs versions for:
- LinkedIn (professional)
- Facebook (community-focused)
- Instagram (visual-first)
- Twitter/X (concise)
