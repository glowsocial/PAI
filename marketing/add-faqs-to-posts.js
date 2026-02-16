// =============================================================
// ADD FAQs TO BLOG POSTS — Paste in wp-admin Console (Cmd+Option+J)
// 
// This script:
// 1. Appends visible FAQ HTML (accordion style) to each post
// 2. Injects FAQPage JSON-LD schema into the post content
// 3. Checks for existing FAQs to avoid duplicates
//
// Generated: 2026-02-12
// =============================================================

(async () => {
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    let nonce = (typeof wpApiSettings !== 'undefined' && wpApiSettings.nonce) ? wpApiSettings.nonce : null;
    if (!nonce) { console.error('❌ No nonce found. Make sure you are logged into wp-admin.'); return; }

    const faqJobs = [
        {
            postId: 4900,
            slug: 'average-time-social-media-marketing',
            faqs: [
                {
                    q: 'How many hours a week should a small business spend on social media?',
                    a: 'Most small businesses spend 3-5 hours per week on social media when doing it manually. This includes writing captions, creating or finding images, scheduling posts, and responding to comments. With AI-powered automation tools, that time drops to under 1 hour per month.'
                },
                {
                    q: 'Can I manage social media in 30 minutes a day?',
                    a: 'Yes, if you batch your content creation and use scheduling tools. The most efficient approach is to create a week\'s worth of posts in one sitting (about 1-2 hours), then schedule them to publish automatically. Services like Glow Social eliminate even that time by handling the entire process for $49/month.'
                },
                {
                    q: 'What takes the most time in social media marketing?',
                    a: 'Content creation — specifically writing captions and designing visuals — takes up 60-70% of social media marketing time. Strategy and planning account for about 15%, and engagement (replying to comments and messages) takes the remaining 15-20%. Automating the content creation step is the single biggest time-saver.'
                }
            ]
        },
        {
            postId: 5646,
            slug: 'social-media-real-estate-agents',
            faqs: [
                {
                    q: 'How often should real estate agents post on social media?',
                    a: 'Real estate agents should post at least 3 times per week to stay top-of-mind with potential clients. Consistency matters more than frequency — posting 3 times every week beats posting 10 times one week and nothing the next. Glow Social publishes 12 posts per month (about 3 per week), which hits the sweet spot for visibility without overwhelming your audience.'
                },
                {
                    q: 'What should real estate agents post on social media besides listings?',
                    a: 'The best-performing real estate social media content includes neighborhood spotlights, local market updates, home buying and selling tips, behind-the-scenes of open houses, client success stories (with permission), and community event highlights. A good rule of thumb: only 20% of your posts should be listings. The other 80% should position you as the local expert.'
                },
                {
                    q: 'Is social media worth it for new real estate agents?',
                    a: 'Absolutely. Social media is one of the most cost-effective ways for new agents to build visibility and credibility before they have a large referral network. Consistent posting helps you appear active and professional to prospects who Google you. For new agents on a tight budget, automated services starting at $49/month provide professional-looking content without the time investment.'
                }
            ]
        },
        {
            postId: 5423,
            slug: 'hours-per-week-social-media-takes',
            faqs: [
                {
                    q: 'How many hours does social media management take per week?',
                    a: 'Manual social media management for a small business typically takes 6-10 hours per week. This includes content planning (1-2 hours), content creation (3-4 hours), scheduling and publishing (1-2 hours), and engagement (1-2 hours). Businesses using AI automation tools can reduce this to less than 1 hour per week.'
                },
                {
                    q: 'Is spending 20 hours a week on social media too much for a small business?',
                    a: 'Yes. If you\'re spending 20 hours a week on social media as a small business owner, you\'re likely doing it manually without any tools or systems. That\'s the equivalent of a part-time employee. Most successful small businesses get great results with 3-5 hours per week using scheduling tools, or under 1 hour per month using done-for-you services.'
                },
                {
                    q: 'What\'s the fastest way to handle social media for a small business?',
                    a: 'The fastest approach is a done-for-you service that handles content creation and scheduling automatically. Services like Glow Social create and publish 12 posts per month for $49, requiring about 5 minutes of initial setup and no ongoing time from you. The next fastest option is batching — creating all your content for the month in a single 2-3 hour session.'
                }
            ]
        },
        {
            postId: 5479,
            slug: 'best-affordable-social-media-management-small-business',
            faqs: [
                {
                    q: 'What is the most affordable social media management service for small businesses?',
                    a: 'The most affordable done-for-you social media management services in 2026 start at $49/month. Glow Social is one of the lowest-cost options that includes both content creation and automatic publishing. Traditional agencies charge $500-$2,000+ per month, and freelance social media managers typically charge $300-$750 per month.'
                },
                {
                    q: 'Can I get good social media management for under $100 a month?',
                    a: 'Yes. AI-powered services have made quality social media management available for under $100/month. At this price point, you can get 12+ custom posts per month, automatic scheduling, and multi-platform publishing. The key difference from free DIY tools is that you don\'t have to write or design anything — the service handles the entire process.'
                },
                {
                    q: 'What\'s the difference between a social media scheduling tool and a management service?',
                    a: 'A scheduling tool (like Buffer or Hootsuite) lets you schedule posts you\'ve already created — you still have to write captions, design images, and decide what to post. A management service (like Glow Social) creates the content for you and publishes it automatically. Scheduling tools cost $15-$50/month but require 5-10 hours of your time. Management services cost $49-$200/month but require almost no time.'
                }
            ]
        },
        {
            postId: 5498,
            slug: 'best-social-media-service-auto-repair-shops',
            faqs: [
                {
                    q: 'Do auto repair shops need social media?',
                    a: 'Yes. When a car breaks down, the first thing most people do is Google "auto repair near me." Google\'s results favor businesses with active social media profiles and recent Google Business Profile posts. An auto repair shop that hasn\'t posted in months signals to potential customers — and to Google — that the business may be inactive.'
                },
                {
                    q: 'What should an auto repair shop post on social media?',
                    a: 'The best-performing content for auto repair shops includes seasonal maintenance tips (winterization, summer AC checks), before-and-after repair photos, customer car spotlights, staff introductions, special offers, and educational content like "5 signs your brakes need replacing." Avoid overly technical jargon — post in language your customers actually use.'
                },
                {
                    q: 'How much does social media cost for an auto repair shop?',
                    a: 'DIY social media is free but takes 5-10 hours per week. Hiring a freelancer runs $300-$750/month. A marketing agency typically charges $1,000-$2,500/month. AI-powered services like Glow Social offer done-for-you posting for $49/month with industry-specific content for auto repair shops, making it the most cost-effective option for most independent shops.'
                }
            ]
        },
        {
            postId: 5664,
            slug: 'ai-tools-vs-agencies-cost',
            faqs: [
                {
                    q: 'Are AI social media tools as good as hiring an agency?',
                    a: 'For most small businesses, AI tools deliver 80-90% of the value of an agency at 2-5% of the cost. Agencies excel at high-touch strategy, crisis management, and multi-channel campaigns for larger businesses. But for a local business that just needs consistent, professional posts to stay visible online, AI tools produce comparable content quality at a fraction of the price.'
                },
                {
                    q: 'How much do social media agencies charge vs AI tools?',
                    a: 'Social media agencies typically charge $1,500-$5,000+ per month for small business accounts. AI-powered social media tools range from $29-$200 per month. The price difference reflects labor costs — agencies employ human writers and designers, while AI tools automate content creation. For local businesses needing basic posting consistency, AI tools offer the better ROI.'
                },
                {
                    q: 'When should you hire a social media agency instead of using AI?',
                    a: 'Consider hiring an agency if you need custom photography or video production, complex paid advertising campaigns, influencer partnerships, crisis communication management, or multi-brand coordination. If your primary goal is simply maintaining an active social media presence with consistent posts, an AI tool at $49-$100/month will get the job done without the agency price tag.'
                }
            ]
        },
        {
            postId: 5661,
            slug: 'posting-frequency-local-business',
            faqs: [
                {
                    q: 'How often should a local business post on social media?',
                    a: 'Local businesses should aim for 3-4 posts per week across their primary platforms. Research shows diminishing returns beyond daily posting for local businesses, while posting fewer than twice per week can make your business appear inactive. The key is consistency — a predictable posting schedule outperforms sporadic bursts of activity.'
                },
                {
                    q: 'Is posting once a week enough for a local business?',
                    a: 'Once a week is better than nothing, but it\'s below the recommended minimum for maintaining visibility. At one post per week, your content gets buried quickly by the algorithm, and potential customers who check your profile may see a gap of several days between posts. Three posts per week is the minimum threshold where most local businesses start seeing engagement and visibility benefits.'
                },
                {
                    q: 'Does posting more on social media get more customers?',
                    a: 'Not necessarily. Posting more helps only up to a point — for local businesses, 3-5 posts per week is the sweet spot. Beyond that, quality matters more than quantity. What does drive customers is consistency: businesses that post regularly build trust with people who check their profiles before calling. Social media doesn\'t usually generate direct leads — it validates your business when people are already considering you.'
                }
            ]
        },
        {
            postId: 5465,
            slug: 'best-social-media-service-real-estate-agents',
            faqs: [
                {
                    q: 'What is the best social media service for real estate agents?',
                    a: 'The best social media service for real estate agents depends on your budget and time. For done-for-you posting at the lowest cost, Glow Social ($49/month) creates and publishes 12 custom posts per month. For agents who want to create their own content, Coffee & Contracts provides real estate-specific templates. For agents with bigger budgets, dedicated real estate marketing agencies offer full-service packages starting at $500/month.'
                },
                {
                    q: 'How much should a real estate agent spend on social media?',
                    a: 'Most real estate agents should budget $50-$200/month for social media management. At the low end, AI-powered services handle posting automatically for $49/month. At the higher end, you can combine automated posting with paid social media advertising ($100-$500/month). The key is keeping costs proportional to your commission income — spending $2,000/month on social media rarely makes sense until you\'re consistently closing 3+ deals per month.'
                },
                {
                    q: 'Should real estate agents use Instagram or Facebook?',
                    a: 'Both, but Facebook is typically more important for real estate agents targeting homeowners and sellers (the largest demographic skews 35-65), while Instagram is better for reaching first-time buyers (25-40 demographic). Ideally, post to both platforms consistently. Services like Glow Social publish to Facebook, Instagram, LinkedIn, and TikTok simultaneously, so you don\'t have to choose.'
                }
            ]
        }
    ];

    console.log(`🚀 Starting FAQ injection for ${faqJobs.length} posts...\n`);

    for (const job of faqJobs) {
        try {
            // Fetch current post content
            const getRes = await fetch(`/wp-json/wp/v2/posts/${job.postId}?_fields=id,title,content`, {
                headers: { 'X-WP-Nonce': nonce }
            });
            const postData = await getRes.json();
            const content = postData.content?.rendered || postData.content?.raw || '';

            // Check if FAQs already exist
            if (content.includes('frequently-asked') || content.includes('faq-section') || content.includes('schema.org/FAQPage')) {
                console.log(`⏭️  ${job.postId} (${job.slug}) — FAQs already exist, skipping`);
                continue;
            }

            // Build FAQ HTML
            let faqHtml = '\n\n<!-- FAQ Section -->\n';
            faqHtml += '<div class="faq-section" style="margin-top: 2em; padding-top: 1.5em; border-top: 1px solid #e5e7eb;">\n';
            faqHtml += '<h2>Frequently Asked Questions</h2>\n';

            for (const faq of job.faqs) {
                faqHtml += `<h3>${faq.q}</h3>\n`;
                faqHtml += `<p>${faq.a}</p>\n`;
            }
            faqHtml += '</div>\n';

            // Build FAQPage JSON-LD schema
            const schemaObj = {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                'mainEntity': job.faqs.map(faq => ({
                    '@type': 'Question',
                    'name': faq.q,
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': faq.a
                    }
                }))
            };

            // Add schema as script tag in the post content
            // (WordPress will render this in the post body)
            faqHtml += `\n<!-- FAQPage Schema -->\n`;
            faqHtml += `<script type="application/ld+json">${JSON.stringify(schemaObj)}</script>\n`;

            // Append to existing content
            const raw = postData.content?.raw || content;
            const updated = raw + faqHtml;

            // Update the post
            const res = await fetch(`/wp-json/wp/v2/posts/${job.postId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': nonce },
                body: JSON.stringify({ content: updated })
            });

            if (res.ok) {
                console.log(`✅ ${job.postId} (${job.slug}) — ${job.faqs.length} FAQs + schema added`);
            } else {
                const err = await res.text();
                console.log(`❌ ${job.postId} (${job.slug}) — Error: ${err}`);
            }

            await wait(2000);
        } catch (err) {
            console.log(`❌ ${job.postId} (${job.slug}) — ${err.message}`);
        }
    }

    console.log('\n✅ Done! Request re-indexing in GSC for all updated URLs.');
})();
