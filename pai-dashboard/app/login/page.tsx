"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        const res = await fetch("/api/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        })

        if (res.ok) {
            router.push("/")
            router.refresh()
        } else {
            setError("Incorrect password")
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#faf8f7] flex items-center justify-center p-4">
            <div className="w-full max-w-sm">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-semibold text-[#192734] tracking-wide">
                            PAI DASHBOARD
                        </h1>
                        <p className="text-sm text-gray-500 mt-2">Enter your password to continue</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                autoFocus
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9399cc] focus:border-transparent"
                            />
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm text-center">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading || !password}
                            className="w-full py-3 bg-[#192734] text-white font-medium rounded-lg hover:bg-[#192734]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {loading ? "Checking..." : "Enter"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
