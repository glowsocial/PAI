"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Layers, Sparkles, User } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "My Identity", href: "/identity", icon: User },
    { name: "Fabric Patterns", href: "/", icon: Layers },
    { name: "My Skills", href: "/skills", icon: Sparkles },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="flex h-screen w-56 flex-col fixed left-0 top-0 bg-[#192734] text-white">
            <div className="flex h-16 items-center px-5 border-b border-white/10">
                <h1 className="text-lg font-semibold tracking-wide">
                    PAI
                </h1>
            </div>
            <nav className="flex-1 space-y-1 px-3 py-4">
                {navigation.map((item) => {
                    const isActive = pathname === item.href ||
                        (item.href !== "/" && pathname.startsWith(item.href))
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all",
                                isActive
                                    ? "bg-[#d7e278] text-[#192734]"
                                    : "text-white/80 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "mr-3 h-4 w-4 flex-shrink-0",
                                    isActive ? "text-[#192734]" : "text-[#9399cc]"
                                )}
                            />
                            {item.name}
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}
