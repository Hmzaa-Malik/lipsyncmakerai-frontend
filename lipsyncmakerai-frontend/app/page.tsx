import { Button } from "@/components/ui/button";  // Import button component
import { Card } from "@/components/ui/card";     // Import card component

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 bg-background text-center">
        <h1 className="text-5xl font-bold text-primary">
          Turn any voice into studio-grade lip-sync video.
        </h1>
        <p className="text-lg text-foreground mt-4">
          Upload a face Image, drop in any voice, and we’ll handle the lip motion, timing, and realism for you.
        </p>

        <div className="mt-8">
          <Button className="bg-primary hover:bg-secondary text-foreground px-6 py-2">
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-foreground">Key Features</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card className="bg-card text-foreground">
              <div className="p-4">
                <h3 className="font-semibold text-xl">4K-Ready Exports</h3>
                <p>High-quality, up to 4K exports with no watermarks on paid plans.</p>
              </div>
            </Card>
            <Card className="bg-card text-foreground">
              <div className="p-4">
                <h3 className="font-semibold text-xl">Multi-language Support</h3>
                <p>Supports English and Urdu voices for more diverse content creation.</p>
              </div>
            </Card>
            <Card className="bg-card text-foreground">
              <div className="p-4">
                <h3 className="font-semibold text-xl">API-First Integration</h3>
                <p>Seamlessly integrate into your newsroom or app with our powerful API.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
