# Extract Wisdom Workflow

Extracts insights, wisdom, and key takeaways from content.

## When to Use
- "Extract wisdom from..."
- "What are the insights?"
- "Pull out the key ideas"
- "What can I learn from this?"

## Execution

```bash
# General wisdom extraction
fabric -u "URL" -p extract_wisdom

# Article-specific
fabric -u "URL" -p extract_article_wisdom

# Extract insights
fabric -u "URL" -p extract_insights

# Main idea only
fabric -u "URL" -p extract_main_idea

# Book ideas
cat book.txt | fabric -p extract_book_ideas

# Controversial/provocative ideas
fabric -u "URL" -p extract_controversial_ideas
```

## Pattern Selection

| Goal | Pattern |
|------|---------|
| General wisdom | `extract_wisdom` |
| Article wisdom | `extract_article_wisdom` |
| Core insights | `extract_insights` |
| Main idea only | `extract_main_idea` |
| Book summary | `extract_book_ideas` |
| Controversial points | `extract_controversial_ideas` |
| Actionable recommendations | `extract_recommendations` |

## Example

```bash
# YouTube video wisdom
fabric -y "https://youtube.com/watch?v=..." -p extract_wisdom

# Article insights
fabric -u "https://blog.com/post" -p extract_insights

# Book ideas
cat "atomic-habits.txt" | fabric -p extract_book_ideas
```

## Output Format

Structured extraction with:
- Key insights/ideas
- Actionable takeaways
- Notable quotes
- Patterns identified
- Recommendations
