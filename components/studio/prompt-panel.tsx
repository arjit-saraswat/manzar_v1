"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Mic, Paperclip, Send, Sparkles, Video, Music, Bot } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { StudioMode } from "@/components/studio/types"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface PromptPanelProps {
  mode: StudioMode
  setMode: (mode: StudioMode) => void
  onGenerate: (content: string) => void
  isGenerating: boolean
  setIsGenerating: (isGenerating: boolean) => void
}

export function PromptPanel({ mode, setMode, onGenerate, isGenerating, setIsGenerating }: PromptPanelProps) {
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Welcome to Manzar Studio. Select a tool and describe your vision." }
  ])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    setMessages(prev => [...prev, { role: "user", content: input }])
    setInput("")
    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      const response = mode === "video" ? "Generating cinematic video based on your prompt..." :
        mode === "music" ? "Composing audio track..." : "Here are some creative ideas..."

      setMessages(prev => [...prev, { role: "assistant", content: response }])
      onGenerate(mode === "video" ? "https://cdn.coverr.co/videos/coverr-surfer-at-sunset-5374/1080p.mp4" : "Generated Content")
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] border-r border-white/10">
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <div className="flex gap-2 bg-black/20 p-1 rounded-lg">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMode("video")}
            className={`h-8 px-3 text-xs ${mode === "video" ? "bg-blue-600 text-white" : "text-white/60 hover:text-white"}`}
          >
            <Video className="mr-2 h-3 w-3" /> Video
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMode("music")}
            className={`h-8 px-3 text-xs ${mode === "music" ? "bg-purple-600 text-white" : "text-white/60 hover:text-white"}`}
          >
            <Music className="mr-2 h-3 w-3" /> Music
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMode("consultant")}
            className={`h-8 px-3 text-xs ${mode === "consultant" ? "bg-green-600 text-white" : "text-white/60 hover:text-white"}`}
          >
            <Bot className="mr-2 h-3 w-3" /> Chat
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-6" ref={scrollRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "assistant" ? "bg-white/10 text-white" : "bg-white/10 text-white"}`}>
                {msg.role === "assistant" ? <Sparkles className="h-4 w-4" /> : "U"}
              </div>
              <div className={`rounded-2xl p-4 max-w-[85%] text-sm leading-relaxed ${msg.role === "assistant" ? "bg-white/5 text-white/90" : "bg-blue-600 text-white"}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isGenerating && (
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full flex items-center justify-center shrink-0 bg-white/10 text-white">
                <Sparkles className="h-4 w-4 animate-spin" />
              </div>
              <div className="bg-white/5 rounded-2xl p-4 text-sm text-white/60">
                Thinking...
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 bg-[#1e1e1e] border-t border-white/10">
        <div className="relative bg-[#2a2a2a] rounded-xl border border-white/10 focus-within:border-blue-500/50 transition-colors">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your vision..."
            className="min-h-[100px] w-full bg-transparent border-none focus-visible:ring-0 resize-none p-4 text-sm placeholder:text-white/30"
          />
          <div className="flex justify-between items-center p-2 border-t border-white/5">
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white/40 hover:text-white hover:bg-white/5">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white/40 hover:text-white hover:bg-white/5">
                <Mic className="h-4 w-4" />
              </Button>
            </div>
            <Button
              onClick={handleSend}
              size="sm"
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-4 h-8"
            >
              Send <Send className="ml-2 h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
