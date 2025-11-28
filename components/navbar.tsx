"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navItems = [
    { name: "Work", href: "/#work" },
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Studio", href: "/studio" },
]

export function Navbar() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-500",
                isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent"
            )}
        >
            <Link href="/" className="font-display text-2xl font-bold tracking-tighter text-white mix-blend-difference z-50">
                MANZAR
            </Link>

            <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-sm rounded-full px-8 py-3 border border-white/10">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "text-sm uppercase tracking-widest transition-all duration-300 hover:text-white",
                            pathname === item.href ? "text-white font-medium" : "text-white/60"
                        )}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            <Link href="/booking" className="hidden md:block">
                <button className="text-sm uppercase tracking-widest text-white border-b border-white/40 pb-1 hover:border-white transition-colors">
                    Book Now
                </button>
            </Link>

            {/* Mobile Menu Toggle (Simplified) */}
            <button className="md:hidden text-white mix-blend-difference">
                MENU
            </button>
        </motion.nav>
    )
}
