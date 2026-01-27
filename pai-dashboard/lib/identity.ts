import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface IdentitySection {
    id: string
    title: string
    content: string
    updated: string
    path: string
}

function getIdentityDir(): string {
    return path.join(process.cwd(), "data", "identity")
}

export function getIdentitySections(): IdentitySection[] {
    const identityDir = getIdentityDir()

    if (!fs.existsSync(identityDir)) {
        return []
    }

    const files = fs.readdirSync(identityDir)
        .filter(f => f.endsWith(".md"))

    const sections: IdentitySection[] = []

    for (const file of files) {
        const filePath = path.join(identityDir, file)
        const content = fs.readFileSync(filePath, "utf-8")
        const { data, content: body } = matter(content)

        sections.push({
            id: file.replace(".md", ""),
            title: data.title || file.replace(".md", ""),
            content: body,
            updated: data.updated || "Unknown",
            path: filePath,
        })
    }

    // Sort by preferred order
    const order = ["about", "mission", "goals", "projects", "preferences"]
    return sections.sort((a, b) => {
        const aIndex = order.indexOf(a.id)
        const bIndex = order.indexOf(b.id)
        if (aIndex === -1 && bIndex === -1) return a.title.localeCompare(b.title)
        if (aIndex === -1) return 1
        if (bIndex === -1) return -1
        return aIndex - bIndex
    })
}

export function getIdentitySection(id: string): IdentitySection | null {
    const identityDir = getIdentityDir()
    const filePath = path.join(identityDir, `${id}.md`)

    if (!fs.existsSync(filePath)) {
        return null
    }

    const content = fs.readFileSync(filePath, "utf-8")
    const { data, content: body } = matter(content)

    return {
        id,
        title: data.title || id,
        content: body,
        updated: data.updated || "Unknown",
        path: filePath,
    }
}

export function getAllIdentity(): Record<string, string> {
    const sections = getIdentitySections()
    const identity: Record<string, string> = {}

    for (const section of sections) {
        identity[section.id] = section.content
    }

    return identity
}
