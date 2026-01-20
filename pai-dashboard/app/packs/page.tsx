import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllPacks } from "@/lib/packs"

const typeColors: Record<string, string> = {
    skill: "#9854f1",
    feature: "#2e7de9",
    system: "#f0a020",
    core: "#33b579",
    security: "#f52a65",
    meta: "#6b7280",
    other: "#64748b",
}

export default function PacksPage() {
    const packs = getAllPacks()

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">All Packs</h1>
                <p className="text-gray-600">
                    Browse all {packs.length} PAI packs installed on your system.
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(typeColors).map(([type, color]) => (
                    <Badge key={type} variant="outline" style={{ borderColor: color, color }}>
                        {type}
                    </Badge>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packs.map((pack) => (
                    <Card
                        key={pack.id}
                        className="h-full hover:shadow-lg transition-shadow border-l-4"
                        style={{ borderLeftColor: typeColors[pack.type] || typeColors.other }}
                    >
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between gap-2">
                                <CardTitle className="text-lg leading-tight">{pack.name}</CardTitle>
                                <Badge
                                    style={{ backgroundColor: typeColors[pack.type] || typeColors.other }}
                                    className="text-white flex-shrink-0"
                                >
                                    {pack.type}
                                </Badge>
                            </div>
                            {pack.version !== "unknown" && (
                                <p className="text-xs text-gray-400">v{pack.version}</p>
                            )}
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-3">{pack.description}</p>
                            {pack.keywords.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                    {pack.keywords.map((keyword) => (
                                        <Badge key={keyword} variant="outline" className="text-xs">
                                            {keyword}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
