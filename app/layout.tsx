// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils"; // shadcn helper

export const metadata: Metadata = {
  title: "LipSyncMaker AI – AI Lip-Sync Video Studio",
  description:
    "Create studio-grade AI lip-sync videos from any voice in minutes. LipSyncMaker AI is your all-in-one AI video studio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50 antialiased"
        )}
      >
        {/* Subtle grid background */}
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.18),_transparent_55%)]" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
