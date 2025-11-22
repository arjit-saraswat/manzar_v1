"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-white/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-4">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://cdn.coverr.co/videos/coverr-surfer-at-sunset-5374/1080p.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-display text-[12vw] leading-[0.8] tracking-tighter text-white mix-blend-difference mb-8">
              MANZAR
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl font-light tracking-wide text-white/80 max-w-2xl mb-12"
          >
            Cinematic AI Video Production & Creative Tools
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-white/20 hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm">
              View Showreel <Play className="ml-2 h-4 w-4 fill-current" />
            </Button>
            <Button size="lg" variant="premium" className="rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-white/90 transition-all duration-500">
              Start Creating
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/40">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
        </motion.div>
      </section>

      {/* Aesthetic Showcase */}
      <section className="py-32 px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
          <h2 className="font-display text-6xl md:text-8xl tracking-tighter">
            SELECTED<br />WORKS
          </h2>
          <p className="text-right text-white/60 max-w-xs mt-8 md:mt-0">
            A curation of AI-generated cinematography pushing the boundaries of digital storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
          {[1, 2, 3, 4].map((item, i) => (
            <div key={item} className={`group cursor-pointer ${i % 2 === 1 ? 'md:mt-32' : ''}`}>
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors z-10" />
                <Image
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1626814026160-2237a95fc5a0' : item === 2 ? '1614850523459-c2f4c699c52e' : item === 3 ? '1535443269218-c48d841d6008' : '1618005182384-a83a8bd57fbe'}?q=80&w=1000&auto=format&fit=crop`}
                  alt="Project thumbnail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-medium mb-1">Project 0{item}</h3>
                  <p className="text-white/40 text-sm uppercase tracking-wider">AI Film / 2024</p>
                </div>
                <ArrowRight className="h-6 w-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-white/40 group-hover:text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Marquee */}
      <section className="py-24 overflow-hidden border-y border-white/10 bg-neutral-950">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="font-display text-8xl md:text-9xl text-white/10 hover:text-white/80 transition-colors duration-500 cursor-default">
                AI VIDEO PRODUCTION
              </span>
              <Sparkles className="h-12 w-12 mx-8 text-white/20" />
              <span className="font-display text-8xl md:text-9xl text-white/10 hover:text-white/80 transition-colors duration-500 cursor-default">
                MUSIC GENERATION
              </span>
              <Sparkles className="h-12 w-12 mx-8 text-white/20" />
            </div>
          ))}
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h2 className="font-display text-6xl md:text-8xl mb-12 tracking-tighter">
          READY TO<br />COLLABORATE?
        </h2>
        <Link href="/booking">
          <Button className="rounded-full h-24 w-24 md:h-32 md:w-32 bg-white text-black hover:scale-110 transition-transform duration-500 text-lg font-medium">
            Book<br />Now
          </Button>
        </Link>
      </section>
    </main>
  )
}
