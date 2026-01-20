import { Badge } from "@/components/ui/badge"
import { getFabricPatterns } from "@/lib/skills"

export default function PatternsPage() {
    const patterns = getFabricPatterns()

    // Group patterns by first letter for easier browsing
    const grouped = patterns.reduce((acc, pattern) => {
        const firstLetter = pattern.name.charAt(0).toUpperCase()
        if (!acc[firstLetter]) {
            acc[firstLetter] = []
        }
        acc[firstLetter].push(pattern)
        return acc
    }, {} as Record<string, typeof patterns>)

    const sortedLetters = Object.keys(grouped).sort()

    return (
        <div className="p-8 max-w-6xl">
            <div className="mb-8">
                <h1 className="text-3xl text-[#192734] mb-2">
                    FABRIC PATTERNS
                </h1>
                <p className="text-[#192734]/60">
                    {patterns.length} patterns available. These are prompts you can use for specific tasks.
                </p>
            </div>

            {/* Quick jump */}
            <div className="mb-8 flex flex-wrap gap-2">
                {sortedLetters.map((letter) => (
                    <a
                        key={letter}
                        href={`#section-${letter}`}
                        className="w-8 h-8 flex items-center justify-center rounded bg-[#ddecf7] text-[#192734] font-semibold text-sm hover:bg-[#d7e278] transition-colors"
                    >
                        {letter}
                    </a>
                ))}
            </div>

            {/* Patterns by letter */}
            <div className="space-y-8">
                {sortedLetters.map((letter) => (
                    <div key={letter} id={`section-${letter}`}>
                        <h2 className="text-lg font-semibold text-[#192734] mb-3 border-b border-[#192734]/10 pb-2">
                            {letter}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {grouped[letter]?.map((pattern) => (
                                <Badge
                                    key={pattern.id}
                                    variant="outline"
                                    className="text-sm py-1.5 px-3 bg-white hover:bg-[#ddecf7] transition-colors"
                                >
                                    {pattern.name}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-10 p-4 rounded-lg bg-[#192734]/5 border border-[#192734]/10">
                <p className="text-xs text-[#192734]/60 text-center">
                    To use a pattern, ask PAI: &quot;Use the [pattern name] pattern on...&quot;
                </p>
            </div>
        </div>
    )
}
