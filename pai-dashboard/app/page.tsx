import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    PenLine,
    Search,
    Image,
    Calendar,
    Users,
    Lightbulb,
    Mail,
    FileText,
    Sparkles,
    Megaphone,
    Layers,
    FolderOpen,
    Zap
} from "lucide-react"
import Link from "next/link"
import { getCustomSkills, getFabricPatterns, getMarketingAssets } from "@/lib/skills"
import { getAllPacks } from "@/lib/packs"

export default function HomePage() {
    const customSkills = getCustomSkills()
    const fabricPatterns = getFabricPatterns()
    const marketingAssets = getMarketingAssets()
    const packs = getAllPacks()

    // Things we can do together - curated list
    const capabilities = [
        {
            category: "MARKETING & CONTENT",
            color: "#d7e278",
            items: [
                { title: "Write social media posts", description: "Generate on-brand posts for any platform", icon: PenLine },
                { title: "Create an email sequence", description: "Nurture, welcome, launch — any type", icon: Mail },
                { title: "Write landing page copy", description: "Headlines, body copy, CTAs", icon: FileText },
                { title: "Plan content calendar", description: "Weeks or months of content", icon: Calendar },
            ]
        },
        {
            category: "RESEARCH & ANALYSIS",
            color: "#9399cc",
            items: [
                { title: "Research any topic", description: "Deep dive with synthesis", icon: Search },
                { title: "Run AI visibility audit", description: "How a brand appears to AI", icon: Lightbulb },
                { title: "Analyze competitors", description: "Positioning, messaging, gaps", icon: Users },
            ]
        },
        {
            category: "CREATIVE",
            color: "#ddecf7",
            items: [
                { title: "Generate images", description: "Visuals, mockups, graphics", icon: Image },
                { title: "Design a carousel", description: "LinkedIn or Instagram slides", icon: Sparkles },
                { title: "Create presentations", description: "Pitch decks, workshops", icon: Megaphone },
            ]
        },
    ]

    return (
        <div className="p-8 max-w-6xl">
            {/* Hero */}
            <div className="mb-10">
                <h1 className="text-4xl text-[#192734] mb-3">
                    WHAT WE CAN DO TOGETHER
                </h1>
                <p className="text-lg text-[#192734]/70 max-w-2xl">
                    Your personal AI system with {fabricPatterns.length} patterns, {customSkills.length} custom skills, and {packs.length} packs.
                </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <Card className="bg-[#d7e278]/20 border-[#d7e278]">
                    <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-[#192734]">{fabricPatterns.length}</p>
                        <p className="text-sm text-[#192734]/60">Fabric Patterns</p>
                    </CardContent>
                </Card>
                <Card className="bg-[#9399cc]/20 border-[#9399cc]">
                    <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-[#192734]">{customSkills.length}</p>
                        <p className="text-sm text-[#192734]/60">Custom Skills</p>
                    </CardContent>
                </Card>
                <Card className="bg-[#ddecf7] border-[#ddecf7]">
                    <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-[#192734]">{packs.length}</p>
                        <p className="text-sm text-[#192734]/60">PAI Packs</p>
                    </CardContent>
                </Card>
                <Card className="bg-[#d2c964]/20 border-[#d2c964]">
                    <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-[#192734]">{marketingAssets.length}</p>
                        <p className="text-sm text-[#192734]/60">Marketing Assets</p>
                    </CardContent>
                </Card>
            </div>

            {/* Your Custom Skills */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <Zap className="h-5 w-5 text-[#9399cc]" />
                    <h2 className="text-sm font-semibold text-[#192734]/60 tracking-wider">
                        YOUR CUSTOM SKILLS
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {customSkills.map((skill) => (
                        <Card key={skill.id} className="hover:shadow-md transition-all border-l-4 border-l-[#9399cc]">
                            <CardContent className="p-4">
                                <h3 className="font-semibold text-[#192734] mb-1" style={{ textTransform: 'none', fontFamily: 'Inter' }}>
                                    {skill.name}
                                </h3>
                                <p className="text-sm text-[#192734]/60 line-clamp-2">{skill.description}</p>
                                {skill.hasWorkflows && (
                                    <Badge className="mt-2 bg-[#9399cc]/20 text-[#192734] text-xs">
                                        {skill.workflowCount} workflows
                                    </Badge>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Marketing Assets */}
            {marketingAssets.length > 0 && (
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <FolderOpen className="h-5 w-5 text-[#d7e278]" />
                        <h2 className="text-sm font-semibold text-[#192734]/60 tracking-wider">
                            YOUR MARKETING ASSETS
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {marketingAssets.map((asset) => (
                            <Card key={asset.category} className="hover:shadow-md transition-all border-l-4 border-l-[#d7e278]">
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-[#192734] mb-1" style={{ textTransform: 'none', fontFamily: 'Inter' }}>
                                        {asset.name}
                                    </h3>
                                    <p className="text-sm text-[#192734]/60">{asset.category}</p>
                                    {asset.count && (
                                        <Badge className="mt-2 bg-[#d7e278]/30 text-[#192734] text-xs">
                                            {asset.count} items
                                        </Badge>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {/* Fabric Patterns Preview */}
            <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <Layers className="h-5 w-5 text-[#192734]" />
                        <h2 className="text-sm font-semibold text-[#192734]/60 tracking-wider">
                            FABRIC PATTERNS ({fabricPatterns.length})
                        </h2>
                    </div>
                    <Link href="/patterns" className="text-sm text-[#9399cc] hover:underline">
                        View all →
                    </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                    {fabricPatterns.slice(0, 20).map((pattern) => (
                        <Badge
                            key={pattern.id}
                            variant="outline"
                            className="text-xs bg-white hover:bg-[#ddecf7] cursor-pointer transition-colors"
                        >
                            {pattern.name}
                        </Badge>
                    ))}
                    {fabricPatterns.length > 20 && (
                        <Badge variant="outline" className="text-xs bg-[#192734] text-white">
                            +{fabricPatterns.length - 20} more
                        </Badge>
                    )}
                </div>
            </div>

            {/* Capability Sections */}
            <div className="space-y-8">
                {capabilities.map((section) => (
                    <div key={section.category}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: section.color }} />
                            <h2 className="text-sm font-semibold text-[#192734]/60 tracking-wider">
                                {section.category}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {section.items.map((item) => (
                                <Card
                                    key={item.title}
                                    className="group cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-[#d7e278] bg-white"
                                >
                                    <CardContent className="p-4">
                                        <div className="p-2 rounded-lg bg-[#ddecf7] group-hover:bg-[#d7e278] transition-colors w-fit mb-3">
                                            <item.icon className="h-4 w-4 text-[#192734]" />
                                        </div>
                                        <h3 className="font-medium text-[#192734] text-sm mb-1" style={{ textTransform: 'none', fontFamily: 'Inter' }}>
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-[#192734]/60">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 rounded-xl bg-[#192734] text-white">
                <h2 className="text-lg mb-2">NEED SOMETHING ELSE?</h2>
                <p className="text-white/70 text-sm mb-4">
                    This is just the highlight reel. Ask me anything — I&apos;m here to help.
                </p>
                <Link
                    href="/ask"
                    className="inline-block px-5 py-2.5 bg-[#d7e278] text-[#192734] font-semibold rounded-lg hover:bg-[#d7e278]/90 transition-colors text-sm"
                    style={{ textTransform: 'none', fontFamily: 'Inter' }}
                >
                    Ask PAI anything →
                </Link>
            </div>
        </div>
    )
}
