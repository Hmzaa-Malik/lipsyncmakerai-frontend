"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2, Upload, ImageIcon, Mic, Play } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function VideoGenerationStudio() {
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [audio, setAudio] = useState<File | null>(null)
  const [audioPreview, setAudioPreview] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null)

  const imageInputRef = useRef<HTMLInputElement>(null)
  const audioInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setAudio(file)
      const url = URL.createObjectURL(file)
      setAudioPreview(url)
    }
  }

  const handleGenerate = async () => {
    if (!image || !audio) {
      toast({
        title: "Missing files",
        description: "Please upload both an image and audio file",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    try {
      const formData = new FormData()
      formData.append("image", image)
      formData.append("audio", audio)

      const response = await fetch("/api/generate-video", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Generation failed")
      }

      const data = await response.json()
      setGeneratedVideo(data.videoUrl)

      toast({
        title: "Success!",
        description: "Your lip-sync video has been generated",
      })
    } catch (error) {
      console.error("[v0] Generation error:", error)
      toast({
        title: "Generation failed",
        description: "Failed to generate video. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Input Section */}
      <div className="space-y-6">
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="image" className="text-base font-semibold mb-3 block">
                Upload Image
              </Label>
              <div
                onClick={() => imageInputRef.current?.click()}
                className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
              >
                {imagePreview ? (
                  <img src={imagePreview || "/placeholder.svg"} alt="Preview" className="mx-auto max-h-64 rounded-lg" />
                ) : (
                  <div className="space-y-3">
                    <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">
                      Click to upload an image
                      <br />
                      <span className="text-xs">PNG, JPG up to 10MB</span>
                    </div>
                  </div>
                )}
              </div>
              <input
                ref={imageInputRef}
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            <div>
              <Label htmlFor="audio" className="text-base font-semibold mb-3 block">
                Upload Voiceover
              </Label>
              <div
                onClick={() => audioInputRef.current?.click()}
                className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
              >
                {audioPreview ? (
                  <div className="space-y-3">
                    <Mic className="mx-auto h-12 w-12 text-primary" />
                    <div className="text-sm font-medium">{audio?.name}</div>
                    <audio src={audioPreview} controls className="w-full" />
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">
                      Click to upload audio
                      <br />
                      <span className="text-xs">MP3, WAV up to 50MB</span>
                    </div>
                  </div>
                )}
              </div>
              <input
                ref={audioInputRef}
                id="audio"
                type="file"
                accept="audio/mp3,audio/wav,audio/mpeg"
                onChange={handleAudioUpload}
                className="hidden"
              />
            </div>

            <Button onClick={handleGenerate} disabled={isGenerating || !image || !audio} className="w-full" size="lg">
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Video...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Generate Lip-Sync Video
                </>
              )}
            </Button>
          </div>
        </Card>
      </div>

      {/* Output Section */}
      <div>
        <Card className="p-6">
          <Label className="text-base font-semibold mb-4 block">Generated Video</Label>
          {generatedVideo ? (
            <div className="space-y-4">
              <video src={generatedVideo} controls className="w-full rounded-lg" />
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href={generatedVideo} download>
                  Download Video
                </a>
              </Button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
              <div className="text-muted-foreground">
                {isGenerating ? "Generating your lip-sync video..." : "Your generated video will appear here"}
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
