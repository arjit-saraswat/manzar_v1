"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, User } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
    role: "user" | "assistant"
    content: string
}

export default function ConsultantPage() {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hello! I'm Manzar AI. I can help you brainstorm ideas for your next cinematic masterpiece. What's on your mind?",
        },
    ])
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim()) return

        const userMessage: Message = { role: "user", content: input }
        setMessages((prev) => [...prev, userMessage])
        setInput("")
        setIsTyping(true)

        // Simulate AI response
        setTimeout(() => {
            const responses = [
                "That sounds like a fantastic concept! Have you considered adding a plot twist where the protagonist realizes they are also an AI?",
                "For that scene, I'd recommend a high-contrast lighting setup to emphasize the tension. Maybe some anamorphic lens flares?",
                "I can definitely help with that. Let's break down the storyboard. What's the opening shot looking like?",
                "Interesting choice of music. A slower tempo might build more suspense before the drop.",
            ]
            const randomResponse = responses[Math.floor(Math.random() * responses.length)]

            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: randomResponse },
            ])
            setIsTyping(false)
        }, 1500)
    }

    return (
        <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
            <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                    <Bot className="h-8 w-8 text-blue-400" />
                    AI Consultant
                </h1>
                <p className="text-white/60 mt-2">
                    Brainstorm and refine your creative vision with your personal AI assistant.
                </p>
            </div>

            <Card className="flex-1 bg-neutral-900 border-white/10 text-white flex flex-col overflow-hidden">
                <CardContent className="flex-1 overflow-y-auto p-6 space-y-4" ref={scrollRef}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex w-full",
                                message.role === "user" ? "justify-end" : "justify-start"
                            )}
                        >
                            <div
                                className={cn(
                                    "flex max-w-[80%] items-start gap-3 rounded-lg p-4",
                                    message.role === "user"
                                        ? "bg-purple-600 text-white"
                                        : "bg-white/10 text-white"
                                )}
                            >
                                <div className="mt-1 shrink-0">
                                    {message.role === "user" ? (
                                        <User className="h-5 w-5 text-white/80" />
                                    ) : (
                                        <Bot className="h-5 w-5 text-blue-400" />
                                    )}
                                </div>
                                <div className="text-sm leading-relaxed">{message.content}</div>
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-white/10 rounded-lg p-4 flex items-center gap-2">
                                <Bot className="h-5 w-5 text-blue-400" />
                                <div className="flex gap-1">
                                    <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                    <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                    <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
                <div className="p-4 border-t border-white/10 bg-black/20">
                    <form onSubmit={handleSend} className="flex gap-4">
                        <Input
                            placeholder="Ask about video ideas, camera angles, or music styles..."
                            className="bg-black/50 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-purple-500"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Button type="submit" variant="premium" size="icon" disabled={!input.trim() || isTyping}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    )
}
