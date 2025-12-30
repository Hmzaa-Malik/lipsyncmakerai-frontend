import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const image = formData.get("image") as File
    const audio = formData.get("audio") as File

    if (!image || !audio) {
      return NextResponse.json({ error: "Image and audio are required" }, { status: 400 })
    }

    const runpodFormData = new FormData()
    runpodFormData.append("image", image)
    runpodFormData.append("audio", audio)

    const runpodResponse = await fetch(process.env.RUNPOD_API_URL!, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RUNPOD_API_KEY}`,
      },
      body: runpodFormData,
    })

    if (!runpodResponse.ok) {
      throw new Error("RunPod API request failed")
    }

    const data = await runpodResponse.json()

    return NextResponse.json({
      videoUrl: data.output_url,
      jobId: data.id,
    })
  } catch (error) {
    console.error("[v0] Video generation error:", error)
    return NextResponse.json({ error: "Failed to generate video" }, { status: 500 })
  }
}
