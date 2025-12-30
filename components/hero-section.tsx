"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

const heroSlides = [
  {
    video: "/paper-boat-with-yellow-flower-floating-on-water-ci.jpg",
    title: "Maverick Digital Provide Building AI to",
    subtitle: "Simulate the World",
    tags: [
      "MEDIA AND ENTERTAINMENT",
      "ROBOTICS AND AUTONOMY",
      "GENERAL WORLD MODELS",
      "CONVERSATIONAL REAL-TIME VIDEO AGENTS",
    ],
  },
  {
    video: "/ai-generated-realistic-person-speaking-with-perfec.jpg",
    title: "Perfect Lip-Sync",
    subtitle: "For Every Voice",
    tags: ["STUDIO-GRADE LIP SYNCHRONIZATION", "MULTILINGUAL SUPPORT", "REAL-TIME PROCESSING", "API-FIRST INTEGRATION"],
  },
  {
    video: "/futuristic-ai-technology-neural-network-visualizat.jpg",
    title: "We Provide Advanced AI Models",
    subtitle: "That Understand Speech",
    tags: [
      "NATURAL LANGUAGE PROCESSING",
      "FACIAL MOTION CAPTURE",
      "DEEP LEARNING MODELS",
      "CLOUD-BASED INFRASTRUCTURE",
    ],
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        {heroSlides.map((slideItem, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slideItem.video || "/placeholder.svg"}
              alt="Background"
              className="h-full w-full object-cover"
              onLoad={() => setIsVideoLoaded(true)}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center w-full py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              {slide.title}
              <br />
              <span className="text-balance">{slide.subtitle}</span>
            </h1>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 font-medium">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Feature Tags */}
          <div className="space-y-3">
            {slide.tags.map((tag, index) => (
              <div
                key={index}
                className="text-sm font-medium text-white/80 tracking-wide uppercase transition-all hover:text-white"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-white" : "w-1.5 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
