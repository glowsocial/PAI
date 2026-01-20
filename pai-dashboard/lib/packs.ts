import fs from "fs"
import path from "path"

export interface PackInfo {
    id: string
    name: string
    description: string
    type: string
    version: string
    keywords: string[]
    author: string
}

export function getPacksDirectory(): string {
    // In production, this would be configured via env var
    // For now, look relative to the project
    const paiRoot = path.resolve(process.cwd(), "..")
    return path.join(paiRoot, "Packs")
}

export function getAllPacks(): PackInfo[] {
    const packsDir = getPacksDirectory()

    if (!fs.existsSync(packsDir)) {
        console.error("Packs directory not found:", packsDir)
        return []
    }

    const packFolders = fs.readdirSync(packsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() && dirent.name.startsWith("pai-"))
        .map(dirent => dirent.name)

    const packs: PackInfo[] = []

    for (const folder of packFolders) {
        const readmePath = path.join(packsDir, folder, "README.md")

        if (fs.existsSync(readmePath)) {
            const content = fs.readFileSync(readmePath, "utf-8")
            const packInfo = parsePackReadme(folder, content)
            packs.push(packInfo)
        } else {
            // Basic info from folder name
            packs.push({
                id: folder,
                name: folder.replace("pai-", "").split("-").map(w =>
                    w.charAt(0).toUpperCase() + w.slice(1)
                ).join(" "),
                description: "No description available",
                type: folder.includes("skill") ? "skill" : "feature",
                version: "unknown",
                keywords: [],
                author: "unknown",
            })
        }
    }

    return packs.sort((a, b) => a.name.localeCompare(b.name))
}

function parsePackReadme(folderId: string, content: string): PackInfo {
    // Extract YAML frontmatter if present
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)

    let name = folderId.replace("pai-", "").split("-").map(w =>
        w.charAt(0).toUpperCase() + w.slice(1)
    ).join(" ")
    let description = ""
    let type = folderId.includes("skill") ? "skill" :
        folderId.includes("system") ? "system" :
            folderId.includes("server") ? "feature" : "other"
    let version = "unknown"
    let keywords: string[] = []
    let author = "unknown"

    if (frontmatterMatch && frontmatterMatch[1]) {
        const yaml = frontmatterMatch[1]

        // Parse name
        const nameMatch = yaml.match(/name:\s*(.+)/)
        if (nameMatch?.[1]) name = nameMatch[1].trim()

        // Parse description
        const descMatch = yaml.match(/description:\s*(.+)/)
        if (descMatch?.[1]) description = descMatch[1].trim()

        // Parse version
        const versionMatch = yaml.match(/version:\s*(.+)/)
        if (versionMatch?.[1]) version = versionMatch[1].trim()

        // Parse type
        const typeMatch = yaml.match(/type:\s*(.+)/)
        if (typeMatch?.[1]) type = typeMatch[1].trim()

        // Parse author
        const authorMatch = yaml.match(/author:\s*(.+)/)
        if (authorMatch?.[1]) author = authorMatch[1].trim()

        // Parse keywords
        const keywordsMatch = yaml.match(/keywords:\s*\[([^\]]+)\]/)
        if (keywordsMatch?.[1]) {
            keywords = keywordsMatch[1].split(",").map(k => k.trim().replace(/"/g, ""))
        }
    }

    // If no description from frontmatter, try to get first paragraph after title
    if (!description) {
        const lines = content.split("\n")
        for (const rawLine of lines) {
            const line = rawLine.trim()
            if (line && !line.startsWith("#") && !line.startsWith("-") && !line.startsWith(">") && line.length > 20) {
                description = line.slice(0, 200)
                break
            }
        }
    }

    return {
        id: folderId,
        name,
        description: description || "No description available",
        type,
        version,
        keywords: keywords.slice(0, 5),
        author,
    }
}

export function getPackById(id: string): PackInfo | null {
    const packs = getAllPacks()
    return packs.find(p => p.id === id) || null
}

export function getPackReadme(id: string): string | null {
    const packsDir = getPacksDirectory()
    const readmePath = path.join(packsDir, id, "README.md")

    if (fs.existsSync(readmePath)) {
        return fs.readFileSync(readmePath, "utf-8")
    }
    return null
}
