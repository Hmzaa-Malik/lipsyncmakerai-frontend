// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

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
              <span className="text-[11px] text-slate-400">
                AI Lip-Sync Video Studio
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <a href="#features" className="hover:text-slate-50">
              Features
            </a>
            <a href="#workflow" className="hover:text-slate-50">
              Workflow
            </a>
            <a href="#pricing" className="hover:text-slate-50">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign in
            </Button>
            <Button
              size="sm"
              className="bg-violet-500 hover:bg-violet-400 px-4 sm:px-6"
            >
              Launch Studio
            </Button>
          </div>
        </div>
      </header>

      {/* PAGE BODY */}
      <main className="flex-1">
        {/* HERO */}
        <section className="relative border-b border-slate-800/60">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="space-y-6">
              <Badge className="bg-violet-600/80 text-xs">
                New • AI Lip-Sync Studio Beta
              </Badge>

              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Turn any voice into
                <span className="bg-gradient-to-r from-violet-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
                  {" "}
                  studio-grade lip-sync video
                </span>
                .
              </h1>

              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                Upload a face video, drop in any voice, and LipSyncMaker AI
                handles the lip motion, timing, and realism for you. Designed
                for newsrooms, YouTubers, and serious creators.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button className="bg-violet-500 px-6 text-sm font-medium hover:bg-violet-400">
                  Start free – 10 videos
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-700 bg-slate-900/70 text-slate-100 hover:bg-slate-900"
                >
                  Watch 60s demo
                </Button>
              </div>

              <div className="grid max-w-xl grid-cols-3 gap-3 pt-4 text-xs text-slate-300 sm:text-sm">
                <div>
                  <p className="font-semibold text-slate-50">4K-ready</p>
                  <p className="text-slate-400">Up to 4K exports, no watermarks on paid plans.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-50">Multi-language</p>
                  <p className="text-slate-400">English + Urdu voices fully supported.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-50">API first</p>
                  <p className="text-slate-400">Integrate into your newsroom or app.</p>
                </div>
              </div>
            </div>

            {/* HERO RIGHT – mock video panel */}
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
                      <span className="font-medium text-slate-100">
                        Lip-Sync Preview
                      </span>
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
                        98% sync
                      </span>
                    </div>
                    <Separator className="bg-slate-800" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <p className="text-[11px] uppercase tracking-wide text-slate-400">
                          Video
                        </p>
                        <p className="truncate text-xs font-medium text-slate-100">
                          anchor_face.mov
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[11px] uppercase tracking-wide text-slate-400">
                          Voice
                        </p>
                        <p className="truncate text-xs font-medium text-slate-100">
                          urdu_voiceover.wav
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="border-b border-slate-800/60 bg-slate-950/40"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold sm:text-2xl">
                  Built for production newsrooms & creators
                </h2>
                <p className="mt-1 text-sm text-slate-300">
                  Everything you need to go from raw footage to publish-ready
                  lip-sync videos.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Script-first workflow",
                  body: "Write or paste your script, generate voice in English or Urdu, and auto-sync to your anchor video.",
                },
                {
                  title: "Batch processing",
                  body: "Queue multiple clips, promos, or news segments and let the GPU pipeline process in the background.",
                },
                {
                  title: "Fine-tuned control",
                  body: "Adjust speed, expression intensity, and lip-sync strictness for each scene.",
                },
                {
                  title: "Cloud or on-prem",
                  body: "Use our hosted GPUs, or point jobs to your own RunPod / AWS / bare-metal cluster.",
                },
                {
                  title: "Audit trail",
                  body: "Full history of renders with versioning and metadata for editorial compliance.",
                },
                {
                  title: "Team workspaces",
                  body: "Invite producers, editors, and voice artists into the same secure workspace.",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="border-slate-800 bg-slate-950/60"
                >
                  <CardContent className="space-y-2 p-4 sm:p-5">
                    <p className="text-sm font-semibold text-slate-50">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-300 sm:text-sm">
                      {item.body}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section id="workflow" className="border-b border-slate-800/60">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h2 className="text-xl font-semibold sm:text-2xl">
              3-step workflow
            </h2>
            <p className="mt-1 text-sm text-slate-300">
              Designed to feel like a studio control room, not a lab tool.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <Card className="border-slate-800 bg-slate-950/70">
                <CardContent className="space-y-2 p-4 sm:p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-violet-400">
                    Step 1
                  </p>
                  <p className="text-sm font-semibold text-slate-50">
                    Upload anchor video
                  </p>
                  <p className="text-xs text-slate-300 sm:text-sm">
                    Upload your face video or news anchor shot. We auto-detect
                    framing and face.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-slate-800 bg-slate-950/70">
                <CardContent className="space-y-2 p-4 sm:p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-violet-400">
                    Step 2
                  </p>
                  <p className="text-sm font-semibold text-slate-50">
                    Add voice or script
                  </p>
                  <p className="text-xs text-slate-300 sm:text-sm">
                    Upload an audio file or type a script. Generate English or
                    Urdu voice in-house.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-slate-800 bg-slate-950/70">
                <CardContent className="space-y-2 p-4 sm:p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-violet-400">
                    Step 3
                  </p>
                  <p className="text-sm font-semibold text-slate-50">
                    Render & publish
                  </p>
                  <p className="text-xs text-slate-300 sm:text-sm">
                    Our GPU pipeline handles lip-sync and export. Download or
                    send directly to your newsroom.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* PRICING CTA */}
        <section id="pricing" className="bg-slate-950/60">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-[2fr,3fr]">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  Start free. Scale only when your usage grows.
                </h2>
                <p className="text-sm text-slate-300">
                  Begin with a free tier for testing. Upgrade to newsroom or
                  studio plans when you are ready for daily production.
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  <li>• Free tier – 10 rendered clips per month</li>
                  <li>• Creator – higher limits for solo creators</li>
                  <li>• Newsroom – custom SLAs, on-prem GPUs, audit logs</li>
                </ul>
              </div>

              <Card className="border-violet-600/60 bg-slate-950/80 shadow-lg shadow-violet-500/30">
                <CardContent className="space-y-4 p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-50">
                        Creator plan
                      </p>
                      <p className="text-xs text-slate-300">
                        For YouTubers & independent studios.
                      </p>
                    </div>
                    <p className="text-2xl font-semibold">
                      $29
                      <span className="text-xs font-normal text-slate-300">
                        /month
                      </span>
                    </p>
                  </div>
                  <Separator className="bg-slate-800" />
                  <ul className="space-y-2 text-xs text-slate-300 sm:text-sm">
                    <li>✔ 200 lip-sync renders / month</li>
                    <li>✔ 4K exports, no watermark</li>
                    <li>✔ Priority GPU queue</li>
                    <li>✔ API access</li>
                  </ul>
                  <Button className="w-full bg-violet-500 hover:bg-violet-400">
                    Upgrade to Creator
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/70 bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} LipSyncMaker AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-200">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-200">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
