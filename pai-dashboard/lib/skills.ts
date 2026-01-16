import fs from "fs"
import path from "path"
import os from "os"

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
}

export interface MarketingAsset {
    category: string
    name: string
    path: string
    type: "email" | "page" | "document" | "audit"
    count?: number
}

function getSkillsDir(): string {
    return path.join(os.homedir(), ".claude", "skills")
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

        // Try to get description from SKILL.md or README.md
        if (fs.existsSync(skillMdPath)) {
            const content = fs.readFileSync(skillMdPath, "utf-8")
            const descMatch = content.match(/description:\s*(.+)/i)
            if (descMatch) description = descMatch[1].trim()
        } else if (fs.existsSync(readmePath)) {
            const content = fs.readFileSync(readmePath, "utf-8")
            const lines = content.split("\n").filter(l => l.trim() && !l.startsWith("#"))
            if (lines[0]) description = lines[0].slice(0, 150)
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

    const folders = fs.readdirSync(patternsDir, { withFileTypes: true })
        .filter(d => d.isDirectory())

    return folders.map(folder => ({
        id: folder.name,
        name: folder.name.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
        path: path.join(patternsDir, folder.name),
    })).sort((a, b) => a.name.localeCompare(b.name))
}

export function getMarketingAssets(): MarketingAsset[] {
    // Look in PAI/marketing folder
    const paiRoot = path.resolve(process.cwd(), "..")
    const marketingDir = path.join(paiRoot, "marketing")

    if (!fs.existsSync(marketingDir)) {
        return []
    }

    const assets: MarketingAsset[] = []

    // Glow Social Nurture emails
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

    // Glow Social Onboarding
    const onboardingDir = path.join(marketingDir, "glow-social-onboarding")
    if (fs.existsSync(onboardingDir)) {
        assets.push({
            category: "Glow Social Onboarding",
            name: "Onboarding Emails",
            path: onboardingDir,
            type: "email",
        })
    }

    // Webinar
    const webinarDir = path.join(marketingDir, "glow-social-webinar")
    if (fs.existsSync(webinarDir)) {
        assets.push({
            category: "Glow Social Webinar",
            name: "Webinar Materials",
            path: webinarDir,
            type: "document",
        })
    }

    // Audits
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

    // Swipe File
    const swipeDir = path.join(marketingDir, "swipe_file")
    if (fs.existsSync(swipeDir)) {
        assets.push({
            category: "Swipe File",
            name: "Content Templates",
            path: swipeDir,
            type: "document",
        })
    }

    // Brand guidelines
    const brandGuidelinesPath = path.join(marketingDir, "glow-social-brand-guidelines.md")
    if (fs.existsSync(brandGuidelinesPath)) {
        assets.push({
            category: "Brand",
            name: "Glow Social Brand Guidelines",
            path: brandGuidelinesPath,
            type: "document",
        })
    }

    return assets
}
