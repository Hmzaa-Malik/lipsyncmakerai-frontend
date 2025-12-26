"use client";

import { useState } from "react";

export default function HomePage() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const [image, setImage] = useState<File | null>(null);
  const [audio, setAudio] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [loading, setLoading] = useState(false);

  const generateVideo = async () => {
    if (!image || !audio) {
      alert("Please upload both image & audio.");
      return;
    }

    const form = new FormData();
    form.append("image", image);
    form.append("audio", audio);
    form.append("text", text);

    setLoading(true);
    const res = await fetch(`${API}/video`, { method: "POST", body: form });
    const data = await res.json();
    setLoading(false);

    if (data?.url) setVideoURL(`${API}${data.url}`);
    else alert("Error: " + JSON.stringify(data));
  };

  return (
    <main className="p-10 max-w-5xl mx-auto">
      {/* HERO */}
      <section className="text-center py-10">
        <h1 className="text-5xl font-bold text-primary">LipsyncMaker AI</h1>
        <p className="mt-4 text-lg">Upload a face + voice → AI generates lip-sync video like RunwayML.</p>
      </section>

      {/* UPLOAD PANEL */}
      <div className="card mt-10">
        <h2 className="text-2xl font-bold mb-4">Upload Files</h2>

        <input type="file" accept="image/*" className="mb-4" onChange={(e)=>setImage(e.target.files?.[0]||null)} />
        <input type="file" accept="audio/*" className="mb-4" onChange={(e)=>setAudio(e.target.files?.[0]||null)} />

        <input
          type="text"
          className="w-full p-2 bg-black border border-gray-700 mt-2"
          placeholder="Optional text prompt…"
          onChange={(e)=>setText(e.target.value)}
        />

        <button className="btn-primary w-full mt-4" onClick={generateVideo}>
          {loading ? "Generating…" : "Generate Video"}
        </button>
      </div>

      {/* RESULT */}
      {videoURL && (
        <div className="card mt-10 text-center">
          <h2 className="text-xl font-bold mb-4">Your Output</h2>
          <video src={videoURL} controls className="w-full rounded-lg"></video>
        </div>
      )}

      {/* SLIDER FEATURE PREVIEW */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-4 text-primary">Example Outputs</h2>
        <div className="slider">
          <img src="/samples/1.jpg" className="w-64 rounded-lg" />
          <img src="/samples/2.jpg" className="w-64 rounded-lg" />
          <img src="/samples/3.jpg" className="w-64 rounded-lg" />
        </div>
      </section>
    </main>
  );
}
