---
name: ffuf-web-fuzzing
description: Expert guidance for ffuf web fuzzing during penetration testing, including authenticated fuzzing with raw requests, auto-calibration, and result analysis
contributor: Joseph Thacker (@rez0)
---

# FFUF (Fuzz Faster U Fool) Skill

> **Contributed by:** [Joseph Thacker (@rez0)](https://twitter.com/rez0__)

## Overview
FFUF is a fast web fuzzer written in Go, designed for discovering hidden content, directories, files, subdomains, and testing for vulnerabilities during penetration testing. It's significantly faster than traditional tools like dirb or dirbuster.

## Installation
```bash
# Using Go
go install github.com/ffuf/ffuf/v2@latest

# Using Homebrew (macOS)
brew install ffuf

# Binary download
# Download from: https://github.com/ffuf/ffuf/releases/latest
```

## Core Concepts

### The FUZZ Keyword
The `FUZZ` keyword is used as a placeholder that gets replaced with entries from your wordlist. You can place it anywhere:
- URLs: `https://target.com/FUZZ`
- Headers: `-H "Host: FUZZ"`
- POST data: `-d "username=admin&password=FUZZ"`
- Multiple locations with custom keywords: `-w wordlist.txt:CUSTOM` then use `CUSTOM` instead of `FUZZ`

### Multi-wordlist Modes
- **clusterbomb**: Tests all combinations (default) - cartesian product
- **pitchfork**: Iterates through wordlists in parallel (1-to-1 matching)
- **sniper**: Tests one position at a time (for multiple FUZZ positions)

## Common Use Cases

### 1. Directory and File Discovery
```bash
# Basic directory fuzzing
ffuf -w /path/to/wordlist.txt -u https://target.com/FUZZ

# With file extensions
ffuf -w /path/to/wordlist.txt -u https://target.com/FUZZ -e .php,.html,.txt,.pdf

# With recursion (finds nested directories)
ffuf -w /path/to/wordlist.txt -u https://target.com/FUZZ -recursion -recursion-depth 2
```

### Auto-Calibration (USE BY DEFAULT!)
**CRITICAL:** Always use `-ac` unless you have a specific reason not to.

```bash
ffuf -w /path/to/wordlist.txt -u https://target.com/FUZZ -ac
```

## Best Practices

1. **ALWAYS Use Auto-Calibration** (`-ac`)
2. **Use Raw Requests for Authentication** (`--request req.txt`)
3. **Use Appropriate Wordlists** from SecLists
4. **Rate Limiting for Stealth** (`-rate 2 -t 10`)
5. **Save Results** (`-o results.json`)

## Resources
- Official GitHub: https://github.com/ffuf/ffuf
- SecLists Wordlists: https://github.com/danielmiessler/SecLists
- Practice Lab: http://ffuf.me
