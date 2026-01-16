# Schema Markup Workflow

Generate and implement structured data for AI indexing.

## When to Use

- New client needs schema markup
- Website has no structured data
- Improving AI visibility score
- Adding new product/service pages

## What Is Schema Markup?

Structured data that tells AI systems exactly what your business does using JSON-LD format.

**Impact:** 15-20 point increase in AI visibility score

## Execution

### Generate Schema with Fabric

```bash
fabric "[BUSINESS DESCRIPTION]" -p ai_visibility_strategy_generate_schema
```

**Input Format:**
```
Business: Glow Social
Type: SaaS Software
Category: Social Media Management
Price: $49/month
Features: [list]
Description: [450 char description]
```

## Schema Types by Business

### For SaaS/Software:
**Use:** `SoftwareApplication` schema

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Product Name",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "49",
    "priceCurrency": "USD"
  },
  "description": "[description]",
  "featureList": [
    "Feature 1",
    "Feature 2"
  ]
}
```

### For Service Businesses:
**Use:** `LocalBusiness` or `ProfessionalService` schema

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Business Name",
  "description": "[description]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345"
  },
  "priceRange": "$$"
}
```

### For E-commerce:
**Use:** `Product` schema

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "offers": {
    "@type": "Offer",
    "price": "99.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

## Implementation Methods

### Method 1: Next.js (Recommended for Apps)

Add to `app/layout.jsx`:

```jsx
export default function RootLayout({ children }) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    // ... schema data
  };

  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Method 2: WordPress with Yoast

**Step 1: Basic Organization Schema**
1. WordPress Admin → SEO → Search Appearance → General
2. Fill in:
   - Organization name
   - Logo
   - Description
   - Social profiles

**Step 2: Advanced Schema (Code Snippets Plugin)**
1. Install "Code Snippets" plugin
2. Add new snippet:

```php
function add_schema_markup() {
    if (!is_front_page()) return;

    $schema = array(
        '@context' => 'https://schema.org',
        '@type' => 'SoftwareApplication',
        // ... schema data
    );

    echo '<script type="application/ld+json">';
    echo json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    echo '</script>';
}
add_action('wp_head', 'add_schema_markup');
```

### Method 3: HTML (Any Site)

Add to `<head>` section:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Business Name",
  ...
}
</script>
```

## Required Schema Types

### Homepage (Priority 1)
- Organization OR SoftwareApplication OR LocalBusiness
- Includes: name, logo, description, contact info

### FAQ Page (Priority 1)
- FAQPage schema with Question/Answer pairs

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is [product]?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "[answer]"
    }
  }]
}
```

### Blog Posts (Priority 2)
- Article schema on every post

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[title]",
  "author": {
    "@type": "Person",
    "name": "[author]"
  },
  "datePublished": "[date]"
}
```

### Product/Service Pages (Priority 2)
- Product OR Service schema with pricing

## Validation & Testing

### Step 1: Google Rich Results Test
1. Go to: https://search.google.com/test/rich-results
2. Enter your URL
3. Check for errors
4. Verify schema types detected

**Expected:** ✅ Valid schema, no errors

### Step 2: Schema.org Validator
1. Go to: https://validator.schema.org/
2. Enter your URL
3. Review warnings/errors
4. Fix any issues

### Step 3: View Page Source
1. Visit your page
2. Right-click → View Page Source
3. Search for `"@type"`
4. Verify JSON-LD present in `<head>`

## Common Errors & Fixes

### Error: "Missing required field 'image'"
**Fix:** Add image to schema:
```json
"image": "https://yoursite.com/logo.png"
```

### Error: "Invalid price format"
**Fix:** Price must be string without currency symbol:
```json
"price": "49.00"  ✅
"price": "$49"     ❌
```

### Error: "Missing offers"
**Fix:** SoftwareApplication needs offers object

### Warning: "Recommended field missing"
**Action:** Add recommended fields for richer data

## Schema Checklist

**Homepage:**
- [ ] Organization/Software/LocalBusiness schema
- [ ] Logo (min 600x600px)
- [ ] Description (450 chars)
- [ ] Social media profiles
- [ ] Contact information

**FAQ Page:**
- [ ] FAQPage schema
- [ ] 20+ Question/Answer pairs
- [ ] Answers 100-300 words each

**Blog Posts:**
- [ ] Article schema on every post
- [ ] Author information
- [ ] Publish date
- [ ] Headline
- [ ] Image

**Product/Service Pages:**
- [ ] Product/Service schema
- [ ] Pricing information
- [ ] Features list
- [ ] Screenshots/images

## Advanced Schema

### Review Schema
Add customer reviews:
```json
{
  "@type": "SoftwareApplication",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}
```

### Video Schema
For demo/tutorial videos:
```json
{
  "@type": "VideoObject",
  "name": "[video title]",
  "description": "[description]",
  "thumbnailUrl": "[thumbnail]",
  "uploadDate": "[date]"
}
```

### Breadcrumb Schema
For navigation:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://yoursite.com"
  }]
}
```

## Implementation Timeline

**Day 1:**
- Generate schema using fabric pattern
- Customize for your business
- Test locally

**Day 2:**
- Implement on website
- Validate with Google Rich Results
- Fix any errors

**Day 3:**
- Add FAQ page schema
- Implement Article schema on blog posts
- Final validation

**Result:** 15-20 point AI visibility score increase

## Deliverables

- [ ] Homepage schema implemented
- [ ] FAQ page schema live
- [ ] Article schema on blog template
- [ ] All schemas validated (no errors)
- [ ] Screenshot of passing Google Rich Results Test
- [ ] Documentation of what was added
