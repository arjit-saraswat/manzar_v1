import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Clock, Video, Music, Bot } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back, Creator</h1>
                    <p className="text-white/60 mt-1">Here's what's happening with your projects.</p>
                </div>
                <Button variant="premium">New Project</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-neutral-900 border-white/10 text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Generations</CardTitle>
                        <Zap className="h-4 w-4 text-yellow-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,234</div>
                        <p className="text-xs text-white/60">+20.1% from last month</p>
                    </CardContent>
                </Card>
                <Card className="bg-neutral-900 border-white/10 text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                        <Sparkles className="h-4 w-4 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-white/60">2 in progress, 1 review</p>
                    </CardContent>
                </Card>
                <Card className="bg-neutral-900 border-white/10 text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Credits Remaining</CardTitle>
                        <Clock className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">850</div>
                        <p className="text-xs text-white/60">Renews in 12 days</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-neutral-900 border-white/10 text-white">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription className="text-white/60">Your latest AI generations and prompts.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                                            <Video className="h-5 w-5 text-white/60" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">Cyberpunk City Scene</p>
                                            <p className="text-xs text-white/60">Veo Generator • 2h ago</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">View</Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-neutral-900 border-white/10 text-white">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription className="text-white/60">Jump straight into creation.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <Link href="/dashboard/veo-generator" className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                    <Video className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Generate Video Prompts</h3>
                                    <p className="text-sm text-white/60">Create scenes for Veo 3.1</p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-white transition-colors" />
                        </Link>

                        <Link href="/dashboard/suno-generator" className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
                                    <Music className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Generate Music Prompts</h3>
                                    <p className="text-sm text-white/60">Create styles for Suno</p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-white transition-colors" />
                        </Link>

                        <Link href="/dashboard/consultant" className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Bot className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Consult AI Agent</h3>
                                    <p className="text-sm text-white/60">Brainstorm ideas with Manzar</p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-white transition-colors" />
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
