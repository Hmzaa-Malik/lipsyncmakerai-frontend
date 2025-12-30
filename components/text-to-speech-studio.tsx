"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Volume2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const LANGUAGES = [
  { value: "en", label: "English", flag: "🇺🇸" },
  { value: "ur", label: "Urdu", flag: "🇵🇰" },
  { value: "hi", label: "Hindi", flag: "🇮🇳" },
  { value: "ar", label: "Arabic", flag: "🇸🇦" },
  { value: "es", label: "Spanish", flag: "🇪🇸" },
  { value: "fr", label: "French", flag: "🇫🇷" },
  { value: "de", label: "German", flag: "🇩🇪" },
  { value: "zh", label: "Chinese", flag: "🇨🇳" },
  { value: "ja", label: "Japanese", flag: "🇯🇵" },
  { value: "ko", label: "Korean", flag: "🇰🇷" },
]

export function TextToSpeechStudio() {
  const [text, setText] = useState("")
  const [language, setLanguage] = useState("en")
  const [isGenerating, setIsGenerating] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const { toast } = useToast()

  const handleGenerate = async () => {
    if (!text.trim()) {
      toast({
        title: "Empty text",
        description: "Please enter some text to convert to speech",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    try {
      const response = await fetch("/api/text-to-speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          language,
        }),
      })

      if (!response.ok) {
        throw new Error("TTS generation failed")
      }

      const data = await response.json()
      setAudioUrl(data.audioUrl)

      toast({
        title: "Success!",
        description: "Your audio has been generated",
      })
    } catch (error) {
      console.error("[v0] TTS error:", error)
      toast({
        title: "Generation failed",
        description: "Failed to generate audio. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="language" className="text-base font-semibold mb-3 block">
                Select Language
              </Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  {LANGUAGES.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="text" className="text-base font-semibold mb-3 block">
                Enter Text
              </Label>
              <Textarea
                id="text"
                placeholder="Type or paste your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={10}
                className="resize-none"
              />
              <div className="text-xs text-muted-foreground mt-2">{text.length} characters</div>
            </div>

            <Button onClick={handleGenerate} disabled={isGenerating || !text.trim()} className="w-full" size="lg">
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Audio...
                </>
              ) : (
                <>
                  <Volume2 className="mr-2 h-4 w-4" />
                  Generate Speech
                </>
              )}
            </Button>
          </div>
        </Card>
      </div>

      <div>
        <Card className="p-6">
          <Label className="text-base font-semibold mb-4 block">Generated Audio</Label>
          {audioUrl ? (
            <div className="space-y-4">
              <audio src={audioUrl} controls className="w-full" />
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href={audioUrl} download>
                  Download Audio
                </a>
              </Button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
              <div className="text-muted-foreground">
                {isGenerating ? "Generating your audio..." : "Your generated audio will appear here"}
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
