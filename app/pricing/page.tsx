import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your lip-sync video creation needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <Card className="relative border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Free</CardTitle>
              <CardDescription>Perfect for trying out our platform</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">5 video generations per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Up to 30 seconds per video</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">720p resolution</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">English TTS only</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Watermarked output</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="relative border-primary bg-card shadow-xl scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Pro</CardTitle>
              <CardDescription>For professional content creators</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">100 video generations per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Up to 5 minutes per video</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">1080p resolution</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">10+ languages including Urdu</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">No watermark</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Priority processing</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/signup">Start Pro Trial</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>For teams and businesses</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Unlimited video generations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Unlimited video length</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">4K resolution</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">All languages supported</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">API access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Dedicated support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Custom integrations</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <Link href="mailto:sales@lipsyncai.com">Contact Sales</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-border pb-6">
              <h3 className="text-lg font-semibold mb-2">What languages are supported?</h3>
              <p className="text-muted-foreground">
                We support 10+ languages including English, Urdu, Arabic, Hindi, Spanish, French, German, Italian,
                Portuguese, and more. The Free plan includes English only.
              </p>
            </div>
            <div className="border-b border-border pb-6">
              <h3 className="text-lg font-semibold mb-2">Can I upload my own audio?</h3>
              <p className="text-muted-foreground">
                Yes! All plans allow you to upload your own audio files in MP3 or WAV format, or use our built-in
                text-to-speech feature.
              </p>
            </div>
            <div className="border-b border-border pb-6">
              <h3 className="text-lg font-semibold mb-2">How does the generation process work?</h3>
              <p className="text-muted-foreground">
                Simply upload an image and audio file, or use our text-to-speech feature. Our AI will automatically
                generate a high-quality lip-sync video with realistic facial movements.
              </p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-muted-foreground">
                Yes, you can cancel your subscription at any time. Your plan will remain active until the end of your
                billing period.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
