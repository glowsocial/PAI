"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Sparkles, MessageSquare, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "What We Can Do", href: "/", icon: Home },
    { name: "Ask PAI", href: "/ask", icon: MessageSquare },
    { name: "All Packs", href: "/packs", icon: FileText },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="flex h-screen w-64 flex-col fixed left-0 top-0 bg-[#192734] text-white">
            <div className="flex h-20 items-center px-6 border-b border-white/10">
                <div>
                    <h1 className="text-xl font-semibold tracking-wide">
                        PAI DASHBOARD
                    </h1>
                    <p className="text-xs text-[#9399cc] mt-1">Your Personal AI System</p>
                </div>
            </div>
            <nav className="flex-1 space-y-1 px-3 py-6">
                {navigation.map((item) => {
                    const isActive = pathname === item.href ||
                        (item.href !== "/" && pathname.startsWith(item.href))
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all",
                                isActive
                                    ? "bg-[#d7e278] text-[#192734]"
                                    : "text-white/80 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "mr-3 h-5 w-5 flex-shrink-0",
                                    isActive ? "text-[#192734]" : "text-[#9399cc]"
                                )}
                            />
                            {item.name}
                        </Link>
                    )
                })}
            </nav>

            <div className="border-t border-white/10 p-4">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#d7e278] animate-pulse" />
                    <span className="text-xs text-white/60">Ready to help</span>
                </div>
            </div>
        </div>
    )
}
