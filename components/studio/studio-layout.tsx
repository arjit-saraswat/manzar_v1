"use client"

import { ReactNode } from "react"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

interface StudioLayoutProps {
    leftPanel: ReactNode
    rightPanel: ReactNode
}

export function StudioLayout({ leftPanel, rightPanel }: StudioLayoutProps) {
    return (
        <div className="h-screen w-full bg-[#1e1e1e] text-white overflow-hidden flex flex-col">
            {/* Top Bar (Optional, for context) */}
            <header className="h-12 border-b border-white/10 flex items-center px-4 bg-[#1e1e1e]">
                <span className="font-display font-bold text-lg tracking-tight mr-4">MANZAR</span>
                <span className="text-xs uppercase tracking-widest text-white/40">Studio</span>
            </header>

            <ResizablePanelGroup direction="horizontal" className="flex-1">
                <ResizablePanel defaultSize={30} minSize={20} maxSize={50} className="bg-[#1e1e1e]">
                    {leftPanel}
                </ResizablePanel>

                <ResizableHandle withHandle className="bg-black border-l border-white/10 w-1" />

                <ResizablePanel defaultSize={70} className="bg-[#121212]">
                    {rightPanel}
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}
