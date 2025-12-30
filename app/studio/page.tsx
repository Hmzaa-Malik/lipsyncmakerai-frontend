"use client"
import { Header } from "@/components/header"
import { VideoGenerationStudio } from "@/components/video-generation-studio"
import { TextToSpeechStudio } from "@/components/text-to-speech-studio"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">LipSync Studio</h1>
          <p className="text-muted-foreground text-lg">
            Create professional lip-sync videos with AI-powered technology
          </p>
        </div>

        <Tabs defaultValue="video" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="video">Video Generation</TabsTrigger>
            <TabsTrigger value="tts">Text-to-Speech</TabsTrigger>
          </TabsList>

          <TabsContent value="video" className="mt-8">
            <VideoGenerationStudio />
          </TabsContent>

          <TabsContent value="tts" className="mt-8">
            <TextToSpeechStudio />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
