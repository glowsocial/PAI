import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getIdentitySections } from "@/lib/identity"
import ReactMarkdown from "react-markdown"

export default function IdentityPage() {
    const sections = getIdentitySections()

    const iconMap: Record<string, string> = {
        about: "👤",
        mission: "🎯",
        goals: "📍",
        projects: "🚀",
        preferences: "⚙️",
    }

    return (
        <div className="p-8 max-w-6xl">
            <div className="mb-8">
                <h1 className="text-3xl text-[#192734] mb-2">MY IDENTITY</h1>
                <p className="text-[#192734]/60">
                    Who you are, what you&apos;re working toward, and how AI should understand you.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {sections.map((section) => (
                    <Card
                        key={section.id}
                        className="hover:shadow-md transition-all border-l-4 border-l-[#9399cc]"
                    >
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-xl flex items-center gap-2" style={{ textTransform: 'none', fontFamily: 'Inter' }}>
                                    <span>{iconMap[section.id] || "📄"}</span>
                                    {section.title}
                                </CardTitle>
                                <Badge variant="outline" className="text-[#192734]/50">
                                    Updated: {section.updated}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="prose prose-sm max-w-none text-[#192734]/80">
                                <ReactMarkdown
                                    components={{
                                        h1: ({ children }) => <h2 className="text-lg font-semibold mt-4 mb-2 text-[#192734]">{children}</h2>,
                                        h2: ({ children }) => <h3 className="text-base font-semibold mt-3 mb-2 text-[#192734]">{children}</h3>,
                                        h3: ({ children }) => <h4 className="text-sm font-semibold mt-2 mb-1 text-[#192734]">{children}</h4>,
                                        p: ({ children }) => <p className="text-sm text-[#192734]/70 mb-2">{children}</p>,
                                        ul: ({ children }) => <ul className="list-disc list-inside text-sm text-[#192734]/70 mb-2">{children}</ul>,
                                        li: ({ children }) => <li className="mb-1">{children}</li>,
                                        strong: ({ children }) => <strong className="font-semibold text-[#192734]">{children}</strong>,
                                    }}
                                >
                                    {section.content}
                                </ReactMarkdown>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {sections.length === 0 && (
                <div className="text-center py-12 text-[#192734]/50">
                    <p>No identity files found in data/identity/</p>
                </div>
            )}

            {/* Footer */}
            <div className="mt-10 p-4 rounded-lg bg-[#192734]/5 border border-[#192734]/10">
                <p className="text-xs text-[#192734]/60 text-center">
                    Edit these files in <code className="bg-[#192734]/10 px-1 rounded">data/identity/</code> to update your personal context.
                </p>
            </div>
        </div>
    )
}
