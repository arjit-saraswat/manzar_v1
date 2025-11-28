"use client"

import { CanvasPanel } from "@/components/studio/canvas-panel"
import { PromptPanel } from "@/components/studio/prompt-panel"
import { StudioLayout } from "@/components/studio/studio-layout"
import { useState } from "react"
import { StudioMode } from "@/components/studio/types"

export default function StudioPage() {
    const [mode, setMode] = useState<StudioMode>("video")
    const [generatedContent, setGeneratedContent] = useState<string | null>(null)
    const [isGenerating, setIsGenerating] = useState(false)

    return (
        <StudioLayout
            leftPanel={
                <PromptPanel
                    mode={mode}
                    setMode={setMode}
                    onGenerate={(content) => setGeneratedContent(content)}
                    isGenerating={isGenerating}
                    setIsGenerating={setIsGenerating}
                />
            }
            rightPanel={
                <CanvasPanel
                    mode={mode}
                    content={generatedContent}
                    isGenerating={isGenerating}
                />
            }
        />
    )
}
