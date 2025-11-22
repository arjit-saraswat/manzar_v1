import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Video, Music, Bot, LayoutDashboard, Settings, LogOut } from "lucide-react"
import Link from "next/link"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-64 border-r border-white/10 bg-neutral-950 hidden md:flex flex-col">
                <div className="p-6 border-b border-white/10">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                        MANZAR <span className="text-purple-500 text-xs font-normal ml-1">STUDIO</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 text-white font-medium">
                        <LayoutDashboard className="h-5 w-5 text-purple-400" />
                        Overview
                    </Link>
                    <Link href="/dashboard/veo-generator" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-white/60 hover:text-white transition-colors">
                        <Video className="h-5 w-5" />
                        Veo Generator
                    </Link>
                    <Link href="/dashboard/suno-generator" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-white/60 hover:text-white transition-colors">
                        <Music className="h-5 w-5" />
                        Suno Prompts
                    </Link>
                    <Link href="/dashboard/consultant" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-white/60 hover:text-white transition-colors">
                        <Bot className="h-5 w-5" />
                        AI Consultant
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/10 space-y-2">
                    <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-white/60 hover:text-white transition-colors">
                        <Settings className="h-5 w-5" />
                        Settings
                    </Link>
                    <button className="flex w-full items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/10 text-white/60 hover:text-red-400 transition-colors">
                        <LogOut className="h-5 w-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Mobile Header (visible only on mobile) */}
            <div className="md:hidden border-b border-white/10 p-4 flex items-center justify-between bg-neutral-950">
                <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                    MANZAR
                </Link>
                <Button variant="ghost" size="sm">Menu</Button>
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-black p-4 md:p-8">
                {children}
            </main>
        </div>
    )
}
