"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Book Now", href: "/booking" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                    MANZAR
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-white",
                                pathname === item.href ? "text-white" : "text-white/60"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button variant="premium" size="sm" asChild>
                        <Link href="/dashboard">Dashboard</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-black/90 p-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-white/80 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button variant="premium" size="sm" asChild className="w-full">
                            <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                                Dashboard
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
