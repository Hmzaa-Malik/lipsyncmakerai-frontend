import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const features = [
  {
    title: "LipSync-4.5: A New Frontier for Generative Video",
    description:
      "Our world's best lip-sync model, featuring state-of-the-art motion quality, prompt adherence and visual fidelity.",
    image: "/ai-video-generation-interface.jpg",
    action: "Try now",
    secondaryAction: "Learn more",
  },
  {
    title: "Real-time Translation: Multilingual Content",
    description:
      "Break language barriers with AI-powered lip-sync translation. Maintain authenticity across English, Urdu, and expanding languages.",
    image: "/professional-news-anchor-speaking.jpg",
    action: "Explore the Research",
  },
  {
    title: "Studio Pipeline: Production-Ready Workflow",
    description:
      "A new frontier for production newsrooms. Batch processing, API integration, and 4K exports for professional workflows.",
    image: "/professional-video-editing-studio-setup.jpg",
    action: "Explore the Research",
  },
  {
    title: "Voice Cloning: Realistic Vocal Synthesis",
    description:
      "Generate natural-sounding voices with emotional depth and contextual awareness for authentic content creation.",
    image: "/audio-waveform-visualization-colorful.jpg",
    action: "Learn more",
  },
]

export function FeaturesGrid() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-border hover:bg-card/80"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold leading-tight text-balance">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>

                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant={index === 0 ? "default" : "outline"}>
                    {feature.action}
                  </Button>
                  {feature.secondaryAction && (
                    <Button size="sm" variant="ghost">
                      {feature.secondaryAction}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
