// pages/index.js

import Link from "next/link";
import { Button } from "@/components/ui/button"; // Button component
import { Card, CardContent } from "@/components/ui/card"; // Card component
import { Separator } from "@/components/ui/separator"; // Separator component
import { Badge } from "@/components/ui/badge"; // Badge component

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-600/80 shadow-lg shadow-violet-500/40">
              <span className="text-xs font-black tracking-tight">LS</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold">LipSyncMaker AI</span>
              <span className="text-[11px] text-slate-400">AI Lip-Sync Video Studio</span>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <a href="#features" className="hover:text-slate-50">Features</a>
            <a href="#workflow" className="hover:text-slate-50">Workflow</a>
            <a href="#pricing" className="hover:text-slate-50">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Sign in</Button>
            <Button size="sm" className="bg-violet-500 hover:bg-violet-400 px-4 sm:px-6">Launch Studio</Button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-1">
        <section className="relative border-b border-slate-800/60">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="space-y-6">
              <Badge className="bg-violet-600/80 text-xs">New • AI Lip-Sync Studio Beta</Badge>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Turn any voice into
                <span className="bg-gradient-to-r from-violet-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
                  studio-grade lip-sync video
                </span>.
              </h1>
              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                Upload a face video, drop in any voice, and LipSyncMaker AI handles the lip motion, timing, and realism for you. Designed for newsrooms, YouTubers, and serious creators.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="bg-violet-500 px-6 text-sm font-medium hover:bg-violet-400">Start free – 10 videos</Button>
                <Button variant="outline" className="border-slate-700 bg-slate-900/70 text-slate-100 hover:bg-slate-900">Watch 60s demo</Button>
              </div>
            </div>

            {/* MOCK VIDEO PREVIEW */}
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md border-slate-800 bg-slate-900/80 shadow-xl shadow-black/40">
                <CardContent className="space-y-4 p-4 sm:p-6">
                  <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.25),_transparent_55%)]" />
                    <div className="relative z-10 flex h-full items-center justify-center">
                      <div className="h-20 w-20 rounded-full border border-violet-500/50 bg-slate-900/70 shadow-lg shadow-violet-500/40" />
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-slate-300 sm:text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-100">Lip-Sync Preview</span>
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400">98% sync</span>
                    </div>
                    <Separator className="bg-slate-800" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <p className="text-[11px] uppercase tracking-wide text-slate-400">Video</p>
                        <p className="truncate text-xs font-medium text-slate-100">anchor_face.mov</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[11px] uppercase tracking-wide text-slate-400">Voice</p>
                        <p className="truncate text-xs font-medium text-slate-100">urdu_voiceover.wav</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="border-b border-slate-800/60 bg-slate-950/40">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold sm:text-2xl">Built for production newsrooms & creators</h2>
                <p className="mt-1 text-sm text-slate-300">Everything you need to go from raw footage to publish-ready lip-sync videos.</p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature Cards */}
            </div>
          </div>
        </section>

        {/* ADDITIONAL SECTIONS */}
        {/* You can add pricing, workflow, or other sections here */}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/70 bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} LipSyncMaker AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-200">Privacy</a>
            <a href="#" className="hover:text-slate-200">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
