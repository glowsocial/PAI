# Generate a New Social Media Post

**Purpose:** To generate a new, unique social media post based on proven content formats from the swipe file.

**When to Use:**
- When the user wants to create a new social media post.
- When the user wants to generate content for a specific category (e.g., "quick_tips").

**Steps:**

1.  **Ask the user for the post category** (if not already specified). The available categories are:
    *   `quick_tips` - Tips and tricks for local business social media success
    *   `community_questions` - Engaging questions to build community
    *   `myth_vs_fact` - Educational posts debunking common myths

2.  **Select a random template** from the chosen category:
    - Templates are located at: `~/Documents/projects/PAI/marketing/swipe_file/{category}/`
    - Read the contents of a random .md file from that directory
    
3.  **Generate a new post** based on the template using this approach:
    - Keep the same structure and format as the template
    - Create fresh, unique content that follows the same pattern
    - Maintain the helpful, encouraging tone for local businesses
    - Include the #GlowSocial hashtag
    - Align with this core message: "Local businesses need to have a presence on social media. And local businesses are not content creators, and they don't have the same budgets that equity-backed franchises and corporate stores have. So they need Glow Social."

4.  **Present the generated post** to the user in a clean, ready-to-use format.

**Example:**

If the template is:
> "Local businesses, want to get more out of your content? Try this: turn your customer FAQs into a series of posts. It works because you're creating valuable content that directly answers your customers' questions. #GlowSocial"

Generate something like:
> "Local businesses, struggling with content ideas? Try this: share behind-the-scenes moments from your daily operations. It works because people love seeing the real humans behind your brand. #GlowSocial"

**Outputs:**
- A new, unique social media post ready for publishing

**Related Workflows:**
- None
