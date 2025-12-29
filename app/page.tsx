import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PartnershipSection } from "@/components/partnership-section"
import { MissionSection } from "@/components/mission-section"
import { FeaturesGrid } from "@/components/features-grid"
import { ResearchSection } from "@/components/research-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PartnershipSection />
        <MissionSection />
        <FeaturesGrid />
        <ResearchSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
