# Schema Workflow

**Trigger:** "generate schema for [business type]", "create FAQ schema", "what schema does [business] need"

## Purpose

Generate appropriate JSON-LD schema markup for a business to improve AI extractability.

## Process

### Step 1: Identify Business Type

| Business Type | Primary Schemas Needed |
|---------------|----------------------|
| B2B Consultant | Person, ProfessionalService, FAQPage |
| B2B Agency | Organization, ProfessionalService, FAQPage |
| SaaS Product | SoftwareApplication, Organization, FAQPage |
| Local Service | LocalBusiness, FAQPage, Service |
| E-commerce | Product, Organization, FAQPage |
| Content/Media | Organization, Article, FAQPage |

### Step 2: Gather Required Information

For the schema, collect:
- Business name and description
- Services/products offered
- Pricing (if public)
- Location (if applicable)
- Contact information
- Social profiles
- Key credentials/awards

### Step 3: Generate Schemas

**Priority order:**
1. **FAQPage** - Highest impact for AI visibility
2. **Organization or Person** - Establishes identity
3. **Service or Product** - What they offer
4. **Review/Rating** - Social proof (if they have reviews)

## Schema Templates

### FAQPage (HIGHEST PRIORITY)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[QUESTION 1]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[40-60 word answer - this is what AI extracts]"
      }
    },
    {
      "@type": "Question",
      "name": "[QUESTION 2]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[40-60 word answer]"
      }
    }
  ]
}
```

**FAQ Question Ideas by Business Type:**

*Consultants:*
- What does a [specialty] consultant do?
- How much does [service] consulting cost?
- How long does a typical [service] engagement take?
- What results can I expect from [service]?
- Who is [service] consulting best for?

*SaaS:*
- What is [Product Name]?
- How much does [Product] cost?
- What's the difference between [Product] and [Competitor]?
- Who uses [Product]?
- How do I get started with [Product]?

*Local Business:*
- What services does [Business] offer?
- What are [Business]'s hours?
- Does [Business] offer [specific service]?
- How do I book an appointment at [Business]?
- What areas does [Business] serve?

### Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[BUSINESS_NAME]",
  "url": "https://[DOMAIN]",
  "logo": "https://[DOMAIN]/logo.png",
  "description": "[50-100 word description]",
  "foundingDate": "[YYYY]",
  "founder": {
    "@type": "Person",
    "name": "[FOUNDER_NAME]"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[CITY]",
    "addressRegion": "[STATE]",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "[PHONE]",
    "contactType": "customer service",
    "email": "[EMAIL]"
  },
  "sameAs": [
    "https://linkedin.com/company/[COMPANY]",
    "https://twitter.com/[HANDLE]"
  ]
}
```

### ProfessionalService (for consultants/agencies)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "[BUSINESS_NAME]",
  "description": "[SERVICE_DESCRIPTION]",
  "url": "https://[DOMAIN]",
  "priceRange": "[PRICE_RANGE]",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "[SERVICE_NAME]",
          "description": "[SERVICE_DESCRIPTION]"
        }
      }
    ]
  }
}
```

### Person (for individual consultants/experts)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[FULL_NAME]",
  "jobTitle": "[TITLE]",
  "description": "[BIO - 50-100 words]",
  "url": "https://[DOMAIN]",
  "image": "https://[DOMAIN]/headshot.jpg",
  "sameAs": [
    "https://linkedin.com/in/[PROFILE]",
    "https://twitter.com/[HANDLE]"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "[COMPANY_NAME]"
  },
  "knowsAbout": [
    "[EXPERTISE_1]",
    "[EXPERTISE_2]",
    "[EXPERTISE_3]"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "[UNIVERSITY]"
  },
  "award": "[CERTIFICATION_OR_AWARD]"
}
```

## Output Format

```markdown
# Schema Markup for [Business Name]

## Implementation Instructions

Add these scripts to your website's `<head>` section or use a schema plugin.

## 1. FAQPage Schema (PRIORITY)

Add to your FAQ page or homepage:

\`\`\`html
<script type="application/ld+json">
[GENERATED FAQ SCHEMA]
</script>
\`\`\`

## 2. Organization Schema

Add to all pages (usually in header):

\`\`\`html
<script type="application/ld+json">
[GENERATED ORG SCHEMA]
</script>
\`\`\`

## 3. [Additional Schema]

...

## Validation

After adding, test at:
- https://search.google.com/test/rich-results
- https://validator.schema.org/

## Expected Impact

- FAQPage schema: +527% AI sessions (industry average)
- Organization schema: +40% knowledge panel appearance
- Combined: Significant improvement in AI extractability
```
