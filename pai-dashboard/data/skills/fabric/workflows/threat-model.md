# Threat Model Workflow

Creates comprehensive threat models for systems, applications, or features.

## When to Use
- User says "create a threat model for..."
- Security assessment needed
- New feature/system being designed
- Architecture review required

## Execution

```bash
# Basic threat model
fabric "[system description]" -p create_threat_model

# STRIDE methodology (more structured)
fabric "[system description]" -p create_stride_threat_model

# Generate specific threat scenarios
fabric "[system description]" -p create_threat_scenarios
```

## Input Format

Provide clear system description including:
- Components involved
- Data flows
- Trust boundaries
- External dependencies
- User interactions

## Example

```bash
fabric "API that handles user authentication with JWT tokens, stores user data in PostgreSQL, integrates with Stripe for payments, and uses Redis for session management" -p create_stride_threat_model
```

## Output

Structured threat model with:
- Identified threats by category
- Attack vectors
- Risk ratings
- Mitigation strategies
- Security recommendations
