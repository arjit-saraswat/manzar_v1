"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Video, Sparkles, Copy, Check } from "lucide-react"

export default function VeoGeneratorPage() {
    const [story, setStory] = useState("")
    const [isGenerating, setIsGenerating] = useState(false)
    const [result, setResult] = useState<string | null>(null)
    const [copied, setCopied] = useState(false)

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsGenerating(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setResult(`// Scene 1: The Awakening
Cinematic wide shot, 8k resolution. A cyberpunk city at dawn, neon lights reflecting on wet pavement. A lone figure stands on a rooftop, silhouette against the rising sun. Atmosphere is melancholic but hopeful. Camera slow pans forward.

// Scene 2: The Discovery
Close up shot. The figure holds a glowing artifact. Intricate details on the device, pulsing with blue light. Shallow depth of field, bokeh background of city lights. High contrast, moody lighting.

// Scene 3: The Chase
Action sequence. Fast paced camera movement following a hover-bike weaving through traffic. Motion blur, dynamic angles. Cyberpunk aesthetic, rain falling heavily.`)

        setIsGenerating(false)
    }

    const copyToClipboard = () => {
        if (result) {
            navigator.clipboard.writeText(result)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                    <Video className="h-8 w-8 text-purple-400" />
                    Veo 3.1 Prompt Generator
                </h1>
                <p className="text-white/60 mt-2">
                    Transform your story ideas into production-ready prompts for Veo 3.1.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <Card className="bg-neutral-900 border-white/10 text-white h-fit">
                    <CardHeader>
                        <CardTitle>Story Input</CardTitle>
                        <CardDescription className="text-white/60">
                            Describe your scene or story in detail.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleGenerate} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="story">Your Story / Concept</Label>
                                <Textarea
                                    id="story"
                                    placeholder="A cyberpunk detective discovers a glitch in the matrix..."
                                    className="min-h-[200px] bg-black/50 border-white/10 text-white placeholder:text-white/40"
                                    value={story}
                                    onChange={(e) => setStory(e.target.value)}
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                variant="premium"
                                className="w-full"
                                disabled={isGenerating || !story}
                            >
                                {isGenerating ? (
                                    <>
                                        <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                                        Generating Prompts...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="mr-2 h-4 w-4" />
                                        Generate Prompts
                                    </>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Output Section */}
                <Card className="bg-neutral-900 border-white/10 text-white h-fit">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Generated Prompts</CardTitle>
                            <CardDescription className="text-white/60">
                                Ready-to-use prompts for Veo.
                            </CardDescription>
                        </div>
                        {result && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={copyToClipboard}
                                className="text-white/60 hover:text-white"
                            >
                                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            </Button>
                        )}
                    </CardHeader>
                    <CardContent>
                        {result ? (
                            <div className="bg-black/50 rounded-lg p-4 border border-white/10 font-mono text-sm text-white/80 whitespace-pre-wrap">
                                {result}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-[300px] text-white/40 border-2 border-dashed border-white/10 rounded-lg bg-black/20">
                                <Sparkles className="h-8 w-8 mb-2 opacity-50" />
                                <p>Prompts will appear here</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
