import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllPacks } from "@/lib/packs"

export default function SkillsPage() {
    const allPacks = getAllPacks()
    const skills = allPacks.filter(p => p.type === "skill")

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Skills</h1>
                <p className="text-gray-600">
                    You have {skills.length} skills installed. Each skill provides specialized capabilities.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                    <Card key={skill.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-xl">{skill.name}</CardTitle>
                                <Badge className="bg-[#9854f1] text-white">skill</Badge>
                            </div>
                            {skill.version !== "unknown" && (
                                <p className="text-xs text-gray-400">v{skill.version} by {skill.author}</p>
                            )}
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-gray-600">{skill.description}</p>

                            {skill.keywords.length > 0 && (
                                <div>
                                    <p className="text-sm font-semibold text-gray-700 mb-2">Keywords:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {skill.keywords.map((keyword) => (
                                            <Badge key={keyword} variant="outline" className="text-xs bg-purple-50 border-[#9854f1]/30">
                                                {keyword}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {skills.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    <p>No skills found. Make sure your PAI Packs directory is accessible.</p>
                </div>
            )}
        </div>
    )
}
