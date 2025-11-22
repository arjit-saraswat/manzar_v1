import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Play, Music, Video, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
          {/* Placeholder for Video Background */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center" />
        </div>

        <div className="container relative z-20 flex flex-col items-center text-center px-4">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-xl mb-6 animate-fade-in">
            <Sparkles className="mr-2 h-4 w-4 text-purple-400" />
            <span className="text-white/80">Next Gen AI Video Production</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent mb-6 max-w-4xl">
            Crafting Digital Dreams into Reality
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-8 leading-relaxed">
            Cinematic AI video services for ads, music videos, and films.
            Elevate your storytelling with the power of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="premium" className="h-12 px-8 text-base">
              Explore Portfolio
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/10 bg-white/5 hover:bg-white/10 text-white">
              Book Services
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="py-24 bg-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Works</h2>
            <p className="text-white/60 max-w-xl">A curation of our finest AI-generated cinematography and visual storytelling.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative aspect-video overflow-hidden rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Project {item}</h3>
                    <p className="text-sm text-white/60">AI Film / Commercial</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Play className="h-5 w-5 text-white fill-white" />
                  </div>
                </div>
                {/* Placeholder Image */}
                <div className="h-full w-full bg-neutral-900 group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-neutral-950 border-t border-white/5">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="text-white/60 max-w-xl">Comprehensive AI production services tailored to your creative vision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
              <CardHeader>
                <Video className="h-10 w-10 text-purple-400 mb-4" />
                <CardTitle>AI Music Videos</CardTitle>
                <CardDescription className="text-white/60">
                  Full-length music video production using state-of-the-art AI video generation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center"><span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2" /> Lyric Synchronization</li>
                  <li className="flex items-center"><span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2" /> 4K Upscaling</li>
                  <li className="flex items-center"><span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2" /> Custom Style LoRAs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
              <CardHeader>
                <Sparkles className="h-10 w-10 text-blue-400 mb-4" />
                <CardTitle>Commercial Ads</CardTitle>
                <CardDescription className="text-white/60">
                  High-impact commercials designed to capture attention and drive conversion.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center"><span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" /> Product Visualization</li>
                  <li className="flex items-center"><span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" /> Social Media Formats</li>
                  <li className="flex items-center"><span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" /> Rapid Turnaround</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
              <CardHeader>
                <Music className="h-10 w-10 text-pink-400 mb-4" />
                <CardTitle>AI Film Production</CardTitle>
                <CardDescription className="text-white/60">
                  End-to-end production for short films, trailers, and narrative content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center"><span className="h-1.5 w-1.5 rounded-full bg-pink-500 mr-2" /> Script to Screen</li>
                  <li className="flex items-center"><span className="h-1.5 w-1.5 rounded-full bg-pink-500 mr-2" /> Character Consistency</li>
                  <li className="flex items-center"><span className="h-1.5 w-1.5 rounded-full bg-pink-500 mr-2" /> Sound Design</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">Ready to create magic?</h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Join the revolution of AI storytelling. Book a service or subscribe for exclusive tools.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="premium" className="h-14 px-10 text-lg" asChild>
              <Link href="/booking">Book a Call</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-white/10 bg-white/5 text-white hover:bg-white/10" asChild>
              <Link href="/dashboard">Access AI Tools</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
