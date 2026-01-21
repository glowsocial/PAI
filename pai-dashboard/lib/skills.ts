import fs from "fs"
import path from "path"

export interface CustomSkill {
    id: string
    name: string
    description: string
    path: string
    hasWorkflows: boolean
    workflowCount: number
}

export interface FabricPattern {
    id: string
    name: string
    path: string
    isCustom: boolean
}

export interface MarketingAsset {
    category: string
    name: string
    path: string
    type: "email" | "page" | "document" | "audit"
    count?: number
}

function getSkillsDir(): string {
    // Use repo-local data folder (works on Vercel)
    return path.join(process.cwd(), "data", "skills")
}

export function getCustomSkills(): CustomSkill[] {
    const skillsDir = getSkillsDir()

    if (!fs.existsSync(skillsDir)) {
        return []
    }

    const folders = fs.readdirSync(skillsDir, { withFileTypes: true })
        .filter(d => d.isDirectory() && !d.name.startsWith("."))

    const skills: CustomSkill[] = []

    for (const folder of folders) {
        const skillPath = path.join(skillsDir, folder.name)
        const skillMdPath = path.join(skillPath, "SKILL.md")
        const readmePath = path.join(skillPath, "README.md")
        const workflowsPath = path.join(skillPath, "workflows")

        let description = ""

        if (fs.existsSync(skillMdPath)) {
            const content = fs.readFileSync(skillMdPath, "utf-8")
            const descMatch = content.match(/description:\s*(.+)/i)
            if (descMatch?.[1]) description = descMatch[1].trim()
        } else if (fs.existsSync(readmePath)) {
            const content = fs.readFileSync(readmePath, "utf-8")
            const lines = content.split("\n").filter(l => l.trim() && !l.startsWith("#"))
            const firstLine = lines[0]
            if (firstLine) description = firstLine.slice(0, 150)
        }

        let workflowCount = 0
        if (fs.existsSync(workflowsPath)) {
            workflowCount = fs.readdirSync(workflowsPath).filter(f => f.endsWith(".md")).length
        }

        skills.push({
            id: folder.name,
            name: folder.name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
            description: description || "Custom skill",
            path: skillPath,
            hasWorkflows: workflowCount > 0,
            workflowCount,
        })
    }

    return skills.sort((a, b) => a.name.localeCompare(b.name))
}

export function getFabricPatterns(): FabricPattern[] {
    const patternsDir = path.join(getSkillsDir(), "fabric", "fabric-repo", "data", "patterns")

    if (!fs.existsSync(patternsDir)) {
        return []
    }

    // Known custom pattern prefixes (yours, not default Fabric)
    const customPrefixes = [
        "10_", "10x_", "ai_visibility", "ascension", "awareness",
        "bethany", "bob_stone", "brand_platform", "campaign_driver",
        "cold_outreach", "content_", "glow_social", "create_hormozi",
        "five_awareness", "generate_authority", "generate_carousel",
        "generate_comparison", "generate_local", "generate_question",
        "generate_research", "generate_social_post", "generate_story",
        "generate_video_script", "generate_visual", "sales_letter",
        "same_side", "setup_stripe", "sms_followup", "social_multi",
        "soft_pitch", "spector", "t_", "ten_minute_vsl", "three_desires",
        "title_optimization", "value_bombs", "vsl_framework", "webinar_funnel",
        "who_do_you_know"
    ]

    const folders = fs.readdirSync(patternsDir, { withFileTypes: true })
        .filter(d => d.isDirectory())

    const patterns = folders.map(folder => {
        const isCustom = customPrefixes.some(prefix => folder.name.startsWith(prefix))
        return {
            id: folder.name,
            name: folder.name.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
            path: path.join(patternsDir, folder.name),
            isCustom,
        }
    })

    // Sort: custom first, then alphabetically within each group
    return patterns.sort((a, b) => {
        if (a.isCustom && !b.isCustom) return -1
        if (!a.isCustom && b.isCustom) return 1
        return a.name.localeCompare(b.name)
    })
}

export function getMarketingAssets(): MarketingAsset[] {
    const paiRoot = path.resolve(process.cwd(), "..")
    const marketingDir = path.join(paiRoot, "marketing")

    if (!fs.existsSync(marketingDir)) {
        return []
    }

    const assets: MarketingAsset[] = []

    const nurtureDir = path.join(marketingDir, "glow-social-nurture", "emails")
    if (fs.existsSync(nurtureDir)) {
        const emails = fs.readdirSync(nurtureDir).filter(f => f.endsWith(".md"))
        assets.push({
            category: "Glow Social Nurture",
            name: "Nurture Email Sequence",
            path: nurtureDir,
            type: "email",
            count: emails.length,
        })
    }

    const onboardingDir = path.join(marketingDir, "glow-social-onboarding")
    if (fs.existsSync(onboardingDir)) {
        assets.push({
            category: "Glow Social Onboarding",
            name: "Onboarding Emails",
            path: onboardingDir,
            type: "email",
        })
    }

    const webinarDir = path.join(marketingDir, "glow-social-webinar")
    if (fs.existsSync(webinarDir)) {
        assets.push({
            category: "Glow Social Webinar",
            name: "Webinar Materials",
            path: webinarDir,
            type: "document",
        })
    }

    const auditsDir = path.join(marketingDir, "audits")
    if (fs.existsSync(auditsDir)) {
        const audits = fs.readdirSync(auditsDir).filter(f => f.endsWith(".md"))
        assets.push({
            category: "AI Visibility Audits",
            name: "Completed Audits",
            path: auditsDir,
            type: "audit",
            count: audits.length,
        })
    }

    const swipeDir = path.join(marketingDir, "swipe_file")
    if (fs.existsSync(swipeDir)) {
        assets.push({
            category: "Swipe File",
            name: "Content Templates",
            path: swipeDir,
            type: "document",
        })
    }

    return assets
}
