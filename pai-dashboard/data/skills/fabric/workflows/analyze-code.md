# Analyze Code Workflow

Analyzes code for quality, security, bugs, and improvements.

## When to Use
- "Analyze this code"
- "Review this code"
- "What's wrong with this code?"
- "Security review needed"

## Execution

```bash
# Code analysis
fabric "$(cat script.py)" -p analyze_code

# Code review (more comprehensive)
fabric "$(cat component.jsx)" -p review_code

# From file
cat app.js | fabric -p analyze_code

# Git diff analysis
git diff | fabric -p analyze_code
```

## What It Checks

- Code quality issues
- Security vulnerabilities
- Performance problems
- Best practice violations
- Bug potential
- Improvement suggestions
- Refactoring opportunities

## Example

```bash
# Analyze Python script
fabric "$(cat api_handler.py)" -p analyze_code

# Review React component
cat UserProfile.jsx | fabric -p review_code

# Analyze changes
git diff main..feature-branch | fabric -p analyze_code
```

## Output

Structured analysis with:
- Issues found (categorized by severity)
- Security concerns
- Performance bottlenecks
- Recommended fixes
- Code smell identification
- Refactoring suggestions
