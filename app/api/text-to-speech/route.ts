import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { text, language } = body

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 })
    }

    const ttsResponse = await fetch(process.env.TTS_API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TTS_API_KEY}`,
      },
      body: JSON.stringify({
        text,
        language,
        voice: "default",
      }),
    })

    if (!ttsResponse.ok) {
      throw new Error("TTS API request failed")
    }

    const data = await ttsResponse.json()

    return NextResponse.json({
      audioUrl: data.audio_url,
      duration: data.duration,
    })
  } catch (error) {
    console.error("[v0] TTS error:", error)
    return NextResponse.json({ error: "Failed to generate speech" }, { status: 500 })
  }
}
