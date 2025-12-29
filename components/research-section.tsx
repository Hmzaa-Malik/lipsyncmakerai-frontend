import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ResearchSection() {
  return (
    <section className="relative overflow-hidden gradient-runway py-32">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

      <div className="container relative mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              LipSync Research
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
              We are building foundational lip-sync models that will be capable of transforming any voice into perfect
              video.
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              The next frontier of content creation will come from models that can understand facial dynamics, perceive
              emotional nuance, and generate flawless synchronization.
            </p>

            <Button
              size="lg"
              variant="outline"
              className="group border-border/50 bg-transparent backdrop-blur-sm hover:bg-card/50"
            >
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Content - Research Links */}
          <div className="space-y-4">
            <ResearchCard
              title="LipSync-1"
              description="A state-of-the-art lip-sync model built to match voice with facial movements in real-time."
            />
            <ResearchCard
              title="LipSync-4.5"
              description="The world's best lip-sync model, featuring state-of-the-art motion quality and visual fidelity."
            />
            <ResearchCard
              title="General Lip-Sync Models"
              description="Our long-term research effort to build AI systems that understand facial dynamics and speech."
            />
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
    </section>
  )
}

function ResearchCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="group relative rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-border hover:bg-card/50">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <ArrowRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </div>
  )
}
