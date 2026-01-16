# Summarize Workflow

Summarizes content from URLs, videos, files, or text.

## When to Use
- "Summarize this article/video/paper"
- "Give me a summary of..."
- "What's the TLDR?"
- "Condense this content"

## Execution

```bash
# General summary
fabric -u "URL" -p summarize

# Ultra-concise 5-sentence summary
fabric -u "URL" -p create_5_sentence_summary

# Micro summary (tweet-length)
fabric -u "URL" -p create_micro_summary

# YouTube video
fabric -y "YOUTUBE_URL" -p youtube_summary

# Academic paper
fabric -u "URL" -p summarize_paper

# Meeting notes
cat meeting-notes.txt | fabric -p summarize_meeting
```

## Pattern Selection Guide

| Content Type | Pattern |
|--------------|---------|
| General article/blog | `summarize` |
| Need ultra-concise | `create_5_sentence_summary` |
| YouTube video | `youtube_summary` |
| Academic paper | `summarize_paper` |
| Meeting notes | `summarize_meeting` |
| Newsletter | `summarize_newsletter` |

## Example

```bash
# Summarize article
fabric -u "https://example.com/article" -p summarize

# YouTube video summary
fabric -y "https://youtube.com/watch?v=dQw4w9WgXcQ" -p youtube_summary

# Get 5-sentence version
fabric -u "https://longform.com/article" -p create_5_sentence_summary
```
