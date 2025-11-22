import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="container mx-auto px-4 py-24 md:py-32">
                <div className="flex flex-col items-center text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Unlock Your Creative Potential
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl">
                        Choose the plan that fits your creative journey. From hobbyist to professional studio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Starter Plan */}
                    <Card className="bg-white/5 border-white/10 text-white hover:border-white/20 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-2xl">Creator</CardTitle>
                            <CardDescription className="text-white/60">For experimenting with AI tools.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold mb-6">$29<span className="text-lg font-normal text-white/60">/mo</span></div>
                            <ul className="space-y-3 text-sm text-white/80">
                                <li className="flex items-center"><Check className="h-4 w-4 text-green-400 mr-2" /> 100 Veo Prompts / mo</li>
                                <li className="flex items-center"><Check className="h-4 w-4 text-green-400 mr-2" /> 50 Suno Styles / mo</li>
                                <li className="flex items-center"><Check className="h-4 w-4 text-green-400 mr-2" /> Basic AI Consultant</li>
                                <li className="flex items-center"><Check className="h-4 w-4 text-green-400 mr-2" /> Community Access</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">Get Started</Button>
                        </CardFooter>
                    </Card>

                    {/* Pro Plan */}
                    <Card className="bg-gradient-to-b from-purple-900/20 to-black border-purple-500/50 text-white relative overflow-hidden transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                        <CardHeader>
                            <CardTitle className="text-2xl flex items-center gap-2">
                                Visionary <Sparkles className="h-5 w-5 text-purple-400" />
                            </CardTitle>
                            <CardDescription className="text-white/60">For serious AI artists.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold mb-6">$99<span className="text-lg font-normal text-white/60">/mo</span></div>
                            <ul className="space-y-3 text-sm text-white/80">
                                <li className="flex items-center"><Check className="h-4 w-4 text-purple-400 mr-2" /> Unlimited Veo Prompts</li>
                                <li className="flex items-center"><Check className="h-4 w-4 text-purple-400 mr-2" /> Unlimited Suno Styles</li>
                                <li className="flex items-center"><Check className="h-4 w-4 text-purple-400 mr-2" /> Advanced AI Consultant (Manzar Persona)</li>
                                <li className="flex items-center"><Check className="h-4 w-4 text-purple-400 mr-2" /> Priority Support</li>
                                <li className="flex items-center"><Check className="h-4 w-4 text-purple-400 mr-2" /> Early Access to New Tools</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="premium">Subscribe Now</Button>
                        </CardFooter>
                    </Card>

                    {/* Studio Plan */}
                    <Card className="bg-white/5 border-white/10 text-white hover:border-white/20 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-2xl">Studio</CardTitle>
                            <CardDescription className="text-white/60">For production teams.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold mb-6">$299<span className="text-lg font-normal text-white/60">/mo</span></div>
                            <ul className="space-y-3 text-sm text-white/80">
                                <li className="flex items-center"><Check className="h-4 w-4 text-green-400 mr-2" /> Everything in Visionary</li>
                                <li className="flex items-center"><Check className="h-4 w-4 text-green-400 mr-2" /> 5 Team Seats</li>
                                <li className="flex items-center"><Check className="h-4 w-4 text-green-400 mr-2" /> API Access</li>
                                <li className="flex items-center"><Check className="h-4 w-4 text-green-400 mr-2" /> Custom Model Fine-tuning</li>
                                <li className="flex items-center"><Check className="h-4 w-4 text-green-400 mr-2" /> Dedicated Account Manager</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">Contact Sales</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </main>
    )
}
