# Glow Social Brand Guidelines

## Brand Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Lime | `#d7e278` | `--glow-lime` | Primary CTA buttons, accents, highlights |
| Skyline | `#ddecf7` | `--glow-skyline` | Light backgrounds, subtle accents |
| Navy | `#192734` | `--glow-navy` | Primary text, dark backgrounds, headers |
| Everglow | `#9399cc` | `--glow-everglow` | Secondary accent, links, emphasis text |
| Paper | `#faf8f7` | `--glow-paper` | Page backgrounds, cards |
| Open Sign | `#d2c964` | `--glow-open-sign` | Tertiary accent, warnings, highlights |

### Color Palette Preview

```
Lime       #d7e278  ████████████
Skyline    #ddecf7  ████████████
Navy       #192734  ████████████
Everglow   #9399cc  ████████████
Paper      #faf8f7  ████████████
Open Sign  #d2c964  ████████████
```

## Typography

### Fonts

| Type | Font Family | Weight | Style |
|------|-------------|--------|-------|
| Headings | Urbanist | 600 (Semi-Bold) | ALL CAPS |
| Body | Inter | 400-600 | Normal case |

### Google Fonts Import

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Urbanist:wght@600;700;800&display=swap" rel="stylesheet">
```

### CSS Implementation

```css
body {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    line-height: 1.6;
    color: #192734;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Urbanist', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    line-height: 1.1;
    color: #192734;
}
```

## Button Styles

### Primary Button (Lime)
- Background: `#d7e278`
- Text: `#192734` (Navy)
- Hover: Slight lift + increased shadow
- Border-radius: `3rem` (pill shape)

### Secondary Button (Outline)
- Background: White
- Border: `2px solid #192734`
- Text: `#192734`
- Hover: Background fills Navy, text goes white

## Brand Voice

- **Tone:** Friendly, straightforward, no-nonsense
- **Audience:** Local business owners who are too busy to manage social media
- **Key Messages:**
  - Social media that runs itself
  - 12 posts a month, done for you
  - $49/month, cancel anytime
  - No meetings, no agencies, no hassle

## Logo Usage

- Always use "Glow Social" (not "Glow" alone)
- Logo icon: Bolt symbol on lime background

## Do's and Don'ts

### Do
- Use Lime for primary CTAs
- Keep headings uppercase
- Maintain high contrast for accessibility
- Use Navy for primary text
- Keep designs clean and minimal

### Don't
- Shorten "Glow Social" to just "Glow"
- Use colors outside the brand palette
- Mix heading fonts with body fonts
- Use lowercase for major headings
- Use emojis in marketing materials
- Use gradients (subtle background washes are acceptable, but avoid bold/loud gradients)
