"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Eye, Play, Share2, Loader2 } from "lucide-react"
import { StudioMode } from "@/components/studio/types"

interface CanvasPanelProps {
  mode: StudioMode
  content: string | null
  isGenerating: boolean
}

export function CanvasPanel({ mode, content, isGenerating }: CanvasPanelProps) {
  return (
    <div className="h-full flex flex-col bg-[#121212]">
      <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-[#121212]">
        <div className="flex items-center gap-2">
          <Tabs defaultValue="preview" className="w-[200px]">
            <TabsList className="grid w-full grid-cols-2 h-8 bg-white/5">
              <TabsTrigger value="preview" className="text-xs data-[state=active]:bg-white/10">Preview</TabsTrigger>
              <TabsTrigger value="code" className="text-xs data-[state=active]:bg-white/10">Code</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/40 uppercase tracking-widest mr-4">{mode} MODE</span>
          <Button variant="ghost" size="sm" className="h-8 text-xs text-white/60 hover:text-white">
            <Share2 className="mr-2 h-3 w-3" /> Share
          </Button>
        </div>
      </div>

      <div className="flex-1 p-8 flex items-center justify-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5 relative overflow-hidden">
        {isGenerating ? (
          <div className="flex flex-col items-center gap-4 animate-pulse">
            <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
            <p className="text-white/40 text-sm">Generating your masterpiece...</p>
          </div>
        ) : content ? (
          mode === "video" ? (
            <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <video src={content} controls autoPlay loop className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="p-8 bg-white/5 rounded-lg border border-white/10 max-w-2xl w-full">
              <h3 className="text-xl font-display mb-4">Generated Output</h3>
              <p className="text-white/60">{content}</p>
            </div>
          )
        ) : (
          <div className="text-center space-y-4">
            <div className="h-16 w-16 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10">
              <Eye className="h-6 w-6 text-white/40" />
            </div>
            <p className="text-white/40 text-sm">Your creation will appear here...</p>
          </div>
        )}
      </div>
    </div>
  )
}
