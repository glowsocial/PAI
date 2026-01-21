import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { getFabricPatterns } from "@/lib/skills"

export default function HomePage() {
    const patterns = getFabricPatterns()
    const customPatterns = patterns.filter(p => p.isCustom)
    const standardPatterns = patterns.filter(p => !p.isCustom)

    // Group standard patterns by first letter
    const grouped = standardPatterns.reduce((acc, pattern) => {
        const firstLetter = pattern.name.charAt(0).toUpperCase()
        if (!acc[firstLetter]) {
            acc[firstLetter] = []
        }
        acc[firstLetter].push(pattern)
        return acc
    }, {} as Record<string, typeof patterns>)

    const sortedLetters = Object.keys(grouped).sort()

    return (
        <div className="p-6 max-w-5xl">
            <div className="mb-6">
                <h1 className="text-2xl text-[#192734] mb-1">
                    FABRIC PATTERNS
                </h1>
                <p className="text-sm text-[#192734]/60">
                    {patterns.length} patterns total ({customPatterns.length} custom, {standardPatterns.length} standard)
                </p>
            </div>

            {/* My Custom Patterns */}
            {customPatterns.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-sm font-semibold text-[#d7e278] bg-[#192734] inline-block px-3 py-1 rounded mb-3">
                        ★ MY PATTERNS ({customPatterns.length})
                    </h2>
                    <div className="flex flex-wrap gap-1.5">
                        {customPatterns.map((pattern) => (
                            <Link key={pattern.id} href={`/pattern/${pattern.id}`}>
                                <Badge
                                    className="text-xs py-1 px-2 bg-[#d7e278] text-[#192734] hover:bg-[#192734] hover:text-white transition-colors cursor-pointer border-0"
                                >
                                    {pattern.name}
                                </Badge>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Quick jump for standard patterns */}
            <div className="mb-4">
                <h2 className="text-xs font-semibold text-[#192734]/40 mb-2">STANDARD FABRIC PATTERNS</h2>
                <div className="flex flex-wrap gap-1">
                    {sortedLetters.map((letter) => (
                        <a
                            key={letter}
                            href={`#${letter}`}
                            className="w-6 h-6 flex items-center justify-center rounded text-xs bg-[#ddecf7] text-[#192734] font-medium hover:bg-[#9399cc] hover:text-white transition-colors"
                        >
                            {letter}
                        </a>
                    ))}
                </div>
            </div>

            {/* Standard patterns by letter */}
            <div className="space-y-5">
                {sortedLetters.map((letter) => (
                    <div key={letter} id={letter}>
                        <h2 className="text-xs font-semibold text-[#192734]/40 mb-2 border-b border-[#192734]/10 pb-1">
                            {letter}
                        </h2>
                        <div className="flex flex-wrap gap-1.5">
                            {grouped[letter]?.map((pattern) => (
                                <Link key={pattern.id} href={`/pattern/${pattern.id}`}>
                                    <Badge
                                        variant="outline"
                                        className="text-xs py-1 px-2 bg-white hover:bg-[#ddecf7] transition-colors cursor-pointer"
                                    >
                                        {pattern.name}
                                    </Badge>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
