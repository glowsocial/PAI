"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Send, Bot, User } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function AskPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: input.trim() }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulated response for now - would connect to API
    setTimeout(() => {
      const assistantMessage: Message = {
        role: "assistant",
        content: "This is a demo of the Ask PAI feature. When connected to an API, I can help you explore PAI capabilities, explain packs and skills, and answer questions about your Personal AI system.",
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center">
          <MessageSquare className="h-10 w-10 mr-3 text-[#2e7de9]" />
          Ask PAI
        </h1>
        <p className="text-lg text-gray-600">
          Ask questions about PAI, get help with prompts, or explore capabilities
        </p>
      </div>

      <Card className="border-l-4 border-l-[#2e7de9] max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Chat Interface</span>
            <Badge className="bg-[#2e7de9]">Demo Mode</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mb-6 min-h-[400px] max-h-[600px] overflow-y-auto p-4 bg-gray-50 rounded-lg">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <Bot className="h-12 w-12 mx-auto mb-4 text-[#2e7de9] opacity-50" />
                  <p>Start a conversation by typing a message below</p>
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-[#2e7de9] flex items-center justify-center flex-shrink-0">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                  )}
                  <div
                    className={`rounded-lg px-4 py-3 max-w-[80%] ${message.role === "user"
                      ? "bg-[#2e7de9] text-white"
                      : "bg-white border border-gray-200"
                      }`}
                  >
                    <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                  </div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-[#9854f1] flex items-center justify-center flex-shrink-0">
                      <User className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-[#2e7de9] flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#2e7de9] rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-[#2e7de9] rounded-full animate-bounce [animation-delay:0.1s]" />
                    <div className="w-2 h-2 bg-[#2e7de9] rounded-full animate-bounce [animation-delay:0.2s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput((e.target as HTMLInputElement).value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e7de9] focus:border-transparent disabled:bg-gray-100"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-6 py-3 bg-[#2e7de9] text-white rounded-lg hover:bg-[#2e7de9]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              Send
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
