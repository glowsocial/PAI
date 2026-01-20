import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getCustomSkills } from "@/lib/skills"

export default function SkillsPage() {
    const skills = getCustomSkills()

    return (
        <div className="p-8 max-w-6xl">
            <div className="mb-8">
                <h1 className="text-3xl text-[#192734] mb-2">MY SKILLS</h1>
                <p className="text-[#192734]/60">
                    {skills.length} custom skills from your personal AI system.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                    <Card
                        key={skill.id}
                        className="hover:shadow-md transition-all border-l-4 border-l-[#9399cc]"
                    >
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg" style={{ textTransform: 'none', fontFamily: 'Inter' }}>
                                    {skill.name}
                                </CardTitle>
                                {skill.hasWorkflows && (
                                    <Badge className="bg-[#9399cc] text-white">
                                        {skill.workflowCount} workflows
                                    </Badge>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#192734]/70 text-sm mb-3">
                                {skill.description}
                            </p>
                            <p className="text-xs text-[#192734]/40">
                                ID: {skill.id}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {skills.length === 0 && (
                <div className="text-center py-12 text-[#192734]/50">
                    <p>No custom skills found in data/skills/</p>
                </div>
            )}

            {/* Footer */}
            <div className="mt-10 p-4 rounded-lg bg-[#192734]/5 border border-[#192734]/10">
                <p className="text-xs text-[#192734]/60 text-center">
                    To use a skill, ask PAI: &quot;Use my [skill name] skill to...&quot;
                </p>
            </div>
        </div>
    )
}
