import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />

      <div className="container relative mx-auto px-4 pt-32 pb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
              LipSync Research
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tighter text-balance md:text-6xl lg:text-7xl">
              Building AI to
              <br />
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Simulate Reality
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl text-pretty leading-relaxed">
              We are building foundational models that understand, perceive, and generate realistic lip-sync animations.
              The next frontier of content creation.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#get-started">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-border/50 bg-transparent backdrop-blur-sm hover:bg-card/50"
              >
                <a href="#learn-more">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Feature Tags */}
          <div className="space-y-4">
            <FeatureTag title="Media and Entertainment" description="Studio-grade lip-sync for content creators" />
            <FeatureTag
              title="Newsrooms & Broadcasting"
              description="Real-time translation with perfect lip synchronization"
            />
            <FeatureTag title="Multilingual Content" description="English, Urdu, and expanding language support" />
            <FeatureTag title="API-First Architecture" description="Integrate into your production pipeline" />
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
    </section>
  )
}

function FeatureTag({ title, description }: { title: string; description: string }) {
  return (
    <div className="group relative rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-border hover:bg-card/50">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  )
}
