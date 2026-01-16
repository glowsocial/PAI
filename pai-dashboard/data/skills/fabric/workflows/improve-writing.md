# Improve Writing Workflow

Enhances writing quality, clarity, and effectiveness.

## When to Use
- "Improve this writing"
- "Make this better"
- "Edit this content"
- "Polish this copy"

## Execution

```bash
# General writing improvement
fabric "your text here" -p improve_writing

# Academic writing
cat paper.txt | fabric -p improve_academic_writing

# Prompt engineering
fabric "your AI prompt" -p improve_prompt

# Humanize AI text
fabric "AI-generated text" -p humanize
```

## Pattern Selection

| Content Type | Pattern |
|--------------|---------|
| General writing | `improve_writing` |
| Academic paper | `improve_academic_writing` |
| AI prompts | `improve_prompt` |
| AI-generated text | `humanize` |
| Report finding | `improve_report_finding` |

## Example

```bash
# Improve blog post
cat draft.md | fabric -p improve_writing

# Academic paper
fabric "$(cat research-paper.txt)" -p improve_academic_writing

# Better AI prompt
fabric "Write me a blog post about AI" -p improve_prompt
```

## What It Improves

- Clarity and readability
- Grammar and syntax
- Word choice
- Structure and flow
- Conciseness
- Impact and engagement
- Professional tone
