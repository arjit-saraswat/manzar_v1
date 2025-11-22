"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Music, Sparkles, Copy, Check } from "lucide-react"

export default function SunoGeneratorPage() {
    const [idea, setIdea] = useState("")
    const [isGenerating, setIsGenerating] = useState(false)
    const [result, setResult] = useState<string | null>(null)
    const [copied, setCopied] = useState(false)

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsGenerating(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setResult(`[Style Prompt]
Atmospheric Phonk, Dark Synthwave, Heavy Bass, Cinematic, Slow Tempo, Ethereal Vocals, Reverb, High Fidelity

[Lyrics Idea]
(Verse 1)
Neon rain falling down
Shadows creep in this town
Digital ghosts in the machine
Nothing is what it seems

(Chorus)
Lost in the static
Electric dreams
Automatic
Silent screams`)

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
                    <Music className="h-8 w-8 text-pink-400" />
                    Suno Music Generator
                </h1>
                <p className="text-white/60 mt-2">
                    Create the perfect style prompts and lyrics for your AI music.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <Card className="bg-neutral-900 border-white/10 text-white h-fit">
                    <CardHeader>
                        <CardTitle>Music Concept</CardTitle>
                        <CardDescription className="text-white/60">
                            Describe the mood, genre, or vibe you want.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleGenerate} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="idea">Vibe / Genre / Mood</Label>
                                <Textarea
                                    id="idea"
                                    placeholder="Dark cinematic phonk for a racing scene..."
                                    className="min-h-[200px] bg-black/50 border-white/10 text-white placeholder:text-white/40"
                                    value={idea}
                                    onChange={(e) => setIdea(e.target.value)}
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                variant="premium"
                                className="w-full"
                                disabled={isGenerating || !idea}
                            >
                                {isGenerating ? (
                                    <>
                                        <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                                        Generating Style...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="mr-2 h-4 w-4" />
                                        Generate Style
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
                            <CardTitle>Generated Style</CardTitle>
                            <CardDescription className="text-white/60">
                                Copy this into Suno.
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
                                <p>Style prompts will appear here</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
