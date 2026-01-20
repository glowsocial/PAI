import type { Metadata } from "next"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"

export const metadata: Metadata = {
    title: "PAI Dashboard",
    description: "Personal AI System - Browse Packs, Skills, and Capabilities",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-gray-50" suppressHydrationWarning>
                <Sidebar />
                <main className="pl-56">
                    <div className="min-h-screen">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    )
}
