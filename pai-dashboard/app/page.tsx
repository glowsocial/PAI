import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { getFabricPatterns } from "@/lib/skills"

export default function HomePage() {
    const patterns = getFabricPatterns()

    // Group patterns by first letter
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
        <div className="p-6 max-w-5xl">
            <div className="mb-6">
                <h1 className="text-2xl text-[#192734] mb-1">
                    FABRIC PATTERNS
                </h1>
                <p className="text-sm text-[#192734]/60">
                    {patterns.length} patterns — click any to see the prompt
                </p>
            </div>

            {/* Quick jump */}
            <div className="mb-6 flex flex-wrap gap-1">
                {sortedLetters.map((letter) => (
                    <a
                        key={letter}
                        href={`#${letter}`}
                        className="w-7 h-7 flex items-center justify-center rounded text-xs bg-[#ddecf7] text-[#192734] font-medium hover:bg-[#d7e278] transition-colors"
                    >
                        {letter}
                    </a>
                ))}
            </div>

            {/* Patterns by letter */}
            <div className="space-y-6">
                {sortedLetters.map((letter) => (
                    <div key={letter} id={letter}>
                        <h2 className="text-sm font-semibold text-[#192734] mb-2 border-b border-[#192734]/10 pb-1">
                            {letter}
                        </h2>
                        <div className="flex flex-wrap gap-1.5">
                            {grouped[letter]?.map((pattern) => (
                                <Link key={pattern.id} href={`/pattern/${pattern.id}`}>
                                    <Badge
                                        variant="outline"
                                        className="text-xs py-1 px-2 bg-white hover:bg-[#d7e278] transition-colors cursor-pointer"
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
