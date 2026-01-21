import fs from "fs"
import path from "path"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

function getPatternContent(id: string): { system: string, readme: string } | null {
    const patternsDir = path.join(process.cwd(), "data", "skills", "fabric", "fabric-repo", "data", "patterns")
    const patternDir = path.join(patternsDir, id)

    if (!fs.existsSync(patternDir)) {
        return null
    }

    let system = ""
    let readme = ""

    const systemPath = path.join(patternDir, "system.md")
    if (fs.existsSync(systemPath)) {
        system = fs.readFileSync(systemPath, "utf-8")
    }

    const readmePath = path.join(patternDir, "README.md")
    if (fs.existsSync(readmePath)) {
        readme = fs.readFileSync(readmePath, "utf-8")
    }

    return { system, readme }
}

export default async function PatternPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const content = getPatternContent(id)

    if (!content) {
        return (
            <div className="p-6">
                <p className="text-[#192734]/60">Pattern not found</p>
            </div>
        )
    }

    const displayName = id.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")

    return (
        <div className="p-6 max-w-4xl">
            <Link
                href="/"
                className="inline-flex items-center text-sm text-[#9399cc] hover:text-[#192734] mb-4"
            >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to patterns
            </Link>

            <h1 className="text-2xl text-[#192734] mb-1" style={{ textTransform: 'none', fontFamily: 'Inter' }}>
                {displayName}
            </h1>
            <p className="text-xs text-[#192734]/40 mb-6 font-mono">{id}</p>

            {content.system && (
                <div className="mb-6">
                    <h2 className="text-sm font-semibold text-[#192734] mb-2">SYSTEM PROMPT</h2>
                    <div className="bg-[#192734] text-white/90 p-4 rounded-lg overflow-auto max-h-[70vh]">
                        <pre className="text-sm whitespace-pre-wrap font-mono leading-relaxed">
                            {content.system}
                        </pre>
                    </div>
                </div>
            )}

            {content.readme && (
                <div>
                    <h2 className="text-sm font-semibold text-[#192734] mb-2">README</h2>
                    <div className="bg-white border border-[#192734]/10 p-4 rounded-lg">
                        <pre className="text-sm whitespace-pre-wrap text-[#192734]/80 leading-relaxed">
                            {content.readme}
                        </pre>
                    </div>
                </div>
            )}
        </div>
    )
}
