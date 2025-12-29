import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-background py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />

      <div className="container relative mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
            We are building AI to simulate reality through merging art and technology.
          </h2>

          <p className="text-lg text-muted-foreground text-balance">
            Join our global team of researchers, engineers, artists and creators.
          </p>

          <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
            See careers
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}



