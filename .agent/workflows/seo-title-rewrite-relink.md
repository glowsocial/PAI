---
description: SEO title rewrite + internal linking from Google Search Console data (WordPress)
---

# SEO Title Rewrite + Internal Linking Workflow

**Time:** ~30 minutes per site  
**Cost:** $0  
**Expected impact:** Pages move from position 8-20 → top 5 within 2-4 weeks  

## Prerequisites

- Google Search Console access for the site
- WordPress admin access (editor role or above)
- Yoast SEO plugin installed (for SEO title + meta description fields)

---

## Phase 1: Export & Analyze GSC Data

### Step 1: Export the Pages Report
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Select the property
3. Go to **Performance** → **Search Results**
4. Set date range to **Last 90 days** (or last 28 days for faster sites)
5. Click the **Pages** tab
6. Export as CSV (or just paste the table into the conversation)

### Step 2: Identify Priority Pages
Ask the AI to analyze the data and find pages matching these criteria:

**Tier 1 — CTR Problems (Page 1, bad titles):**
- Position 3-10 + High impressions + CTR under 3%
- These pages are ALREADY ranking — the title just isn't compelling enough

**Tier 2 — Almost There (Page 2, close to breaking through):**
- Position 8-20 + High impressions + Any CTR
- These pages need link equity + better titles to move to page 1

**Tier 3 — High-Impression Sleepers:**
- Position 20+ + Very high impressions + 0 clicks
- Long-shot but high reward if the content is good

Focus on the **top 10 most promising pages** across all tiers.

### Step 3: Rewrite Titles
For each priority page, create an optimized title that:
- Includes the primary query the page ranks for
- Adds a compelling modifier (year, data, price, "how to")
- Stays under 60 characters when possible
- Includes a parenthetical hook: `(2026 Data)`, `(From $49/mo)`, `(Step-by-Step)`
- Feels clickable to a HUMAN, not just keyword-stuffed

Also write a meta description (under 155 chars) that:
- Includes the primary keyword naturally
- Has a specific data point or benefit
- Creates curiosity or urgency

---

## Phase 2: Update Titles in WordPress

### Step 4: Get Post IDs via REST API
// turbo
```bash
# Replace DOMAIN with the actual domain
# Replace each slug in the list
for slug in "slug-1" "slug-2" "slug-3"; do
  result=$(curl -s "https://DOMAIN/wp-json/wp/v2/posts?slug=${slug}&_fields=id,title,slug" 2>/dev/null)
  id=$(echo "$result" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d[0]['id'] if d else 'NOT_FOUND')" 2>/dev/null)
  title=$(echo "$result" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d[0]['title']['rendered'] if d else 'NOT_FOUND')" 2>/dev/null)
  echo "ID: $id | SLUG: $slug | TITLE: $title"
done
```

### Step 5: Generate the Title Update Script
Create a console script using this structure. Save it as a `.js` file for the client:

```javascript
(async () => {
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  let nonce = (typeof wpApiSettings !== 'undefined' && wpApiSettings.nonce) ? wpApiSettings.nonce : null;
  if (!nonce) { console.error('❌ No nonce found.'); return; }

  const updates = [
    { id: POST_ID, title: 'New Title', seo_title: 'New SEO Title', meta_desc: 'New meta description.' },
    // ... more entries
  ];

  for (const post of updates) {
    const res = await fetch(`/wp-json/wp/v2/posts/${post.id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': nonce },
      body: JSON.stringify({
        title: post.title,
        meta: { _yoast_wpseo_title: post.seo_title, _yoast_wpseo_metadesc: post.meta_desc }
      })
    });
    console.log(res.ok ? `✅ ${post.id}` : `❌ ${post.id}`);
    await wait(2000);
  }
})();
```

A full template is available at:
`content-system/scripts/templates/wp-update-titles.template.js`

### Step 6: User Runs the Script
Instruct the user to:
1. Go to `https://DOMAIN/wp-admin/` in Chrome
2. Open DevTools → Console (`Cmd+Option+J`)
3. Paste the generated script
4. Press Enter and wait for results

### Step 7: Verify Updates
// turbo
```bash
for id in ID1 ID2 ID3; do
  result=$(curl -s "https://DOMAIN/wp-json/wp/v2/posts/${id}?_fields=id,title" 2>/dev/null)
  title=$(echo "$result" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d['title']['rendered'])" 2>/dev/null)
  echo "✅ ${id}: ${title}"
done
```

---

## Phase 3: Internal Linking

### Step 8: Map Topic Clusters
Group the site's content into semantic clusters. Common patterns:
- **Time/Effort cluster** — "how long does X take" pages
- **Cost/Pricing cluster** — "how much does X cost" pages
- **Industry/Vertical cluster** — industry-specific landing pages
- **Comparison cluster** — "X vs Y" pages
- **How-to cluster** — tutorial and guide pages

Each cluster should have:
- **1 Hub page** (the highest-impression page in the cluster)
- **5-10 Spoke pages** (related pages that link TO the hub)

### Step 9: Define Link Jobs
For each spoke page, define:
- Which hub page(s) it should link to
- Which sibling pages it should cross-link to
- The anchor text (use natural, varied anchor text — NOT the same phrase every time)

**Rules of thumb:**
- 1 internal link per ~50 words of content
- Use descriptive anchor text, not "click here"
- Vary anchor text — don't use identical text for every link to the same page
- Hub pages should link BACK to 2-3 spokes (bi-directional)
- Check for existing links before adding new ones (avoid duplicates)

### Step 10: Generate the Internal Linking Script
Create a console script using this structure:

```javascript
(async () => {
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  let nonce = (typeof wpApiSettings !== 'undefined' && wpApiSettings.nonce) ? wpApiSettings.nonce : null;
  if (!nonce) { console.error('❌ No nonce found.'); return; }

  const linkJobs = [
    {
      postId: POST_ID,
      paragraph: `<p><strong>Related:</strong> See <a href="https://DOMAIN/hub-page/">anchor text</a> and <a href="https://DOMAIN/sibling/">other topic</a>.</p>`
    },
    // ... more entries
  ];

  for (const job of linkJobs) {
    const getRes = await fetch(`/wp-json/wp/v2/posts/${job.postId}?_fields=id,title,content`, { headers: { 'X-WP-Nonce': nonce } });
    const postData = await getRes.json();
    const content = postData.content.rendered || '';

    // Skip if link already exists
    const href = job.paragraph.match(/href="([^"]+)"/);
    if (href && content.includes(href[1])) { console.log(`⏭️ ${job.postId} — skip`); continue; }

    const raw = postData.content.raw || content;
    const updated = raw + '\n\n' + job.paragraph;

    const res = await fetch(`/wp-json/wp/v2/posts/${job.postId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': nonce },
      body: JSON.stringify({ content: updated })
    });
    console.log(res.ok ? `✅ ${job.postId}` : `❌ ${job.postId}`);
    await wait(2000);
  }
})();
```

A full template is available at:
`content-system/scripts/templates/wp-add-internal-links.template.js`

### Step 11: User Runs the Linking Script
Same process as Step 6 — paste into wp-admin console.

---

## Phase 4: Track Results

### Step 12: Screenshot Baseline
Before making changes, note the current positions for each page.
After changes, check positions at:
- **1 week** — Google re-crawls and re-indexes
- **2 weeks** — Early movement visible
- **4 weeks** — Full impact measurable

### Step 13: Request Re-indexing (Optional)
In Google Search Console:
1. Use the URL Inspection tool
2. Enter each updated URL
3. Click "Request Indexing"
This speeds up re-crawling from days to hours.

---

## Checklist Summary

- [ ] Export GSC Pages report (last 90 days)
- [ ] Identify top 10 priority pages (position 8-20, high impressions)
- [ ] Rewrite titles with query-matching modifiers
- [ ] Write compelling meta descriptions
- [ ] Get post IDs via REST API
- [ ] Generate title update script
- [ ] User runs title script in wp-admin console
- [ ] Verify all titles updated
- [ ] Map topic clusters (hub + spoke)
- [ ] Define link jobs (which pages link where)
- [ ] Generate internal linking script
- [ ] User runs linking script in wp-admin console
- [ ] Verify link counts
- [ ] Screenshot baseline positions
- [ ] Request re-indexing in GSC
- [ ] Check results at 1, 2, and 4 weeks
