import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, Mail } from "lucide-react"

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="container mx-auto px-4 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Let's Create Something Extraordinary
                        </h1>
                        <p className="text-xl text-white/60 mb-8">
                            Ready to elevate your brand with cinematic AI video? Fill out the form or book a consultation directly.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                                <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Email Us</h3>
                                    <p className="text-sm text-white/60">hello@manzar.ai</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Calendar className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Book a Consultation</h3>
                                    <p className="text-sm text-white/60">30-minute discovery call</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                                <div className="h-10 w-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Response Time</h3>
                                    <p className="text-sm text-white/60">Usually within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <Card className="bg-white/5 border-white/10 text-white">
                        <CardHeader>
                            <CardTitle>Project Inquiry</CardTitle>
                            <CardDescription className="text-white/60">
                                Tell us about your vision and requirements.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="first-name">First name</Label>
                                        <Input id="first-name" placeholder="John" className="bg-black/50 border-white/10" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="last-name">Last name</Label>
                                        <Input id="last-name" placeholder="Doe" className="bg-black/50 border-white/10" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="bg-black/50 border-white/10" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="service">Service Interest</Label>
                                    <select className="flex h-10 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white">
                                        <option>AI Music Video</option>
                                        <option>Commercial Ad</option>
                                        <option>AI Film Production</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px] bg-black/50 border-white/10" />
                                </div>

                                <Button type="submit" variant="premium" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}
